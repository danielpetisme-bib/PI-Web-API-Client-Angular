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
var EnumerationSetApi = (function () {
    function EnumerationSetApi(http, basePath, defaultHeaders) {
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
    EnumerationSetApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    EnumerationSetApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
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
    EnumerationSetApi.prototype.getByPathWithHttpInfo = function (path, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/enumerationsets';
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
    EnumerationSetApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
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
    EnumerationSetApi.prototype.getWithHttpInfo = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/enumerationsets/{webId}'
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
    EnumerationSetApi.prototype.update = function (webId, enumerationSet, extraHttpRequestParams) {
        return this.updateWithHttpInfo(webId, enumerationSet, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EnumerationSetApi.prototype.updateWithHttpInfo = function (webId, enumerationSet, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/enumerationsets/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling update.');
        }
        if (enumerationSet === null || enumerationSet === undefined) {
            throw new Error('Required parameter enumerationSet was null or undefined when calling update.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Patch,
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
    EnumerationSetApi.prototype["delete"] = function (webId, extraHttpRequestParams) {
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
    EnumerationSetApi.prototype.deleteWithHttpInfo = function (webId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/enumerationsets/{webId}'
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
    EnumerationSetApi.prototype.getValues = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        return this.getValuesWithHttpInfo(webId, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EnumerationSetApi.prototype.getValuesWithHttpInfo = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/enumerationsets/{webId}/enumerationvalues'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getValues.');
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
    EnumerationSetApi.prototype.createValue = function (webId, enumerationValue, webIdType, extraHttpRequestParams) {
        return this.createValueWithHttpInfo(webId, enumerationValue, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EnumerationSetApi.prototype.createValueWithHttpInfo = function (webId, enumerationValue, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/enumerationsets/{webId}/enumerationvalues'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createValue.');
        }
        if (enumerationValue === null || enumerationValue === undefined) {
            throw new Error('Required parameter enumerationValue was null or undefined when calling createValue.');
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(enumerationValue),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    EnumerationSetApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
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
    EnumerationSetApi.prototype.getSecurityWithHttpInfo = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/enumerationsets/{webId}/security'
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
    EnumerationSetApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
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
    EnumerationSetApi.prototype.getSecurityEntriesWithHttpInfo = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries'
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
    EnumerationSetApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
        return this.createSecurityEntryWithHttpInfo(webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EnumerationSetApi.prototype.createSecurityEntryWithHttpInfo = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
        }
        if (securityEntry === null || securityEntry === undefined) {
            throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
        }
        if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
            queryParameters.set('applyToChildren', applyToChildren);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(securityEntry),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    EnumerationSetApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
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
    EnumerationSetApi.prototype.getSecurityEntryByNameWithHttpInfo = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries/{name}'
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
    EnumerationSetApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
        return this.updateSecurityEntryWithHttpInfo(name, webId, securityEntry, applyToChildren, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EnumerationSetApi.prototype.updateSecurityEntryWithHttpInfo = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
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
            queryParameters.set('applyToChildren', applyToChildren);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Put,
            headers: headers,
            body: JSON.stringify(securityEntry),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    EnumerationSetApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
        return this.deleteSecurityEntryWithHttpInfo(name, webId, applyToChildren, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EnumerationSetApi.prototype.deleteSecurityEntryWithHttpInfo = function (name, webId, applyToChildren, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries/{name}'
            .replace('{' + 'name' + '}', String(name))
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
        }
        if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
            queryParameters.set('applyToChildren', applyToChildren);
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
    return EnumerationSetApi;
}());
EnumerationSetApi = __decorate([
    core_1.Injectable()
], EnumerationSetApi);
exports.EnumerationSetApi = EnumerationSetApi;
