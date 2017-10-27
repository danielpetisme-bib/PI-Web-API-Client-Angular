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
export class StreamSetApi {

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

		public getChannel(webId: string, categoryName?: string, includeInitialValues?: boolean, nameFilter?: string, searchFullHierarchy?: boolean, showExcluded?: boolean, showHidden?: boolean, templateName?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValue>  { 
			return this.getChannelWithHttpInfo(webId, categoryName, includeInitialValues, nameFilter, searchFullHierarchy, showExcluded, showHidden, templateName, extraHttpRequestParams)
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

		public getChannelWithHttpInfo(webId: string, categoryName?: string, includeInitialValues?: boolean, nameFilter?: string, searchFullHierarchy?: boolean, showExcluded?: boolean, showHidden?: boolean, templateName?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/{webId}/channel'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getChannel.');
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
			}

			if ((includeInitialValues !== undefined) && (includeInitialValues !== null)) {
				queryParameters.set('includeInitialValues', <any>includeInitialValues);
			}

			if ((nameFilter !== undefined) && (nameFilter !== null)) {
				queryParameters.set('nameFilter', <any>nameFilter);
			}

			if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
				queryParameters.set('searchFullHierarchy', <any>searchFullHierarchy);
			}

			if ((showExcluded !== undefined) && (showExcluded !== null)) {
				queryParameters.set('showExcluded', <any>showExcluded);
			}

			if ((showHidden !== undefined) && (showHidden !== null)) {
				queryParameters.set('showHidden', <any>showHidden);
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

		public getEnd(webId: string, categoryName?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, templateName?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValue>  { 
			return this.getEndWithHttpInfo(webId, categoryName, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, templateName, extraHttpRequestParams)
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

		public getEndWithHttpInfo(webId: string, categoryName?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, templateName?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/{webId}/end'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getEnd.');
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
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

		public getInterpolated(webId: string, categoryName?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValues>  { 
			return this.getInterpolatedWithHttpInfo(webId, categoryName, endTime, filterExpression, includeFilteredValues, interval, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, startTime, templateName, timeZone, extraHttpRequestParams)
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

		public getInterpolatedWithHttpInfo(webId: string, categoryName?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/{webId}/interpolated'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getInterpolated.');
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
			}

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((filterExpression !== undefined) && (filterExpression !== null)) {
				queryParameters.set('filterExpression', <any>filterExpression);
			}

			if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
				queryParameters.set('includeFilteredValues', <any>includeFilteredValues);
			}

			if ((interval !== undefined) && (interval !== null)) {
				queryParameters.set('interval', <any>interval);
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

			if ((startTime !== undefined) && (startTime !== null)) {
				queryParameters.set('startTime', <any>startTime);
			}

			if ((templateName !== undefined) && (templateName !== null)) {
				queryParameters.set('templateName', <any>templateName);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public getInterpolatedAtTimes(webId: string, time: Array<string>, categoryName?: string, filterExpression?: string, includeFilteredValues?: boolean, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortOrder?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValues>  { 
			return this.getInterpolatedAtTimesWithHttpInfo(webId, time, categoryName, filterExpression, includeFilteredValues, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortOrder, templateName, timeZone, extraHttpRequestParams)
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

		public getInterpolatedAtTimesWithHttpInfo(webId: string, time: Array<string>, categoryName?: string, filterExpression?: string, includeFilteredValues?: boolean, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortOrder?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/{webId}/interpolatedattimes'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAtTimes.');
			}

			if (time === null || time === undefined) {
				throw new Error('Required parameter time was null or undefined when calling getInterpolatedAtTimes.');
			}

			if ((time !== undefined) && (time !== null)) {
				for (let item of time) {
					queryParameters.append('time', item);
				}
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
			}

			if ((filterExpression !== undefined) && (filterExpression !== null)) {
				queryParameters.set('filterExpression', <any>filterExpression);
			}

			if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
				queryParameters.set('includeFilteredValues', <any>includeFilteredValues);
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

			if ((sortOrder !== undefined) && (sortOrder !== null)) {
				queryParameters.set('sortOrder', <any>sortOrder);
			}

			if ((templateName !== undefined) && (templateName !== null)) {
				queryParameters.set('templateName', <any>templateName);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public getPlot(webId: string, categoryName?: string, endTime?: string, intervals?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValues>  { 
			return this.getPlotWithHttpInfo(webId, categoryName, endTime, intervals, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, startTime, templateName, timeZone, extraHttpRequestParams)
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

		public getPlotWithHttpInfo(webId: string, categoryName?: string, endTime?: string, intervals?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/{webId}/plot'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getPlot.');
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
			}

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((intervals !== undefined) && (intervals !== null)) {
				queryParameters.set('intervals', <any>intervals);
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

			if ((startTime !== undefined) && (startTime !== null)) {
				queryParameters.set('startTime', <any>startTime);
			}

			if ((templateName !== undefined) && (templateName !== null)) {
				queryParameters.set('templateName', <any>templateName);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public getRecorded(webId: string, boundaryType?: string, categoryName?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValues>  { 
			return this.getRecordedWithHttpInfo(webId, boundaryType, categoryName, endTime, filterExpression, includeFilteredValues, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, startTime, templateName, timeZone, extraHttpRequestParams)
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

		public getRecordedWithHttpInfo(webId: string, boundaryType?: string, categoryName?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/{webId}/recorded'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getRecorded.');
			}

			if ((boundaryType !== undefined) && (boundaryType !== null)) {
				queryParameters.set('boundaryType', <any>boundaryType);
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
			}

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((filterExpression !== undefined) && (filterExpression !== null)) {
				queryParameters.set('filterExpression', <any>filterExpression);
			}

			if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
				queryParameters.set('includeFilteredValues', <any>includeFilteredValues);
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

			if ((startTime !== undefined) && (startTime !== null)) {
				queryParameters.set('startTime', <any>startTime);
			}

			if ((templateName !== undefined) && (templateName !== null)) {
				queryParameters.set('templateName', <any>templateName);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public updateValues(webId: string, values: Array<Models.PIStreamValues>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsItemsSubstatus>  { 
			return this.updateValuesWithHttpInfo(webId, values, bufferOption, updateOption, extraHttpRequestParams)
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

		public updateValuesWithHttpInfo(webId: string, values: Array<Models.PIStreamValues>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/{webId}/recorded'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling updateValues.');
			}

			if (values === null || values === undefined) {
				throw new Error('Required parameter values was null or undefined when calling updateValues.');
			}

			if ((bufferOption !== undefined) && (bufferOption !== null)) {
				queryParameters.set('bufferOption', <any>bufferOption);
			}

			if ((updateOption !== undefined) && (updateOption !== null)) {
				queryParameters.set('updateOption', <any>updateOption);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(values),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getRecordedAtTime(webId: string, time: string, categoryName?: string, nameFilter?: string, retrievalMode?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, templateName?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValues>  { 
			return this.getRecordedAtTimeWithHttpInfo(webId, time, categoryName, nameFilter, retrievalMode, searchFullHierarchy, selectedFields, showExcluded, showHidden, templateName, timeZone, extraHttpRequestParams)
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

		public getRecordedAtTimeWithHttpInfo(webId: string, time: string, categoryName?: string, nameFilter?: string, retrievalMode?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, templateName?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/{webId}/recordedattime'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTime.');
			}

			if (time === null || time === undefined) {
				throw new Error('Required parameter time was null or undefined when calling getRecordedAtTime.');
			}

			if ((time !== undefined) && (time !== null)) {
				queryParameters.set('time', <any>time);
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
			}

			if ((nameFilter !== undefined) && (nameFilter !== null)) {
				queryParameters.set('nameFilter', <any>nameFilter);
			}

			if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
				queryParameters.set('retrievalMode', <any>retrievalMode);
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

			if ((templateName !== undefined) && (templateName !== null)) {
				queryParameters.set('templateName', <any>templateName);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public getRecordedAtTimes(webId: string, time: Array<string>, categoryName?: string, nameFilter?: string, retrievalMode?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortOrder?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValues>  { 
			return this.getRecordedAtTimesWithHttpInfo(webId, time, categoryName, nameFilter, retrievalMode, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortOrder, templateName, timeZone, extraHttpRequestParams)
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

		public getRecordedAtTimesWithHttpInfo(webId: string, time: Array<string>, categoryName?: string, nameFilter?: string, retrievalMode?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortOrder?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/{webId}/recordedattimes'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimes.');
			}

			if (time === null || time === undefined) {
				throw new Error('Required parameter time was null or undefined when calling getRecordedAtTimes.');
			}

			if ((time !== undefined) && (time !== null)) {
				for (let item of time) {
					queryParameters.append('time', item);
				}
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
			}

			if ((nameFilter !== undefined) && (nameFilter !== null)) {
				queryParameters.set('nameFilter', <any>nameFilter);
			}

			if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
				queryParameters.set('retrievalMode', <any>retrievalMode);
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

			if ((sortOrder !== undefined) && (sortOrder !== null)) {
				queryParameters.set('sortOrder', <any>sortOrder);
			}

			if ((templateName !== undefined) && (templateName !== null)) {
				queryParameters.set('templateName', <any>templateName);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public getSummaries(webId: string, calculationBasis?: string, categoryName?: string, endTime?: string, filterExpression?: string, nameFilter?: string, sampleInterval?: string, sampleType?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, templateName?: string, timeType?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamSummaries>  { 
			return this.getSummariesWithHttpInfo(webId, calculationBasis, categoryName, endTime, filterExpression, nameFilter, sampleInterval, sampleType, searchFullHierarchy, selectedFields, showExcluded, showHidden, startTime, summaryDuration, summaryType, templateName, timeType, timeZone, extraHttpRequestParams)
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

		public getSummariesWithHttpInfo(webId: string, calculationBasis?: string, categoryName?: string, endTime?: string, filterExpression?: string, nameFilter?: string, sampleInterval?: string, sampleType?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, templateName?: string, timeType?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/{webId}/summary'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getSummaries.');
			}

			if ((calculationBasis !== undefined) && (calculationBasis !== null)) {
				queryParameters.set('calculationBasis', <any>calculationBasis);
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
			}

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((filterExpression !== undefined) && (filterExpression !== null)) {
				queryParameters.set('filterExpression', <any>filterExpression);
			}

			if ((nameFilter !== undefined) && (nameFilter !== null)) {
				queryParameters.set('nameFilter', <any>nameFilter);
			}

			if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
				queryParameters.set('sampleInterval', <any>sampleInterval);
			}

			if ((sampleType !== undefined) && (sampleType !== null)) {
				queryParameters.set('sampleType', <any>sampleType);
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

			if ((templateName !== undefined) && (templateName !== null)) {
				queryParameters.set('templateName', <any>templateName);
			}

			if ((timeType !== undefined) && (timeType !== null)) {
				queryParameters.set('timeType', <any>timeType);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public getValues(webId: string, categoryName?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, templateName?: string, time?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValue>  { 
			return this.getValuesWithHttpInfo(webId, categoryName, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, templateName, time, timeZone, extraHttpRequestParams)
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

		public getValuesWithHttpInfo(webId: string, categoryName?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, templateName?: string, time?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/{webId}/value'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getValues.');
			}

			if ((categoryName !== undefined) && (categoryName !== null)) {
				queryParameters.set('categoryName', <any>categoryName);
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

			if ((templateName !== undefined) && (templateName !== null)) {
				queryParameters.set('templateName', <any>templateName);
			}

			if ((time !== undefined) && (time !== null)) {
				queryParameters.set('time', <any>time);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public updateValue(webId: string, values: Array<Models.PIStreamValue>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSubstatus>  { 
			return this.updateValueWithHttpInfo(webId, values, bufferOption, updateOption, extraHttpRequestParams)
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

		public updateValueWithHttpInfo(webId: string, values: Array<Models.PIStreamValue>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/{webId}/value'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling updateValue.');
			}

			if (values === null || values === undefined) {
				throw new Error('Required parameter values was null or undefined when calling updateValue.');
			}

			if ((bufferOption !== undefined) && (bufferOption !== null)) {
				queryParameters.set('bufferOption', <any>bufferOption);
			}

			if ((updateOption !== undefined) && (updateOption !== null)) {
				queryParameters.set('updateOption', <any>updateOption);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(values),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getChannelAdHoc(webId: Array<string>, includeInitialValues?: boolean, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValue>  { 
			return this.getChannelAdHocWithHttpInfo(webId, includeInitialValues, extraHttpRequestParams)
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

		public getChannelAdHocWithHttpInfo(webId: Array<string>, includeInitialValues?: boolean, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/channel';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getChannelAdHoc.');
			}

			if ((webId !== undefined) && (webId !== null)) {
				for (let item of webId) {
					queryParameters.append('webId', item);
				}
			}

			if ((includeInitialValues !== undefined) && (includeInitialValues !== null)) {
				queryParameters.set('includeInitialValues', <any>includeInitialValues);
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

		public getEndAdHoc(webId: Array<string>, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValues>  { 
			return this.getEndAdHocWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
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

		public getEndAdHocWithHttpInfo(webId: Array<string>, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/end';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getEndAdHoc.');
			}

			if ((webId !== undefined) && (webId !== null)) {
				for (let item of webId) {
					queryParameters.append('webId', item);
				}
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

		public getInterpolatedAdHoc(webId: Array<string>, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValues>  { 
			return this.getInterpolatedAdHocWithHttpInfo(webId, endTime, filterExpression, includeFilteredValues, interval, selectedFields, startTime, timeZone, extraHttpRequestParams)
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

		public getInterpolatedAdHocWithHttpInfo(webId: Array<string>, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/interpolated';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAdHoc.');
			}

			if ((webId !== undefined) && (webId !== null)) {
				for (let item of webId) {
					queryParameters.append('webId', item);
				}
			}

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((filterExpression !== undefined) && (filterExpression !== null)) {
				queryParameters.set('filterExpression', <any>filterExpression);
			}

			if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
				queryParameters.set('includeFilteredValues', <any>includeFilteredValues);
			}

			if ((interval !== undefined) && (interval !== null)) {
				queryParameters.set('interval', <any>interval);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((startTime !== undefined) && (startTime !== null)) {
				queryParameters.set('startTime', <any>startTime);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public getInterpolatedAtTimesAdHoc(time: Array<string>, webId: Array<string>, filterExpression?: string, includeFilteredValues?: boolean, selectedFields?: string, sortOrder?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValues>  { 
			return this.getInterpolatedAtTimesAdHocWithHttpInfo(time, webId, filterExpression, includeFilteredValues, selectedFields, sortOrder, timeZone, extraHttpRequestParams)
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

		public getInterpolatedAtTimesAdHocWithHttpInfo(time: Array<string>, webId: Array<string>, filterExpression?: string, includeFilteredValues?: boolean, selectedFields?: string, sortOrder?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/interpolatedattimes';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (time === null || time === undefined) {
				throw new Error('Required parameter time was null or undefined when calling getInterpolatedAtTimesAdHoc.');
			}

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAtTimesAdHoc.');
			}

			if ((time !== undefined) && (time !== null)) {
				for (let item of time) {
					queryParameters.append('time', item);
				}
			}

			if ((webId !== undefined) && (webId !== null)) {
				for (let item of webId) {
					queryParameters.append('webId', item);
				}
			}

			if ((filterExpression !== undefined) && (filterExpression !== null)) {
				queryParameters.set('filterExpression', <any>filterExpression);
			}

			if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
				queryParameters.set('includeFilteredValues', <any>includeFilteredValues);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((sortOrder !== undefined) && (sortOrder !== null)) {
				queryParameters.set('sortOrder', <any>sortOrder);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public getPlotAdHoc(webId: Array<string>, endTime?: string, intervals?: number, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValues>  { 
			return this.getPlotAdHocWithHttpInfo(webId, endTime, intervals, selectedFields, startTime, timeZone, extraHttpRequestParams)
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

		public getPlotAdHocWithHttpInfo(webId: Array<string>, endTime?: string, intervals?: number, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/plot';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getPlotAdHoc.');
			}

			if ((webId !== undefined) && (webId !== null)) {
				for (let item of webId) {
					queryParameters.append('webId', item);
				}
			}

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((intervals !== undefined) && (intervals !== null)) {
				queryParameters.set('intervals', <any>intervals);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((startTime !== undefined) && (startTime !== null)) {
				queryParameters.set('startTime', <any>startTime);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public getRecordedAdHoc(webId: Array<string>, boundaryType?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValues>  { 
			return this.getRecordedAdHocWithHttpInfo(webId, boundaryType, endTime, filterExpression, includeFilteredValues, maxCount, selectedFields, startTime, timeZone, extraHttpRequestParams)
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

		public getRecordedAdHocWithHttpInfo(webId: Array<string>, boundaryType?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/recorded';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getRecordedAdHoc.');
			}

			if ((webId !== undefined) && (webId !== null)) {
				for (let item of webId) {
					queryParameters.append('webId', item);
				}
			}

			if ((boundaryType !== undefined) && (boundaryType !== null)) {
				queryParameters.set('boundaryType', <any>boundaryType);
			}

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((filterExpression !== undefined) && (filterExpression !== null)) {
				queryParameters.set('filterExpression', <any>filterExpression);
			}

			if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
				queryParameters.set('includeFilteredValues', <any>includeFilteredValues);
			}

			if ((maxCount !== undefined) && (maxCount !== null)) {
				queryParameters.set('maxCount', <any>maxCount);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((startTime !== undefined) && (startTime !== null)) {
				queryParameters.set('startTime', <any>startTime);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public updateValuesAdHoc(values: Array<Models.PIStreamValues>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsItemsSubstatus>  { 
			return this.updateValuesAdHocWithHttpInfo(values, bufferOption, updateOption, extraHttpRequestParams)
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

		public updateValuesAdHocWithHttpInfo(values: Array<Models.PIStreamValues>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/recorded';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (values === null || values === undefined) {
				throw new Error('Required parameter values was null or undefined when calling updateValuesAdHoc.');
			}

			if ((bufferOption !== undefined) && (bufferOption !== null)) {
				queryParameters.set('bufferOption', <any>bufferOption);
			}

			if ((updateOption !== undefined) && (updateOption !== null)) {
				queryParameters.set('updateOption', <any>updateOption);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(values),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}

		public getRecordedAtTimeAdHoc(time: string, webId: Array<string>, retrievalMode?: string, selectedFields?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValue>  { 
			return this.getRecordedAtTimeAdHocWithHttpInfo(time, webId, retrievalMode, selectedFields, timeZone, extraHttpRequestParams)
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

		public getRecordedAtTimeAdHocWithHttpInfo(time: string, webId: Array<string>, retrievalMode?: string, selectedFields?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/recordedattime';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (time === null || time === undefined) {
				throw new Error('Required parameter time was null or undefined when calling getRecordedAtTimeAdHoc.');
			}

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimeAdHoc.');
			}

			if ((time !== undefined) && (time !== null)) {
				queryParameters.set('time', <any>time);
			}

			if ((webId !== undefined) && (webId !== null)) {
				for (let item of webId) {
					queryParameters.append('webId', item);
				}
			}

			if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
				queryParameters.set('retrievalMode', <any>retrievalMode);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public getRecordedAtTimesAdHoc(time: Array<string>, webId: Array<string>, retrievalMode?: string, selectedFields?: string, sortOrder?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValues>  { 
			return this.getRecordedAtTimesAdHocWithHttpInfo(time, webId, retrievalMode, selectedFields, sortOrder, timeZone, extraHttpRequestParams)
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

		public getRecordedAtTimesAdHocWithHttpInfo(time: Array<string>, webId: Array<string>, retrievalMode?: string, selectedFields?: string, sortOrder?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/recordedattimes';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (time === null || time === undefined) {
				throw new Error('Required parameter time was null or undefined when calling getRecordedAtTimesAdHoc.');
			}

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimesAdHoc.');
			}

			if ((time !== undefined) && (time !== null)) {
				for (let item of time) {
					queryParameters.append('time', item);
				}
			}

			if ((webId !== undefined) && (webId !== null)) {
				for (let item of webId) {
					queryParameters.append('webId', item);
				}
			}

			if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
				queryParameters.set('retrievalMode', <any>retrievalMode);
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((sortOrder !== undefined) && (sortOrder !== null)) {
				queryParameters.set('sortOrder', <any>sortOrder);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public getSummariesAdHoc(webId: Array<string>, calculationBasis?: string, endTime?: string, filterExpression?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamSummaries>  { 
			return this.getSummariesAdHocWithHttpInfo(webId, calculationBasis, endTime, filterExpression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, timeZone, extraHttpRequestParams)
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

		public getSummariesAdHocWithHttpInfo(webId: Array<string>, calculationBasis?: string, endTime?: string, filterExpression?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/summary';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getSummariesAdHoc.');
			}

			if ((webId !== undefined) && (webId !== null)) {
				for (let item of webId) {
					queryParameters.append('webId', item);
				}
			}

			if ((calculationBasis !== undefined) && (calculationBasis !== null)) {
				queryParameters.set('calculationBasis', <any>calculationBasis);
			}

			if ((endTime !== undefined) && (endTime !== null)) {
				queryParameters.set('endTime', <any>endTime);
			}

			if ((filterExpression !== undefined) && (filterExpression !== null)) {
				queryParameters.set('filterExpression', <any>filterExpression);
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

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public getValuesAdHoc(webId: Array<string>, selectedFields?: string, time?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValue>  { 
			return this.getValuesAdHocWithHttpInfo(webId, selectedFields, time, timeZone, extraHttpRequestParams)
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

		public getValuesAdHocWithHttpInfo(webId: Array<string>, selectedFields?: string, time?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/value';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getValuesAdHoc.');
			}

			if ((webId !== undefined) && (webId !== null)) {
				for (let item of webId) {
					queryParameters.append('webId', item);
				}
			}

			if ((selectedFields !== undefined) && (selectedFields !== null)) {
				queryParameters.set('selectedFields', <any>selectedFields);
			}

			if ((time !== undefined) && (time !== null)) {
				queryParameters.set('time', <any>time);
			}

			if ((timeZone !== undefined) && (timeZone !== null)) {
				queryParameters.set('timeZone', <any>timeZone);
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

		public updateValueAdHoc(values: Array<Models.PIStreamValue>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSubstatus>  { 
			return this.updateValueAdHocWithHttpInfo(values, bufferOption, updateOption, extraHttpRequestParams)
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

		public updateValueAdHocWithHttpInfo(values: Array<Models.PIStreamValue>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streamsets/value';

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (values === null || values === undefined) {
				throw new Error('Required parameter values was null or undefined when calling updateValueAdHoc.');
			}

			if ((bufferOption !== undefined) && (bufferOption !== null)) {
				queryParameters.set('bufferOption', <any>bufferOption);
			}

			if ((updateOption !== undefined) && (updateOption !== null)) {
				queryParameters.set('updateOption', <any>updateOption);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(values),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}
}
