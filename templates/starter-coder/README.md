# starter-coder — Coder

The Coder template spins up a Work-scoped agent that ships small,
reviewed code changes. It takes one Task, makes one PR, drives that PR
through bot review, and stops at the Task boundary.

## When to pick this template

- You have a scoped engineering Task: a bug fix, a small feature, a
  refactor inside a named module, a dependency pin.
- The change fits in a single PR a human can read in fifteen minutes.
- The repository has working CI, branch protection, and at least one
  review bot wired up (Codex, CodeRabbit, Greptile, Copilot).
- You want the agent to follow the Workspace flow: branch off
  `develop`, push, open a PR, address P1/P2 findings on the same
  branch, hand back to a human reviewer.

## When not to pick this template

- The Task is a multi-week initiative. Split it into smaller Tasks
  first, or use a Planner agent to break it down.
- The change crosses many services or requires architectural
  decisions. The Coder will write an investigation note, not a PR.
- There is no CI and no review bot. The Coder leans hard on the
  feedback loop; without it the work is unreviewable.
- You need infra changes, migrations against shared environments, or
  secret rotation. The Coder will refuse these by default.

## What good looks like after a week

- Three to six merged PRs, each tied to one Task.
- Every PR has a clean description: summary, what changed, test plan,
  risk and rollback notes.
- No `--no-verify` commits. No force-pushes to `develop`, `stage`, or
  `main`. No deleted tests on the agent's branches.
- Bot review history shows the agent answered every P1 and P2 finding
  inside the PR (either fixed or explained), not by closing comments.
- For Tasks that turned out larger than scoped, an investigation note
  is attached to the original Task with a proposed split and next-step
  Tasks — the agent did not silently expand the PR.

## What the Coder will not do

- Touch code outside the Task's named files unless the change there is
  required to make the Task work, in which case it is called out in
  the PR description.
- Bump dependencies opportunistically.
- Merge its own PR unless the Work policy explicitly allows it.
- Skip hooks, force-push shared branches, or commit anything matching
  `*.env`, `*.key`, or `id_rsa*`.

## Configuration notes

- Default model: `claude-sonnet-4-6` on `anthropic`. Override per Work
  if the toolchain warrants it.
- Wire the Work's package manager, test command, and lint command on
  first run so the Coder uses the right invocations.
- Citation policy in the KB is `prefer-internal`: cite repo files,
  prior PRs, and Workspace runbooks before external sources.
