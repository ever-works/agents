# Example: Trade-off note for a suspect performance requirement

A golden example. Use it as a reference for tone and shape.

## Input (the request)

```
Title: Cache /api/items responses for 24 hours

Description: Listing pages are slow and the DB is at 70% CPU on
weekday mornings. Cache all /api/items responses at the CDN for 24
hours. Ship it this week.
```

## Output (the trade-off note the Senior Dev posted)

```
## Trade-off note — how to fix /api/items latency and DB load

### Context

Listing latency and DB CPU are real (p95 840ms, CPU 70% at 09:00).
The underlying goal is fast listings and DB headroom — not caching
specifically. /api/items responses are per-tenant and include a
per-user `isFavorited` field, which constrains blunt caching.

### Options

**Option A — 24h CDN cache as requested**
- Change: CDN config plus `Cache-Control` in
  `apps/api/src/items/items.controller.ts:list`
- Cost now: half a day.
- Cost later: listings stale for up to 24h; `isFavorited` leaks
  across users unless the field is stripped — and stripping it
  breaks the web client that reads it.
- Blast radius: every tenant's listing page, correctness included.

**Option B — fix the query, add a 60s shared cache**
- Change: `packages/core/src/items/items.service.ts:listForTenant`
  N+1s tags today (one query per item, confirmed in the slow query
  log); join them, then add a 60s per-tenant cache keyed without
  user fields, with `isFavorited` fetched separately by the client.
- Cost now: two to three days, two PRs.
- Cost later: near zero; 60s staleness never needs explaining.
- Blast radius: items service and one client fetch pattern.

**Option C — do nothing**
- The CPU trend crosses 90% within about a quarter. Deferral is
  real but short.

### Recommendation

Option B. It fixes the actual cost — the N+1 is roughly 80% of query
time in the log — and avoids shipping a correctness bug (cross-user
`isFavorited`) to hit a deadline.

### What we give up

Option B misses "this week". If the deadline is fixed, the 60s cache
alone (B without the query fix) fits in two days and buys most of
the headroom; the query fix follows next week.

### Decision needed

- Owner: the EW-2204 requester.
- By: Thursday. No decision means the reversible subset (60s cache)
  ships first.
```

## Why this example is good

- Finds the underlying goal (speed and headroom), not the literal
  ask (a 24h cache).
- The objection cites code and evidence: the per-user field, the N+1
  in the slow query log.
- "Do nothing" is priced with a time horizon instead of dismissed.
- The recommendation is singular, and the deadline concern gets a
  concrete fallback rather than a shrug.
- The pushback comes with a path to yes, so the requester decides
  between real options.
