# AssetDatabaseApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getByPath**](AssetDatabaseApi.md#getbypath) | **GET** /assetdatabases | Retrieve an Asset Database by path.
[**get**](AssetDatabaseApi.md#get) | **GET** /assetdatabases/{webId} | Retrieve an Asset Database.
[**update**](AssetDatabaseApi.md#update) | **PATCH** /assetdatabases/{webId} | Update an asset database by replacing items in its definition.
[**delete**](AssetDatabaseApi.md#delete) | **DELETE** /assetdatabases/{webId} | Delete an asset database.
[**findAnalyses**](AssetDatabaseApi.md#findanalyses) | **GET** /assetdatabases/{webId}/analyses | Retrieve analyses based on the specified conditions.
[**getAnalysisCategories**](AssetDatabaseApi.md#getanalysiscategories) | **GET** /assetdatabases/{webId}/analysiscategories | Retrieve analysis categories for a given Asset Database.
[**createAnalysisCategory**](AssetDatabaseApi.md#createanalysiscategory) | **POST** /assetdatabases/{webId}/analysiscategories | Create an analysis category at the Asset Database root.
[**getAnalysisTemplates**](AssetDatabaseApi.md#getanalysistemplates) | **GET** /assetdatabases/{webId}/analysistemplates | Retrieve analysis templates based on the specified criteria. By default, all analysis templates in the specified Asset Database are returned.
[**createAnalysisTemplate**](AssetDatabaseApi.md#createanalysistemplate) | **POST** /assetdatabases/{webId}/analysistemplates | Create an analysis template at the Asset Database root.
[**getAttributeCategories**](AssetDatabaseApi.md#getattributecategories) | **GET** /assetdatabases/{webId}/attributecategories | Retrieve attribute categories for a given Asset Database.
[**createAttributeCategory**](AssetDatabaseApi.md#createattributecategory) | **POST** /assetdatabases/{webId}/attributecategories | Create an attribute category at the Asset Database root.
[**findElementAttributes**](AssetDatabaseApi.md#findelementattributes) | **GET** /assetdatabases/{webId}/elementattributes | Retrieves a list of element attributes matching the specified filters from the specified asset database.
[**getElementCategories**](AssetDatabaseApi.md#getelementcategories) | **GET** /assetdatabases/{webId}/elementcategories | Retrieve element categories for a given Asset Database.
[**createElementCategory**](AssetDatabaseApi.md#createelementcategory) | **POST** /assetdatabases/{webId}/elementcategories | Create an element category at the Asset Database root.
[**getElements**](AssetDatabaseApi.md#getelements) | **GET** /assetdatabases/{webId}/elements | Retrieve elements based on the specified conditions. By default, this method selects immediate children of the specified asset database.
[**createElement**](AssetDatabaseApi.md#createelement) | **POST** /assetdatabases/{webId}/elements | Create a child element.
[**getElementTemplates**](AssetDatabaseApi.md#getelementtemplates) | **GET** /assetdatabases/{webId}/elementtemplates | Retrieve element templates based on the specified criteria. Only templates of instance type "Element" and "EventFrame" are returned. By default, all element and event frame templates in the specified Asset Database are returned.
[**createElementTemplate**](AssetDatabaseApi.md#createelementtemplate) | **POST** /assetdatabases/{webId}/elementtemplates | Create a template at the Asset Database root. Specify InstanceType of "Element" or "EventFrame" to create element or event frame template respectively. Only these two types of templates can be created.
[**getEnumerationSets**](AssetDatabaseApi.md#getenumerationsets) | **GET** /assetdatabases/{webId}/enumerationsets | Retrieve enumeration sets for given asset database.
[**createEnumerationSet**](AssetDatabaseApi.md#createenumerationset) | **POST** /assetdatabases/{webId}/enumerationsets | Create an enumeration set at the Asset Database.
[**findEventFrameAttributes**](AssetDatabaseApi.md#findeventframeattributes) | **GET** /assetdatabases/{webId}/eventframeattributes | Retrieves a list of event frame attributes matching the specified filters from the specified asset database.
[**getEventFrames**](AssetDatabaseApi.md#geteventframes) | **GET** /assetdatabases/{webId}/eventframes | Retrieve event frames based on the specified conditions. By default, returns all children of the specified root resource that have been active in the past 8 hours.
[**createEventFrame**](AssetDatabaseApi.md#createeventframe) | **POST** /assetdatabases/{webId}/eventframes | Create an event frame.
[**export**](AssetDatabaseApi.md#export) | **GET** /assetdatabases/{webId}/export | Export the asset database.
[**importData**](AssetDatabaseApi.md#import) | **POST** /assetdatabases/{webId}/import | Import an asset database.
[**getReferencedElements**](AssetDatabaseApi.md#getreferencedelements) | **GET** /assetdatabases/{webId}/referencedelements | Retrieve referenced elements based on the specified conditions. By default, this method selects all referenced elements at the root level of the asset database.
[**addReferencedElement**](AssetDatabaseApi.md#addreferencedelement) | **POST** /assetdatabases/{webId}/referencedelements | Add a reference to an existing element to the specified database.
[**removeReferencedElement**](AssetDatabaseApi.md#removereferencedelement) | **DELETE** /assetdatabases/{webId}/referencedelements | Remove a reference to an existing element from the specified database.
[**getSecurity**](AssetDatabaseApi.md#getsecurity) | **GET** /assetdatabases/{webId}/security | Get the security information of the specified security item associated with the asset database for a specified user.
[**getSecurityEntries**](AssetDatabaseApi.md#getsecurityentries) | **GET** /assetdatabases/{webId}/securityentries | Retrieve the security entries of the specified security item associated with the asset database based on the specified criteria. By default, all security entries for this asset database are returned.
[**createSecurityEntry**](AssetDatabaseApi.md#createsecurityentry) | **POST** /assetdatabases/{webId}/securityentries | Create a security entry owned by the asset database.
[**getSecurityEntryByName**](AssetDatabaseApi.md#getsecurityentrybyname) | **GET** /assetdatabases/{webId}/securityentries/{name} | Retrieve the security entry of the specified security item associated with the asset database with the specified name.
[**updateSecurityEntry**](AssetDatabaseApi.md#updatesecurityentry) | **PUT** /assetdatabases/{webId}/securityentries/{name} | Update a security entry owned by the asset database.
[**deleteSecurityEntry**](AssetDatabaseApi.md#deletesecurityentry) | **DELETE** /assetdatabases/{webId}/securityentries/{name} | Delete a security entry owned by the asset database.
[**getTableCategories**](AssetDatabaseApi.md#gettablecategories) | **GET** /assetdatabases/{webId}/tablecategories | Retrieve table categories for a given Asset Database.
[**createTableCategory**](AssetDatabaseApi.md#createtablecategory) | **POST** /assetdatabases/{webId}/tablecategories | Create a table category on the Asset Database.
[**getTables**](AssetDatabaseApi.md#gettables) | **GET** /assetdatabases/{webId}/tables | Retrieve tables for given Asset Database.
[**createTable**](AssetDatabaseApi.md#createtable) | **POST** /assetdatabases/{webId}/tables | Create a table on the Asset Database.


# **getByPath**
> getByPath(path: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an Asset Database by path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| The path to the database.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIAssetDatabase>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve an Asset Database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIAssetDatabase>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **update**
> update(webId: string, database: Models.PIAssetDatabase, extraHttpRequestParams?: any)

Update an asset database by replacing items in its definition.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database.. | [required]
 **database** | **Models.PIAssetDatabase**| A partial database containing the desired changes.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **delete**
> delete(webId: string, extraHttpRequestParams?: any)

Delete an asset database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **findAnalyses**
> findAnalyses(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, webIdType?: string, extraHttpRequestParams?: any)

Retrieve analyses based on the specified conditions.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database to search for the analyses.. | [required]
 **field** | **Array<string>**| Specifies which of the object's properties are searched. Multiple search fields may be specified with multiple instances of the parameter. The default is 'Name'.. | [required]
 **maxCount** | **number**| The maximum number of objects to be returned per call (page size). The default is 1000.. | [optional]
 **query** | **string**| The query string used for finding analyses. The default is null.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsAnalysis>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAnalysisCategories**
> getAnalysisCategories(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve analysis categories for a given Asset Database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsAnalysisCategory>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createAnalysisCategory**
> createAnalysisCategory(webId: string, analysisCategory: Models.PIAnalysisCategory, webIdType?: string, extraHttpRequestParams?: any)

Create an analysis category at the Asset Database root.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database in which to create the analysis category.. | [required]
 **analysisCategory** | **Models.PIAnalysisCategory**| The new analysis category definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAnalysisTemplates**
> getAnalysisTemplates(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve analysis templates based on the specified criteria. By default, all analysis templates in the specified Asset Database are returned.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database to search.. | [required]
 **field** | **Array<string>**| Specifies which of the object's properties are searched. Multiple search fields may be specified with multiple instances of the parameter. The default is 'Name'.. | [required]
 **maxCount** | **number**| The maximum number of objects to be returned per call (page size). The default is 1000.. | [optional]
 **query** | **string**| The query string used for finding objects. The default is no query string.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsAnalysisTemplate>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createAnalysisTemplate**
> createAnalysisTemplate(webId: string, template: Models.PIAnalysisTemplate, webIdType?: string, extraHttpRequestParams?: any)

Create an analysis template at the Asset Database root.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database in which to create the analysis template.. | [required]
 **template** | **Models.PIAnalysisTemplate**| The new analysis template definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAttributeCategories**
> getAttributeCategories(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve attribute categories for a given Asset Database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsAttributeCategory>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createAttributeCategory**
> createAttributeCategory(webId: string, attributeCategory: Models.PIAttributeCategory, webIdType?: string, extraHttpRequestParams?: any)

Create an attribute category at the Asset Database root.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database in which to create the attribute category.. | [required]
 **attributeCategory** | **Models.PIAttributeCategory**| The new attribute category definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **findElementAttributes**
> findElementAttributes(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, elementCategory?: string, elementDescriptionFilter?: string, elementNameFilter?: string, elementTemplate?: string, elementType?: string, maxCount?: number, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, webIdType?: string, extraHttpRequestParams?: any)

Retrieves a list of element attributes matching the specified filters from the specified asset database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the asset database to use as the root of the search.. | [required]
 **attributeCategory** | **string**| Specify that returned attributes must have this category. The default is no filter.. | [optional]
 **attributeDescriptionFilter** | **string**| The attribute description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.. | [optional]
 **attributeNameFilter** | **string**| The attribute name filter string used for finding objects. The default is no filter.. | [optional]
 **attributeType** | **string**| Specify that returned attributes' value type must be this value type. The default is no filter.. | [optional]
 **elementCategory** | **string**| Specify that the owner of the returned attributes must have this category. The default is no filter.. | [optional]
 **elementDescriptionFilter** | **string**| The element description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.. | [optional]
 **elementNameFilter** | **string**| The element name filter string used for finding objects. The default is no filter.. | [optional]
 **elementTemplate** | **string**| Specify that the owner of the returned attributes must have this template or a template derived from this template. The default is no filter.. | [optional]
 **elementType** | **string**| Specify that the element of the returned attributes must have this AFElementType. The default is no filter.. | [optional]
 **maxCount** | **number**| The maximum number of objects to be returned (the page size). The default is 1000.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include objects nested further than immediate children of the given resource. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsAttribute>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getElementCategories**
> getElementCategories(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve element categories for a given Asset Database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsElementCategory>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createElementCategory**
> createElementCategory(webId: string, elementCategory: Models.PIElementCategory, webIdType?: string, extraHttpRequestParams?: any)

Create an element category at the Asset Database root.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database in which to create the element category.. | [required]
 **elementCategory** | **Models.PIElementCategory**| The new element category definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getElements**
> getElements(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve elements based on the specified conditions. By default, this method selects immediate children of the specified asset database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database to use as the root of the search.. | [required]
 **categoryName** | **string**| Specify that returned elements must have this category. The default is no category filter.. | [optional]
 **descriptionFilter** | **string**| Specify that returned elements must have this description. The default is no description filter.. | [optional]
 **elementType** | **string**| Specify that returned elements must have this type. The default type is 'Any'.. | [optional]
 **maxCount** | **number**| The maximum number of objects to be returned per call (page size). The default is 1000.. | [optional]
 **nameFilter** | **string**| The name query string used for finding objects. The default is no filter.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include objects nested further than the immediate children of the searchRoot. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]
 **templateName** | **string**| Specify that returned elements must have this template or a template derived from this template. The default is no template filter.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsElement>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createElement**
> createElement(webId: string, element: Models.PIElement, webIdType?: string, extraHttpRequestParams?: any)

Create a child element.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the asset database on which to create the element.. | [required]
 **element** | **Models.PIElement**| The new element definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getElementTemplates**
> getElementTemplates(webId: string, field: Array<string>, maxCount?: number, query?: string, selectedFields?: string, sortField?: string, sortOrder?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve element templates based on the specified criteria. Only templates of instance type "Element" and "EventFrame" are returned. By default, all element and event frame templates in the specified Asset Database are returned.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database to search.. | [required]
 **field** | **Array<string>**| Specifies which of the object's properties are searched. Multiple search fields may be specified with multiple instances of the parameter. The default is 'Name'.. | [required]
 **maxCount** | **number**| The maximum number of objects to be returned per call (page size). The default is 1000.. | [optional]
 **query** | **string**| The query string used for finding objects. The default is no query string.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsElementTemplate>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createElementTemplate**
> createElementTemplate(webId: string, template: Models.PIElementTemplate, webIdType?: string, extraHttpRequestParams?: any)

Create a template at the Asset Database root. Specify InstanceType of "Element" or "EventFrame" to create element or event frame template respectively. Only these two types of templates can be created.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database in which to create the element template.. | [required]
 **template** | **Models.PIElementTemplate**| The new element template definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getEnumerationSets**
> getEnumerationSets(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve enumeration sets for given asset database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsEnumerationSet>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createEnumerationSet**
> createEnumerationSet(webId: string, enumerationSet: Models.PIEnumerationSet, webIdType?: string, extraHttpRequestParams?: any)

Create an enumeration set at the Asset Database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database in which to create the enumeration set.. | [required]
 **enumerationSet** | **Models.PIEnumerationSet**| The new enumeration set definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **findEventFrameAttributes**
> findEventFrameAttributes(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, endTime?: string, eventFrameCategory?: string, eventFrameDescriptionFilter?: string, eventFrameNameFilter?: string, eventFrameTemplate?: string, maxCount?: number, referencedElementNameFilter?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieves a list of event frame attributes matching the specified filters from the specified asset database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the asset database to use as the root of the search.. | [required]
 **attributeCategory** | **string**| Specify that returned attributes must have this category. The default is no filter.. | [optional]
 **attributeDescriptionFilter** | **string**| The attribute description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.. | [optional]
 **attributeNameFilter** | **string**| The attribute name filter string used for finding objects. The default is no filter.. | [optional]
 **attributeType** | **string**| Specify that returned attributes' value type must be this value type. The default is no filter.. | [optional]
 **endTime** | **string**| A string representing the latest ending time for the event frames to be matched. The endTime must be greater than or equal to the startTime. The default is '*'.. | [optional]
 **eventFrameCategory** | **string**| Specify that the owner of the returned attributes must have this category. The default is no filter.. | [optional]
 **eventFrameDescriptionFilter** | **string**| The event frame description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.. | [optional]
 **eventFrameNameFilter** | **string**| The event frame name filter string used for finding objects. The default is no filter.. | [optional]
 **eventFrameTemplate** | **string**| Specify that the owner of the returned attributes must have this template or a template derived from this template. The default is no filter.. | [optional]
 **maxCount** | **number**| The maximum number of objects to be returned (the page size). The default is 1000.. | [optional]
 **referencedElementNameFilter** | **string**| The name query string which must match the name of a referenced element. The default is no filter.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include objects nested further than immediate children of the given resource. The default is 'false'.. | [optional]
 **searchMode** | **string**| Determines how the startTime and endTime parameters are treated when searching for event frames. The default is 'Overlapped'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]
 **startTime** | **string**| A string representing the earliest starting time for the event frames to be matched. startTime must be less than or equal to the endTime. The default is '*-8h'.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsAttribute>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getEventFrames**
> getEventFrames(webId: string, canBeAcknowledged?: boolean, categoryName?: string, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, referencedElementNameFilter?: string, referencedElementTemplateName?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, templateName?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve event frames based on the specified conditions. By default, returns all children of the specified root resource that have been active in the past 8 hours.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the asset database to use as the root of the search.. | [required]
 **canBeAcknowledged** | **boolean**| Specify the returned event frames' canBeAcknowledged property. The default is no canBeAcknowledged filter.. | [optional]
 **categoryName** | **string**| Specify that returned event frames must have this category. The default is no category filter.. | [optional]
 **endTime** | **string**| The ending time for the search. The endTime must be greater than or equal to the startTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*' if searchMode is not one of the 'Backward*' or 'Forward*' values.. | [optional]
 **isAcknowledged** | **boolean**| Specify the returned event frames' isAcknowledged property. The default no isAcknowledged filter.. | [optional]
 **maxCount** | **number**| The maximum number of objects to be returned per call (page size). The default is 1000.. | [optional]
 **nameFilter** | **string**| The name query string used for finding event frames. The default is no filter.. | [optional]
 **referencedElementNameFilter** | **string**| The name query string which must match the name of a referenced element. The default is no filter.. | [optional]
 **referencedElementTemplateName** | **string**| Specify that returned event frames must have an element in the event frame's referenced elements collection that derives from the template. Specify this parameter by name.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies whether the search should include objects nested further than the immediate children of the search root. The default is 'false'.. | [optional]
 **searchMode** | **string**| Determines how the startTime and endTime parameters are treated when searching for event frame objects to be included in the returned collection. If this parameter is one of the 'Backward*' or 'Forward*' values, none of endTime, sortField, or sortOrder may be specified. The default is 'Overlapped'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **severity** | **Array<string>**| Specify that returned event frames must have this severity. Multiple severity values may be specified with multiple instances of the parameter. The default is no severity filter.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name' if searchMode is not one of the 'Backward*' or 'Forward*' values.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending' if searchMode is not one of the 'Backward*' or 'Forward*' values.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]
 **startTime** | **string**| The starting time for the search. startTime must be less than or equal to the endTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*-8h'.. | [optional]
 **templateName** | **string**| Specify that returned event frames must have this template or a template derived from this template. The default is no template filter. Specify this parameter by name.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsEventFrame>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createEventFrame**
> createEventFrame(webId: string, eventFrame: Models.PIEventFrame, webIdType?: string, extraHttpRequestParams?: any)

Create an event frame.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database on which to create the event frame.. | [required]
 **eventFrame** | **Models.PIEventFrame**| The new event frame definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **export**
> export(webId: string, endTime?: string, exportMode?: Array<string>, startTime?: string, extraHttpRequestParams?: any)

Export the asset database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database.. | [required]
 **endTime** | **string**| The latest ending time for AFEventFrame, AFTransfer, and AFCase objects that may be part of the export. The default is '*'.. | [optional]
 **exportMode** | **Array<string>**| Indicates the type of export to perform. The default is 'StrongReferences'. Multiple export modes may be specified by using multiple instances of exportMode.. | [optional]
 **startTime** | **string**| The earliest starting time for AFEventFrame, AFTransfer, and AFCase objects that may be part of the export. The default is '*-30d'.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **importData**
> importData(webId: string, importMode?: Array<string>, extraHttpRequestParams?: any)

Import an asset database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the asset database.. | [required]
 **importMode** | **Array<string>**| Indicates the type of import to perform. The default is 'AllowCreate | AllowUpdate | AutoCheckIn'. Multiple import modes may be specified by using multiple instances of importMode.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getReferencedElements**
> getReferencedElements(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve referenced elements based on the specified conditions. By default, this method selects all referenced elements at the root level of the asset database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the resource to use as the root of the search.. | [required]
 **categoryName** | **string**| Specify that returned elements must have this category. The default is no category filter.. | [optional]
 **descriptionFilter** | **string**| Specify that returned elements must have this description. The default is no description filter.. | [optional]
 **elementType** | **string**| Specify that returned elements must have this type. The default type is 'Any'.. | [optional]
 **maxCount** | **number**| The maximum number of objects to be returned per call (page size). The default is 1000.. | [optional]
 **nameFilter** | **string**| The name query string used for finding objects. The default is no filter.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]
 **templateName** | **string**| Specify that returned elements must have this template or a template derived from this template. The default is no template filter.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsElement>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **addReferencedElement**
> addReferencedElement(webId: string, referencedElementWebId: Array<string>, referenceType?: string, extraHttpRequestParams?: any)

Add a reference to an existing element to the specified database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database which the referenced element will be added to.. | [required]
 **referencedElementWebId** | **Array<string>**| The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.. | [required]
 **referenceType** | **string**| The name of the reference type between the parent and the referenced element. This must be a "strong" reference type. The default is "parent-child".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **removeReferencedElement**
> removeReferencedElement(webId: string, referencedElementWebId: Array<string>, extraHttpRequestParams?: any)

Remove a reference to an existing element from the specified database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database which the referenced element will be removed from.. | [required]
 **referencedElementWebId** | **Array<string>**| The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurity**
> getSecurity(webId: string, securityItem: Array<string>, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Get the security information of the specified security item associated with the asset database for a specified user.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the asset database for the security to be checked.. | [required]
 **securityItem** | **Array<string>**| The security item of the desired security information to be returned. Multiple security items may be specified with multiple instances of the parameter. If the parameter is not specified, only 'Default' security item of the security information will be returned.. | [required]
 **userIdentity** | **Array<string>**| The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.. | [required]
 **forceRefresh** | **boolean**| Indicates if the security cache should be refreshed before getting security information. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsSecurityRights>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntries**
> getSecurityEntries(webId: string, nameFilter?: string, securityItem?: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve the security entries of the specified security item associated with the asset database based on the specified criteria. By default, all security entries for this asset database are returned.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the asset database.. | [required]
 **nameFilter** | **string**| The name query string used for filtering security entries. The default is no filter.. | [optional]
 **securityItem** | **string**| The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the 'Default' security item will be returned.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsSecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createSecurityEntry**
> createSecurityEntry(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, securityItem?: string, webIdType?: string, extraHttpRequestParams?: any)

Create a security entry owned by the asset database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the asset database where the security entry will be created.. | [required]
 **securityEntry** | **Models.PISecurityEntry**| The new security entry definition. The full list of allow and deny rights must be supplied.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]
 **securityItem** | **string**| The security item of the desired security entries to be created. If the parameter is not specified, security entries of the 'Default' security item will be created.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntryByName**
> getSecurityEntryByName(name: string, webId: string, securityItem?: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve the security entry of the specified security item associated with the asset database with the specified name.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.. | [required]
 **webId** | **string**| The ID of the asset database.. | [required]
 **securityItem** | **string**| The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the 'Default' security item will be returned.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PISecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateSecurityEntry**
> updateSecurityEntry(name: string, webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, securityItem?: string, extraHttpRequestParams?: any)

Update a security entry owned by the asset database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry.. | [required]
 **webId** | **string**| The ID of the asset database where the security entry will be updated.. | [required]
 **securityEntry** | **Models.PISecurityEntry**| The new security entry definition. The full list of allow and deny rights must be supplied or they will be removed.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]
 **securityItem** | **string**| The security item of the desired security entries to be updated. If the parameter is not specified, security entries of the 'Default' security item will be updated.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **deleteSecurityEntry**
> deleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean, securityItem?: string, extraHttpRequestParams?: any)

Delete a security entry owned by the asset database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.. | [required]
 **webId** | **string**| The ID of the asset database where the security entry will be deleted.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]
 **securityItem** | **string**| The security item of the desired security entries to be deleted. If the parameter is not specified, security entries of the 'Default' security item will be deleted.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getTableCategories**
> getTableCategories(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve table categories for a given Asset Database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsTableCategory>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createTableCategory**
> createTableCategory(webId: string, tableCategory: Models.PITableCategory, webIdType?: string, extraHttpRequestParams?: any)

Create a table category on the Asset Database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database in which to create the table category.. | [required]
 **tableCategory** | **Models.PITableCategory**| The new table category definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getTables**
> getTables(webId: string, selectedFields?: string, webIdType?: string, extraHttpRequestParams?: any)

Retrieve tables for given Asset Database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<Models.PIItemsTable>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createTable**
> createTable(webId: string, table: Models.PITable, webIdType?: string, extraHttpRequestParams?: any)

Create a table on the Asset Database.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the database in which to create the table.. | [required]
 **table** | **Models.PITable**| The new table definition.. | [required]
 **webIdType** | **string**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item "WebIDType".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
