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

export class PICacheInstance {
	public Id?: string;
	public LastRefreshTime?: string;
	public WillRefreshAfter?: string;
	public ScheduledExpirationTime?: string;
	public User?: string;
	constructor(id?: string, lastRefreshTime?: string, willRefreshAfter?: string, scheduledExpirationTime?: string, user?: string)
	{
		if (id!=null)
		{
			this.Id=id
		}
		if (lastRefreshTime!=null)
		{
			this.LastRefreshTime=lastRefreshTime
		}
		if (willRefreshAfter!=null)
		{
			this.WillRefreshAfter=willRefreshAfter
		}
		if (scheduledExpirationTime!=null)
		{
			this.ScheduledExpirationTime=scheduledExpirationTime
		}
		if (user!=null)
		{
			this.User=user
		}
	}
}
