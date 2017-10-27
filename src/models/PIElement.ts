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

export class PIElement {
	public WebId?: string;
	public Id?: string;
	public Name?: string;
	public Description?: string;
	public Path?: string;
	public TemplateName?: string;
	public HasChildren?: boolean;
	public CategoryNames?: Array<string>;
	public ExtendedProperties?: { [key: string]: Models.PIValue; };
	public Links?: { [key: string]: string; };
	constructor(webId?: string, id?: string, name?: string, description?: string, path?: string, templateName?: string, hasChildren?: boolean, categoryNames?: Array<string>, extendedProperties?: { [key: string]: Models.PIValue; }, links?: { [key: string]: string; })
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
		if (links!=null)
		{
			this.Links=links
		}
	}
}
