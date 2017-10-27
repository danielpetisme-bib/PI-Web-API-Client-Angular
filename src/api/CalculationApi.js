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
var CalculationApi = (function () {
    function CalculationApi(http, basePath, defaultHeaders) {
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
    CalculationApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    CalculationApi.prototype.getAtIntervals = function (endTime, expression, sampleInterval, selectedFields, startTime, webId, extraHttpRequestParams) {
        return this.getAtIntervalsWithHttpInfo(endTime, expression, sampleInterval, selectedFields, startTime, webId, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    CalculationApi.prototype.getAtIntervalsWithHttpInfo = function (endTime, expression, sampleInterval, selectedFields, startTime, webId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/calculation/intervals';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if ((endTime !== undefined) && (endTime !== null)) {
            queryParameters.set('endTime', endTime);
        }
        if ((expression !== undefined) && (expression !== null)) {
            queryParameters.set('expression', expression);
        }
        if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
            queryParameters.set('sampleInterval', sampleInterval);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
        }
        if ((webId !== undefined) && (webId !== null)) {
            queryParameters.set('webId', webId);
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
    CalculationApi.prototype.getAtRecorded = function (endTime, expression, selectedFields, startTime, webId, extraHttpRequestParams) {
        return this.getAtRecordedWithHttpInfo(endTime, expression, selectedFields, startTime, webId, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    CalculationApi.prototype.getAtRecordedWithHttpInfo = function (endTime, expression, selectedFields, startTime, webId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/calculation/recorded';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if ((endTime !== undefined) && (endTime !== null)) {
            queryParameters.set('endTime', endTime);
        }
        if ((expression !== undefined) && (expression !== null)) {
            queryParameters.set('expression', expression);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
        }
        if ((webId !== undefined) && (webId !== null)) {
            queryParameters.set('webId', webId);
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
    CalculationApi.prototype.getSummary = function (calculationBasis, endTime, expression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, webId, extraHttpRequestParams) {
        return this.getSummaryWithHttpInfo(calculationBasis, endTime, expression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, webId, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    CalculationApi.prototype.getSummaryWithHttpInfo = function (calculationBasis, endTime, expression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, webId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/calculation/summary';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if ((calculationBasis !== undefined) && (calculationBasis !== null)) {
            queryParameters.set('calculationBasis', calculationBasis);
        }
        if ((endTime !== undefined) && (endTime !== null)) {
            queryParameters.set('endTime', endTime);
        }
        if ((expression !== undefined) && (expression !== null)) {
            queryParameters.set('expression', expression);
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
        if ((webId !== undefined) && (webId !== null)) {
            queryParameters.set('webId', webId);
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
    CalculationApi.prototype.getAtTimes = function (expression, selectedFields, sortOrder, time, webId, extraHttpRequestParams) {
        return this.getAtTimesWithHttpInfo(expression, selectedFields, sortOrder, time, webId, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    CalculationApi.prototype.getAtTimesWithHttpInfo = function (expression, selectedFields, sortOrder, time, webId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/calculation/times';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if ((expression !== undefined) && (expression !== null)) {
            queryParameters.set('expression', expression);
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
        if ((webId !== undefined) && (webId !== null)) {
            queryParameters.set('webId', webId);
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
    return CalculationApi;
}());
CalculationApi = __decorate([
    core_1.Injectable()
], CalculationApi);
exports.CalculationApi = CalculationApi;
