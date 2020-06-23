
import { Model } from 'objection';

export default class Applicant extends Model {

    id         : number;
    job_id     : number;
    user_id    : number;
    created_at : Date;
    modified_at: Date;
    deleted_at : Date;
    is_deleted : boolean;
    
    static tableName = 'applicants';

    

}