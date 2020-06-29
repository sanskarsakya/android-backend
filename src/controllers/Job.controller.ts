
import { Router, NextFunction, Response, Request } from "express";

// MODELS
import Job from "../model/Job";

// SERVICES
import JobService from '../services/Job.service';

// UTILITIES
import Utilities from "../utilities/utli";
import User from "../model/User";

export class JobController {

    router: Router;

    constructor() {
        this.router = Router();
        this.initRoutes();
    }

    public async get_all(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            let page   = req.query.page as string;
            let limit  = req.query.limit as string;
            let search = req.query.search as string;
            let sort   = req.query.sort as string;
            let order  = req.query.order as string;

            let response = await JobService.get_all(page, limit, search, sort, order);

            return res.status(200).json(response);

        } catch (error) {
            console.log(error.message);
            next({ status: 400, message: error.message });
        }

    }

    public async get_by_id(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            let id       = req.params.id;
            let user_decoded: User = req['user'].data;
            let response = await JobService.get_by_id(user_decoded, id);

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            next({ status: 400, message: error });
        }
    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            let payload = req.body;
            let user_decoded: User = req['user'].data;;
            payload = {...payload, created_by:user_decoded.id};
            
            let response        = await JobService.create(payload);

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            next({ status: 400, message: error });
        }
    }

    public async update(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            let id              = req.params.id;
            let payload: Job = req.body;

            let response = await JobService.update(id, payload);

            return res.status(204).json(response);
        } catch (error) {
            console.log(error);
            next({ status: 400, message: error });
        }
    }
    
    public async delete(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            console.log('job controller : delete')

            let job_id = req.params.id;

            let response = await JobService.delete(job_id);

            return res.status(200).json(response);
        } catch (error) {
            console.log(error.message);
            next({ status: 400, message: error.message });
        }
    }
    
    public async mine(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            console.log('job controller : mine')

            let user_decoded: User = req['user'].data;
            let response = await JobService.mine(user_decoded, req.query.page, req.query.size);

            return res.status(200).json(response);
        } catch (error) {
            console.log(error.message);
            next({ status: 400, message: error.message });
        }
    }
    
    public async apply(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            console.log('job controller : apply')
            let job_id = req.params.id;
            let user_decoded: User = req['user'].data;
            let response = await JobService.apply(user_decoded,job_id);
            
            return res.status(201).json(response);
        } catch (error) {
            console.log(error.message);
            next({ status: 400, message: error.message });
        }
    }
    
    public async applied(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            console.log('job controller : applied')
            let job_id = req.params.id;
            let user_decoded: User = req['user'].data;
            let response = await JobService.applied(user_decoded, job_id);

            return res.status(201).json(response);
        } catch (error) {
            console.log(error.message);
            next({ status: 400, message: error.message });
        }
    }

    public initRoutes() {
        this.router.get('/'             , Utilities.check_auth_allowable    , this.get_all);
        this.router.get('/mine'         , Utilities.check_auth              , this.mine);
        this.router.get('/applied/:id?' , Utilities.check_auth              , this.applied);
        this.router.get('/apply/:id?'   , Utilities.check_auth              , this.apply);
        this.router.get('/:id?'         , Utilities.check_auth_allowable    , this.get_by_id);
        this.router.post('/'            , Utilities.check_auth              , this.create);
        this.router.put('/:id'          , Utilities.check_auth              , this.update);
        this.router.delete('/:id'       , Utilities.check_auth              , this.delete);
    }

}
export default new JobController().router;