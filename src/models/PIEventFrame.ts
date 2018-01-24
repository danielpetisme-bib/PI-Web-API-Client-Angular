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

import * as Models from './models';

export class PIEventFrame {
	public WebId?: string;
	public Id?: string;
	public Name?: string;
	public Description?: string;
	public Path?: string;
	public TemplateName?: string;
	public HasChildren?: boolean;
	public CategoryNames?: Array<string>;
	public ExtendedProperties?: { [key: string]: Models.PIValue; };
	public StartTime?: string;
	public EndTime?: string;
	public Severity?: string;
	public AcknowledgedBy?: string;
	public AcknowledgedDate?: string;
	public CanBeAcknowledged?: boolean;
	public IsAcknowledged?: boolean;
	public IsAnnotated?: boolean;
	public IsLocked?: boolean;
	public AreValuesCaptured?: boolean;
	public RefElementWebIds?: Array<string>;
	public Security?: Models.PISecurity;
	public Links?: Models.PIEventFrameLinks;
	public WebException?: Models.PIWebException;
	constructor(webId?: string, id?: string, name?: string, description?: string, path?: string, templateName?: string, hasChildren?: boolean, categoryNames?: Array<string>, extendedProperties?: { [key: string]: Models.PIValue; }, startTime?: string, endTime?: string, severity?: string, acknowledgedBy?: string, acknowledgedDate?: string, canBeAcknowledged?: boolean, isAcknowledged?: boolean, isAnnotated?: boolean, isLocked?: boolean, areValuesCaptured?: boolean, refElementWebIds?: Array<string>, security?: Models.PISecurity, links?: Models.PIEventFrameLinks, webException?: Models.PIWebException)
	{
		if (webId!=null)
		{
			this.WebId=webId
		}
		if (id!=null)
		{
			this.Id=id
		}
		if (name!=null)
		{
			this.Name=name
		}
		if (description!=null)
		{
			this.Description=description
		}
		if (path!=null)
		{
			this.Path=path
		}
		if (templateName!=null)
		{
			this.TemplateName=templateName
		}
		if (hasChildren!=null)
		{
			this.HasChildren=hasChildren
		}
		if (categoryNames!=null)
		{
			this.CategoryNames=categoryNames
		}
		if (extendedProperties!=null)
		{
			this.ExtendedProperties=extendedProperties
		}
		if (startTime!=null)
		{
			this.StartTime=startTime
		}
		if (endTime!=null)
		{
			this.EndTime=endTime
		}
		if (severity!=null)
		{
			this.Severity=severity
		}
		if (acknowledgedBy!=null)
		{
			this.AcknowledgedBy=acknowledgedBy
		}
		if (acknowledgedDate!=null)
		{
			this.AcknowledgedDate=acknowledgedDate
		}
		if (canBeAcknowledged!=null)
		{
			this.CanBeAcknowledged=canBeAcknowledged
		}
		if (isAcknowledged!=null)
		{
			this.IsAcknowledged=isAcknowledged
		}
		if (isAnnotated!=null)
		{
			this.IsAnnotated=isAnnotated
		}
		if (isLocked!=null)
		{
			this.IsLocked=isLocked
		}
		if (areValuesCaptured!=null)
		{
			this.AreValuesCaptured=areValuesCaptured
		}
		if (refElementWebIds!=null)
		{
			this.RefElementWebIds=refElementWebIds
		}
		if (security!=null)
		{
			this.Security=security
		}
		if (links!=null)
		{
			this.Links=links
		}
		if (webException!=null)
		{
			this.WebException=webException
		}
	}
}
