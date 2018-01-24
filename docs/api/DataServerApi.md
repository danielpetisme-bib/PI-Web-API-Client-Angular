# DataServerApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**list**](DataServerApi.md#list) | **GET** /dataservers | Retrieve a list of Data Servers known to this service.
[**getByName**](DataServerApi.md#getbyname) | **GET** /dataservers#name | Retrieve a Data Server by name.
[**getByPath**](DataServerApi.md#getbypath) | **GET** /dataservers#path | Retrieve a Data Server by path.
[**get**](DataServerApi.md#get) | **GET** /dataservers/{webId} | Retrieve a Data Server.
[**getEnumerationSets**](DataServerApi.md#getenumerationsets) | **GET** /dataservers/{webId}/enumerationsets | Retrieve enumeration sets for given Data Server.
[**createEnumerationSet**](DataServerApi.md#createenumerationset) | **POST** /dataservers/{webId}/enumerationsets | Create an enumeration set on the Data Server.
[**getLicense**](DataServerApi.md#getlicense) | **GET** /dataservers/{webId}/license | Retrieves the specified license for the given Data Server. The fields of the response object are string representations of the numerical values reported by the Data Server, with "Infinity" representing a license field with no limit.
[**getPoints**](DataServerApi.md#getpoints) | **GET** /dataservers/{webId}/points | Retrieve a list of points on a specified Data Server.
[**createPoint**](DataServerApi.md#createpoint) | **POST** /dataservers/{webId}/points | Create a point in the specified Data Server.


# **list**
> list(selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve a list of Data Servers known to this service.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsDataServer>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getByName**
> getByName(name: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve a Data Server by name.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the server.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIDataServer>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getByPath**
> getByPath(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve a Data Server by path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| The path to the server. Note that the path supplied to this method must be of the form '\\servername'.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIDataServer>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve a Data Server.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the server.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIDataServer>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getEnumerationSets**
> getEnumerationSets(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve enumeration sets for given Data Server.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the server.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsEnumerationSet>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createEnumerationSet**
> createEnumerationSet(webId: string, enumerationSet: Models.PIEnumerationSet, webIdType?: string, extraHttpRequestParams?: any)

Create an enumeration set on the Data Server.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the server on which to create the enumeration set.. | [required]
 **enumerationSet** | **Models.PIEnumerationSet**| The new enumeration set definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getLicense**
> getLicense(webId: string, module: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieves the specified license for the given Data Server. The fields of the response object are string representations of the numerical values reported by the Data Server, with "Infinity" representing a license field with no limit.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the server.. | [required]
 **module** | **string**| The case-sensitive name of the module.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIDataServerLicense>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getPoints**
> getPoints(webId: string, maxCount?: number, nameFilter?: string, selectedFields?: string, startIndex?: number, webIdType?: string, extraHttpRequestParams?: any)

Retrieve a list of points on a specified Data Server.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the server.. | [required]
 **maxCount** | **number**| The maximum number of objects to be returned per call (page size). The default is 1000.. | [optional]
 **nameFilter** | **string**| A query string for filtering by point name. The default is no filter.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is '0'.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsPoint>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createPoint**
> createPoint(webId: string, pointDTO: Models.PIPoint, webIdType?: string, extraHttpRequestParams?: any)

Create a point in the specified Data Server.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the server.. | [required]
 **pointDTO** | **Models.PIPoint**| The new point definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
