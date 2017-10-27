# PointApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getByPath**](PointApi.md#getbypath) | **GET** /points | Get a point by path.
[**get**](PointApi.md#get) | **GET** /points/{webId} | Get a point.
[**update**](PointApi.md#update) | **PATCH** /points/{webId} | Update a point.
[**delete**](PointApi.md#delete) | **DELETE** /points/{webId} | Delete a point.
[**getAttributes**](PointApi.md#getattributes) | **GET** /points/{webId}/attributes | Get point attributes.
[**getAttributeByName**](PointApi.md#getattributebyname) | **GET** /points/{webId}/attributes/{name} | Get a point attribute by name.
[**updateAttributeValue**](PointApi.md#updateattributevalue) | **PUT** /points/{webId}/attributes/{name} | Update a point attribute value.
[**getMultiple**](PointApi.md#getmultiple) | **GET** /points/multiple | Retrieve multiple points by web id or path.


# **getByPath**
> getByPath(path: string, selectedFields?: string, extraHttpRequestParams?: any)

Get a point by path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| The path to the point.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIPoint>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(webId: string, selectedFields?: string, extraHttpRequestParams?: any)

Get a point.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the point.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIPoint>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **update**
> update(webId: string, pointDTO: Models.PIPoint, extraHttpRequestParams?: any)

Update a point.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the point.. | [required]
 **pointDTO** | **Models.PIPoint**| A partial point containing the desired changes.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **delete**
> delete(webId: string, extraHttpRequestParams?: any)

Delete a point.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the point.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAttributes**
> getAttributes(webId: string, name?: Array<string>, nameFilter?: string, selectedFields?: string, extraHttpRequestParams?: any)

Get point attributes.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the point.. | [required]
 **name** | **Array<string>**| The name of a point attribute to be returned. Multiple attributes may be specified with multiple instances of the parameter.. | [optional]
 **nameFilter** | **string**| The filter to the names of the list of point attributes to be returned. The default is no filter.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIItemsPointAttribute>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAttributeByName**
> getAttributeByName(name: string, webId: string, selectedFields?: string, extraHttpRequestParams?: any)

Get a point attribute by name.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the attribute.. | [required]
 **webId** | **string**| The ID of the point.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIPointAttribute>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateAttributeValue**
> updateAttributeValue(webId: string, name: string, value: any, extraHttpRequestParams?: any)

Update a point attribute value.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the point.. | [required]
 **name** | **string**| The name of the attribute to be updated.. | [required]
 **value** | **any**| The new value of the attribute to be updated.. | [required]


### Return type

Observable<{}>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getMultiple**
> getMultiple(asParallel?: boolean, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>, extraHttpRequestParams?: any)

Retrieve multiple points by web id or path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **asParallel** | **boolean**| Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested points. The default is 'false'.. | [optional]
 **includeMode** | **string**| The include mode for the return list. The default is 'All'.. | [optional]
 **path** | **Array<string>**| The path of a point. Multiple points may be specified with multiple instances of the parameter.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webId** | **Array<string>**| The ID of a point. Multiple points may be specified with multiple instances of the parameter.. | [optional]


### Return type

Observable<Models.PIItemsItemPoint>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
