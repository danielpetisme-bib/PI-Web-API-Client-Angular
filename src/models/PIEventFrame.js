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
var PIEventFrame = (function () {
    function PIEventFrame(webId, id, name, description, path, templateName, hasChildren, categoryNames, extendedProperties, startTime, endTime, severity, acknowledgedBy, acknowledgedDate, canBeAcknowledged, isAcknowledged, isAnnotated, isLocked, areValuesCaptured, refElementWebIds, security, links, webException) {
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
        if (templateName != null) {
            this.TemplateName = templateName;
        }
        if (hasChildren != null) {
            this.HasChildren = hasChildren;
        }
        if (categoryNames != null) {
            this.CategoryNames = categoryNames;
        }
        if (extendedProperties != null) {
            this.ExtendedProperties = extendedProperties;
        }
        if (startTime != null) {
            this.StartTime = startTime;
        }
        if (endTime != null) {
            this.EndTime = endTime;
        }
        if (severity != null) {
            this.Severity = severity;
        }
        if (acknowledgedBy != null) {
            this.AcknowledgedBy = acknowledgedBy;
        }
        if (acknowledgedDate != null) {
            this.AcknowledgedDate = acknowledgedDate;
        }
        if (canBeAcknowledged != null) {
            this.CanBeAcknowledged = canBeAcknowledged;
        }
        if (isAcknowledged != null) {
            this.IsAcknowledged = isAcknowledged;
        }
        if (isAnnotated != null) {
            this.IsAnnotated = isAnnotated;
        }
        if (isLocked != null) {
            this.IsLocked = isLocked;
        }
        if (areValuesCaptured != null) {
            this.AreValuesCaptured = areValuesCaptured;
        }
        if (refElementWebIds != null) {
            this.RefElementWebIds = refElementWebIds;
        }
        if (security != null) {
            this.Security = security;
        }
        if (links != null) {
            this.Links = links;
        }
        if (webException != null) {
            this.WebException = webException;
        }
    }
    return PIEventFrame;
}());
exports.PIEventFrame = PIEventFrame;
