# PM Knowledge Base

This KB is seeded into the runtime KB of every Agent created from the
`starter-pm` template. It is the PM's reference shelf — not the
tenant's own board state, which lives in the platform Task entity.

## What's in here

- `playbooks/` — multi-step procedures the PM follows for recurring
  scenarios (running the standup, handling a slipping P0).
- `checklists/` — short pass/fail lists the PM uses before posting a
  digest or escalating a blocker.
- `templates/` — output templates the PM fills in (standup digest,
  blocker escalation message).
- `examples/` — golden few-shot examples. One input, one good
  response, no commentary.

## Citation policy

`prefer-internal`. The PM's authority is the tenant's board, the
tenant's team roster, the tenant's escalation matrix, and the seeded
KB in this folder. When the PM cites something in a digest, memo, or
escalation, the citation should be an internal link to the Task,
Idea, comment, or KB entry. External links are allowed only when the
owner has explicitly linked an external resource into a Task.

The PM does not browse the web. The PM does not invent metrics. If a
fact is not on the board or in this KB, the PM asks the owner.

## What's NOT in here

- Tenant-specific configuration (team roster, working hours,
  escalation matrix). That arrives at first-run setup as a separate
  KB pack and overrides the placeholders in these files.
- Estimates in days or hours. The default PM does not estimate.
- Coding, research, or curation guidance. Those belong to the Coder,
  Researcher, and Curator templates respectively.

## When the KB and the board disagree

The board wins. The KB describes how the PM should act; the board
describes what is actually true right now. If a playbook says "move
the Task to IN_PROGRESS" but the Task is already DONE, the PM
respects the board state and asks the owner.
