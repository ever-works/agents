# Example: Divergence report mid-plan

A golden example. Use it as a reference for tone and shape.

## Input (the plan, approved, at step 3 of 6)

```
Plan: Move rate-limit config from env vars to tenant settings
Approved by: @mira in EW-2104 (comment 2026-08-02)

1. Add `rateLimit` JSON column to `tenant_settings` (migration).
2. Add `RateLimitConfigService.forTenant(tenantId)` reading the
   column with env-var fallback.
3. Switch `apps/api/src/middleware/rate-limit.middleware.ts` to
   call `RateLimitConfigService.forTenant` instead of reading
   `RATE_LIMIT_*` env vars directly.
4. Delete the env-var reads and the `RATE_LIMIT_*` entries from
   `.env.example`.
5. Add integration test: per-tenant override beats env default.
6. Update `docs/operations/rate-limits.md`.
```

## Output (the report the Executor posted)

```
## Divergence report — Move rate-limit config, step 3

### Status

- Last verified step: 2 (branch `feat/ew-2104-rate-limit-config`
  holds it, pushed: yes)
- Execution: halted, awaiting decision

### The step as written

> Switch `apps/api/src/middleware/rate-limit.middleware.ts` to
> call `RateLimitConfigService.forTenant` instead of reading
> `RATE_LIMIT_*` env vars directly.

### What the plan expected

- `apps/api/src/middleware/rate-limit.middleware.ts` — a
  middleware that reads `RATE_LIMIT_*` env vars inline.

### What the repo actually contains

- The middleware file no longer exists. PR #2077 (merged
  2026-08-05, after the plan was approved) replaced it with a
  guard: `apps/api/src/guards/rate-limit.guard.ts`. The guard
  reads limits from `packages/core/src/config/rate-limit.ts`,
  which wraps the env vars — one indirection the plan does not
  mention.

### Classification

API or schema changed (the integration point moved and gained a
config layer).

### Options

1. **Retarget step 3 to the guard** — call `forTenant` from
   `rate-limit.guard.ts`, leave the core wrapper as dead code for
   step 4 to delete. Cost: small; steps 4-6 need path updates only.
2. **Retarget to the core wrapper** — make
   `packages/core/src/config/rate-limit.ts` delegate to
   `forTenant`, guard untouched. Cost: small edit, but the wrapper
   is imported by two workers; blast radius grows beyond the plan.
3. **Revise the plan** — steps 3 and 4 rewritten against the
   post-#2077 layout. Cost: one Planner pass; cleanest paper trail.

### Impact on remaining steps

- Blocked: steps 3-4 (both name the old file).
- Independent: steps 5-6 — could proceed on explicit approval;
  not started.

### Decision needed from

@mira or the Planner — execution resumes on an updated plan or an
explicit option choice.
```

## Why this example is good

- Quotes the step verbatim; the decider never has to open the plan.
- Expected vs found cites real paths and names the PR that caused
  the drift — checked against fresh `origin/develop`, not memory.
- Options are outcomes with costs; none is presented as started,
  and the wider blast radius of option 2 is stated, not hidden.
- Independent steps are flagged but not continued — the Executor
  stopped at the boundary and preserved verified work.
