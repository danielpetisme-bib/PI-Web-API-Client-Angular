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

export class PIAnalysisRule {
	public WebId?: string;
	public Id?: string;
	public Name?: string;
	public Description?: string;
	public Path?: string;
	public ConfigString?: string;
	public DisplayString?: string;
	public EditorType?: string;
	public HasChildren?: boolean;
	public IsConfigured?: boolean;
	public IsInitializing?: boolean;
	public PlugInName?: string;
	public SupportedBehaviors?: Array<string>;
	public VariableMapping?: string;
	public Links?: { [key: string]: string; };
	constructor(webId?: string, id?: string, name?: string, description?: string, path?: string, configString?: string, displayString?: string, editorType?: string, hasChildren?: boolean, isConfigured?: boolean, isInitializing?: boolean, plugInName?: string, supportedBehaviors?: Array<string>, variableMapping?: string, links?: { [key: string]: string; })
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
		if (displayString!=null)
		{
			this.DisplayString=displayString
		}
		if (editorType!=null)
		{
			this.EditorType=editorType
		}
		if (hasChildren!=null)
		{
			this.HasChildren=hasChildren
		}
		if (isConfigured!=null)
		{
			this.IsConfigured=isConfigured
		}
		if (isInitializing!=null)
		{
			this.IsInitializing=isInitializing
		}
		if (plugInName!=null)
		{
			this.PlugInName=plugInName
		}
		if (supportedBehaviors!=null)
		{
			this.SupportedBehaviors=supportedBehaviors
		}
		if (variableMapping!=null)
		{
			this.VariableMapping=variableMapping
		}
		if (links!=null)
		{
			this.Links=links
		}
	}
}
