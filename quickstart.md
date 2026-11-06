---
layout: default
title: Orders API Quickstart
permalink: /quickstart/
---

# Orders API — Quickstart

This guide introduces the illustrative Orders API contract included in this portfolio. It is based only on the operations and schemas defined in [openapi/openapi.yaml](/openapi/openapi.yaml).

> **Demo limitation:** this is a documentation example, not a live production API. The specification uses `https://example.com` as a placeholder server. Requests in this guide are examples of request construction; they are not expected to return live data.

## 1. What you can do

The OpenAPI contract describes three operations:

| Method | Endpoint | Purpose | Documented responses |
|---|---|---|---|
| `GET` | `/orders` | List orders | `200`, `400`, `401` |
| `POST` | `/orders` | Create an order | `201`, `400`, `401` |
| `GET` | `/orders/{id}` | Retrieve an order by ID | `200`, `404` |

The `Order` schema contains:
- `id` — integer identifier;
- `status` — one of `pending`, `shipped`, or `delivered`.

The `OrderInput` request schema contains the `status` field with the same allowed values.

## 2. Base URL

The specification declares this demo server:

```text
https://example.com
```

It is a placeholder. Replace it only when working with an actual deployment and its confirmed base URL.

## 3. List orders

Use `GET /orders` to request the order collection.

### cURL

```bash
curl --request GET \
  --url "https://example.com/orders"
```

The documented successful response is `200 OK` with a JSON array of `Order` objects. The specification includes this illustrative response:

```json
[
  {
    "id": 1,
    "status": "pending"
  },
  {
    "id": 2,
    "status": "shipped"
  }
]
```

The contract also documents `400 Bad Request` and `401 Unauthorized` responses using the `ProblemDetails` schema.

## 4. Create an order

Use `POST /orders` with a JSON request body. The body must contain `status`, whose value must be `pending`, `shipped`, or `delivered`.

### cURL

```bash
curl --request POST \
  --url "https://example.com/orders" \
  --header "Content-Type: application/json" \
  --data '{
    "status": "pending"
  }'
```

The documented successful response is `201 Created`:

```json
{
  "id": 3,
  "status": "pending"
}
```

The specification also lists `400 Bad Request` and `401 Unauthorized` responses. It does not define additional validation rules for the request body beyond the required `status` field and its enum values.

## 5. Retrieve an order by ID

Use `GET /orders/{id}` to request one order. The `id` path parameter is required and has integer type.

### cURL

```bash
curl --request GET \
  --url "https://example.com/orders/1"
```

The contract documents:
- `200 OK` when order details are found; the response schema is `Order`;
- `404 Not Found` when the order is not found; the response schema is `ProblemDetails`.

The specification does not provide an example response body for this operation.

## 6. Error response format

The API uses the `ProblemDetails` schema for documented error responses. Its fields are:

| Field | Type | Description in the schema |
|---|---|---|
| `type` | string (URI format) | Problem type |
| `title` | string | Short problem title |
| `status` | integer | HTTP status code |
| `detail` | string | Human-readable detail |
| `instance` | string (URI format) | Problem instance |

Example values for `400 Bad Request` and `401 Unauthorized` are included in the OpenAPI specification for `GET /orders`.

## 7. Authentication note

The OpenAPI document contains cURL, Python, and JavaScript snippets with an `Authorization: Bearer YOUR_TOKEN` header for the collection and creation operations. However, the document's top-level `security` field is an empty array and does not define a security scheme. Therefore, this portfolio guide does not treat bearer authentication as a confirmed API requirement. The `401` responses are listed because they are present in the contract.

## 8. Explore the complete contract

For full schemas, response definitions, and code samples, open the [interactive Orders API reference](/openapi/).

For the source of truth, see the [OpenAPI 3.1 specification](openapi/openapi.yaml).

---

*Portfolio note: endpoints, example identifiers, payloads, and the server address are illustrative documentation data. They do not represent a running service.*
