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

export class PIValueQuery {
	public AttributeName?: string;
	public AttributeUOM?: string;
	public AttributeValue?: any;
	public SearchOperator?: string;
	public WebException?: Models.PIWebException;
	constructor(attributeName?: string, attributeUOM?: string, attributeValue?: any, searchOperator?: string, webException?: Models.PIWebException)
	{
		if (attributeName!=null)
		{
			this.AttributeName=attributeName
		}
		if (attributeUOM!=null)
		{
			this.AttributeUOM=attributeUOM
		}
		if (attributeValue!=null)
		{
			this.AttributeValue=attributeValue
		}
		if (searchOperator!=null)
		{
			this.SearchOperator=searchOperator
		}
		if (webException!=null)
		{
			this.WebException=webException
		}
	}
}
