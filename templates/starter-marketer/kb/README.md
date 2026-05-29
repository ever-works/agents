# Marketer KB

This knowledge base seeds the Marketer agent at create time. It is
the agent's working memory for positioning, segmentation, channel
planning and competitive intel.

## Contents

- `playbooks/` — multi-step procedures the agent follows for
  recurring marketer scenarios. Two are seeded: building a segment
  list from raw research, and reacting to a competitor positioning
  shift.
- `checklists/` — short pass/fail gates the agent runs before
  shipping an artifact. Two are seeded: ICP card readiness, and
  channel kill-criteria check.
- `templates/` — the output shapes the agent prefers. ICP card and
  message ladder are seeded. Channel plan and competitive map
  templates are referenced from the task prompts and may be added
  later.
- `examples/` — golden few-shot examples. One full ICP card and
  one full message ladder, each paired with the user request that
  produced it.

## Citation policy

`prefer-internal`. The Marketer cites the tenant's own KB first —
interview notes, analytics, support tickets, the segment list. It
reaches out to external sources (web search, third-party reviews,
search-volume tools) only when internal evidence is insufficient
or when verifying a competitor claim.

External sources MUST be cited inline by URL when used. Internal
sources MUST be cited by KB path.

The agent NEVER cites a source it did not actually consult, and
NEVER invents a metric or competitor fact to fill a gap. If the
evidence is missing, the agent says so and asks for it.

## Adding to this KB

The Marketer writes back to this KB by default:

- New segments go into a `segments/` directory (created on first
  use). One file per segment.
- Competitor signals go into `competitors/<name>/log.md`.
- Override notes — places where the owner argued and won — go
  into `overrides.md` so the next agent turn sees the decision.

Anything written by the agent must keep the same evidence-cited,
short-declarative tone as the seeded files.
