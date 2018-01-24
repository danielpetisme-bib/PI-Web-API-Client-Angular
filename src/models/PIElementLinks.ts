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

export class PIElementLinks {
	public Self?: string;
	public Analyses?: string;
	public Attributes?: string;
	public Elements?: string;
	public Database?: string;
	public Parent?: string;
	public Template?: string;
	public Categories?: string;
	public DefaultAttribute?: string;
	public EventFrames?: string;
	public InterpolatedData?: string;
	public RecordedData?: string;
	public PlotData?: string;
	public SummaryData?: string;
	public Value?: string;
	public EndValue?: string;
	public Security?: string;
	public SecurityEntries?: string;
	constructor(self?: string, analyses?: string, attributes?: string, elements?: string, database?: string, parent?: string, template?: string, categories?: string, defaultAttribute?: string, eventFrames?: string, interpolatedData?: string, recordedData?: string, plotData?: string, summaryData?: string, value?: string, endValue?: string, security?: string, securityEntries?: string)
	{
		if (self!=null)
		{
			this.Self=self
		}
		if (analyses!=null)
		{
			this.Analyses=analyses
		}
		if (attributes!=null)
		{
			this.Attributes=attributes
		}
		if (elements!=null)
		{
			this.Elements=elements
		}
		if (database!=null)
		{
			this.Database=database
		}
		if (parent!=null)
		{
			this.Parent=parent
		}
		if (template!=null)
		{
			this.Template=template
		}
		if (categories!=null)
		{
			this.Categories=categories
		}
		if (defaultAttribute!=null)
		{
			this.DefaultAttribute=defaultAttribute
		}
		if (eventFrames!=null)
		{
			this.EventFrames=eventFrames
		}
		if (interpolatedData!=null)
		{
			this.InterpolatedData=interpolatedData
		}
		if (recordedData!=null)
		{
			this.RecordedData=recordedData
		}
		if (plotData!=null)
		{
			this.PlotData=plotData
		}
		if (summaryData!=null)
		{
			this.SummaryData=summaryData
		}
		if (value!=null)
		{
			this.Value=value
		}
		if (endValue!=null)
		{
			this.EndValue=endValue
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
