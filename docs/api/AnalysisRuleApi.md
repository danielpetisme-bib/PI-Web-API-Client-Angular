# AnalysisRuleApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getByPath**](AnalysisRuleApi.md#getbypath) | **GET** /analysisrules | Retrieve an Analysis Rule by path.
[**get**](AnalysisRuleApi.md#get) | **GET** /analysisrules/{webId} | Retrieve an Analysis Rule.
[**update**](AnalysisRuleApi.md#update) | **PATCH** /analysisrules/{webId} | Update an Analysis Rule by replacing items in its definition.
[**delete**](AnalysisRuleApi.md#delete) | **DELETE** /analysisrules/{webId} | Delete an Analysis Rule.
[**getAnalysisRules**](AnalysisRuleApi.md#getanalysisrules) | **GET** /analysisrules/{webId}/analysisrules | Get the child Analysis Rules of the Analysis Rule.
[**createAnalysisRule**](AnalysisRuleApi.md#createanalysisrule) | **POST** /analysisrules/{webId}/analysisrules | Create a new Analysis Rule as a child of an existing Analysis Rule.


# **getByPath**
> getByPath(path: string, selectedFields?: string, extraHttpRequestParams?: any)

Retrieve an Analysis Rule by path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| The path to the Analysis Rule.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIAnalysisRule>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(webId: string, selectedFields?: string, extraHttpRequestParams?: any)

Retrieve an Analysis Rule.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the Analysis Rule.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIAnalysisRule>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **update**
> update(webId: string, analysisRule: Models.PIAnalysisRule, extraHttpRequestParams?: any)

Update an Analysis Rule by replacing items in its definition.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the Analysis Rule.. | [required]
 **analysisRule** | **Models.PIAnalysisRule**| A partial Analysis Rule containing the desired changes.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **delete**
> delete(webId: string, extraHttpRequestParams?: any)

Delete an Analysis Rule.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the Analysis Rule.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAnalysisRules**
> getAnalysisRules(webId: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, extraHttpRequestParams?: any)

Get the child Analysis Rules of the Analysis Rule.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the parent Analysis Rule.. | [required]
 **maxCount** | **number**| The maximum number of objects to be returned per call (page size). The default is 1000.. | [optional]
 **nameFilter** | **string**| The name query string used for finding Analysis Rules. The default is no filter.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include Analysis Rules nested further than the immediate children of the searchRoot. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]


### Return type

Observable<Models.PIItemsAnalysisRule>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createAnalysisRule**
> createAnalysisRule(webId: string, analysisRule: Models.PIAnalysisRule, extraHttpRequestParams?: any)

Create a new Analysis Rule as a child of an existing Analysis Rule.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the parent Analysis Rule, on which to create the child Analysis Rule.. | [required]
 **analysisRule** | **Models.PIAnalysisRule**| The definition of the new Analysis Rule.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
