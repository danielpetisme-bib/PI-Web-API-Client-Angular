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

export class PIElementTemplateLinks {
	public Self?: string;
	public AnalysisTemplates?: string;
	public AttributeTemplates?: string;
	public Database?: string;
	public Categories?: string;
	public BaseTemplate?: string;
	public DefaultAttribute?: string;
	public Security?: string;
	public SecurityEntries?: string;
	constructor(self?: string, analysisTemplates?: string, attributeTemplates?: string, database?: string, categories?: string, baseTemplate?: string, defaultAttribute?: string, security?: string, securityEntries?: string)
	{
		if (self!=null)
		{
			this.Self=self
		}
		if (analysisTemplates!=null)
		{
			this.AnalysisTemplates=analysisTemplates
		}
		if (attributeTemplates!=null)
		{
			this.AttributeTemplates=attributeTemplates
		}
		if (database!=null)
		{
			this.Database=database
		}
		if (categories!=null)
		{
			this.Categories=categories
		}
		if (baseTemplate!=null)
		{
			this.BaseTemplate=baseTemplate
		}
		if (defaultAttribute!=null)
		{
			this.DefaultAttribute=defaultAttribute
		}
		if (security!=null)
		{
			this.Security=security
		}
		if (securityEntries!=null)
		{
			this.SecurityEntries=securityEntries
		}
	}
}
