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
var AssetDatabaseApi = (function () {
    function AssetDatabaseApi(http, basePath, defaultHeaders) {
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
    AssetDatabaseApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    AssetDatabaseApi.prototype.getByPath = function (path, selectedFields, extraHttpRequestParams) {
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
    AssetDatabaseApi.prototype.getByPathWithHttpInfo = function (path, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases';
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
    AssetDatabaseApi.prototype.get = function (webId, selectedFields, extraHttpRequestParams) {
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
    AssetDatabaseApi.prototype.getWithHttpInfo = function (webId, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}'
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
    AssetDatabaseApi.prototype.update = function (webId, database, extraHttpRequestParams) {
        return this.updateWithHttpInfo(webId, database, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.updateWithHttpInfo = function (webId, database, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling update.');
        }
        if (database === null || database === undefined) {
            throw new Error('Required parameter database was null or undefined when calling update.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Patch,
            headers: headers,
            body: JSON.stringify(database),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    AssetDatabaseApi.prototype["delete"] = function (webId, extraHttpRequestParams) {
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
    AssetDatabaseApi.prototype.deleteWithHttpInfo = function (webId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}'
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
    AssetDatabaseApi.prototype.findAnalyses = function (webId, field, maxCount, query, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams) {
        return this.findAnalysesWithHttpInfo(webId, field, maxCount, query, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.findAnalysesWithHttpInfo = function (webId, field, maxCount, query, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/analyses'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling findAnalyses.');
        }
        if (field === null || field === undefined) {
            throw new Error('Required parameter field was null or undefined when calling findAnalyses.');
        }
        if ((field !== undefined) && (field !== null)) {
            for (var _i = 0, field_1 = field; _i < field_1.length; _i++) {
                var item = field_1[_i];
                queryParameters.append('field', item);
            }
        }
        if ((maxCount !== undefined) && (maxCount !== null)) {
            queryParameters.set('maxCount', maxCount);
        }
        if ((query !== undefined) && (query !== null)) {
            queryParameters.set('query', query);
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
    AssetDatabaseApi.prototype.getAnalysisCategories = function (webId, selectedFields, extraHttpRequestParams) {
        return this.getAnalysisCategoriesWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.getAnalysisCategoriesWithHttpInfo = function (webId, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/analysiscategories'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getAnalysisCategories.');
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
    AssetDatabaseApi.prototype.createAnalysisCategory = function (webId, analysisCategory, extraHttpRequestParams) {
        return this.createAnalysisCategoryWithHttpInfo(webId, analysisCategory, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.createAnalysisCategoryWithHttpInfo = function (webId, analysisCategory, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/analysiscategories'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createAnalysisCategory.');
        }
        if (analysisCategory === null || analysisCategory === undefined) {
            throw new Error('Required parameter analysisCategory was null or undefined when calling createAnalysisCategory.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(analysisCategory),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    AssetDatabaseApi.prototype.getAnalysisTemplates = function (webId, field, maxCount, query, selectedFields, sortField, sortOrder, extraHttpRequestParams) {
        return this.getAnalysisTemplatesWithHttpInfo(webId, field, maxCount, query, selectedFields, sortField, sortOrder, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.getAnalysisTemplatesWithHttpInfo = function (webId, field, maxCount, query, selectedFields, sortField, sortOrder, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/analysistemplates'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getAnalysisTemplates.');
        }
        if (field === null || field === undefined) {
            throw new Error('Required parameter field was null or undefined when calling getAnalysisTemplates.');
        }
        if ((field !== undefined) && (field !== null)) {
            for (var _i = 0, field_2 = field; _i < field_2.length; _i++) {
                var item = field_2[_i];
                queryParameters.append('field', item);
            }
        }
        if ((maxCount !== undefined) && (maxCount !== null)) {
            queryParameters.set('maxCount', maxCount);
        }
        if ((query !== undefined) && (query !== null)) {
            queryParameters.set('query', query);
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
    AssetDatabaseApi.prototype.createAnalysisTemplate = function (webId, template, extraHttpRequestParams) {
        return this.createAnalysisTemplateWithHttpInfo(webId, template, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.createAnalysisTemplateWithHttpInfo = function (webId, template, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/analysistemplates'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createAnalysisTemplate.');
        }
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling createAnalysisTemplate.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(template),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    AssetDatabaseApi.prototype.getAttributeCategories = function (webId, selectedFields, extraHttpRequestParams) {
        return this.getAttributeCategoriesWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.getAttributeCategoriesWithHttpInfo = function (webId, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/attributecategories'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getAttributeCategories.');
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
    AssetDatabaseApi.prototype.createAttributeCategory = function (webId, attributeCategory, extraHttpRequestParams) {
        return this.createAttributeCategoryWithHttpInfo(webId, attributeCategory, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.createAttributeCategoryWithHttpInfo = function (webId, attributeCategory, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/attributecategories'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createAttributeCategory.');
        }
        if (attributeCategory === null || attributeCategory === undefined) {
            throw new Error('Required parameter attributeCategory was null or undefined when calling createAttributeCategory.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(attributeCategory),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    AssetDatabaseApi.prototype.findElementAttributes = function (webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, elementCategory, elementDescriptionFilter, elementNameFilter, elementTemplate, elementType, maxCount, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams) {
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
    AssetDatabaseApi.prototype.findElementAttributesWithHttpInfo = function (webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, elementCategory, elementDescriptionFilter, elementNameFilter, elementTemplate, elementType, maxCount, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/elementattributes'
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
    AssetDatabaseApi.prototype.getElementCategories = function (webId, selectedFields, extraHttpRequestParams) {
        return this.getElementCategoriesWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.getElementCategoriesWithHttpInfo = function (webId, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/elementcategories'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getElementCategories.');
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
    AssetDatabaseApi.prototype.createElementCategory = function (webId, elementCategory, extraHttpRequestParams) {
        return this.createElementCategoryWithHttpInfo(webId, elementCategory, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.createElementCategoryWithHttpInfo = function (webId, elementCategory, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/elementcategories'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createElementCategory.');
        }
        if (elementCategory === null || elementCategory === undefined) {
            throw new Error('Required parameter elementCategory was null or undefined when calling createElementCategory.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(elementCategory),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    AssetDatabaseApi.prototype.getElements = function (webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, templateName, extraHttpRequestParams) {
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
    AssetDatabaseApi.prototype.getElementsWithHttpInfo = function (webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, templateName, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/elements'
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
    AssetDatabaseApi.prototype.createElement = function (webId, element, extraHttpRequestParams) {
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
    AssetDatabaseApi.prototype.createElementWithHttpInfo = function (webId, element, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/elements'
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
    AssetDatabaseApi.prototype.getElementTemplates = function (webId, field, maxCount, query, selectedFields, sortField, sortOrder, extraHttpRequestParams) {
        return this.getElementTemplatesWithHttpInfo(webId, field, maxCount, query, selectedFields, sortField, sortOrder, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.getElementTemplatesWithHttpInfo = function (webId, field, maxCount, query, selectedFields, sortField, sortOrder, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/elementtemplates'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getElementTemplates.');
        }
        if (field === null || field === undefined) {
            throw new Error('Required parameter field was null or undefined when calling getElementTemplates.');
        }
        if ((field !== undefined) && (field !== null)) {
            for (var _i = 0, field_3 = field; _i < field_3.length; _i++) {
                var item = field_3[_i];
                queryParameters.append('field', item);
            }
        }
        if ((maxCount !== undefined) && (maxCount !== null)) {
            queryParameters.set('maxCount', maxCount);
        }
        if ((query !== undefined) && (query !== null)) {
            queryParameters.set('query', query);
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
    AssetDatabaseApi.prototype.createElementTemplate = function (webId, template, extraHttpRequestParams) {
        return this.createElementTemplateWithHttpInfo(webId, template, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.createElementTemplateWithHttpInfo = function (webId, template, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/elementtemplates'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createElementTemplate.');
        }
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling createElementTemplate.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(template),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    AssetDatabaseApi.prototype.getEnumerationSets = function (webId, selectedFields, extraHttpRequestParams) {
        return this.getEnumerationSetsWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.getEnumerationSetsWithHttpInfo = function (webId, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/enumerationsets'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getEnumerationSets.');
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
    AssetDatabaseApi.prototype.createEnumerationSet = function (webId, enumerationSet, extraHttpRequestParams) {
        return this.createEnumerationSetWithHttpInfo(webId, enumerationSet, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.createEnumerationSetWithHttpInfo = function (webId, enumerationSet, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/enumerationsets'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createEnumerationSet.');
        }
        if (enumerationSet === null || enumerationSet === undefined) {
            throw new Error('Required parameter enumerationSet was null or undefined when calling createEnumerationSet.');
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
    AssetDatabaseApi.prototype.findEventFrameAttributes = function (webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, endTime, eventFrameCategory, eventFrameDescriptionFilter, eventFrameNameFilter, eventFrameTemplate, maxCount, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, sortField, sortOrder, startIndex, startTime, extraHttpRequestParams) {
        return this.findEventFrameAttributesWithHttpInfo(webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, endTime, eventFrameCategory, eventFrameDescriptionFilter, eventFrameNameFilter, eventFrameTemplate, maxCount, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, sortField, sortOrder, startIndex, startTime, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.findEventFrameAttributesWithHttpInfo = function (webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, endTime, eventFrameCategory, eventFrameDescriptionFilter, eventFrameNameFilter, eventFrameTemplate, maxCount, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, sortField, sortOrder, startIndex, startTime, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/eventframeattributes'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling findEventFrameAttributes.');
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
        if ((endTime !== undefined) && (endTime !== null)) {
            queryParameters.set('endTime', endTime);
        }
        if ((eventFrameCategory !== undefined) && (eventFrameCategory !== null)) {
            queryParameters.set('eventFrameCategory', eventFrameCategory);
        }
        if ((eventFrameDescriptionFilter !== undefined) && (eventFrameDescriptionFilter !== null)) {
            queryParameters.set('eventFrameDescriptionFilter', eventFrameDescriptionFilter);
        }
        if ((eventFrameNameFilter !== undefined) && (eventFrameNameFilter !== null)) {
            queryParameters.set('eventFrameNameFilter', eventFrameNameFilter);
        }
        if ((eventFrameTemplate !== undefined) && (eventFrameTemplate !== null)) {
            queryParameters.set('eventFrameTemplate', eventFrameTemplate);
        }
        if ((maxCount !== undefined) && (maxCount !== null)) {
            queryParameters.set('maxCount', maxCount);
        }
        if ((referencedElementNameFilter !== undefined) && (referencedElementNameFilter !== null)) {
            queryParameters.set('referencedElementNameFilter', referencedElementNameFilter);
        }
        if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
            queryParameters.set('searchFullHierarchy', searchFullHierarchy);
        }
        if ((searchMode !== undefined) && (searchMode !== null)) {
            queryParameters.set('searchMode', searchMode);
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
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
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
    AssetDatabaseApi.prototype.getEventFrames = function (webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, referencedElementTemplateName, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, extraHttpRequestParams) {
        return this.getEventFramesWithHttpInfo(webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, referencedElementTemplateName, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.getEventFramesWithHttpInfo = function (webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, referencedElementTemplateName, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/eventframes'
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
        if ((referencedElementNameFilter !== undefined) && (referencedElementNameFilter !== null)) {
            queryParameters.set('referencedElementNameFilter', referencedElementNameFilter);
        }
        if ((referencedElementTemplateName !== undefined) && (referencedElementTemplateName !== null)) {
            queryParameters.set('referencedElementTemplateName', referencedElementTemplateName);
        }
        if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
            queryParameters.set('searchFullHierarchy', searchFullHierarchy);
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
    AssetDatabaseApi.prototype.createEventFrame = function (webId, eventFrame, extraHttpRequestParams) {
        return this.createEventFrameWithHttpInfo(webId, eventFrame, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.createEventFrameWithHttpInfo = function (webId, eventFrame, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/eventframes'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createEventFrame.');
        }
        if (eventFrame === null || eventFrame === undefined) {
            throw new Error('Required parameter eventFrame was null or undefined when calling createEventFrame.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(eventFrame),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    AssetDatabaseApi.prototype["export"] = function (webId, endTime, exportMode, startTime, extraHttpRequestParams) {
        return this.exportWithHttpInfo(webId, endTime, exportMode, startTime, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.exportWithHttpInfo = function (webId, endTime, exportMode, startTime, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/export'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling export.');
        }
        if ((endTime !== undefined) && (endTime !== null)) {
            queryParameters.set('endTime', endTime);
        }
        if ((exportMode !== undefined) && (exportMode !== null)) {
            for (var _i = 0, exportMode_1 = exportMode; _i < exportMode_1.length; _i++) {
                var item = exportMode_1[_i];
                queryParameters.append('exportMode', item);
            }
        }
        if ((startTime !== undefined) && (startTime !== null)) {
            queryParameters.set('startTime', startTime);
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
    AssetDatabaseApi.prototype["import"] = function (webId, importMode, extraHttpRequestParams) {
        return this.importWithHttpInfo(webId, importMode, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.importWithHttpInfo = function (webId, importMode, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/import'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling importData.');
        }
        if ((importMode !== undefined) && (importMode !== null)) {
            for (var _i = 0, importMode_1 = importMode; _i < importMode_1.length; _i++) {
                var item = importMode_1[_i];
                queryParameters.append('importMode', item);
            }
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
    AssetDatabaseApi.prototype.getReferencedElements = function (webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, selectedFields, sortField, sortOrder, startIndex, templateName, extraHttpRequestParams) {
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
    AssetDatabaseApi.prototype.getReferencedElementsWithHttpInfo = function (webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, selectedFields, sortField, sortOrder, startIndex, templateName, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
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
    AssetDatabaseApi.prototype.addReferencedElement = function (webId, referencedElementWebId, referenceType, extraHttpRequestParams) {
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
    AssetDatabaseApi.prototype.addReferencedElementWithHttpInfo = function (webId, referencedElementWebId, referenceType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
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
    AssetDatabaseApi.prototype.removeReferencedElement = function (webId, referencedElementWebId, extraHttpRequestParams) {
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
    AssetDatabaseApi.prototype.removeReferencedElementWithHttpInfo = function (webId, referencedElementWebId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
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
    AssetDatabaseApi.prototype.getSecurity = function (webId, securityItem, userIdentity, forceRefresh, selectedFields, extraHttpRequestParams) {
        return this.getSecurityWithHttpInfo(webId, securityItem, userIdentity, forceRefresh, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.getSecurityWithHttpInfo = function (webId, securityItem, userIdentity, forceRefresh, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/security'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
        }
        if (securityItem === null || securityItem === undefined) {
            throw new Error('Required parameter securityItem was null or undefined when calling getSecurity.');
        }
        if (userIdentity === null || userIdentity === undefined) {
            throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
        }
        if ((securityItem !== undefined) && (securityItem !== null)) {
            for (var _i = 0, securityItem_1 = securityItem; _i < securityItem_1.length; _i++) {
                var item = securityItem_1[_i];
                queryParameters.append('securityItem', item);
            }
        }
        if ((userIdentity !== undefined) && (userIdentity !== null)) {
            for (var _a = 0, userIdentity_1 = userIdentity; _a < userIdentity_1.length; _a++) {
                var item = userIdentity_1[_a];
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
    AssetDatabaseApi.prototype.getSecurityEntries = function (webId, nameFilter, securityItem, selectedFields, extraHttpRequestParams) {
        return this.getSecurityEntriesWithHttpInfo(webId, nameFilter, securityItem, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.getSecurityEntriesWithHttpInfo = function (webId, nameFilter, securityItem, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
        }
        if ((nameFilter !== undefined) && (nameFilter !== null)) {
            queryParameters.set('nameFilter', nameFilter);
        }
        if ((securityItem !== undefined) && (securityItem !== null)) {
            queryParameters.set('securityItem', securityItem);
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
    AssetDatabaseApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, securityItem, extraHttpRequestParams) {
        return this.createSecurityEntryWithHttpInfo(webId, securityEntry, applyToChildren, securityItem, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.createSecurityEntryWithHttpInfo = function (webId, securityEntry, applyToChildren, securityItem, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries'
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
        if ((securityItem !== undefined) && (securityItem !== null)) {
            queryParameters.set('securityItem', securityItem);
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
    AssetDatabaseApi.prototype.getSecurityEntryByName = function (name, webId, securityItem, selectedFields, extraHttpRequestParams) {
        return this.getSecurityEntryByNameWithHttpInfo(name, webId, securityItem, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.getSecurityEntryByNameWithHttpInfo = function (name, webId, securityItem, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
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
        if ((securityItem !== undefined) && (securityItem !== null)) {
            queryParameters.set('securityItem', securityItem);
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
    AssetDatabaseApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, securityItem, extraHttpRequestParams) {
        return this.updateSecurityEntryWithHttpInfo(name, webId, securityEntry, applyToChildren, securityItem, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.updateSecurityEntryWithHttpInfo = function (name, webId, securityEntry, applyToChildren, securityItem, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
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
        if ((securityItem !== undefined) && (securityItem !== null)) {
            queryParameters.set('securityItem', securityItem);
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
    AssetDatabaseApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, securityItem, extraHttpRequestParams) {
        return this.deleteSecurityEntryWithHttpInfo(name, webId, applyToChildren, securityItem, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.deleteSecurityEntryWithHttpInfo = function (name, webId, applyToChildren, securityItem, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
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
        if ((securityItem !== undefined) && (securityItem !== null)) {
            queryParameters.set('securityItem', securityItem);
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
    AssetDatabaseApi.prototype.getTableCategories = function (webId, selectedFields, extraHttpRequestParams) {
        return this.getTableCategoriesWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.getTableCategoriesWithHttpInfo = function (webId, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/tablecategories'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getTableCategories.');
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
    AssetDatabaseApi.prototype.createTableCategory = function (webId, tableCategory, extraHttpRequestParams) {
        return this.createTableCategoryWithHttpInfo(webId, tableCategory, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.createTableCategoryWithHttpInfo = function (webId, tableCategory, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/tablecategories'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createTableCategory.');
        }
        if (tableCategory === null || tableCategory === undefined) {
            throw new Error('Required parameter tableCategory was null or undefined when calling createTableCategory.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(tableCategory),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    AssetDatabaseApi.prototype.getTables = function (webId, selectedFields, extraHttpRequestParams) {
        return this.getTablesWithHttpInfo(webId, selectedFields, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.getTablesWithHttpInfo = function (webId, selectedFields, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/tables'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getTables.');
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
    AssetDatabaseApi.prototype.createTable = function (webId, table, extraHttpRequestParams) {
        return this.createTableWithHttpInfo(webId, table, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    AssetDatabaseApi.prototype.createTableWithHttpInfo = function (webId, table, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/assetdatabases/{webId}/tables'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createTable.');
        }
        if (table === null || table === undefined) {
            throw new Error('Required parameter table was null or undefined when calling createTable.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(table),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    return AssetDatabaseApi;
}());
AssetDatabaseApi = __decorate([
    core_1.Injectable()
], AssetDatabaseApi);
exports.AssetDatabaseApi = AssetDatabaseApi;
