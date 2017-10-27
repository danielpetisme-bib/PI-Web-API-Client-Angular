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

export class PITimedValue {
	public Timestamp?: string;
	public UnitsAbbreviation?: string;
	public Good?: boolean;
	public Questionable?: boolean;
	public Substituted?: boolean;
	public Value?: any;
	public Exception?: Models.PIErrors;
	constructor(timestamp?: string, unitsAbbreviation?: string, good?: boolean, questionable?: boolean, substituted?: boolean, value?: any, exception?: Models.PIErrors)
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
		if (exception!=null)
		{
			this.Exception=exception
		}
	}
}
