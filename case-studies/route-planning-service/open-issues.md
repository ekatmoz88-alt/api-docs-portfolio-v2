# Route Planning Service — Open Issues and Specification Review

## 1. Purpose

This document records inconsistencies, missing definitions, and clarification questions identified during the review of the available Route Planning Service materials.

The review compares:

- JSON resource definitions
- CRUD and property-access matrix
- Functional routing description
- Selected C++ client-library declarations and implementations

The purpose is to preserve source-level differences and identify information that must be confirmed before the documentation can be treated as an authoritative API contract.

## 2. Specification Consistency Issues

### 2.1 Intermediate Location Types

**Source discrepancy**

The JSON resource specification defines seven values for `intermediateLocations.type`:

- `stopover`
- `viapoint`
- `interchange-entrance`
- `interchange-exit`
- `stopover-and-interchange-entrance`
- `stopover-and-interchange-exit`
- `charging-stop`

The CRUD/property-access matrix defines only four:

- `stopover`
- `viapoint`
- `interchange-entrance`
- `interchange-exit`

**Clarification required**

1. Which enumeration is valid for the documented service version?
2. Are the combined stopover/interchange values supported?
3. Is `charging-stop` a valid client-created resource type?
4. Are any values restricted to internal service use?

### 2.2 Route Section Types

**Source discrepancy**

The JSON specification lists:

- `stopover`
- `destination`
- `stretch`
- `highway-stretch`
- `highway-point`
- `charging-stop`

The CRUD/property-access matrix lists:

- `stopover`
- `destination`
- `interchange`
- `stretch`
- `highway-stretch`

**Clarification required**

1. Is `interchange` a replacement for `highway-point`?
2. Is `charging-stop` represented as a route section?
3. Which values can clients receive?
4. Which values, if any, can clients create?

### 2.3 `routes.viaInformation`

**Source discrepancy**

- JSON specification: `string`
- CRUD/property-access matrix: `array[string]`

**Clarification required**

Confirm the canonical data type and provide an example value.

### 2.4 Route Geometry and Segments

**Source discrepancy**

The JSON specification includes:

- `geometry`
- `lastEnergyBasedRecalculationTimeStamp`

The CRUD/property-access matrix includes:

- `segments`

The matrix also defines a separate `segments` resource containing `shapepoints` and `roadCompositions`.

**Clarification required**

1. Are `geometry` and `segments` separate representations of route geometry?
2. Is `geometry` deprecated, optional, or version-specific?
3. Is `segments` part of the same API version as the JSON route model?
4. Is `lastEnergyBasedRecalculationTimeStamp` still supported?

The available materials do not establish the relationship between these representations.

### 2.5 Route Incident Reference Types

**Source discrepancy**

The JSON specification allows the `incident` property to reference:

- `traffic.incidents.incidentObject`
- `traffic.vicsIncidents.vicsIncidentObject`

The CRUD/property-access matrix lists only:

- `traffic.incidents.incidentObject`

**Clarification required**

Confirm whether VICS incident references are supported in the documented service version.

### 2.6 Travel Information Model

**Source discrepancy**

The JSON specification contains additional energy-related properties, including:

- `electricRangeWithComfortConsumption`
- `electricRangeWithoutComfortConsumption`
- `residualEnergyInPercent`
- `residualEnergyWithComfortConsumptionInPercent`
- `residualEnergyWithComfortConsumptionNormalized`
- `residualEnergyWithoutComfortConsumptionInPercent`
- `residualEnergyWithoutComfortConsumptionNormalized`
- `routeBasedConsumptionTrigger`

It also includes `includesHOVLanes` and `distanceRawValue`.

These properties are absent from the CRUD/property-access matrix.

**Clarification required**

1. Are the energy-related fields part of the same service version?
2. Are they optional and vehicle-dependent?
3. What are the valid units and value ranges?
4. Is `distanceRawValue` always expressed in meters?
5. Is `includesHOVLanes` supported in the documented target configuration?

### 2.7 Travel Information Creation Requirements

**Source discrepancy**

The JSON specification lists `track` as required and `intermediateLocation` as optional in the collection POST definition.

The CRUD/property-access matrix marks both `track` and `intermediateLocation` as required and settable.

**Clarification required**

Confirm whether `intermediateLocation` is mandatory when creating travel information.

Also clarify whether omitting it means that the information applies to the final destination, as suggested by the resource description.

### 2.8 Charging Properties

**Source discrepancy**

The JSON resource definitions include:

- `chargingDuration`
- `chargingRequired`

These properties are not included in the corresponding create-property lists in the supplied matrix.

The JSON `routeSections` definition also includes `exitIcon`, which is absent from the matrix.

**Clarification required**

Confirm whether these fields are:

- Read-only calculated properties
- Client-settable properties
- Version-specific properties
- Deprecated properties

## 3. Operation and Contract Questions

### 3.1 POST Semantics

The JSON specification describes POST operations for both route creation and route update.

The source materials do not provide complete request and response examples.

**Clarification required**

- What is the exact request body for collection-level POST?
- What is the exact request body for element-level POST?
- Does an omitted property remain unchanged during update?
- Can an update trigger route recalculation?
- What response status codes and response bodies are returned?

Do not assume PUT or PATCH semantics.

### 3.2 Resource Paths and URI Structure

The available materials contain resource names and URI references, but do not provide a complete production base URL or definitive HTTP path templates.

**Clarification required**

- What is the canonical service base URI?
- What are the exact collection and element paths?
- Are resource URIs absolute or relative?
- Are URI references stable across sessions?
- What is the resource identifier format in actual responses?

### 3.3 Error Handling

The functional description states that exceeding the maximum number of intermediate elements results in `409 Conflict`.

A complete error catalog is not available.

**Clarification required**

- What error response body accompanies `409 Conflict`?
- Are validation errors returned with field-level details?
- What errors can occur during route calculation?
- How are failed and cancelled routes represented in responses?
- Are authorization and service-availability errors documented separately?

### 3.4 Subscription Contract

The property-access matrix identifies element-level and resource-level subscription capabilities.

The reviewed `WebSocketResponseObject` header declares response categories:

- `TYPE_SUBSCRIBE`
- `TYPE_UNSUBSCRIBE`
- `TYPE_DATA`
- `TYPE_ERROR`

However, the exact event envelope and payload schemas are not present in the reviewed materials.

**Clarification required**

- What is the subscription request format?
- What does a successful subscription response contain?
- What are the event names and payload schemas?
- Are updates sent as full resource representations or partial changes?
- What are the delivery and ordering guarantees?
- How should clients handle reconnects and expired subscriptions?

## 4. Behavioral Clarifications

### 4.1 Alternative Route Management

The functional description states that clients should monitor route changes because better or faster alternatives may appear over time.

**Clarification required**

- How is a better route identified?
- Is `isRecommended` the only recommendation indicator?
- How are alternative routes ranked?
- Can an alternative route become the recommended route?
- What is the lifecycle of an alternative route?
- Are alternative-route references limited to one level?

### 4.2 Route Calculation Lifecycle

The route model defines:

- `calculating`
- `calculated`
- `failed`
- `cancelled`

The source does not define a separate `re-calculating` state and indicates that a changed route variant should be created as a new route.

**Clarification required**

- What events cause each state transition?
- Can a failed route be retried?
- Can a calculating route be cancelled?
- How does a client distinguish a new calculation from an alternative route?
- What happens to the original route when a new variant is created?

### 4.3 ETA Calculation

The functional description defines ETA as:

`currentClientSystemTime + travelTime`

It does not identify an explicit server-side ETA property.

**Clarification required**

- Which client time source should be used?
- What time zone applies?
- How should time synchronization or invalid client time be handled?
- Does `travelTimeAdjustment` affect the ETA calculation?

### 4.4 Distance and Duration Formats

The resource definitions use distance units and duration types, but the complete serialization rules are not included.

**Clarification required**

- Which distance units are supported?
- How are duration values serialized?
- Are numeric distances expressed as integers or decimals?
- What precision and rounding rules apply?
- Are units returned with every measurement or inherited from configuration?

## 5. Implementation Evidence Boundaries

The reviewed C++ files provide limited but useful implementation context.

### 5.1 Routing Service Handler

The reviewed `RoutingServiceHandler` declaration and implementation establish that the class:

- Inherits from `Client::ServiceHandler`.
- Receives an `INavSdInterface` pointer.
- Overrides `LogServiceAvailability()`.
- Checks service availability and logs the result.
- Can include elapsed-time logging when performance logging is enabled.

They do not establish that this class implements route calculation, CRUD operations, or routing-specific event processing.

**Additional evidence required for implementation-level claims**

- Routing resource registration code
- Routing request and response handling
- Routing-specific event processing
- Subscription lifecycle implementation
- Serialization and deserialization logic

These files are not required for the current demonstration sample. The existing evidence is sufficient to document the handler's observed responsibilities.

### 5.2 WebSocket Response Object

The reviewed header declares response categories and accessors.

It does not establish the exact wire-level JSON representation.

**Clarification required**

An authoritative protocol description or sanitized message examples would be needed to document the WebSocket contract.

## 6. Publication and Documentation Risks

Before treating this case study as a public portfolio artifact, review the following points.

| Risk | Mitigation |
|---|---|
| Proprietary identifiers in source material | Replace organization-specific identifiers with generic names |
| Confidential implementation details | Include only information approved for public disclosure |
| Inconsistent source definitions | Preserve discrepancies and label unresolved items |
| Unsupported implementation assumptions | Separate observed code behavior from inferred architecture |
| Incomplete API contract | Clearly label the document as a demonstration sample |
| Unverified technical details | Avoid inventing paths, payloads, algorithms, and response examples |

## 7. Recommended Resolution Order

The following order prioritizes issues that affect the correctness of the resource model and API reference.

| Priority | Topic | Reason |
|---|---|---|
| High | Resource versions and enum discrepancies | Affects valid property values and client compatibility |
| High | Create/update semantics | Affects client request construction |
| High | Travel information requirements | Affects resource creation |
| High | Subscription payload contract | Affects client integration |
| Medium | Route geometry and segment model | Affects route representation |
| Medium | Error response catalog | Affects error handling |
| Medium | ETA and time handling | Affects displayed arrival information |
| Low | Detailed formatting and rounding rules | Affects presentation and consistency |

## 8. Review Outcome

The available materials are sufficient to produce a structured logical API reference and architecture overview.

They are not sufficient to produce a fully validated production API contract.

The main documentation outcome is therefore a traceable description of known resources and behaviors, accompanied by an explicit list of unresolved questions.

This approach avoids silently merging conflicting definitions or presenting assumptions as confirmed implementation details.
