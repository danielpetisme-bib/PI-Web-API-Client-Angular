"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
var StreamApi = (function () {
    function StreamApi(http, basePath, defaultHeaders) {
        this.http = http;
        this.basePath = null;
        this.basePath = basePath;
        this.defaultHeaders = defaultHeaders;
        if (this.defaultHeaders.keys().length == 1) {
            this.withCredentials = true;
        }
        else {
            this.withCredentials = false;
        }
    }
    StreamApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    StreamApi.prototype.getChannel = function (webId, includeInitialValues, extraHttpRequestParams) {
        return this.getChannelWithHttpInfo(webId, includeInitialValues, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamApi.prototype.getChannelWithHttpInfo = function (webId, includeInitialValues, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streams/{webId}/channel'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getChannel.');
        }
        if ((includeInitialValues !== undefined) && (includeInitialValues !== null)) {
            queryParameters.set('includeInitialValues', includeInitialValues);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    StreamApi.prototype.getEnd = function (webId, desiredUnits, selectedFields, extraHttpRequestParams) {
        return this.getEndWithHttpInfo(webId, desiredUnits, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamApi.prototype.getEndWithHttpInfo = function (webId, desiredUnits, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streams/{webId}/end'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getEnd.');
        }
        if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
            queryParameters.set('desiredUnits', desiredUnits);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    StreamApi.prototype.getInterpolated = function (webId, desiredUnits, endTime, filterExpression, includeFilteredValues, interval, selectedFields, startTime, timeZone, extraHttpRequestParams) {
        return this.getInterpolatedWithHttpInfo(webId, desiredUnits, endTime, filterExpression, includeFilteredValues, interval, selectedFields, startTime, timeZone, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamApi.prototype.getInterpolatedWithHttpInfo = function (webId, desiredUnits, endTime, filterExpression, includeFilteredValues, interval, selectedFields, startTime, timeZone, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streams/{webId}/interpolated'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getInterpolated.');
        }
        if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
            queryParameters.set('desiredUnits', desiredUnits);
        }
        if ((endTime !== undefined) && (endTime !== null)) {
            queryParameters.set('endTime', endTime);
        }
        if ((filterExpression !== undefined) && (filterExpression !== null)) {
            queryParameters.set('filterExpression', filterExpression);
        }
        if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
            queryParameters.set('includeFilteredValues', includeFilteredValues);
        }
        if ((interval !== undefined) && (interval !== null)) {
            queryParameters.set('interval', interval);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    StreamApi.prototype.getInterpolatedAtTimes = function (webId, desiredUnits, filterExpression, includeFilteredValues, selectedFields, sortOrder, time, timeZone, extraHttpRequestParams) {
        return this.getInterpolatedAtTimesWithHttpInfo(webId, desiredUnits, filterExpression, includeFilteredValues, selectedFields, sortOrder, time, timeZone, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamApi.prototype.getInterpolatedAtTimesWithHttpInfo = function (webId, desiredUnits, filterExpression, includeFilteredValues, selectedFields, sortOrder, time, timeZone, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streams/{webId}/interpolatedattimes'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAtTimes.');
        }
        if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
            queryParameters.set('desiredUnits', desiredUnits);
        }
        if ((filterExpression !== undefined) && (filterExpression !== null)) {
            queryParameters.set('filterExpression', filterExpression);
        }
        if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
            queryParameters.set('includeFilteredValues', includeFilteredValues);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((time !== undefined) && (time !== null)) {
            for (var _i = 0, time_1 = time; _i < time_1.length; _i++) {
                var item = time_1[_i];
                queryParameters.append('time', item);
            }
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    StreamApi.prototype.getPlot = function (webId, desiredUnits, endTime, intervals, selectedFields, startTime, timeZone, extraHttpRequestParams) {
        return this.getPlotWithHttpInfo(webId, desiredUnits, endTime, intervals, selectedFields, startTime, timeZone, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamApi.prototype.getPlotWithHttpInfo = function (webId, desiredUnits, endTime, intervals, selectedFields, startTime, timeZone, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streams/{webId}/plot'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getPlot.');
        }
        if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
            queryParameters.set('desiredUnits', desiredUnits);
        }
        if ((endTime !== undefined) && (endTime !== null)) {
            queryParameters.set('endTime', endTime);
        }
        if ((intervals !== undefined) && (intervals !== null)) {
            queryParameters.set('intervals', intervals);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    StreamApi.prototype.getRecorded = function (webId, boundaryType, desiredUnits, endTime, filterExpression, includeFilteredValues, maxCount, selectedFields, startTime, timeZone, extraHttpRequestParams) {
        return this.getRecordedWithHttpInfo(webId, boundaryType, desiredUnits, endTime, filterExpression, includeFilteredValues, maxCount, selectedFields, startTime, timeZone, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamApi.prototype.getRecordedWithHttpInfo = function (webId, boundaryType, desiredUnits, endTime, filterExpression, includeFilteredValues, maxCount, selectedFields, startTime, timeZone, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streams/{webId}/recorded'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getRecorded.');
        }
        if ((boundaryType !== undefined) && (boundaryType !== null)) {
            queryParameters.set('boundaryType', boundaryType);
        }
        if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
            queryParameters.set('desiredUnits', desiredUnits);
        }
        if ((endTime !== undefined) && (endTime !== null)) {
            queryParameters.set('endTime', endTime);
        }
        if ((filterExpression !== undefined) && (filterExpression !== null)) {
            queryParameters.set('filterExpression', filterExpression);
        }
        if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
            queryParameters.set('includeFilteredValues', includeFilteredValues);
        }
        if ((maxCount !== undefined) && (maxCount !== null)) {
            queryParameters.set('maxCount', maxCount);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    StreamApi.prototype.updateValues = function (webId, values, bufferOption, updateOption, extraHttpRequestParams) {
        return this.updateValuesWithHttpInfo(webId, values, bufferOption, updateOption, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamApi.prototype.updateValuesWithHttpInfo = function (webId, values, bufferOption, updateOption, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streams/{webId}/recorded'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling updateValues.');
        }
        if (values === null || values === undefined) {
            throw new Error('Required parameter values was null or undefined when calling updateValues.');
        }
        if ((bufferOption !== undefined) && (bufferOption !== null)) {
            queryParameters.set('bufferOption', bufferOption);
        }
        if ((updateOption !== undefined) && (updateOption !== null)) {
            queryParameters.set('updateOption', updateOption);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(values),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    StreamApi.prototype.getRecordedAtTime = function (webId, time, desiredUnits, retrievalMode, selectedFields, timeZone, extraHttpRequestParams) {
        return this.getRecordedAtTimeWithHttpInfo(webId, time, desiredUnits, retrievalMode, selectedFields, timeZone, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamApi.prototype.getRecordedAtTimeWithHttpInfo = function (webId, time, desiredUnits, retrievalMode, selectedFields, timeZone, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streams/{webId}/recordedattime'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTime.');
        }
        if (time === null || time === undefined) {
            throw new Error('Required parameter time was null or undefined when calling getRecordedAtTime.');
        }
        if ((time !== undefined) && (time !== null)) {
            queryParameters.set('time', time);
        }
        if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
            queryParameters.set('desiredUnits', desiredUnits);
        }
        if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
            queryParameters.set('retrievalMode', retrievalMode);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    StreamApi.prototype.getRecordedAtTimes = function (webId, desiredUnits, retrievalMode, selectedFields, sortOrder, time, timeZone, extraHttpRequestParams) {
        return this.getRecordedAtTimesWithHttpInfo(webId, desiredUnits, retrievalMode, selectedFields, sortOrder, time, timeZone, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamApi.prototype.getRecordedAtTimesWithHttpInfo = function (webId, desiredUnits, retrievalMode, selectedFields, sortOrder, time, timeZone, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streams/{webId}/recordedattimes'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimes.');
        }
        if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
            queryParameters.set('desiredUnits', desiredUnits);
        }
        if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
            queryParameters.set('retrievalMode', retrievalMode);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((time !== undefined) && (time !== null)) {
            for (var _i = 0, time_2 = time; _i < time_2.length; _i++) {
                var item = time_2[_i];
                queryParameters.append('time', item);
            }
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    StreamApi.prototype.getSummary = function (webId, calculationBasis, endTime, filterExpression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, timeZone, extraHttpRequestParams) {
        return this.getSummaryWithHttpInfo(webId, calculationBasis, endTime, filterExpression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, timeZone, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamApi.prototype.getSummaryWithHttpInfo = function (webId, calculationBasis, endTime, filterExpression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, timeZone, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streams/{webId}/summary'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getSummary.');
        }
        if ((calculationBasis !== undefined) && (calculationBasis !== null)) {
            queryParameters.set('calculationBasis', calculationBasis);
        }
        if ((endTime !== undefined) && (endTime !== null)) {
            queryParameters.set('endTime', endTime);
        }
        if ((filterExpression !== undefined) && (filterExpression !== null)) {
            queryParameters.set('filterExpression', filterExpression);
        }
        if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
            queryParameters.set('sampleInterval', sampleInterval);
        }
        if ((sampleType !== undefined) && (sampleType !== null)) {
            queryParameters.set('sampleType', sampleType);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
        }
        if ((summaryDuration !== undefined) && (summaryDuration !== null)) {
            queryParameters.set('summaryDuration', summaryDuration);
        }
        if ((summaryType !== undefined) && (summaryType !== null)) {
            for (var _i = 0, summaryType_1 = summaryType; _i < summaryType_1.length; _i++) {
                var item = summaryType_1[_i];
                queryParameters.append('summaryType', item);
            }
        }
        if ((timeType !== undefined) && (timeType !== null)) {
            queryParameters.set('timeType', timeType);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    StreamApi.prototype.getValue = function (webId, desiredUnits, selectedFields, time, timeZone, extraHttpRequestParams) {
        return this.getValueWithHttpInfo(webId, desiredUnits, selectedFields, time, timeZone, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamApi.prototype.getValueWithHttpInfo = function (webId, desiredUnits, selectedFields, time, timeZone, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streams/{webId}/value'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getValue.');
        }
        if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
            queryParameters.set('desiredUnits', desiredUnits);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((time !== undefined) && (time !== null)) {
            queryParameters.set('time', time);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    StreamApi.prototype.updateValue = function (webId, value, bufferOption, updateOption, extraHttpRequestParams) {
        return this.updateValueWithHttpInfo(webId, value, bufferOption, updateOption, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamApi.prototype.updateValueWithHttpInfo = function (webId, value, bufferOption, updateOption, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streams/{webId}/value'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling updateValue.');
        }
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling updateValue.');
        }
        if ((bufferOption !== undefined) && (bufferOption !== null)) {
            queryParameters.set('bufferOption', bufferOption);
        }
        if ((updateOption !== undefined) && (updateOption !== null)) {
            queryParameters.set('updateOption', updateOption);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(value),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    return StreamApi;
}());
StreamApi = __decorate([
    core_1.Injectable()
], StreamApi);
exports.StreamApi = StreamApi;
