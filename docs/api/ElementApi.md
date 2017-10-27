# ElementApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getByPath**](ElementApi.md#getbypath) | **GET** /elements | Retrieve an element by path.
[**get**](ElementApi.md#get) | **GET** /elements/{webId} | Retrieve an element.
[**update**](ElementApi.md#update) | **PATCH** /elements/{webId} | Update an element by replacing items in its definition.
[**delete**](ElementApi.md#delete) | **DELETE** /elements/{webId} | Delete an element.
[**getAnalyses**](ElementApi.md#getanalyses) | **GET** /elements/{webId}/analyses | Retrieve analyses based on the specified conditions.
[**createAnalysis**](ElementApi.md#createanalysis) | **POST** /elements/{webId}/analyses | Create an Analysis.
[**getAttributes**](ElementApi.md#getattributes) | **GET** /elements/{webId}/attributes | Get the attributes of the specified element.
[**createAttribute**](ElementApi.md#createattribute) | **POST** /elements/{webId}/attributes | Create a new attribute of the specified element.
[**getCategories**](ElementApi.md#getcategories) | **GET** /elements/{webId}/categories | Get an element's categories.
[**createConfig**](ElementApi.md#createconfig) | **POST** /elements/{webId}/config | Executes the create configuration function of the data references found within the attributes of the element, and optionally, its children.
[**findElementAttributes**](ElementApi.md#findelementattributes) | **GET** /elements/{webId}/elementattributes | Retrieves a list of element attributes matching the specified filters from the specified element.
[**getElements**](ElementApi.md#getelements) | **GET** /elements/{webId}/elements | Retrieve elements based on the specified conditions. By default, this method selects immediate children of the specified element.
[**createElement**](ElementApi.md#createelement) | **POST** /elements/{webId}/elements | Create a child element.
[**getEventFrames**](ElementApi.md#geteventframes) | **GET** /elements/{webId}/eventframes | Retrieve event frames that reference this element based on the specified conditions. By default, returns all event frames that reference this element with a start time in the past 8 hours.
[**getReferencedElements**](ElementApi.md#getreferencedelements) | **GET** /elements/{webId}/referencedelements | Retrieve referenced elements based on the specified conditions. By default, this method selects all referenced elements of the current resource.
[**addReferencedElement**](ElementApi.md#addreferencedelement) | **POST** /elements/{webId}/referencedelements | Add a reference to an existing element to the child elements collection.
[**removeReferencedElement**](ElementApi.md#removereferencedelement) | **DELETE** /elements/{webId}/referencedelements | Remove a reference to an existing element from the child elements collection.
[**getSecurity**](ElementApi.md#getsecurity) | **GET** /elements/{webId}/security | Get the security information of the specified security item associated with the element for a specified user.
[**getSecurityEntries**](ElementApi.md#getsecurityentries) | **GET** /elements/{webId}/securityentries | Retrieve the security entries associated with the element based on the specified criteria. By default, all security entries for this element are returned.
[**createSecurityEntry**](ElementApi.md#createsecurityentry) | **POST** /elements/{webId}/securityentries | Create a security entry owned by the element.
[**getSecurityEntryByName**](ElementApi.md#getsecurityentrybyname) | **GET** /elements/{webId}/securityentries/{name} | Retrieve the security entry associated with the element with the specified name.
[**updateSecurityEntry**](ElementApi.md#updatesecurityentry) | **PUT** /elements/{webId}/securityentries/{name} | Update a security entry owned by the element.
[**deleteSecurityEntry**](ElementApi.md#deletesecurityentry) | **DELETE** /elements/{webId}/securityentries/{name} | Delete a security entry owned by the element.
[**getMultiple**](ElementApi.md#getmultiple) | **GET** /elements/multiple | Retrieve multiple elements by web id or path.
[**createSearchByAttribute**](ElementApi.md#createsearchbyattribute) | **POST** /elements/searchbyattribute | Create a link for a "Search Elements By Attribute Value" operation, whose queries are specified in the request content. The SearchRoot is specified by the Web Id of the root Element. If the SearchRoot is not specified, then the search starts at the Asset Database. ElementTemplate must be provided as the Web ID of the ElementTemplate, which are used to create the Elements. All the attributes in the queries must be defined as AttributeTemplates on the ElementTemplate. An array of attribute value queries are ANDed together to find the desired Element objects. At least one value query must be specified. There are limitations on SearchOperators.
[**executeSearchByAttribute**](ElementApi.md#executesearchbyattribute) | **GET** /elements/searchbyattribute/{searchId} | Execute a "Search Elements By Attribute Value" operation.


# **getByPath**
> getByPath(path: string, selectedFields?: string, extraHttpRequestParams?: any)

Retrieve an element by path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| The path to the element.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIElement>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(webId: string, selectedFields?: string, extraHttpRequestParams?: any)

Retrieve an element.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIElement>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **update**
> update(webId: string, element: Models.PIElement, extraHttpRequestParams?: any)

Update an element by replacing items in its definition.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element.. | [required]
 **element** | **Models.PIElement**| A partial element containing the desired changes.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **delete**
> delete(webId: string, extraHttpRequestParams?: any)

Delete an element.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAnalyses**
> getAnalyses(webId: string, maxCount?: number, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, extraHttpRequestParams?: any)

Retrieve analyses based on the specified conditions.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element, which is the Target of the analyses.. | [required]
 **maxCount** | **number**| The maximum number of objects to be returned per call (page size). The default is 1000.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]


### Return type

Observable<Models.PIItemsAnalysis>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createAnalysis**
> createAnalysis(webId: string, analysis: Models.PIAnalysis, extraHttpRequestParams?: any)

Create an Analysis.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element on which to create the Analysis.. | [required]
 **analysis** | **Models.PIAnalysis**| The new Analysis definition.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAttributes**
> getAttributes(webId: string, categoryName?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, valueType?: string, extraHttpRequestParams?: any)

Get the attributes of the specified element.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element.. | [required]
 **categoryName** | **string**| Specify that returned attributes must have this category. The default is no category filter.. | [optional]
 **maxCount** | **number**| The maximum number of objects to be returned per call (page size). The default is 1000.. | [optional]
 **nameFilter** | **string**| The name query string used for finding attributes. The default is no filter.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **showExcluded** | **boolean**| Specified if the search should include attributes with the Excluded property set. The default is 'false'.. | [optional]
 **showHidden** | **boolean**| Specified if the search should include attributes with the Hidden property set. The default is 'false'.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]
 **templateName** | **string**| Specify that returned attributes must be members of this template. The default is no template filter.. | [optional]
 **valueType** | **string**| Specify that returned attributes' value type must be the given value type. The default is no value type filter.. | [optional]


### Return type

Observable<Models.PIItemsAttribute>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createAttribute**
> createAttribute(webId: string, attribute: Models.PIAttribute, extraHttpRequestParams?: any)

Create a new attribute of the specified element.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element on which to create the attribute.. | [required]
 **attribute** | **Models.PIAttribute**| The definition of the new attribute.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getCategories**
> getCategories(webId: string, selectedFields?: string, extraHttpRequestParams?: any)

Get an element's categories.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIItemsElementCategory>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createConfig**
> createConfig(webId: string, includeChildElements?: boolean, extraHttpRequestParams?: any)

Executes the create configuration function of the data references found within the attributes of the element, and optionally, its children.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element.. | [required]
 **includeChildElements** | **boolean**| If true, includes the child elements of the specified element.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **findElementAttributes**
> findElementAttributes(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, elementCategory?: string, elementDescriptionFilter?: string, elementNameFilter?: string, elementTemplate?: string, elementType?: string, maxCount?: number, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, extraHttpRequestParams?: any)

Retrieves a list of element attributes matching the specified filters from the specified element.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element to use as the root of the search.. | [required]
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


### Return type

Observable<Models.PIItemsAttribute>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getElements**
> getElements(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, extraHttpRequestParams?: any)

Retrieve elements based on the specified conditions. By default, this method selects immediate children of the specified element.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element to use as the root of the search.. | [required]
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


### Return type

Observable<Models.PIItemsElement>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createElement**
> createElement(webId: string, element: Models.PIElement, extraHttpRequestParams?: any)

Create a child element.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the parent element on which to create the element.. | [required]
 **element** | **Models.PIElement**| The new element definition.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getEventFrames**
> getEventFrames(webId: string, canBeAcknowledged?: boolean, categoryName?: string, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, templateName?: string, extraHttpRequestParams?: any)

Retrieve event frames that reference this element based on the specified conditions. By default, returns all event frames that reference this element with a start time in the past 8 hours.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element whose related event frames are sought.. | [required]
 **canBeAcknowledged** | **boolean**| Specify the returned event frames' canBeAcknowledged property. The default is no canBeAcknowledged filter.. | [optional]
 **categoryName** | **string**| Specify that returned event frames must have this category. The default is no category filter.. | [optional]
 **endTime** | **string**| The ending time for the search. The endTime must be greater than or equal to the startTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*' if searchMode is not one of the 'Backward*' or 'Forward*' values.. | [optional]
 **isAcknowledged** | **boolean**| Specify the returned event frames' isAcknowledged property. The default no isAcknowledged filter.. | [optional]
 **maxCount** | **number**| The maximum number of objects to be returned per call (page size). The default is 1000.. | [optional]
 **nameFilter** | **string**| The name query string used for finding event frames. The default is no filter.. | [optional]
 **searchMode** | **string**| Determines how the startTime and endTime parameters are treated when searching for event frame objects to be included in the returned collection. If this parameter is one of the 'Backward*' or 'Forward*' values, none of endTime, sortField, or sortOrder may be specified. The default is 'Overlapped'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **severity** | **Array<string>**| Specify that returned event frames must have this severity. Multiple severity values may be specified with multiple instances of the parameter. The default is no severity filter.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name' if searchMode is not one of the 'Backward*' or 'Forward*' values.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending' if searchMode is not one of the 'Backward*' or 'Forward*' values.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]
 **startTime** | **string**| The starting time for the search. startTime must be less than or equal to the endTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*-8h'.. | [optional]
 **templateName** | **string**| Specify that returned event frames must have this template or a template derived from this template. The default is no template filter. Specify this parameter by name.. | [optional]


### Return type

Observable<Models.PIItemsEventFrame>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getReferencedElements**
> getReferencedElements(webId: string, categoryName?: string, descriptionFilter?: string, elementType?: string, maxCount?: number, nameFilter?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, extraHttpRequestParams?: any)

Retrieve referenced elements based on the specified conditions. By default, this method selects all referenced elements of the current resource.

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


### Return type

Observable<Models.PIItemsElement>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **addReferencedElement**
> addReferencedElement(webId: string, referencedElementWebId: Array<string>, referenceType?: string, extraHttpRequestParams?: any)

Add a reference to an existing element to the child elements collection.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element which the referenced element will be added to.. | [required]
 **referencedElementWebId** | **Array<string>**| The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.. | [required]
 **referenceType** | **string**| The name of the reference type between the parent and the referenced element. The default is "parent-child".. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **removeReferencedElement**
> removeReferencedElement(webId: string, referencedElementWebId: Array<string>, extraHttpRequestParams?: any)

Remove a reference to an existing element from the child elements collection.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element which the referenced element will be removed from.. | [required]
 **referencedElementWebId** | **Array<string>**| The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurity**
> getSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, extraHttpRequestParams?: any)

Get the security information of the specified security item associated with the element for a specified user.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element for the security to be checked.. | [required]
 **userIdentity** | **Array<string>**| The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.. | [required]
 **forceRefresh** | **boolean**| Indicates if the security cache should be refreshed before getting security information. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIItemsSecurityRights>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntries**
> getSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string, extraHttpRequestParams?: any)

Retrieve the security entries associated with the element based on the specified criteria. By default, all security entries for this element are returned.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element.. | [required]
 **nameFilter** | **string**| The name query string used for filtering security entries. The default is no filter.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIItemsSecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createSecurityEntry**
> createSecurityEntry(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, extraHttpRequestParams?: any)

Create a security entry owned by the element.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the element where the security entry will be created.. | [required]
 **securityEntry** | **Models.PISecurityEntry**| The new security entry definition. The full list of allow and deny rights must be supplied.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntryByName**
> getSecurityEntryByName(name: string, webId: string, selectedFields?: string, extraHttpRequestParams?: any)

Retrieve the security entry associated with the element with the specified name.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.. | [required]
 **webId** | **string**| The ID of the element.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PISecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateSecurityEntry**
> updateSecurityEntry(name: string, webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, extraHttpRequestParams?: any)

Update a security entry owned by the element.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry.. | [required]
 **webId** | **string**| The ID of the element where the security entry will be updated.. | [required]
 **securityEntry** | **Models.PISecurityEntry**| The new security entry definition. The full list of allow and deny rights must be supplied or they will be removed.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **deleteSecurityEntry**
> deleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean, extraHttpRequestParams?: any)

Delete a security entry owned by the element.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.. | [required]
 **webId** | **string**| The ID of the element where the security entry will be deleted.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getMultiple**
> getMultiple(asParallel?: boolean, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>, extraHttpRequestParams?: any)

Retrieve multiple elements by web id or path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **asParallel** | **boolean**| Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested attributes. The default is 'false'.. | [optional]
 **includeMode** | **string**| The include mode for the return list. The default is 'All'.. | [optional]
 **path** | **Array<string>**| The path of an element. Multiple elements may be specified with multiple instances of the parameter.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webId** | **Array<string>**| The ID of an element. Multiple elements may be specified with multiple instances of the parameter.. | [optional]


### Return type

Observable<Models.PIItemsItemElement>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createSearchByAttribute**
> createSearchByAttribute(search: Models.PISearchByAttributeElement, extraHttpRequestParams?: any)

Create a link for a "Search Elements By Attribute Value" operation, whose queries are specified in the request content. The SearchRoot is specified by the Web Id of the root Element. If the SearchRoot is not specified, then the search starts at the Asset Database. ElementTemplate must be provided as the Web ID of the ElementTemplate, which are used to create the Elements. All the attributes in the queries must be defined as AttributeTemplates on the ElementTemplate. An array of attribute value queries are ANDed together to find the desired Element objects. At least one value query must be specified. There are limitations on SearchOperators.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **search** | **Models.PISearchByAttributeElement**| . | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **executeSearchByAttribute**
> executeSearchByAttribute(searchId: string, categoryName?: string, descriptionFilter?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, extraHttpRequestParams?: any)

Execute a "Search Elements By Attribute Value" operation.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **searchId** | **string**| The encoded search Id of the "Search Elements By Attribute Value" operation.. | [required]
 **categoryName** | **string**| Specify that the owner of the returned attributes must have this category. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.. | [optional]
 **descriptionFilter** | **string**| The element description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter.. | [optional]
 **maxCount** | **number**| The maximum number of objects to be returned. The default is 1000.. | [optional]
 **nameFilter** | **string**| The name query string used for finding objects. The default is no filter.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies if the search should include objects nested further than the immediate children of the searchRoot. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
