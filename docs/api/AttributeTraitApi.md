# AttributeTraitApi

Method | HTTP request | Description
------------ | ------------- | -------------
[**getByCategory**](AttributeTraitApi.md#getbycategory) | **GET** /attributetraits | Retrieve all attribute traits of the specified category/categories.
[**get**](AttributeTraitApi.md#get) | **GET** /attributetraits/{name} | Retrieve an attribute trait.


# **getByCategory**
> getByCategory(category: Array<string>, selectedFields?: string, extraHttpRequestParams?: any)

Retrieve all attribute traits of the specified category/categories.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **category** | **Array<string>**| The category of the attribute traits. Multiple categories may be specified with multiple instances of the parameter. If the parameter is not specified, or if its value is "all", then all attribute traits of all categories will be returned.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIItemsAttributeTrait>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)

# **get**
> get(name: string, selectedFields?: string, extraHttpRequestParams?: any)

Retrieve an attribute trait.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| The name or abbreviation of the attribute trait.. | [required]
 **selectedFields** | **string**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned.. | [optional]


### Return type

Observable<Models.PIAttributeTrait>

[[Back to top]](#) [[Back to API list]](../../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to Model list]](../../DOCUMENTATION.md#documentation-for-models) [[Back to DOCUMENTATION]](../../DOCUMENTATION.md)
