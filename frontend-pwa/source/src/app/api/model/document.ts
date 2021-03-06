/**
 * jobs.ch
 * Reverse Engineering of the jobs.ch public API
 *
 * The version of the OpenAPI document: 1.0.0-oas3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { WorkExperience } from './workExperience';
import { DocumentImages } from './documentImages';


export interface Document { 
    age?: number;
    job_id?: string;
    title?: string;
    company_name?: string;
    preview?: string;
    work_experience?: Array<WorkExperience>;
    initial_publication_date?: string;
    publication_date?: string;
    place?: string;
    zipcode?: string;
    employment_position_ids?: Array<number>;
    industry_id?: number;
    is_active?: boolean;
    is_paid?: boolean;
    template_text?: string;
    template_lead_text?: string;
    template_contact_address?: string;
    employment_grades?: Array<number>;
    images?: DocumentImages;
}

