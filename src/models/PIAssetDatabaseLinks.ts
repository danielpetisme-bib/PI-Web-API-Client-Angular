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

export class PIAssetDatabaseLinks {
	public Self?: string;
	public Elements?: string;
	public ElementTemplates?: string;
	public EventFrames?: string;
	public AssetServer?: string;
	public ElementCategories?: string;
	public AttributeCategories?: string;
	public TableCategories?: string;
	public AnalysisCategories?: string;
	public AnalysisTemplates?: string;
	public EnumerationSets?: string;
	public Tables?: string;
	public Security?: string;
	public SecurityEntries?: string;
	constructor(self?: string, elements?: string, elementTemplates?: string, eventFrames?: string, assetServer?: string, elementCategories?: string, attributeCategories?: string, tableCategories?: string, analysisCategories?: string, analysisTemplates?: string, enumerationSets?: string, tables?: string, security?: string, securityEntries?: string)
	{
		if (self!=null)
		{
			this.Self=self
		}
		if (elements!=null)
		{
			this.Elements=elements
		}
		if (elementTemplates!=null)
		{
			this.ElementTemplates=elementTemplates
		}
		if (eventFrames!=null)
		{
			this.EventFrames=eventFrames
		}
		if (assetServer!=null)
		{
			this.AssetServer=assetServer
		}
		if (elementCategories!=null)
		{
			this.ElementCategories=elementCategories
		}
		if (attributeCategories!=null)
		{
			this.AttributeCategories=attributeCategories
		}
		if (tableCategories!=null)
		{
			this.TableCategories=tableCategories
		}
		if (analysisCategories!=null)
		{
			this.AnalysisCategories=analysisCategories
		}
		if (analysisTemplates!=null)
		{
			this.AnalysisTemplates=analysisTemplates
		}
		if (enumerationSets!=null)
		{
			this.EnumerationSets=enumerationSets
		}
		if (tables!=null)
		{
			this.Tables=tables
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
