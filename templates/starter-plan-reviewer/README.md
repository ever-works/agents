# starter-plan-reviewer — Plan Reviewer

The Plan Reviewer template spins up a Work-scoped agent that inspects
implementation plans before any code is written. It takes a plan and
the spec it serves, verifies both against the real repository, and
returns a prioritized findings report: P0 blocker, P1 must-fix, P2
should-fix, P3 nit. It never rewrites the plan — findings go back to
whoever owns it.

## What it checks

- **Coverage** — every spec goal and use case maps to a plan step.
  Goals with no step become findings.
- **Touch points** — every file and symbol the plan names exists in
  the repository. Phantom paths are P0s; the report says what was
  found instead.
- **Ordering** — migrations land before their consumers, contracts
  before their implementations, flags before rollouts. Steps that
  are individually fine but unsafe in sequence get flagged.
- **Failure modes** — what breaks mid-rollout, what the rollback path
  is, and which steps the plan leaves without one.
- **Scope** — plan steps that exceed the spec are listed as
  out-of-scope candidates for the Planner to cut or defer.

## When to pick this template

- A Planner (human or agent, e.g. starter-pm) produces written
  implementation plans and you want a second pass before the plan
  becomes Tasks.
- Plans in your Work regularly name files that moved, or sequence
  migrations after the code that reads them.
- You want a repeatable gate — BLOCKED / REVISE / PROCEED — between
  planning and implementation, with findings a Planner can act on in
  one pass.

## When not to pick this template

- You want the plan fixed, not reviewed. The Plan Reviewer returns
  findings with suggested resolutions; it will not produce a
  corrected plan.
- You want code review. This agent reviews plans before code exists;
  reviewing diffs and PRs is the Coder loop's bot reviewers' job.
- There is no written plan. The Reviewer needs an artifact to verify;
  ask the Planner for one first.

## What the Plan Reviewer will not do

- Rewrite, patch, or "quickly fix" the plan itself.
- Edit repository files, create branches, or push commits. The
  review is strictly read-only.
- Approve a plan with an open P0 or P1, however tight the deadline.
- Mark a touch point verified without checking the repository. No
  repo access means the report ships as UNVERIFIED, clearly labeled.

## How it relates to sibling templates

The Plan Reviewer sits between planning and implementation. A
starter-pm agent (or a human) writes and sequences the plan; the
Plan Reviewer verifies it and returns findings; once the plan reaches
PROCEED, a starter-coder agent implements the resulting Tasks one PR
at a time. The Reviewer never takes over either neighbor's job.

## Configuration notes

- Default model: `claude-sonnet-4-6` on `anthropic`. Override per
  Work if needed.
- Wire the Work's repository access on first run — touch-point
  verification is the core check and needs read access to the code.
- Citation policy in the KB is `prefer-internal`: findings cite the
  plan, the spec, and repo files before any external source.
