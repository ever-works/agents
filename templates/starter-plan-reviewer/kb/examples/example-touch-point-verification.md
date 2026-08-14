# Example: Touch-point verification for a small plan

A golden example. Use it as a reference for tone and shape.

## Input (the plan excerpt naming touch points)

```
Plan: Add scopes to API keys
Steps name these touch points:
- step 1: `packages/agent/src/entities/api-key.entity.ts` (add
  `scopes` column)
- step 2: `packages/agent/src/auth/api-key.guard.ts:ApiKeyGuard`
  (enforce scopes)
- step 3: `apps/api/src/keys/keys.controller.ts:rotateKey`
  (carry scopes on rotate)
- step 4: create `packages/agent/src/auth/scope-matcher.ts`
- step 5: `api_keys.scopes` column (read by the guard)
```

## Output (the table the Reviewer posted)

```
## Touch-point verification — Add scopes to API keys

Repository: ever-works/platform @ develop (a3f9c12)

| # | Plan step | Claimed touch point | Kind | Result | Notes |
|---|---|---|---|---|---|
| 1 | step 1 | `packages/agent/src/entities/api-key.entity.ts` | file | VERIFIED | |
| 2 | step 2 | `packages/agent/src/auth/api-key.guard.ts:ApiKeyGuard` | symbol | MOVED | guard now at `packages/agent/src/guards/api-key.guard.ts`; same export |
| 3 | step 3 | `apps/api/src/keys/keys.controller.ts:rotateKey` | symbol | RENAMED | file exists; method is `rotate`, not `rotateKey` |
| 4 | step 4 | `packages/agent/src/auth/scope-matcher.ts` (create) | new file | VERIFIED | no collision; parent dir exists |
| 5 | step 5 | `api_keys.scopes` | schema | MISSING | searched: column name in entities and migrations, `scopes` symbol in entity, seed fixtures — no hit; column is created by step 1, so step 5 must order after it |

### Summary

- Verified: 2. Moved: 1. Renamed: 1. Missing: 1.
- P0 candidates: none — row 5 is MISSING because step 1 creates it;
  this is an ordering dependency for the findings report, not a
  phantom.
```

## Why this example is good

- Every miss was chased before being recorded: row 2 found the real
  path, row 3 found the real method name.
- Row 5 shows the judgment the table exists for: MISSING is
  evidence, and the note explains what it implies (an ordering
  dependency) without doing the findings report's job.
- The header pins the commit sha, so the Planner knows exactly what
  tree the claims are about.
- Notes stay factual. No severities in the table — those belong to
  the findings report.
