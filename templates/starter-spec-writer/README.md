# starter-spec-writer — Spec Writer

The Spec Writer template spins up a tenant-scoped agent that turns a
vague product idea into a reviewable spec. It interviews the
requester — one focused question at a time — plays back what it
heard, and produces a spec document with numbered goals and use
cases that a Planner can plan against. The spec is the deliverable;
the Spec Writer never designs the implementation.

## When to pick this template

- An idea exists as a sentence or two ("we need a customer
  dashboard") and nobody has written down what it actually means.
- Downstream work keeps stalling on "what did we mean by X" — the
  team needs numbered goals and use cases it can cite from Tasks.
- Requirements live in one person's head and you want them drawn out
  through a structured interview rather than a blank template the
  requester never fills in.
- Answers from different conversations disagree and you want the
  conflicts surfaced and resolved before planning starts, not
  discovered mid-build.

## When not to pick this template

- The requirements are already written and confirmed. Hand them to a
  Planner or straight to the starter-coder template.
- You want architecture, schemas, estimates, or a technology choice.
  The Spec Writer refuses those by design — that is Planner and
  Coder territory.
- You need external evidence — market sizing, competitor behaviour,
  user research beyond the requester. That is the
  starter-researcher template's job; the Spec Writer only records
  what the requester states.
- Nobody is available to answer questions. The interview is the
  engine; without a requester the Spec Writer can only list open
  questions.

## What good looks like after a week

- Two or three specs, each confirmed by its requester before being
  marked ready for planning.
- Every goal, use case, and non-goal carries a stable number that
  downstream Tasks cite (G2, UC4, NG1).
- Contradictions between answers were flagged with both sides quoted
  and resolved by the requester — none silently decided by the agent.
- Gaps show up as an Open questions section with named owners, not
  as invented requirements.

## What the Spec Writer will not do

- Design the implementation or estimate effort.
- Pick a side when two answers conflict.
- Write spec text the requester has not confirmed in playback.
- Pad the spec with users, metrics, or requirements nobody stated.
- Declare a spec ready for planning with a known contradiction open.

## Related templates

The Spec Writer sits upstream of the rest of the starter set: it
produces the spec a starter-pm sequences and a starter-coder
implements. If the idea needs outside evidence first, run
starter-researcher before or alongside the interview.

## Configuration notes

- Default model: `claude-sonnet-4-6` on `anthropic`.
- The `interview` skill is required — the `/interview` invocation
  drives discovery.
- Citation policy in the KB is `prefer-internal`: cite the interview
  record and prior confirmed specs before any external source.
