# EnumerationValueApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getByPath**](EnumerationValueApi.md#getbypath) | **GET** /enumerationvalues | Retrieve an enumeration value by path.
[**get**](EnumerationValueApi.md#get) | **GET** /enumerationvalues/{webId} | Retrieve an enumeration value mapping
[**updateEnumerationValue**](EnumerationValueApi.md#updateenumerationvalue) | **PATCH** /enumerationvalues/{webId} | Update an enumeration value by replacing items in its definition.
[**deleteEnumerationValue**](EnumerationValueApi.md#deleteenumerationvalue) | **DELETE** /enumerationvalues/{webId} | Delete an enumeration value from an enumeration set.


# **getByPath**
> getByPath(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an enumeration value by path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| The path to the target enumeration value.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIEnumerationValue>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an enumeration value mapping

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the enumeration value.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIEnumerationValue>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateEnumerationValue**
> updateEnumerationValue(webId: string, enumerationValue: Models.PIEnumerationValue, extraHttpRequestParams?: any)

Update an enumeration value by replacing items in its definition.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the enumeration value to update.. | [required]
 **enumerationValue** | **Models.PIEnumerationValue**| A partial enumeration value containing the desired changes.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **deleteEnumerationValue**
> deleteEnumerationValue(webId: string, extraHttpRequestParams?: any)

Delete an enumeration value from an enumeration set.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the enumeration value.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
