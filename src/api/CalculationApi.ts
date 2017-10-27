/**
* Copyright 2017 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* 
*  <http://www.apache.org/licenses/LICENSE-2.0>
* 
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as Models from '../models/models';

@Injectable()
export class CalculationApi {

		private basePath : string = null;
		private defaultHeaders : Headers;
		private withCredentials : boolean;


		constructor(protected http: Http, basePath: string, defaultHeaders : Headers) {
			this.basePath = basePath;
			this.defaultHeaders = defaultHeaders;
			if (this.defaultHeaders.keys().length == 1)
			{
				this.withCredentials = true;
			}
			else
			{
				this.withCredentials = false;
			}
		}

		private extendObj<T1,T2>(objA: any, objB: any) {
			for(let key in objB){
				if(objB.hasOwnProperty(key)){
					objA[key] = objB[key];
				}
			}
			return <T1&T2>objA;
		}

		public getAtIntervals(endTime?: string, expression?: string, sampleInterval?: string, selectedFields?: string, startTime?: string, webId?: string, extraHttpRequestParams?: any) : Observable<Models.PITimedValues>  { 
			return this.getAtIntervalsWithHttpInfo(endTime, expression, sampleInterval, selectedFields, startTime, webId, extraHttpRequestParams)
				.map((response: Response) => {
					try
					{
						return response.json()
					}
					catch(e)
					{
						return {};
					}
				});
		}

		public getAtIntervalsWithHttpInfo(endTime?: string, expression?: string, sampleInterval?: string, selectedFields?: string, startTime?: string, webId?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/calculation/intervals';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((expression !== undefined) && (expression !== null)) {
				queryParameters.set('expression', <any>expression);
			}

			if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
				queryParameters.set('sampleInterval', <any>sampleInterval);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((startTime !== undefined) && (startTime !== null)) {
				queryParameters.set('startTime', <any>startTime);
			}

			if ((webId !== undefined) && (webId !== null)) {
				queryParameters.set('webId', <any>webId);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Get,
				headers: headers,
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getAtRecorded(endTime?: string, expression?: string, selectedFields?: string, startTime?: string, webId?: string, extraHttpRequestParams?: any) : Observable<Models.PITimedValues>  { 
			return this.getAtRecordedWithHttpInfo(endTime, expression, selectedFields, startTime, webId, extraHttpRequestParams)
				.map((response: Response) => {
					try
					{
						return response.json()
					}
					catch(e)
					{
						return {};
					}
				});
		}

		public getAtRecordedWithHttpInfo(endTime?: string, expression?: string, selectedFields?: string, startTime?: string, webId?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/calculation/recorded';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((expression !== undefined) && (expression !== null)) {
				queryParameters.set('expression', <any>expression);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((startTime !== undefined) && (startTime !== null)) {
				queryParameters.set('startTime', <any>startTime);
			}

			if ((webId !== undefined) && (webId !== null)) {
				queryParameters.set('webId', <any>webId);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Get,
				headers: headers,
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getSummary(calculationBasis?: string, endTime?: string, expression?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, webId?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSummaryValue>  { 
			return this.getSummaryWithHttpInfo(calculationBasis, endTime, expression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, webId, extraHttpRequestParams)
				.map((response: Response) => {
					try
					{
						return response.json()
					}
					catch(e)
					{
						return {};
					}
				});
		}

		public getSummaryWithHttpInfo(calculationBasis?: string, endTime?: string, expression?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, webId?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/calculation/summary';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if ((calculationBasis !== undefined) && (calculationBasis !== null)) {
				queryParameters.set('calculationBasis', <any>calculationBasis);
			}

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((expression !== undefined) && (expression !== null)) {
				queryParameters.set('expression', <any>expression);
			}

			if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
				queryParameters.set('sampleInterval', <any>sampleInterval);
			}

			if ((sampleType !== undefined) && (sampleType !== null)) {
				queryParameters.set('sampleType', <any>sampleType);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((startTime !== undefined) && (startTime !== null)) {
				queryParameters.set('startTime', <any>startTime);
			}

			if ((summaryDuration !== undefined) && (summaryDuration !== null)) {
				queryParameters.set('summaryDuration', <any>summaryDuration);
			}

			if ((summaryType !== undefined) && (summaryType !== null)) {
				for (let item of summaryType) {
					queryParameters.append('summaryType', item);
				}
			}

			if ((timeType !== undefined) && (timeType !== null)) {
				queryParameters.set('timeType', <any>timeType);
			}

			if ((webId !== undefined) && (webId !== null)) {
				queryParameters.set('webId', <any>webId);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Get,
				headers: headers,
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getAtTimes(expression?: string, selectedFields?: string, sortOrder?: string, time?: Array<string>, webId?: string, extraHttpRequestParams?: any) : Observable<Models.PITimedValues>  { 
			return this.getAtTimesWithHttpInfo(expression, selectedFields, sortOrder, time, webId, extraHttpRequestParams)
				.map((response: Response) => {
					try
					{
						return response.json()
					}
					catch(e)
					{
						return {};
					}
				});
		}

		public getAtTimesWithHttpInfo(expression?: string, selectedFields?: string, sortOrder?: string, time?: Array<string>, webId?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/calculation/times';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if ((expression !== undefined) && (expression !== null)) {
				queryParameters.set('expression', <any>expression);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((sortOrder !== undefined) && (sortOrder !== null)) {
				queryParameters.set('sortOrder', <any>sortOrder);
			}

			if ((time !== undefined) && (time !== null)) {
				for (let item of time) {
					queryParameters.append('time', item);
				}
			}

			if ((webId !== undefined) && (webId !== null)) {
				queryParameters.set('webId', <any>webId);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Get,
				headers: headers,
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}
}
