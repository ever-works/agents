# App marketplaces and integrations

Integration, plugin and extension marketplaces. Need a real integration and a review.

Generated from `../data/launch-platforms.csv`. Edit the CSV, not this file.

| Platform | Automation | Cost | Traffic | Difficulty | When | Status |
|----------|------------|------|---------|------------|------|--------|
| [Chrome Web Store](https://chromewebstore.google.com) | assisted | fee | very-high | medium | launch-day | up |
| [Firefox Add-ons](https://addons.mozilla.org) | assisted | free | high | medium | launch-day | up |
| [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons) | assisted | free | high | medium | launch-week | up |
| [WordPress Plugin Directory](https://wordpress.org/plugins/) | assisted | free | very-high | medium | launch-week | up |
| [Shopify App Store](https://apps.shopify.com) | assisted | revenue-share | very-high | hard | when-eligible | up |
| [Atlassian Marketplace](https://marketplace.atlassian.com) | assisted | freemium | high | medium | when-eligible | up |
| [Slack Marketplace](https://slack.com/apps) | assisted | free | high | medium | when-eligible | up |
| [Zapier App Directory](https://zapier.com/apps) | assisted | free | high | medium | week-2-4 | up |
| [Make (app integrations)](https://www.make.com/en/integrations) | assisted | free | high | medium | week-2-4 | up |
| [n8n integrations](https://n8n.io/integrations/) | auto | free | medium | medium | week-2-4 | up |
| [Pabbly Connect](https://www.pabbly.com/connect/) | assisted | free | medium | easy | week-2-4 | up |
| [HubSpot App Marketplace](https://ecosystem.hubspot.com/marketplace) | assisted | free | high | medium | when-eligible | up |
| [Salesforce AppExchange](https://appexchange.salesforce.com) | assisted | paid | very-high | hard | when-eligible | up |
| [Notion integrations](https://www.notion.com/integrations) | assisted | free | high | medium | when-eligible | up |
| [Notion template gallery](https://www.notion.com/templates) | assisted | free | high | easy | week-2-4 | up |
| [Google Workspace Marketplace](https://workspace.google.com/marketplace) | assisted | free | high | medium | when-eligible | up |
| [Microsoft AppSource](https://appsource.microsoft.com) | assisted | free | high | hard | when-eligible | up |
| [Azure Marketplace](https://azuremarketplace.microsoft.com) | assisted | revenue-share | high | hard | when-eligible | up |
| [AWS Marketplace](https://aws.amazon.com/marketplace) | assisted | revenue-share | high | hard | when-eligible | up |
| [Figma Community](https://www.figma.com/community) | assisted | free | high | easy | week-2-4 | up |
| [Canva Apps Marketplace](https://www.canva.com/your-apps/) | assisted | free | high | medium | when-eligible | up |
| [Webflow Marketplace](https://webflow.com/marketplace) | assisted | free | high | medium | when-eligible | up |
| [Framer Marketplace](https://www.framer.com/marketplace/) | assisted | free | medium | medium | when-eligible | up |
| [Bubble Plugin Marketplace](https://bubble.io/plugins) | assisted | free | medium | easy | when-eligible | up |
| [Raycast Store](https://www.raycast.com/store) | auto | free | medium | medium | week-2-4 | up |
| [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/vscode) | auto | free | very-high | medium | launch-day | up |
| [Open VSX Registry](https://open-vsx.org) | auto | free | medium | easy | launch-day | up |
| [JetBrains Marketplace](https://plugins.jetbrains.com) | auto | freemium | high | medium | week-2-4 | up |
| [Discord App Directory](https://discord.com/application-directory) | assisted | free | high | medium | when-eligible | up |
| [monday.com apps marketplace](https://monday.com/marketplace) | assisted | free | medium | medium | when-eligible | up |

## Platforms

### Chrome Web Store

- id: `chrome-web-store`
- site: https://chromewebstore.google.com | submit: https://chrome.google.com/webstore/devconsole
- method: developer-program | automation: assisted | cost: fee | link: dofollow (reported), verify on the live listing | traffic: very-high | difficulty: medium | when: launch-day
- best for: browser-extension
- needs: Developer account (one-time registration fee); privacy policy; review
- how: Huge reach for extensions. Optimise the listing title and description for store search; screenshots and early reviews drive installs. Reviews can take days, so submit ahead of launch.
- status: up (checked 2026-11-22)

### Firefox Add-ons

- id: `firefox-add-ons`
- site: https://addons.mozilla.org | submit: https://addons.mozilla.org/developers/
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: launch-day
- best for: browser-extension
- needs: Developer account; source code for review when minified
- how: Ship the Firefox build of the extension at the same time as Chrome.
- status: up (checked 2026-11-22)

### Microsoft Edge Add-ons

- id: `edge-add-ons`
- site: https://microsoftedge.microsoft.com/addons | submit: https://partner.microsoft.com/dashboard/microsoftedge/
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: launch-week
- best for: browser-extension
- needs: Partner Center account
- how: Chromium extensions usually work unchanged; publish here for Edge users.
- status: up (checked 2026-11-22)

### WordPress Plugin Directory

- id: `wordpress-plugins`
- site: https://wordpress.org/plugins/ | submit: https://wordpress.org/plugins/developers/add/
- method: developer-program | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: very-high | difficulty: medium | when: launch-week
- best for: wordpress
- needs: GPL-compatible plugin; manual review
- how: Free plugin with an upgrade path is the standard model. The readme.txt is the listing; review queues can take weeks.
- status: up (checked 2026-11-22)

### Shopify App Store

- id: `shopify-app-store`
- site: https://apps.shopify.com | submit: https://partners.shopify.com
- method: developer-program | automation: assisted | cost: revenue-share | link: dofollow (reported), verify on the live listing | traffic: very-high | difficulty: hard | when: when-eligible
- best for: ecommerce
- needs: Partner account; app review; Shopify-specific use case
- how: Huge merchant base, strict review. Needs a real Shopify use case; reviews decide ranking.
- status: up (checked 2026-11-22)

### Atlassian Marketplace

- id: `atlassian-marketplace`
- site: https://marketplace.atlassian.com | submit: https://developer.atlassian.com/platform/marketplace/
- method: developer-program | automation: assisted | cost: freemium | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: when-eligible
- best for: dev-tools, b2b, enterprise
- needs: Jira or Confluence app; security and privacy review
- how: Enterprise-friendly. Lead with security, data-residency and compliance details.
- status: up (checked 2026-11-22)

### Slack Marketplace

- id: `slack-marketplace`
- site: https://slack.com/apps | submit: https://api.slack.com/apps
- method: developer-program | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: when-eligible
- best for: productivity, b2b
- needs: Slack app; review for public distribution
- how: A useful Slack integration becomes a daily touchpoint. Build it for a real workflow before listing.
- status: up (checked 2026-11-22)

### Zapier App Directory

- id: `zapier`
- site: https://zapier.com/apps | submit: https://developer.zapier.com
- method: developer-program | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: week-2-4
- best for: saas, b2b
- needs: Public API; Zapier integration built on the developer platform
- how: Expected of any SaaS. Build triggers and actions for the top use cases; the integration goes public after a beta with real users.
- status: up (checked 2026-11-22)

### Make (app integrations)

- id: `make`
- site: https://www.make.com/en/integrations | submit: https://www.make.com/en/partners
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: week-2-4
- best for: saas, b2b
- needs: Public API; custom app built in the developer platform
- how: Second major automation marketplace; reuse the API mapping from the Zapier integration.
- status: up (blocks automated clients) (checked 2026-11-22)

### n8n integrations

- id: `n8n-integrations`
- site: https://n8n.io/integrations/ | submit: https://docs.n8n.io/integrations/community-nodes/
- method: registry-publish | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: medium | when: week-2-4
- best for: saas, dev-tools, ai
- needs: Community node published to npm; verification for listing
- how: Publish a community node package; verified nodes appear in the integrations directory.
- status: up (checked 2026-11-22)

### Pabbly Connect

- id: `pabbly-connect`
- site: https://www.pabbly.com/connect/
- method: developer-program | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: week-2-4
- best for: saas
- needs: Public API; integration request
- how: Smaller automation marketplace where it is easier to stand out.
- status: up (checked 2026-11-22)

### HubSpot App Marketplace

- id: `hubspot-marketplace`
- site: https://ecosystem.hubspot.com/marketplace | submit: https://developers.hubspot.com
- method: developer-program | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: when-eligible
- best for: b2b, marketing, crm
- needs: HubSpot app with active installs; listing review
- how: Reaches active sales and marketing buyers. Fits products that extend CRM, sales or marketing workflows.
- status: up (checked 2026-11-22)

### Salesforce AppExchange

- id: `salesforce-appexchange`
- site: https://appexchange.salesforce.com | submit: https://partners.salesforce.com
- method: developer-program | automation: assisted | cost: paid | link: dofollow (reported), verify on the live listing | traffic: very-high | difficulty: hard | when: when-eligible
- best for: enterprise, crm
- needs: Partner agreement; paid security review
- how: Large enterprise audience behind a high bar (security review fee, partner program). Pursue once enterprise customers ask for it.
- status: up (checked 2026-11-22)

### Notion integrations

- id: `notion-integrations`
- site: https://www.notion.com/integrations | submit: https://developers.notion.com
- method: developer-program | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: when-eligible
- best for: productivity
- needs: Public Notion integration; submission review
- how: Build a genuine integration; Notion users share tools widely.
- status: up (checked 2026-11-22)

### Notion template gallery

- id: `notion-templates`
- site: https://www.notion.com/templates
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: easy | when: week-2-4
- best for: productivity, b2c
- needs: Creator profile; published template
- how: A free template that solves part of the problem is a cheap acquisition channel for productivity products.
- status: up (checked 2026-11-22)

### Google Workspace Marketplace

- id: `google-workspace-marketplace`
- site: https://workspace.google.com/marketplace | submit: https://developers.google.com/workspace/marketplace
- method: developer-program | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: when-eligible
- best for: productivity, b2b
- needs: Google Cloud project; OAuth verification; listing review
- how: Gmail, Docs and Calendar add-ons reach a huge base. OAuth scope verification is the slow part; start early.
- status: up (checked 2026-11-22)

### Microsoft AppSource

- id: `microsoft-appsource`
- site: https://appsource.microsoft.com | submit: https://partner.microsoft.com
- method: developer-program | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: hard | when: when-eligible
- best for: enterprise, b2b
- needs: Partner Center account; certification
- how: Microsoft 365 and Teams apps for enterprise buyers. Certification takes time; plan for it.
- status: up (blocks automated clients) (checked 2026-11-22)

### Azure Marketplace

- id: `azure-marketplace`
- site: https://azuremarketplace.microsoft.com | submit: https://partner.microsoft.com
- method: developer-program | automation: assisted | cost: revenue-share | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: hard | when: when-eligible
- best for: enterprise, self-hosted
- needs: Partner Center account; offer packaging; compliance
- how: Enterprise cloud buyers with committed spend. Worth it once compliance and enterprise support are in place.
- status: up (blocks automated clients) (checked 2026-11-22)

### AWS Marketplace

- id: `aws-marketplace`
- site: https://aws.amazon.com/marketplace | submit: https://aws.amazon.com/marketplace/management/
- method: developer-program | automation: assisted | cost: revenue-share | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: hard | when: when-eligible
- best for: enterprise, self-hosted, saas
- needs: Seller registration; tax and banking forms; product packaging
- how: Lets enterprises buy with pre-approved AWS budgets. High effort; pursue with enterprise demand.
- status: up (checked 2026-11-22)

### Figma Community

- id: `figma-community`
- site: https://www.figma.com/community
- method: registry-publish | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: easy | when: week-2-4
- best for: design
- needs: Figma account; plugin or file
- how: Publish a free template, UI kit or plugin that leads to the product. The community is active and shares widely.
- status: up (checked 2026-11-22)

### Canva Apps Marketplace

- id: `canva-apps`
- site: https://www.canva.com/your-apps/ | submit: https://www.canva.dev
- method: developer-program | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: when-eligible
- best for: design, marketing
- needs: Canva app built with the Apps SDK; review
- how: Only where there is a natural design-workflow fit.
- status: up (checked 2026-11-22)

### Webflow Marketplace

- id: `webflow-marketplace`
- site: https://webflow.com/marketplace | submit: https://developers.webflow.com
- method: developer-program | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: when-eligible
- best for: web, design, no-code
- needs: Webflow app or template; review
- how: Apps and templates for site builders.
- status: up (checked 2026-11-22)

### Framer Marketplace

- id: `framer-marketplace`
- site: https://www.framer.com/marketplace/
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: medium | when: when-eligible
- best for: web, design, no-code
- needs: Creator account; template or plugin review
- how: Templates and plugins for Framer sites.
- status: up (checked 2026-11-22)

### Bubble Plugin Marketplace

- id: `bubble-plugins`
- site: https://bubble.io/plugins
- method: developer-program | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: when-eligible
- best for: no-code, api
- needs: Bubble plugin built in the plugin editor
- how: No-code builders install plugins that wrap APIs. Fits API products.
- status: up (checked 2026-11-22)

### Raycast Store

- id: `raycast-store`
- site: https://www.raycast.com/store | submit: https://github.com/raycast/extensions
- method: github-pr | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: medium | when: week-2-4
- best for: productivity, dev-tools, desktop
- needs: Extension submitted by pull request; review
- how: Launcher extensions for power users on macOS. Submit by pull request to the extensions repository.
- status: up (checked 2026-11-22)

### Visual Studio Code Marketplace

- id: `vscode-marketplace`
- site: https://marketplace.visualstudio.com/vscode
- method: registry-publish | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: very-high | difficulty: medium | when: launch-day
- best for: dev-tools, ai
- needs: Publisher account; publish token in CI
- how: Editor extensions put the tool where developers work. Also publish to Open VSX for editors that use it.
- status: up (checked 2026-11-22)

### Open VSX Registry

- id: `open-vsx`
- site: https://open-vsx.org
- method: registry-publish | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: easy | when: launch-day
- best for: dev-tools, ai
- needs: Eclipse account; publish token
- how: Extension registry used by editors outside the Microsoft marketplace. Publish the same build.
- status: up (checked 2026-11-22)

### JetBrains Marketplace

- id: `jetbrains-marketplace`
- site: https://plugins.jetbrains.com
- method: registry-publish | automation: auto | cost: freemium | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: week-2-4
- best for: dev-tools, ai
- needs: JetBrains account; plugin review
- how: IDE plugins for JetBrains users; first release goes through review.
- status: up (checked 2026-11-22)

### Discord App Directory

- id: `discord-app-directory`
- site: https://discord.com/application-directory | submit: https://discord.com/developers/applications
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: when-eligible
- best for: community, b2c
- needs: Verified app (bots need verification past a server count)
- how: Fits bots and community tools. Discoverability needs app verification first.
- status: up (checked 2026-11-22)

### monday.com apps marketplace

- id: `monday-marketplace`
- site: https://monday.com/marketplace | submit: https://developer.monday.com
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: medium | when: when-eligible
- best for: productivity, b2b
- needs: monday app; review
- how: Work-management buyers. Fits integrations around tasks, time and reporting.
- status: up (checked 2026-11-22)
