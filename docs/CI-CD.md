# CI/CD Architecture and Execution Evidence

## Scope

This document describes the documentation CI/CD workflow configured in this repository. It distinguishes the implemented automation from checks that are not part of the current pipeline.

## Current architecture

The workflow is defined in [`.github/workflows/ci.yml`](../.github/workflows/ci.yml).

```text
Git push to main / Pull request to main
                 |
                 v
       API Contract Quality Gates
       - checkout source
       - set up Node.js 24.22.2
       - pin npm 11.19.1
       - install locked dependencies (npm ci)
       - run npm audit (high severity)
       - run Spectral against both OpenAPI files
       - run Redocly against both OpenAPI files
                 |
                 v
          Build Jekyll Website
       - configure GitHub Pages
       - build the documentation site
       - upload Pages artifact on push to main
                 |
                 v
          Deploy GitHub Pages
       - deploy the uploaded Pages artifact
       - publish the site URL
```

The workflow currently runs on:
- pushes to `main`;
- pull requests targeting `main`.

The deployment job runs only for pushes to `main`. The quality and build jobs are connected through job dependencies; deployment depends on the successful build.

## Configured quality checks

| Check | Configuration / command | Scope |
|---|---|---|
| Dependency installation | `npm ci --no-audit --no-fund` | Locked npm dependencies |
| Dependency audit | `npm audit --audit-level=high` | High-severity vulnerabilities |
| Spectral | `npm run lint:spectral` | `openapi/openapi.yaml`, `openapi/navigation-api.yaml` |
| Redocly | `npm run lint:redocly` | Both OpenAPI specifications |
| Documentation build | `actions/jekyll-build-pages` | Jekyll site |
| Pages publication | `actions/upload-pages-artifact`, `actions/deploy-pages` | Pushes to `main` |

The current `package.json` defines validation scripts for Spectral and Redocly. It does not define an automated unit, integration, or end-to-end test suite. Therefore, the workflow's successful result confirms completion of the configured quality checks and publication steps; it does not prove runtime behavior of the Orders API.

## Execution evidence

A real GitHub Actions execution is recorded:

- **Workflow:** Documentation CI and GitHub Pages
- **Run:** [Run #71](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/actions/runs/44823680824)
- **Commit:** `3518073cd9dcde1b6c30473d1e8fbe99b5f8818e`
- **Started:** 2026-11-20 21:49 UTC
- **Conclusion:** `success`

The recorded jobs completed successfully:
- API Contract Quality Gates;
- Build Jekyll Website;
- Deploy GitHub Pages.

The job record shows successful completion of dependency installation, dependency audit, Spectral validation, Redocly validation, Jekyll build, Pages artifact upload, and deployment.

The run currently has no downloadable workflow artifacts listed. The run page and job-step summaries remain available as execution evidence. No separate test report or retained test-result bundle is claimed here.

## Status and evidence boundaries

| Area | Status | Evidence |
|---|---|---|
| CI workflow configuration | Configured | `.github/workflows/ci.yml` |
| OpenAPI quality gates | Executed successfully in Run #71 | GitHub Actions job and step summaries |
| Jekyll build | Executed successfully in Run #71 | Build job |
| GitHub Pages deployment | Executed successfully in Run #71 | Deployment job |
| Automated unit / integration / E2E tests | Not configured in the current workflow | No such test command or job in the workflow |
| Retained test report bundle | Not available in the inspected run | No downloadable artifacts listed |

## How to verify

1. Open the [workflow run](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/actions/runs/44823680824).
2. Review each job and its completed steps.
3. For a later execution, open [GitHub Actions](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2/actions) and inspect the latest run.
4. Check the current workflow definition and npm scripts before describing any additional tests as automated.

## Portfolio wording

Accurate description:

> Designed and configured a Docs-as-Code CI/CD workflow with GitHub Actions, dependency auditing, Spectral and Redocly validation of OpenAPI contracts, Jekyll site building, and GitHub Pages deployment. Verified a successful end-to-end workflow execution on 20 November 2026; the recorded run completed all configured quality, build, and deployment jobs successfully.

Do not describe this pipeline as having automated unit, integration, or end-to-end API tests: those checks are not present in the current workflow.
