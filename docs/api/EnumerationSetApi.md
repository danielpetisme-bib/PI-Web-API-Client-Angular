# EnumerationSetApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getByPath**](EnumerationSetApi.md#getbypath) | **GET** /enumerationsets | Retrieve an enumeration set by path.
[**get**](EnumerationSetApi.md#get) | **GET** /enumerationsets/{webId} | Retrieve an enumeration set.
[**update**](EnumerationSetApi.md#update) | **PATCH** /enumerationsets/{webId} | Update an enumeration set by replacing items in its definition.
[**delete**](EnumerationSetApi.md#delete) | **DELETE** /enumerationsets/{webId} | Delete an enumeration set.
[**getValues**](EnumerationSetApi.md#getvalues) | **GET** /enumerationsets/{webId}/enumerationvalues | Retrieve an enumeration set's values.
[**createValue**](EnumerationSetApi.md#createvalue) | **POST** /enumerationsets/{webId}/enumerationvalues | Create an enumeration value for a enumeration set.
[**getSecurity**](EnumerationSetApi.md#getsecurity) | **GET** /enumerationsets/{webId}/security | Get the security information of the specified security item associated with the enumeration set for a specified user.
[**getSecurityEntries**](EnumerationSetApi.md#getsecurityentries) | **GET** /enumerationsets/{webId}/securityentries | Retrieve the security entries associated with the enumeration set based on the specified criteria. By default, all security entries for this enumeration set are returned.
[**createSecurityEntry**](EnumerationSetApi.md#createsecurityentry) | **POST** /enumerationsets/{webId}/securityentries | Create a security entry owned by the enumeration set.
[**getSecurityEntryByName**](EnumerationSetApi.md#getsecurityentrybyname) | **GET** /enumerationsets/{webId}/securityentries/{name} | Retrieve the security entry associated with the enumeration set with the specified name.
[**updateSecurityEntry**](EnumerationSetApi.md#updatesecurityentry) | **PUT** /enumerationsets/{webId}/securityentries/{name} | Update a security entry owned by the enumeration set.
[**deleteSecurityEntry**](EnumerationSetApi.md#deletesecurityentry) | **DELETE** /enumerationsets/{webId}/securityentries/{name} | Delete a security entry owned by the enumeration set.


# **getByPath**
> getByPath(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an enumeration set by path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| The path to the target enumeration set.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIEnumerationSet>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an enumeration set.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the enumeration set.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIEnumerationSet>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **update**
> update(webId: string, enumerationSet: Models.PIEnumerationSet, extraHttpRequestParams?: any)

Update an enumeration set by replacing items in its definition.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the enumeration set to update.. | [required]
 **enumerationSet** | **Models.PIEnumerationSet**| A partial enumeration set containing the desired changes.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **delete**
> delete(webId: string, extraHttpRequestParams?: any)

Delete an enumeration set.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the enumeration set to delete.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getValues**
> getValues(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an enumeration set's values.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the enumeration set.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsEnumerationValue>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createValue**
> createValue(webId: string, enumerationValue: Models.PIEnumerationValue, webIdType?: string, extraHttpRequestParams?: any)

Create an enumeration value for a enumeration set.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the enumeration set on which to create the enumeration value.. | [required]
 **enumerationValue** | **Models.PIEnumerationValue**| The new enumeration value definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurity**
> getSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Get the security information of the specified security item associated with the enumeration set for a specified user.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the enumeration set for the security to be checked.. | [required]
 **userIdentity** | **Array<string>**| The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.. | [required]
 **forceRefresh** | **boolean**| Indicates if the security cache should be refreshed before getting security information. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsSecurityRights>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntries**
> getSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve the security entries associated with the enumeration set based on the specified criteria. By default, all security entries for this enumeration set are returned.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the enumeration set.. | [required]
 **nameFilter** | **string**| The name query string used for filtering security entries. The default is no filter.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsSecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createSecurityEntry**
> createSecurityEntry(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, webIdType?: string, extraHttpRequestParams?: any)

Create a security entry owned by the enumeration set.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the enumeration set where the security entry will be created.. | [required]
 **securityEntry** | **Models.PISecurityEntry**| The new security entry definition. The full list of allow and deny rights must be supplied.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntryByName**
> getSecurityEntryByName(name: string, webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve the security entry associated with the enumeration set with the specified name.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.. | [required]
 **webId** | **string**| The ID of the enumeration set.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PISecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateSecurityEntry**
> updateSecurityEntry(name: string, webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, extraHttpRequestParams?: any)

Update a security entry owned by the enumeration set.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry.. | [required]
 **webId** | **string**| The ID of the enumeration set where the security entry will be updated.. | [required]
 **securityEntry** | **Models.PISecurityEntry**| The new security entry definition. The full list of allow and deny rights must be supplied or they will be removed.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **deleteSecurityEntry**
> deleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean, extraHttpRequestParams?: any)

Delete a security entry owned by the enumeration set.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.. | [required]
 **webId** | **string**| The ID of the enumeration set where the security entry will be deleted.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
