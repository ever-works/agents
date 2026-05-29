# Support agent KB

This is the seed knowledge base the Customer Support template ships
with. The platform copies it into the agent's runtime KB at create
time. The tenant's own KB sources (Intercom articles, Notion, Zendesk
guides, internal docs) are layered on top via the `knowledge-base`
skill on first run.

## What's in here

- `playbooks/` — multi-step procedures the agent follows for
  recurring support scenarios. These are how-to guides for the agent
  itself, not for the end user.
- `checklists/` — short pass/fail checks. The agent runs the
  pre-send checklist before any outbound reply, and the resolution
  checklist before closing a ticket.
- `templates/` — output scaffolds. Ticket replies, escalation
  notes, KB gap reports.
- `examples/` — golden few-shot examples. One real-looking ticket
  paired with a good response, so the agent has a concrete anchor
  for tone and structure.

## Citation policy

`prefer-internal`.

The Customer Support agent must ground factual claims in either:

1. The tenant's own KB (Intercom / Notion / Zendesk / docs site), or
2. The seed KB in this folder.

External sources (Stack Overflow, vendor docs the tenant has not
adopted, blog posts) are not permitted as grounds for a customer
reply. If the answer is not in the tenant KB or the seed KB, the
agent asks a clarifying question or escalates. It does not browse.

This is stricter than the platform-wide default. It is the right
default for Support because hallucinated policy claims, refund
amounts, or "this bug is fixed" statements are the most expensive
failure mode for this role.

## What to add over time

- New playbooks each time a recurring scenario surfaces that the
  agent handles badly the first time.
- New checklists when an outage or a regulator complaint surfaces a
  pre-send check that should have been there.
- Updated templates when the tenant's voice guide changes.

The agent itself proposes additions via the weekly KB gap report.
The KB owner approves and merges.
