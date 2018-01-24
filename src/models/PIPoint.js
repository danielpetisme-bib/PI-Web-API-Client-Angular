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
var PIPoint = (function () {
    function PIPoint(webId, id, name, path, descriptor, pointClass, pointType, digitalSetName, engineeringUnits, step, future, links, webException) {
        if (webId != null) {
            this.WebId = webId;
        }
        if (id != null) {
            this.Id = id;
        }
        if (name != null) {
            this.Name = name;
        }
        if (path != null) {
            this.Path = path;
        }
        if (descriptor != null) {
            this.Descriptor = descriptor;
        }
        if (pointClass != null) {
            this.PointClass = pointClass;
        }
        if (pointType != null) {
            this.PointType = pointType;
        }
        if (digitalSetName != null) {
            this.DigitalSetName = digitalSetName;
        }
        if (engineeringUnits != null) {
            this.EngineeringUnits = engineeringUnits;
        }
        if (step != null) {
            this.Step = step;
        }
        if (future != null) {
            this.Future = future;
        }
        if (links != null) {
            this.Links = links;
        }
        if (webException != null) {
            this.WebException = webException;
        }
    }
    return PIPoint;
}());
exports.PIPoint = PIPoint;
