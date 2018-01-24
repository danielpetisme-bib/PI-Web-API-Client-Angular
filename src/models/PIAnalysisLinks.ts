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

export class PIAnalysisLinks {
	public Self?: string;
	public Target?: string;
	public Database?: string;
	public Categories?: string;
	public Template?: string;
	public AnalysisRule?: string;
	public AnalysisRulePlugIn?: string;
	public TimeRule?: string;
	public TimeRulePlugIn?: string;
	public Security?: string;
	public SecurityEntries?: string;
	constructor(self?: string, target?: string, database?: string, categories?: string, template?: string, analysisRule?: string, analysisRulePlugIn?: string, timeRule?: string, timeRulePlugIn?: string, security?: string, securityEntries?: string)
	{
		if (self!=null)
		{
			this.Self=self
		}
		if (target!=null)
		{
			this.Target=target
		}
		if (database!=null)
		{
			this.Database=database
		}
		if (categories!=null)
		{
			this.Categories=categories
		}
		if (template!=null)
		{
			this.Template=template
		}
		if (analysisRule!=null)
		{
			this.AnalysisRule=analysisRule
		}
		if (analysisRulePlugIn!=null)
		{
			this.AnalysisRulePlugIn=analysisRulePlugIn
		}
		if (timeRule!=null)
		{
			this.TimeRule=timeRule
		}
		if (timeRulePlugIn!=null)
		{
			this.TimeRulePlugIn=timeRulePlugIn
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
