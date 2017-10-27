# SystemApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**landing**](SystemApi.md#landing) | **GET** /system | Get system links for this PI System Web API instance.
[**cacheInstances**](SystemApi.md#cacheinstances) | **GET** /system/cacheinstances | Get AF cache instances currently in use by the system. These are caches from which user requests are serviced. The number of instances depends on the number of users connected to the service, the service's authentication method, and the cache instance configuration.
[**status**](SystemApi.md#status) | **GET** /system/status | Get the system uptime, the system state and the number of cache instances for this PI System Web API instance.
[**userInfo**](SystemApi.md#userinfo) | **GET** /system/userinfo | Get information about the Windows identity used to fulfill the request. This depends on the service's authentication method and the credentials passed by the client. The impersonation level of the Windows identity is included.
[**versions**](SystemApi.md#versions) | **GET** /system/versions | Get the current versions of the PI Web API instance and all external plugins.


# **landing**
> landing(extraHttpRequestParams?: any)

Get system links for this PI System Web API instance.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------


### Return type

Observable<Models.PISystemLanding>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **cacheInstances**
> cacheInstances(extraHttpRequestParams?: any)

Get AF cache instances currently in use by the system. These are caches from which user requests are serviced. The number of instances depends on the number of users connected to the service, the service's authentication method, and the cache instance configuration.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------


### Return type

Observable<Models.PIItemsCacheInstance>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **status**
> status(extraHttpRequestParams?: any)

Get the system uptime, the system state and the number of cache instances for this PI System Web API instance.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------


### Return type

Observable<Models.PISystemStatus>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **userInfo**
> userInfo(extraHttpRequestParams?: any)

Get information about the Windows identity used to fulfill the request. This depends on the service's authentication method and the credentials passed by the client. The impersonation level of the Windows identity is included.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------


### Return type

Observable<Models.PIUserInfo>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **versions**
> versions(extraHttpRequestParams?: any)

Get the current versions of the PI Web API instance and all external plugins.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------


### Return type

Observable<{[key: string]: Models.PIVersion }>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
