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

export class PISecurity {
	public CanAnnotate?: boolean;
	public CanDelete?: boolean;
	public CanExecute?: boolean;
	public CanRead?: boolean;
	public CanReadData?: boolean;
	public CanSubscribe?: boolean;
	public CanSubscribeOthers?: boolean;
	public CanWrite?: boolean;
	public CanWriteData?: boolean;
	public HasAdmin?: boolean;
	public Rights?: Array<string>;
	public WebException?: Models.PIWebException;
	constructor(canAnnotate?: boolean, canDelete?: boolean, canExecute?: boolean, canRead?: boolean, canReadData?: boolean, canSubscribe?: boolean, canSubscribeOthers?: boolean, canWrite?: boolean, canWriteData?: boolean, hasAdmin?: boolean, rights?: Array<string>, webException?: Models.PIWebException)
	{
		if (canAnnotate!=null)
		{
			this.CanAnnotate=canAnnotate
		}
		if (canDelete!=null)
		{
			this.CanDelete=canDelete
		}
		if (canExecute!=null)
		{
			this.CanExecute=canExecute
		}
		if (canRead!=null)
		{
			this.CanRead=canRead
		}
		if (canReadData!=null)
		{
			this.CanReadData=canReadData
		}
		if (canSubscribe!=null)
		{
			this.CanSubscribe=canSubscribe
		}
		if (canSubscribeOthers!=null)
		{
			this.CanSubscribeOthers=canSubscribeOthers
		}
		if (canWrite!=null)
		{
			this.CanWrite=canWrite
		}
		if (canWriteData!=null)
		{
			this.CanWriteData=canWriteData
		}
		if (hasAdmin!=null)
		{
			this.HasAdmin=hasAdmin
		}
		if (rights!=null)
		{
			this.Rights=rights
		}
		if (webException!=null)
		{
			this.WebException=webException
		}
	}
}
