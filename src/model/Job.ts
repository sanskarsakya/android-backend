import { Model } from 'objection';

export default class Job extends Model {

    id             : number;
    title          : string;
    description    : string;
    applicant_count: number;
    view_count     : number;
    created_by     : number;
    created_at     : Date;
    modified_at    : Date;
    deleted_at     : Date;
    is_deleted     : boolean;
    has_applied    : boolean;

    static tableName = 'jobs';
}
