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

export class PIUnit {
	public WebId?: string;
	public Id?: string;
	public Name?: string;
	public Abbreviation?: string;
	public Description?: string;
	public Path?: string;
	public Factor?: number;
	public Offset?: number;
	public ReferenceFactor?: number;
	public ReferenceOffset?: number;
	public ReferenceUnitAbbreviation?: string;
	public Links?: { [key: string]: string; };
	constructor(webId?: string, id?: string, name?: string, abbreviation?: string, description?: string, path?: string, factor?: number, offset?: number, referenceFactor?: number, referenceOffset?: number, referenceUnitAbbreviation?: string, links?: { [key: string]: string; })
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
		if (abbreviation!=null)
		{
			this.Abbreviation=abbreviation
		}
		if (description!=null)
		{
			this.Description=description
		}
		if (path!=null)
		{
			this.Path=path
		}
		if (factor!=null)
		{
			this.Factor=factor
		}
		if (offset!=null)
		{
			this.Offset=offset
		}
		if (referenceFactor!=null)
		{
			this.ReferenceFactor=referenceFactor
		}
		if (referenceOffset!=null)
		{
			this.ReferenceOffset=referenceOffset
		}
		if (referenceUnitAbbreviation!=null)
		{
			this.ReferenceUnitAbbreviation=referenceUnitAbbreviation
		}
		if (links!=null)
		{
			this.Links=links
		}
	}
}
