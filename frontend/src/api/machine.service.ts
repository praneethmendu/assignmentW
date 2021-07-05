/**
 * EWD DB interface
 * This is a prototype server.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: praneethmendu@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from './encoder';

import { Observable }                                        from 'rxjs';

import { Machine } from '../model/machine';

import { BASE_PATH, COLLECTION_FORMATS }                     from './variables';
import { Configuration }                                     from './configuration';


@Injectable()
export class MachineService {

    protected basePath = 'http://localhost:4200/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

        constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * machine by id
     * get machine by customerId
     * @param customerId ID of machine to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public machineById(customerId: number, observe?: 'body', reportProgress?: boolean): Observable<Machine>;
    public machineById(customerId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Machine>>;
    public machineById(customerId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Machine>>;
    public machineById(customerId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling machineById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Machine>('get',`${this.basePath}/machine/${encodeURIComponent(String(customerId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * query all machines
     * query all available machines with filters like customer and server status
     * @param customer filter based on customer&#x27;s name
     * @param drainSensorOn filter based on drain sensor status
     * @param pump5On filter based on pump 5 status
     * @param pump10On filter based on pump 10 status
     * @param waterTemp filter based on water temp value
     * @param waterLevel filter based on water temp value
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public queryMachines(customer?: string, drainSensorOn?: boolean, pump5On?: boolean, pump10On?: boolean, waterTemp?: any, waterLevel?: any, observe?: 'body', reportProgress?: boolean): Observable<Array<Machine>>;
    public queryMachines(customer?: string, drainSensorOn?: boolean, pump5On?: boolean, pump10On?: boolean, waterTemp?: any, waterLevel?: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Machine>>>;
    public queryMachines(customer?: string, drainSensorOn?: boolean, pump5On?: boolean, pump10On?: boolean, waterTemp?: any, waterLevel?: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Machine>>>;
    public queryMachines(customer?: string, drainSensorOn?: boolean, pump5On?: boolean, pump10On?: boolean, waterTemp?: any, waterLevel?: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {







        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (customer !== undefined && customer !== null) {
            queryParameters = queryParameters.set('customer', <any>customer);
        }
        if (drainSensorOn !== undefined && drainSensorOn !== null) {
            queryParameters = queryParameters.set('drainSensorOn', <any>drainSensorOn);
        }
        if (pump5On !== undefined && pump5On !== null) {
            queryParameters = queryParameters.set('pump5On', <any>pump5On);
        }
        if (pump10On !== undefined && pump10On !== null) {
            queryParameters = queryParameters.set('pump10On', <any>pump10On);
        }
        if (waterTemp !== undefined && waterTemp !== null) {
            queryParameters = queryParameters.set('waterTemp', <any>waterTemp);
        }
        if (waterLevel !== undefined && waterLevel !== null) {
            queryParameters = queryParameters.set('waterLevel', <any>waterLevel);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Machine>>('get',`${this.basePath}/query`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}