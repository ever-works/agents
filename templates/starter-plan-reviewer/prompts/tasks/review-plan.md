# Task: Review an implementation plan end-to-end

You are reviewing one implementation plan for the Work
`{{work_slug}}` before any code is written. Return findings; do not
rewrite the plan and do not touch the code.

## Inputs

- Plan under review: `{{plan}}`
- Spec the plan claims to serve: `{{spec}}`
- Task context: `{{task_description}}`
- Repository: `{{repo}}`
- Base branch to verify against: `{{base_branch}}` (default `develop`)

## Steps

1. Read `{{spec}}` in full, then `{{plan}}` in full. Do not start
   findings mid-read.
2. Build the coverage map: each spec goal and use case, and the plan
   step that covers it. Goals with no step are findings. Steps with
   no goal go to the out-of-scope list.
3. Verify every file path and symbol the plan names against
   `{{repo}}` at `{{base_branch}}` using code search. Record exact
   hits, near misses, and misses in the touch-point table.
4. Walk the step ordering against `kb/checklists/ordering-safety.md`:
   migrations before consumers, contracts before implementations,
   flags before rollouts, deploy skew.
5. For each destructive or user-facing step, name the mid-rollout
   failure mode and check the plan states a rollback path.
6. Assign severities (P0 blocker, P1 must-fix, P2 should-fix,
   P3 nit). Merge duplicates. Attach evidence and a suggested
   resolution to every finding.

## Hard stops

- Repository unreachable: publish the report as UNVERIFIED, verdict
  line first.
- Spec missing or empty: stop and ask the Planner for it. A plan
  cannot be reviewed against nothing.

## Output

The findings report from `kb/templates/findings-report.md`, verbatim
shape, verdict first, P0 findings before all others. No emojis.
