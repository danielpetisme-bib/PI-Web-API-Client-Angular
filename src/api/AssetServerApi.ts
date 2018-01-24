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
export class AssetServerApi {

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

		public list(selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAssetServer>  { 
			return this.listWithHttpInfo(selectedFields, webIdType, extraHttpRequestParams)
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

		public listWithHttpInfo(selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

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

		public getByName(name: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIAssetServer>  { 
			return this.getByNameWithHttpInfo(name, selectedFields, webIdType, extraHttpRequestParams)
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

		public getByNameWithHttpInfo(name: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (name === null || name === undefined) {
				throw new Error('Required parameter name was null or undefined when calling getByName.');
			}

			if ((name !== undefined) && (name !== null)) {
				queryParameters.set('name', <any>name);
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

		public getByPath(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIAssetServer>  { 
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
			const localVarPath = this.basePath + '/assetservers';

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

		public get(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIAssetServer>  { 
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
			const localVarPath = this.basePath + '/assetservers/{webId}'
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

		public getAnalysisRulePlugIns(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAnalysisRulePlugIn>  { 
			return this.getAnalysisRulePlugInsWithHttpInfo(webId, selectedFields, webIdType, extraHttpRequestParams)
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

		public getAnalysisRulePlugInsWithHttpInfo(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/analysisruleplugins'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getAnalysisRulePlugIns.');
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

		public getDatabases(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAssetDatabase>  { 
			return this.getDatabasesWithHttpInfo(webId, selectedFields, webIdType, extraHttpRequestParams)
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

		public getDatabasesWithHttpInfo(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/assetdatabases'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getDatabases.');
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

		public createAssetDatabase(webId: string, database: Models.PIAssetDatabase, webIdType?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createAssetDatabaseWithHttpInfo(webId, database, webIdType, extraHttpRequestParams)
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

		public createAssetDatabaseWithHttpInfo(webId: string, database: Models.PIAssetDatabase, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/assetdatabases'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createAssetDatabase.');
			}

			if (database === null || database === undefined) {
				throw new Error('Required parameter database was null or undefined when calling createAssetDatabase.');
			}

			if ((webIdType !== undefined) && (webIdType !== null)) {
				queryParameters.set('webIdType', <any>webIdType);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(database),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getSecurity(webId: string, securityItem: Array<string>, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSecurityRights>  { 
			return this.getSecurityWithHttpInfo(webId, securityItem, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams)
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

		public getSecurityWithHttpInfo(webId: string, securityItem: Array<string>, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/security'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
			}

			if (securityItem === null || securityItem === undefined) {
				throw new Error('Required parameter securityItem was null or undefined when calling getSecurity.');
			}

			if (userIdentity === null || userIdentity === undefined) {
				throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
			}

			if ((securityItem !== undefined) && (securityItem !== null)) {
				for (let item of securityItem) {
					queryParameters.append('securityItem', item);
				}
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

		public getSecurityEntries(webId: string, nameFilter?: string, securityItem?: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSecurityEntry>  { 
			return this.getSecurityEntriesWithHttpInfo(webId, nameFilter, securityItem, selectedFields, webIdType, extraHttpRequestParams)
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

		public getSecurityEntriesWithHttpInfo(webId: string, nameFilter?: string, securityItem?: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/securityentries'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
			}

			if ((nameFilter !== undefined) && (nameFilter !== null)) {
				queryParameters.set('nameFilter', <any>nameFilter);
			}

			if ((securityItem !== undefined) && (securityItem !== null)) {
				queryParameters.set('securityItem', <any>securityItem);
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

		public createSecurityEntry(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, securityItem?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createSecurityEntryWithHttpInfo(webId, securityEntry, applyToChildren, securityItem, webIdType, extraHttpRequestParams)
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

		public createSecurityEntryWithHttpInfo(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, securityItem?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/securityentries'
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

			if ((securityItem !== undefined) && (securityItem !== null)) {
				queryParameters.set('securityItem', <any>securityItem);
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

		public getSecurityEntryByName(name: string, webId: string, securityItem?: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PISecurityEntry>  { 
			return this.getSecurityEntryByNameWithHttpInfo(name, webId, securityItem, selectedFields, webIdType, extraHttpRequestParams)
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

		public getSecurityEntryByNameWithHttpInfo(name: string, webId: string, securityItem?: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/securityentries/{name}'
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

			if ((securityItem !== undefined) && (securityItem !== null)) {
				queryParameters.set('securityItem', <any>securityItem);
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

		public updateSecurityEntry(name: string, webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, securityItem?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.updateSecurityEntryWithHttpInfo(name, webId, securityEntry, applyToChildren, securityItem, extraHttpRequestParams)
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

		public updateSecurityEntryWithHttpInfo(name: string, webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, securityItem?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/securityentries/{name}'
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

			if ((securityItem !== undefined) && (securityItem !== null)) {
				queryParameters.set('securityItem', <any>securityItem);
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

		public deleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean, securityItem?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.deleteSecurityEntryWithHttpInfo(name, webId, applyToChildren, securityItem, extraHttpRequestParams)
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

		public deleteSecurityEntryWithHttpInfo(name: string, webId: string, applyToChildren?: boolean, securityItem?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/securityentries/{name}'
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

			if ((securityItem !== undefined) && (securityItem !== null)) {
				queryParameters.set('securityItem', <any>securityItem);
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

		public getSecurityIdentities(webId: string, field?: string, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSecurityIdentity>  { 
			return this.getSecurityIdentitiesWithHttpInfo(webId, field, maxCount, query, selectedFields, sortField, sortOrder, webIdType, extraHttpRequestParams)
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

		public getSecurityIdentitiesWithHttpInfo(webId: string, field?: string, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/securityidentities'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getSecurityIdentities.');
			}

			if ((field !== undefined) && (field !== null)) {
				queryParameters.set('field', <any>field);
			}

			if ((maxCount !== undefined) && (maxCount !== null)) {
				queryParameters.set('maxCount', <any>maxCount);
			}

			if ((query !== undefined) && (query !== null)) {
				queryParameters.set('query', <any>query);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((sortField !== undefined) && (sortField !== null)) {
				queryParameters.set('sortField', <any>sortField);
			}

			if ((sortOrder !== undefined) && (sortOrder !== null)) {
				queryParameters.set('sortOrder', <any>sortOrder);
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

		public createSecurityIdentity(webId: string, securityIdentity: Models.PISecurityIdentity, webIdType?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createSecurityIdentityWithHttpInfo(webId, securityIdentity, webIdType, extraHttpRequestParams)
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

		public createSecurityIdentityWithHttpInfo(webId: string, securityIdentity: Models.PISecurityIdentity, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/securityidentities'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createSecurityIdentity.');
			}

			if (securityIdentity === null || securityIdentity === undefined) {
				throw new Error('Required parameter securityIdentity was null or undefined when calling createSecurityIdentity.');
			}

			if ((webIdType !== undefined) && (webIdType !== null)) {
				queryParameters.set('webIdType', <any>webIdType);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(securityIdentity),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getSecurityIdentitiesForUser(webId: string, userIdentity: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSecurityIdentity>  { 
			return this.getSecurityIdentitiesForUserWithHttpInfo(webId, userIdentity, selectedFields, webIdType, extraHttpRequestParams)
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

		public getSecurityIdentitiesForUserWithHttpInfo(webId: string, userIdentity: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/securityidentities'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getSecurityIdentitiesForUser.');
			}

			if (userIdentity === null || userIdentity === undefined) {
				throw new Error('Required parameter userIdentity was null or undefined when calling getSecurityIdentitiesForUser.');
			}

			if ((userIdentity !== undefined) && (userIdentity !== null)) {
				queryParameters.set('userIdentity', <any>userIdentity);
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

		public getSecurityMappings(webId: string, field?: string, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSecurityMapping>  { 
			return this.getSecurityMappingsWithHttpInfo(webId, field, maxCount, query, selectedFields, sortField, sortOrder, webIdType, extraHttpRequestParams)
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

		public getSecurityMappingsWithHttpInfo(webId: string, field?: string, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/securitymappings'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getSecurityMappings.');
			}

			if ((field !== undefined) && (field !== null)) {
				queryParameters.set('field', <any>field);
			}

			if ((maxCount !== undefined) && (maxCount !== null)) {
				queryParameters.set('maxCount', <any>maxCount);
			}

			if ((query !== undefined) && (query !== null)) {
				queryParameters.set('query', <any>query);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((sortField !== undefined) && (sortField !== null)) {
				queryParameters.set('sortField', <any>sortField);
			}

			if ((sortOrder !== undefined) && (sortOrder !== null)) {
				queryParameters.set('sortOrder', <any>sortOrder);
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

		public createSecurityMapping(webId: string, securityMapping: Models.PISecurityMapping, webIdType?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createSecurityMappingWithHttpInfo(webId, securityMapping, webIdType, extraHttpRequestParams)
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

		public createSecurityMappingWithHttpInfo(webId: string, securityMapping: Models.PISecurityMapping, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/securitymappings'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createSecurityMapping.');
			}

			if (securityMapping === null || securityMapping === undefined) {
				throw new Error('Required parameter securityMapping was null or undefined when calling createSecurityMapping.');
			}

			if ((webIdType !== undefined) && (webIdType !== null)) {
				queryParameters.set('webIdType', <any>webIdType);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(securityMapping),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getTimeRulePlugIns(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsTimeRulePlugIn>  { 
			return this.getTimeRulePlugInsWithHttpInfo(webId, selectedFields, webIdType, extraHttpRequestParams)
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

		public getTimeRulePlugInsWithHttpInfo(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/timeruleplugins'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getTimeRulePlugIns.');
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

		public getUnitClasses(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsUnitClass>  { 
			return this.getUnitClassesWithHttpInfo(webId, selectedFields, webIdType, extraHttpRequestParams)
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

		public getUnitClassesWithHttpInfo(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/unitclasses'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getUnitClasses.');
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

		public createUnitClass(webId: string, unitClass: Models.PIUnitClass, webIdType?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createUnitClassWithHttpInfo(webId, unitClass, webIdType, extraHttpRequestParams)
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

		public createUnitClassWithHttpInfo(webId: string, unitClass: Models.PIUnitClass, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetservers/{webId}/unitclasses'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createUnitClass.');
			}

			if (unitClass === null || unitClass === undefined) {
				throw new Error('Required parameter unitClass was null or undefined when calling createUnitClass.');
			}

			if ((webIdType !== undefined) && (webIdType !== null)) {
				queryParameters.set('webIdType', <any>webIdType);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(unitClass),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}
}
