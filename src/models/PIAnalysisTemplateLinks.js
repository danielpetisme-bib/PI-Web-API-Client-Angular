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
var PIAnalysisTemplateLinks = (function () {
    function PIAnalysisTemplateLinks(self, database, categories, analysisRule, analysisRulePlugIn, timeRule, timeRulePlugIn, target, security, securityEntries) {
        if (self != null) {
            this.Self = self;
        }
        if (database != null) {
            this.Database = database;
        }
        if (categories != null) {
            this.Categories = categories;
        }
        if (analysisRule != null) {
            this.AnalysisRule = analysisRule;
        }
        if (analysisRulePlugIn != null) {
            this.AnalysisRulePlugIn = analysisRulePlugIn;
        }
        if (timeRule != null) {
            this.TimeRule = timeRule;
        }
        if (timeRulePlugIn != null) {
            this.TimeRulePlugIn = timeRulePlugIn;
        }
        if (target != null) {
            this.Target = target;
        }
        if (security != null) {
            this.Security = security;
        }
        if (securityEntries != null) {
            this.SecurityEntries = securityEntries;
        }
    }
    return PIAnalysisTemplateLinks;
}());
exports.PIAnalysisTemplateLinks = PIAnalysisTemplateLinks;
