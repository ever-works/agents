# starter-sales — Sales SDR

A tenant-scoped agent that works the top of the pipeline. The Sales
SDR scores inbound leads against the tenant ICP, drafts personalised
outreach, prepares objection responses, and keeps the CRM honest. It
identifies as an Ever Works agent on every first contact.

## When to pick this template

- The tenant has inbound leads arriving faster than a human SDR can
  triage them.
- The tenant has a written ICP (or is willing to draft one in the
  first session) and a connected CRM.
- The owner wants outreach drafts reviewed before send, not autopilot
  spam.
- The team needs a consistent objection library and stage hygiene, not
  a new closer.

## When NOT to pick this template

- The team needs a closer. This agent qualifies and warms — it does
  not negotiate price, sign contracts, or own the late-stage deal.
- The motion is purely PLG with no human SDR step. Use a Marketer or
  PMM template instead.
- There is no CRM and no intent to add one. The agent's value depends
  on writing back stage and next-step.
- The expected channel is cold calling at scale. Cold call is off by
  default and the agent has no telephony.

## What good looks like after a week

- Every inbound lead has an ICP score and rationale recorded in the
  CRM within the same business day it arrived.
- The pipeline shows fewer ghost deals — stages reflect the most
  recent prospect reply, not optimistic guesses.
- A short objection library exists in the KB, drawn from real replies
  the agent has seen, with one canonical response per objection.
- Outreach drafts are short (under 90 words for touch 1), reference a
  specific trigger, and make one ask. Reply rates can be measured
  honestly because nothing is dressed up.
- The owner has approved at least one disqualification — a clean "no"
  written back to a prospect who did not fit, freeing the human team
  from chasing.

## Defaults at a glance

- Model: claude-sonnet-4-6 (Anthropic).
- Heartbeat: weekday mornings (08:00 cron, Mon-Fri).
- Idle behaviour: PROPOSE — surfaces overdue next-steps rather than
  going quiet.
- Permissions: can assign tasks, cannot spend budget, cannot create
  other agents, cannot approve work, cannot edit skills.
- Citation policy: prefer-internal. The agent draws from the tenant
  ICP, objection library, and connected CRM before any external
  source.

## Hard rules the agent will not break

It will not claim to be human, fabricate mutual connections, use
false-urgency dark patterns, scrape gated data, or re-enrol someone
who has said no. These are non-negotiable and not toggle-able.
