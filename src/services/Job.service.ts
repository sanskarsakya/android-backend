
import Job from "../model/Job";

import BaseService from './Base.service';
import User from "../model/User";
import Applicant from "../model/Applicant";

import { raw } from "objection";

export class JobService {

    constructor() { }

    public async get_all(page: string, limit: string, search: string, sort:string, order:string) {
        // return BaseService._get_all_paged({ model: Job, page: page, limit: limit, search: search, fields: 'title' });

        let paged = BaseService._notmaliza_page(page, limit);

        let query = Job
            .query()
            .page(paged.offset, paged.limit);

        if (search != undefined) {
            query.orWhere('title', 'like', '%' + search + '%');
        }

        if (sort != undefined) {
            if (order != undefined) {
                query.orderBy(sort, order);
            }
        }

        let dataset = await query;

        let response = {
            data: dataset.results,
            paged: {
                page: page,
                pageSize: limit,
                rowCount: dataset.total,
                pageCount: Math.ceil(dataset.total / parseInt(limit))
            }
        };

        return response;
    }

    public async get_by_id(user: User, id: string) {

        let job_found = Job
            .query();

        if (user) {
            job_found.leftJoin('applicants', (join) => {
                join
                    .on('applicants.job_id', '=', 'jobs.id')
                    .andOn(raw('applicants.user_id = ?', user.id));
            })
        }

        let response = await job_found
            .select(
                'jobs.id',
                'jobs.title',
                'jobs.description',
                'applicants.id as has_applied'
            )
            .first()
            .where({
                'jobs.id': id
            })

        response.has_applied = response.has_applied ? true : false;

        return response;
    }

    public async create(payload: Job) {
        return BaseService._create(Job, payload);
    }

    public async update(id: string, payload: Job) {
        return BaseService._update(Job, id, payload, ['title', 'description'])
    }

    public async delete(id: string) {
        return BaseService._soft_delete(Job, id)
    }

    public async mine(user: User, page, limit) {

        let paged = BaseService._notmaliza_page(page, limit);

        let mine = await Job
            .query()
            .where({
                created_by: user.id
            })
            .page(paged.offset, paged.limit);

        return {
            data: mine.results,
            paged: {

            }
        }
    }

    public async apply(user: User, jobId) {

        let apply = await Applicant
            .query()
            .insert({
                job_id: jobId,
                user_id: user.id
            });

        let update_job_applicant_count = await Job
            .query()
            .increment('applicant_count', 1);

        return apply;
    }

    public async applied(user: User, jobId) {

        let applicants = await Applicant
            .query()
            .select('users.*')
            .leftJoin('users', (join) => {
                join
                    .on('applicants.user_id', '=', 'users.id')
            })
            .where({
                job_id: jobId,
            });

        let response_mapped = applicants.map((data: any) => {
            let { password_digest, ...mapped } = data;
            return mapped;
        })

        let response = {
            data: applicants,
            paged: {

            }
        }

        return response;
    }


}
export default new JobService();