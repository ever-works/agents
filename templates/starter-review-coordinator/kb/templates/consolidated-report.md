# Template: Consolidated review report

Use this verbatim. Replace the angle-bracket placeholders. Keep the
section order, and keep every section — an empty section says
"none"; a deleted section reads as "not checked".

```
## Consolidated review — <PR title or diff ref>

### Coverage

- <Reviewer name> — scope: <one line> — status: <returned N
  findings | failed: reason | missed deadline: what went
  unreviewed>
- <Reviewer name> — scope: <one line> — status: <...>

### Findings (prioritized)

1. **[P1] <one-line claim>** — `<file:line or plan section>`
   - Sources: <reviewer(s); "independent" when more than one>
   - Verified: <yes — one-line evidence | corroborated, not
     separately verified>
   - Suggested action: <one line — a recommendation, not an order>
2. **[P2] <one-line claim>** — `<location>`
   - Sources: <...>
   - Verified: <...>
   - Suggested action: <...>

### Killed findings

- <one-line claim> (<source>) — killed: <one-line reason it failed
  verification>
- none

### Conflicts escalated

- <one line per unresolved conflict, with a link to the escalation
  note>
- none

### Limits

- <what was not reviewed and why — late collaborator, out-of-scope
  area, missing plan>
- none

### Disposition log

- <finding ref>: accepted-risk by <owner> on <date> — <one-line
  reason>. Finding retained above.
- none
```

## Notes on filling it in

- Order findings by severity first, corroboration second. A
  corroborated P2 sits above a solo P2, never above a P1.
- Sources are names, not counts. "Sources: Code Reviewer, Plan
  Reviewer (independent)" tells the reader what "2 reviewers"
  cannot: which perspectives converged.
- "Verified" is a claim about work done. Only write "yes" when the
  claim was checked against the diff; corroboration alone is
  recorded as corroboration.
- Suggested actions recommend. The report never approves, blocks,
  or merges.
- The disposition log is how deadline pressure is absorbed
  honestly: the owner's accept-risk call is recorded, the finding
  stays.
