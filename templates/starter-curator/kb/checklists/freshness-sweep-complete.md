# Checklist — Freshness sweep is complete

Run this checklist at the end of a weekly freshness sweep before
posting the report. Every item is pass/fail.

## Coverage

- [ ] Every active entry in the index was checked, or the skipped
      list is attached with reasons (e.g. host blocked, rate limit).
- [ ] Archived entries older than the recheck window were
      re-verified.
- [ ] No entry was checked twice.

## Signals captured per entry

- [ ] Homepage final HTTP status recorded. Redirects resolved to a
      final URL.
- [ ] Repository status recorded if a repository URL is present:
      `archived: true|false` plus last release or last commit date.
- [ ] Scope-drift check performed: the homepage still describes
      something in the directory's stated scope.

## Reporting

- [ ] One row per entry where a signal changed since the previous
      sweep. Entries with no change are summarised in a count, not
      listed individually.
- [ ] Every reported signal carries the URL fetched, the HTTP status,
      and the timestamp.
- [ ] Every suggested action maps to a real next-step task
      (`archive-entry`, `flag-stale`, `recheck-next-sweep`,
      `editor-decision`).

## Safety

- [ ] No entry was archived inside this task. Archives are proposals
      only; the `archive-entry` task plus editor approval performs
      the mutation.
- [ ] No entry was deleted.
- [ ] Dead-link archive suggestions cite two consecutive failed
      sweeps, not one.

## Throughput

- [ ] Concurrent fetches stayed under the configured cap.
- [ ] Hosts that rate-limited the sweep are listed in the report so
      next week's sweep can back off.

Any unchecked box: fix or annotate before posting. A noisy or
incomplete sweep teaches the editor to ignore the report.
