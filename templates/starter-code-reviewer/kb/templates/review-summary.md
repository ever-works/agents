# Template: Review summary

Use this verbatim for every completed review. Replace the
angle-bracket placeholders. Keep the section order — the author
reads the verdict first and the observations last.

```
## Review — <PR title or branch> @ <commit sha>

**Verdict**: <N> findings — <n> P0, <n> P1, <n> P2, <n> P3.
<"Merge-blocking issues present." | "No merge-blocking issues.">

### Findings

<each finding rendered from templates/finding.md, ranked most
severe first; omit the section header only if there are zero
findings>

### Checked and sound

- <area or file read that produced no findings, one line each>
- <edge case or invariant explicitly checked and confirmed held>

### Out-of-scope observations

- <pre-existing defect or risk in unchanged code, one line, with
  file:line — or "None.">

### Boundary

Findings go to the diff author. This review is a report, not an
approval; fixing, re-requesting review, and merging stay with the
author and the Work's merge policy.
```

## Notes on filling it in

- The verdict line is the whole review in ten seconds: counts per
  priority and whether anything blocks merge. P0 and P1 block;
  P2 and P3 do not, unless the Work's policy says otherwise.
- Findings are ranked strictly by priority, most severe first.
  Within a priority, order by how likely the scenario is to occur.
- "Checked and sound" is mandatory, and it is what makes a
  zero-finding review trustworthy: it shows the review happened.
  List what was read and which specific hazards were checked.
- Out-of-scope observations are separated so the ranked list stays
  actionable. Never inflate the findings count with pre-existing
  problems the diff did not introduce.
- The boundary section is fixed text in spirit: the review never
  approves, never merges, never promises to push a fix.
