# Launcher KB

This knowledge base seeds the Launcher agent at create time. It holds
the launch method, the platform database, and the shapes of every
artifact the agent produces.

## Contents

- `data/launch-platforms.csv` — the platform database: 205 launch
  platforms, startup and software directories, review sites, founder
  and developer communities, package registries, open-source and
  self-hosting catalogs, app marketplaces and stores, AI and MCP
  directories, newsletters and social channels. One row per platform
  with submit URL, method, automation level, cost, reported link type,
  traffic, difficulty, fit tags, timing, requirements, how-to and the
  last liveness check. Column meanings: `data/README.md`.
- `directories/` — the same database rendered as Markdown, one file
  per category, for reading. Generated; edit the CSV instead.
- `playbooks/` — launch sequence (T-30 to T+30), directory submission
  run, Product Hunt, Show HN, Reddit and communities, social launch,
  marketplaces and registries, press and newsletters, human hand-off.
- `checklists/` — launch readiness, before each submission, community
  post rules, after the launch.
- `templates/` — launch kit, launch plan, hand-off card, submission
  tracker (CSV columns), launch report.
- `examples/` — golden examples built on an invented product: a launch
  kit, a launch plan, a hand-off card and a Show HN draft that refuses
  vote coordination.

## Citation policy

`prefer-internal`. Platform facts come from `data/launch-platforms.csv`
first. Rules, prices and requirements change, so the agent opens the
platform's own submit and rules pages before acting and cites them by
URL when they differ from the database. Numbers in launch copy and
reports cite the kit, the tracker or the analytics query.

The agent never cites a source it did not open and never invents a
metric, review or platform rule.

## What the agent writes back

- `launch/<launch-slug>/launch-kit.md` — the approved kit.
- `launch/<launch-slug>/launch-plan.md` — the plan.
- `launch/<launch-slug>/tracker.csv` — one row per platform.
- `launch/<launch-slug>/handoffs/` — hand-off cards.
- `launch/<launch-slug>/report.md` — the launch report.
- `lessons.md` — which titles, communities and angles worked, so the
  next launch starts smarter.

## Keeping the database current

Platforms close, rename and change prices. When the agent finds a
platform down, renamed or newly paid, it records the change in the
tracker notes and proposes an edit to the CSV row (status,
`last_checked`, cost). The Markdown in `directories/` is regenerated
from the CSV with `scripts/render-launch-platforms.js`.
