"use strict";
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
var StreamSetApi = (function () {
    function StreamSetApi(http, basePath, defaultHeaders) {
        this.http = http;
        this.basePath = null;
        this.basePath = basePath;
        this.defaultHeaders = defaultHeaders;
        if (this.defaultHeaders.keys().length == 2) {
            this.withCredentials = true;
        }
        else {
            this.withCredentials = false;
        }
    }
    StreamSetApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    StreamSetApi.prototype.getChannel = function (webId, categoryName, heartbeatRate, includeInitialValues, nameFilter, searchFullHierarchy, showExcluded, showHidden, templateName, webIdType, extraHttpRequestParams) {
        return this.getChannelWithHttpInfo(webId, categoryName, heartbeatRate, includeInitialValues, nameFilter, searchFullHierarchy, showExcluded, showHidden, templateName, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getChannelWithHttpInfo = function (webId, categoryName, heartbeatRate, includeInitialValues, nameFilter, searchFullHierarchy, showExcluded, showHidden, templateName, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/{webId}/channel'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getChannel.');
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
        }
        if ((heartbeatRate !== undefined) && (heartbeatRate !== null)) {
            queryParameters.set('heartbeatRate', heartbeatRate);
        }
        if ((includeInitialValues !== undefined) && (includeInitialValues !== null)) {
            queryParameters.set('includeInitialValues', includeInitialValues);
        }
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
        }
        if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
            queryParameters.set('searchFullHierarchy', searchFullHierarchy);
        }
        if ((showExcluded !== undefined) && (showExcluded !== null)) {
            queryParameters.set('showExcluded', showExcluded);
        }
        if ((showHidden !== undefined) && (showHidden !== null)) {
            queryParameters.set('showHidden', showHidden);
        }
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getEnd = function (webId, categoryName, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, templateName, webIdType, extraHttpRequestParams) {
        return this.getEndWithHttpInfo(webId, categoryName, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, templateName, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getEndWithHttpInfo = function (webId, categoryName, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, templateName, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/{webId}/end'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getEnd.');
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
        }
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
        }
        if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
            queryParameters.set('searchFullHierarchy', searchFullHierarchy);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((showExcluded !== undefined) && (showExcluded !== null)) {
            queryParameters.set('showExcluded', showExcluded);
        }
        if ((showHidden !== undefined) && (showHidden !== null)) {
            queryParameters.set('showHidden', showHidden);
        }
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getInterpolated = function (webId, categoryName, endTime, filterExpression, includeFilteredValues, interval, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startTime, syncTime, syncTimeBoundaryType, templateName, timeZone, webIdType, extraHttpRequestParams) {
        return this.getInterpolatedWithHttpInfo(webId, categoryName, endTime, filterExpression, includeFilteredValues, interval, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startTime, syncTime, syncTimeBoundaryType, templateName, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getInterpolatedWithHttpInfo = function (webId, categoryName, endTime, filterExpression, includeFilteredValues, interval, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startTime, syncTime, syncTimeBoundaryType, templateName, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/{webId}/interpolated'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getInterpolated.');
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
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
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
        }
        if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
            queryParameters.set('searchFullHierarchy', searchFullHierarchy);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((showExcluded !== undefined) && (showExcluded !== null)) {
            queryParameters.set('showExcluded', showExcluded);
        }
        if ((showHidden !== undefined) && (showHidden !== null)) {
            queryParameters.set('showHidden', showHidden);
        }
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
        }
        if ((syncTime !== undefined) && (syncTime !== null)) {
            queryParameters.set('syncTime', syncTime);
        }
        if ((syncTimeBoundaryType !== undefined) && (syncTimeBoundaryType !== null)) {
            queryParameters.set('syncTimeBoundaryType', syncTimeBoundaryType);
        }
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getInterpolatedAtTimes = function (webId, time, categoryName, filterExpression, includeFilteredValues, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortOrder, templateName, timeZone, webIdType, extraHttpRequestParams) {
        return this.getInterpolatedAtTimesWithHttpInfo(webId, time, categoryName, filterExpression, includeFilteredValues, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortOrder, templateName, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getInterpolatedAtTimesWithHttpInfo = function (webId, time, categoryName, filterExpression, includeFilteredValues, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortOrder, templateName, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/{webId}/interpolatedattimes'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAtTimes.');
        }
        if (time === null || time === undefined) {
            throw new Error('Required parameter time was null or undefined when calling getInterpolatedAtTimes.');
        }
        if ((time !== undefined) && (time !== null)) {
            for (var _i = 0, time_1 = time; _i < time_1.length; _i++) {
                var item = time_1[_i];
                queryParameters.append('time', item);
            }
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
        }
        if ((filterExpression !== undefined) && (filterExpression !== null)) {
            queryParameters.set('filterExpression', filterExpression);
        }
        if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
            queryParameters.set('includeFilteredValues', includeFilteredValues);
        }
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
        }
        if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
            queryParameters.set('searchFullHierarchy', searchFullHierarchy);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((showExcluded !== undefined) && (showExcluded !== null)) {
            queryParameters.set('showExcluded', showExcluded);
        }
        if ((showHidden !== undefined) && (showHidden !== null)) {
            queryParameters.set('showHidden', showHidden);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getPlot = function (webId, categoryName, endTime, intervals, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startTime, templateName, timeZone, webIdType, extraHttpRequestParams) {
        return this.getPlotWithHttpInfo(webId, categoryName, endTime, intervals, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startTime, templateName, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getPlotWithHttpInfo = function (webId, categoryName, endTime, intervals, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startTime, templateName, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/{webId}/plot'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getPlot.');
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
        }
        if ((endTime !== undefined) && (endTime !== null)) {
            queryParameters.set('endTime', endTime);
        }
        if ((intervals !== undefined) && (intervals !== null)) {
            queryParameters.set('intervals', intervals);
        }
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
        }
        if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
            queryParameters.set('searchFullHierarchy', searchFullHierarchy);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((showExcluded !== undefined) && (showExcluded !== null)) {
            queryParameters.set('showExcluded', showExcluded);
        }
        if ((showHidden !== undefined) && (showHidden !== null)) {
            queryParameters.set('showHidden', showHidden);
        }
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
        }
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getRecorded = function (webId, boundaryType, categoryName, endTime, filterExpression, includeFilteredValues, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startTime, templateName, timeZone, webIdType, extraHttpRequestParams) {
        return this.getRecordedWithHttpInfo(webId, boundaryType, categoryName, endTime, filterExpression, includeFilteredValues, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startTime, templateName, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getRecordedWithHttpInfo = function (webId, boundaryType, categoryName, endTime, filterExpression, includeFilteredValues, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startTime, templateName, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/{webId}/recorded'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getRecorded.');
        }
        if ((boundaryType !== undefined) && (boundaryType !== null)) {
            queryParameters.set('boundaryType', boundaryType);
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
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
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
        }
        if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
            queryParameters.set('searchFullHierarchy', searchFullHierarchy);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((showExcluded !== undefined) && (showExcluded !== null)) {
            queryParameters.set('showExcluded', showExcluded);
        }
        if ((showHidden !== undefined) && (showHidden !== null)) {
            queryParameters.set('showHidden', showHidden);
        }
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
        }
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.updateValues = function (webId, values, bufferOption, updateOption, extraHttpRequestParams) {
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
    StreamSetApi.prototype.updateValuesWithHttpInfo = function (webId, values, bufferOption, updateOption, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/{webId}/recorded'
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
    StreamSetApi.prototype.getRecordedAtTime = function (webId, time, categoryName, nameFilter, retrievalMode, searchFullHierarchy, selectedFields, showExcluded, showHidden, templateName, timeZone, webIdType, extraHttpRequestParams) {
        return this.getRecordedAtTimeWithHttpInfo(webId, time, categoryName, nameFilter, retrievalMode, searchFullHierarchy, selectedFields, showExcluded, showHidden, templateName, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getRecordedAtTimeWithHttpInfo = function (webId, time, categoryName, nameFilter, retrievalMode, searchFullHierarchy, selectedFields, showExcluded, showHidden, templateName, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/{webId}/recordedattime'
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
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
        }
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
        }
        if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
            queryParameters.set('retrievalMode', retrievalMode);
        }
        if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
            queryParameters.set('searchFullHierarchy', searchFullHierarchy);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((showExcluded !== undefined) && (showExcluded !== null)) {
            queryParameters.set('showExcluded', showExcluded);
        }
        if ((showHidden !== undefined) && (showHidden !== null)) {
            queryParameters.set('showHidden', showHidden);
        }
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getRecordedAtTimes = function (webId, time, categoryName, nameFilter, retrievalMode, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortOrder, templateName, timeZone, webIdType, extraHttpRequestParams) {
        return this.getRecordedAtTimesWithHttpInfo(webId, time, categoryName, nameFilter, retrievalMode, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortOrder, templateName, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getRecordedAtTimesWithHttpInfo = function (webId, time, categoryName, nameFilter, retrievalMode, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortOrder, templateName, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/{webId}/recordedattimes'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimes.');
        }
        if (time === null || time === undefined) {
            throw new Error('Required parameter time was null or undefined when calling getRecordedAtTimes.');
        }
        if ((time !== undefined) && (time !== null)) {
            for (var _i = 0, time_2 = time; _i < time_2.length; _i++) {
                var item = time_2[_i];
                queryParameters.append('time', item);
            }
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
        }
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
        }
        if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
            queryParameters.set('retrievalMode', retrievalMode);
        }
        if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
            queryParameters.set('searchFullHierarchy', searchFullHierarchy);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((showExcluded !== undefined) && (showExcluded !== null)) {
            queryParameters.set('showExcluded', showExcluded);
        }
        if ((showHidden !== undefined) && (showHidden !== null)) {
            queryParameters.set('showHidden', showHidden);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getSummaries = function (webId, calculationBasis, categoryName, endTime, filterExpression, nameFilter, sampleInterval, sampleType, searchFullHierarchy, selectedFields, showExcluded, showHidden, startTime, summaryDuration, summaryType, templateName, timeType, timeZone, webIdType, extraHttpRequestParams) {
        return this.getSummariesWithHttpInfo(webId, calculationBasis, categoryName, endTime, filterExpression, nameFilter, sampleInterval, sampleType, searchFullHierarchy, selectedFields, showExcluded, showHidden, startTime, summaryDuration, summaryType, templateName, timeType, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getSummariesWithHttpInfo = function (webId, calculationBasis, categoryName, endTime, filterExpression, nameFilter, sampleInterval, sampleType, searchFullHierarchy, selectedFields, showExcluded, showHidden, startTime, summaryDuration, summaryType, templateName, timeType, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/{webId}/summary'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getSummaries.');
        }
        if ((calculationBasis !== undefined) && (calculationBasis !== null)) {
            queryParameters.set('calculationBasis', calculationBasis);
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
        }
        if ((endTime !== undefined) && (endTime !== null)) {
            queryParameters.set('endTime', endTime);
        }
        if ((filterExpression !== undefined) && (filterExpression !== null)) {
            queryParameters.set('filterExpression', filterExpression);
        }
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
        }
        if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
            queryParameters.set('sampleInterval', sampleInterval);
        }
        if ((sampleType !== undefined) && (sampleType !== null)) {
            queryParameters.set('sampleType', sampleType);
        }
        if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
            queryParameters.set('searchFullHierarchy', searchFullHierarchy);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((showExcluded !== undefined) && (showExcluded !== null)) {
            queryParameters.set('showExcluded', showExcluded);
        }
        if ((showHidden !== undefined) && (showHidden !== null)) {
            queryParameters.set('showHidden', showHidden);
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
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
        }
        if ((timeType !== undefined) && (timeType !== null)) {
            queryParameters.set('timeType', timeType);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getValues = function (webId, categoryName, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, templateName, time, timeZone, webIdType, extraHttpRequestParams) {
        return this.getValuesWithHttpInfo(webId, categoryName, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, templateName, time, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getValuesWithHttpInfo = function (webId, categoryName, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, templateName, time, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/{webId}/value'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getValues.');
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
        }
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
        }
        if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
            queryParameters.set('searchFullHierarchy', searchFullHierarchy);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((showExcluded !== undefined) && (showExcluded !== null)) {
            queryParameters.set('showExcluded', showExcluded);
        }
        if ((showHidden !== undefined) && (showHidden !== null)) {
            queryParameters.set('showHidden', showHidden);
        }
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
        }
        if ((time !== undefined) && (time !== null)) {
            queryParameters.set('time', time);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.updateValue = function (webId, values, bufferOption, updateOption, extraHttpRequestParams) {
        return this.updateValueWithHttpInfo(webId, values, bufferOption, updateOption, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.updateValueWithHttpInfo = function (webId, values, bufferOption, updateOption, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/{webId}/value'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling updateValue.');
        }
        if (values === null || values === undefined) {
            throw new Error('Required parameter values was null or undefined when calling updateValue.');
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
    StreamSetApi.prototype.getChannelAdHoc = function (webId, heartbeatRate, includeInitialValues, webIdType, extraHttpRequestParams) {
        return this.getChannelAdHocWithHttpInfo(webId, heartbeatRate, includeInitialValues, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getChannelAdHocWithHttpInfo = function (webId, heartbeatRate, includeInitialValues, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/channel';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getChannelAdHoc.');
        }
        if ((webId !== undefined) && (webId !== null)) {
            for (var _i = 0, webId_1 = webId; _i < webId_1.length; _i++) {
                var item = webId_1[_i];
                queryParameters.append('webId', item);
            }
        }
        if ((heartbeatRate !== undefined) && (heartbeatRate !== null)) {
            queryParameters.set('heartbeatRate', heartbeatRate);
        }
        if ((includeInitialValues !== undefined) && (includeInitialValues !== null)) {
            queryParameters.set('includeInitialValues', includeInitialValues);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getEndAdHoc = function (webId, selectedFields, sortField, sortOrder, webIdType, extraHttpRequestParams) {
        return this.getEndAdHocWithHttpInfo(webId, selectedFields, sortField, sortOrder, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getEndAdHocWithHttpInfo = function (webId, selectedFields, sortField, sortOrder, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/end';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getEndAdHoc.');
        }
        if ((webId !== undefined) && (webId !== null)) {
            for (var _i = 0, webId_2 = webId; _i < webId_2.length; _i++) {
                var item = webId_2[_i];
                queryParameters.append('webId', item);
            }
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getInterpolatedAdHoc = function (webId, endTime, filterExpression, includeFilteredValues, interval, selectedFields, sortField, sortOrder, startTime, syncTime, syncTimeBoundaryType, timeZone, webIdType, extraHttpRequestParams) {
        return this.getInterpolatedAdHocWithHttpInfo(webId, endTime, filterExpression, includeFilteredValues, interval, selectedFields, sortField, sortOrder, startTime, syncTime, syncTimeBoundaryType, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getInterpolatedAdHocWithHttpInfo = function (webId, endTime, filterExpression, includeFilteredValues, interval, selectedFields, sortField, sortOrder, startTime, syncTime, syncTimeBoundaryType, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/interpolated';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAdHoc.');
        }
        if ((webId !== undefined) && (webId !== null)) {
            for (var _i = 0, webId_3 = webId; _i < webId_3.length; _i++) {
                var item = webId_3[_i];
                queryParameters.append('webId', item);
            }
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
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
        }
        if ((syncTime !== undefined) && (syncTime !== null)) {
            queryParameters.set('syncTime', syncTime);
        }
        if ((syncTimeBoundaryType !== undefined) && (syncTimeBoundaryType !== null)) {
            queryParameters.set('syncTimeBoundaryType', syncTimeBoundaryType);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getInterpolatedAtTimesAdHoc = function (time, webId, filterExpression, includeFilteredValues, selectedFields, sortOrder, timeZone, webIdType, extraHttpRequestParams) {
        return this.getInterpolatedAtTimesAdHocWithHttpInfo(time, webId, filterExpression, includeFilteredValues, selectedFields, sortOrder, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getInterpolatedAtTimesAdHocWithHttpInfo = function (time, webId, filterExpression, includeFilteredValues, selectedFields, sortOrder, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/interpolatedattimes';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (time === null || time === undefined) {
            throw new Error('Required parameter time was null or undefined when calling getInterpolatedAtTimesAdHoc.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAtTimesAdHoc.');
        }
        if ((time !== undefined) && (time !== null)) {
            for (var _i = 0, time_3 = time; _i < time_3.length; _i++) {
                var item = time_3[_i];
                queryParameters.append('time', item);
            }
        }
        if ((webId !== undefined) && (webId !== null)) {
            for (var _a = 0, webId_4 = webId; _a < webId_4.length; _a++) {
                var item = webId_4[_a];
                queryParameters.append('webId', item);
            }
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
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getPlotAdHoc = function (webId, endTime, intervals, selectedFields, sortField, sortOrder, startTime, timeZone, webIdType, extraHttpRequestParams) {
        return this.getPlotAdHocWithHttpInfo(webId, endTime, intervals, selectedFields, sortField, sortOrder, startTime, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getPlotAdHocWithHttpInfo = function (webId, endTime, intervals, selectedFields, sortField, sortOrder, startTime, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/plot';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getPlotAdHoc.');
        }
        if ((webId !== undefined) && (webId !== null)) {
            for (var _i = 0, webId_5 = webId; _i < webId_5.length; _i++) {
                var item = webId_5[_i];
                queryParameters.append('webId', item);
            }
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
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getRecordedAdHoc = function (webId, boundaryType, endTime, filterExpression, includeFilteredValues, maxCount, selectedFields, sortField, sortOrder, startTime, timeZone, webIdType, extraHttpRequestParams) {
        return this.getRecordedAdHocWithHttpInfo(webId, boundaryType, endTime, filterExpression, includeFilteredValues, maxCount, selectedFields, sortField, sortOrder, startTime, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getRecordedAdHocWithHttpInfo = function (webId, boundaryType, endTime, filterExpression, includeFilteredValues, maxCount, selectedFields, sortField, sortOrder, startTime, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/recorded';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getRecordedAdHoc.');
        }
        if ((webId !== undefined) && (webId !== null)) {
            for (var _i = 0, webId_6 = webId; _i < webId_6.length; _i++) {
                var item = webId_6[_i];
                queryParameters.append('webId', item);
            }
        }
        if ((boundaryType !== undefined) && (boundaryType !== null)) {
            queryParameters.set('boundaryType', boundaryType);
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
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.updateValuesAdHoc = function (values, bufferOption, updateOption, extraHttpRequestParams) {
        return this.updateValuesAdHocWithHttpInfo(values, bufferOption, updateOption, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.updateValuesAdHocWithHttpInfo = function (values, bufferOption, updateOption, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/recorded';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (values === null || values === undefined) {
            throw new Error('Required parameter values was null or undefined when calling updateValuesAdHoc.');
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
    StreamSetApi.prototype.getRecordedAtTimeAdHoc = function (time, webId, retrievalMode, selectedFields, timeZone, webIdType, extraHttpRequestParams) {
        return this.getRecordedAtTimeAdHocWithHttpInfo(time, webId, retrievalMode, selectedFields, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getRecordedAtTimeAdHocWithHttpInfo = function (time, webId, retrievalMode, selectedFields, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/recordedattime';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (time === null || time === undefined) {
            throw new Error('Required parameter time was null or undefined when calling getRecordedAtTimeAdHoc.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimeAdHoc.');
        }
        if ((time !== undefined) && (time !== null)) {
            queryParameters.set('time', time);
        }
        if ((webId !== undefined) && (webId !== null)) {
            for (var _i = 0, webId_7 = webId; _i < webId_7.length; _i++) {
                var item = webId_7[_i];
                queryParameters.append('webId', item);
            }
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
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getRecordedAtTimesAdHoc = function (time, webId, retrievalMode, selectedFields, sortOrder, timeZone, webIdType, extraHttpRequestParams) {
        return this.getRecordedAtTimesAdHocWithHttpInfo(time, webId, retrievalMode, selectedFields, sortOrder, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getRecordedAtTimesAdHocWithHttpInfo = function (time, webId, retrievalMode, selectedFields, sortOrder, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/recordedattimes';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (time === null || time === undefined) {
            throw new Error('Required parameter time was null or undefined when calling getRecordedAtTimesAdHoc.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimesAdHoc.');
        }
        if ((time !== undefined) && (time !== null)) {
            for (var _i = 0, time_4 = time; _i < time_4.length; _i++) {
                var item = time_4[_i];
                queryParameters.append('time', item);
            }
        }
        if ((webId !== undefined) && (webId !== null)) {
            for (var _a = 0, webId_8 = webId; _a < webId_8.length; _a++) {
                var item = webId_8[_a];
                queryParameters.append('webId', item);
            }
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
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getSummariesAdHoc = function (webId, calculationBasis, endTime, filterExpression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, timeZone, webIdType, extraHttpRequestParams) {
        return this.getSummariesAdHocWithHttpInfo(webId, calculationBasis, endTime, filterExpression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getSummariesAdHocWithHttpInfo = function (webId, calculationBasis, endTime, filterExpression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/summary';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getSummariesAdHoc.');
        }
        if ((webId !== undefined) && (webId !== null)) {
            for (var _i = 0, webId_9 = webId; _i < webId_9.length; _i++) {
                var item = webId_9[_i];
                queryParameters.append('webId', item);
            }
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
            for (var _a = 0, summaryType_2 = summaryType; _a < summaryType_2.length; _a++) {
                var item = summaryType_2[_a];
                queryParameters.append('summaryType', item);
            }
        }
        if ((timeType !== undefined) && (timeType !== null)) {
            queryParameters.set('timeType', timeType);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.getValuesAdHoc = function (webId, selectedFields, sortField, sortOrder, time, timeZone, webIdType, extraHttpRequestParams) {
        return this.getValuesAdHocWithHttpInfo(webId, selectedFields, sortField, sortOrder, time, timeZone, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.getValuesAdHocWithHttpInfo = function (webId, selectedFields, sortField, sortOrder, time, timeZone, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/value';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getValuesAdHoc.');
        }
        if ((webId !== undefined) && (webId !== null)) {
            for (var _i = 0, webId_10 = webId; _i < webId_10.length; _i++) {
                var item = webId_10[_i];
                queryParameters.append('webId', item);
            }
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((time !== undefined) && (time !== null)) {
            queryParameters.set('time', time);
        }
        if ((timeZone !== undefined) && (timeZone !== null)) {
            queryParameters.set('timeZone', timeZone);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    StreamSetApi.prototype.updateValueAdHoc = function (values, bufferOption, updateOption, extraHttpRequestParams) {
        return this.updateValueAdHocWithHttpInfo(values, bufferOption, updateOption, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    StreamSetApi.prototype.updateValueAdHocWithHttpInfo = function (values, bufferOption, updateOption, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/streamsets/value';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (values === null || values === undefined) {
            throw new Error('Required parameter values was null or undefined when calling updateValueAdHoc.');
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
    return StreamSetApi;
}());
StreamSetApi = __decorate([
    core_1.Injectable()
], StreamSetApi);
exports.StreamSetApi = StreamSetApi;
