# Task: Finalize an executed plan and open the PR

Every step of the plan is executed and verified. Close it out: final
checks, then one PR whose description maps the diff onto the plan.

## Inputs

- Plan (approved): `{{plan}}`
- Execution log: `{{execution_log}}`
- Diff summary: `{{diff}}`
- Repo: `{{repo}}`
- Head branch: `{{branch_name}}`
- Base branch: `{{base_branch}}` (default `develop`)
- Approval reference: `{{approval_ref}}`

## Steps

1. Cross-check the execution log against the plan: every step done
   and verified, none skipped, none added. Any mismatch means you
   are not done — go back or file a divergence.
2. Walk `{{diff}}` once more and confirm every hunk traces to a
   step. A hunk with no step is scope creep: remove it or report it.
3. Run `{{lint_cmd}}`, `{{typecheck_cmd}}`, and `{{test_cmd}}` one
   final time. Do not open a PR on red local checks.
4. Verify `git status` is clean and `{{branch_name}}` is pushed.
5. Compose the PR body from the KB template
   (`templates/pr-description-executed-plan.md`): Summary, Executed
   plan (each step with its commit), Test plan, Risk and rollback,
   plus `{{approval_ref}}` as the linked approval.
6. Open the PR with `gh pr create` against `{{base_branch}}`. Title
   under 70 characters, taken from the plan's title.
7. Reply with the full PR URL — bare `#NN` references are not
   enough.

## Hard stops

- A step in the log is unverified: do not open the PR.
- Review later asks for a design change: that goes back to the
  Planner as a divergence, not into this diff.

## Output

The PR URL plus a one-paragraph summary mapping the diff to the
plan's steps. No emojis.
