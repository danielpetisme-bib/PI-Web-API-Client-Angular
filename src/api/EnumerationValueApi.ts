/**
* Copyright 2018 OSIsoft, LLC
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
export class EnumerationValueApi {

		private basePath : string = null;
		private defaultHeaders : Headers;
		private withCredentials : boolean;


		constructor(protected http: Http, basePath: string, defaultHeaders : Headers) {
			this.basePath = basePath;
			this.defaultHeaders = defaultHeaders;
			if (this.defaultHeaders.keys().length == 2)
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

		public getByPath(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIEnumerationValue>  { 
			return this.getByPathWithHttpInfo(path, selectedFields, webIdType, extraHttpRequestParams)
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

		public getByPathWithHttpInfo(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/enumerationvalues';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (path === null || path === undefined) {
				throw new Error('Required parameter path was null or undefined when calling getByPath.');
			}

			if ((path !== undefined) && (path !== null)) {
				queryParameters.set('path', <any>path);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((webIdType !== undefined) && (webIdType !== null)) {
				queryParameters.set('webIdType', <any>webIdType);
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

		public get(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIEnumerationValue>  { 
			return this.getWithHttpInfo(webId, selectedFields, webIdType, extraHttpRequestParams)
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

		public getWithHttpInfo(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/enumerationvalues/{webId}'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling get.');
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((webIdType !== undefined) && (webIdType !== null)) {
				queryParameters.set('webIdType', <any>webIdType);
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

		public updateEnumerationValue(webId: string, enumerationValue: Models.PIEnumerationValue, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.updateEnumerationValueWithHttpInfo(webId, enumerationValue, extraHttpRequestParams)
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

		public updateEnumerationValueWithHttpInfo(webId: string, enumerationValue: Models.PIEnumerationValue, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/enumerationvalues/{webId}'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling updateEnumerationValue.');
			}

			if (enumerationValue === null || enumerationValue === undefined) {
				throw new Error('Required parameter enumerationValue was null or undefined when calling updateEnumerationValue.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Patch,
				headers: headers,
				body: JSON.stringify(enumerationValue),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public deleteEnumerationValue(webId: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.deleteEnumerationValueWithHttpInfo(webId, extraHttpRequestParams)
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

		public deleteEnumerationValueWithHttpInfo(webId: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/enumerationvalues/{webId}'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling deleteEnumerationValue.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Delete,
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
