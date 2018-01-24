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
export class StreamApi {

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

		public getChannel(webId: string, heartbeatRate?: number, includeInitialValues?: boolean, webIdType?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsStreamValues>  { 
			return this.getChannelWithHttpInfo(webId, heartbeatRate, includeInitialValues, webIdType, extraHttpRequestParams)
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

		public getChannelWithHttpInfo(webId: string, heartbeatRate?: number, includeInitialValues?: boolean, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streams/{webId}/channel'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getChannel.');
			}

			if ((heartbeatRate !== undefined) && (heartbeatRate !== null)) {
				queryParameters.set('heartbeatRate', <any>heartbeatRate);
			}

			if ((includeInitialValues !== undefined) && (includeInitialValues !== null)) {
				queryParameters.set('includeInitialValues', <any>includeInitialValues);
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

		public getEnd(webId: string, desiredUnits?: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Models.PITimedValue>  { 
			return this.getEndWithHttpInfo(webId, desiredUnits, selectedFields, extraHttpRequestParams)
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

		public getEndWithHttpInfo(webId: string, desiredUnits?: string, selectedFields?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streams/{webId}/end'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getEnd.');
			}

			if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
				queryParameters.set('desiredUnits', <any>desiredUnits);
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

		public getInterpolated(webId: string, desiredUnits?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, selectedFields?: string, startTime?: string, syncTime?: string, syncTimeBoundaryType?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PITimedValues>  { 
			return this.getInterpolatedWithHttpInfo(webId, desiredUnits, endTime, filterExpression, includeFilteredValues, interval, selectedFields, startTime, syncTime, syncTimeBoundaryType, timeZone, extraHttpRequestParams)
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

		public getInterpolatedWithHttpInfo(webId: string, desiredUnits?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, selectedFields?: string, startTime?: string, syncTime?: string, syncTimeBoundaryType?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streams/{webId}/interpolated'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getInterpolated.');
			}

			if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
				queryParameters.set('desiredUnits', <any>desiredUnits);
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

			if ((syncTime !== undefined) && (syncTime !== null)) {
				queryParameters.set('syncTime', <any>syncTime);
			}

			if ((syncTimeBoundaryType !== undefined) && (syncTimeBoundaryType !== null)) {
				queryParameters.set('syncTimeBoundaryType', <any>syncTimeBoundaryType);
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

		public getInterpolatedAtTimes(webId: string, desiredUnits?: string, filterExpression?: string, includeFilteredValues?: boolean, selectedFields?: string, sortOrder?: string, time?: Array<string>, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PITimedValues>  { 
			return this.getInterpolatedAtTimesWithHttpInfo(webId, desiredUnits, filterExpression, includeFilteredValues, selectedFields, sortOrder, time, timeZone, extraHttpRequestParams)
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

		public getInterpolatedAtTimesWithHttpInfo(webId: string, desiredUnits?: string, filterExpression?: string, includeFilteredValues?: boolean, selectedFields?: string, sortOrder?: string, time?: Array<string>, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streams/{webId}/interpolatedattimes'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAtTimes.');
			}

			if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
				queryParameters.set('desiredUnits', <any>desiredUnits);
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

			if ((time !== undefined) && (time !== null)) {
				for (let item of time) {
					queryParameters.append('time', item);
				}
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

		public getPlot(webId: string, desiredUnits?: string, endTime?: string, intervals?: number, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PITimedValues>  { 
			return this.getPlotWithHttpInfo(webId, desiredUnits, endTime, intervals, selectedFields, startTime, timeZone, extraHttpRequestParams)
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

		public getPlotWithHttpInfo(webId: string, desiredUnits?: string, endTime?: string, intervals?: number, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streams/{webId}/plot'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getPlot.');
			}

			if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
				queryParameters.set('desiredUnits', <any>desiredUnits);
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

		public getRecorded(webId: string, boundaryType?: string, desiredUnits?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PITimedValues>  { 
			return this.getRecordedWithHttpInfo(webId, boundaryType, desiredUnits, endTime, filterExpression, includeFilteredValues, maxCount, selectedFields, startTime, timeZone, extraHttpRequestParams)
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

		public getRecordedWithHttpInfo(webId: string, boundaryType?: string, desiredUnits?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streams/{webId}/recorded'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getRecorded.');
			}

			if ((boundaryType !== undefined) && (boundaryType !== null)) {
				queryParameters.set('boundaryType', <any>boundaryType);
			}

			if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
				queryParameters.set('desiredUnits', <any>desiredUnits);
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

		public updateValues(webId: string, values: Array<Models.PITimedValue>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSubstatus>  { 
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

		public updateValuesWithHttpInfo(webId: string, values: Array<Models.PITimedValue>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streams/{webId}/recorded'
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

		public getRecordedAtTime(webId: string, time: string, desiredUnits?: string, retrievalMode?: string, selectedFields?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PITimedValue>  { 
			return this.getRecordedAtTimeWithHttpInfo(webId, time, desiredUnits, retrievalMode, selectedFields, timeZone, extraHttpRequestParams)
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

		public getRecordedAtTimeWithHttpInfo(webId: string, time: string, desiredUnits?: string, retrievalMode?: string, selectedFields?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streams/{webId}/recordedattime'
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

			if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
				queryParameters.set('desiredUnits', <any>desiredUnits);
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

		public getRecordedAtTimes(webId: string, desiredUnits?: string, retrievalMode?: string, selectedFields?: string, sortOrder?: string, time?: Array<string>, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PITimedValues>  { 
			return this.getRecordedAtTimesWithHttpInfo(webId, desiredUnits, retrievalMode, selectedFields, sortOrder, time, timeZone, extraHttpRequestParams)
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

		public getRecordedAtTimesWithHttpInfo(webId: string, desiredUnits?: string, retrievalMode?: string, selectedFields?: string, sortOrder?: string, time?: Array<string>, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streams/{webId}/recordedattimes'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimes.');
			}

			if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
				queryParameters.set('desiredUnits', <any>desiredUnits);
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

			if ((time !== undefined) && (time !== null)) {
				for (let item of time) {
					queryParameters.append('time', item);
				}
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

		public getSummary(webId: string, calculationBasis?: string, endTime?: string, filterExpression?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PIItemsSummaryValue>  { 
			return this.getSummaryWithHttpInfo(webId, calculationBasis, endTime, filterExpression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, timeZone, extraHttpRequestParams)
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

		public getSummaryWithHttpInfo(webId: string, calculationBasis?: string, endTime?: string, filterExpression?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streams/{webId}/summary'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getSummary.');
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

		public getValue(webId: string, desiredUnits?: string, selectedFields?: string, time?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Models.PITimedValue>  { 
			return this.getValueWithHttpInfo(webId, desiredUnits, selectedFields, time, timeZone, extraHttpRequestParams)
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

		public getValueWithHttpInfo(webId: string, desiredUnits?: string, selectedFields?: string, time?: string, timeZone?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streams/{webId}/value'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling getValue.');
			}

			if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
				queryParameters.set('desiredUnits', <any>desiredUnits);
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

		public updateValue(webId: string, value: Models.PITimedValue, bufferOption?: string, updateOption?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<{}>   { 
			return this.updateValueWithHttpInfo(webId, value, bufferOption, updateOption, webIdType, extraHttpRequestParams)
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

		public updateValueWithHttpInfo(webId: string, value: Models.PITimedValue, bufferOption?: string, updateOption?: string, webIdType?: string, extraHttpRequestParams?: any) : Observable<Response>  { 
			const localVarPath = this.basePath + '/streams/{webId}/value'
				.replace('{' + 'webId' + '}', String(webId));

			let queryParameters = new URLSearchParams();
			let headers = new Headers(this.defaultHeaders.toJSON());

			if (webId === null || webId === undefined) {
				throw new Error('Required parameter webId was null or undefined when calling updateValue.');
			}

			if (value === null || value === undefined) {
				throw new Error('Required parameter value was null or undefined when calling updateValue.');
			}

			if ((bufferOption !== undefined) && (bufferOption !== null)) {
				queryParameters.set('bufferOption', <any>bufferOption);
			}

			if ((updateOption !== undefined) && (updateOption !== null)) {
				queryParameters.set('updateOption', <any>updateOption);
			}

			if ((webIdType !== undefined) && (webIdType !== null)) {
				queryParameters.set('webIdType', <any>webIdType);
			}

			let requestOptions: RequestOptionsArgs = new RequestOptions({
				method: RequestMethod.Post,
				headers: headers,
				body: JSON.stringify(value),
				search: queryParameters,
				withCredentials: this.withCredentials,
			});

			if (extraHttpRequestParams) {
				requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
			}
			return this.http.request(localVarPath, requestOptions);
		}
}
