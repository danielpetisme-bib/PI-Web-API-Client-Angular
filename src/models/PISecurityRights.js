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
var PISecurityRights = (function () {
    function PISecurityRights(ownerWebId, securityItem, userIdentity, links, canAnnotate, canDelete, canExecute, canRead, canReadData, canSubscribe, canSubscribeOthers, canWrite, canWriteData, hasAdmin, rights, webException) {
        if (ownerWebId != null) {
            this.OwnerWebId = ownerWebId;
        }
        if (securityItem != null) {
            this.SecurityItem = securityItem;
        }
        if (userIdentity != null) {
            this.UserIdentity = userIdentity;
        }
        if (links != null) {
            this.Links = links;
        }
        if (canAnnotate != null) {
            this.CanAnnotate = canAnnotate;
        }
        if (canDelete != null) {
            this.CanDelete = canDelete;
        }
        if (canExecute != null) {
            this.CanExecute = canExecute;
        }
        if (canRead != null) {
            this.CanRead = canRead;
        }
        if (canReadData != null) {
            this.CanReadData = canReadData;
        }
        if (canSubscribe != null) {
            this.CanSubscribe = canSubscribe;
        }
        if (canSubscribeOthers != null) {
            this.CanSubscribeOthers = canSubscribeOthers;
        }
        if (canWrite != null) {
            this.CanWrite = canWrite;
        }
        if (canWriteData != null) {
            this.CanWriteData = canWriteData;
        }
        if (hasAdmin != null) {
            this.HasAdmin = hasAdmin;
        }
        if (rights != null) {
            this.Rights = rights;
        }
        if (webException != null) {
            this.WebException = webException;
        }
    }
    return PISecurityRights;
}());
exports.PISecurityRights = PISecurityRights;
