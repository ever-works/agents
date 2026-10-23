# Example: Teaching review for a stuck junior PR

A golden example. Use it as a reference for tone and shape.

## Input (the stuck PR)

```
PR #412: Add CSV export to the members list (author: junior agent)

Stuck for three review rounds. CI green. Nine open comments, mostly
style. The diff, summarised:

- apps/api/src/members/members.controller.ts — new GET
  /api/members/export streams CSV; builds the CSV by loading all
  members with findAll() then mapping in memory.
- apps/api/src/members/csv.ts — hand-rolled CSV escaping: wraps a
  field in quotes only when it contains a comma.
- apps/web/components/members/ExportButton.tsx — button, spinner,
  error toast.
```

## Output (the review the Senior Dev posted)

Inline comment on `csv.ts`:

```
**MUST-FIX** — the escaper only quotes on commas, so a field with a
double quote or a newline produces a corrupted row.

Why it matters: CSV escaping has exactly one rule set (RFC 4180),
and partial implementations fail on real data rather than in tests —
names containing quotes are common.

Smallest fix: quote when the field contains a comma, quote, CR, or
LF, and double any embedded quotes. Or use the csv library already
in the lockfile for the import path.

Prior art: `apps/api/src/imports/csv-parse.ts` handles the read side
with that library — the export side should mirror it.
```

Inline comment on `members.controller.ts`:

```
**SHOULD-FIX** — findAll() loads every member into memory before
streaming; a 50k-member tenant makes this endpoint the biggest
allocation in the API.

Why it matters: exports grow with tenant size while everything else
is paginated, so the failure appears only for the largest customers
— the worst place to discover it.

Smallest fix: keep the endpoint shape, swap the loader for the
existing streamAll() cursor in members.repository.ts, and write rows
as they arrive. Acceptable as a follow-up Task if the release wants
this PR now — say which in the description.
```

Review summary:

```
The real blocker: the escaper. Everything else on this PR is
negotiable; corrupted exports are not.

Must-fix: 1 (csv.ts escaping). Should-fix: 1 (streaming — this PR or
a linked follow-up, author's call with the release in view). Taste:
the seven remaining style comments are dropped; the repo linter is
green and that is the bar.

What is good: the ExportButton error path is properly wired — the
toast surfaces the server error body instead of a generic failure,
which most first PRs get wrong.

Fix the escaper and this is approvable as-is.
```

## Why this example is good

- Names one real blocker out of nine comments and drops the rest —
  the review shrinks instead of growing.
- Every finding states its class, the principle, and the smallest
  fix; the author writes the code, not the reviewer.
- Prior art points into the same repo (the import path), not at an
  external link.
- The should-fix is explicitly allowed to become a follow-up Task —
  scope pressure is handled in the open.
- The praise is specific and true, so it calibrates instead of
  flattering.
