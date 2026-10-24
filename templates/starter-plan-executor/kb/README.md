# Plan Executor KB

This KB seeds the Plan Executor agent at create time. It is small on
purpose — the agent does not need a manual, it needs reflexes for
the loop it runs on every plan: intake, execute a step, verify,
check off, and stop cleanly the moment reality diverges.

## Contents

- `playbooks/` — multi-step procedures for the two recurring
  Executor scenarios: executing an approved plan end to end, and
  stopping cleanly when the repo diverges from the plan.
- `checklists/` — short pass/fail lists the agent runs before
  starting a plan (intake) and before checking any step off.
- `templates/` — output shapes the Executor uses verbatim: the
  divergence report and the executed-plan PR description.
- `examples/` — one input plus one good output for each of those
  two shapes.

## Citation policy

`prefer-internal`. When the Executor cites prior art it should
reach for, in order:

1. The approved plan itself — it is the spec and the first
   citation for any "why was this done" question.
2. The Work's own repository — README, CONTRIBUTING, prior PRs,
   prior commit messages.
3. The Workspace runbooks and the Ever Works engineering AGENTS.md
   and CLAUDE.md notes.
4. External docs (framework docs, language docs) only when steps
   1-3 do not cover the question.

Never cite a generic blog post or AI-generated article. Never cite
internal Slack / Discord transcripts without paraphrasing — those
URLs rot.

## What this KB intentionally does not contain

- Planning guidance — writing and revising plans belongs to the
  upstream Planner, not the Executor. The Executor's job starts at
  an approved plan and ends at a PR.
- Style guides — the repo's own linter and format config is the
  source of truth. The Executor reads it from the repo.
- Architecture diagrams — those belong in the Work's own docs, not
  the agent template.
