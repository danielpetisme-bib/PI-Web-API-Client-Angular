# AttributeTemplateApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getByPath**](AttributeTemplateApi.md#getbypath) | **GET** /attributetemplates | Retrieve an attribute template by path.
[**get**](AttributeTemplateApi.md#get) | **GET** /attributetemplates/{webId} | Retrieve an attribute template.
[**update**](AttributeTemplateApi.md#update) | **PATCH** /attributetemplates/{webId} | Update an existing attribute template by replacing items in its definition.
[**delete**](AttributeTemplateApi.md#delete) | **DELETE** /attributetemplates/{webId} | Delete an attribute template.
[**getAttributeTemplates**](AttributeTemplateApi.md#getattributetemplates) | **GET** /attributetemplates/{webId}/attributetemplates | Retrieve an attribute template's child attribute templates.
[**createAttributeTemplate**](AttributeTemplateApi.md#createattributetemplate) | **POST** /attributetemplates/{webId}/attributetemplates | Create an attribute template as a child of another attribute template.
[**getCategories**](AttributeTemplateApi.md#getcategories) | **GET** /attributetemplates/{webId}/categories | Get an attribute template's categories.


# **getByPath**
> getByPath(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an attribute template by path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| The path to the attribute template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIAttributeTemplate>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an attribute template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the attribute template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIAttributeTemplate>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **update**
> update(webId: string, template: Models.PIAttributeTemplate, extraHttpRequestParams?: any)

Update an existing attribute template by replacing items in its definition.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the attribute template.. | [required]
 **template** | **Models.PIAttributeTemplate**| A partial attribute template containing the desired changes.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **delete**
> delete(webId: string, extraHttpRequestParams?: any)

Delete an attribute template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the attribute template.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAttributeTemplates**
> getAttributeTemplates(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an attribute template's child attribute templates.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the attribute template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsAttributeTemplate>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createAttributeTemplate**
> createAttributeTemplate(webId: string, template: Models.PIAttributeTemplate, webIdType?: string, extraHttpRequestParams?: any)

Create an attribute template as a child of another attribute template.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the parent attribute template on which to create the attribute template.. | [required]
 **template** | **Models.PIAttributeTemplate**| The attribute template definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getCategories**
> getCategories(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Get an attribute template's categories.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the attribute template.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsAttributeCategory>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
