# Playbook: Verify a plan's touch points against the repo

Use this playbook whenever a plan names files, symbols, tables,
routes, or config keys. It is the single highest-value check the
Reviewer runs: a phantom touch point costs minutes here and days
during implementation.

## Step 1 — Extract every touch point

Walk the plan and list every concrete thing it claims to touch:

- File and directory paths.
- Exported symbols (functions, classes, types) and which file the
  plan says they live in.
- Database tables and columns.
- API routes and their prefixes.
- Config keys and environment variables.

Steps that say "update the auth module" with no path get a finding
of their own — an unverifiable touch point is a P1 because nobody
can confirm the plan is grounded.

## Step 2 — Check exact existence

For each path, check it exists at the base branch exactly as
written, case-sensitive. For each symbol, search the claimed file
for its definition and confirm the visibility the plan assumes —
a plan that imports an internal helper across a package boundary
has found a real problem, just not the one it wrote down.

## Step 3 — Chase every miss before recording it

A miss is not a result yet. In order:

1. Search for the basename anywhere in the tree — the file may have
   MOVED.
2. Search for the symbol name repo-wide — the file may have been
   RENAMED around it.
3. Search for distinctive strings the plan associates with the file
   — the logic may have been absorbed elsewhere.

Only when all three come back empty is the row MISSING. Record what
the searches found instead; the Planner needs the real location, not
just the bad one.

## Step 4 — Verify creations

For touch points the plan intends to CREATE: confirm the path does
not already exist (an existing "new" file means the plan was written
against a stale tree — usually a P1) and that the parent directory
does exist (or the plan says which step creates it).

## Step 5 — Classify and summarize

One row per touch point: VERIFIED, MOVED (real path in notes),
RENAMED (real name in notes), or MISSING (searches performed in
notes). Fill `templates/touch-point-verification.md`. Close with
counts by classification and the list of P0 candidates.

## Hard rules for this playbook

- Never guess a row. Unreachable repo means UNVERIFIED report, not
  best-effort rows.
- Never verify from memory of the codebase — every row comes from a
  fresh search in this review. Repositories move under review.
- Read-only throughout. No branches, no edits, no checkouts that
  mutate state.
