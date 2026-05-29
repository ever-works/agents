# Template: PR description

Use this verbatim. Replace the angle-bracket placeholders. Keep the
section order — bots and reviewers scan in this order.

```
## Summary

<one line: what changed>
<one line: why>
<one line: what was intentionally out of scope>

## What changed

- `<path/to/file>`: <one-line change>
- `<path/to/file>`: <one-line change>
- `<path/to/file>`: <one-line change>

## Considered and rejected

- <alternative approach>: <one-line reason it was not chosen>
- <alternative approach>: <one-line reason it was not chosen>

## Test plan

- [ ] <unit test added or updated, with file path>
- [ ] <integration / e2e check, if relevant>
- [ ] `lint` clean
- [ ] `typecheck` clean
- [ ] `test` green

## Risk and rollback

- **Risk**: <concrete failure mode — what breaks, who notices>
- **Blast radius**: <one component / one service / one tenant / global>
- **Rollback**: <revert this PR | revert commit <sha> | flip feature flag <name> off>

## Linked Task

<Task title or issue URL>
```

## Notes on filling it in

- Summary is three lines. Not three paragraphs. The reviewer should
  know in ten seconds whether to read on.
- "Considered and rejected" is required even if the answer is "no
  alternative worth listing" — say that explicitly.
- Test plan items must be concrete. "Added tests" is not concrete.
  "Added `should reject when X is null` in `auth.spec.ts`" is.
- Risk and rollback is required for every PR, even one-line fixes.
  A one-line fix that touches authentication still has blast radius.
- Do not paste secrets into the description. Do not paste internal
  URLs that rotate.
