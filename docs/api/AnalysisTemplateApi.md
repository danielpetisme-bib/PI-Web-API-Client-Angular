# AnalysisTemplateApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getByPath**](AnalysisTemplateApi.md#getbypath) | **GET** /analysistemplates | Retrieve an analysis template by path.
[**createFromAnalysis**](AnalysisTemplateApi.md#createfromanalysis) | **POST** /analysistemplates | Create an Analysis template based upon a specified Analysis.
[**get**](AnalysisTemplateApi.md#get) | **GET** /analysistemplates/{webId} | Retrieve an analysis template.
[**update**](AnalysisTemplateApi.md#update) | **PATCH** /analysistemplates/{webId} | Update an analysis template by replacing items in its definition.
[**delete**](AnalysisTemplateApi.md#delete) | **DELETE** /analysistemplates/{webId} | Delete an analysis template.
[**getCategories**](AnalysisTemplateApi.md#getcategories) | **GET** /analysistemplates/{webId}/categories | Get an analysis template's categories.
[**getSecurity**](AnalysisTemplateApi.md#getsecurity) | **GET** /analysistemplates/{webId}/security | Get the security information of the specified security item associated with the analysis template for a specified user.
[**getSecurityEntries**](AnalysisTemplateApi.md#getsecurityentries) | **GET** /analysistemplates/{webId}/securityentries | Retrieve the security entries associated with the analysis template based on the specified criteria. By default, all security entries for this analysis template are returned.
[**createSecurityEntry**](AnalysisTemplateApi.md#createsecurityentry) | **POST** /analysistemplates/{webId}/securityentries | Create a security entry owned by the analysis template.
[**getSecurityEntryByName**](AnalysisTemplateApi.md#getsecurityentrybyname) | **GET** /analysistemplates/{webId}/securityentries/{name} | Retrieve the security entry associated with the analysis template with the specified name.
[**updateSecurityEntry**](AnalysisTemplateApi.md#updatesecurityentry) | **PUT** /analysistemplates/{webId}/securityentries/{name} | Update a security entry owned by the analysis template.
[**deleteSecurityEntry**](AnalysisTemplateApi.md#deletesecurityentry) | **DELETE** /analysistemplates/{webId}/securityentries/{name} | Delete a security entry owned by the analysis template.
[**getAnalysisTemplatesQuery**](AnalysisTemplateApi.md#getanalysistemplatesquery) | **GET** /analysistemplates/search | Retrieve analysis templates based on the specified conditions. By default, returns all analysis templates.


# **getByPath**
> getByPath(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an analysis template by path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| The path to the analysis template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIAnalysisTemplate>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createFromAnalysis**
> createFromAnalysis(analysisWebId: string, name?: string, webIdType?: string, extraHttpRequestParams?: any)

Create an Analysis template based upon a specified Analysis.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **analysisWebId** | **string**| The ID of the Analysis, on which the template is created.. | [required]
 **name** | **string**| The name for the created template, which must be unique within the database's AnalysisTemplate collection. If the name ends with an asterisk (*), then a unique name will be generated based on the supplied name. The default is the specified Analysis' name suffixed with an asterisk (*).. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an analysis template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the analysis template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIAnalysisTemplate>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **update**
> update(webId: string, template: Models.PIAnalysisTemplate, extraHttpRequestParams?: any)

Update an analysis template by replacing items in its definition.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the analysis template to update.. | [required]
 **template** | **Models.PIAnalysisTemplate**| A partial analysis template containing the desired changes.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **delete**
> delete(webId: string, extraHttpRequestParams?: any)

Delete an analysis template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the analysis template to update.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getCategories**
> getCategories(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Get an analysis template's categories.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the analysis template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsAnalysisCategory>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurity**
> getSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Get the security information of the specified security item associated with the analysis template for a specified user.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the analysis template for the security to be checked.. | [required]
 **userIdentity** | **Array<string>**| The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.. | [required]
 **forceRefresh** | **boolean**| Indicates if the security cache should be refreshed before getting security information. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsSecurityRights>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntries**
> getSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve the security entries associated with the analysis template based on the specified criteria. By default, all security entries for this analysis template are returned.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the analysis template.. | [required]
 **nameFilter** | **string**| The name query string used for filtering security entries. The default is no filter.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsSecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createSecurityEntry**
> createSecurityEntry(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, webIdType?: string, extraHttpRequestParams?: any)

Create a security entry owned by the analysis template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the analysis template, where the security entry will be created.. | [required]
 **securityEntry** | **Models.PISecurityEntry**| The new security entry definition. The full list of allow and deny rights must be supplied.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntryByName**
> getSecurityEntryByName(name: string, webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve the security entry associated with the analysis template with the specified name.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.. | [required]
 **webId** | **string**| The ID of the analysis template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PISecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateSecurityEntry**
> updateSecurityEntry(name: string, webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, extraHttpRequestParams?: any)

Update a security entry owned by the analysis template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry.. | [required]
 **webId** | **string**| The ID of the analysis template, where the security entry will be updated.. | [required]
 **securityEntry** | **Models.PISecurityEntry**| The new security entry definition. The full list of allow and deny rights must be supplied or they will be removed.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **deleteSecurityEntry**
> deleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean, extraHttpRequestParams?: any)

Delete a security entry owned by the analysis template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.. | [required]
 **webId** | **string**| The ID of the analysis template, where the security entry will be deleted.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAnalysisTemplatesQuery**
> getAnalysisTemplatesQuery(databaseWebId?: string, maxCount?: number, query?: string, selectedFields?: string, startIndex?: number, webIdType?: string, extraHttpRequestParams?: any)

Retrieve analysis templates based on the specified conditions. By default, returns all analysis templates.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **databaseWebId** | **string**| The ID of the asset database to use as the root of the query.. | [optional]
 **maxCount** | **number**| The maximum number of objects to be returned per call (page size). The default is 1000.. | [optional]
 **query** | **string**| The query string is a list of filters used to perform an AFSearch for the analyses in the asset database. An example would be: "query= Name:=MyAnalysisTemplate1*".. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsAnalysisTemplate>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
