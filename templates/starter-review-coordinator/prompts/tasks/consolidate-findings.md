# Task: Consolidate collaborator findings into one report

Every collaborator has returned. Merge their findings into one
consolidated, prioritized report. Add nothing of your own.

## Inputs

- Review request: `{{task_description}}`
- Repository: `{{repo}}`
- Diff under review: `{{diff}}`
- Collaborator reports: `{{findings}}`
- Coverage notes (missed deadlines, failed runs): `{{coverage_notes}}`

## Steps

1. Normalize every finding to one line: file, location, claim,
   severity, source reviewer.
2. Dedupe. Two findings with the same root cause are one finding
   with two sources, even when the wording differs. Keep every
   source name.
3. Rank corroboration. A finding hit independently by two reviewers
   outranks a solo finding at the same severity.
4. Verify. For each solo high-severity or disputed finding, check
   the claim against `{{diff}}` — spot-check with code-search where
   the diff alone is not enough. A finding that cites a line the
   diff does not touch, or misreads the code, is killed: recorded
   in the killed list with the reason, never silently dropped.
5. Order what survives: severity first, corroboration second.
6. Fill `templates/consolidated-report.md`. Include the coverage,
   killed-findings, and conflicts sections even when empty.
7. Gate the result with `checklists/report-ready.md` before
   publishing.

## Hard stops

- Tempted to add a finding no collaborator raised: stop. Spawn a
  reviewer for another pass instead.
- Pressure to drop or soften a verified finding: refuse and flag
  the human owner.

## Output

The consolidated report, exactly in the template shape.
