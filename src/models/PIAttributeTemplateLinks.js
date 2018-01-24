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
var PIAttributeTemplateLinks = (function () {
    function PIAttributeTemplateLinks(self, attributeTemplates, elementTemplate, parent, categories, trait) {
        if (self != null) {
            this.Self = self;
        }
        if (attributeTemplates != null) {
            this.AttributeTemplates = attributeTemplates;
        }
        if (elementTemplate != null) {
            this.ElementTemplate = elementTemplate;
        }
        if (parent != null) {
            this.Parent = parent;
        }
        if (categories != null) {
            this.Categories = categories;
        }
        if (trait != null) {
            this.Trait = trait;
        }
    }
    return PIAttributeTemplateLinks;
}());
exports.PIAttributeTemplateLinks = PIAttributeTemplateLinks;
