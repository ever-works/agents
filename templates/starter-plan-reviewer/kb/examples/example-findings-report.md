# Example: Findings report for a feature plan

A golden example. Use it as a reference for tone and shape.

## Input (the plan under review, abridged)

```
Plan: Weekly digest email for Work followers
Spec goals: (1) followers get a weekly activity digest; (2) per-Work
opt-out; (3) digest sends are rate-limited; (4) archived Works never
send digests.

Steps:
1. Migration: add `digestOptOut` to `work_followers`.
2. Add `DigestService.compose()` in
   `packages/notifications/src/digest.service.ts`; send via
   `packages/notifications/src/mailer.ts:sendBulk`.
3. Add weekly scheduler job; skips Works where `works.lastDigestAt`
   is within 7 days.
4. Opt-out toggle in `apps/web/components/work/FollowSettings.tsx`.
5. Migration: add `lastDigestAt` to `works`.
6. Bump nodemailer to v7 while in the area.
7. Enable for all tenants.
```

## Output (the report the Reviewer posted)

```
## Plan review — Weekly digest email for Work followers

### Verdict

BLOCKED — step 3 ships code that reads `works.lastDigestAt` two
steps before the migration that creates it (P0-1).

### Findings

#### P0 — blocker

- **[P0-1] Scheduler reads a column that does not exist yet**
  - Evidence: plan step 3 vs step 5; `works` has no `lastDigestAt`
    at the base branch.
  - Why it matters: step 3 deployed alone crashes the scheduler on
    its first tick.
  - Suggested resolution: move the step-5 migration ahead of step 3,
    or gate the job until the column lands.

#### P1 — must-fix

- **[P1-1] Spec goals 3 and 4 have no covering step**
  - Evidence: coverage map below; no step rate-limits sends or
    filters archived Works.
  - Why it matters: provider throttling and digests from archived
    Works are both spec-level failures.
  - Suggested resolution: add explicit steps for both, with
    done-conditions.
- **[P1-2] Mailer touch point has moved**
  - Evidence: `packages/notifications/src/mailer.ts` is MISSING;
    `sendBulk` lives in `packages/comms/src/mailer.ts`.
  - Suggested resolution: repoint step 2 at the real module.
- **[P1-3] Step 7 has no flag or rollback**
  - Evidence: plan step 7; ordering-safety checklist, rollback
    section.
  - Suggested resolution: enable behind a flag for one tenant first;
    state the kill switch.

#### P2 — should-fix

- **[P2-1] Opt-out component name is stale** — step 4 names
  `FollowSettings.tsx`; the repo has `FollowButton.tsx` with a
  settings popover; repoint the step.

#### P3 — nit

- none

### Coverage map

| Spec goal | Plan step | Status |
|---|---|---|
| Weekly digest to followers | 2, 3 | covered |
| Per-Work opt-out | 1, 4 | covered |
| Rate-limited sends | — | uncovered |
| Archived Works excluded | — | uncovered |

### Out of scope

- Step 6 (nodemailer v7 bump) — no spec goal behind it; defer to its
  own Task.

### Touch points

3 verified, 1 moved (P1-2), 1 renamed (P2-1), 0 missing — table
attached.
```

## Why this example is good

- Verdict is first, mechanical, and cites the worst finding.
- Every finding carries evidence and a direction the Planner can act
  on; no step is rewritten in the plan's voice.
- The uncovered spec goals came from the coverage map, not from
  taste.
- The dependency bump was flagged as out of scope, not silently
  accepted or deleted.
