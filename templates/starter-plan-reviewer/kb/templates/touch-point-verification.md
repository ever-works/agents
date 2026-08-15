# Template: Touch-point verification table

Use this verbatim. One row per touch point the plan names. Every row
comes from a fresh repository check in this review — never from
memory of the codebase.

```
## Touch-point verification — <plan title>

Repository: <repo> @ <base branch> (<commit sha at check time>)

| # | Plan step | Claimed touch point | Kind | Result | Notes |
|---|---|---|---|---|---|
| 1 | step 2 | `<path/to/file.ts>` | file | VERIFIED | |
| 2 | step 3 | `<path>:<symbol>` | symbol | MOVED | now at `<real/path.ts>` |
| 3 | step 4 | `<table.column>` | schema | MISSING | searched: basename, symbol, strings — no hit |
| 4 | step 5 | `<path/new-file.ts>` (create) | new file | VERIFIED | parent dir exists, no collision |

### Summary

- Verified: <n>. Moved: <n>. Renamed: <n>. Missing: <n>.
- P0 candidates: <list the MISSING rows on core steps, or "none">.
```

## Result values (use exactly these)

- **VERIFIED** — exists at the claimed location with the claimed
  name; for symbols, exported the way the plan assumes; for
  creations, no collision and the parent directory exists.
- **MOVED** — the file exists under a different path. Notes carry
  the real path.
- **RENAMED** — the location holds the logic under a different name,
  or the symbol lives in the claimed file under a new name. Notes
  carry the real name.
- **MISSING** — all three chase searches (basename, symbol,
  distinctive strings) came back empty. Notes list the searches
  performed.

## Notes on filling it in

- Kind is one of: file, dir, symbol, schema, route, config,
  new file. Creations are always checked for collisions.
- Pin the commit sha in the header — the review is a statement
  about the repo at a moment, and the tree may move before the
  Planner revises.
- Do not editorialize in Notes. The severity judgment happens in
  the findings report; this table is evidence.
