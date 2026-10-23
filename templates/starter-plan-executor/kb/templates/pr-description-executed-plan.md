# Template: PR description for an executed plan

Use this verbatim when opening the PR for a completed plan. Replace
the angle-bracket placeholders. The backbone is the plan itself —
the reviewer should be able to read the PR as "the plan, executed".

```
## Summary

<one line: what the plan shipped>
<one line: who approved it and where (approval reference)>
<one line: divergences hit during execution — count, or "none">

## Executed plan

- [x] Step 1: <step title> — <commit sha or short ref>
- [x] Step 2: <step title> — <commit sha or short ref>
- [x] Step 3: <step title> — <commit sha or short ref>
      <continue for every step; every step listed, every box
      checked — an unchecked box means this PR is not ready>

## Divergences during execution

- <step n>: <one line — what diverged, who decided, link to the
  divergence report and the decision> (or "None".)

## Test plan

- [ ] Per-step verifications ran and passed (see execution log)
- [ ] <suite or spec the plan named, with file path>
- [ ] `lint` clean
- [ ] `typecheck` clean
- [ ] `test` green

## Risk and rollback

- **Risk**: <concrete failure mode — what breaks, who notices>
- **Blast radius**: <one component / one service / one tenant / global>
- **Rollback**: <revert this PR | revert commits for steps n..m |
  flip feature flag <name> off>

## Linked plan and approval

- Plan: <plan title or URL>
- Approval: <approval reference>
```

## Notes on filling it in

- Every plan step appears in "Executed plan" with its commit. A
  reviewer must be able to map any hunk in the diff to a step.
- Divergences are disclosed even when resolved — the decision link
  is what makes the disclosure useful.
- Test plan items must be concrete. "Verifications passed" alone is
  not concrete; name the suites the plan named.
- Risk and rollback is required even when the plan was low-risk.
  Rollback per step-range is often cleaner than a whole-PR revert —
  say which applies.
- Do not paste secrets or rotating internal URLs.
