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

export class PIPoint {
	public WebId?: string;
	public Id?: number;
	public Name?: string;
	public Path?: string;
	public Descriptor?: string;
	public PointClass?: string;
	public PointType?: string;
	public DigitalSetName?: string;
	public EngineeringUnits?: string;
	public Step?: boolean;
	public Future?: boolean;
	public Links?: { [key: string]: string; };
	constructor(webId?: string, id?: number, name?: string, path?: string, descriptor?: string, pointClass?: string, pointType?: string, digitalSetName?: string, engineeringUnits?: string, step?: boolean, future?: boolean, links?: { [key: string]: string; })
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
		if (path!=null)
		{
			this.Path=path
		}
		if (descriptor!=null)
		{
			this.Descriptor=descriptor
		}
		if (pointClass!=null)
		{
			this.PointClass=pointClass
		}
		if (pointType!=null)
		{
			this.PointType=pointType
		}
		if (digitalSetName!=null)
		{
			this.DigitalSetName=digitalSetName
		}
		if (engineeringUnits!=null)
		{
			this.EngineeringUnits=engineeringUnits
		}
		if (step!=null)
		{
			this.Step=step
		}
		if (future!=null)
		{
			this.Future=future
		}
		if (links!=null)
		{
			this.Links=links
		}
	}
}
