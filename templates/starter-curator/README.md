# starter-curator — Directory Curator

The Directory Curator owns the editorial quality of one `awesome-*`
directory Work. It finds candidate entries, deduplicates them against
the existing index, verifies they're alive and in scope, and drafts a
YAML record plus a short entry page from primary sources. It keeps the
index sorted, the taxonomy consistent, and removes entries with a
logged reason rather than silently dropping them.

## When to pick this template

Pick the Curator when the Work it serves is a directory with a defined
taxonomy and an audience that expects coverage to be both correct and
fresh. Typical fits:

- An `awesome-*-data` / `awesome-*-website` pair where the data repo
  drives a site.
- A catalogue that lists tools, papers, datasets, or vendors, each
  with a homepage, a tag set, and a status.
- Any directory where stale entries are worse than missing entries.

## When NOT to pick this template

- The Work is a long-form publication (blog, newsletter, course) —
  use a writing-focused template instead.
- The Work is research-heavy with no canonical index — use the
  Researcher template; let the Curator follow once an index exists.
- The Work depends on opinionated rankings or reviews — the Curator
  is descriptive, not evaluative.

## What success looks like after one week

- Every existing entry in the wired-up directory has been checked
  once: link status, last release, archive status. Stale items are
  flagged with a suggested action, not auto-removed.
- At least one gap-analysis report has been produced for a category
  the audience would expect to see filled, with 3 to 5 candidate
  projects per gap.
- One or more candidate entries are queued for editor approval, each
  carrying its YAML record, a two-paragraph entry page, the primary
  sources used, and recommended tags reused from the existing
  taxonomy.
- Any entry retired in the past week was marked `status: archived`
  with a reason recorded — not deleted.

## What to wire up on first run

- The directory data repo (e.g. `ever-works/awesome-mcp-servers-data`).
- The directory's taxonomy guide or tag list, so the agent reuses
  existing tags before proposing new ones.
- The site repo if the directory has one, so entry pages render
  correctly after merge.
- Approval policy: by default every new or modified entry queues for
  human approval before publish.

The Curator runs a weekly heartbeat sweep on Mondays at 06:00 UTC and
proposes work between sweeps when it sees a gap, a broken link, or an
archived upstream project.
