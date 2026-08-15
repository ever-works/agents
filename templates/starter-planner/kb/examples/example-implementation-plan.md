# Example: Implementation plan for a small feature

A golden example. Use it as a reference for tone and shape.

## Input (the request)

```
Title: Let users export their Work's task list as CSV

Description: Add an "Export CSV" button to the task list page.
Columns: title, status, assignee, created date. Respect the active
filters — export what the user sees, not the whole table. Spec:
docs/specs/task-export.md (goals: filtered export, CSV escaping,
permission check; use cases: empty list, 10k-row list).
```

## Output (the plan the Planner posted)

```
## Implementation plan — Task list CSV export

### Context

Adds a filtered CSV export to the Work task list. Spec at
docs/specs/task-export.md (read; three goals, two use cases —
coverage map below). The list endpoint already accepts the filter
params (`status`, `assignee`, `q`), so the export reuses the same
query rather than duplicating filter logic. Prior art: the KB
export in PR #412 streams rows instead of buffering; this plan
follows that convention.

Assumptions:
- Date format is ISO 8601 (safe, default: `YYYY-MM-DD`).
- Export requires the same permission as viewing the list
  (load-bearing, default: reuse `task:read` — spec's permission
  goal names no separate role).

### Touch points

- `packages/core/src/task/task.service.ts:listForWork` — extract
  the filter-to-query mapping so the export path reuses it.
- `packages/core/src/task/task-export.service.ts` (new) — streams
  filtered rows as CSV; escapes quotes, commas, newlines.
- `apps/api/src/task/task.controller.ts:TaskController` — new
  `GET /api/works/:id/tasks/export` guarded by `task:read`.
- `apps/web/components/task/TaskListToolbar.tsx` — Export button
  passing the active filter params.
- Callers / consumers affected:
  - `apps/web/components/task/TaskList.tsx` — owns filter state;
    the toolbar reads it via existing props, no contract change.
- Needs confirmation:
  - Rate limiting on download endpoints — no existing download
    route was found to copy from; confirm with the Work owner.

### Ordered steps

1. **Extract filter mapping in task.service.ts** — pure refactor,
   no behavior change. Acceptance: existing list tests pass
   unchanged.
2. **Add task-export.service.ts with CSV streaming** — covers
   escaping and the 10k-row case. Acceptance: unit tests for
   quotes/commas/newlines and a 10k-row stream pass.
3. **Add the export endpoint** — `task:read` guard, filter params,
   `text/csv` with attachment header. Acceptance: e2e test
   downloads filtered CSV; 403 without permission.
4. **Add the Export button** — passes active filters, disabled
   while a download is in flight. Acceptance: clicking with a
   status filter yields only matching rows.

### Risks

- **CSV injection** — cells starting with `=`, `+`, `-`, `@` open
  as formulas in spreadsheet apps. Blast radius: exported files.
  Mitigation: prefix-escape in step 2 and test for it.
- **Large exports** — 10k rows buffered would spike memory.
  Mitigation: streaming (step 2), matching PR #412.
- **Contract changes**: one new endpoint; no existing contract
  changes.

### Verification strategy

- Tests to add: escaping + streaming cases in
  `packages/core/src/task/task-export.service.spec.ts`; endpoint
  permission and filter tests in `apps/api/test/task-export.e2e.ts`.
- Commands: `pnpm lint`, `pnpm typecheck`, `pnpm test --filter core
  --filter api`.
- Manual checks: export with a status filter and open the file in a
  spreadsheet app; verify columns and no formula execution.

### Out of scope

- XLSX export — follow-up candidate; spec names CSV only.
- Scheduled/emailed exports — not requested.

### Spec coverage map (when a spec exists)

| Spec goal / use case | Covered by | Status |
| --- | --- | --- |
| Filtered export | Steps 1, 3, 4 | covered |
| CSV escaping | Step 2 + verification | covered |
| Permission check | Step 3 + e2e test | covered |
| Empty list | Step 2 (header-only file) + unit test | covered |
| 10k-row list | Step 2 streaming + unit test | covered |
```

## Why this example is good

- Every touch point is a real file with a symbol, and the one item
  the Planner could not verify sits under "Needs confirmation".
- The load-bearing assumption (permission) carries a default the
  user can veto in one word.
- Steps are dependency-ordered and individually shippable; step 1
  is a pure refactor with a checkable acceptance criterion.
- The risk list surfaces CSV injection — a risk the request never
  mentioned.
- The coverage map uses the spec's own wording and covers all five
  lines; nothing was silently dropped.
