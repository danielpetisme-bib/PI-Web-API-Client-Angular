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
var PIAnalysis = (function () {
    function PIAnalysis(webId, id, name, description, path, analysisRulePlugInName, autoCreated, categoryNames, groupId, hasNotification, hasTarget, hasTemplate, isConfigured, isTimeRuleDefinedByTemplate, maximumQueueSize, outputTime, priority, publishResults, status, targetWebId, templateName, timeRulePlugInName, links) {
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
        if (analysisRulePlugInName != null) {
            this.AnalysisRulePlugInName = analysisRulePlugInName;
        }
        if (autoCreated != null) {
            this.AutoCreated = autoCreated;
        }
        if (categoryNames != null) {
            this.CategoryNames = categoryNames;
        }
        if (groupId != null) {
            this.GroupId = groupId;
        }
        if (hasNotification != null) {
            this.HasNotification = hasNotification;
        }
        if (hasTarget != null) {
            this.HasTarget = hasTarget;
        }
        if (hasTemplate != null) {
            this.HasTemplate = hasTemplate;
        }
        if (isConfigured != null) {
            this.IsConfigured = isConfigured;
        }
        if (isTimeRuleDefinedByTemplate != null) {
            this.IsTimeRuleDefinedByTemplate = isTimeRuleDefinedByTemplate;
        }
        if (maximumQueueSize != null) {
            this.MaximumQueueSize = maximumQueueSize;
        }
        if (outputTime != null) {
            this.OutputTime = outputTime;
        }
        if (priority != null) {
            this.Priority = priority;
        }
        if (publishResults != null) {
            this.PublishResults = publishResults;
        }
        if (status != null) {
            this.Status = status;
        }
        if (targetWebId != null) {
            this.TargetWebId = targetWebId;
        }
        if (templateName != null) {
            this.TemplateName = templateName;
        }
        if (timeRulePlugInName != null) {
            this.TimeRulePlugInName = timeRulePlugInName;
        }
        if (links != null) {
            this.Links = links;
        }
    }
    return PIAnalysis;
}());
exports.PIAnalysis = PIAnalysis;
