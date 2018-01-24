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
var PIPointLinks = (function () {
    function PIPointLinks(self, dataServer, attributes, interpolatedData, recordedData, plotData, summaryData, value, endValue) {
        if (self != null) {
            this.Self = self;
        }
        if (dataServer != null) {
            this.DataServer = dataServer;
        }
        if (attributes != null) {
            this.Attributes = attributes;
        }
        if (interpolatedData != null) {
            this.InterpolatedData = interpolatedData;
        }
        if (recordedData != null) {
            this.RecordedData = recordedData;
        }
        if (plotData != null) {
            this.PlotData = plotData;
        }
        if (summaryData != null) {
            this.SummaryData = summaryData;
        }
        if (value != null) {
            this.Value = value;
        }
        if (endValue != null) {
            this.EndValue = endValue;
        }
    }
    return PIPointLinks;
}());
exports.PIPointLinks = PIPointLinks;
