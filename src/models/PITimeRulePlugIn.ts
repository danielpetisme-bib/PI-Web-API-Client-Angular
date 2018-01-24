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

export class PITimeRulePlugIn {
	public WebId?: string;
	public Id?: string;
	public Name?: string;
	public Description?: string;
	public Path?: string;
	public AssemblyFileName?: string;
	public AssemblyID?: string;
	public AssemblyLoadProperties?: Array<string>;
	public AssemblyTime?: string;
	public CompatibilityVersion?: number;
	public IsBrowsable?: boolean;
	public IsNonEditableConfig?: boolean;
	public LoadedAssemblyTime?: string;
	public LoadedVersion?: string;
	public Version?: string;
	public Links?: Models.PITimeRulePlugInLinks;
	public WebException?: Models.PIWebException;
	constructor(webId?: string, id?: string, name?: string, description?: string, path?: string, assemblyFileName?: string, assemblyID?: string, assemblyLoadProperties?: Array<string>, assemblyTime?: string, compatibilityVersion?: number, isBrowsable?: boolean, isNonEditableConfig?: boolean, loadedAssemblyTime?: string, loadedVersion?: string, version?: string, links?: Models.PITimeRulePlugInLinks, webException?: Models.PIWebException)
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
		if (assemblyFileName!=null)
		{
			this.AssemblyFileName=assemblyFileName
		}
		if (assemblyID!=null)
		{
			this.AssemblyID=assemblyID
		}
		if (assemblyLoadProperties!=null)
		{
			this.AssemblyLoadProperties=assemblyLoadProperties
		}
		if (assemblyTime!=null)
		{
			this.AssemblyTime=assemblyTime
		}
		if (compatibilityVersion!=null)
		{
			this.CompatibilityVersion=compatibilityVersion
		}
		if (isBrowsable!=null)
		{
			this.IsBrowsable=isBrowsable
		}
		if (isNonEditableConfig!=null)
		{
			this.IsNonEditableConfig=isNonEditableConfig
		}
		if (loadedAssemblyTime!=null)
		{
			this.LoadedAssemblyTime=loadedAssemblyTime
		}
		if (loadedVersion!=null)
		{
			this.LoadedVersion=loadedVersion
		}
		if (version!=null)
		{
			this.Version=version
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
