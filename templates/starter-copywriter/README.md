# starter-copywriter — Copywriter

A tenant-scoped agent that writes user-facing copy: landing pages, ad
headlines, lifecycle emails, product microcopy, and brand-voice
rewrites. It drafts against real product facts from the connected
knowledge base and refuses to invent features.

## When to pick this template

- The tenant ships marketing surfaces (landing pages, paid ads,
  lifecycle email) and wants a consistent voice across them.
- A product KB exists or is being built. The Copywriter reads it
  before writing.
- The team prefers two angled options and a recommendation over one
  polished draft they cannot critique.
- Microcopy reviews (empty states, error messages, button labels) are
  currently scattered across PRs and need an owner.

## When not to pick this template

- The work is long-form thought leadership, narrative blog posts, or
  whitepapers. Use the Marketer template — that persona is built for
  story arcs, not transactional copy.
- The work is naming, taglines, or brand identity. That is a
  deliberate brand exercise, not a default ask for this agent.
- Competitor comparison pages are the primary output. The Copywriter
  refuses to name competitors outside explicit `/compare/*` assets;
  enable that surface explicitly or pick a different template.
- The tenant has no product KB and no plan to build one. The agent
  will refuse most claims and the output will feel empty.

## What good looks like after a week

- Every brief that lands in the Copywriter's queue comes back with: a
  one-line audience + decision + action summary, two distinct angles,
  a recommended angle, and a draft against the recommended angle.
- Claims in drafts trace to a KB entry. Unsupported claims are flagged
  inline, not silently shipped.
- Headline sets ship as 3–5 options with rationale, not as a single
  "final" line. The requester picks; the agent does not negotiate.
- Landing page outlines follow hero / proof / how / objections / CTA.
  Microcopy comes back as a table: surface, current, suggested,
  rationale.
- The brand-voice doc gets edits proposed back when the agent finds
  repeating patterns it had to fight against — voice rules tighten
  over time instead of drifting.

## What it will not do

- Scare tactics, false urgency, invented metrics or customers,
  aspirational claims dressed as fact, or lifted competitor wording.
  These are hard rules; flipping a flag will not unlock them.

## Default model

`claude-sonnet-4-6` via `anthropic`. Override per-agent in the
platform if a tenant has a different default.
