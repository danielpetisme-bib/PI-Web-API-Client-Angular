# SecurityIdentityApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getByPath**](SecurityIdentityApi.md#getbypath) | **GET** /securityidentities | Retrieve a security identity by path.
[**get**](SecurityIdentityApi.md#get) | **GET** /securityidentities/{webId} | Retrieve a security identity.
[**update**](SecurityIdentityApi.md#update) | **PATCH** /securityidentities/{webId} | Update a security identity by replacing items in its definition.
[**delete**](SecurityIdentityApi.md#delete) | **DELETE** /securityidentities/{webId} | Delete a security identity.
[**getSecurity**](SecurityIdentityApi.md#getsecurity) | **GET** /securityidentities/{webId}/security | Get the security information of the specified security item associated with the security identity for a specified user.
[**getSecurityEntries**](SecurityIdentityApi.md#getsecurityentries) | **GET** /securityidentities/{webId}/securityentries | Retrieve the security entries associated with the security identity based on the specified criteria. By default, all security entries for this security identity are returned.
[**getSecurityEntryByName**](SecurityIdentityApi.md#getsecurityentrybyname) | **GET** /securityidentities/{webId}/securityentries/{name} | Retrieve the security entry associated with the security identity with the specified name.
[**getSecurityMappings**](SecurityIdentityApi.md#getsecuritymappings) | **GET** /securityidentities/{webId}/securitymappings | Get security mappings for the specified security identity.


# **getByPath**
> getByPath(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve a security identity by path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| The path to the security identity.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PISecurityIdentity>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve a security identity.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the security identity.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PISecurityIdentity>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **update**
> update(webId: string, securityIdentity: Models.PISecurityIdentity, extraHttpRequestParams?: any)

Update a security identity by replacing items in its definition.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the security identity.. | [required]
 **securityIdentity** | **Models.PISecurityIdentity**| A partial security identity containing the desired changes.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **delete**
> delete(webId: string, extraHttpRequestParams?: any)

Delete a security identity.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the security identity.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurity**
> getSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Get the security information of the specified security item associated with the security identity for a specified user.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the security identity for the security to be checked.. | [required]
 **userIdentity** | **Array<string>**| The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.. | [required]
 **forceRefresh** | **boolean**| Indicates if the security cache should be refreshed before getting security information. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsSecurityRights>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntries**
> getSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve the security entries associated with the security identity based on the specified criteria. By default, all security entries for this security identity are returned.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the security identity.. | [required]
 **nameFilter** | **string**| The name query string used for filtering security entries. The default is no filter.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsSecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntryByName**
> getSecurityEntryByName(name: string, webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve the security entry associated with the security identity with the specified name.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.. | [required]
 **webId** | **string**| The ID of the security identity.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PISecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityMappings**
> getSecurityMappings(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Get security mappings for the specified security identity.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the security identity.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsSecurityMapping>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
