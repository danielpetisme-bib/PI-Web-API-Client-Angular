# StreamApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getChannel**](StreamApi.md#getchannel) | **GET** /streams/{webId}/channel | Opens a channel that will send messages about any value changes for the specified stream.
[**getEnd**](StreamApi.md#getend) | **GET** /streams/{webId}/end | Returns the end-of-stream value of the stream.
[**getInterpolated**](StreamApi.md#getinterpolated) | **GET** /streams/{webId}/interpolated | Retrieves interpolated values over the specified time range at the specified sampling interval.
[**getInterpolatedAtTimes**](StreamApi.md#getinterpolatedattimes) | **GET** /streams/{webId}/interpolatedattimes | Retrieves interpolated values over the specified time range at the specified sampling interval.
[**getPlot**](StreamApi.md#getplot) | **GET** /streams/{webId}/plot | Retrieves values over the specified time range suitable for plotting over the number of intervals (typically represents pixels).
[**getRecorded**](StreamApi.md#getrecorded) | **GET** /streams/{webId}/recorded | Returns a list of compressed values for the requested time range from the source provider.
[**updateValues**](StreamApi.md#updatevalues) | **POST** /streams/{webId}/recorded | Updates multiple values for the specified stream.
[**getRecordedAtTime**](StreamApi.md#getrecordedattime) | **GET** /streams/{webId}/recordedattime | Returns a single recorded value based on the passed time and retrieval mode from the stream.
[**getRecordedAtTimes**](StreamApi.md#getrecordedattimes) | **GET** /streams/{webId}/recordedattimes | Retrieves recorded values at the specified times.
[**getSummary**](StreamApi.md#getsummary) | **GET** /streams/{webId}/summary | Returns a summary over the specified time range for the stream.
[**getValue**](StreamApi.md#getvalue) | **GET** /streams/{webId}/value | Returns the value of the stream at the specified time. By default, this is usually the current value.
[**updateValue**](StreamApi.md#updatevalue) | **POST** /streams/{webId}/value | Updates a value for the specified stream.


# **getChannel**
> getChannel(webId: string, includeInitialValues?: boolean, extraHttpRequestParams?: any)

Opens a channel that will send messages about any value changes for the specified stream.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the stream.. | [required]
 **includeInitialValues** | **boolean**| Specified if the channel should send a message with the current value of the stream after the connection is opened. The default is 'false'.. | [optional]


### Return type

Observable<Models.PIItemsStreamValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getEnd**
> getEnd(webId: string, desiredUnits?: string, selectedFields?: string, extraHttpRequestParams?: any)

Returns the end-of-stream value of the stream.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the stream.. | [required]
 **desiredUnits** | **string**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PITimedValue>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getInterpolated**
> getInterpolated(webId: string, desiredUnits?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, interval?: string, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any)

Retrieves interpolated values over the specified time range at the specified sampling interval.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the stream.. | [required]
 **desiredUnits** | **string**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.. | [optional]
 **endTime** | **string**| An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.. | [optional]
 **filterExpression** | **string**| An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.. | [optional]
 **includeFilteredValues** | **boolean**| Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.. | [optional]
 **interval** | **string**| The sampling interval, in AFTimeSpan format.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **startTime** | **string**| An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PITimedValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getInterpolatedAtTimes**
> getInterpolatedAtTimes(webId: string, desiredUnits?: string, filterExpression?: string, includeFilteredValues?: boolean, selectedFields?: string, sortOrder?: string, time?: Array<string>, timeZone?: string, extraHttpRequestParams?: any)

Retrieves interpolated values over the specified time range at the specified sampling interval.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the stream.. | [required]
 **desiredUnits** | **string**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.. | [optional]
 **filterExpression** | **string**| An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering.. | [optional]
 **includeFilteredValues** | **boolean**| Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **time** | **Array<string>**| The timestamp at which to retrieve an interpolated value. Multiple timestamps may be specified with multiple instances of the parameter.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PITimedValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getPlot**
> getPlot(webId: string, desiredUnits?: string, endTime?: string, intervals?: number, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any)

Retrieves values over the specified time range suitable for plotting over the number of intervals (typically represents pixels).

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the stream.. | [required]
 **desiredUnits** | **string**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.. | [optional]
 **endTime** | **string**| An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.. | [optional]
 **intervals** | **number**| The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is '24'. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state).. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **startTime** | **string**| An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PITimedValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getRecorded**
> getRecorded(webId: string, boundaryType?: string, desiredUnits?: string, endTime?: string, filterExpression?: string, includeFilteredValues?: boolean, maxCount?: number, selectedFields?: string, startTime?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns a list of compressed values for the requested time range from the source provider.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the stream.. | [required]
 **boundaryType** | **string**| An optional value that determines how the times and values of the returned end points are determined. The default is 'Inside'.. | [optional]
 **desiredUnits** | **string**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.. | [optional]
 **endTime** | **string**| An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.. | [optional]
 **filterExpression** | **string**| An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. The default is no filtering.. | [optional]
 **includeFilteredValues** | **boolean**| Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted.. | [optional]
 **maxCount** | **number**| The maximum number of values to be returned. The default is 1000.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **startTime** | **string**| An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PITimedValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateValues**
> updateValues(webId: string, values: Array<Models.PITimedValue>, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any)

Updates multiple values for the specified stream.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the stream.. | [required]
 **values** | **Array<Models.PITimedValue>**| The values to add or update.. | [required]
 **bufferOption** | **string**| The desired AFBufferOption. The default is 'BufferIfPossible'.. | [optional]
 **updateOption** | **string**| The desired AFUpdateOption. The default is 'Replace'.. | [optional]


### Return type

Observable<Models.PIItemsSubstatus>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getRecordedAtTime**
> getRecordedAtTime(webId: string, time: string, desiredUnits?: string, retrievalMode?: string, selectedFields?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns a single recorded value based on the passed time and retrieval mode from the stream.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the stream.. | [required]
 **time** | **string**| The timestamp at which the value is desired.. | [required]
 **desiredUnits** | **string**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.. | [optional]
 **retrievalMode** | **string**| An optional value that determines the value to return when a value doesn't exist at the exact time specified. The default is 'Auto'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PITimedValue>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getRecordedAtTimes**
> getRecordedAtTimes(webId: string, desiredUnits?: string, retrievalMode?: string, selectedFields?: string, sortOrder?: string, time?: Array<string>, timeZone?: string, extraHttpRequestParams?: any)

Retrieves recorded values at the specified times.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the stream.. | [required]
 **desiredUnits** | **string**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.. | [optional]
 **retrievalMode** | **string**| An optional value that determines the value to return when a value doesn't exist at the exact time specified. The default is 'Auto'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **time** | **Array<string>**| The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PITimedValues>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSummary**
> getSummary(webId: string, calculationBasis?: string, endTime?: string, filterExpression?: string, sampleInterval?: string, sampleType?: string, selectedFields?: string, startTime?: string, summaryDuration?: string, summaryType?: Array<string>, timeType?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns a summary over the specified time range for the stream.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the stream.. | [required]
 **calculationBasis** | **string**| Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'.. | [optional]
 **endTime** | **string**| An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order.. | [optional]
 **filterExpression** | **string**| A string containing a filter expression. Expression variables are relative to the attribute. Use '.' to reference the containing attribute.. | [optional]
 **sampleInterval** | **string**| When the sampleType is Interval, sampleInterval specifies how often the filter expression is evaluated when computing the summary for an interval.. | [optional]
 **sampleType** | **string**| Defines the evaluation of an expression over a time range. The default is 'ExpressionRecordedValues'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **startTime** | **string**| An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set.. | [optional]
 **summaryDuration** | **string**| The duration of each summary interval. If specified in hours, minutes, seconds, or milliseconds, the summary durations will be evenly spaced UTC time intervals. Longer interval types are interpreted using wall clock rules and are time zone dependent.. | [optional]
 **summaryType** | **Array<string>**| Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType.. | [optional]
 **timeType** | **string**| Specifies how to calculate the timestamp for each interval. The default is 'Auto'.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PIItemsSummaryValue>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getValue**
> getValue(webId: string, desiredUnits?: string, selectedFields?: string, time?: string, timeZone?: string, extraHttpRequestParams?: any)

Returns the value of the stream at the specified time. By default, this is usually the current value.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the stream.. | [required]
 **desiredUnits** | **string**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **time** | **string**| An optional time. The default time context is determined from the owning object - for example, the time range of the event frame or transfer which holds this attribute. Otherwise, the implementation of the Data Reference determines the meaning of no context. For Points or simply configured PI Point Data References, this means the snapshot value of the PI Point on the Data Server.. | [optional]
 **timeZone** | **string**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used.. | [optional]


### Return type

Observable<Models.PITimedValue>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateValue**
> updateValue(webId: string, value: Models.PITimedValue, bufferOption?: string, updateOption?: string, extraHttpRequestParams?: any)

Updates a value for the specified stream.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the stream.. | [required]
 **value** | **Models.PITimedValue**| The value to add or update.. | [required]
 **bufferOption** | **string**| The desired AFBufferOption. The default is 'BufferIfPossible'.. | [optional]
 **updateOption** | **string**| The desired AFUpdateOption. The default is 'Replace'. This parameter is ignored if the attribute is a configuration item.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
