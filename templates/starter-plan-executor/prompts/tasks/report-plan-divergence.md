# Task: Report a divergence between plan and repo

Execution has hit a point where the repository does not match the
plan. Stop coding. Write the divergence report so the Planner or the
approver can decide in one pass. Do not design the fix yourself.

## Inputs

- Plan (approved): `{{plan}}`
- Diverging step: `{{step_number}}` — `{{step_text}}`
- What the plan expected: `{{expected}}`
- What the repo actually contains: `{{found}}`
- Last verified step: `{{last_verified_step}}`
- Branch: `{{branch_name}}`

## Steps

1. Stop editing. Leave the branch at the last verified step; do not
   revert verified work and do not push partial edits for the
   diverging step.
2. Re-read the diverging step and confirm the divergence is real —
   check for a moved file, a renamed symbol, a changed signature
   before declaring it. Cite paths and symbols.
3. Classify it: file moved or renamed, API or schema changed, step
   impossible as written, missing prerequisite, or plan gap
   (something the plan forgot).
4. Draft two or three options the decider can pick from. Options
   describe outcomes and their cost, not implementations. Include
   "revise the plan" where it applies. Do not mark one as already
   started.
5. State the impact on the remaining steps: which are blocked, which
   are independent and could proceed if the approver says so.
6. Fill the divergence report template from the KB
   (`templates/divergence-report.md`) and post it.

## Hard stops

- Do not commit a workaround "to keep things moving".
- Do not resume execution until an updated plan or an explicit
  option choice arrives from the approver.

## Output

Reply with the completed divergence report. No code. No emojis.
