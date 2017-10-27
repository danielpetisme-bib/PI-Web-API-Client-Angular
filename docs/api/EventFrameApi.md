# EventFrameApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getByPath**](EventFrameApi.md#getbypath) | **GET** /eventframes | Retrieve an event frame by path.
[**get**](EventFrameApi.md#get) | **GET** /eventframes/{webId} | Retrieve an event frame.
[**update**](EventFrameApi.md#update) | **PATCH** /eventframes/{webId} | Update an event frame by replacing items in its definition.
[**delete**](EventFrameApi.md#delete) | **DELETE** /eventframes/{webId} | Delete an event frame.
[**acknowledge**](EventFrameApi.md#acknowledge) | **PATCH** /eventframes/{webId}/acknowledge | Calls the EventFrame's Acknowledge method.
[**getAnnotations**](EventFrameApi.md#getannotations) | **GET** /eventframes/{webId}/annotations | Get an event frame's annotations.
[**createAnnotation**](EventFrameApi.md#createannotation) | **POST** /eventframes/{webId}/annotations | Create an annotation on an event frame.
[**getAnnotationById**](EventFrameApi.md#getannotationbyid) | **GET** /eventframes/{webId}/annotations/{id} | Get a specific annotation on an event frame.
[**updateAnnotation**](EventFrameApi.md#updateannotation) | **PATCH** /eventframes/{webId}/annotations/{id} | Update an annotation on an event frame by replacing items in its definition.
[**deleteAnnotation**](EventFrameApi.md#deleteannotation) | **DELETE** /eventframes/{webId}/annotations/{id} | Delete an annotation on an event frame.
[**getAttributes**](EventFrameApi.md#getattributes) | **GET** /eventframes/{webId}/attributes | Get the attributes of the specified event frame.
[**createAttribute**](EventFrameApi.md#createattribute) | **POST** /eventframes/{webId}/attributes | Create a new attribute of the specified event frame.
[**captureValues**](EventFrameApi.md#capturevalues) | **POST** /eventframes/{webId}/attributes/capture | Calls the EventFrame's CaptureValues method.
[**getCategories**](EventFrameApi.md#getcategories) | **GET** /eventframes/{webId}/categories | Get an event frame's categories.
[**createConfig**](EventFrameApi.md#createconfig) | **POST** /eventframes/{webId}/config | Executes the create configuration function of the data references found within the attributes of the event frame, and optionally, its children.
[**findEventFrameAttributes**](EventFrameApi.md#findeventframeattributes) | **GET** /eventframes/{webId}/eventframeattributes | Retrieves a list of event frame attributes matching the specified filters from the specified event frame.
[**getEventFrames**](EventFrameApi.md#geteventframes) | **GET** /eventframes/{webId}/eventframes | Retrieve event frames based on the specified conditions. By default, returns all children of the specified root event frame with a start time in the past 8 hours.
[**createEventFrame**](EventFrameApi.md#createeventframe) | **POST** /eventframes/{webId}/eventframes | Create an event frame as a child of the specified event frame.
[**getReferencedElements**](EventFrameApi.md#getreferencedelements) | **GET** /eventframes/{webId}/referencedelements | Retrieve the event frame's referenced elements.
[**getSecurity**](EventFrameApi.md#getsecurity) | **GET** /eventframes/{webId}/security | Get the security information of the specified security item associated with the event frame for a specified user.
[**getSecurityEntries**](EventFrameApi.md#getsecurityentries) | **GET** /eventframes/{webId}/securityentries | Retrieve the security entries associated with the event frame based on the specified criteria. By default, all security entries for this event frame are returned.
[**createSecurityEntry**](EventFrameApi.md#createsecurityentry) | **POST** /eventframes/{webId}/securityentries | Create a security entry owned by the event frame.
[**getSecurityEntryByName**](EventFrameApi.md#getsecurityentrybyname) | **GET** /eventframes/{webId}/securityentries/{name} | Retrieve the security entry associated with the event frame with the specified name.
[**updateSecurityEntry**](EventFrameApi.md#updatesecurityentry) | **PUT** /eventframes/{webId}/securityentries/{name} | Update a security entry owned by the event frame.
[**deleteSecurityEntry**](EventFrameApi.md#deletesecurityentry) | **DELETE** /eventframes/{webId}/securityentries/{name} | Delete a security entry owned by the event frame.
[**getMultiple**](EventFrameApi.md#getmultiple) | **GET** /eventframes/multiple | Retrieve multiple event frames by web ids or paths.
[**createSearchByAttribute**](EventFrameApi.md#createsearchbyattribute) | **POST** /eventframes/searchbyattribute | Create a link for a "Search EventFrames By Attribute Value" operation, whose queries are specified in the request content. The SearchRoot is specified by the Web Id of the root EventFrame. If the SearchRoot is not specified, then the search starts at the Asset Database. ElementTemplate must be provided as the Web ID of the ElementTemplate, which are used to create the EventFrames. All the attributes in the queries must be defined as AttributeTemplates on the ElementTemplate. An array of attribute value queries are ANDed together to find the desired Element objects. At least one value query must be specified. There are limitations on SearchOperators.
[**executeSearchByAttribute**](EventFrameApi.md#executesearchbyattribute) | **GET** /eventframes/searchbyattribute/{searchId} | Execute a "Search EventFrames By Attribute Value" operation.


# **getByPath**
> getByPath(path: string, selectedFields?: string, extraHttpRequestParams?: any)

Retrieve an event frame by path.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **path** | **string**| The path to the event frame.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIEventFrame>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(webId: string, selectedFields?: string, extraHttpRequestParams?: any)

Retrieve an event frame.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIEventFrame>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **update**
> update(webId: string, eventFrame: Models.PIEventFrame, extraHttpRequestParams?: any)

Update an event frame by replacing items in its definition.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame to update.. | [required]
 **eventFrame** | **Models.PIEventFrame**| A partial event frame containing the desired changes.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **delete**
> delete(webId: string, extraHttpRequestParams?: any)

Delete an event frame.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame to delete.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **acknowledge**
> acknowledge(webId: string, extraHttpRequestParams?: any)

Calls the EventFrame's Acknowledge method.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAnnotations**
> getAnnotations(webId: string, selectedFields?: string, extraHttpRequestParams?: any)

Get an event frame's annotations.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the owner event frame.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIItemsAnnotation>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createAnnotation**
> createAnnotation(webId: string, annotation: Models.PIAnnotation, extraHttpRequestParams?: any)

Create an annotation on an event frame.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the owner event frame on which to create the annotation.. | [required]
 **annotation** | **Models.PIAnnotation**| The new annotation definition.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAnnotationById**
> getAnnotationById(id: string, webId: string, selectedFields?: string, extraHttpRequestParams?: any)

Get a specific annotation on an event frame.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The Annotation identifier of the specific annotation.. | [required]
 **webId** | **string**| The ID of the owner event frame.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIAnnotation>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateAnnotation**
> updateAnnotation(id: string, webId: string, annotation: Models.PIAnnotation, extraHttpRequestParams?: any)

Update an annotation on an event frame by replacing items in its definition.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The Annotation identifier of the annotation to be updated.. | [required]
 **webId** | **string**| The ID of the owner event frame of the annotation to update.. | [required]
 **annotation** | **Models.PIAnnotation**| A partial annotation containing the desired changes.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **deleteAnnotation**
> deleteAnnotation(id: string, webId: string, extraHttpRequestParams?: any)

Delete an annotation on an event frame.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| The Annotation identifier of the annotation to be deleted.. | [required]
 **webId** | **string**| The ID of the owner event frame of the annotation to delete.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getAttributes**
> getAttributes(webId: string, categoryName?: string, maxCount?: number, nameFilter?: string, searchFullHierarchy?: boolean, selectedFields?: string, showExcluded?: boolean, showHidden?: boolean, sortField?: string, sortOrder?: string, startIndex?: number, templateName?: string, valueType?: string, extraHttpRequestParams?: any)

Get the attributes of the specified event frame.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame.. | [required]
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

Create a new attribute of the specified event frame.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame on which to create the attribute.. | [required]
 **attribute** | **Models.PIAttribute**| The definition of the new attribute.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **captureValues**
> captureValues(webId: string, extraHttpRequestParams?: any)

Calls the EventFrame's CaptureValues method.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getCategories**
> getCategories(webId: string, selectedFields?: string, extraHttpRequestParams?: any)

Get an event frame's categories.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIItemsElementCategory>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createConfig**
> createConfig(webId: string, includeChildElements?: boolean, extraHttpRequestParams?: any)

Executes the create configuration function of the data references found within the attributes of the event frame, and optionally, its children.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame.. | [required]
 **includeChildElements** | **boolean**| If true, includes the child event frames of the specified event frame.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **findEventFrameAttributes**
> findEventFrameAttributes(webId: string, attributeCategory?: string, attributeDescriptionFilter?: string, attributeNameFilter?: string, attributeType?: string, endTime?: string, eventFrameCategory?: string, eventFrameDescriptionFilter?: string, eventFrameNameFilter?: string, eventFrameTemplate?: string, maxCount?: number, referencedElementNameFilter?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, extraHttpRequestParams?: any)

Retrieves a list of event frame attributes matching the specified filters from the specified event frame.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame to use as the root of the search.. | [required]
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
 **searchMode** | **string**| Determines how the startTime and endTime parameters are treated when searching for event frames.     The default is 'Overlapped'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]
 **startTime** | **string**| A string representing the earliest starting time for the event frames to be matched. startTime must be less than or equal to the endTime. The default is '*-8h'.. | [optional]


### Return type

Observable<Models.PIItemsAttribute>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getEventFrames**
> getEventFrames(webId: string, canBeAcknowledged?: boolean, categoryName?: string, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, referencedElementNameFilter?: string, referencedElementTemplateName?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, templateName?: string, extraHttpRequestParams?: any)

Retrieve event frames based on the specified conditions. By default, returns all children of the specified root event frame with a start time in the past 8 hours.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame to use as the root of the search.. | [required]
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


### Return type

Observable<Models.PIItemsEventFrame>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createEventFrame**
> createEventFrame(webId: string, eventFrame: Models.PIEventFrame, extraHttpRequestParams?: any)

Create an event frame as a child of the specified event frame.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the parent event frame on which to create the event frame.. | [required]
 **eventFrame** | **Models.PIEventFrame**| The new event frame definition.. | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getReferencedElements**
> getReferencedElements(webId: string, selectedFields?: string, extraHttpRequestParams?: any)

Retrieve the event frame's referenced elements.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame whose referenced elements should be retrieved.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIItemsElement>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurity**
> getSecurity(webId: string, userIdentity: Array<string>, forceRefresh?: boolean, selectedFields?: string, extraHttpRequestParams?: any)

Get the security information of the specified security item associated with the event frame for a specified user.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame for the security to be checked.. | [required]
 **userIdentity** | **Array<string>**| The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.. | [required]
 **forceRefresh** | **boolean**| Indicates if the security cache should be refreshed before getting security information. The default is 'false'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIItemsSecurityRights>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntries**
> getSecurityEntries(webId: string, nameFilter?: string, selectedFields?: string, extraHttpRequestParams?: any)

Retrieve the security entries associated with the event frame based on the specified criteria. By default, all security entries for this event frame are returned.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame.. | [required]
 **nameFilter** | **string**| The name query string used for filtering security entries. The default is no filter.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIItemsSecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createSecurityEntry**
> createSecurityEntry(webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, extraHttpRequestParams?: any)

Create a security entry owned by the event frame.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **webId** | **string**| The ID of the event frame where the security entry will be created.. | [required]
 **securityEntry** | **Models.PISecurityEntry**| The new security entry definition. The full list of allow and deny rights must be supplied.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getSecurityEntryByName**
> getSecurityEntryByName(name: string, webId: string, selectedFields?: string, extraHttpRequestParams?: any)

Retrieve the security entry associated with the event frame with the specified name.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.. | [required]
 **webId** | **string**| The ID of the event frame.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PISecurityEntry>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **updateSecurityEntry**
> updateSecurityEntry(name: string, webId: string, securityEntry: Models.PISecurityEntry, applyToChildren?: boolean, extraHttpRequestParams?: any)

Update a security entry owned by the event frame.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry.. | [required]
 **webId** | **string**| The ID of the event frame where the security entry will be updated.. | [required]
 **securityEntry** | **Models.PISecurityEntry**| The new security entry definition. The full list of allow and deny rights must be supplied or they will be removed.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **deleteSecurityEntry**
> deleteSecurityEntry(name: string, webId: string, applyToChildren?: boolean, extraHttpRequestParams?: any)

Delete a security entry owned by the event frame.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name of the security entry. For every backslash character (\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\username.. | [required]
 **webId** | **string**| The ID of the event frame where the security entry will be deleted.. | [required]
 **applyToChildren** | **boolean**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **getMultiple**
> getMultiple(asParallel?: boolean, includeMode?: string, path?: Array<string>, selectedFields?: string, webId?: Array<string>, extraHttpRequestParams?: any)

Retrieve multiple event frames by web ids or paths.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **asParallel** | **boolean**| Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested attributes. The default is 'false'.. | [optional]
 **includeMode** | **string**| The include mode for the return list. The default is 'All'.. | [optional]
 **path** | **Array<string>**| The path of an event frame. Multiple event frames may be specified with multiple instances of the parameter.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **webId** | **Array<string>**| The ID of an event frame. Multiple event frames may be specified with multiple instances of the parameter.. | [optional]


### Return type

Observable<Models.PIItemsItemEventFrame>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **createSearchByAttribute**
> createSearchByAttribute(search: Models.PISearchByAttributeEventFrame, extraHttpRequestParams?: any)

Create a link for a "Search EventFrames By Attribute Value" operation, whose queries are specified in the request content. The SearchRoot is specified by the Web Id of the root EventFrame. If the SearchRoot is not specified, then the search starts at the Asset Database. ElementTemplate must be provided as the Web ID of the ElementTemplate, which are used to create the EventFrames. All the attributes in the queries must be defined as AttributeTemplates on the ElementTemplate. An array of attribute value queries are ANDed together to find the desired Element objects. At least one value query must be specified. There are limitations on SearchOperators.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **search** | **Models.PISearchByAttributeEventFrame**| . | [required]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **executeSearchByAttribute**
> executeSearchByAttribute(searchId: string, canBeAcknowledged?: boolean, endTime?: string, isAcknowledged?: boolean, maxCount?: number, nameFilter?: string, referencedElementNameFilter?: string, searchFullHierarchy?: boolean, searchMode?: string, selectedFields?: string, severity?: Array<string>, sortField?: string, sortOrder?: string, startIndex?: number, startTime?: string, extraHttpRequestParams?: any)

Execute a "Search EventFrames By Attribute Value" operation.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **searchId** | **string**| The encoded search Id of the "Search EventFrames By Attribute Value" operation.. | [required]
 **canBeAcknowledged** | **boolean**| Specify the returned event frames' canBeAcknowledged property. The default is no canBeAcknowledged filter.. | [optional]
 **endTime** | **string**| The ending time for the search. endTime must be greater than or equal to the startTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*'.. | [optional]
 **isAcknowledged** | **boolean**| Specify the returned event frames' isAcknowledged property. The default no isAcknowledged filter.. | [optional]
 **maxCount** | **number**| The maximum number of objects to be returned per call (page size). The default is 1000.. | [optional]
 **nameFilter** | **string**| The name query string used for finding event frames. The default is no filter.. | [optional]
 **referencedElementNameFilter** | **string**| The name query string which must match the name of a referenced element. The default is no filter.. | [optional]
 **searchFullHierarchy** | **boolean**| Specifies whether the search should include objects nested further than the immediate children of the search root. The default is 'false'.. | [optional]
 **searchMode** | **string**| Determines how the startTime and endTime parameters are treated when searching for event frame objects to be included in the returned collection. The default is 'Overlapped'.. | [optional]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]
 **severity** | **Array<string>**| Specify that returned event frames must have this severity. Multiple severity values may be specified with multiple instances of the parameter. The default is no severity filter.. | [optional]
 **sortField** | **string**| The field or property of the object used to sort the returned collection. The default is 'Name'.. | [optional]
 **sortOrder** | **string**| The order that the returned collection is sorted. The default is 'Ascending'.. | [optional]
 **startIndex** | **number**| The starting index (zero based) of the items to be returned. The default is 0.. | [optional]
 **startTime** | **string**| The starting time for the search. startTime must be less than or equal to the endTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*-8h'.. | [optional]


### Return type

Observable<{}> 

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
