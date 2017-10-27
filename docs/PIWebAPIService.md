# PIWebAPIService

## **configureInstance**
> configureInstance(basePath: string, useKerberos: boolean, username?: string, password?: string)

Creates an instance of the PI Web API client top level object. The parameter useKerberos = true for Kerberos authentication. For Basic Authentication, useKerberos = false with the username and password.

### Parameters

Name | Type | Description | Notes
------------- | ------------- | ------------- | -------------
**baseUrl** | **string**| PI Web API base service url. | [required]
**useKerberos** | **boolean**| Select true for Kerberos auth or false for Basic auth. | [required]
**username** | **string**| The username for basic authentication to authenticate against PI Web API. 
**password** | **string**| The password for basic authentication to authenticate against PI Web API. 

## **Properties**

Property | Controller
------------ | -------------
**home** | [**HomeApi**](/docs/api/HomeApi.md)
**analysis** | [**AnalysisApi**](/docs/api/AnalysisApi.md)
**analysisCategory** | [**AnalysisCategoryApi**](/docs/api/AnalysisCategoryApi.md)
**analysisRulePlugIn** | [**AnalysisRulePlugInApi**](/docs/api/AnalysisRulePlugInApi.md)
**analysisRule** | [**AnalysisRuleApi**](/docs/api/AnalysisRuleApi.md)
**analysisTemplate** | [**AnalysisTemplateApi**](/docs/api/AnalysisTemplateApi.md)
**assetDatabase** | [**AssetDatabaseApi**](/docs/api/AssetDatabaseApi.md)
**assetServer** | [**AssetServerApi**](/docs/api/AssetServerApi.md)
**attributeCategory** | [**AttributeCategoryApi**](/docs/api/AttributeCategoryApi.md)
**attribute** | [**AttributeApi**](/docs/api/AttributeApi.md)
**attributeTemplate** | [**AttributeTemplateApi**](/docs/api/AttributeTemplateApi.md)
**attributeTrait** | [**AttributeTraitApi**](/docs/api/AttributeTraitApi.md)
**batch** | [**BatchApi**](/docs/api/BatchApi.md)
**calculation** | [**CalculationApi**](/docs/api/CalculationApi.md)
**channel** | [**ChannelApi**](/docs/api/ChannelApi.md)
**dataServer** | [**DataServerApi**](/docs/api/DataServerApi.md)
**elementCategory** | [**ElementCategoryApi**](/docs/api/ElementCategoryApi.md)
**element** | [**ElementApi**](/docs/api/ElementApi.md)
**elementTemplate** | [**ElementTemplateApi**](/docs/api/ElementTemplateApi.md)
**enumerationSet** | [**EnumerationSetApi**](/docs/api/EnumerationSetApi.md)
**enumerationValue** | [**EnumerationValueApi**](/docs/api/EnumerationValueApi.md)
**eventFrame** | [**EventFrameApi**](/docs/api/EventFrameApi.md)
**point** | [**PointApi**](/docs/api/PointApi.md)
**securityIdentity** | [**SecurityIdentityApi**](/docs/api/SecurityIdentityApi.md)
**securityMapping** | [**SecurityMappingApi**](/docs/api/SecurityMappingApi.md)
**stream** | [**StreamApi**](/docs/api/StreamApi.md)
**streamSet** | [**StreamSetApi**](/docs/api/StreamSetApi.md)
**system** | [**SystemApi**](/docs/api/SystemApi.md)
**configuration** | [**ConfigurationApi**](/docs/api/ConfigurationApi.md)
**tableCategory** | [**TableCategoryApi**](/docs/api/TableCategoryApi.md)
**table** | [**TableApi**](/docs/api/TableApi.md)
**timeRulePlugIn** | [**TimeRulePlugInApi**](/docs/api/TimeRulePlugInApi.md)
**timeRule** | [**TimeRuleApi**](/docs/api/TimeRuleApi.md)
**unitClass** | [**UnitClassApi**](/docs/api/UnitClassApi.md)
**unit** | [**UnitApi**](/docs/api/UnitApi.md)

[[Back to Model list]](../DOCUMENTATION.md#documentation-for-models) [[Back to API list]](../DOCUMENTATION.md#documentation-for-api-endpoints) [[Back to DOCUMENTATION]](../DOCUMENTATION.md)
