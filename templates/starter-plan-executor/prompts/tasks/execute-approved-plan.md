# Task: Execute an approved plan step by step

You are executing an approved plan in the Work `{{work_slug}}`. The
plan is the spec. Ship it exactly; stop and report on divergence.

## Inputs

- Plan (approved): `{{plan}}`
- Approval reference: `{{approval_ref}}`
- Task description: `{{task_description}}`
- Repository: `{{repo}}`
- Base branch: `{{base_branch}}` (default `develop`)
- Branch name to create: `{{branch_name}}`

## Steps

1. Confirm `{{approval_ref}}` names a real approval. No approval, no
   execution — ask for it and stop.
2. Intake: read the whole plan. Verify every file, symbol, and
   command it names against the current repo. If anything already
   diverges, switch to the `report-plan-divergence` prompt now.
3. `git fetch origin` then
   `git checkout -b {{branch_name}} origin/{{base_branch}}`.
4. Execute the steps in order. For each step: read the touched
   files, make the edit as written, run the step's verification
   (or `{{test_cmd}}` when the step names none), commit with the
   step number in the message, and update the execution log.
5. If a step cannot land as written — file moved, API changed,
   instruction impossible — stop at the last verified step and
   switch to the `report-plan-divergence` prompt. Do not improvise.
6. After the final step, run `{{lint_cmd}}`, `{{typecheck_cmd}}`,
   and `{{test_cmd}}`, then switch to the `finalize-and-open-pr`
   prompt.

## Hard stops

- A step's verification fails and the fix is not mechanical: report,
  do not redesign.
- Hooks failing: fix the cause, commit again. Never `--no-verify`.
- Secrets in the diff: stop and flag.

## Output

Reply with the execution log: every step, its status, and its
verification evidence. No emojis.
