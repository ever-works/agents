# Example: missing-docs finding for an undocumented feature

A golden example. Use it as a reference for tone and shape.

## Input (the trigger)

```
Merged PR #497: "feat(worker): add per-tenant rate limiting to the
export worker"

Diff summary:
- packages/worker/src/export/rate-limiter.ts — new token-bucket
  limiter, per tenant. Env vars EXPORT_RATE_LIMIT (default 10/min)
  and EXPORT_RATE_BURST (default 5).
- packages/worker/src/export/export.processor.ts — jobs over the
  limit re-queue with backoff; after 3 re-queues the job fails with
  EXPORT_RATE_EXCEEDED.

Doc-root search for "rate limit", "EXPORT_RATE", "export worker":
no doc page mentions any of it.
```

## Output (the finding the Librarian filed)

```
## Missing-docs finding — export worker rate limiting

### What shipped

PR #497 added per-tenant rate limiting to the export worker. Jobs
over the limit re-queue with backoff; after three re-queues they
fail with `EXPORT_RATE_EXCEEDED`. Two new env vars control it.

- Shipped in: PR #497
- Code: `packages/worker/src/export/rate-limiter.ts`,
  `packages/worker/src/export/export.processor.ts`

### What has no home

- The two env vars (`EXPORT_RATE_LIMIT`, default 10/min;
  `EXPORT_RATE_BURST`, default 5) and what changing them does.
- The operational behavior: what `EXPORT_RATE_EXCEEDED` means, that
  it appears after three re-queues, and what an operator should do
  when a tenant hits it.
- Deploy note: the vars are optional (code defaults apply), so no
  deploy is blocked — but ops should know the defaults exist.

### Where existing docs almost cover it

- `docs/runbooks/export-worker.md` — covers deploy and log
  locations for the worker but predates rate limiting; wrong as-is
  but the natural neighborhood.

### Proposed home

- **Option A**: new section "Rate limiting" in
  `docs/runbooks/export-worker.md` — keeps all export-worker ops in
  one page.
- **Option B**: new page `docs/runbooks/export-rate-limits.md` —
  only worth it if more workers get limiters later.
- Recommendation: Option A; one worker, one page.

### Who should confirm

The export worker's code owner (author of PR #497) for the behavior
details; the docs owner for the placement.

### Cost of leaving it undocumented

First tenant to hit `EXPORT_RATE_EXCEEDED` becomes a support
escalation with no runbook entry to point at.
```

## Why this example is good

- Names the concrete undocumented knowledge — env vars, defaults,
  the error code, the operator action — not just "the feature".
- Every claim cites the shipping PR or a code path; nothing is
  inferred beyond the diff.
- Offers two homes with a one-line recommendation, so the human
  decision is a yes/no, not a research task.
- States the cost plainly and stops. No page was created, nothing
  was guessed.
