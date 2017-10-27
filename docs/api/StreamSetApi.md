# StreamSetApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getChannel**](StreamSetApi.md#getchannel) | **GET** /streamsets/{webId}/channel | Opens a channel that will send messages about any value changes for the attributes of an Element, Event Frame, or Attribute.
[**getEnd**](StreamSetApi.md#getend) | **GET** /streamsets/{webId}/end | Returns End of stream values of the attributes for an Element, Event Frame or Attribute
[**getInterpolated**](StreamSetApi.md#getinterpolated) | **GET** /streamsets/{webId}/interpolated | Returns interpolated values of attributes for an element, event frame or attribute over the specified time range at the specified sampling interval.
[**getInterpolatedAtTimes**](StreamSetApi.md#getinterpolatedattimes) | **GET** /streamsets/{webId}/interpolatedattimes | Returns interpolated values of attributes for an element, event frame or attribute at the specified times.
[**getPlot**](StreamSetApi.md#getplot) | **GET** /streamsets/{webId}/plot | Returns values of attributes for an element, event frame or attribute over the specified time range suitable for plotting over the number of intervals (typically represents pixels).
[**getRecorded**](StreamSetApi.md#getrecorded) | **GET** /streamsets/{webId}/recorded | Returns recorded values of the attributes for an element, event frame, or attribute.
[**updateValues**](StreamSetApi.md#updatevalues) | **POST** /streamsets/{webId}/recorded | Updates multiple values for the specified streams.
[**getRecordedAtTime**](StreamSetApi.md#getrecordedattime) | **GET** /streamsets/{webId}/recordedattime | Returns recorded values of the attributes for an element, event frame, or attribute.
[**getRecordedAtTimes**](StreamSetApi.md#getrecordedattimes) | **GET** /streamsets/{webId}/recordedattimes | Returns recorded values of attributes for an element, event frame or attribute at the specified times.
[**getSummaries**](StreamSetApi.md#getsummaries) | **GET** /streamsets/{webId}/summary | Returns summary values of the attributes for an element, event frame or attribute.
[**getValues**](StreamSetApi.md#getvalues) | **GET** /streamsets/{webId}/value | Returns values of the attributes for an Element, Event Frame or Attribute at the specified time.
[**updateValue**](StreamSetApi.md#updatevalue) | **POST** /streamsets/{webId}/value | Updates a single value for the specified streams.
[**getChannelAdHoc**](StreamSetApi.md#getchanneladhoc) | **GET** /streamsets/channel | Opens a channel that will send messages about any value changes for the specified streams.
[**getEndAdHoc**](StreamSetApi.md#getendadhoc) | **GET** /streamsets/end | Returns End Of Stream values for attributes of the specified streams
[**getInterpolatedAdHoc**](StreamSetApi.md#getinterpolatedadhoc) | **GET** /streamsets/interpolated | Returns interpolated values of the specified streams over the specified time range at the specified sampling interval.
[**getInterpolatedAtTimesAdHoc**](StreamSetApi.md#getinterpolatedattimesadhoc) | **GET** /streamsets/interpolatedattimes | Returns interpolated values of the specified streams at the specified times.
[**getPlotAdHoc**](StreamSetApi.md#getplotadhoc) | **GET** /streamsets/plot | Returns values of attributes for the specified streams over the specified time range suitable for plotting over the number of intervals (typically represents pixels).
[**getRecordedAdHoc**](StreamSetApi.md#getrecordedadhoc) | **GET** /streamsets/recorded | Returns recorded values of the specified streams.
[**updateValuesAdHoc**](StreamSetApi.md#updatevaluesadhoc) | **POST** /streamsets/recorded | Updates multiple values for the specified streams.
[**getRecordedAtTimeAdHoc**](StreamSetApi.md#getrecordedattimeadhoc) | **GET** /streamsets/recordedattime | Returns recorded values based on the passed time and retrieval mode.
[**getRecordedAtTimesAdHoc**](StreamSetApi.md#getrecordedattimesadhoc) | **GET** /streamsets/recordedattimes | Returns recorded values of the specified streams at the specified times.
[**getSummariesAdHoc**](StreamSetApi.md#getsummariesadhoc) | **GET** /streamsets/summary | Returns summary values of the specified streams.
[**getValuesAdHoc**](StreamSetApi.md#getvaluesadhoc) | **GET** /streamsets/value | Returns values of the specified streams.
[**updateValueAdHoc**](StreamSetApi.md#updatevalueadhoc) | **POST** /streamsets/value | Updates a single value for the specified streams.


# **getChannel**
> getChannel(webId: string, categoryName?: string, includeInitialValues?: boolean, nameFilter?: string, searchFullHierarchy?: boolean, showExcluded?: boolean, showHidden?: boolean, templateName?: string, extraHttpRequestParams?: any)

Opens a channel that will send messages about any value changes for the attributes of an Element, Event Frame, or Attribute.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes.. | [required]
 **categoryName** | **string**| Specify that included attributes must have this category. The default is no category filter.. | [optional]
 **includeInitialValues** | **boolean**| Specified if the channel should send a message with the current values of all the streams after the connection is opened. The default is 'false'.. | [optional]
 **nameFilter** | **string**| The name query string used for filtering attributes. The default is no filter.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.. | [optional]
 **showExcluded** | **boolean**| Specified if the search should include attributes with the Excluded property set. The default is 'false'.. | [optional]
 **showHidden** | **boolean**| Specified if the search should include attributes with the Hidden property set. The default is 'false'.. | [optional]
 **templateName** | **string**| Specify that included attributes must be members of this template. The default is no template filter.. | [optional]


### Return type

Observable<Models.PIItemsStreamValue>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getEnd**
> getEnd(webId: string, categoryName?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, templateName?: string, extraHttpRequestParams?: any)

Returns End of stream values of the attributes for an Element, Event Frame or Attribute

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes.. | [required]
 **categoryName** | **string**| Specify that included attributes must have this category. The default is no category filter.. | [optional]
 **nameFilter** | **string**| The name query string used for filtering attributes. The default is no filter.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **showExcluded** | **boolean**| Specified if the search should include attributes with the Excluded property set. The default is 'false'.. | [optional]
 **showHidden** | **boolean**| Specified if the search should include attributes with the Hidden property set. The default is 'false'.. | [optional]
 **templateName** | **string**| Specify that included attributes must be members of this template. The default is no template filter.. | [optional]


### Return type

Observable<Models.PIItemsStreamValue>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getInterpolated**
> getInterpolated(webId: string, categoryName?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns interpolated values of attributes for an element, event frame or attribute over the specified time range at the specified sampling interval.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.. | [required]
 **categoryName** | **string**| Specify that included attributes must have this category. The default is no category filter.. | [optional]
 **endTime** | **string**| An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.. | [optional]
 **filterExpression** | **string**| An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.. | [optional]
 **includeFilteredValues** | **boolean**| Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.. | [optional]
 **interval** | **string**| The sampling interval, in AFTimeSpan format.. | [optional]
 **nameFilter** | **string**| The name query string used for filtering attributes. The default is no filter.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **showExcluded** | **boolean**| Specified if the search should include attributes with the Excluded property set. The default is 'false'.. | [optional]
 **showHidden** | **boolean**| Specified if the search should include attributes with the Hidden property set. The default is 'false'.. | [optional]
 **startTime** | **string**| An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.. | [optional]
 **templateName** | **string**| Specify that included attributes must be members of this template. The default is no template filter.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getInterpolatedAtTimes**
> getInterpolatedAtTimes(webId: string, time: Array<string>, categoryName?: string, filterExpression?: string, includeFilteredValues?: boolean, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortOrder?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns interpolated values of attributes for an element, event frame or attribute at the specified times.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.. | [required]
 **time** | **Array<string>**| The timestamp at which to retrieve a interpolated value. Multiple timestamps may be specified with multiple instances of the parameter.. | [required]
 **categoryName** | **string**| Specify that included attributes must have this category. The default is no category filter.. | [optional]
 **filterExpression** | **string**| An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.. | [optional]
 **includeFilteredValues** | **boolean**| Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.. | [optional]
 **nameFilter** | **string**| The name query string used for filtering attributes. The default is no filter.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **showExcluded** | **boolean**| Specified if the search should include attributes with the Excluded property set. The default is 'false'.. | [optional]
 **showHidden** | **boolean**| Specified if the search should include attributes with the Hidden property set. The default is 'false'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **templateName** | **string**| Specify that included attributes must be members of this template. The default is no template filter.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getPlot**
> getPlot(webId: string, categoryName?: string, endTime?: string, intervals?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns values of attributes for an element, event frame or attribute over the specified time range suitable for plotting over the number of intervals (typically represents pixels).

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.. | [required]
 **categoryName** | **string**| Specify that included attributes must have this category. The default is no category filter.. | [optional]
 **endTime** | **string**| An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.. | [optional]
 **intervals** | **number**| The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is '24'. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).. | [optional]
 **nameFilter** | **string**| The name query string used for filtering attributes. The default is no filter.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **showExcluded** | **boolean**| Specified if the search should include attributes with the Excluded property set. The default is 'false'.. | [optional]
 **showHidden** | **boolean**| Specified if the search should include attributes with the Hidden property set. The default is 'false'.. | [optional]
 **startTime** | **string**| An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.. | [optional]
 **templateName** | **string**| Specify that included attributes must be members of this template. The default is no template filter.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getRecorded**
> getRecorded(webId: string, boundaryType?: string, categoryName?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns recorded values of the attributes for an element, event frame, or attribute.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.. | [required]
 **boundaryType** | **string**| An optional value that determines how the times and values of the returned end points are determined. The default is 'Inside'.. | [optional]
 **categoryName** | **string**| Specify that included attributes must have this category. The default is no category filter.. | [optional]
 **endTime** | **string**| An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.. | [optional]
 **filterExpression** | **string**| An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. The default is no filtering.. | [optional]
 **includeFilteredValues** | **boolean**| Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.. | [optional]
 **maxCount** | **number**| The maximum number of values to be returned. The default is 1000.. | [optional]
 **nameFilter** | **string**| The name query string used for filtering attributes. The default is no filter.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **showExcluded** | **boolean**| Specified if the search should include attributes with the Excluded property set. The default is 'false'.. | [optional]
 **showHidden** | **boolean**| Specified if the search should include attributes with the Hidden property set. The default is 'false'.. | [optional]
 **startTime** | **string**| An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.. | [optional]
 **templateName** | **string**| Specify that included attributes must be members of this template. The default is no template filter.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateValues**
> updateValues(webId: string, values: Array<Models.PIStreamValues>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any)

Updates multiple values for the specified streams.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the parent element, event frame, or attribute. Attributes specified in the body must be descendants of the specified object.. | [required]
 **values** | **Array<Models.PIStreamValues>**| The values to add or update.. | [required]
 **bufferOption** | **string**| The desired AFBufferOption. The default is 'BufferIfPossible'.. | [optional]
 **updateOption** | **string**| The desired AFUpdateOption. The default is 'Replace'.. | [optional]


### Return type

Observable<Models.PIItemsItemsSubstatus>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getRecordedAtTime**
> getRecordedAtTime(webId: string, time: string, categoryName?: string, nameFilter?: string, retrievalMode?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, templateName?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns recorded values of the attributes for an element, event frame, or attribute.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.. | [required]
 **time** | **string**| The timestamp at which the values are desired.. | [required]
 **categoryName** | **string**| Specify that included attributes must have this category. The default is no category filter.. | [optional]
 **nameFilter** | **string**| The name query string used for filtering attributes. The default is no filter.. | [optional]
 **retrievalMode** | **string**| An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **showExcluded** | **boolean**| Specified if the search should include attributes with the Excluded property set. The default is 'false'.. | [optional]
 **showHidden** | **boolean**| Specified if the search should include attributes with the Hidden property set. The default is 'false'.. | [optional]
 **templateName** | **string**| Specify that included attributes must be members of this template. The default is no template filter.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getRecordedAtTimes**
> getRecordedAtTimes(webId: string, time: Array<string>, categoryName?: string, nameFilter?: string, retrievalMode?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortOrder?: string, templateName?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns recorded values of attributes for an element, event frame or attribute at the specified times.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.. | [required]
 **time** | **Array<string>**| The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter.. | [required]
 **categoryName** | **string**| Specify that included attributes must have this category. The default is no category filter.. | [optional]
 **nameFilter** | **string**| The name query string used for filtering attributes. The default is no filter.. | [optional]
 **retrievalMode** | **string**| An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **showExcluded** | **boolean**| Specified if the search should include attributes with the Excluded property set. The default is 'false'.. | [optional]
 **showHidden** | **boolean**| Specified if the search should include attributes with the Hidden property set. The default is 'false'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **templateName** | **string**| Specify that included attributes must be members of this template. The default is no template filter.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSummaries**
> getSummaries(webId: string, calculationBasis?: string, categoryName?: string, endTime?: string, filterExpression?: string, nameFilter?: string, sampleInterval?: string, sampleType?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, templateName?: string, timeType?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns summary values of the attributes for an element, event frame or attribute.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.. | [required]
 **calculationBasis** | **string**| Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'.. | [optional]
 **categoryName** | **string**| Specify that included attributes must have this category. The default is no category filter.. | [optional]
 **endTime** | **string**| An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.. | [optional]
 **filterExpression** | **string**| A string containing a filter expression. Expression variables are relative to the attribute. Use '.' to reference the containing attribute. The default is no filtering.. | [optional]
 **nameFilter** | **string**| The name query string used for filtering attributes. The default is no filter.. | [optional]
 **sampleInterval** | **string**| A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is 'Interval'.. | [optional]
 **sampleType** | **string**| A flag which specifies one or more summaries to compute for each interval over the time range. The default is 'ExpressionRecordedValues'.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **showExcluded** | **boolean**| Specified if the search should include attributes with the Excluded property set. The default is 'false'.. | [optional]
 **showHidden** | **boolean**| Specified if the search should include attributes with the Hidden property set. The default is 'false'.. | [optional]
 **startTime** | **string**| An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.. | [optional]
 **summaryDuration** | **string**| The duration of each summary interval.. | [optional]
 **summaryType** | **Array<string>**| Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType.. | [optional]
 **templateName** | **string**| Specify that included attributes must be members of this template. The default is no template filter.. | [optional]
 **timeType** | **string**| Specifies how to calculate the timestamp for each interval. The default is 'Auto'.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamSummaries>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getValues**
> getValues(webId: string, categoryName?: string, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, templateName?: string, time?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns values of the attributes for an Element, Event Frame or Attribute at the specified time.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes.. | [required]
 **categoryName** | **string**| Specify that included attributes must have this category. The default is no category filter.. | [optional]
 **nameFilter** | **string**| The name query string used for filtering attributes. The default is no filter.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **showExcluded** | **boolean**| Specified if the search should include attributes with the Excluded property set. The default is 'false'.. | [optional]
 **showHidden** | **boolean**| Specified if the search should include attributes with the Hidden property set. The default is 'false'.. | [optional]
 **templateName** | **string**| Specify that included attributes must be members of this template. The default is no template filter.. | [optional]
 **time** | **string**| An AF time string, which is used as the time context to get stream values if it is provided. By default, it is not specified, and the default time context of the AF object will be used.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValue>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateValue**
> updateValue(webId: string, values: Array<Models.PIStreamValue>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any)

Updates a single value for the specified streams.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the parent element, event frame, or attribute. Attributes specified in the body must be descendants of the specified object.. | [required]
 **values** | **Array<Models.PIStreamValue>**| The values to add or update.. | [required]
 **bufferOption** | **string**| The desired AFBufferOption. The default is 'BufferIfPossible'.. | [optional]
 **updateOption** | **string**| The desired AFUpdateOption. The default is 'Replace'.. | [optional]


### Return type

Observable<Models.PIItemsSubstatus>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getChannelAdHoc**
> getChannelAdHoc(webId: Array<string>, includeInitialValues?: boolean, extraHttpRequestParams?: any)

Opens a channel that will send messages about any value changes for the specified streams.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **Array<string>**| The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.. | [required]
 **includeInitialValues** | **boolean**| Specified if the channel should send a message with the current values of all the streams after the connection is opened. The default is 'false'.. | [optional]


### Return type

Observable<Models.PIItemsStreamValue>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getEndAdHoc**
> getEndAdHoc(webId: Array<string>, selectedFields?: string, extraHttpRequestParams?: any)

Returns End Of Stream values for attributes of the specified streams

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **Array<string>**| The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIItemsStreamValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getInterpolatedAdHoc**
> getInterpolatedAdHoc(webId: Array<string>, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns interpolated values of the specified streams over the specified time range at the specified sampling interval.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **Array<string>**| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.. | [required]
 **endTime** | **string**| An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.. | [optional]
 **filterExpression** | **string**| An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.. | [optional]
 **includeFilteredValues** | **boolean**| Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.. | [optional]
 **interval** | **string**| The sampling interval, in AFTimeSpan format.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **startTime** | **string**| An optional start time. The default is '*-1d'.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getInterpolatedAtTimesAdHoc**
> getInterpolatedAtTimesAdHoc(time: Array<string>, webId: Array<string>, filterExpression?: string, includeFilteredValues?: boolean, selectedFields?: string, sortOrder?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns interpolated values of the specified streams at the specified times.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **time** | **Array<string>**| The timestamp at which to retrieve a interpolated value. Multiple timestamps may be specified with multiple instances of the parameter.. | [required]
 **webId** | **Array<string>**| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.. | [required]
 **filterExpression** | **string**| An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.. | [optional]
 **includeFilteredValues** | **boolean**| Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getPlotAdHoc**
> getPlotAdHoc(webId: Array<string>, endTime?: string, intervals?: number, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns values of attributes for the specified streams over the specified time range suitable for plotting over the number of intervals (typically represents pixels).

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **Array<string>**| The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.. | [required]
 **endTime** | **string**| An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.. | [optional]
 **intervals** | **number**| The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is '24'. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **startTime** | **string**| An optional start time. The default is '*-1d'.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getRecordedAdHoc**
> getRecordedAdHoc(webId: Array<string>, boundaryType?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns recorded values of the specified streams.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **Array<string>**| The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.. | [required]
 **boundaryType** | **string**| An optional value that determines how the times and values of the returned end points are determined. The default is 'Inside'.. | [optional]
 **endTime** | **string**| An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.. | [optional]
 **filterExpression** | **string**| An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. The default is no filtering.. | [optional]
 **includeFilteredValues** | **boolean**| Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.. | [optional]
 **maxCount** | **number**| The maximum number of values to be returned. The default is 1000.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **startTime** | **string**| An optional start time. The default is '*-1d'.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateValuesAdHoc**
> updateValuesAdHoc(values: Array<Models.PIStreamValues>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any)

Updates multiple values for the specified streams.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **values** | **Array<Models.PIStreamValues>**| The values to add or update.. | [required]
 **bufferOption** | **string**| The desired AFBufferOption. The default is 'BufferIfPossible'.. | [optional]
 **updateOption** | **string**| The desired AFUpdateOption. The default is 'Replace'.. | [optional]


### Return type

Observable<Models.PIItemsItemsSubstatus>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getRecordedAtTimeAdHoc**
> getRecordedAtTimeAdHoc(time: string, webId: Array<string>, retrievalMode?: string, selectedFields?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns recorded values based on the passed time and retrieval mode.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **time** | **string**| The timestamp at which the values are desired.. | [required]
 **webId** | **Array<string>**| The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.. | [required]
 **retrievalMode** | **string**| An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValue>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getRecordedAtTimesAdHoc**
> getRecordedAtTimesAdHoc(time: Array<string>, webId: Array<string>, retrievalMode?: string, selectedFields?: string, sortOrder?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns recorded values of the specified streams at the specified times.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **time** | **Array<string>**| The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter.. | [required]
 **webId** | **Array<string>**| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.. | [required]
 **retrievalMode** | **string**| An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSummariesAdHoc**
> getSummariesAdHoc(webId: Array<string>, calculationBasis?: string, endTime?: string, filterExpression?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns summary values of the specified streams.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **Array<string>**| The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.. | [required]
 **calculationBasis** | **string**| Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'.. | [optional]
 **endTime** | **string**| An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.. | [optional]
 **filterExpression** | **string**| A string containing a filter expression. Expression variables are relative to the attribute. Use '.' to reference the containing attribute. The default is no filtering.. | [optional]
 **sampleInterval** | **string**| A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is 'Interval'.. | [optional]
 **sampleType** | **string**| A flag which specifies one or more summaries to compute for each interval over the time range. The default is 'ExpressionRecordedValues'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **startTime** | **string**| An optional start time. The default is '*-1d'.. | [optional]
 **summaryDuration** | **string**| The duration of each summary interval.. | [optional]
 **summaryType** | **Array<string>**| Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType.. | [optional]
 **timeType** | **string**| Specifies how to calculate the timestamp for each interval. The default is 'Auto'.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamSummaries>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getValuesAdHoc**
> getValuesAdHoc(webId: Array<string>, selectedFields?: string, time?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns values of the specified streams.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **Array<string>**| The ID of a stream.  Multiple streams may be specified with multiple instances of the parameter.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **time** | **string**| An AF time string, which is used as the time context to get stream values if it is provided. By default, it is not specified, and the default time context of the AF object will be used.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsStreamValue>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateValueAdHoc**
> updateValueAdHoc(values: Array<Models.PIStreamValue>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any)

Updates a single value for the specified streams.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **values** | **Array<Models.PIStreamValue>**| The values to add or update.. | [required]
 **bufferOption** | **string**| The desired AFBufferOption. The default is 'BufferIfPossible'.. | [optional]
 **updateOption** | **string**| The desired AFUpdateOption. The default is 'Replace'.. | [optional]


### Return type

Observable<Models.PIItemsSubstatus>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
