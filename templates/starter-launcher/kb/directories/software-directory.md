# Software directories

Software catalogs and alternatives sites. High-intent search traffic for years.

Generated from `../data/launch-platforms.csv`. Edit the CSV, not this file.

| Platform | Automation | Cost | Traffic | Difficulty | When | Status |
|----------|------------|------|---------|------------|------|--------|
| [AlternativeTo](https://alternativeto.net) | assisted | free | very-high | easy | launch-week | up |
| [SaaSHub](https://www.saashub.com) | assisted | free | high | easy | launch-week | up |
| [SaaSworthy](https://www.saasworthy.com) | assisted | freemium | high | easy | launch-week | up |
| [StackShare](https://stackshare.io) | assisted | free | high | easy | launch-week | up |
| [SourceForge](https://sourceforge.net) | assisted | free | high | easy | launch-week | up |
| [Softpedia](https://www.softpedia.com) | assisted | free | high | medium | week-2-4 | up |
| [Appvizer](https://www.appvizer.com) | assisted | free | medium | easy | week-2-4 | up |
| [Serchen](https://www.serchen.com) | assisted | free | medium | easy | week-2-4 | up |
| [Tool Finder](https://toolfinder.co) | assisted | free | medium | easy | week-2-4 | up |
| [Slant](https://www.slant.co) | assisted | free | medium | easy | week-2-4 | up |
| [LibHunt](https://www.libhunt.com) | assisted | free | medium | easy | launch-week | up |
| [MacUpdate](https://www.macupdate.com) | assisted | free | high | medium | week-2-4 | up |

## Platforms

### AlternativeTo

- id: `alternativeto`
- site: https://alternativeto.net
- method: account-form | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: very-high | difficulty: easy | when: launch-week
- best for: apps, saas, oss, desktop, self-hosted
- needs: Account; list of competitors you replace
- how: Add the app, then mark it as an alternative to each competitor. Set license (open source), platforms and "self-hosted" correctly; these filters drive high-intent traffic.
- status: up (blocks automated clients) (checked 2026-11-22)

### SaaSHub

- id: `saashub`
- site: https://www.saashub.com
- method: account-form | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: easy | when: launch-week
- best for: saas, oss
- needs: Account; list of competitors
- how: Submit, then add every competitor as an alternative so the product shows on their pages. Claim the listing to edit it later.
- status: up (checked 2026-11-22)

### SaaSworthy

- id: `saasworthy`
- site: https://www.saasworthy.com
- method: form | automation: assisted | cost: freemium | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: easy | when: launch-week
- best for: saas
- needs: Vendor form
- how: Comparison-focused SaaS directory; shows up when buyers compare options.
- status: up (blocks automated clients) (checked 2026-11-22)

### StackShare

- id: `stackshare`
- site: https://stackshare.io
- method: account-form | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: easy | when: launch-week
- best for: dev-tools, api
- needs: Account; developer tool or infrastructure product
- how: Engineering teams list their stacks here. Add the tool, its category and integrations, then ask users to add it to their stacks.
- status: up (blocks automated clients) (checked 2026-11-22)

### SourceForge

- id: `sourceforge`
- site: https://sourceforge.net
- method: account-form | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: easy | when: launch-week
- best for: oss, desktop, dev-tools, saas
- needs: Account; can mirror GitHub releases
- how: Long-standing software directory. Open-source projects can mirror GitHub releases for downloads; SaaS can list a business-software profile.
- status: up (checked 2026-11-22)

### Softpedia

- id: `softpedia`
- site: https://www.softpedia.com
- method: editorial-pitch | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: week-2-4
- best for: desktop, apps
- needs: Downloadable software (installer)
- how: Editors review and host downloadable apps. Best for desktop apps with real installers.
- status: up (blocks automated clients) (checked 2026-11-22)

### Appvizer

- id: `appvizer`
- site: https://www.appvizer.com
- method: vendor-portal | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: week-2-4
- best for: b2b, saas
- needs: Vendor form
- how: SaaS marketplace with a European audience; less crowded than the large review sites.
- status: up (checked 2026-11-22)

### Serchen

- id: `serchen`
- site: https://www.serchen.com
- method: form | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: week-2-4
- best for: saas
- needs: Vendor form
- how: Long-running cloud software directory. Low effort permanent listing.
- status: up (blocks automated clients) (checked 2026-11-22)

### Tool Finder

- id: `tool-finder`
- site: https://toolfinder.co
- method: form | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: week-2-4
- best for: productivity, saas
- needs: Productivity-adjacent tool
- how: Curated productivity tool directory. Clean submission; fits work-management and productivity tools.
- status: up (checked 2026-11-22)

### Slant

- id: `slant`
- site: https://www.slant.co
- method: community-post | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: week-2-4
- best for: apps, dev-tools
- needs: Account
- how: Question format ("What are the best X?"). Add the product as an option under the right questions with honest pros and cons.
- status: up (blocks automated clients) (checked 2026-11-22)

### LibHunt

- id: `libhunt`
- site: https://www.libhunt.com
- method: form | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: launch-week
- best for: oss, dev-tools
- needs: Public GitHub repository
- how: Tracks open-source projects by language. Submit the repository; a maintained README and activity keep it ranked.
- status: up (checked 2026-11-22)

### MacUpdate

- id: `macupdate`
- site: https://www.macupdate.com
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: week-2-4
- best for: desktop
- needs: macOS app with a download
- how: Mac software catalog. Submit macOS builds with release notes; keep versions current.
- status: up (checked 2026-11-22)
