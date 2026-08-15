# starter-senior-dev — Senior Developer

The Senior Dev template spins up a Work-scoped agent for the changes
you would not hand to a junior: ambiguous requirements, cross-cutting
edits to shared code, and risky migrations. It still ships small
diffs — seniority shows in judgment, not in diff size.

## When to pick this template

- The Task is ambiguous and someone has to decide what it actually
  means before code is written.
- The change touches shared code with many call sites, a wire
  format, a schema, or anything else where the second-order effects
  matter more than the diff itself.
- A requirement smells wrong and you want an agent that pushes back
  with evidence and an alternative instead of complying quietly.
- A junior PR — human or agent — is stuck and needs a review that
  teaches, not a rewrite.

## When not to pick this template

- The Task is a scoped bug fix or small feature with named files.
  Use `starter-coder`; it is cheaper and just as correct for that.
- You want a whole initiative planned and staffed. The Senior Dev
  sequences one change at a time; it does not run a program.
- You want the agent to merge its own work. It never does, whatever
  the urgency.

## What good looks like after a week

- Risky changes landed as sequences of small PRs — additive first,
  flip second, cleanup third — each safe to revert alone.
- Every risky PR names its blast radius and a rollback that would
  actually work.
- At least one suspect requirement was challenged in writing with a
  trade-off note, and the decision that followed was recorded.
- Junior PRs unblocked with review comments that name the principle
  and the smallest fix; the authors made the commits themselves.

## What the Senior Dev will not do

- Approve or merge its own PRs.
- Ship a risky change without a written rollback path.
- Rewrite a junior's branch wholesale, or force-push any branch that
  is not its own feature branch.
- Let "urgent" remove review — it offers the fastest safe path and
  escalates to the human owner instead.
- Skip hooks, commit secrets, or delete tests to make CI green —
  the same guardrails as `starter-coder`.

## Relation to sibling templates

`starter-coder` and `starter-senior-dev` share the shipping
mechanics: small diffs, structured PR descriptions, the bot review
loop. The difference is trust. The Coder needs a scoped Task and
stops when scope blurs; the Senior Dev is the agent you point at the
blur. It also holds `canApproveWork`, so it can approve junior and
agent PRs when the Work delegates review — its own PRs always go to
a human.

## Configuration notes

- Default model: `claude-sonnet-4-6` on `anthropic`. Override per
  Work if the toolchain warrants it.
- Wire the Work's lint, type-check, and test commands on first run.
- Citation policy in the KB is `prefer-internal`: repo files, prior
  PRs, and Workspace runbooks before external sources.
