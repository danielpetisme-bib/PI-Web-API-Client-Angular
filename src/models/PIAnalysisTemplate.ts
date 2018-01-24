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

export class PIAnalysisTemplate {
	public WebId?: string;
	public Id?: string;
	public Name?: string;
	public Description?: string;
	public Path?: string;
	public AnalysisRulePlugInName?: string;
	public CategoryNames?: Array<string>;
	public CreateEnabled?: boolean;
	public GroupId?: number;
	public HasNotificationTemplate?: boolean;
	public HasTarget?: boolean;
	public OutputTime?: string;
	public TargetName?: string;
	public TimeRulePlugInName?: string;
	public Links?: Models.PIAnalysisTemplateLinks;
	public WebException?: Models.PIWebException;
	constructor(webId?: string, id?: string, name?: string, description?: string, path?: string, analysisRulePlugInName?: string, categoryNames?: Array<string>, createEnabled?: boolean, groupId?: number, hasNotificationTemplate?: boolean, hasTarget?: boolean, outputTime?: string, targetName?: string, timeRulePlugInName?: string, links?: Models.PIAnalysisTemplateLinks, webException?: Models.PIWebException)
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
		if (analysisRulePlugInName!=null)
		{
			this.AnalysisRulePlugInName=analysisRulePlugInName
		}
		if (categoryNames!=null)
		{
			this.CategoryNames=categoryNames
		}
		if (createEnabled!=null)
		{
			this.CreateEnabled=createEnabled
		}
		if (groupId!=null)
		{
			this.GroupId=groupId
		}
		if (hasNotificationTemplate!=null)
		{
			this.HasNotificationTemplate=hasNotificationTemplate
		}
		if (hasTarget!=null)
		{
			this.HasTarget=hasTarget
		}
		if (outputTime!=null)
		{
			this.OutputTime=outputTime
		}
		if (targetName!=null)
		{
			this.TargetName=targetName
		}
		if (timeRulePlugInName!=null)
		{
			this.TimeRulePlugInName=timeRulePlugInName
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
