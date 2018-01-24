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

export class PITimeRule {
	public WebId?: string;
	public Id?: string;
	public Name?: string;
	public Description?: string;
	public Path?: string;
	public ConfigString?: string;
	public ConfigStringStored?: string;
	public DisplayString?: string;
	public EditorType?: string;
	public IsConfigured?: boolean;
	public IsInitializing?: boolean;
	public MergeDuplicatedItems?: boolean;
	public PlugInName?: string;
	public Links?: Models.PITimeRuleLinks;
	public WebException?: Models.PIWebException;
	constructor(webId?: string, id?: string, name?: string, description?: string, path?: string, configString?: string, configStringStored?: string, displayString?: string, editorType?: string, isConfigured?: boolean, isInitializing?: boolean, mergeDuplicatedItems?: boolean, plugInName?: string, links?: Models.PITimeRuleLinks, webException?: Models.PIWebException)
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
		if (configString!=null)
		{
			this.ConfigString=configString
		}
		if (configStringStored!=null)
		{
			this.ConfigStringStored=configStringStored
		}
		if (displayString!=null)
		{
			this.DisplayString=displayString
		}
		if (editorType!=null)
		{
			this.EditorType=editorType
		}
		if (isConfigured!=null)
		{
			this.IsConfigured=isConfigured
		}
		if (isInitializing!=null)
		{
			this.IsInitializing=isInitializing
		}
		if (mergeDuplicatedItems!=null)
		{
			this.MergeDuplicatedItems=mergeDuplicatedItems
		}
		if (plugInName!=null)
		{
			this.PlugInName=plugInName
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
