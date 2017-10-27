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
exports.__esModule = true;
var PIRequest = (function () {
    function PIRequest(method, resource, requestTemplate, parameters, headers, content, parentIds) {
        if (method != null) {
            this.Method = method;
        }
        if (resource != null) {
            this.Resource = resource;
        }
        if (requestTemplate != null) {
            this.RequestTemplate = requestTemplate;
        }
        if (parameters != null) {
            this.Parameters = parameters;
        }
        if (headers != null) {
            this.Headers = headers;
        }
        if (content != null) {
            this.Content = content;
        }
        if (parentIds != null) {
            this.ParentIds = parentIds;
        }
    }
    return PIRequest;
}());
exports.PIRequest = PIRequest;
