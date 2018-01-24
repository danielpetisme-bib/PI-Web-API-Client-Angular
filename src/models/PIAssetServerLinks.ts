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

export class PIAssetServerLinks {
	public Self?: string;
	public Databases?: string;
	public SecurityIdentities?: string;
	public SecurityMappings?: string;
	public UnitClasses?: string;
	public AnalysisRulePlugIns?: string;
	public TimeRulePlugIns?: string;
	public Security?: string;
	public SecurityEntries?: string;
	constructor(self?: string, databases?: string, securityIdentities?: string, securityMappings?: string, unitClasses?: string, analysisRulePlugIns?: string, timeRulePlugIns?: string, security?: string, securityEntries?: string)
	{
		if (self!=null)
		{
			this.Self=self
		}
		if (databases!=null)
		{
			this.Databases=databases
		}
		if (securityIdentities!=null)
		{
			this.SecurityIdentities=securityIdentities
		}
		if (securityMappings!=null)
		{
			this.SecurityMappings=securityMappings
		}
		if (unitClasses!=null)
		{
			this.UnitClasses=unitClasses
		}
		if (analysisRulePlugIns!=null)
		{
			this.AnalysisRulePlugIns=analysisRulePlugIns
		}
		if (timeRulePlugIns!=null)
		{
			this.TimeRulePlugIns=timeRulePlugIns
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
