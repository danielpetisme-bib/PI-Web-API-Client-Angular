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
var EventFrameApi = (function () {
    function EventFrameApi(http, basePath, defaultHeaders) {
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
    EventFrameApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    EventFrameApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
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
    EventFrameApi.prototype.getByPathWithHttpInfo = function (path, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes';
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
    EventFrameApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
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
    EventFrameApi.prototype.getWithHttpInfo = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}'
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
    EventFrameApi.prototype.update = function (webId, eventFrame, extraHttpRequestParams) {
        return this.updateWithHttpInfo(webId, eventFrame, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.updateWithHttpInfo = function (webId, eventFrame, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling update.');
        }
        if (eventFrame === null || eventFrame === undefined) {
            throw new Error('Required parameter eventFrame was null or undefined when calling update.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Patch,
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
    EventFrameApi.prototype["delete"] = function (webId, extraHttpRequestParams) {
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
    EventFrameApi.prototype.deleteWithHttpInfo = function (webId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}'
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
    EventFrameApi.prototype.acknowledge = function (webId, extraHttpRequestParams) {
        return this.acknowledgeWithHttpInfo(webId, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.acknowledgeWithHttpInfo = function (webId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/acknowledge'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling acknowledge.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Patch,
            headers: headers,
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    EventFrameApi.prototype.getAnnotations = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        return this.getAnnotationsWithHttpInfo(webId, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.getAnnotationsWithHttpInfo = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/annotations'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getAnnotations.');
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
    EventFrameApi.prototype.createAnnotation = function (webId, annotation, webIdType, extraHttpRequestParams) {
        return this.createAnnotationWithHttpInfo(webId, annotation, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.createAnnotationWithHttpInfo = function (webId, annotation, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/annotations'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createAnnotation.');
        }
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling createAnnotation.');
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(annotation),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    EventFrameApi.prototype.getAnnotationById = function (id, webId, selectedFields, webIdType, extraHttpRequestParams) {
        return this.getAnnotationByIdWithHttpInfo(id, webId, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.getAnnotationByIdWithHttpInfo = function (id, webId, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getAnnotationById.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getAnnotationById.');
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
    EventFrameApi.prototype.updateAnnotation = function (id, webId, annotation, extraHttpRequestParams) {
        return this.updateAnnotationWithHttpInfo(id, webId, annotation, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.updateAnnotationWithHttpInfo = function (id, webId, annotation, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateAnnotation.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling updateAnnotation.');
        }
        if (annotation === null || annotation === undefined) {
            throw new Error('Required parameter annotation was null or undefined when calling updateAnnotation.');
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Patch,
            headers: headers,
            body: JSON.stringify(annotation),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    EventFrameApi.prototype.deleteAnnotation = function (id, webId, extraHttpRequestParams) {
        return this.deleteAnnotationWithHttpInfo(id, webId, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.deleteAnnotationWithHttpInfo = function (id, webId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteAnnotation.');
        }
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling deleteAnnotation.');
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
    EventFrameApi.prototype.getAttributes = function (webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, valueType, webIdType, extraHttpRequestParams) {
        return this.getAttributesWithHttpInfo(webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, valueType, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.getAttributesWithHttpInfo = function (webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, valueType, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/attributes'
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
    EventFrameApi.prototype.createAttribute = function (webId, attribute, webIdType, extraHttpRequestParams) {
        return this.createAttributeWithHttpInfo(webId, attribute, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.createAttributeWithHttpInfo = function (webId, attribute, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/attributes'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createAttribute.');
        }
        if (attribute === null || attribute === undefined) {
            throw new Error('Required parameter attribute was null or undefined when calling createAttribute.');
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    EventFrameApi.prototype.captureValues = function (webId, extraHttpRequestParams) {
        return this.captureValuesWithHttpInfo(webId, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.captureValuesWithHttpInfo = function (webId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/attributes/capture'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling captureValues.');
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
    EventFrameApi.prototype.getCategories = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        return this.getCategoriesWithHttpInfo(webId, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.getCategoriesWithHttpInfo = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/categories'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getCategories.');
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
    EventFrameApi.prototype.createConfig = function (webId, includeChildElements, extraHttpRequestParams) {
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
    EventFrameApi.prototype.createConfigWithHttpInfo = function (webId, includeChildElements, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/config'
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
    EventFrameApi.prototype.findEventFrameAttributes = function (webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, endTime, eventFrameCategory, eventFrameDescriptionFilter, eventFrameNameFilter, eventFrameTemplate, maxCount, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, sortField, sortOrder, startIndex, startTime, webIdType, extraHttpRequestParams) {
        return this.findEventFrameAttributesWithHttpInfo(webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, endTime, eventFrameCategory, eventFrameDescriptionFilter, eventFrameNameFilter, eventFrameTemplate, maxCount, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, sortField, sortOrder, startIndex, startTime, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.findEventFrameAttributesWithHttpInfo = function (webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, endTime, eventFrameCategory, eventFrameDescriptionFilter, eventFrameNameFilter, eventFrameTemplate, maxCount, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, sortField, sortOrder, startIndex, startTime, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/eventframeattributes'
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
    EventFrameApi.prototype.getEventFrames = function (webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, referencedElementTemplateName, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, webIdType, extraHttpRequestParams) {
        return this.getEventFramesWithHttpInfo(webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, referencedElementTemplateName, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.getEventFramesWithHttpInfo = function (webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, referencedElementTemplateName, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/eventframes'
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
    EventFrameApi.prototype.createEventFrame = function (webId, eventFrame, webIdType, extraHttpRequestParams) {
        return this.createEventFrameWithHttpInfo(webId, eventFrame, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.createEventFrameWithHttpInfo = function (webId, eventFrame, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/eventframes'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling createEventFrame.');
        }
        if (eventFrame === null || eventFrame === undefined) {
            throw new Error('Required parameter eventFrame was null or undefined when calling createEventFrame.');
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
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
    EventFrameApi.prototype.getReferencedElements = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        return this.getReferencedElementsWithHttpInfo(webId, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.getReferencedElementsWithHttpInfo = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/referencedelements'
            .replace('{' + 'webId' + '}', String(webId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (webId === null || webId === undefined) {
            throw new Error('Required parameter webId was null or undefined when calling getReferencedElements.');
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
    EventFrameApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
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
    EventFrameApi.prototype.getSecurityWithHttpInfo = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/security'
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
    EventFrameApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
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
    EventFrameApi.prototype.getSecurityEntriesWithHttpInfo = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/securityentries'
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
    EventFrameApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
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
    EventFrameApi.prototype.createSecurityEntryWithHttpInfo = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/securityentries'
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
    EventFrameApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
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
    EventFrameApi.prototype.getSecurityEntryByNameWithHttpInfo = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
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
    EventFrameApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
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
    EventFrameApi.prototype.updateSecurityEntryWithHttpInfo = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
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
    EventFrameApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
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
    EventFrameApi.prototype.deleteSecurityEntryWithHttpInfo = function (name, webId, applyToChildren, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
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
    EventFrameApi.prototype.getMultiple = function (asParallel, includeMode, path, selectedFields, webId, webIdType, extraHttpRequestParams) {
        return this.getMultipleWithHttpInfo(asParallel, includeMode, path, selectedFields, webId, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.getMultipleWithHttpInfo = function (asParallel, includeMode, path, selectedFields, webId, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/multiple';
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
    EventFrameApi.prototype.getEventFramesQuery = function (databaseWebId, maxCount, query, selectedFields, startIndex, webIdType, extraHttpRequestParams) {
        return this.getEventFramesQueryWithHttpInfo(databaseWebId, maxCount, query, selectedFields, startIndex, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.getEventFramesQueryWithHttpInfo = function (databaseWebId, maxCount, query, selectedFields, startIndex, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/search';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if ((databaseWebId !== undefined) && (databaseWebId !== null)) {
            queryParameters.set('databaseWebId', databaseWebId);
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
    EventFrameApi.prototype.createSearchByAttribute = function (query, noResults, selectedFields, webIdType, extraHttpRequestParams) {
        return this.createSearchByAttributeWithHttpInfo(query, noResults, selectedFields, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.createSearchByAttributeWithHttpInfo = function (query, noResults, selectedFields, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/searchbyattribute';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling createSearchByAttribute.');
        }
        if ((noResults !== undefined) && (noResults !== null)) {
            queryParameters.set('noResults', noResults);
        }
        if ((selectedFields !== undefined) && (selectedFields !== null)) {
            queryParameters.set('selectedFields', selectedFields);
        }
        if ((webIdType !== undefined) && (webIdType !== null)) {
            queryParameters.set('webIdType', webIdType);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: JSON.stringify(query),
            search: queryParameters,
            withCredentials: this.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(localVarPath, requestOptions);
    };
    EventFrameApi.prototype.executeSearchByAttribute = function (searchId, canBeAcknowledged, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, webIdType, extraHttpRequestParams) {
        return this.executeSearchByAttributeWithHttpInfo(searchId, canBeAcknowledged, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, webIdType, extraHttpRequestParams)
            .map(function (response) {
            try {
                return response.json();
            }
            catch (e) {
                return {};
            }
        });
    };
    EventFrameApi.prototype.executeSearchByAttributeWithHttpInfo = function (searchId, canBeAcknowledged, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, webIdType, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/eventframes/searchbyattribute/{searchId}'
            .replace('{' + 'searchId' + '}', String(searchId));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (searchId === null || searchId === undefined) {
            throw new Error('Required parameter searchId was null or undefined when calling executeSearchByAttribute.');
        }
        if ((canBeAcknowledged !== undefined) && (canBeAcknowledged !== null)) {
            queryParameters.set('canBeAcknowledged', canBeAcknowledged);
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
            for (var _i = 0, severity_2 = severity; _i < severity_2.length; _i++) {
                var item = severity_2[_i];
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
    return EventFrameApi;
}());
EventFrameApi = __decorate([
    core_1.Injectable()
], EventFrameApi);
exports.EventFrameApi = EventFrameApi;
