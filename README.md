# API Documentation Portfolio

A technical writing portfolio demonstrating **API documentation, documentation architecture, and Docs-as-Code automation** through practical examples and case studies.

[**View the live API documentation →**](https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/openapi/)

## Project overview

This repository brings together API reference materials, structured API contracts, SOAP integration case studies, and an automated documentation publishing workflow. It demonstrates how API information can be organized for developers and maintained as version-controlled source content.

## What this project demonstrates

- REST API documentation based on OpenAPI 3.1.
- Endpoint, parameter, schema, request, and response descriptions.
- Reusable YAML components and example payloads.
- SOAP integration concepts and legacy API analysis.
- Documentation portal structure, navigation, and presentation.
- API contract validation and automated website publishing.

## Selected portfolio artifacts

| Artifact | Skills demonstrated |
|---|---|
| [Orders API specification](openapi/openapi.yaml) | OpenAPI 3.1, REST endpoints, schemas, and examples |
| [Navigation API specification](openapi/navigation-api.yaml) | A second API contract used in validation workflows |
| [Legacy SOAP API review](legacy-soap-api-review.html) | Legacy SOAP integration analysis and migration considerations |
| [UMMS SOAP client case study](umms-enterprise-soap-client.html) | Structured explanation of a SOAP client and integration concepts |
| [Portfolio landing page](index.md) | Information architecture and project navigation |

## Tools and workflow

- **API contracts:** OpenAPI 3.1, YAML
- **Documentation validation:** Redocly CLI, Spectral
- **Content:** Markdown, HTML, CSS
- **Docs-as-Code:** Git, GitHub
- **Site generation:** Jekyll, GitHub Pages
- **Automation:** GitHub Actions, Node.js, npm

The GitHub Actions workflow installs dependencies, runs dependency audit checks, validates both OpenAPI specifications with Spectral and Redocly, builds the Jekyll site, and deploys the Pages artifact from the main branch.

## Documentation principles

- **Accuracy:** keep reference content aligned with the API contract.
- **Usability:** provide examples and clear descriptions for developer tasks.
- **Consistency:** reuse schemas, terminology, and documentation patterns.
- **Maintainability:** validate source files and publish through an automated workflow.

## Project context

This is a portfolio/demo project. The Orders API uses illustrative endpoints and data; it is not a live production service. SOAP case studies are portfolio materials and do not imply access to a live customer system.

## Author

**Kate Motsar** — Technical Writer | API Documentation | Documentation Engineering

[GitHub profile](https://github.com/ekatmoz88-alt) · [LinkedIn](https://www.linkedin.com/in/kate-motsar-b56974267/)
