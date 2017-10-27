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
var PIAnalysisRule = (function () {
    function PIAnalysisRule(webId, id, name, description, path, configString, displayString, editorType, hasChildren, isConfigured, isInitializing, plugInName, supportedBehaviors, variableMapping, links) {
        if (webId != null) {
            this.WebId = webId;
        }
        if (id != null) {
            this.Id = id;
        }
        if (name != null) {
            this.Name = name;
        }
        if (description != null) {
            this.Description = description;
        }
        if (path != null) {
            this.Path = path;
        }
        if (configString != null) {
            this.ConfigString = configString;
        }
        if (displayString != null) {
            this.DisplayString = displayString;
        }
        if (editorType != null) {
            this.EditorType = editorType;
        }
        if (hasChildren != null) {
            this.HasChildren = hasChildren;
        }
        if (isConfigured != null) {
            this.IsConfigured = isConfigured;
        }
        if (isInitializing != null) {
            this.IsInitializing = isInitializing;
        }
        if (plugInName != null) {
            this.PlugInName = plugInName;
        }
        if (supportedBehaviors != null) {
            this.SupportedBehaviors = supportedBehaviors;
        }
        if (variableMapping != null) {
            this.VariableMapping = variableMapping;
        }
        if (links != null) {
            this.Links = links;
        }
    }
    return PIAnalysisRule;
}());
exports.PIAnalysisRule = PIAnalysisRule;
