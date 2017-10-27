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
var PIAnnotation = (function () {
    function PIAnnotation(id, name, description, value, creator, creationDate, modifier, modifyDate, links) {
        if (id != null) {
            this.Id = id;
        }
        if (name != null) {
            this.Name = name;
        }
        if (description != null) {
            this.Description = description;
        }
        if (value != null) {
            this.Value = value;
        }
        if (creator != null) {
            this.Creator = creator;
        }
        if (creationDate != null) {
            this.CreationDate = creationDate;
        }
        if (modifier != null) {
            this.Modifier = modifier;
        }
        if (modifyDate != null) {
            this.ModifyDate = modifyDate;
        }
        if (links != null) {
            this.Links = links;
        }
    }
    return PIAnnotation;
}());
exports.PIAnnotation = PIAnnotation;
