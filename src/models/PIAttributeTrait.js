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
exports.__esModule = true;
var PIAttributeTrait = (function () {
    function PIAttributeTrait(name, abbreviation, allowChildAttributes, allowDuplicates, isAllowedOnRootAttribute, isTypeInherited, isUOMInherited, requireNumeric, requireString, links, webException) {
        if (name != null) {
            this.Name = name;
        }
        if (abbreviation != null) {
            this.Abbreviation = abbreviation;
        }
        if (allowChildAttributes != null) {
            this.AllowChildAttributes = allowChildAttributes;
        }
        if (allowDuplicates != null) {
            this.AllowDuplicates = allowDuplicates;
        }
        if (isAllowedOnRootAttribute != null) {
            this.IsAllowedOnRootAttribute = isAllowedOnRootAttribute;
        }
        if (isTypeInherited != null) {
            this.IsTypeInherited = isTypeInherited;
        }
        if (isUOMInherited != null) {
            this.IsUOMInherited = isUOMInherited;
        }
        if (requireNumeric != null) {
            this.RequireNumeric = requireNumeric;
        }
        if (requireString != null) {
            this.RequireString = requireString;
        }
        if (links != null) {
            this.Links = links;
        }
        if (webException != null) {
            this.WebException = webException;
        }
    }
    return PIAttributeTrait;
}());
exports.PIAttributeTrait = PIAttributeTrait;
