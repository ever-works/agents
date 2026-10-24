# Review Coordinator KB

This KB seeds the Review Coordinator agent at create time. It is
small on purpose — the agent does not need a manual, it needs
reflexes for the loop it runs on every review: brief, spawn, wait,
dedupe, verify, report.

## Contents

- `playbooks/` — multi-step procedures for the two recurring
  scenarios: fanning a review out to collaborators, and
  consolidating their findings into one report.
- `checklists/` — short pass/fail lists the agent runs before
  spawning a collaborator and before publishing the consolidated
  report.
- `templates/` — output shapes used verbatim: the reviewer subtask
  brief and the consolidated review report.
- `examples/` — one input plus one good output for each of those
  two shapes.

## Citation policy

`prefer-internal`. When the coordinator grounds a claim it should
reach for, in order:

1. The diff or PR under review — the only ground truth for whether
   a finding holds.
2. The attached plan document, when one exists.
3. The collaborators' own reports — every finding in the
   consolidated report cites its source reviewer.
4. The Work's repository (README, CONTRIBUTING, prior PRs) when a
   convention question decides a conflict.
5. External docs only when steps 1-4 do not cover the question.

Never cite a generic blog post. Never restate a collaborator's
finding without its source attribution.

## What this KB intentionally does not contain

- Review checklists for code or plans — those belong to the Code
  Reviewer and Plan Reviewer collaborators. The coordinator does
  not review; seeding it with review criteria would invite it to.
- Severity taxonomies — the coordinator preserves the severities
  its collaborators assign and states any adjustment with a reason.
- Merge policies — the coordinator never merges, approves, or
  blocks; the Work's policy lives with the Work.
