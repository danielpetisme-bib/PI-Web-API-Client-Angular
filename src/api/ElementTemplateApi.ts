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
export class ElementTemplateApi {

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

		public getByPath(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIElementTemplate>  { 
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
			const localVarPath = this.basePath + '/elementtemplates';

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

		public get(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIElementTemplate>  { 
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
			const localVarPath = this.basePath + '/elementtemplates/{webId}'
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

		public update(webId: string, template: Models.PIElementTemplate, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.updateWithHttpInfo(webId, template, extraHttpRequestParams)
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

		public updateWithHttpInfo(webId: string, template: Models.PIElementTemplate, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elementtemplates/{webId}'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling update.');
			}

			if (template === null || template === undefined) {
				throw new Error('Required parameter template was null or undefined when calling update.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Patch,
				headers: headers,
				body: JSON.stringify(template),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public delete(webId: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.deleteWithHttpInfo(webId, extraHttpRequestParams)
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

		public deleteWithHttpInfo(webId: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elementtemplates/{webId}'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling delete.');
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

		public getAnalysisTemplates(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAnalysisTemplate>  { 
			return this.getAnalysisTemplatesWithHttpInfo(webId, selectedFields, webIdType, extraHttpRequestParams)
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

		public getAnalysisTemplatesWithHttpInfo(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elementtemplates/{webId}/analysistemplates'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getAnalysisTemplates.');
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

		public getAttributeTemplates(webId: string, selectedFields?: string, showInherited?: boolean, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAttributeTemplate>  { 
			return this.getAttributeTemplatesWithHttpInfo(webId, selectedFields, showInherited, webIdType, extraHttpRequestParams)
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

		public getAttributeTemplatesWithHttpInfo(webId: string, selectedFields?: string, showInherited?: boolean, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elementtemplates/{webId}/attributetemplates'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getAttributeTemplates.');
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((showInherited !== undefined) && (showInherited !== null)) {
				queryParameters.set('showInherited', <any>showInherited);
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

		public createAttributeTemplate(webId: string, template: Models.PIAttributeTemplate, webIdType?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createAttributeTemplateWithHttpInfo(webId, template, webIdType, extraHttpRequestParams)
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

		public createAttributeTemplateWithHttpInfo(webId: string, template: Models.PIAttributeTemplate, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elementtemplates/{webId}/attributetemplates'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createAttributeTemplate.');
			}

			if (template === null || template === undefined) {
				throw new Error('Required parameter template was null or undefined when calling createAttributeTemplate.');
			}

			if ((webIdType !== undefined) && (webIdType !== null)) {
				queryParameters.set('webIdType', <any>webIdType);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(template),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getCategories(webId: string, selectedFields?: string, showInherited?: boolean, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsElementCategory>  { 
			return this.getCategoriesWithHttpInfo(webId, selectedFields, showInherited, webIdType, extraHttpRequestParams)
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

		public getCategoriesWithHttpInfo(webId: string, selectedFields?: string, showInherited?: boolean, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elementtemplates/{webId}/categories'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getCategories.');
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((showInherited !== undefined) && (showInherited !== null)) {
				queryParameters.set('showInherited', <any>showInherited);
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

		public getSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSecurityRights>  { 
			return this.getSecurityWithHttpInfo(webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams)
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

		public getSecurityWithHttpInfo(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elementtemplates/{webId}/security'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
			}

			if (userIdentity === null || userIdentity === undefined) {
				throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
			}

			if ((userIdentity !== undefined) && (userIdentity !== null)) {
				for (let item of userIdentity) {
					queryParameters.append('userIdentity', item);
				}
			}

			if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
				queryParameters.set('forceRefresh', <any>forceRefresh);
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

		public getSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSecurityEntry>  { 
			return this.getSecurityEntriesWithHttpInfo(webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams)
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

		public getSecurityEntriesWithHttpInfo(webId: string, nameFilter?: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
			}

			if ((nameFilter !== undefined) && (nameFilter !== null)) {
				queryParameters.set('nameFilter', <any>nameFilter);
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

		public createSecurityEntry(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, webIdType?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createSecurityEntryWithHttpInfo(webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams)
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

		public createSecurityEntryWithHttpInfo(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
			}

			if (securityEntry === null || securityEntry === undefined) {
				throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
			}

			if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
				queryParameters.set('applyToChildren', <any>applyToChildren);
			}

			if ((webIdType !== undefined) && (webIdType !== null)) {
				queryParameters.set('webIdType', <any>webIdType);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(securityEntry),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getSecurityEntryByName(name: string, webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSecurityEntry>  { 
			return this.getSecurityEntryByNameWithHttpInfo(name, webId, selectedFields, webIdType, extraHttpRequestParams)
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

		public getSecurityEntryByNameWithHttpInfo(name: string, webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries/{name}'
				.replace('{' + 'name' + '}', String(name))
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (name === null || name === undefined) {
				throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
			}

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
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

		public updateSecurityEntry(name: string, webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.updateSecurityEntryWithHttpInfo(name, webId, securityEntry, applyToChildren, extraHttpRequestParams)
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

		public updateSecurityEntryWithHttpInfo(name: string, webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries/{name}'
				.replace('{' + 'name' + '}', String(name))
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (name === null || name === undefined) {
				throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
			}

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
			}

			if (securityEntry === null || securityEntry === undefined) {
				throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
			}

			if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
				queryParameters.set('applyToChildren', <any>applyToChildren);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Put,
				headers: headers,
				body: JSON.stringify(securityEntry),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public deleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.deleteSecurityEntryWithHttpInfo(name, webId, applyToChildren, extraHttpRequestParams)
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

		public deleteSecurityEntryWithHttpInfo(name: string, webId: string, applyToChildren?: boolean, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries/{name}'
				.replace('{' + 'name' + '}', String(name))
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (name === null || name === undefined) {
				throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
			}

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
			}

			if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
				queryParameters.set('applyToChildren', <any>applyToChildren);
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
