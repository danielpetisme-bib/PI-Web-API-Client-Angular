# UnitClassApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getByPath**](UnitClassApi.md#getbypath) | **GET** /unitclasses | Retrieve a unit class by path.
[**get**](UnitClassApi.md#get) | **GET** /unitclasses/{webId} | Retrieve a unit class.
[**update**](UnitClassApi.md#update) | **PATCH** /unitclasses/{webId} | Update a unit class.
[**delete**](UnitClassApi.md#delete) | **DELETE** /unitclasses/{webId} | Delete a unit class.
[**getCanonicalUnit**](UnitClassApi.md#getcanonicalunit) | **GET** /unitclasses/{webId}/canonicalunit | Get the canonical unit of a unit class.
[**getUnits**](UnitClassApi.md#getunits) | **GET** /unitclasses/{webId}/units | Get a list of all units belonging to the unit class.
[**createUnit**](UnitClassApi.md#createunit) | **POST** /unitclasses/{webId}/units | Create a unit in the specified Unit Class.


# **getByPath**
> getByPath(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve a unit class by path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| The path to the unit class.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIUnitClass>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve a unit class.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the unit class.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIUnitClass>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **update**
> update(webId: string, unitClassDTO: Models.PIUnitClass, extraHttpRequestParams?: any)

Update a unit class.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the unit class.. | [required]
 **unitClassDTO** | **Models.PIUnitClass**| A partial unit class containing the desired changes.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **delete**
> delete(webId: string, extraHttpRequestParams?: any)

Delete a unit class.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the unit class.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getCanonicalUnit**
> getCanonicalUnit(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Get the canonical unit of a unit class.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of unit class.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIUnit>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getUnits**
> getUnits(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Get a list of all units belonging to the unit class.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of unit class.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIUnit>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createUnit**
> createUnit(webId: string, unitDTO: Models.PIUnit, webIdType?: string, extraHttpRequestParams?: any)

Create a unit in the specified Unit Class.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the server.. | [required]
 **unitDTO** | **Models.PIUnit**| The new unit definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
