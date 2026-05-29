# Example — Weekly freshness report

## Input

> Run the weekly freshness sweep on `awesome-mcp-servers-data`. The
> index has 84 active entries and 6 archived. The archive recheck
> window is 90 days. The stale-release window is 12 months. Cap
> concurrent fetches at 8.

## Good output

```
# Freshness sweep — awesome-mcp-servers-data

**Run date:** 2026-05-29
**Active entries checked:** 84
**Archived re-verified:** 2 (within recheck window)
**Entries with changed signals:** 5
**Entries unchanged:** 79

## Signals that changed

| Slug | Last checked | Signal | Suggested action |
|---|---|---|---|
| example-old-mcp | 2026-05-29T06:12Z | homepage 404 (1st failure) | recheck-next-sweep |
| acme-server | 2026-05-29T06:13Z | repository archived: true | archive-entry (reason: repository archived) |
| widget-co-mcp | 2026-05-29T06:15Z | homepage now describes a CRM product, not MCP | archive-entry (reason: out-of-scope) |
| longshot-mcp | 2026-05-29T06:18Z | no release in 14 months | flag-stale |
| renamed-tool | 2026-05-29T06:20Z | homepage redirects to https://new-name.dev | editor-decision (proposed: rename + update homepage) |

## Hosts that rate-limited

- github.com — 3 entries hit secondary rate limit; retried with
  back-off, all completed.

## Notes

- `example-old-mcp` is on its first failed sweep. Archive only if it
  fails again next week.
- `renamed-tool` looks like a rebrand, not a new project. Per the
  near-duplicate playbook this is "same project, renamed". The
  curator did not draft a new entry; it queued an `editor-decision`.
- No entry was archived inside this task. The two archive
  suggestions need editor approval via the `archive-entry` task.

Sources fetched: one homepage URL + one repository URL per entry,
logged in the run artifact at sweeps/2026-05-29.json.
```

## Why this output is good

- One row per changed signal; the 79 unchanged entries are summarised
  in a count, not listed.
- Every suggested action maps to a real next-step task.
- Archive proposals carry a stated reason and primary signal.
- The first-failure dead link is not auto-archived — it waits for a
  second sweep, matching the hard rule.
- Rate-limited hosts are surfaced so the next sweep can plan around
  them.
