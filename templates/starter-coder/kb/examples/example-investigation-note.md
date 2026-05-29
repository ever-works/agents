# Example: Investigation note for an over-scoped Task

A golden example. Use it as a reference for tone and shape.

## Input (the Task)

```
Title: Add "archived" state to Works so users can hide finished ones

Description: We need an archived flag on the Work entity. Users
should be able to archive a Work and have it disappear from the
default list. The "All" filter still shows archived. No data is
deleted.

Named files: none — pick where it fits.

Acceptance:
- Archive button on the Work detail page.
- Default list excludes archived.
- "All" filter includes archived.
```

## Output (the Investigation note the Coder posted)

```
## Investigation note — Add "archived" state to Works

### Finding

The Task reads as a UI flag, but archive is a domain state on the
Work entity that touches the schema, the API, the worker that sweeps
inactive Works, and at least two list queries that currently assume
`status IN (active, draft)`. Shipping it as one PR would either skip
the worker (silent bug) or balloon past one reviewable diff. Cleaner
to split.

### What the Task asked for

- Archive button on Work detail page.
- Default list excludes archived.
- "All" filter includes archived.

### What the code actually needs

- `platform/packages/core/src/work/work.entity.ts:Work` — add
  `archivedAt: Date | null`. Migration required.
- `platform/packages/core/src/work/work.service.ts:listForOwner` —
  the default list query needs an explicit
  `archivedAt IS NULL` filter; right now it returns all rows.
- `platform/packages/core/src/work/work.service.ts:archive` — new
  method; emits `work.archived` event.
- `platform/packages/tasks/src/work-sweeper.ts` — currently sweeps
  on `lastActivityAt`; needs to skip archived Works to avoid
  re-pinging owners.
- `apps/web/components/work/WorkDetail.tsx` — Archive button + confirm.
- `apps/web/components/work/WorkList.tsx` — filter chip plumbing.

### Proposed split

1. **EW-W-archive-schema** — add `archivedAt` column + migration,
   service method, event. Acceptance: column exists, `archive()`
   sets it, event fires, unit test covers both.
2. **EW-W-archive-queries** — update `listForOwner` and the
   sweeper to respect `archivedAt`. Acceptance: default list hides
   archived, sweeper skips archived, regression tests in place.
3. **EW-W-archive-ui** — Archive button + filter chip. Acceptance:
   button calls `archive()`, default list re-fetches, "All" chip
   reveals archived Works.

### Dependencies

- EW-W-archive-queries blocks on EW-W-archive-schema (needs the
  column).
- EW-W-archive-ui blocks on EW-W-archive-queries (UX behaviour
  depends on the list query already being correct).

### Risks the original Task missed

- Worker side-effect: without skipping archived, archived Works
  would still get notification pings.
- API contract: the `Work` DTO gains a field; any consumer that
  pins on the existing shape needs a note.
- No deletion semantics — confirmed by the Task. Archived rows stay
  forever unless a future Task adds purge.

### What I did not change

- No commits on a shared branch.
- No local exploration branch was created.
```

## Why this example is good

- Names the concrete files and symbols that would have to change.
- Splits into three Tasks each shippable as one PR.
- Calls out dependencies in plain language.
- Surfaces the missed risk (worker side-effect) the original Task
  did not mention.
- Confirms no code was pushed or branched — the Coder stopped at the
  scope boundary.
