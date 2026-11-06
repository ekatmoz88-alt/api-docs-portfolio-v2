---
layout: default
title: Orders API Quickstart
permalink: /quickstart/
---

# Orders API — Quickstart

This guide explains how to authenticate and call the deployed Orders API. The API is hosted as a Supabase Edge Function and stores orders in PostgreSQL.

## 1. API base URL

```text
https://ajnslobbgvnsoyezboqa.supabase.co/functions/v1/orders-api
```

All API operations require two headers:

- `apikey`: the Supabase publishable key for this project;
- `Authorization: Bearer <access_token>`: a Supabase Auth access token for a signed-in user.

Do not put a secret or service-role key in browser code, Postman shared collections, or this repository.

## 2. Get an access token

If you do not have an account, create one using Supabase Auth. Replace the placeholders with your email, password, and project publishable key.

### Sign up

```bash
curl --request POST \
  --url "https://ajnslobbgvnsoyezboqa.supabase.co/auth/v1/signup" \
  --header "apikey: YOUR_SUPABASE_PUBLISHABLE_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "email": "you@example.com",
    "password": "Use-a-strong-password"
  }'
```

If email confirmation is enabled for the project, confirm the address before signing in.

### Sign in

```bash
curl --request POST \
  --url "https://ajnslobbgvnsoyezboqa.supabase.co/auth/v1/token?grant_type=password" \
  --header "apikey: YOUR_SUPABASE_PUBLISHABLE_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "email": "you@example.com",
    "password": "Use-a-strong-password"
  }'
```

The response contains an `access_token`. Use that value as the Bearer token in the requests below. Treat it as a credential and do not commit it to source control.

## 3. List your orders

`GET /orders` returns the authenticated user's orders, newest first. Pagination is controlled by `limit` (1–100, default 50) and `offset` (default 0).

```bash
curl --request GET \
  --url "https://ajnslobbgvnsoyezboqa.supabase.co/functions/v1/orders-api/orders?limit=50&offset=0" \
  --header "apikey: YOUR_SUPABASE_PUBLISHABLE_KEY" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

A successful response is `200 OK` with a JSON array:

```json
[
  {
    "id": 1001,
    "status": "pending",
    "created_at": "2026-11-07T10:30:00Z"
  }
]
```

An empty array means the current user has no orders yet.

## 4. Create an order

`POST /orders` creates an order for the authenticated user. The only accepted request field is `status`. Allowed values are `pending`, `shipped`, and `delivered`.

```bash
curl --request POST \
  --url "https://ajnslobbgvnsoyezboqa.supabase.co/functions/v1/orders-api/orders" \
  --header "apikey: YOUR_SUPABASE_PUBLISHABLE_KEY" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "status": "pending"
  }'
```

A successful request returns `201 Created` and the new order:

```json
{
  "id": 1003,
  "status": "pending",
  "created_at": "2026-11-07T10:30:00Z"
}
```

The database assigns the identifier, owner, and creation timestamp. The client must not submit `id` or `user_id`.

## 5. Get an order by ID

`GET /orders/{id}` returns one order if it belongs to the authenticated user.

```bash
curl --request GET \
  --url "https://ajnslobbgvnsoyezboqa.supabase.co/functions/v1/orders-api/orders/1003" \
  --header "apikey: YOUR_SUPABASE_PUBLISHABLE_KEY" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

The API returns `404 Not Found` if the order does not exist or is not visible to the current user.

## 6. Error responses

Errors use the `application/problem+json` media type and the RFC 9457 Problem Details structure.

| HTTP status | Meaning |
|---|---|
| `400` | Invalid JSON, order status, ID, or pagination values |
| `401` | Missing, invalid, or expired access token |
| `404` | Order not found or not visible to the current user |
| `405` | HTTP method not supported for the route |
| `500` | Server or database error |

Example:

```json
{
  "type": "urn:orders-api:problems:400",
  "title": "Invalid order",
  "status": 400,
  "detail": "status is required and must be pending, shipped, or delivered. No other fields are accepted."
}
```

## 7. Data access and security

- Each order is associated with the authenticated Supabase user.
- PostgreSQL Row Level Security restricts reads and inserts to that owner.
- The Edge Function validates the access token with Supabase Auth.
- The API never accepts a client-supplied `user_id`.
- The publishable key identifies the Supabase project; it is not a substitute for user authentication.

## 8. OpenAPI reference

See the [OpenAPI 3.1 specification]({{ '/openapi/openapi.yaml' | relative_url }}) for the complete contract, request schemas, responses, and authentication requirements.

---

*Portfolio note: this API is deployed on Supabase as a demonstration service. Do not submit real customer, payment, or confidential business data.*
