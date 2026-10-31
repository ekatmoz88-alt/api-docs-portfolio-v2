# Route Planning Service — API Reference

## 1. Purpose and Scope

This document describes the logical resources and operation capabilities identified in the available Route Planning Service source materials.

The reference consolidates information from:

- A JSON resource specification
- A CRUD and property-access matrix
- A functional description of routing behavior

The source artifacts contain inconsistencies. Where definitions differ, both variants are recorded and flagged for clarification.

**Important:** This document is an anonymized technical documentation sample, not a complete or authoritative production API contract.

## 2. Resource Overview

The source materials identify seven logical resources.

| Resource | Purpose | Operations and capabilities |
|---|---|---|
| `routes` | Represents calculated routes and route state | Create, read, update, delete, subscribe to element and resource changes |
| `intermediateLocations` | Represents stopovers, via-points, and interchange locations | Create, read, delete, subscribe to resource changes |
| `routeSections` | Represents individual sections of a route | Read element, subscribe to element changes |
| `routeIncidents` | Associates traffic incidents with a route | Read element, subscribe to element changes |
| `travelInformation` | Provides distance, travel time, toll, and related route information | Create, read, delete, subscribe to element and resource changes |
| `segments` | Represents route geometry and road composition segments | Read element, subscribe to element changes |
| `roadCompositions` | Describes road characteristics within a segment | Read element, subscribe to element changes |

The operation capabilities above follow the CRUD/property-access matrix. Some differences between this matrix and the JSON specification are documented in Section 11.

## 3. Routes

The `routes` resource represents a route and its calculation state.

### 3.1 Properties

| Property | Type | Description |
|---|---|---|
| `id` | UUID | Resource identifier |
| `name` | string | Resource name |
| `uri` | string | Resource URI |
| `alternativeRoutes` | array of route references | Alternative routes associated with a recommended route |
| `calculationProgress` | integer (0–100) | Route calculation progress |
| `destinationLocation` | Places location reference | Destination location |
| `geometry` | Map renderer geometry reference | Route geometry; present in the JSON specification only |
| `incidentsToAvoid` | array of URI references | Traffic incidents to avoid during route calculation |
| `intermediateLocations` | array of intermediate-location references | Stopovers and other intermediate locations |
| `isRecommended` | boolean | Indicates whether the route is recommended |
| `lastEnergyBasedRecalculationTimeStamp` | date-time | Timestamp of the last energy-based recalculation; present in the JSON specification only |
| `maximumNumberOfAlternativeRoutes` | integer | Maximum number of alternative routes |
| `routeIncidents` | array of route-incident references | Incidents associated with the route |
| `sections` | array of route-section references | Route sections |
| `segments` | array of segment references | Route segments; present in the property-access matrix only |
| `startLocation` | Places location reference | Route start location; if undefined, the current vehicle position is used according to the JSON specification |
| `state` | enum | Route calculation state |
| `trafficRelatedDelay` | enum | Traffic-related delay category |
| `type` | enum | Route type |
| `viaInformation` | string or array of strings | Via-point information; the source artifacts disagree on the type |

### 3.2 Enumerations

**`state`**

- `calculating`
- `calculated`
- `failed`
- `cancelled`

The JSON specification does not define a separate `re-calculating` state. It indicates that a changed route variant should be created as a new route.

**`trafficRelatedDelay`**

- `freeflow`
- `heavy`
- `slow`
- `queuing`
- `stationary`
- `no-flow`
- `unknown`

**`type`**

- `original`
- `alternative`
- `rubberbanded`

The JSON specification states that the type may be undefined for an active route. Whether this means an omitted property or a null value requires clarification.

### 3.3 Operations

| Operation | Element | Resource |
|---|---:|---:|
| Create | Yes | Yes |
| Read | Yes | Yes |
| Update | Yes | No separate resource-level update operation specified |
| Delete | Yes | No |
| Subscribe | Yes | Yes |

The source matrix identifies both element-level and resource-level subscriptions.

### 3.4 Create and Update Properties

The property-access matrix identifies the following writable properties.

| Property | Create required | Create settable | Update settable |
|---|---:|---:|---:|
| `destinationLocation` | Yes | Yes | Yes |
| `incidentsToAvoid` | No | Yes | No |
| `intermediateLocations` | No | Yes | Yes |
| `maximumNumberOfAlternativeRoutes` | No | Yes | No |
| `startLocation` | No | Yes | No |
| `name` | No | Yes | No |

Other listed route properties are not marked as client-settable in the matrix.

The JSON specification describes route creation and route update using POST operations. The exact request semantics and update behavior require confirmation.

## 4. Intermediate Locations

The `intermediateLocations` resource represents locations associated with a route.

### 4.1 Properties

| Property | Type | Description |
|---|---|---|
| `id` | UUID | Resource identifier |
| `name` | string | Resource name |
| `uri` | string | Resource URI |
| `location` | Places location reference | Geographic location |
| `chargingDuration` | duration | Charging duration; present in the JSON specification |
| `chargingRequired` | boolean | Indicates whether charging is required; present in the JSON specification |
| `type` | enum | Intermediate-location category |

### 4.2 Type Values

The JSON specification defines:

- `stopover`
- `viapoint`
- `interchange-entrance`
- `interchange-exit`
- `stopover-and-interchange-entrance`
- `stopover-and-interchange-exit`
- `charging-stop`

The property-access matrix defines only:

- `stopover`
- `viapoint`
- `interchange-entrance`
- `interchange-exit`

This discrepancy is unresolved.

### 4.3 Operations

| Operation | Element | Resource |
|---|---:|---:|
| Create | No separate element creation listed | Yes |
| Read | Yes | Yes |
| Update | No | No |
| Delete | Yes | No |
| Subscribe | No | Yes |

### 4.4 Create Properties

The property-access matrix identifies:

| Property | Required | Settable |
|---|---:|---:|
| `location` | Yes | Yes |
| `type` | Yes | Yes |
| `name` | No | Yes |

The JSON specification additionally lists `chargingDuration` and `chargingRequired` in the resource model, but does not include them in the collection POST property list.

## 5. Route Sections

The `routeSections` resource represents individual sections of a route.

### 5.1 Properties

| Property | Type | Description |
|---|---|---|
| `id` | UUID | Resource identifier |
| `name` | string | Resource name |
| `uri` | string | Resource URI |
| `junctionIcon` | URI | Junction icon |
| `junctionName` | string | Junction name |
| `length` | number | Section length |
| `lengthUnit` | distance unit | Unit of section length |
| `location` | Places location reference | Associated location |
| `maneuverIcon` | URI | Maneuver icon |
| `roadNumberCardinalDirection` | string | Cardinal direction associated with the road number |
| `roadNumberIcon` | URI | Road number icon |
| `streetName` | string | Street name |
| `tollCosts` | number | Toll cost |
| `tollCostsIcon` | URI | Toll cost icon |
| `tollCostsUnit` | string | Toll cost unit |
| `travelTimeForSection` | duration | Travel time for the section |
| `travelTimeFromCurrentPosition` | duration | Travel time from the current position |
| `type` | enum | Section category |

The JSON specification additionally lists `chargingDuration`, `chargingRequired`, and `exitIcon`. These properties are absent from the property-access matrix.

### 5.2 Type Values

The JSON specification lists:

- `stopover`
- `destination`
- `stretch`
- `highway-stretch`
- `highway-point`
- `charging-stop`

The property-access matrix lists:

- `stopover`
- `destination`
- `interchange`
- `stretch`
- `highway-stretch`

The definitions are not equivalent and require clarification.

### 5.3 Operations

| Operation | Element | Resource |
|---|---:|---:|
| Create | No | No |
| Read | Yes | No |
| Update | No | No |
| Delete | No | No |
| Subscribe | Yes | No |

## 6. Route Incidents

The `routeIncidents` resource associates traffic incidents with a route.

### 6.1 Properties

| Property | Type | Description |
|---|---|---|
| `id` | UUID | Resource identifier |
| `name` | string | Resource name |
| `uri` | string | Resource URI |
| `incident` | traffic incident reference | Referenced traffic incident |
| `offset` | number | Offset along the route |
| `offsetUnit` | distance unit | Unit of the offset |
| `route` | route reference | Associated route |

The JSON specification permits references to both `traffic.incidents.incidentObject` and `traffic.vicsIncidents.vicsIncidentObject`. The property-access matrix lists only `traffic.incidents.incidentObject`.

### 6.2 Operations

| Operation | Element | Resource |
|---|---:|---:|
| Create | No | No |
| Read | Yes | No |
| Update | No | No |
| Delete | No | No |
| Subscribe | Yes | No |

### 6.3 Related Concept: Incidents to Avoid

`routeIncidents` and `incidentsToAvoid` are separate properties:

- `routeIncidents` describes incidents associated with a route.
- `incidentsToAvoid` identifies incidents supplied as route-calculation constraints.

They should not be treated as interchangeable without further evidence.

## 7. Segments

The `segments` resource appears in the property-access matrix but not in the supplied JSON resource specification.

### 7.1 Properties

| Property | Type | Description |
|---|---|---|
| `id` | UUID | Resource identifier |
| `name` | string | Resource name |
| `uri` | string | Resource URI |
| `length` | number | Segment length |
| `lengthUnit` | distance unit | Unit of segment length |
| `offset` | number | Segment offset |
| `offsetUnit` | distance unit | Unit of segment offset |
| `roadCompositions` | array of road-composition references | Road composition data |
| `shapepoints` | array of geoposition strings | Geographic points describing the segment |

### 7.2 Operations

| Operation | Element | Resource |
|---|---:|---:|
| Create | No | No |
| Read | Yes | No |
| Update | No | No |
| Delete | No | No |
| Subscribe | Yes | No |

## 8. Road Compositions

The `roadCompositions` resource describes road characteristics associated with a segment.

### 8.1 Properties

| Property | Type | Description |
|---|---|---|
| `id` | UUID | Resource identifier |
| `name` | string | Resource name |
| `uri` | string | Resource URI |
| `roadInformation` | reference to road type or road attribute | Road information |
| `offset` | number | Offset within the segment |
| `offsetUnit` | distance unit | Unit of offset |
| `length` | number | Length of the road composition |
| `lengthUnit` | distance unit | Unit of length |

The matrix allows `roadInformation` to reference either a road type object or a road attribute object.

### 8.2 Operations

| Operation | Element | Resource |
|---|---:|---:|
| Create | No | No |
| Read | Yes | No |
| Update | No | No |
| Delete | No | No |
| Subscribe | Yes | No |

## 9. Travel Information

The `travelInformation` resource provides route-related distance, time, toll, and other travel data.

### 9.1 Properties

| Property | Type | Description |
|---|---|---|
| `id` | UUID | Resource identifier |
| `name` | string | Resource name |
| `uri` | string | Resource URI |
| `distance` | number | Total distance |
| `distanceRawValue` | integer | Distance in meters; present in the JSON specification only |
| `distanceUnit` | distance unit | Unit of total distance |
| `distanceOnFerries` | number | Distance on ferries |
| `distanceOnFerriesUnit` | distance unit | Unit of ferry distance |
| `distanceOnHighways` | number | Distance on highways |
| `distanceOnHighwaysUnit` | distance unit | Unit of highway distance |
| `distanceOnSeasonallyRestrictedRoads` | number | Distance on seasonally restricted roads |
| `distanceOnSeasonallyRestrictedRoadsUnit` | distance unit | Unit of seasonally restricted road distance |
| `distanceOnTollRoads` | number | Distance on toll roads |
| `distanceOnTollRoadsUnit` | distance unit | Unit of toll-road distance |
| `distanceOnVignetteRoads` | number | Distance on vignette roads |
| `distanceOnVignetteRoadsUnit` | distance unit | Unit of vignette-road distance |
| `electricRangeWithComfortConsumption` | integer | Estimated electric range with comfort consumption; JSON specification only |
| `electricRangeWithoutComfortConsumption` | integer | Estimated electric range without comfort consumption; JSON specification only |
| `entranceInterchangeIcon` | URI | Interchange entrance icon |
| `entranceInterchangeName` | string | Interchange entrance name |
| `exitInterchangeIcon` | URI | Interchange exit icon |
| `exitInterchangeName` | string | Interchange exit name |
| `includesCityRestrictions` | boolean | Indicates city restrictions; source notes CHN-only applicability |
| `includesHOVLanes` | boolean | Indicates HOV lane inclusion; JSON specification only |
| `intermediateLocation` | intermediate-location reference | Location to which the information applies |
| `residualEnergyInPercent` | integer (0–100) | Residual energy percentage; JSON specification only |
| `residualEnergyWithComfortConsumptionInPercent` | integer (0–100) | Residual energy with comfort consumption; JSON specification only |
| `residualEnergyWithComfortConsumptionNormalized` | number | Normalized residual energy with comfort consumption; JSON specification only |
| `residualEnergyWithoutComfortConsumptionInPercent` | integer (0–100) | Residual energy without comfort consumption; JSON specification only |
| `residualEnergyWithoutComfortConsumptionNormalized` | number | Normalized residual energy without comfort consumption; JSON specification only |
| `routeBasedConsumptionTrigger` | integer | Route-based consumption trigger; JSON specification only |
| `tollCosts` | number | Toll cost |
| `tollCostsIcon` | URI | Toll cost icon |
| `tollCostsUnit` | string | Toll cost unit |
| `track` | route reference | Associated route |
| `travelTime` | duration | Travel time |
| `travelTimeAdjustment` | duration | Travel-time adjustment |

The property list consolidates both source artifacts. Fields explicitly marked as present in only one source require confirmation before being treated as part of a single contract version.

### 9.2 Operations

| Operation | Element | Resource |
|---|---:|---:|
| Create | No separate element creation listed | Yes |
| Read | Yes | Yes |
| Update | No | No |
| Delete | Yes | No |
| Subscribe | Yes | Yes |

### 9.3 Create Properties

The property-access matrix lists:

| Property | Required | Settable |
|---|---:|---:|
| `intermediateLocation` | Yes | Yes |
| `track` | Yes | Yes |
| `name` | No | Yes |

The JSON specification lists `track` as required and `intermediateLocation` as optional. This is a source discrepancy.

## 10. Route Calculation Constraints

The functional description specifies the following maximum values.

### 10.1 Maximum Alternative Routes

| Context | Maximum alternatives |
|---|---:|
| Travel information for a single location | 0 |
| Route calculation in overview | 2 |
| Active route guidance | 2 |
| HomeView destinations | 0 |
| Predicted route without active guidance | 2 |
| TripView travel information | 0 |

### 10.2 Maximum Intermediate Elements

| Element | Maximum |
|---|---:|
| Stopovers | 3 |
| Via-points | 4 |
| Interchange entrances | 1 |
| Interchange exits | 1 |

The functional description states that exceeding these limits results in `409 Conflict`.

The limits are not fully represented by the resource property definitions. Their validation scope and exact error response remain unspecified.

## 11. Source Discrepancies and Clarifications

The source artifacts do not describe one fully consistent contract.

| Topic | JSON specification | Property-access matrix | Required clarification |
|---|---|---|---|
| `intermediateLocations.type` | Seven values | Four values | Confirm supported enum values |
| `routeSections.type` | Six values | Five different values | Confirm supported enum values |
| `routes.viaInformation` | string | array of strings | Confirm data type |
| `routes.segments` | Not listed | Listed | Confirm resource availability |
| `routes.geometry` | Listed | Not listed | Confirm whether property is in scope |
| `lastEnergyBasedRecalculationTimeStamp` | Listed | Not listed | Confirm whether property is in scope |
| `routeIncidents.incident` | Two possible reference types | One reference type | Confirm supported incident model |
| `travelInformation` | Includes energy-related properties | Omits them | Confirm resource version and field set |
| `travelInformation.intermediateLocation` | Optional in collection POST | Required in matrix | Confirm create requirement |
| `routeSections` charging properties | Listed | Not listed | Confirm availability |
| `intermediateLocations` charging properties | Listed | Not listed as create properties | Confirm whether they are writable |

These discrepancies should be resolved against the authoritative version of the service specification before generating a production OpenAPI definition.

## 12. Contract Information Not Available

The reviewed materials do not provide enough information to define the following contract details reliably:

- Production base URL and complete HTTP paths
- Authentication and authorization requirements
- Complete request and response envelopes
- Exact HTTP method semantics beyond the listed operation capabilities
- Full status-code and error-response catalog
- JSON serialization rules for duration, distance, and geoposition values
- External referenced model definitions
- Subscription message envelope and event payload schemas
- Pagination, filtering, and sorting behavior
- Nullability and omission rules for optional properties

These details are intentionally not inferred.

## 13. Documentation Note

This reference is a structured consolidation of available source information. It preserves unresolved differences rather than silently selecting one definition.

Before implementation or publication as an authoritative API reference, the resource models and operation definitions should be validated against the applicable service version.
