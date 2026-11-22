# Launch platforms

Dated launch events with a daily or weekly leaderboard. One launch per product, planned in advance.

Generated from `../data/launch-platforms.csv`. Edit the CSV, not this file.

| Platform | Automation | Cost | Traffic | Difficulty | When | Status |
|----------|------------|------|---------|------------|------|--------|
| [Product Hunt](https://www.producthunt.com) | human | free | very-high | medium | launch-day | up |
| [BetaList](https://betalist.com) | assisted | freemium | high | medium | pre-launch | up |
| [Peerlist Launchpad](https://peerlist.io) | assisted | free | medium | easy | launch-week | up |
| [Uneed](https://www.uneed.best) | assisted | freemium | medium | easy | launch-week | up |
| [Microlaunch](https://microlaunch.net) | assisted | freemium | medium | easy | week-2-4 | up |
| [Fazier](https://fazier.com) | assisted | freemium | medium | easy | launch-week | up |
| [DevHunt](https://devhunt.org) | assisted | freemium | medium | easy | launch-week | up |

## Platforms

### Product Hunt

- id: `product-hunt`
- site: https://www.producthunt.com | submit: https://www.producthunt.com/posts/new
- method: launch-event | automation: human | cost: free | link: dofollow (reported), verify on the live listing | traffic: very-high | difficulty: medium | when: launch-day
- best for: saas, ai, apps, dev-tools, b2c
- needs: Maker account active for weeks before; thumbnail 240x240; gallery images 1270x760; tagline up to 60 chars; working product
- how: Schedule the launch for 12:01 AM Pacific. Tue-Thu brings the most traffic and the most competition; weekends are quieter. Lead the gallery with a short video or the clearest screenshot, post the maker comment at go-live and answer every comment all day. Tell your network the launch is live and ask for feedback, never for upvotes. Relaunch the same product only after a substantial update (about six months).
- status: up (blocks automated clients) (checked 2026-11-22)

### BetaList

- id: `betalist`
- site: https://betalist.com | submit: https://betalist.com/submit
- method: account-form | automation: assisted | cost: freemium | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: pre-launch
- best for: startups, saas, b2c
- needs: Pre-launch or early-access product with a signup page; free queue is slow, paid review is faster
- how: Submit while the product is still in beta or early access so the listing collects waitlist signups. The free queue can take weeks; the paid option buys a faster review and needs owner approval.
- status: up (checked 2026-11-22)

### Peerlist Launchpad

- id: `peerlist-launchpad`
- site: https://peerlist.io | submit: https://peerlist.io/launchpad
- method: launch-event | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: launch-week
- best for: dev-tools, saas, ai
- needs: Peerlist profile for the maker
- how: Weekly launch cycle with a builder and developer audience. The maker profile matters: fill it before launch week, then reply to comments during the week.
- status: up (blocks automated clients) (checked 2026-11-22)

### Uneed

- id: `uneed`
- site: https://www.uneed.best | submit: https://www.uneed.best/submit-a-tool
- method: launch-event | automation: assisted | cost: freemium | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: launch-week
- best for: indie, saas, ai
- needs: Account; free slots queue for weeks, paid skips the line
- how: Daily launch lineup. Book the slot early in the week. A short, concrete tagline drives the clicks here.
- status: up (checked 2026-11-22)

### Microlaunch

- id: `microlaunch`
- site: https://microlaunch.net
- method: launch-event | automation: assisted | cost: freemium | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: week-2-4
- best for: indie, saas
- needs: Account
- how: Launches stay visible for a longer window instead of a one-day spike. Good as a second launch two to four weeks after the main one.
- status: up (checked 2026-11-22)

### Fazier

- id: `fazier`
- site: https://fazier.com
- method: launch-event | automation: assisted | cost: freemium | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: launch-week
- best for: saas, ai
- needs: Account; free and paid launch slots
- how: Daily launch board with ranking badges. Pick a free slot well ahead or buy a dated slot with owner approval.
- status: up (checked 2026-11-22)

### DevHunt

- id: `devhunt`
- site: https://devhunt.org
- method: launch-event | automation: assisted | cost: freemium | link: unknown, verify on the live listing | traffic: medium | difficulty: easy | when: launch-week
- best for: dev-tools, oss
- needs: GitHub sign-in; developer tool
- how: Launch board for developer tools with weekly cycles. Sign in with GitHub, pick a week, link the repository and docs.
- status: up (checked 2026-11-22)
