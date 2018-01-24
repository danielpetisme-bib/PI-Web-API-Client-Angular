# ElementTemplateApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getByPath**](ElementTemplateApi.md#getbypath) | **GET** /elementtemplates | Retrieve an element template by path.
[**get**](ElementTemplateApi.md#get) | **GET** /elementtemplates/{webId} | Retrieve an element template.
[**update**](ElementTemplateApi.md#update) | **PATCH** /elementtemplates/{webId} | Update an element template by replacing items in its definition.
[**delete**](ElementTemplateApi.md#delete) | **DELETE** /elementtemplates/{webId} | Delete an element template.
[**getAnalysisTemplates**](ElementTemplateApi.md#getanalysistemplates) | **GET** /elementtemplates/{webId}/analysistemplates | Get analysis templates for an element template.
[**getAttributeTemplates**](ElementTemplateApi.md#getattributetemplates) | **GET** /elementtemplates/{webId}/attributetemplates | Get child attribute templates for an element template.
[**createAttributeTemplate**](ElementTemplateApi.md#createattributetemplate) | **POST** /elementtemplates/{webId}/attributetemplates | Create an attribute template.
[**getCategories**](ElementTemplateApi.md#getcategories) | **GET** /elementtemplates/{webId}/categories | Get an element template's categories.
[**getSecurity**](ElementTemplateApi.md#getsecurity) | **GET** /elementtemplates/{webId}/security | Get the security information of the specified security item associated with the element template for a specified user.
[**getSecurityEntries**](ElementTemplateApi.md#getsecurityentries) | **GET** /elementtemplates/{webId}/securityentries | Retrieve the security entries associated with the element template based on the specified criteria. By default, all security entries for this element template are returned.
[**createSecurityEntry**](ElementTemplateApi.md#createsecurityentry) | **POST** /elementtemplates/{webId}/securityentries | Create a security entry owned by the element template.
[**getSecurityEntryByName**](ElementTemplateApi.md#getsecurityentrybyname) | **GET** /elementtemplates/{webId}/securityentries/{name} | Retrieve the security entry associated with the element template with the specified name.
[**updateSecurityEntry**](ElementTemplateApi.md#updatesecurityentry) | **PUT** /elementtemplates/{webId}/securityentries/{name} | Update a security entry owned by the element template.
[**deleteSecurityEntry**](ElementTemplateApi.md#deletesecurityentry) | **DELETE** /elementtemplates/{webId}/securityentries/{name} | Delete a security entry owned by the element template.


# **getByPath**
> getByPath(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an element template by path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| The path to the element template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIElementTemplate>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an element template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIElementTemplate>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **update**
> update(webId: string, template: Models.PIElementTemplate, extraHttpRequestParams?: any)

Update an element template by replacing items in its definition.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element template to update.. | [required]
 **template** | **Models.PIElementTemplate**| A partial element template containing the desired changes.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **delete**
> delete(webId: string, extraHttpRequestParams?: any)

Delete an element template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element template to update.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAnalysisTemplates**
> getAnalysisTemplates(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Get analysis templates for an element template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsAnalysisTemplate>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAttributeTemplates**
> getAttributeTemplates(webId: string, selectedFields?: string, showInherited?: boolean, webIdType?: string, extraHttpRequestParams?: any)

Get child attribute templates for an element template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **showInherited** | **boolean**| Specifies if the result should include attribute templates inherited from base element templates. The default is 'false'.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsAttributeTemplate>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createAttributeTemplate**
> createAttributeTemplate(webId: string, template: Models.PIAttributeTemplate, webIdType?: string, extraHttpRequestParams?: any)

Create an attribute template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element template on which to create the attribute template.. | [required]
 **template** | **Models.PIAttributeTemplate**| The attribute template definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getCategories**
> getCategories(webId: string, selectedFields?: string, showInherited?: boolean, webIdType?: string, extraHttpRequestParams?: any)

Get an element template's categories.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **showInherited** | **boolean**| Specifies if the result should include categories inherited from base element templates. The default is 'false'.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsElementCategory>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurity**
> getSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Get the security information of the specified security item associated with the element template for a specified user.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element template for the security to be checked.. | [required]
 **userIdentity** | **Array<string>**| The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.. | [required]
 **forceRefresh** | **boolean**| Indicates if the security cache should be refreshed before getting security information. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsSecurityRights>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntries**
> getSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve the security entries associated with the element template based on the specified criteria. By default, all security entries for this element template are returned.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element template.. | [required]
 **nameFilter** | **string**| The name query string used for filtering security entries. The default is no filter.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsSecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createSecurityEntry**
> createSecurityEntry(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, webIdType?: string, extraHttpRequestParams?: any)

Create a security entry owned by the element template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element template where the security entry will be created.. | [required]
 **securityEntry** | **Models.PISecurityEntry**| The new security entry definition. The full list of allow and deny rights must be supplied.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntryByName**
> getSecurityEntryByName(name: string, webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve the security entry associated with the element template with the specified name.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.. | [required]
 **webId** | **string**| The ID of the element template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsSecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateSecurityEntry**
> updateSecurityEntry(name: string, webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, extraHttpRequestParams?: any)

Update a security entry owned by the element template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry.. | [required]
 **webId** | **string**| The ID of the element template where the security entry will be updated.. | [required]
 **securityEntry** | **Models.PISecurityEntry**| The new security entry definition. The full list of allow and deny rights must be supplied or they will be removed.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **deleteSecurityEntry**
> deleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean, extraHttpRequestParams?: any)

Delete a security entry owned by the element template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.. | [required]
 **webId** | **string**| The ID of the element template where the security entry will be deleted.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
