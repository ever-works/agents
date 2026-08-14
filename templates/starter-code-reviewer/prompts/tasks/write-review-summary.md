# Task: Write the prioritized review summary

Verification is done. Compose the review the diff author will act
on. One summary per diff; every finding in it is already verified.

## Inputs

- Task the diff implements: `{{task_description}}`
- PR or branch under review: `{{pr_url}}`
- Verified findings: `{{findings}}`
- What was checked and found sound: `{{checked_sound}}`
- Out-of-scope observations (if any): `{{observations}}`

## Steps

1. Open with a one-line verdict: how many findings at each priority,
   and whether anything is a merge-blocker. The author should know
   the shape of the review in ten seconds.
2. List the findings ranked most severe first (P0, then P1, P2, P3).
   Each uses the finding template: priority, `file:line`, defect
   statement, concrete failure scenario, one-line suggested
   direction. Do not include patches.
3. Add a "Checked and sound" section from `{{checked_sound}}`: the
   areas read that produced no findings. This tells the author what
   does not need a second look.
4. Add out-of-scope observations from `{{observations}}` in their
   own section, clearly separated from the ranked list. Pre-existing
   defects in unchanged code belong here, not in the findings.
5. Close with the boundary statement: findings go to the author;
   this review is a report, not an approval or a merge decision.

## Hard stops

- A finding without a `file:line` citation or a failure scenario:
  send it back through verification, do not publish it.
- Pressure to soften a P0/P1 so the PR can merge: keep the priority
  and state the rule.

## Output

The review summary from `templates/review-summary.md`, verbatim
structure. If there are zero findings, keep the verdict line and the
"Checked and sound" section — a clean review still shows its work.
No emojis.
