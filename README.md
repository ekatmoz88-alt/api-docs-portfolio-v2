# API Documentation Portfolio V2

A technical writing portfolio demonstrating API documentation, documentation architecture, and Docs-as-Code automation.

**Published documentation portal:** https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/

**Focus:** REST APIs · OpenAPI 3.1 · API reference · SOAP case studies · Documentation QA · CI/CD

## Project overview

This repository brings together API specifications, documentation examples, integration case studies, and automated documentation checks. It demonstrates how API documentation can be structured, validated, and published as part of a version-controlled workflow.

## Selected work

| Artifact | What it demonstrates |
|---|---|
| [Orders API specification](openapi/openapi.yaml) | OpenAPI 3.1, REST endpoints, schemas, and examples |
| [Orders API Quickstart](quickstart.md) | Authentication and request examples for the deployed API |
| [Navigation API specification](openapi/navigation-api.yaml) | A second API contract used in validation workflows |
| [Legacy SOAP API review](legacy-soap-api-review.html) | Analysis of legacy SOAP integration patterns and migration considerations |
| [UMMS SOAP client case study](umms-enterprise-soap-client.html) | Structured documentation of SOAP client and integration concepts |
| [Portfolio landing page](index.md) | Information architecture, layout, and project navigation |

## Skills and tools

- **API contracts:** OpenAPI 3.1, YAML
- **Documentation:** Markdown, HTML, Jekyll
- **Validation:** Redocly CLI, Spectral
- **Version control:** Git, GitHub
- **Automation:** GitHub Actions, Node.js, npm
- **API exploration:** Postman

## Documentation workflow

The GitHub Actions workflow installs dependencies, runs dependency audit checks, validates the OpenAPI specifications with Spectral and Redocly, builds the Jekyll site, and deploys the Pages artifact from the main branch.

## Deployed Orders API

- Base URL: `https://ajnslobbgvnsoyezboqa.supabase.co/functions/v1/orders-api`
- Authentication: Supabase Auth access token + project publishable API key
- Operations: `GET /orders`, `POST /orders`, `GET /orders/{id}`
- Data isolation: PostgreSQL Row Level Security restricts orders to their owner

See the [Quickstart](quickstart.md) for signup, sign-in, and request examples.

## Project context

The Orders API is a real deployed service implemented as a Supabase Edge Function with PostgreSQL and Supabase Auth. Use controlled test data in the public environment; do not submit real customer, payment, or confidential business data. SOAP documentation is based on real enterprise integration work and is anonymized for public release.

## Author

**Kate Motsar** — Technical Writer | API Documentation | Documentation Engineering

[GitHub profile](https://github.com/ekatmoz88-alt) · [LinkedIn](https://www.linkedin.com/in/ekatmoz88/) · [Live API documentation](https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/openapi/)


## Tags

`api-documentation` · `openapi-3-1` · `rest-api` · `soap` · `wsdl` · `docs-as-code` · `en-ru`


## Related portfolio example

The related [Technical Writing Portfolio](https://github.com/ekatmoz88-alt/technical-writing-portfolio) contains additional documentation artifacts for the real Orders API project. The V2 repository includes the deployed Supabase Edge Function and its implementation.
