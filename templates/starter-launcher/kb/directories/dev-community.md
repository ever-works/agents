# Developer communities

Developer communities and content sites. Technical, honest, no marketing voice.

Generated from `../data/launch-platforms.csv`. Edit the CSV, not this file.

| Platform | Automation | Cost | Traffic | Difficulty | When | Status |
|----------|------------|------|---------|------------|------|--------|
| [Hacker News (Show HN)](https://news.ycombinator.com) | human | free | very-high | hard | launch-week | up |
| [GitHub (repository)](https://github.com) | auto | free | very-high | easy | pre-launch | up |
| [GitHub Trending](https://github.com/trending) | human | free | very-high | hard | launch-day | up |
| [GitLab (mirror)](https://gitlab.com) | auto | free | high | easy | week-2-4 | up |
| [Stack Overflow](https://stackoverflow.com) | human | free | very-high | hard | ongoing | up |
| [DEV Community (dev.to)](https://dev.to) | human | free | medium | easy | launch-week | up |
| [Hashnode](https://hashnode.com) | human | free | medium | easy | launch-week | up |
| [Medium](https://medium.com) | human | freemium | very-high | easy | week-2-4 | up |
| [daily.dev](https://daily.dev) | human | free | high | medium | launch-week | up |
| [Lobsters](https://lobste.rs) | human | free | medium | hard | launch-week | up |
| [Changelog News](https://changelog.com/news) | assisted | free | high | medium | launch-week | up |
| [Reddit r/programming](https://www.reddit.com/r/programming/) | human | free | high | hard | when-eligible | up |
| [Reddit r/webdev](https://www.reddit.com/r/webdev/) | human | free | medium | medium | launch-week | up |
| [Reddit r/selfhosted](https://www.reddit.com/r/selfhosted/) | human | free | high | medium | launch-week | up |
| [Reddit r/opensource](https://www.reddit.com/r/opensource/) | human | free | medium | medium | launch-week | up |
| [Reddit r/devops](https://www.reddit.com/r/devops/) | human | free | medium | hard | when-eligible | up |
| [Reddit r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/) | human | free | high | medium | launch-week | up |
| [Reddit r/homelab](https://www.reddit.com/r/homelab/) | human | free | high | medium | when-eligible | up |
| [CodePen](https://codepen.io) | assisted | freemium | medium | easy | week-2-4 | up |
| [JSFiddle](https://jsfiddle.net) | assisted | free | medium | easy | week-2-4 | up |
| [Hugging Face Spaces](https://huggingface.co/spaces) | auto | freemium | very-high | medium | launch-week | up |

## Platforms

### Hacker News (Show HN)

- id: `hacker-news`
- site: https://news.ycombinator.com | submit: https://news.ycombinator.com/submit
- method: community-post | automation: human | cost: free | link: nofollow (reported), verify on the live listing | traffic: very-high | difficulty: hard | when: launch-week
- best for: dev-tools, oss, technical, ai
- needs: Personal account; something people can try right now (no signup wall, no landing-page-only)
- how: Title it "Show HN: <name> - <what it does in plain words>". Post on a weekday morning US Eastern and stay in the comments for hours. Write like an engineer: technical detail, honest limits, no marketing words. Expect a critical top comment and answer it calmly. Never ask anyone for upvotes; vote rings get the post killed.
- status: up (checked 2026-11-22)

### GitHub (repository)

- id: `github`
- site: https://github.com
- method: registry-publish | automation: auto | cost: free | link: dofollow (reported), verify on the live listing | traffic: very-high | difficulty: easy | when: pre-launch
- best for: dev-tools, oss, api
- needs: Public repository; README, license, topics
- how: Open-source the product or a useful companion tool. Strong README (one-line pitch, GIF, quick start), license, topics and a website link. Stars and forks are social proof that other platforms read.
- status: up (checked 2026-11-22)

### GitHub Trending

- id: `github-trending`
- site: https://github.com/trending
- method: none | automation: human | cost: free | link: dofollow (reported), verify on the live listing | traffic: very-high | difficulty: hard | when: launch-day
- best for: oss, dev-tools
- needs: Organic star velocity; cannot be submitted to
- how: Not a submission target. A repository trends when it gains stars quickly, usually right after an HN or Reddit post. Never buy stars or use star-exchange schemes.
- status: up (checked 2026-11-22)

### GitLab (mirror)

- id: `gitlab`
- site: https://gitlab.com
- method: registry-publish | automation: auto | cost: free | link: dofollow (reported), verify on the live listing | traffic: high | difficulty: easy | when: week-2-4
- best for: oss, dev-tools
- needs: GitLab account; mirror setup
- how: Mirror the repository to reach developers who live on GitLab. Low effort once mirroring is configured.
- status: up (checked 2026-11-22)

### Stack Overflow

- id: `stack-overflow`
- site: https://stackoverflow.com
- method: community-post | automation: human | cost: free | link: nofollow (reported), verify on the live listing | traffic: very-high | difficulty: hard | when: ongoing
- best for: dev-tools, api
- needs: Reputation earned by genuine answers
- how: Answer real questions in the product's area. Mention the tool only when it truly answers the question, and disclose affiliation as the site requires.
- status: up (blocks automated clients) (checked 2026-11-22)

### DEV Community (dev.to)

- id: `dev-to`
- site: https://dev.to | submit: https://dev.to/new
- method: article | automation: human | cost: free | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: launch-week
- best for: dev-tools, oss, api
- needs: Account; technical article
- how: Publish a tutorial that solves a real problem, with the product as the natural tool. Set the canonical URL to the original post on your own blog.
- status: up (checked 2026-11-22)

### Hashnode

- id: `hashnode`
- site: https://hashnode.com
- method: article | automation: human | cost: free | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: launch-week
- best for: dev-tools, oss
- needs: Account; technical article
- how: Developer blogging with fast indexing. Cross-post technical articles with a canonical URL; consistency builds search traffic over months.
- status: up (checked 2026-11-22)

### Medium

- id: `medium`
- site: https://medium.com
- method: article | automation: human | cost: freemium | link: nofollow (reported), verify on the live listing | traffic: very-high | difficulty: easy | when: week-2-4
- best for: any
- needs: Account; publication submissions optional
- how: Cross-post articles with the canonical link set to your blog. Submitting to an established publication beats posting alone.
- status: up (blocks automated clients) (checked 2026-11-22)

### daily.dev

- id: `daily-dev`
- site: https://daily.dev
- method: community-post | automation: human | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: launch-week
- best for: dev-tools, oss
- needs: Account; post through a relevant squad or as a blog source
- how: Developer news feed. Share the launch article in a matching squad; blogs can apply to become a source.
- status: up (checked 2026-11-22)

### Lobsters

- id: `lobsters`
- site: https://lobste.rs
- method: community-post | automation: human | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: hard | when: launch-week
- best for: dev-tools, oss, technical
- needs: Invite-only account; self-promotion must stay a small share of activity
- how: Small, technical community. Use the "show" tag for your own work, and only if you take part in other discussions too.
- status: up (checked 2026-11-22)

### Changelog News

- id: `changelog-news`
- site: https://changelog.com/news
- method: editorial-pitch | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: launch-week
- best for: dev-tools, oss
- needs: Open-source or developer news worth sharing
- how: Developer news and podcast network that takes submissions. Send the repository and one sentence on why developers should care.
- status: up (checked 2026-11-22)

### Reddit r/programming

- id: `reddit-programming`
- site: https://www.reddit.com/r/programming/
- method: community-post | automation: human | cost: free | link: nofollow (reported), verify on the live listing | traffic: high | difficulty: hard | when: when-eligible
- best for: dev-tools
- needs: Personal account; strict no-promotion culture
- how: Only technical articles survive. Share a deep engineering write-up; product links alone get removed.
- status: up (checked 2026-11-22)

### Reddit r/webdev

- id: `reddit-webdev`
- site: https://www.reddit.com/r/webdev/
- method: community-post | automation: human | cost: free | link: nofollow (reported), verify on the live listing | traffic: medium | difficulty: medium | when: launch-week
- best for: dev-tools, web-tools
- needs: Personal account; showoff rules
- how: Use the designated showcase days or threads. Tutorials that show the tool in context work best.
- status: up (checked 2026-11-22)

### Reddit r/selfhosted

- id: `reddit-selfhosted`
- site: https://www.reddit.com/r/selfhosted/
- method: community-post | automation: human | cost: free | link: nofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: launch-week
- best for: self-hosted, oss
- needs: Personal account; real self-hostable release (Docker image, docs)
- how: Very active audience for self-hostable open-source software. Show the docker compose quick start, the license and what is free versus paid. Answer every comment.
- status: up (checked 2026-11-22)

### Reddit r/opensource

- id: `reddit-opensource`
- site: https://www.reddit.com/r/opensource/
- method: community-post | automation: human | cost: free | link: nofollow (reported), verify on the live listing | traffic: medium | difficulty: medium | when: launch-week
- best for: oss
- needs: Personal account; OSI-approved license
- how: Announce real open-source releases. Be clear about license and any paid tiers.
- status: up (checked 2026-11-22)

### Reddit r/devops

- id: `reddit-devops`
- site: https://www.reddit.com/r/devops/
- method: community-post | automation: human | cost: free | link: nofollow (reported), verify on the live listing | traffic: medium | difficulty: hard | when: when-eligible
- best for: dev-tools, infra
- needs: Personal account; check promo rules
- how: Practitioner audience that dislikes vendor posts. Lead with a technical write-up or a real problem solved.
- status: up (checked 2026-11-22)

### Reddit r/LocalLLaMA

- id: `reddit-localllama`
- site: https://www.reddit.com/r/LocalLLaMA/
- method: community-post | automation: human | cost: free | link: nofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: launch-week
- best for: ai, oss
- needs: Personal account; local or open-model AI tool
- how: Large audience for local and open-model AI tooling. Benchmarks, reproducible setups and open code get traction; closed SaaS pitches do not.
- status: up (checked 2026-11-22)

### Reddit r/homelab

- id: `reddit-homelab`
- site: https://www.reddit.com/r/homelab/
- method: community-post | automation: human | cost: free | link: nofollow (reported), verify on the live listing | traffic: high | difficulty: medium | when: when-eligible
- best for: self-hosted, infra
- needs: Personal account; check self-promotion rules
- how: Home-infrastructure enthusiasts. Show a real setup that uses the tool; plain product posts are removed.
- status: up (checked 2026-11-22)

### CodePen

- id: `codepen`
- site: https://codepen.io
- method: registry-publish | automation: assisted | cost: freemium | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: week-2-4
- best for: dev-tools, frontend
- needs: Account; frontend demo
- how: Publish live demos of frontend libraries or widgets with a link back to the docs.
- status: up (blocks automated clients) (checked 2026-11-22)

### JSFiddle

- id: `jsfiddle`
- site: https://jsfiddle.net
- method: registry-publish | automation: assisted | cost: free | link: dofollow (reported), verify on the live listing | traffic: medium | difficulty: easy | when: week-2-4
- best for: dev-tools, frontend
- needs: Account; JavaScript demo
- how: Shareable live demo of a JavaScript library; link it from the README.
- status: up (checked 2026-11-22)

### Hugging Face Spaces

- id: `hugging-face-spaces`
- site: https://huggingface.co/spaces
- method: registry-publish | automation: auto | cost: freemium | link: unknown, verify on the live listing | traffic: very-high | difficulty: medium | when: launch-week
- best for: ai, oss
- needs: Account; runnable demo (Gradio, Streamlit, Docker)
- how: Host a live demo of an AI model or tool. Spaces that work instantly get shared and can trend on the site.
- status: up (checked 2026-11-22)
