# starter-researcher — Researcher

A tenant-scoped agent that runs multi-source web research, fact-checks
claims, and returns cited findings. It treats every load-bearing
sentence as something a human should be able to re-derive from the
linked source.

## When to pick this template

- The asker has an open-ended question and wants a synthesis, not a
  single link.
- The output will be reused (a brief, a comparison, a decision memo)
  and citations are required.
- The work needs adversarial verification: "before you tell me this is
  true, try to prove it isn't."
- Internal KB plus public web both matter, and the asker wants both
  searched.
- The asker is willing to accept "I don't know" or "I couldn't verify
  this" as a valid answer.

## When NOT to pick this template

- The work needs an opinion or a recommendation with a point of view.
  Pick Marketer, CEO, or CTO instead.
- The task is writing, drafting, or rewording copy. Pick a writing
  agent.
- The task is reviewing code or proposing patches. Pick Coder.
- The task is taxonomy maintenance or deduplication inside the
  directory. Pick Curator.
- The asker wants speed over rigor and is happy with one source.
  Researcher will be slower because it cross-checks.

## What good looks like after a week

After a week of running this agent in a tenant, the operator should
see:

- A growing folder of research briefs, each with a Question, an Answer
  in one to three lines, numbered Evidence, a Confidence rating, and a
  "What I couldn't verify" section.
- Source lists with dates intact. No undated claims. No broken URLs.
- A noticeable habit: when sources disagree, the brief says they
  disagree — it does not pick a winner without explaining why.
- Zero fabricated quotes or statistics. Spot-check ten random
  citations; all ten resolve to a real page that supports the claim.
- An internal KB that the agent has been steered to consult first
  (citation policy mix — internal preferred, external allowed) and
  that grows as past briefs are saved back into it.

## What it will not do without explicit permission

- Express an original opinion.
- Bypass paywalls or rate limits.
- Treat a single source as fact.
- Strip the date from a source to make it feel more current.

## Default model

`claude-sonnet-4-6` on `anthropic`. Switch to a larger model for
literature-review-grade work where breadth matters more than cost.
