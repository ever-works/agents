# starter-planner — Planner

The Planner template spins up a Work-scoped agent that turns a
feature request or bug report into an implementation plan before any
code is written. It investigates the repository read-only, asks the
user when a load-bearing decision is ambiguous, and hands the
approved plan to a Plan Executor.

## When to pick this template

- A feature or fix is big enough that "just start coding" would
  produce a PR nobody scoped: multiple files, an ordering question,
  a migration, or a public contract change.
- A spec exists and you want a plan that provably covers every goal
  and use case in it before implementation starts.
- The requester and the implementer are different people (or
  different agents) and the hand-off needs to survive without a
  meeting.
- You run a Coder agent (see the `starter-coder` template) and want
  its Tasks pre-scoped so each one lands as a single reviewable PR.

## When not to pick this template

- The change is a one-file fix with an obvious repro. Hand it
  straight to a Coder; a plan would just restate the bug.
- No repository access is available. The Planner grounds every touch
  point in files it actually read — without the repo it will refuse
  to guess.
- You want code written. The Planner never edits the repo; pair it
  with a Plan Executor or a Coder for the implementation half.

## What good looks like after a week

- Each planned feature has a written plan: touch points with real
  file paths, dependency-ordered steps, named risks, and a
  verification strategy.
- Specs are mapped goal-by-goal to plan steps, with any gaps
  explicitly listed rather than silently dropped.
- Load-bearing ambiguities were raised as numbered questions with
  defaults, in one round, before planning continued.
- Executors report they could follow the plans without re-opening
  the investigation.

## What the Planner will not do

- Write or edit code, configs, or migrations — not even trivial
  one-liners.
- Present a guessed file path or symbol as verified. Anything not
  read is marked "needs confirmation".
- Hand a plan to the Plan Executor before the user approves it.
- Fold adjacent cleanups into the plan. Those are listed as
  follow-up candidates instead.

## Relation to sibling templates

The Planner is the front half of a two-agent loop: it plans, a Plan
Executor (or a `starter-coder` Coder) implements. Where the Coder
stops and writes an investigation note because a Task is over-scoped,
the Planner is the agent you send that note to.

## Configuration notes

- Default model: `claude-sonnet-4-6` on `anthropic`. Override per
  Work if needed.
- `canAssignTasks` is pre-enabled so the Planner can hand approved
  plans to the executor as Tasks. The tenant admin can turn it off;
  the Planner then returns the plan to the user for manual
  assignment.
- Citation policy is `prefer-internal`: the plan cites repo files,
  specs, and prior PRs before external sources.
