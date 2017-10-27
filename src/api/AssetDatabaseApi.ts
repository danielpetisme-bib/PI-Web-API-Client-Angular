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
export class AssetDatabaseApi {

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

		public getByPath(path: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIAssetDatabase>  { 
			return this.getByPathWithHttpInfo(path, selectedFields, extraHttpRequestParams)
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

		public getByPathWithHttpInfo(path: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases';

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

		public get(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIAssetDatabase>  { 
			return this.getWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
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

		public getWithHttpInfo(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling get.');
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
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

		public update(webId: string, database: Models.PIAssetDatabase, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.updateWithHttpInfo(webId, database, extraHttpRequestParams)
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

		public updateWithHttpInfo(webId: string, database: Models.PIAssetDatabase, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling update.');
			}

			if (database === null || database === undefined) {
				throw new Error('Required parameter database was null or undefined when calling update.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Patch,
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
			const localVarPath = this.basePath + '/assetdatabases/{webId}'
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

		public findAnalyses(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, extraHttpRequestParams?: any) : Observable<Models.PIItemsAnalysis>  { 
			return this.findAnalysesWithHttpInfo(webId, field, maxCount, query, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams)
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

		public findAnalysesWithHttpInfo(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/analyses'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling findAnalyses.');
			}

			if (field === null || field === undefined) {
				throw new Error('Required parameter field was null or undefined when calling findAnalyses.');
			}

			if ((field !== undefined) && (field !== null)) {
				for (let item of field) {
					queryParameters.append('field', item);
				}
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

			if ((startIndex !== undefined) && (startIndex !== null)) {
				queryParameters.set('startIndex', <any>startIndex);
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

		public getAnalysisCategories(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAnalysisCategory>  { 
			return this.getAnalysisCategoriesWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
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

		public getAnalysisCategoriesWithHttpInfo(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/analysiscategories'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getAnalysisCategories.');
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
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

		public createAnalysisCategory(webId: string, analysisCategory: Models.PIAnalysisCategory, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createAnalysisCategoryWithHttpInfo(webId, analysisCategory, extraHttpRequestParams)
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

		public createAnalysisCategoryWithHttpInfo(webId: string, analysisCategory: Models.PIAnalysisCategory, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/analysiscategories'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createAnalysisCategory.');
			}

			if (analysisCategory === null || analysisCategory === undefined) {
				throw new Error('Required parameter analysisCategory was null or undefined when calling createAnalysisCategory.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(analysisCategory),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getAnalysisTemplates(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAnalysisTemplate>  { 
			return this.getAnalysisTemplatesWithHttpInfo(webId, field, maxCount, query, selectedFields, sortField, sortOrder, extraHttpRequestParams)
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

		public getAnalysisTemplatesWithHttpInfo(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/analysistemplates'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getAnalysisTemplates.');
			}

			if (field === null || field === undefined) {
				throw new Error('Required parameter field was null or undefined when calling getAnalysisTemplates.');
			}

			if ((field !== undefined) && (field !== null)) {
				for (let item of field) {
					queryParameters.append('field', item);
				}
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

		public createAnalysisTemplate(webId: string, template: Models.PIAnalysisTemplate, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createAnalysisTemplateWithHttpInfo(webId, template, extraHttpRequestParams)
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

		public createAnalysisTemplateWithHttpInfo(webId: string, template: Models.PIAnalysisTemplate, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/analysistemplates'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createAnalysisTemplate.');
			}

			if (template === null || template === undefined) {
				throw new Error('Required parameter template was null or undefined when calling createAnalysisTemplate.');
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

		public getAttributeCategories(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAttributeCategory>  { 
			return this.getAttributeCategoriesWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
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

		public getAttributeCategoriesWithHttpInfo(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/attributecategories'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getAttributeCategories.');
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
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

		public createAttributeCategory(webId: string, attributeCategory: Models.PIAttributeCategory, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createAttributeCategoryWithHttpInfo(webId, attributeCategory, extraHttpRequestParams)
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

		public createAttributeCategoryWithHttpInfo(webId: string, attributeCategory: Models.PIAttributeCategory, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/attributecategories'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createAttributeCategory.');
			}

			if (attributeCategory === null || attributeCategory === undefined) {
				throw new Error('Required parameter attributeCategory was null or undefined when calling createAttributeCategory.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(attributeCategory),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public findElementAttributes(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, elementCategory?: string, elementDescriptionFilter?: string, elementNameFilter?: string, elementTemplate?: string, elementType?: string, maxCount?: number, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, extraHttpRequestParams?: any) : Observable<Models.PIItemsAttribute>  { 
			return this.findElementAttributesWithHttpInfo(webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, elementCategory, elementDescriptionFilter, elementNameFilter, elementTemplate, elementType, maxCount, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams)
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

		public findElementAttributesWithHttpInfo(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, elementCategory?: string, elementDescriptionFilter?: string, elementNameFilter?: string, elementTemplate?: string, elementType?: string, maxCount?: number, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/elementattributes'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling findElementAttributes.');
			}

			if ((attributeCategory !== undefined) && (attributeCategory !== null)) {
				queryParameters.set('attributeCategory', <any>attributeCategory);
			}

			if ((attributeDescriptionFilter !== undefined) && (attributeDescriptionFilter !== null)) {
				queryParameters.set('attributeDescriptionFilter', <any>attributeDescriptionFilter);
			}

			if ((attributeNameFilter !== undefined) && (attributeNameFilter !== null)) {
				queryParameters.set('attributeNameFilter', <any>attributeNameFilter);
			}

			if ((attributeType !== undefined) && (attributeType !== null)) {
				queryParameters.set('attributeType', <any>attributeType);
			}

			if ((elementCategory !== undefined) && (elementCategory !== null)) {
				queryParameters.set('elementCategory', <any>elementCategory);
			}

			if ((elementDescriptionFilter !== undefined) && (elementDescriptionFilter !== null)) {
				queryParameters.set('elementDescriptionFilter', <any>elementDescriptionFilter);
			}

			if ((elementNameFilter !== undefined) && (elementNameFilter !== null)) {
				queryParameters.set('elementNameFilter', <any>elementNameFilter);
			}

			if ((elementTemplate !== undefined) && (elementTemplate !== null)) {
				queryParameters.set('elementTemplate', <any>elementTemplate);
			}

			if ((elementType !== undefined) && (elementType !== null)) {
				queryParameters.set('elementType', <any>elementType);
			}

			if ((maxCount !== undefined) && (maxCount !== null)) {
				queryParameters.set('maxCount', <any>maxCount);
			}

			if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
				queryParameters.set('searchFullHierarchy', <any>searchFullHierarchy);
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

			if ((startIndex !== undefined) && (startIndex !== null)) {
				queryParameters.set('startIndex', <any>startIndex);
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

		public getElementCategories(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsElementCategory>  { 
			return this.getElementCategoriesWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
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

		public getElementCategoriesWithHttpInfo(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/elementcategories'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getElementCategories.');
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
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

		public createElementCategory(webId: string, elementCategory: Models.PIElementCategory, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createElementCategoryWithHttpInfo(webId, elementCategory, extraHttpRequestParams)
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

		public createElementCategoryWithHttpInfo(webId: string, elementCategory: Models.PIElementCategory, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/elementcategories'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createElementCategory.');
			}

			if (elementCategory === null || elementCategory === undefined) {
				throw new Error('Required parameter elementCategory was null or undefined when calling createElementCategory.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(elementCategory),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getElements(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsElement>  { 
			return this.getElementsWithHttpInfo(webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, templateName, extraHttpRequestParams)
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

		public getElementsWithHttpInfo(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/elements'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getElements.');
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
			}

			if ((descriptionFilter !== undefined) && (descriptionFilter !== null)) {
				queryParameters.set('descriptionFilter', <any>descriptionFilter);
			}

			if ((elementType !== undefined) && (elementType !== null)) {
				queryParameters.set('elementType', <any>elementType);
			}

			if ((maxCount !== undefined) && (maxCount !== null)) {
				queryParameters.set('maxCount', <any>maxCount);
			}

			if ((nameFilter !== undefined) && (nameFilter !== null)) {
				queryParameters.set('nameFilter', <any>nameFilter);
			}

			if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
				queryParameters.set('searchFullHierarchy', <any>searchFullHierarchy);
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

			if ((startIndex !== undefined) && (startIndex !== null)) {
				queryParameters.set('startIndex', <any>startIndex);
			}

			if ((templateName !== undefined) && (templateName !== null)) {
				queryParameters.set('templateName', <any>templateName);
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

		public createElement(webId: string, element: Models.PIElement, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createElementWithHttpInfo(webId, element, extraHttpRequestParams)
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

		public createElementWithHttpInfo(webId: string, element: Models.PIElement, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/elements'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createElement.');
			}

			if (element === null || element === undefined) {
				throw new Error('Required parameter element was null or undefined when calling createElement.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(element),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getElementTemplates(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsElementTemplate>  { 
			return this.getElementTemplatesWithHttpInfo(webId, field, maxCount, query, selectedFields, sortField, sortOrder, extraHttpRequestParams)
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

		public getElementTemplatesWithHttpInfo(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/elementtemplates'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getElementTemplates.');
			}

			if (field === null || field === undefined) {
				throw new Error('Required parameter field was null or undefined when calling getElementTemplates.');
			}

			if ((field !== undefined) && (field !== null)) {
				for (let item of field) {
					queryParameters.append('field', item);
				}
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

		public createElementTemplate(webId: string, template: Models.PIElementTemplate, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createElementTemplateWithHttpInfo(webId, template, extraHttpRequestParams)
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

		public createElementTemplateWithHttpInfo(webId: string, template: Models.PIElementTemplate, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/elementtemplates'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createElementTemplate.');
			}

			if (template === null || template === undefined) {
				throw new Error('Required parameter template was null or undefined when calling createElementTemplate.');
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

		public getEnumerationSets(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsEnumerationSet>  { 
			return this.getEnumerationSetsWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
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

		public getEnumerationSetsWithHttpInfo(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/enumerationsets'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getEnumerationSets.');
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
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

		public createEnumerationSet(webId: string, enumerationSet: Models.PIEnumerationSet, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createEnumerationSetWithHttpInfo(webId, enumerationSet, extraHttpRequestParams)
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

		public createEnumerationSetWithHttpInfo(webId: string, enumerationSet: Models.PIEnumerationSet, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/enumerationsets'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createEnumerationSet.');
			}

			if (enumerationSet === null || enumerationSet === undefined) {
				throw new Error('Required parameter enumerationSet was null or undefined when calling createEnumerationSet.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(enumerationSet),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public findEventFrameAttributes(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, endTime?: string, eventFrameCategory?: string, eventFrameDescriptionFilter?: string, eventFrameNameFilter?: string, eventFrameTemplate?: string, maxCount?: number, referencedElementNameFilter?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAttribute>  { 
			return this.findEventFrameAttributesWithHttpInfo(webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, endTime, eventFrameCategory, eventFrameDescriptionFilter, eventFrameNameFilter, eventFrameTemplate, maxCount, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, sortField, sortOrder, startIndex, startTime, extraHttpRequestParams)
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

		public findEventFrameAttributesWithHttpInfo(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, endTime?: string, eventFrameCategory?: string, eventFrameDescriptionFilter?: string, eventFrameNameFilter?: string, eventFrameTemplate?: string, maxCount?: number, referencedElementNameFilter?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/eventframeattributes'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling findEventFrameAttributes.');
			}

			if ((attributeCategory !== undefined) && (attributeCategory !== null)) {
				queryParameters.set('attributeCategory', <any>attributeCategory);
			}

			if ((attributeDescriptionFilter !== undefined) && (attributeDescriptionFilter !== null)) {
				queryParameters.set('attributeDescriptionFilter', <any>attributeDescriptionFilter);
			}

			if ((attributeNameFilter !== undefined) && (attributeNameFilter !== null)) {
				queryParameters.set('attributeNameFilter', <any>attributeNameFilter);
			}

			if ((attributeType !== undefined) && (attributeType !== null)) {
				queryParameters.set('attributeType', <any>attributeType);
			}

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((eventFrameCategory !== undefined) && (eventFrameCategory !== null)) {
				queryParameters.set('eventFrameCategory', <any>eventFrameCategory);
			}

			if ((eventFrameDescriptionFilter !== undefined) && (eventFrameDescriptionFilter !== null)) {
				queryParameters.set('eventFrameDescriptionFilter', <any>eventFrameDescriptionFilter);
			}

			if ((eventFrameNameFilter !== undefined) && (eventFrameNameFilter !== null)) {
				queryParameters.set('eventFrameNameFilter', <any>eventFrameNameFilter);
			}

			if ((eventFrameTemplate !== undefined) && (eventFrameTemplate !== null)) {
				queryParameters.set('eventFrameTemplate', <any>eventFrameTemplate);
			}

			if ((maxCount !== undefined) && (maxCount !== null)) {
				queryParameters.set('maxCount', <any>maxCount);
			}

			if ((referencedElementNameFilter !== undefined) && (referencedElementNameFilter !== null)) {
				queryParameters.set('referencedElementNameFilter', <any>referencedElementNameFilter);
			}

			if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
				queryParameters.set('searchFullHierarchy', <any>searchFullHierarchy);
			}

			if ((searchMode !== undefined) && (searchMode !== null)) {
				queryParameters.set('searchMode', <any>searchMode);
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

			if ((startIndex !== undefined) && (startIndex !== null)) {
				queryParameters.set('startIndex', <any>startIndex);
			}

			if ((startTime !== undefined) && (startTime !== null)) {
				queryParameters.set('startTime', <any>startTime);
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

		public getEventFrames(webId: string, canBeAcknowledged?: boolean, categoryName?: string, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, referencedElementNameFilter?: string, referencedElementTemplateName?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, templateName?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsEventFrame>  { 
			return this.getEventFramesWithHttpInfo(webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, referencedElementTemplateName, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, extraHttpRequestParams)
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

		public getEventFramesWithHttpInfo(webId: string, canBeAcknowledged?: boolean, categoryName?: string, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, referencedElementNameFilter?: string, referencedElementTemplateName?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, templateName?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/eventframes'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getEventFrames.');
			}

			if ((canBeAcknowledged !== undefined) && (canBeAcknowledged !== null)) {
				queryParameters.set('canBeAcknowledged', <any>canBeAcknowledged);
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
			}

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((isAcknowledged !== undefined) && (isAcknowledged !== null)) {
				queryParameters.set('isAcknowledged', <any>isAcknowledged);
			}

			if ((maxCount !== undefined) && (maxCount !== null)) {
				queryParameters.set('maxCount', <any>maxCount);
			}

			if ((nameFilter !== undefined) && (nameFilter !== null)) {
				queryParameters.set('nameFilter', <any>nameFilter);
			}

			if ((referencedElementNameFilter !== undefined) && (referencedElementNameFilter !== null)) {
				queryParameters.set('referencedElementNameFilter', <any>referencedElementNameFilter);
			}

			if ((referencedElementTemplateName !== undefined) && (referencedElementTemplateName !== null)) {
				queryParameters.set('referencedElementTemplateName', <any>referencedElementTemplateName);
			}

			if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
				queryParameters.set('searchFullHierarchy', <any>searchFullHierarchy);
			}

			if ((searchMode !== undefined) && (searchMode !== null)) {
				queryParameters.set('searchMode', <any>searchMode);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((severity !== undefined) && (severity !== null)) {
				for (let item of severity) {
					queryParameters.append('severity', item);
				}
			}

			if ((sortField !== undefined) && (sortField !== null)) {
				queryParameters.set('sortField', <any>sortField);
			}

			if ((sortOrder !== undefined) && (sortOrder !== null)) {
				queryParameters.set('sortOrder', <any>sortOrder);
			}

			if ((startIndex !== undefined) && (startIndex !== null)) {
				queryParameters.set('startIndex', <any>startIndex);
			}

			if ((startTime !== undefined) && (startTime !== null)) {
				queryParameters.set('startTime', <any>startTime);
			}

			if ((templateName !== undefined) && (templateName !== null)) {
				queryParameters.set('templateName', <any>templateName);
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

		public createEventFrame(webId: string, eventFrame: Models.PIEventFrame, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createEventFrameWithHttpInfo(webId, eventFrame, extraHttpRequestParams)
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

		public createEventFrameWithHttpInfo(webId: string, eventFrame: Models.PIEventFrame, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/eventframes'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createEventFrame.');
			}

			if (eventFrame === null || eventFrame === undefined) {
				throw new Error('Required parameter eventFrame was null or undefined when calling createEventFrame.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(eventFrame),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public export(webId: string, endTime?: string, exportMode?: Array<string>, startTime?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.exportWithHttpInfo(webId, endTime, exportMode, startTime, extraHttpRequestParams)
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

		public exportWithHttpInfo(webId: string, endTime?: string, exportMode?: Array<string>, startTime?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/export'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling export.');
			}

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((exportMode !== undefined) && (exportMode !== null)) {
				for (let item of exportMode) {
					queryParameters.append('exportMode', item);
				}
			}

			if ((startTime !== undefined) && (startTime !== null)) {
				queryParameters.set('startTime', <any>startTime);
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

		public import(webId: string, importMode?: Array<string>, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.importWithHttpInfo(webId, importMode, extraHttpRequestParams)
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

		public importWithHttpInfo(webId: string, importMode?: Array<string>, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/import'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling importData.');
			}

			if ((importMode !== undefined) && (importMode !== null)) {
				for (let item of importMode) {
					queryParameters.append('importMode', item);
				}
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getReferencedElements(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsElement>  { 
			return this.getReferencedElementsWithHttpInfo(webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, selectedFields, sortField, sortOrder, startIndex, templateName, extraHttpRequestParams)
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

		public getReferencedElementsWithHttpInfo(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getReferencedElements.');
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
			}

			if ((descriptionFilter !== undefined) && (descriptionFilter !== null)) {
				queryParameters.set('descriptionFilter', <any>descriptionFilter);
			}

			if ((elementType !== undefined) && (elementType !== null)) {
				queryParameters.set('elementType', <any>elementType);
			}

			if ((maxCount !== undefined) && (maxCount !== null)) {
				queryParameters.set('maxCount', <any>maxCount);
			}

			if ((nameFilter !== undefined) && (nameFilter !== null)) {
				queryParameters.set('nameFilter', <any>nameFilter);
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

			if ((startIndex !== undefined) && (startIndex !== null)) {
				queryParameters.set('startIndex', <any>startIndex);
			}

			if ((templateName !== undefined) && (templateName !== null)) {
				queryParameters.set('templateName', <any>templateName);
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

		public addReferencedElement(webId: string, referencedElementWebId: Array<string>, referenceType?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.addReferencedElementWithHttpInfo(webId, referencedElementWebId, referenceType, extraHttpRequestParams)
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

		public addReferencedElementWithHttpInfo(webId: string, referencedElementWebId: Array<string>, referenceType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling addReferencedElement.');
			}

			if (referencedElementWebId === null || referencedElementWebId === undefined) {
				throw new Error('Required parameter referencedElementWebId was null or undefined when calling addReferencedElement.');
			}

			if ((referencedElementWebId !== undefined) && (referencedElementWebId !== null)) {
				for (let item of referencedElementWebId) {
					queryParameters.append('referencedElementWebId', item);
				}
			}

			if ((referenceType !== undefined) && (referenceType !== null)) {
				queryParameters.set('referenceType', <any>referenceType);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public removeReferencedElement(webId: string, referencedElementWebId: Array<string>, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.removeReferencedElementWithHttpInfo(webId, referencedElementWebId, extraHttpRequestParams)
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

		public removeReferencedElementWithHttpInfo(webId: string, referencedElementWebId: Array<string>, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling removeReferencedElement.');
			}

			if (referencedElementWebId === null || referencedElementWebId === undefined) {
				throw new Error('Required parameter referencedElementWebId was null or undefined when calling removeReferencedElement.');
			}

			if ((referencedElementWebId !== undefined) && (referencedElementWebId !== null)) {
				for (let item of referencedElementWebId) {
					queryParameters.append('referencedElementWebId', item);
				}
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

		public getSecurity(webId: string, securityItem: Array<string>, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSecurityRights>  { 
			return this.getSecurityWithHttpInfo(webId, securityItem, userIdentity, forceRefresh, selectedFields, extraHttpRequestParams)
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

		public getSecurityWithHttpInfo(webId: string, securityItem: Array<string>, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/security'
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

		public getSecurityEntries(webId: string, nameFilter?: string, securityItem?: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSecurityEntry>  { 
			return this.getSecurityEntriesWithHttpInfo(webId, nameFilter, securityItem, selectedFields, extraHttpRequestParams)
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

		public getSecurityEntriesWithHttpInfo(webId: string, nameFilter?: string, securityItem?: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries'
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

		public createSecurityEntry(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, securityItem?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createSecurityEntryWithHttpInfo(webId, securityEntry, applyToChildren, securityItem, extraHttpRequestParams)
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

		public createSecurityEntryWithHttpInfo(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, securityItem?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries'
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

		public getSecurityEntryByName(name: string, webId: string, securityItem?: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PISecurityEntry>  { 
			return this.getSecurityEntryByNameWithHttpInfo(name, webId, securityItem, selectedFields, extraHttpRequestParams)
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

		public getSecurityEntryByNameWithHttpInfo(name: string, webId: string, securityItem?: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
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
			const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
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
			const localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
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

		public getTableCategories(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsTableCategory>  { 
			return this.getTableCategoriesWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
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

		public getTableCategoriesWithHttpInfo(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/tablecategories'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getTableCategories.');
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
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

		public createTableCategory(webId: string, tableCategory: Models.PITableCategory, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createTableCategoryWithHttpInfo(webId, tableCategory, extraHttpRequestParams)
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

		public createTableCategoryWithHttpInfo(webId: string, tableCategory: Models.PITableCategory, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/tablecategories'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createTableCategory.');
			}

			if (tableCategory === null || tableCategory === undefined) {
				throw new Error('Required parameter tableCategory was null or undefined when calling createTableCategory.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(tableCategory),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getTables(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsTable>  { 
			return this.getTablesWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
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

		public getTablesWithHttpInfo(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/tables'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getTables.');
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
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

		public createTable(webId: string, table: Models.PITable, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createTableWithHttpInfo(webId, table, extraHttpRequestParams)
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

		public createTableWithHttpInfo(webId: string, table: Models.PITable, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/assetdatabases/{webId}/tables'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createTable.');
			}

			if (table === null || table === undefined) {
				throw new Error('Required parameter table was null or undefined when calling createTable.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(table),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}
}
