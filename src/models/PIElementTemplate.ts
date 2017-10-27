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

export class PIElementTemplate {
	public WebId?: string;
	public Id?: string;
	public Name?: string;
	public Description?: string;
	public Path?: string;
	public AllowElementToExtend?: boolean;
	public BaseTemplate?: string;
	public InstanceType?: string;
	public NamingPattern?: string;
	public CategoryNames?: Array<string>;
	public ExtendedProperties?: { [key: string]: Models.PIValue; };
	public Severity?: string;
	public CanBeAcknowledged?: boolean;
	public Links?: { [key: string]: string; };
	constructor(webId?: string, id?: string, name?: string, description?: string, path?: string, allowElementToExtend?: boolean, baseTemplate?: string, instanceType?: string, namingPattern?: string, categoryNames?: Array<string>, extendedProperties?: { [key: string]: Models.PIValue; }, severity?: string, canBeAcknowledged?: boolean, links?: { [key: string]: string; })
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
		if (allowElementToExtend!=null)
		{
			this.AllowElementToExtend=allowElementToExtend
		}
		if (baseTemplate!=null)
		{
			this.BaseTemplate=baseTemplate
		}
		if (instanceType!=null)
		{
			this.InstanceType=instanceType
		}
		if (namingPattern!=null)
		{
			this.NamingPattern=namingPattern
		}
		if (categoryNames!=null)
		{
			this.CategoryNames=categoryNames
		}
		if (extendedProperties!=null)
		{
			this.ExtendedProperties=extendedProperties
		}
		if (severity!=null)
		{
			this.Severity=severity
		}
		if (canBeAcknowledged!=null)
		{
			this.CanBeAcknowledged=canBeAcknowledged
		}
		if (links!=null)
		{
			this.Links=links
		}
	}
}
