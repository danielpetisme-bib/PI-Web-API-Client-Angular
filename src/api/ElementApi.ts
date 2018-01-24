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
export class ElementApi {

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

		public getByPath(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIElement>  { 
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
			const localVarPath = this.basePath + '/elements';

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

		public get(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIElement>  { 
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
			const localVarPath = this.basePath + '/elements/{webId}'
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

		public update(webId: string, element: Models.PIElement, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.updateWithHttpInfo(webId, element, extraHttpRequestParams)
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

		public updateWithHttpInfo(webId: string, element: Models.PIElement, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/{webId}'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling update.');
			}

			if (element === null || element === undefined) {
				throw new Error('Required parameter element was null or undefined when calling update.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Patch,
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
			const localVarPath = this.basePath + '/elements/{webId}'
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

		public getAnalyses(webId: string, maxCount?: number, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAnalysis>  { 
			return this.getAnalysesWithHttpInfo(webId, maxCount, selectedFields, sortField, sortOrder, startIndex, webIdType, extraHttpRequestParams)
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

		public getAnalysesWithHttpInfo(webId: string, maxCount?: number, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/{webId}/analyses'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getAnalyses.');
			}

			if ((maxCount !== undefined) && (maxCount !== null)) {
				queryParameters.set('maxCount', <any>maxCount);
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

		public createAnalysis(webId: string, analysis: Models.PIAnalysis, webIdType?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createAnalysisWithHttpInfo(webId, analysis, webIdType, extraHttpRequestParams)
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

		public createAnalysisWithHttpInfo(webId: string, analysis: Models.PIAnalysis, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/{webId}/analyses'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createAnalysis.');
			}

			if (analysis === null || analysis === undefined) {
				throw new Error('Required parameter analysis was null or undefined when calling createAnalysis.');
			}

			if ((webIdType !== undefined) && (webIdType !== null)) {
				queryParameters.set('webIdType', <any>webIdType);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(analysis),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getAttributes(webId: string, categoryName?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, valueType?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAttribute>  { 
			return this.getAttributesWithHttpInfo(webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, valueType, webIdType, extraHttpRequestParams)
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

		public getAttributesWithHttpInfo(webId: string, categoryName?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, valueType?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/{webId}/attributes'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getAttributes.');
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
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

			if ((showExcluded !== undefined) && (showExcluded !== null)) {
				queryParameters.set('showExcluded', <any>showExcluded);
			}

			if ((showHidden !== undefined) && (showHidden !== null)) {
				queryParameters.set('showHidden', <any>showHidden);
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

			if ((valueType !== undefined) && (valueType !== null)) {
				queryParameters.set('valueType', <any>valueType);
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

		public createAttribute(webId: string, attribute: Models.PIAttribute, webIdType?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createAttributeWithHttpInfo(webId, attribute, webIdType, extraHttpRequestParams)
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

		public createAttributeWithHttpInfo(webId: string, attribute: Models.PIAttribute, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/{webId}/attributes'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createAttribute.');
			}

			if (attribute === null || attribute === undefined) {
				throw new Error('Required parameter attribute was null or undefined when calling createAttribute.');
			}

			if ((webIdType !== undefined) && (webIdType !== null)) {
				queryParameters.set('webIdType', <any>webIdType);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(attribute),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getCategories(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsElementCategory>  { 
			return this.getCategoriesWithHttpInfo(webId, selectedFields, webIdType, extraHttpRequestParams)
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

		public getCategoriesWithHttpInfo(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/{webId}/categories'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getCategories.');
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

		public createConfig(webId: string, includeChildElements?: boolean, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createConfigWithHttpInfo(webId, includeChildElements, extraHttpRequestParams)
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

		public createConfigWithHttpInfo(webId: string, includeChildElements?: boolean, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/{webId}/config'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createConfig.');
			}

			if ((includeChildElements !== undefined) && (includeChildElements !== null)) {
				queryParameters.set('includeChildElements', <any>includeChildElements);
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

		public findElementAttributes(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, elementCategory?: string, elementDescriptionFilter?: string, elementNameFilter?: string, elementTemplate?: string, elementType?: string, maxCount?: number, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAttribute>  { 
			return this.findElementAttributesWithHttpInfo(webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, elementCategory, elementDescriptionFilter, elementNameFilter, elementTemplate, elementType, maxCount, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, webIdType, extraHttpRequestParams)
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

		public findElementAttributesWithHttpInfo(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, elementCategory?: string, elementDescriptionFilter?: string, elementNameFilter?: string, elementTemplate?: string, elementType?: string, maxCount?: number, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/{webId}/elementattributes'
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

		public getElements(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsElement>  { 
			return this.getElementsWithHttpInfo(webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, templateName, webIdType, extraHttpRequestParams)
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

		public getElementsWithHttpInfo(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/{webId}/elements'
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

		public createElement(webId: string, element: Models.PIElement, webIdType?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createElementWithHttpInfo(webId, element, webIdType, extraHttpRequestParams)
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

		public createElementWithHttpInfo(webId: string, element: Models.PIElement, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/{webId}/elements'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createElement.');
			}

			if (element === null || element === undefined) {
				throw new Error('Required parameter element was null or undefined when calling createElement.');
			}

			if ((webIdType !== undefined) && (webIdType !== null)) {
				queryParameters.set('webIdType', <any>webIdType);
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

		public getEventFrames(webId: string, canBeAcknowledged?: boolean, categoryName?: string, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, templateName?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsEventFrame>  { 
			return this.getEventFramesWithHttpInfo(webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, webIdType, extraHttpRequestParams)
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

		public getEventFramesWithHttpInfo(webId: string, canBeAcknowledged?: boolean, categoryName?: string, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, templateName?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/{webId}/eventframes'
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

		public getReferencedElements(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsElement>  { 
			return this.getReferencedElementsWithHttpInfo(webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, selectedFields, sortField, sortOrder, startIndex, templateName, webIdType, extraHttpRequestParams)
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

		public getReferencedElementsWithHttpInfo(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/{webId}/referencedelements'
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
			const localVarPath = this.basePath + '/elements/{webId}/referencedelements'
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
			const localVarPath = this.basePath + '/elements/{webId}/referencedelements'
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
			const localVarPath = this.basePath + '/elements/{webId}/security'
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
			const localVarPath = this.basePath + '/elements/{webId}/securityentries'
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
			const localVarPath = this.basePath + '/elements/{webId}/securityentries'
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

		public getSecurityEntryByName(name: string, webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PISecurityEntry>  { 
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
			const localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
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
			const localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
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
			const localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
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

		public getMultiple(asParallel?: boolean, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsItemElement>  { 
			return this.getMultipleWithHttpInfo(asParallel, includeMode, path, selectedFields, webId, webIdType, extraHttpRequestParams)
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

		public getMultipleWithHttpInfo(asParallel?: boolean, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/multiple';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if ((asParallel !== undefined) && (asParallel !== null)) {
				queryParameters.set('asParallel', <any>asParallel);
			}

			if ((includeMode !== undefined) && (includeMode !== null)) {
				queryParameters.set('includeMode', <any>includeMode);
			}

			if ((path !== undefined) && (path !== null)) {
				for (let item of path) {
					queryParameters.append('path', item);
				}
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((webId !== undefined) && (webId !== null)) {
				for (let item of webId) {
					queryParameters.append('webId', item);
				}
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

		public getElementsQuery(databaseWebId?: string, maxCount?: number, query?: string, selectedFields?: string, startIndex?: number, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsElement>  { 
			return this.getElementsQueryWithHttpInfo(databaseWebId, maxCount, query, selectedFields, startIndex, webIdType, extraHttpRequestParams)
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

		public getElementsQueryWithHttpInfo(databaseWebId?: string, maxCount?: number, query?: string, selectedFields?: string, startIndex?: number, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/search';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if ((databaseWebId !== undefined) && (databaseWebId !== null)) {
				queryParameters.set('databaseWebId', <any>databaseWebId);
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

			if ((startIndex !== undefined) && (startIndex !== null)) {
				queryParameters.set('startIndex', <any>startIndex);
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

		public createSearchByAttribute(query: Models.PISearchByAttribute, noResults?: boolean, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsElement>  { 
			return this.createSearchByAttributeWithHttpInfo(query, noResults, webIdType, extraHttpRequestParams)
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

		public createSearchByAttributeWithHttpInfo(query: Models.PISearchByAttribute, noResults?: boolean, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/searchbyattribute';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (query === null || query === undefined) {
				throw new Error('Required parameter query was null or undefined when calling createSearchByAttribute.');
			}

			if ((noResults !== undefined) && (noResults !== null)) {
				queryParameters.set('noResults', <any>noResults);
			}

			if ((webIdType !== undefined) && (webIdType !== null)) {
				queryParameters.set('webIdType', <any>webIdType);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(query),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public executeSearchByAttribute(searchId: string, categoryName?: string, descriptionFilter?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsElement>  { 
			return this.executeSearchByAttributeWithHttpInfo(searchId, categoryName, descriptionFilter, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, webIdType, extraHttpRequestParams)
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

		public executeSearchByAttributeWithHttpInfo(searchId: string, categoryName?: string, descriptionFilter?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/elements/searchbyattribute/{searchId}'
				.replace('{' + 'searchId' + '}', String(searchId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (searchId === null || searchId === undefined) {
				throw new Error('Required parameter searchId was null or undefined when calling executeSearchByAttribute.');
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
			}

			if ((descriptionFilter !== undefined) && (descriptionFilter !== null)) {
				queryParameters.set('descriptionFilter', <any>descriptionFilter);
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
}
