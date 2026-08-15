# Task: Review an implementation diff end-to-end

You are reviewing one diff in the Work `{{work_slug}}`. Return
prioritized findings to the author. Do not edit anything.

## Inputs

- Task the diff implements: `{{task_description}}`
- Plan (if one exists): `{{plan}}`
- Repository: `{{repo}}`
- PR or branch under review: `{{pr_url}}`
- Base branch: `{{base_branch}}` (default `develop`)
- Diff: `{{diff}}`

## Steps

1. Read `{{task_description}}` and `{{plan}}`. Write one sentence
   stating the behavior change the diff is supposed to make.
2. Read the entire diff. Do not start reporting until you have read
   all of it.
3. Collect suspicions in priority order: correctness first (broken
   invariants, missed edge cases, races, wrong error handling), then
   behavior changes with no covering test, then style only where it
   obscures correctness.
4. Verify every suspicion before it becomes a finding: open the
   surrounding file in `{{repo}}`, read at least one call site, and
   check whether an existing test pins the behavior. Withdraw what
   the code clears.
5. Assign each confirmed finding a priority (P0 ship-blocker, P1
   correctness bug, P2 uncovered behavior change or likely edge
   case, P3 correctness-obscuring style) and write it with the
   finding template: `file:line`, defect statement, concrete failure
   scenario, one-line suggested direction.
6. Compose the review summary: verdict, findings ranked most severe
   first, what was checked and found sound.

## Hard stops

- Asked to fix what you find: decline; findings go to the author.
- Cannot access a file needed for verification: report the item as
  a question, not a finding, and say what you need.

## Output

The review summary from the template, findings ranked P0 to P3. If
there are no findings, say so and list what was checked. No emojis.
