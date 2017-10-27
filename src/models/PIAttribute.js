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
var PIAttribute = (function () {
    function PIAttribute(webId, id, name, description, path, type, typeQualifier, defaultUnitsName, dataReferencePlugIn, configString, isConfigurationItem, isExcluded, isHidden, isManualDataEntry, hasChildren, categoryNames, step, traitName, links) {
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
        if (type != null) {
            this.Type = type;
        }
        if (typeQualifier != null) {
            this.TypeQualifier = typeQualifier;
        }
        if (defaultUnitsName != null) {
            this.DefaultUnitsName = defaultUnitsName;
        }
        if (dataReferencePlugIn != null) {
            this.DataReferencePlugIn = dataReferencePlugIn;
        }
        if (configString != null) {
            this.ConfigString = configString;
        }
        if (isConfigurationItem != null) {
            this.IsConfigurationItem = isConfigurationItem;
        }
        if (isExcluded != null) {
            this.IsExcluded = isExcluded;
        }
        if (isHidden != null) {
            this.IsHidden = isHidden;
        }
        if (isManualDataEntry != null) {
            this.IsManualDataEntry = isManualDataEntry;
        }
        if (hasChildren != null) {
            this.HasChildren = hasChildren;
        }
        if (categoryNames != null) {
            this.CategoryNames = categoryNames;
        }
        if (step != null) {
            this.Step = step;
        }
        if (traitName != null) {
            this.TraitName = traitName;
        }
        if (links != null) {
            this.Links = links;
        }
    }
    return PIAttribute;
}());
exports.PIAttribute = PIAttribute;
