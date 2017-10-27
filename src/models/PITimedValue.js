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
var PITimedValue = (function () {
    function PITimedValue(timestamp, unitsAbbreviation, good, questionable, substituted, value, exception) {
        if (timestamp != null) {
            this.Timestamp = timestamp;
        }
        if (unitsAbbreviation != null) {
            this.UnitsAbbreviation = unitsAbbreviation;
        }
        if (good != null) {
            this.Good = good;
        }
        if (questionable != null) {
            this.Questionable = questionable;
        }
        if (substituted != null) {
            this.Substituted = substituted;
        }
        if (value != null) {
            this.Value = value;
        }
        if (exception != null) {
            this.Exception = exception;
        }
    }
    return PITimedValue;
}());
exports.PITimedValue = PITimedValue;
