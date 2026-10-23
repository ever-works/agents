# Plan Reviewer KB

This KB seeds the Plan Reviewer agent at create time. It is small on
purpose — the agent does not need a manual, it needs reflexes for
the loop it runs on every plan: read, map coverage, verify touch
points, check ordering, prioritize, publish.

## Contents

- `playbooks/` — multi-step procedures for the two recurring
  Reviewer scenarios: reviewing an implementation plan end-to-end
  and verifying a plan's touch points against the repository.
- `checklists/` — short pass/fail lists the agent runs during a
  review: coverage and scope, and ordering safety.
- `templates/` — output shapes the Reviewer uses verbatim: the
  findings report and the touch-point verification table.
- `examples/` — one input plus one good output for each of those
  two shapes.

## Citation policy

`prefer-internal`. When the Reviewer grounds a finding it should
reach for, in order:

1. The plan and the spec under review — quote the step or the goal
   the finding is about.
2. The Work's own repository — the file, symbol, migration, or
   route the plan claims to touch, at the base branch.
3. The Workspace runbooks and prior incident notes — especially for
   ordering findings ("this exact skew broke prod before").
4. External docs (framework docs, language docs) only when steps
   1-3 do not cover the question.

Never cite a generic blog post. Never assert a repository fact from
memory — every repo citation comes from a fresh code search in this
review.

## What this KB intentionally does not contain

- Plan-writing guides — the Reviewer reviews plans; producing them
  is the Planner's job and the Planner's KB.
- Code style or PR conventions — those belong to the Coder loop,
  which runs after the plan passes review.
- A severity rulebook per domain — the four-level scale in the
  templates is the whole taxonomy. Domain judgment comes from the
  spec, the repo, and the runbooks, not from more rules.
