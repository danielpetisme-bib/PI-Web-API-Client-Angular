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
var DataServerApi = (function () {
    function DataServerApi(http, basePath, defaultHeaders) {
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
    DataServerApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    DataServerApi.prototype.list = function (selectedFields, webIdType, extraHttpRequestParams) {
        return this.listWithHttpInfo(selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    DataServerApi.prototype.listWithHttpInfo = function (selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/dataservers';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
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
    DataServerApi.prototype.getByName = function (name, selectedFields, webIdType, extraHttpRequestParams) {
        return this.getByNameWithHttpInfo(name, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    DataServerApi.prototype.getByNameWithHttpInfo = function (name, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/dataservers';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getByName.');
        }
        if ((name !== undefined) && (name !== null)) {
            queryParameters.set('name', name);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
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
    DataServerApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
        return this.getByPathWithHttpInfo(path, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    DataServerApi.prototype.getByPathWithHttpInfo = function (path, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/dataservers';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling getByPath.');
        }
        if ((path !== undefined) && (path !== null)) {
            queryParameters.set('path', path);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
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
    DataServerApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        return this.getWithHttpInfo(webId, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    DataServerApi.prototype.getWithHttpInfo = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/dataservers/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling get.');
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
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
    DataServerApi.prototype.getEnumerationSets = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        return this.getEnumerationSetsWithHttpInfo(webId, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    DataServerApi.prototype.getEnumerationSetsWithHttpInfo = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/dataservers/{webId}/enumerationsets'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getEnumerationSets.');
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
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
    DataServerApi.prototype.createEnumerationSet = function (webId, enumerationSet, webIdType, extraHttpRequestParams) {
        return this.createEnumerationSetWithHttpInfo(webId, enumerationSet, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    DataServerApi.prototype.createEnumerationSetWithHttpInfo = function (webId, enumerationSet, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/dataservers/{webId}/enumerationsets'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createEnumerationSet.');
        }
        if (enumerationSet === null || enumerationSet === undefined) {
            throw new Error('Required parameter enumerationSet was null or undefined when calling createEnumerationSet.');
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(enumerationSet),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    DataServerApi.prototype.getLicense = function (webId, module, selectedFields, webIdType, extraHttpRequestParams) {
        return this.getLicenseWithHttpInfo(webId, module, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    DataServerApi.prototype.getLicenseWithHttpInfo = function (webId, module, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/dataservers/{webId}/license'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getLicense.');
        }
        if (module === null || module === undefined) {
            throw new Error('Required parameter module was null or undefined when calling getLicense.');
        }
        if ((module !== undefined) && (module !== null)) {
            queryParameters.set('module', module);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
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
    DataServerApi.prototype.getPoints = function (webId, maxCount, nameFilter, selectedFields, startIndex, webIdType, extraHttpRequestParams) {
        return this.getPointsWithHttpInfo(webId, maxCount, nameFilter, selectedFields, startIndex, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    DataServerApi.prototype.getPointsWithHttpInfo = function (webId, maxCount, nameFilter, selectedFields, startIndex, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/dataservers/{webId}/points'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getPoints.');
        }
        if ((maxCount !== undefined) && (maxCount !== null)) {
            queryParameters.set('maxCount', maxCount);
        }
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((startIndex !== undefined) && (startIndex !== null)) {
            queryParameters.set('startIndex', startIndex);
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
    DataServerApi.prototype.createPoint = function (webId, pointDTO, webIdType, extraHttpRequestParams) {
        return this.createPointWithHttpInfo(webId, pointDTO, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    DataServerApi.prototype.createPointWithHttpInfo = function (webId, pointDTO, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/dataservers/{webId}/points'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createPoint.');
        }
        if (pointDTO === null || pointDTO === undefined) {
            throw new Error('Required parameter pointDTO was null or undefined when calling createPoint.');
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(pointDTO),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    return DataServerApi;
}());
DataServerApi = __decorate([
    core_1.Injectable()
], DataServerApi);
exports.DataServerApi = DataServerApi;
