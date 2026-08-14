# Example: Consolidated report from two collaborator reviews

A golden example. Use it as a reference for tone and shape. The
input is the raw findings two collaborators returned for PR #482
(per-user rate limiting); the output is the single report the
coordinator published.

## Input (the raw collaborator findings)

```
Code Reviewer — PR #482 — 4 findings

1. packages/gateway/src/limiter.ts:41 — window boundary uses `<=`
   so a burst exactly at the window edge counts against two
   windows. Severity: P1. Evidence: `now <= windowEnd` includes the
   boundary tick twice across consecutive windows.
2. packages/gateway/src/limiter.ts:88 — `userId` can be undefined
   for unauthenticated requests; limiter keys on `undefined` and
   all anonymous traffic shares one bucket. Severity: P2.
3. packages/gateway/src/middleware/rate.ts:12 — misleading comment
   says "per-IP" but the code keys per-user. Severity: P3.
4. packages/gateway/src/db/queries.ts:130 — possible SQL injection
   in `getUserQuota`. Severity: P1.

Plan Reviewer — PR #482 vs docs/plans/rate-limiting.md — 2 findings

1. Plan section 3 specifies bursts at a window edge count against
   exactly one window; the code's boundary handling contradicts
   this. Severity: P1.
2. Plan section 5 requires a `Retry-After` header on 429 responses;
   the diff returns 429 with no header. Severity: P2.
```

## Output (the consolidated report the coordinator published)

```
## Consolidated review — PR #482 (per-user rate limiting)

### Coverage

- Code Reviewer — scope: correctness, concurrency, failure behavior
  of the diff — status: returned 4 findings
- Plan Reviewer — scope: diff vs docs/plans/rate-limiting.md —
  status: returned 2 findings

### Findings (prioritized)

1. **[P1] Window-edge requests are counted against two consecutive
   windows** — `packages/gateway/src/limiter.ts:41`
   - Sources: Code Reviewer, Plan Reviewer (independent — one from
     the code, one from plan section 3)
   - Verified: yes — the diff shows `now <= windowEnd`; plan
     section 3 requires the boundary to count once
   - Suggested action: change the comparison to `<` and add a
     boundary-tick test
2. **[P2] Anonymous requests all share one rate bucket** —
   `packages/gateway/src/limiter.ts:88`
   - Sources: Code Reviewer
   - Verified: yes — the diff keys the store on `userId` with no
     guard for unauthenticated requests
   - Suggested action: decide the anonymous policy explicitly
     (per-IP bucket or reject) — this is a product call, flagged
     for the owner
3. **[P2] 429 responses missing the Retry-After header required by
   the plan** — plan section 5 / `packages/gateway/src/middleware/rate.ts`
   - Sources: Plan Reviewer
   - Verified: yes — the diff's 429 path sets no headers
   - Suggested action: add the header, or amend the plan if the
     requirement is dropped
4. **[P3] Comment says "per-IP", code is per-user** —
   `packages/gateway/src/middleware/rate.ts:12`
   - Sources: Code Reviewer
   - Verified: corroborated, not separately verified (P3, no
     dispute)
   - Suggested action: fix the comment

### Killed findings

- Possible SQL injection in `getUserQuota` (Code Reviewer) —
  killed: `packages/gateway/src/db/queries.ts` is not touched by
  this diff; the cited code predates the PR and uses parameterized
  queries. Out of scope for this review; worth a separate task if
  the concern stands.

### Conflicts escalated

- none

### Limits

- Load-test behavior was not evaluated by either reviewer; the
  concurrency assessment is static analysis only.

### Disposition log

- none
```

## Why this example is good

- The two P1s about the window edge were merged into one finding
  with both sources named — same root cause, different wording.
- The merged finding sits first: highest severity plus independent
  corroboration.
- The SQL-injection claim was killed in public with the reason and
  a fair next step — not silently dropped, not left in to inflate
  the count.
- Every surviving finding names its source; nothing originates
  with the coordinator.
- Suggested actions recommend; the report never says "approve" or
  "block".
