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
export class EventFrameApi {

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

		public getByPath(path: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIEventFrame>  { 
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
			const localVarPath = this.basePath + '/eventframes';

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

		public get(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIEventFrame>  { 
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
			const localVarPath = this.basePath + '/eventframes/{webId}'
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

		public update(webId: string, eventFrame: Models.PIEventFrame, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.updateWithHttpInfo(webId, eventFrame, extraHttpRequestParams)
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

		public updateWithHttpInfo(webId: string, eventFrame: Models.PIEventFrame, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling update.');
			}

			if (eventFrame === null || eventFrame === undefined) {
				throw new Error('Required parameter eventFrame was null or undefined when calling update.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Patch,
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
			const localVarPath = this.basePath + '/eventframes/{webId}'
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

		public acknowledge(webId: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.acknowledgeWithHttpInfo(webId, extraHttpRequestParams)
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

		public acknowledgeWithHttpInfo(webId: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/acknowledge'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling acknowledge.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Patch,
				headers: headers,
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getAnnotations(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAnnotation>  { 
			return this.getAnnotationsWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
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

		public getAnnotationsWithHttpInfo(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/annotations'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getAnnotations.');
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

		public createAnnotation(webId: string, annotation: Models.PIAnnotation, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createAnnotationWithHttpInfo(webId, annotation, extraHttpRequestParams)
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

		public createAnnotationWithHttpInfo(webId: string, annotation: Models.PIAnnotation, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/annotations'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createAnnotation.');
			}

			if (annotation === null || annotation === undefined) {
				throw new Error('Required parameter annotation was null or undefined when calling createAnnotation.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(annotation),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getAnnotationById(id: string, webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIAnnotation>  { 
			return this.getAnnotationByIdWithHttpInfo(id, webId, selectedFields, extraHttpRequestParams)
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

		public getAnnotationByIdWithHttpInfo(id: string, webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
				.replace('{' + 'id' + '}', String(id))
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (id === null || id === undefined) {
				throw new Error('Required parameter id was null or undefined when calling getAnnotationById.');
			}

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getAnnotationById.');
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

		public updateAnnotation(id: string, webId: string, annotation: Models.PIAnnotation, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.updateAnnotationWithHttpInfo(id, webId, annotation, extraHttpRequestParams)
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

		public updateAnnotationWithHttpInfo(id: string, webId: string, annotation: Models.PIAnnotation, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
				.replace('{' + 'id' + '}', String(id))
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (id === null || id === undefined) {
				throw new Error('Required parameter id was null or undefined when calling updateAnnotation.');
			}

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling updateAnnotation.');
			}

			if (annotation === null || annotation === undefined) {
				throw new Error('Required parameter annotation was null or undefined when calling updateAnnotation.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Patch,
				headers: headers,
				body: JSON.stringify(annotation),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public deleteAnnotation(id: string, webId: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.deleteAnnotationWithHttpInfo(id, webId, extraHttpRequestParams)
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

		public deleteAnnotationWithHttpInfo(id: string, webId: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
				.replace('{' + 'id' + '}', String(id))
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (id === null || id === undefined) {
				throw new Error('Required parameter id was null or undefined when calling deleteAnnotation.');
			}

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling deleteAnnotation.');
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

		public getAttributes(webId: string, categoryName?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, valueType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsAttribute>  { 
			return this.getAttributesWithHttpInfo(webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, valueType, extraHttpRequestParams)
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

		public getAttributesWithHttpInfo(webId: string, categoryName?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, valueType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/attributes'
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

		public createAttribute(webId: string, attribute: Models.PIAttribute, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createAttributeWithHttpInfo(webId, attribute, extraHttpRequestParams)
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

		public createAttributeWithHttpInfo(webId: string, attribute: Models.PIAttribute, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/attributes'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling createAttribute.');
			}

			if (attribute === null || attribute === undefined) {
				throw new Error('Required parameter attribute was null or undefined when calling createAttribute.');
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

		public captureValues(webId: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.captureValuesWithHttpInfo(webId, extraHttpRequestParams)
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

		public captureValuesWithHttpInfo(webId: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/attributes/capture'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling captureValues.');
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

		public getCategories(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsElementCategory>  { 
			return this.getCategoriesWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
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

		public getCategoriesWithHttpInfo(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/categories'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getCategories.');
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
			const localVarPath = this.basePath + '/eventframes/{webId}/config'
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
			const localVarPath = this.basePath + '/eventframes/{webId}/eventframeattributes'
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
			const localVarPath = this.basePath + '/eventframes/{webId}/eventframes'
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
			const localVarPath = this.basePath + '/eventframes/{webId}/eventframes'
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

		public getReferencedElements(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsElement>  { 
			return this.getReferencedElementsWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
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

		public getReferencedElementsWithHttpInfo(webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/referencedelements'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getReferencedElements.');
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

		public getSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSecurityRights>  { 
			return this.getSecurityWithHttpInfo(webId, userIdentity, forceRefresh, selectedFields, extraHttpRequestParams)
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

		public getSecurityWithHttpInfo(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/security'
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

		public getSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSecurityEntry>  { 
			return this.getSecurityEntriesWithHttpInfo(webId, nameFilter, selectedFields, extraHttpRequestParams)
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

		public getSecurityEntriesWithHttpInfo(webId: string, nameFilter?: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/securityentries'
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

		public createSecurityEntry(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createSecurityEntryWithHttpInfo(webId, securityEntry, applyToChildren, extraHttpRequestParams)
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

		public createSecurityEntryWithHttpInfo(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/securityentries'
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

		public getSecurityEntryByName(name: string, webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PISecurityEntry>  { 
			return this.getSecurityEntryByNameWithHttpInfo(name, webId, selectedFields, extraHttpRequestParams)
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

		public getSecurityEntryByNameWithHttpInfo(name: string, webId: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
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
			const localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
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
			const localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
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

		public getMultiple(asParallel?: boolean, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>, extraHttpRequestParams?: any) : Observable<Models.PIItemsItemEventFrame>  { 
			return this.getMultipleWithHttpInfo(asParallel, includeMode, path, selectedFields, webId, extraHttpRequestParams)
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

		public getMultipleWithHttpInfo(asParallel?: boolean, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/multiple';

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

		public createSearchByAttribute(search: Models.PISearchByAttributeEventFrame, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.createSearchByAttributeWithHttpInfo(search, extraHttpRequestParams)
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

		public createSearchByAttributeWithHttpInfo(search: Models.PISearchByAttributeEventFrame, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/searchbyattribute';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (search === null || search === undefined) {
				throw new Error('Required parameter search was null or undefined when calling createSearchByAttribute.');
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(search),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public executeSearchByAttribute(searchId: string, canBeAcknowledged?: boolean, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, referencedElementNameFilter?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.executeSearchByAttributeWithHttpInfo(searchId, canBeAcknowledged, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, extraHttpRequestParams)
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

		public executeSearchByAttributeWithHttpInfo(searchId: string, canBeAcknowledged?: boolean, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, referencedElementNameFilter?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/eventframes/searchbyattribute/{searchId}'
				.replace('{' + 'searchId' + '}', String(searchId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (searchId === null || searchId === undefined) {
				throw new Error('Required parameter searchId was null or undefined when calling executeSearchByAttribute.');
			}

			if ((canBeAcknowledged !== undefined) && (canBeAcknowledged !== null)) {
				queryParameters.set('canBeAcknowledged', <any>canBeAcknowledged);
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
