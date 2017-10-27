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
var ElementApi = (function () {
    function ElementApi(http, basePath, defaultHeaders) {
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
    ElementApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    ElementApi.prototype.getByPath = function (path, selectedFields, extraHttpRequestParams) {
        return this.getByPathWithHttpInfo(path, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.getByPathWithHttpInfo = function (path, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements';
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
    ElementApi.prototype.get = function (webId, selectedFields, extraHttpRequestParams) {
        return this.getWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.getWithHttpInfo = function (webId, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling get.');
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
    ElementApi.prototype.update = function (webId, element, extraHttpRequestParams) {
        return this.updateWithHttpInfo(webId, element, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.updateWithHttpInfo = function (webId, element, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling update.');
        }
        if (element === null || element === undefined) {
            throw new Error('Required parameter element was null or undefined when calling update.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Patch,
            headers: headers,
            body: JSON.stringify(element),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    ElementApi.prototype["delete"] = function (webId, extraHttpRequestParams) {
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
    ElementApi.prototype.deleteWithHttpInfo = function (webId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}'
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
    ElementApi.prototype.getAnalyses = function (webId, maxCount, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams) {
        return this.getAnalysesWithHttpInfo(webId, maxCount, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.getAnalysesWithHttpInfo = function (webId, maxCount, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/analyses'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getAnalyses.');
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
        if ((startIndex !== undefined) && (startIndex !== null)) {
            queryParameters.set('startIndex', startIndex);
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
    ElementApi.prototype.createAnalysis = function (webId, analysis, extraHttpRequestParams) {
        return this.createAnalysisWithHttpInfo(webId, analysis, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.createAnalysisWithHttpInfo = function (webId, analysis, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/analyses'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createAnalysis.');
        }
        if (analysis === null || analysis === undefined) {
            throw new Error('Required parameter analysis was null or undefined when calling createAnalysis.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(analysis),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    ElementApi.prototype.getAttributes = function (webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, valueType, extraHttpRequestParams) {
        return this.getAttributesWithHttpInfo(webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, valueType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.getAttributesWithHttpInfo = function (webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, valueType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/attributes'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getAttributes.');
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
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
        if ((startIndex !== undefined) && (startIndex !== null)) {
            queryParameters.set('startIndex', startIndex);
        }
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
        }
        if ((valueType !== undefined) && (valueType !== null)) {
            queryParameters.set('valueType', valueType);
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
    ElementApi.prototype.createAttribute = function (webId, attribute, extraHttpRequestParams) {
        return this.createAttributeWithHttpInfo(webId, attribute, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.createAttributeWithHttpInfo = function (webId, attribute, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/attributes'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createAttribute.');
        }
        if (attribute === null || attribute === undefined) {
            throw new Error('Required parameter attribute was null or undefined when calling createAttribute.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(attribute),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    ElementApi.prototype.getCategories = function (webId, selectedFields, extraHttpRequestParams) {
        return this.getCategoriesWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.getCategoriesWithHttpInfo = function (webId, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/categories'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getCategories.');
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
    ElementApi.prototype.createConfig = function (webId, includeChildElements, extraHttpRequestParams) {
        return this.createConfigWithHttpInfo(webId, includeChildElements, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.createConfigWithHttpInfo = function (webId, includeChildElements, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/config'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createConfig.');
        }
        if ((includeChildElements !== undefined) && (includeChildElements !== null)) {
            queryParameters.set('includeChildElements', includeChildElements);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    ElementApi.prototype.findElementAttributes = function (webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, elementCategory, elementDescriptionFilter, elementNameFilter, elementTemplate, elementType, maxCount, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams) {
        return this.findElementAttributesWithHttpInfo(webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, elementCategory, elementDescriptionFilter, elementNameFilter, elementTemplate, elementType, maxCount, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.findElementAttributesWithHttpInfo = function (webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, elementCategory, elementDescriptionFilter, elementNameFilter, elementTemplate, elementType, maxCount, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/elementattributes'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling findElementAttributes.');
        }
        if ((attributeCategory !== undefined) && (attributeCategory !== null)) {
            queryParameters.set('attributeCategory', attributeCategory);
        }
        if ((attributeDescriptionFilter !== undefined) && (attributeDescriptionFilter !== null)) {
            queryParameters.set('attributeDescriptionFilter', attributeDescriptionFilter);
        }
        if ((attributeNameFilter !== undefined) && (attributeNameFilter !== null)) {
            queryParameters.set('attributeNameFilter', attributeNameFilter);
        }
        if ((attributeType !== undefined) && (attributeType !== null)) {
            queryParameters.set('attributeType', attributeType);
        }
        if ((elementCategory !== undefined) && (elementCategory !== null)) {
            queryParameters.set('elementCategory', elementCategory);
        }
        if ((elementDescriptionFilter !== undefined) && (elementDescriptionFilter !== null)) {
            queryParameters.set('elementDescriptionFilter', elementDescriptionFilter);
        }
        if ((elementNameFilter !== undefined) && (elementNameFilter !== null)) {
            queryParameters.set('elementNameFilter', elementNameFilter);
        }
        if ((elementTemplate !== undefined) && (elementTemplate !== null)) {
            queryParameters.set('elementTemplate', elementTemplate);
        }
        if ((elementType !== undefined) && (elementType !== null)) {
            queryParameters.set('elementType', elementType);
        }
        if ((maxCount !== undefined) && (maxCount !== null)) {
            queryParameters.set('maxCount', maxCount);
        }
        if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
            queryParameters.set('searchFullHierarchy', searchFullHierarchy);
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
        if ((startIndex !== undefined) && (startIndex !== null)) {
            queryParameters.set('startIndex', startIndex);
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
    ElementApi.prototype.getElements = function (webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, templateName, extraHttpRequestParams) {
        return this.getElementsWithHttpInfo(webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, templateName, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.getElementsWithHttpInfo = function (webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, templateName, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/elements'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getElements.');
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
        }
        if ((descriptionFilter !== undefined) && (descriptionFilter !== null)) {
            queryParameters.set('descriptionFilter', descriptionFilter);
        }
        if ((elementType !== undefined) && (elementType !== null)) {
            queryParameters.set('elementType', elementType);
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
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((startIndex !== undefined) && (startIndex !== null)) {
            queryParameters.set('startIndex', startIndex);
        }
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
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
    ElementApi.prototype.createElement = function (webId, element, extraHttpRequestParams) {
        return this.createElementWithHttpInfo(webId, element, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.createElementWithHttpInfo = function (webId, element, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/elements'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createElement.');
        }
        if (element === null || element === undefined) {
            throw new Error('Required parameter element was null or undefined when calling createElement.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(element),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    ElementApi.prototype.getEventFrames = function (webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, extraHttpRequestParams) {
        return this.getEventFramesWithHttpInfo(webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.getEventFramesWithHttpInfo = function (webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/eventframes'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getEventFrames.');
        }
        if ((canBeAcknowledged !== undefined) && (canBeAcknowledged !== null)) {
            queryParameters.set('canBeAcknowledged', canBeAcknowledged);
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
        }
        if ((endTime !== undefined) && (endTime !== null)) {
            queryParameters.set('endTime', endTime);
        }
        if ((isAcknowledged !== undefined) && (isAcknowledged !== null)) {
            queryParameters.set('isAcknowledged', isAcknowledged);
        }
        if ((maxCount !== undefined) && (maxCount !== null)) {
            queryParameters.set('maxCount', maxCount);
        }
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
        }
        if ((searchMode !== undefined) && (searchMode !== null)) {
            queryParameters.set('searchMode', searchMode);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((severity !== undefined) && (severity !== null)) {
            for (var _i = 0, severity_1 = severity; _i < severity_1.length; _i++) {
                var item = severity_1[_i];
                queryParameters.append('severity', item);
            }
        }
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((startIndex !== undefined) && (startIndex !== null)) {
            queryParameters.set('startIndex', startIndex);
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
        }
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
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
    ElementApi.prototype.getReferencedElements = function (webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, selectedFields, sortField, sortOrder, startIndex, templateName, extraHttpRequestParams) {
        return this.getReferencedElementsWithHttpInfo(webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, selectedFields, sortField, sortOrder, startIndex, templateName, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.getReferencedElementsWithHttpInfo = function (webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, selectedFields, sortField, sortOrder, startIndex, templateName, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/referencedelements'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getReferencedElements.');
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
        }
        if ((descriptionFilter !== undefined) && (descriptionFilter !== null)) {
            queryParameters.set('descriptionFilter', descriptionFilter);
        }
        if ((elementType !== undefined) && (elementType !== null)) {
            queryParameters.set('elementType', elementType);
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
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((startIndex !== undefined) && (startIndex !== null)) {
            queryParameters.set('startIndex', startIndex);
        }
        if ((templateName !== undefined) && (templateName !== null)) {
            queryParameters.set('templateName', templateName);
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
    ElementApi.prototype.addReferencedElement = function (webId, referencedElementWebId, referenceType, extraHttpRequestParams) {
        return this.addReferencedElementWithHttpInfo(webId, referencedElementWebId, referenceType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.addReferencedElementWithHttpInfo = function (webId, referencedElementWebId, referenceType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/referencedelements'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling addReferencedElement.');
        }
        if (referencedElementWebId === null || referencedElementWebId === undefined) {
            throw new Error('Required parameter referencedElementWebId was null or undefined when calling addReferencedElement.');
        }
        if ((referencedElementWebId !== undefined) && (referencedElementWebId !== null)) {
            for (var _i = 0, referencedElementWebId_1 = referencedElementWebId; _i < referencedElementWebId_1.length; _i++) {
                var item = referencedElementWebId_1[_i];
                queryParameters.append('referencedElementWebId', item);
            }
        }
        if ((referenceType !== undefined) && (referenceType !== null)) {
            queryParameters.set('referenceType', referenceType);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    ElementApi.prototype.removeReferencedElement = function (webId, referencedElementWebId, extraHttpRequestParams) {
        return this.removeReferencedElementWithHttpInfo(webId, referencedElementWebId, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.removeReferencedElementWithHttpInfo = function (webId, referencedElementWebId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/referencedelements'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling removeReferencedElement.');
        }
        if (referencedElementWebId === null || referencedElementWebId === undefined) {
            throw new Error('Required parameter referencedElementWebId was null or undefined when calling removeReferencedElement.');
        }
        if ((referencedElementWebId !== undefined) && (referencedElementWebId !== null)) {
            for (var _i = 0, referencedElementWebId_2 = referencedElementWebId; _i < referencedElementWebId_2.length; _i++) {
                var item = referencedElementWebId_2[_i];
                queryParameters.append('referencedElementWebId', item);
            }
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
    ElementApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, extraHttpRequestParams) {
        return this.getSecurityWithHttpInfo(webId, userIdentity, forceRefresh, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.getSecurityWithHttpInfo = function (webId, userIdentity, forceRefresh, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/security'
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
    ElementApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, extraHttpRequestParams) {
        return this.getSecurityEntriesWithHttpInfo(webId, nameFilter, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.getSecurityEntriesWithHttpInfo = function (webId, nameFilter, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/securityentries'
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
    ElementApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, extraHttpRequestParams) {
        return this.createSecurityEntryWithHttpInfo(webId, securityEntry, applyToChildren, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.createSecurityEntryWithHttpInfo = function (webId, securityEntry, applyToChildren, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/securityentries'
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
    ElementApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, extraHttpRequestParams) {
        return this.getSecurityEntryByNameWithHttpInfo(name, webId, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.getSecurityEntryByNameWithHttpInfo = function (name, webId, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
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
    ElementApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
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
    ElementApi.prototype.updateSecurityEntryWithHttpInfo = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
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
    ElementApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
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
    ElementApi.prototype.deleteSecurityEntryWithHttpInfo = function (name, webId, applyToChildren, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
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
    ElementApi.prototype.getMultiple = function (asParallel, includeMode, path, selectedFields, webId, extraHttpRequestParams) {
        return this.getMultipleWithHttpInfo(asParallel, includeMode, path, selectedFields, webId, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.getMultipleWithHttpInfo = function (asParallel, includeMode, path, selectedFields, webId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/multiple';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if ((asParallel !== undefined) && (asParallel !== null)) {
            queryParameters.set('asParallel', asParallel);
        }
        if ((includeMode !== undefined) && (includeMode !== null)) {
            queryParameters.set('includeMode', includeMode);
        }
        if ((path !== undefined) && (path !== null)) {
            for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                var item = path_1[_i];
                queryParameters.append('path', item);
            }
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((webId !== undefined) && (webId !== null)) {
            for (var _a = 0, webId_1 = webId; _a < webId_1.length; _a++) {
                var item = webId_1[_a];
                queryParameters.append('webId', item);
            }
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
    ElementApi.prototype.createSearchByAttribute = function (search, extraHttpRequestParams) {
        return this.createSearchByAttributeWithHttpInfo(search, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.createSearchByAttributeWithHttpInfo = function (search, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/searchbyattribute';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (search === null || search === undefined) {
            throw new Error('Required parameter search was null or undefined when calling createSearchByAttribute.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(search),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    ElementApi.prototype.executeSearchByAttribute = function (searchId, categoryName, descriptionFilter, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams) {
        return this.executeSearchByAttributeWithHttpInfo(searchId, categoryName, descriptionFilter, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    ElementApi.prototype.executeSearchByAttributeWithHttpInfo = function (searchId, categoryName, descriptionFilter, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/elements/searchbyattribute/{searchId}'
            .replace('{' + 'searchId' + '}', String(searchId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (searchId === null || searchId === undefined) {
            throw new Error('Required parameter searchId was null or undefined when calling executeSearchByAttribute.');
        }
        if ((categoryName !== undefined) && (categoryName !== null)) {
            queryParameters.set('categoryName', categoryName);
        }
        if ((descriptionFilter !== undefined) && (descriptionFilter !== null)) {
            queryParameters.set('descriptionFilter', descriptionFilter);
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
        if ((sortField !== undefined) && (sortField !== null)) {
            queryParameters.set('sortField', sortField);
        }
        if ((sortOrder !== undefined) && (sortOrder !== null)) {
            queryParameters.set('sortOrder', sortOrder);
        }
        if ((startIndex !== undefined) && (startIndex !== null)) {
            queryParameters.set('startIndex', startIndex);
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
    return ElementApi;
}());
ElementApi = __decorate([
    core_1.Injectable()
], ElementApi);
exports.ElementApi = ElementApi;
