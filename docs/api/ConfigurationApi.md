# ConfigurationApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**list**](ConfigurationApi.md#list) | **GET** /system/configuration | Get the current system configuration.
[**get**](ConfigurationApi.md#get) | **GET** /system/configuration/{key} | Get the value of a configuration item.
[**delete**](ConfigurationApi.md#delete) | **DELETE** /system/configuration/{key} | Delete a configuration item.
[**put**](ConfigurationApi.md#put) | **PUT** /system/configuration/{key} | Create or update a configuration item.


# **list**
> list(extraHttpRequestParams?: any)

Get the current system configuration.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------


### Return type

Observable<{[key: string]: any }>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(key: string, extraHttpRequestParams?: any)

Get the value of a configuration item.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **key** | **string**| The key of the configuration item.. | [required]


### Return type

Observable<{}>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **delete**
> delete(key: string, extraHttpRequestParams?: any)

Delete a configuration item.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **key** | **string**| The key of the configuration item to remove.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **put**
> put(key: string, value: any, extraHttpRequestParams?: any)

Create or update a configuration item.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **key** | **string**| The key of the configuration item to create or update.. | [required]
 **value** | **any**| The value of the configuration item.. | [required]


### Return type

Observable<{}>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
