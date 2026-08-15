# Example: PR description for an executed plan

A golden example. Use it as a reference for tone and shape.

## Input (the plan, approved, fully executed)

```
Plan: Add soft-delete to KB documents
Approved by: @dan in EW-1955 (Task status: Approved, 2026-07-30)

1. Add `deletedAt` nullable timestamp to `kb_documents`
   (migration).
2. `KbDocumentService.softDelete(id)` sets `deletedAt`, emits
   `kb.document.deleted`.
3. Exclude soft-deleted rows in `KbDocumentService.list` and
   `search`.
4. Unit tests: delete sets timestamp, list/search exclude, restore
   path untouched.
5. Docs: one paragraph in `docs/kb/lifecycle.md`.
```

## Output (the PR description the Executor posted)

```
## Summary

Adds soft-delete to KB documents: a `deletedAt` timestamp, a
service method that sets it, and list/search exclusion.
Approved by @dan in EW-1955 (Task status: Approved, 2026-07-30).
Divergences during execution: none.

## Executed plan

- [x] Step 1: `deletedAt` column + migration — 4f2a91c
- [x] Step 2: `softDelete` + `kb.document.deleted` event — 8be03d7
- [x] Step 3: exclude soft-deleted in `list` and `search` — 91c44ea
- [x] Step 4: unit tests for delete / exclusion / restore — d0517f2
- [x] Step 5: lifecycle docs paragraph — 6aa8e21

## Divergences during execution

- None.

## Test plan

- [x] Per-step verifications ran and passed (see execution log in
      EW-1955)
- [x] `packages/kb/src/kb-document.service.spec.ts` — new cases
      "softDelete sets deletedAt", "list excludes soft-deleted",
      "search excludes soft-deleted", "restore clears deletedAt".
- [x] `pnpm lint` clean.
- [x] `pnpm typecheck` clean.
- [x] `pnpm test --filter @ever/kb` green (61/61, was 57/57).

## Risk and rollback

- **Risk**: a caller of `list`/`search` that expected deleted rows
  (exports, admin audit) silently loses them.
- **Blast radius**: KB package plus its two API consumers; no
  worker reads these queries.
- **Rollback**: revert this PR; the migration is additive, so
  rolling forward with a revert is safe.

## Linked plan and approval

- Plan: EW-1955 "Add soft-delete to KB documents"
- Approval: @dan, Task status Approved, 2026-07-30
```

## Why this example is good

- Every plan step appears with its commit; a reviewer can map any
  hunk in the diff to a step in one glance.
- "Divergences: none" is stated explicitly rather than omitted —
  the absence is information.
- Test plan names the spec file and the actual case names, plus
  before/after test counts.
- Risk names a concrete silent-loss failure mode and sizes the
  blast radius; rollback notes why the additive migration makes
  the revert safe.
- Nothing in the diff is outside the plan — no drive-by refactors
  smuggled in.
