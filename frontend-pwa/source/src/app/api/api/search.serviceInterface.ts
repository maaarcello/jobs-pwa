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
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { Document } from '../model/models';
import { FilterResult } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface SearchServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * Serach for a job with filters
     * 
     * @param location City, Canton or Region
     * @param rows Status values that need to be considered for filter
     * @param query Job Title, Position, Company
     * @param employmentGradeMin Value from 0 to 100 in Pensum (%)
     * @param employmentGradeMax Value from 0 to 100 in Pensum (%)
     */
    getByFilters(location?: string, rows?: number, query?: string, employmentGradeMin?: number, employmentGradeMax?: number, extraHttpRequestParams?: any): Observable<FilterResult>;

    /**
     * Serach for a job with filters
     * 
     * @param jobId 
     */
    getJob(jobId: string, extraHttpRequestParams?: any): Observable<Document>;

}
