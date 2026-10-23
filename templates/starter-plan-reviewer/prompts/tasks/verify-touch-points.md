# Task: Verify a plan's touch points against the repo

Check every file path and symbol the plan names against the actual
repository. This is the core check — a plan built on phantom files
fails at implementation time, expensively.

## Inputs

- Plan under review: `{{plan}}`
- Repository: `{{repo}}`
- Base branch: `{{base_branch}}` (default `develop`)

## Steps

1. Extract every touch point the plan names: file paths, directory
   paths, exported symbols, database tables, API routes, config
   keys.
2. For each file path, check it exists at `{{base_branch}}` exactly
   as written. Case matters.
3. For each miss, search for near misses before recording it: the
   basename elsewhere in the tree (moved), similar names (renamed),
   and the symbol the plan associates with the path (relocated).
   Record what was actually found.
4. For each symbol, confirm it exists in the claimed file and is
   exported the way the plan assumes (public vs internal).
5. For touch points the plan intends to CREATE, confirm the path
   does not already exist and its parent directory does. An
   already-existing "new" file is a finding.
6. Classify each row: VERIFIED, MOVED (with the real path), RENAMED
   (with the real name), or MISSING.

## Hard stops

- Repository unreachable or the branch does not exist: stop and
  report UNVERIFIED. Never guess a row.

## Output

The table from `kb/templates/touch-point-verification.md`, one row
per touch point, plus a two-line summary: counts by classification
and whether any MISSING row blocks the plan (each MISSING row is a
P0 candidate for the findings report).
