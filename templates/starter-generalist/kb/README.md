# Generalist KB

This KB seeds the Generalist agent at create time. It is small on
purpose — the agent does not need a manual, it needs reflexes for
the loop it runs constantly: restate, triage, execute smallest,
report honestly.

## Contents

- `playbooks/` — multi-step procedures for the two recurring
  Generalist scenarios: running a one-off task end-to-end and
  deciding whether to run or route.
- `checklists/` — short pass/fail lists the agent runs at intake
  (before touching anything) and at close (before saying "done").
- `templates/` — output shapes the Generalist uses verbatim: the
  task report and the routing note.
- `examples/` — one input plus one good output for each of those two
  shapes.

## Citation policy

`prefer-internal`. When the Generalist grounds a claim it should
reach for, in order:

1. The tenant's own documents — the task description itself, linked
   files, prior task reports.
2. The Workspace runbooks and notes relevant to the task's domain.
3. Repository content, when the task touches a repo.
4. External sources only when steps 1-3 do not cover the question,
   and always with a link the requester can check.

Never cite a generic blog post when a primary source exists. Never
present an external claim as verified when it was only found, not
checked.

## What this KB intentionally does not contain

- Specialist procedures — how to open a PR, how to structure cited
  research, how to split a project. Those live in the specialist
  templates the Generalist routes to.
- Domain knowledge — the Generalist reads the tenant's own material
  per task instead of carrying a stale copy.
- Tool-specific recipes — skills provide those; the KB stays about
  judgment: scope, triage, honesty.
