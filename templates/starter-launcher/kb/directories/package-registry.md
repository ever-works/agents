# Package registries and developer hubs

Registries and hubs where developers install or call the product. Mostly automatable from CI.

Generated from `../data/launch-platforms.csv`. Edit the CSV, not this file.

| Platform | Automation | Cost | Traffic | Difficulty | When | Status |
|----------|------------|------|---------|------------|------|--------|
| [npm](https://www.npmjs.com) | auto | free | very-high | medium | launch-day | up |
| [PyPI](https://pypi.org) | auto | free | very-high | medium | launch-day | up |
| [crates.io](https://crates.io) | auto | free | high | medium | launch-day | up |
| [Docker Hub](https://hub.docker.com) | auto | freemium | high | medium | launch-day | up |
| [Artifact Hub](https://artifacthub.io) | auto | free | medium | medium | launch-week | up |
| [GitHub Marketplace](https://github.com/marketplace) | assisted | free | high | medium | week-2-4 | up |
| [RapidAPI Hub](https://rapidapi.com) | assisted | freemium | high | medium | week-2-4 | up |
| [Postman API Network](https://www.postman.com/explore) | assisted | free | high | medium | week-2-4 | up |

## Platforms

### npm

- id: `npm`
- site: https://www.npmjs.com
- method: registry-publish | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: very-high | difficulty: medium | when: launch-day
- best for: dev-tools, api
- needs: npm account with 2FA; publish token in CI
- how: Publish the SDK or CLI from CI. Fill keywords, homepage and repository fields in package.json; the README is the listing page.
- status: up (blocks automated clients) (checked 2026-11-22)

### PyPI

- id: `pypi`
- site: https://pypi.org
- method: registry-publish | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: very-high | difficulty: medium | when: launch-day
- best for: dev-tools, ai, api
- needs: PyPI account; trusted publishing from CI
- how: Publish the Python SDK or CLI with project URLs set. Use trusted publishing instead of long-lived tokens.
- status: up (checked 2026-11-22)

### crates.io

- id: `crates-io`
- site: https://crates.io
- method: registry-publish | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: launch-day
- best for: dev-tools
- needs: crates.io account via GitHub; API token in CI
- how: Publish Rust crates with categories, keywords and repository metadata.
- status: up (checked 2026-11-22)

### Docker Hub

- id: `docker-hub`
- site: https://hub.docker.com
- method: registry-publish | automation: auto | cost: freemium | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: launch-day
- best for: self-hosted, oss, dev-tools
- needs: Docker Hub organization; push token in CI
- how: Publish the official image with a full overview (quick start, tags, env vars). Self-hosters judge a project by its image.
- status: up (checked 2026-11-22)

### Artifact Hub

- id: `artifact-hub`
- site: https://artifacthub.io
- method: registry-publish | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: medium | when: launch-week
- best for: self-hosted, infra, oss
- needs: Helm chart repository (or other cloud-native package); account
- how: Register the Helm chart repository so Kubernetes users find the chart. Add the metadata file to claim verified publisher status.
- status: up (checked 2026-11-22)

### GitHub Marketplace

- id: `github-marketplace`
- site: https://github.com/marketplace
- method: developer-program | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: week-2-4
- best for: dev-tools
- needs: GitHub Action or GitHub App; publisher verification for paid plans
- how: List a GitHub Action or App for developers who search inside GitHub. Actions publish from a release; apps go through review.
- status: up (checked 2026-11-22)

### RapidAPI Hub

- id: `rapidapi`
- site: https://rapidapi.com
- method: developer-program | automation: assisted | cost: freemium | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: week-2-4
- best for: api
- needs: Public API with docs; provider account
- how: API marketplace. List the API with a free tier so developers can try it inside the hub.
- status: up (checked 2026-11-22)

### Postman API Network

- id: `postman-api-network`
- site: https://www.postman.com/explore
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: week-2-4
- best for: api
- needs: Public workspace with a collection
- how: Publish a public workspace and collection so developers can call the API in one click.
- status: up (checked 2026-11-22)
