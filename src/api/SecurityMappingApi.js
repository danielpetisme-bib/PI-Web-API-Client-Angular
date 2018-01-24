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
var SecurityMappingApi = (function () {
    function SecurityMappingApi(http, basePath, defaultHeaders) {
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
    SecurityMappingApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    SecurityMappingApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
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
    SecurityMappingApi.prototype.getByPathWithHttpInfo = function (path, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/securitymappings';
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
    SecurityMappingApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
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
    SecurityMappingApi.prototype.getWithHttpInfo = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/securitymappings/{webId}'
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
    SecurityMappingApi.prototype.update = function (webId, securityMapping, extraHttpRequestParams) {
        return this.updateWithHttpInfo(webId, securityMapping, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    SecurityMappingApi.prototype.updateWithHttpInfo = function (webId, securityMapping, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/securitymappings/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling update.');
        }
        if (securityMapping === null || securityMapping === undefined) {
            throw new Error('Required parameter securityMapping was null or undefined when calling update.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Patch,
            headers: headers,
            body: JSON.stringify(securityMapping),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    SecurityMappingApi.prototype["delete"] = function (webId, extraHttpRequestParams) {
        return this.deleteWithHttpInfo(webId, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    SecurityMappingApi.prototype.deleteWithHttpInfo = function (webId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/securitymappings/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling delete.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    SecurityMappingApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
        return this.getSecurityWithHttpInfo(webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    SecurityMappingApi.prototype.getSecurityWithHttpInfo = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/securitymappings/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
        }
        if ((userIdentity !== undefined) && (userIdentity !== null)) {
            for (var _i = 0, userIdentity_1 = userIdentity; _i < userIdentity_1.length; _i++) {
                var item = userIdentity_1[_i];
                queryParameters.append('userIdentity', item);
            }
        }
        if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
            queryParameters.set('forceRefresh', forceRefresh);
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
    SecurityMappingApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
        return this.getSecurityEntriesWithHttpInfo(webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    SecurityMappingApi.prototype.getSecurityEntriesWithHttpInfo = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/securitymappings/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
        }
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
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
    SecurityMappingApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
        return this.getSecurityEntryByNameWithHttpInfo(name, webId, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    SecurityMappingApi.prototype.getSecurityEntryByNameWithHttpInfo = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/securitymappings/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
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
    return SecurityMappingApi;
}());
SecurityMappingApi = __decorate([
    core_1.Injectable()
], SecurityMappingApi);
exports.SecurityMappingApi = SecurityMappingApi;
