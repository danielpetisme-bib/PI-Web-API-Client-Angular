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

export class PITableData {
	public Columns?: { [key: string]: string; };
	public Rows?: Array<{ [key: string]: any; }>;
	constructor(columns?: { [key: string]: string; }, rows?: Array<{ [key: string]: any; }>)
	{
		if (columns!=null)
		{
			this.Columns=columns
		}
		if (rows!=null)
		{
			this.Rows=rows
		}
	}
}