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

export class PIAnnotation {
	public Id?: string;
	public Name?: string;
	public Description?: string;
	public Value?: any;
	public Creator?: string;
	public CreationDate?: string;
	public Modifier?: string;
	public ModifyDate?: string;
	public Links?: Models.PIAnnotationLinks;
	public WebException?: Models.PIWebException;
	constructor(id?: string, name?: string, description?: string, value?: any, creator?: string, creationDate?: string, modifier?: string, modifyDate?: string, links?: Models.PIAnnotationLinks, webException?: Models.PIWebException)
	{
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
		if (value!=null)
		{
			this.Value=value
		}
		if (creator!=null)
		{
			this.Creator=creator
		}
		if (creationDate!=null)
		{
			this.CreationDate=creationDate
		}
		if (modifier!=null)
		{
			this.Modifier=modifier
		}
		if (modifyDate!=null)
		{
			this.ModifyDate=modifyDate
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
