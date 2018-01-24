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

export class PIAttributeLinks {
	public Self?: string;
	public Attributes?: string;
	public Element?: string;
	public EventFrame?: string;
	public Parent?: string;
	public Template?: string;
	public InterpolatedData?: string;
	public RecordedData?: string;
	public PlotData?: string;
	public SummaryData?: string;
	public Value?: string;
	public EndValue?: string;
	public Point?: string;
	public Categories?: string;
	public EnumerationSet?: string;
	public EnumerationValues?: string;
	public Trait?: string;
	constructor(self?: string, attributes?: string, element?: string, eventFrame?: string, parent?: string, template?: string, interpolatedData?: string, recordedData?: string, plotData?: string, summaryData?: string, value?: string, endValue?: string, point?: string, categories?: string, enumerationSet?: string, enumerationValues?: string, trait?: string)
	{
		if (self!=null)
		{
			this.Self=self
		}
		if (attributes!=null)
		{
			this.Attributes=attributes
		}
		if (element!=null)
		{
			this.Element=element
		}
		if (eventFrame!=null)
		{
			this.EventFrame=eventFrame
		}
		if (parent!=null)
		{
			this.Parent=parent
		}
		if (template!=null)
		{
			this.Template=template
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
		if (point!=null)
		{
			this.Point=point
		}
		if (categories!=null)
		{
			this.Categories=categories
		}
		if (enumerationSet!=null)
		{
			this.EnumerationSet=enumerationSet
		}
		if (enumerationValues!=null)
		{
			this.EnumerationValues=enumerationValues
		}
		if (trait!=null)
		{
			this.Trait=trait
		}
	}
}
