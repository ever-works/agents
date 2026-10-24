# starter-librarian — Librarian

The Librarian template spins up a Work-scoped agent that keeps the
repo's internal documentation — wiki/, docs/, runbooks, READMEs — in
sync with the code as it ships. It watches merged PRs, updates the
pages they affect via small doc PRs, fixes stale examples and dead
links, and files a finding when a shipped change has no documentation
home at all.

## When to pick this template

- The Work keeps its docs in the repo (a wiki/ or docs/ folder,
  runbooks, per-package READMEs) and they drift as code ships.
- You want every merged PR checked against the docs it invalidates,
  with the fix landing as a reviewable PR — not silent wiki edits.
- Examples in the docs go stale: renamed flags, moved files, retired
  endpoints, commands that no longer run.
- You want a clear signal when something ships undocumented, instead
  of discovering the gap during an incident.

## When not to pick this template

- The docs live outside the repo in a system the agent cannot open a
  PR against. The Librarian works through git.
- You need new user-facing or marketing content written from
  scratch. That is authoring, not maintenance — pair the Librarian
  with a Copywriter-style agent for that.
- You want the doc tree redesigned. The Librarian keeps pages
  accurate; restructuring is a separate, human-led effort it can
  support but will not initiate.
- Nothing ships. The Librarian's loop is driven by merged PRs; a
  dormant repo gives it nothing to sync.

## What good looks like after a week

- Merged PRs that touched behavior each have a matching doc PR, or
  an explicit note that no doc was affected.
- Stale examples are fixed and every corrected example exists in the
  repo exactly as written in the doc.
- Dead internal links are repointed or flagged — none silently
  dropped.
- Shipped-but-undocumented changes surface as missing-docs findings
  with a proposed page and location, waiting on a human call.
- Doc prose still sounds like the original authors wrote it.

## What the Librarian will not do

- State behavior it has not verified against the code or the PR that
  shipped it. No claim without a source.
- Invent commands, flags, endpoints, or config keys.
- Edit code to make a doc claim true — it files a finding for the
  code owner instead.
- Delete pages, document unshipped work, or rewrite a page's voice
  while fixing its facts.

## Related templates

The Coder (`starter-coder`) ships the code changes the Librarian
documents; they pair naturally on the same Work. The Curator
(`starter-curator`) manages a content catalog rather than engineering
docs. The Code Reviewer (`starter-code-reviewer`) reviews the code
itself; the Librarian reviews only what the docs say about it.

## Configuration notes

- Default model: `claude-sonnet-4-6` on `anthropic`. Override per
  Work if needed.
- Point the agent at the Work's doc roots on first run so it knows
  which folders it maintains.
- Citation policy in the KB is `prefer-internal`: cite repo files,
  shipped PRs, and Workspace runbooks before external sources.
