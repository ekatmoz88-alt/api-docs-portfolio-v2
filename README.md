# API Documentation Portfolio V2

A technical writing portfolio demonstrating API documentation, documentation architecture, and Docs-as-Code automation.

## What this project demonstrates

- REST API documentation with OpenAPI 3.1 (YAML).
- API reference structure, request/response examples, schemas, and error responses.
- SOAP integration documentation and WSDL-oriented analysis.
- Documentation portal structure, navigation, and presentation.
- Automated API contract checks and website publishing with GitHub Actions.

## Selected work

| Artifact | What it demonstrates |
|---|---|
| [Orders API specification](openapi/openapi.yaml) | OpenAPI 3.1, REST endpoints, schemas, and examples |
| [Navigation API specification](openapi/navigation-api.yaml) | A second API contract used in validation workflows |
| [Legacy SOAP API review](legacy-soap-api-review.html) | Analysis of legacy SOAP integration patterns and migration considerations |
| [UMMS SOAP client case study](umms-enterprise-soap-client.html) | Structured documentation of a SOAP client and its integration concepts |
| [Portfolio landing page source](index.md) | Information architecture, visual layout, and project navigation |

## Tooling and workflow

- **API contracts:** OpenAPI 3.1, YAML
- **Documentation rendering and validation:** Redocly CLI, Spectral
- **Docs-as-Code:** Markdown, Git
- **Website:** Jekyll, HTML, CSS, GitHub Pages
- **Automation:** GitHub Actions, Node.js, npm

The GitHub Actions workflow installs dependencies, runs dependency audit checks, validates both OpenAPI specifications with Spectral and Redocly, builds the Jekyll site, and deploys the Pages artifact from the main branch.

## Project context

This is a portfolio/demo project. The Orders API uses example endpoints and illustrative data; it is not presented as a live production service. SOAP case studies are portfolio materials and should not be interpreted as access to a live customer system.

## Author

**Kate Motsar** — Technical Writer | API Documentation | Documentation Engineering

[GitHub profile](https://github.com/ekatmoz88-alt) · [LinkedIn](https://www.linkedin.com/in/kate-motsar-b56974267/)
