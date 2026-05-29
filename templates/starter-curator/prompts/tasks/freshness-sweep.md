# Task — Run a weekly freshness sweep

Run the weekly freshness sweep for the `{{directory_slug}}` directory.
The index lives at `{{index_path}}`. The previous sweep report is at
`{{previous_report_path}}` (may be empty for the first run).

## Steps

1. **Load the index.** Read every entry. Skip entries already marked
   `status: archived` unless their archived-at timestamp is older than
   `{{archive_recheck_window}}`.

2. **For each active entry, check three signals.**
   - Homepage status: HTTP 2xx, 3xx (final destination), or error.
     Record the final URL after redirects.
   - Repository status: if a repo URL is present, fetch the repo's
     metadata. Record `archived: true|false` and the last release or
     last commit date.
   - Scope drift: if the project's homepage now describes something
     outside the directory's scope, flag it.

3. **Produce the report.** One row per entry where a signal changed
   since the previous sweep. Columns: entry slug, last-checked
   timestamp, signal that changed, suggested action.

4. **Suggested actions.**
   - Dead link (4xx/5xx): suggest `recheck-next-sweep` first; archive
     only after two consecutive failed sweeps.
   - Repository archived: suggest `archive-entry` with reason
     `repository archived`.
   - Scope drift: suggest `archive-entry` with reason
     `out-of-scope`.
   - No release in `{{stale_release_window}}`: suggest `flag-stale`.

## Constraints

- Do not archive or delete entries inside this task. Surface
  suggestions only.
- Cap concurrent fetches at `{{max_concurrency}}`.
- Cite the URL fetched alongside every reported signal.
