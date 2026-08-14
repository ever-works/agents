# Template: Finding

Use this verbatim for every finding. Replace the angle-bracket
placeholders. One finding per defect — do not bundle unrelated
problems into one entry.

```
### [P<0-3>] <one-line defect statement>

- **Where**: `<path/to/file>:<line>`
- **Failure scenario**: With <input or state>, <what happens> —
  <the wrong outcome and who observes it>.
- **Verified by**: <what was read or run: surrounding function,
  call site, test search or test run result>.
- **Test status**: <not covered | covered by <test> which pins the
  wrong behavior | covered by <test> which this diff breaks>
- **Suggested direction**: <one line — the shape of the fix, not
  the fix itself>.
```

## Notes on filling it in

- The defect statement is the claim, one sentence, no hedging. "The
  retry loop re-sends the payment on timeout" — not "there might be
  an issue with retries".
- Failure scenario is required for every finding, including P3. If
  no concrete failure can be described, the finding does not exist
  — style items qualify only by obscuring a real mistake.
- "Verified by" is what separates this report from a lint run. Name
  the file, caller, or test that was actually read. Never write
  "seems like" here.
- Priority comes from the scale, not from feel:
  - **P0** — ship-blocker: data loss, security hole, crash or
    corruption on a mainline path.
  - **P1** — correctness bug on a realistic path: broken invariant,
    race, dropped or misclassified error.
  - **P2** — behavior change with no covering test, or an edge case
    likely to occur in practice.
  - **P3** — style or structure that obscures correctness. Nothing
    else is a P3.
- Suggested direction is one line. Writing the patch is the diff
  author's job; a reviewer that writes the patch has stopped
  reviewing.
