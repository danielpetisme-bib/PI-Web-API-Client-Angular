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

export class PIRequest {
	public Method?: string;
	public Resource?: string;
	public RequestTemplate?: Models.PIRequestTemplate;
	public Parameters?: Array<string>;
	public Headers?: { [key: string]: string; };
	public Content?: string;
	public ParentIds?: Array<string>;
	constructor(method?: string, resource?: string, requestTemplate?: Models.PIRequestTemplate, parameters?: Array<string>, headers?: { [key: string]: string; }, content?: string, parentIds?: Array<string>)
	{
		if (method!=null)
		{
			this.Method=method
		}
		if (resource!=null)
		{
			this.Resource=resource
		}
		if (requestTemplate!=null)
		{
			this.RequestTemplate=requestTemplate
		}
		if (parameters!=null)
		{
			this.Parameters=parameters
		}
		if (headers!=null)
		{
			this.Headers=headers
		}
		if (content!=null)
		{
			this.Content=content
		}
		if (parentIds!=null)
		{
			this.ParentIds=parentIds
		}
	}
}
