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

import * as Models from './models';

export class PIAnalysis {
	public WebId?: string;
	public Id?: string;
	public Name?: string;
	public Description?: string;
	public Path?: string;
	public AnalysisRulePlugInName?: string;
	public AutoCreated?: boolean;
	public CategoryNames?: Array<string>;
	public GroupId?: number;
	public HasNotification?: boolean;
	public HasTarget?: boolean;
	public HasTemplate?: boolean;
	public IsConfigured?: boolean;
	public IsTimeRuleDefinedByTemplate?: boolean;
	public MaximumQueueSize?: number;
	public OutputTime?: string;
	public Priority?: string;
	public PublishResults?: boolean;
	public Status?: string;
	public TargetWebId?: string;
	public TemplateName?: string;
	public TimeRulePlugInName?: string;
	public Links?: { [key: string]: string; };
	constructor(webId?: string, id?: string, name?: string, description?: string, path?: string, analysisRulePlugInName?: string, autoCreated?: boolean, categoryNames?: Array<string>, groupId?: number, hasNotification?: boolean, hasTarget?: boolean, hasTemplate?: boolean, isConfigured?: boolean, isTimeRuleDefinedByTemplate?: boolean, maximumQueueSize?: number, outputTime?: string, priority?: string, publishResults?: boolean, status?: string, targetWebId?: string, templateName?: string, timeRulePlugInName?: string, links?: { [key: string]: string; })
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
		if (autoCreated!=null)
		{
			this.AutoCreated=autoCreated
		}
		if (categoryNames!=null)
		{
			this.CategoryNames=categoryNames
		}
		if (groupId!=null)
		{
			this.GroupId=groupId
		}
		if (hasNotification!=null)
		{
			this.HasNotification=hasNotification
		}
		if (hasTarget!=null)
		{
			this.HasTarget=hasTarget
		}
		if (hasTemplate!=null)
		{
			this.HasTemplate=hasTemplate
		}
		if (isConfigured!=null)
		{
			this.IsConfigured=isConfigured
		}
		if (isTimeRuleDefinedByTemplate!=null)
		{
			this.IsTimeRuleDefinedByTemplate=isTimeRuleDefinedByTemplate
		}
		if (maximumQueueSize!=null)
		{
			this.MaximumQueueSize=maximumQueueSize
		}
		if (outputTime!=null)
		{
			this.OutputTime=outputTime
		}
		if (priority!=null)
		{
			this.Priority=priority
		}
		if (publishResults!=null)
		{
			this.PublishResults=publishResults
		}
		if (status!=null)
		{
			this.Status=status
		}
		if (targetWebId!=null)
		{
			this.TargetWebId=targetWebId
		}
		if (templateName!=null)
		{
			this.TemplateName=templateName
		}
		if (timeRulePlugInName!=null)
		{
			this.TimeRulePlugInName=timeRulePlugInName
		}
		if (links!=null)
		{
			this.Links=links
		}
	}
}
