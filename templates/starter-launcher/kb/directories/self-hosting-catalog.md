# Self-hosting catalogs

One-click app catalogs of home-server and self-hosting platforms.

Generated from `../data/launch-platforms.csv`. Edit the CSV, not this file.

| Platform | Automation | Cost | Traffic | Difficulty | When | Status |
|----------|------------|------|---------|------------|------|--------|
| [Umbrel App Store](https://apps.umbrel.com) | auto | free | medium | medium | week-2-4 | up |
| [YunoHost apps](https://apps.yunohost.org) | auto | free | medium | hard | when-eligible | up |
| [Cloudron App Store](https://www.cloudron.io/store/) | assisted | free | medium | hard | when-eligible | up |
| [Elestio](https://elest.io) | assisted | free | medium | medium | week-2-4 | up |
| [CapRover one-click apps](https://github.com/caprover/one-click-apps) | auto | free | low | medium | week-2-4 | up |
| [Coolify services](https://coolify.io) | auto | free | medium | medium | week-2-4 | up |
| [Unraid Community Apps](https://unraid.net/community/apps) | auto | free | medium | medium | when-eligible | up |
| [DigitalOcean Marketplace](https://marketplace.digitalocean.com) | assisted | free | high | medium | week-2-4 | up |
| [Railway templates](https://railway.com/templates) | assisted | free | medium | easy | week-2-4 | up |
| [Vercel templates](https://vercel.com/templates) | assisted | free | high | medium | when-eligible | up |

## Platforms

### Umbrel App Store

- id: `umbrel-app-store`
- site: https://apps.umbrel.com | submit: https://github.com/getumbrel/umbrel-apps
- method: github-pr | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: medium | when: week-2-4
- best for: self-hosted, oss
- needs: Docker-based app; manifest per the app framework
- how: Package the app for the home-server OS by pull request to its apps repository. One-click installs bring steady self-hosted users.
- status: up (checked 2026-11-22)

### YunoHost apps

- id: `yunohost-apps`
- site: https://apps.yunohost.org
- method: github-pr | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: hard | when: when-eligible
- best for: self-hosted, oss
- needs: Free-software license; packaging scripts maintained by you or the community
- how: Community app catalog for the self-hosting distro. Packaging is real work; do it once the product is stable.
- status: up (checked 2026-11-22)

### Cloudron App Store

- id: `cloudron-app-store`
- site: https://www.cloudron.io/store/
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: hard | when: when-eligible
- best for: self-hosted, oss
- needs: Cloudron package; maintainers decide inclusion
- how: Managed self-hosting platform. Propose the app on their forum or package it; inclusion depends on demand.
- status: up (checked 2026-11-22)

### Elestio

- id: `elestio`
- site: https://elest.io
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: medium | when: week-2-4
- best for: self-hosted, oss
- needs: Open-source app with a Docker image
- how: Managed hosting for open-source apps. Request the app be added; it can share revenue with the project.
- status: up (checked 2026-11-22)

### CapRover one-click apps

- id: `caprover-one-click`
- site: https://github.com/caprover/one-click-apps | submit: https://github.com/caprover/one-click-apps
- method: github-pr | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: low | difficulty: medium | when: week-2-4
- best for: self-hosted, oss
- needs: Docker image; one-click template file
- how: Add a one-click template by pull request.
- status: up (checked 2026-11-22)

### Coolify services

- id: `coolify-services`
- site: https://coolify.io | submit: https://github.com/coollabsio/coolify
- method: github-pr | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: medium | when: week-2-4
- best for: self-hosted, oss
- needs: Docker compose template
- how: Self-hosted PaaS with a one-click service catalog. Add a compose-based service template by pull request.
- status: up (checked 2026-11-22)

### Unraid Community Apps

- id: `unraid-community-apps`
- site: https://unraid.net/community/apps
- method: github-pr | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: medium | when: when-eligible
- best for: self-hosted
- needs: Docker template XML in a template repository
- how: Home-server users install from this catalog. Publish a template repository and request inclusion.
- status: up (checked 2026-11-22)

### DigitalOcean Marketplace

- id: `digitalocean-marketplace`
- site: https://marketplace.digitalocean.com
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: week-2-4
- best for: self-hosted, oss, saas
- needs: Vendor application; 1-Click image or Kubernetes app
- how: Ship a 1-Click Droplet or Kubernetes app so developers deploy in one step.
- status: up (checked 2026-11-22)

### Railway templates

- id: `railway-templates`
- site: https://railway.com/templates
- method: registry-publish | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: easy | when: week-2-4
- best for: self-hosted, oss, dev-tools
- needs: Railway account; deployable template
- how: Publish a one-click template; template authors can earn a share of usage.
- status: up (checked 2026-11-22)

### Vercel templates

- id: `vercel-templates`
- site: https://vercel.com/templates
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: when-eligible
- best for: dev-tools, web
- needs: Deployable template repository; reviewed submission
- how: Template gallery for web apps and starters. Submit a polished template with a one-click deploy button.
- status: up (checked 2026-11-22)
