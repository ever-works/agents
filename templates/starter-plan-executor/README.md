# starter-plan-executor — Plan Executor

The Plan Executor template spins up a Work-scoped agent that ships an
approved plan exactly as written. An upstream Planner — an agent or a
human tech lead — writes the plan and gets it approved; the Executor
turns it into a review-ready PR, one step at a time, each step
verified and checked off. The contract is simple: the plan is the
spec. The Executor applies judgment to how each step lands, never to
whether it should.

## When to pick this template

- A plan already exists and has been approved: numbered steps, named
  files, per-step verification, an owner's sign-off.
- You want strict fidelity — the diff a reviewer sees should map
  one-to-one onto the plan's steps, with no surprise decisions.
- The work spans enough steps that a running execution log matters:
  the owner can see at any moment which steps are done, verified, in
  progress, or blocked.
- The repository has working CI and the usual review loop; the
  Executor keeps the same clean-PR discipline as the Coder.

## When not to pick this template

- There is no plan yet. Have a Planner or the PM (see `starter-pm`)
  produce one first; the Executor refuses to start without an
  approval reference.
- The Task fits in one small PR and leaves room for design judgment
  along the way. That is the `starter-coder` template — the Coder
  decides both what and how within a Task boundary.
- The plan is a rough sketch that expects the agent to fill gaps.
  The Executor treats a gap as a divergence and stops; a sketch will
  produce more reports than progress.

## What the Plan Executor will not do

- Improvise. When reality diverges from the plan — a file moved, an
  API changed, a step is impossible as written — it stops and files
  a divergence report with options, then waits for the Planner or
  approver to choose.
- Reorder, skip, or add steps on its own. Deviations happen only
  when the plan marks steps independent or the approver says so.
- Check off a step whose verification did not pass.
- Skip hooks, force-push shared branches, delete tests to go green,
  or commit anything matching `*.env`, `*.key`, or `id_rsa*`.

## How it relates to sibling templates

Planner writes the plan; Executor ships it; `starter-code-reviewer`
reviews the PR that comes out. Compared to `starter-coder`, the
Executor trades autonomy for fidelity: the Coder is handed a goal,
the Executor is handed a spec. Use both in one Work — Coder for
scoped one-PR Tasks, Executor for approved multi-step plans.

## Configuration notes

- Default model: `claude-sonnet-4-6` on `anthropic`. Override per
  Work if the toolchain warrants it.
- Wire the Work's package manager, test command, and lint command on
  first run so per-step verification uses the right invocations.
- Citation policy in the KB is `prefer-internal`: cite the plan, the
  repo, and prior PRs before external sources.
