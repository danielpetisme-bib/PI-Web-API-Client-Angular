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

export class PITimedValue {
	public Timestamp?: string;
	public UnitsAbbreviation?: string;
	public Good?: boolean;
	public Questionable?: boolean;
	public Substituted?: boolean;
	public Value?: any;
	public Errors?: Array<Models.PIPropertyError>;
	public WebException?: Models.PIWebException;
	constructor(timestamp?: string, unitsAbbreviation?: string, good?: boolean, questionable?: boolean, substituted?: boolean, value?: any, errors?: Array<Models.PIPropertyError>, webException?: Models.PIWebException)
	{
		if (timestamp!=null)
		{
			this.Timestamp=timestamp
		}
		if (unitsAbbreviation!=null)
		{
			this.UnitsAbbreviation=unitsAbbreviation
		}
		if (good!=null)
		{
			this.Good=good
		}
		if (questionable!=null)
		{
			this.Questionable=questionable
		}
		if (substituted!=null)
		{
			this.Substituted=substituted
		}
		if (value!=null)
		{
			this.Value=value
		}
		if (errors!=null)
		{
			this.Errors=errors
		}
		if (webException!=null)
		{
			this.WebException=webException
		}
	}
}
