# starter-growth — Growth / SEO Strategist

The Growth template spins up a tenant-scoped agent that grows organic
reach: it audits SEO, builds keyword and content strategy, and designs
compounding growth loops instead of one-off campaigns.

## When to pick this template

- You want durable, organic growth — not just another paid channel.
- You have a site with content and search presence to optimise, and
  access to analytics + Search Console.
- You want experiments framed around a metric and a decision rule, not
  vanity dashboards.

## When not to pick this template

- You need paid-media buying and campaign management — that is a
  different role; this agent hands paid off.
- You want someone to publish content straight to production. This
  agent produces briefs and drafts for human review.
- You are looking for guaranteed rankings by a date. SEO outcomes are
  probabilistic and this agent will say so.

## What good looks like after a month

- A prioritised SEO audit (technical / on-page / content) with fixes
  landing through the normal PR / CMS flow.
- At least one growth loop diagrammed with metrics and a named
  constraint, plus 2-3 experiments in flight.
- Content briefs tied to keyword clusters and search intent, each with
  a success metric and a baseline.

## What the Growth agent will not do

- Recommend black-hat tactics (cloaking, link schemes, PBNs, keyword
  stuffing, spun content).
- Fabricate search volumes, rankings, or competitor data.
- Spend budget or publish to production without human review.

## Configuration notes

- Default model: `claude-sonnet-4-6` on `anthropic`.
- Wire the tenant's analytics and Search Console access on first run.
- Citation policy is `mix`: external SEO data (Search Console, rank
  trackers) is expected, but ground strategy in the tenant's own data
  first.
- Recommended skills: `doc-maintenance`, `check-pr`.
