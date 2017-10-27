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
var PITimeRulePlugIn = (function () {
    function PITimeRulePlugIn(webId, id, name, description, path, assemblyFileName, assemblyID, assemblyLoadProperties, assemblyTime, compatibilityVersion, isBrowsable, isNonEditableConfig, loadedAssemblyTime, loadedVersion, version, links) {
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
        if (assemblyFileName != null) {
            this.AssemblyFileName = assemblyFileName;
        }
        if (assemblyID != null) {
            this.AssemblyID = assemblyID;
        }
        if (assemblyLoadProperties != null) {
            this.AssemblyLoadProperties = assemblyLoadProperties;
        }
        if (assemblyTime != null) {
            this.AssemblyTime = assemblyTime;
        }
        if (compatibilityVersion != null) {
            this.CompatibilityVersion = compatibilityVersion;
        }
        if (isBrowsable != null) {
            this.IsBrowsable = isBrowsable;
        }
        if (isNonEditableConfig != null) {
            this.IsNonEditableConfig = isNonEditableConfig;
        }
        if (loadedAssemblyTime != null) {
            this.LoadedAssemblyTime = loadedAssemblyTime;
        }
        if (loadedVersion != null) {
            this.LoadedVersion = loadedVersion;
        }
        if (version != null) {
            this.Version = version;
        }
        if (links != null) {
            this.Links = links;
        }
    }
    return PITimeRulePlugIn;
}());
exports.PITimeRulePlugIn = PITimeRulePlugIn;
