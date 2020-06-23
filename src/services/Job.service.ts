
import Job from "../model/Job";

import BaseService from './Base.service';
import User from "../model/User";
import Applicant from "../model/Applicant";

import { raw } from "objection";

export class JobService {

    constructor() { }

    public async get_all(page: string, limit: string) {
        return BaseService._get_all_paged({ model: Job, page: page, limit: limit });
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

        return mine
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
            .where({
                job_id: jobId,
                user_id: user.id
            });

        return applicants;
    }


}
export default new JobService();