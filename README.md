# API Documentation Portfolio V2

A technical writing portfolio demonstrating API documentation, documentation architecture, and Docs-as-Code automation.

**Focus:** REST APIs · OpenAPI 3.1 · API reference · SOAP case studies · Documentation QA · CI/CD

## Project overview

This repository brings together API specifications, documentation examples, integration case studies, and automated documentation checks. It demonstrates how API documentation can be structured, validated, and published as part of a version-controlled workflow.

## Selected work

| Artifact | What it demonstrates |
|---|---|
| [Orders API specification](openapi/openapi.yaml) | OpenAPI 3.1, REST endpoints, schemas, and examples |
| [Orders API Quickstart](quickstart.md) | Authentication and request examples for the deployed demo API |
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

## Live demo API\n\n- Base URL: `https://ajnslobbgvnsoyezboqa.supabase.co/functions/v1/orders-api`\n- Authentication: Supabase Auth access token + project publishable API key\n- Operations: `GET /orders`, `POST /orders`, `GET /orders/{id}`\n- Data isolation: PostgreSQL Row Level Security restricts orders to their owner\n\nSee the [Quickstart](quickstart.md) for signup, sign-in, and request examples.\n\n## Project context

This is a portfolio/demo project. The Orders API is deployed as a Supabase Edge Function with a PostgreSQL data store and Supabase Auth. It is a portfolio demonstration service, not a production order-management system; use test data only. SOAP case studies are portfolio materials and do not imply access to a live customer system.

## Author

**Kate Motsar** — Technical Writer | API Documentation | Documentation Engineering

[GitHub profile](https://github.com/ekatmoz88-alt) · [LinkedIn](https://www.linkedin.com/in/ekatmoz88/) · [Live API documentation](https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/openapi/)
