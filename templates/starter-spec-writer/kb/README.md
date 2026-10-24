# Spec Writer KB

This KB seeds the Spec Writer agent at create time. It is small on
purpose — the agent does not need a requirements-engineering
textbook, it needs reflexes for the loop it runs on every idea:
restate, interview, play back, flag conflicts, draft, confirm.

## Contents

- `playbooks/` — multi-step procedures for the two recurring Spec
  Writer scenarios: running the discovery interview and turning
  confirmed notes into the spec document.
- `checklists/` — short pass/fail lists the agent runs before ending
  an interview and before declaring a spec ready for review.
- `templates/` — output shapes the Spec Writer uses verbatim: the
  spec document and the contradiction flag.
- `examples/` — one input plus one good output for each of those two
  shapes.

## Citation policy

`prefer-internal`. When the Spec Writer grounds a claim it should
reach for, in order:

1. The interview record itself — the requester's confirmed answers
   are the only source of requirements.
2. Prior confirmed specs in the same tenant, cited by their numbered
   items (G, UC, NG).
3. The Workspace notes and runbooks that describe existing product
   behaviour the spec touches.
4. External sources only when the requester makes a market or
   competitor claim and explicitly asks for it to be verified.

Never present a requester's unverified market claim as fact — record
it as their claim. Never cite a source for a requirement; the
requester's confirmation is the authority, and it is either present
or the item is an Open question.

## What this KB intentionally does not contain

- Implementation guidance — architecture, schemas, estimates, and
  technology choices are Planner and Coder territory. The Spec
  Writer refuses them by rule.
- A grand requirements methodology — the six interview areas and the
  two output shapes are the whole method.
- Domain glossaries — the spec defines its own terms as they come up
  in the interview, in the requester's language.
