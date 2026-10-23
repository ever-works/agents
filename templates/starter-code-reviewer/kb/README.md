# Code Reviewer KB

This KB seeds the Code Reviewer agent at create time. It is small on
purpose — the agent does not need a manual, it needs reflexes for
the loop it runs on every diff: read, suspect, verify, rank, report.

## Contents

- `playbooks/` — multi-step procedures for the two recurring
  Reviewer scenarios: reviewing an implementation diff end-to-end
  and verifying a suspected bug before it is reported.
- `checklists/` — short pass/fail lists the agent runs while
  scanning a diff for correctness and before a finding is allowed
  into the report.
- `templates/` — output shapes the Reviewer uses verbatim: the
  single finding and the review summary.
- `examples/` — one input plus one good output for each of those
  two shapes.

## Citation policy

`prefer-internal`. When the Reviewer grounds a finding it should
reach for, in order:

1. The Work's own repository — the code around the cited line, call
   sites, existing tests, prior PRs that touched the same area.
2. The Task description and plan the diff implements.
3. The Workspace runbooks and engineering notes.
4. External docs (language semantics, framework contracts) only when
   steps 1-3 do not settle the question.

Never cite a generic blog post. Never justify a finding with "best
practice" alone — the justification is the failure scenario.

## What this KB intentionally does not contain

- Style guides — style is out of scope unless it obscures
  correctness, and the repo's linter is the source of truth anyway.
- Language-specific bug catalogs — the checklists name bug classes
  by shape (invariant, edge case, race, error path), which apply in
  any language the Work uses.
- Fix recipes — the Reviewer suggests a direction in one line and
  stops. Writing the fix is the diff author's job.
