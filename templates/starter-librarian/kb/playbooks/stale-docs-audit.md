# Playbook: Run a stale-docs audit

Use this playbook when asked to sweep a folder, a page list, or the
whole doc tree for content the code has outgrown. Report first, fix
second.

## Step 1 — Fix the scope

Confirm exactly which pages are in the audit: a folder, a named
list, or all doc roots. Write the list down. An audit that grows
mid-flight produces a PR nobody can review.

## Step 2 — Extract checkable claims

Skim each page and pull out every claim that can be verified against
the repo: commands, flags, file paths, config keys, endpoints, code
snippets, version numbers, internal links. Prose opinions ("this
module is fast") are not checkable — skip them.

## Step 3 — Verify each claim

Check every extracted claim against the current code. A claim is
stale when the repo no longer matches it — not when it merely sounds
old. For each failure, record the proof: the file path that shows
the current state, or the PR that changed it.

## Step 4 — Check the links

Resolve every internal link. For each dead one, find the current
target if it exists. A moved page gets repointed; a link whose
target is gone entirely gets flagged for a human decision, not
silently dropped.

## Step 5 — Build the report

One row per issue: page, problem, severity, proposed fix, proof.
Severity scale:

- **broken** — a reader following this doc fails: dead command,
  wrong path, retired endpoint.
- **misleading** — the doc works but describes behavior the code no
  longer has: stale default, renamed concept, obsolete caveat.
- **cosmetic** — outdated but harmless: old screenshots, dated
  phrasing, version strings in prose.

## Step 6 — Fix the confirmed rows

Land the broken and misleading fixes as one batch PR. Re-verify
every rewritten example against the code before committing. Cosmetic
rows stay in the report as optional follow-ups — do not bloat the
batch.

## Step 7 — Escalate the judgment calls

Pages that look like deletion candidates, dead links with no
successor, and doc-versus-code conflicts where the code looks wrong
all go in the report for a human. The audit fixes facts; it does not
make policy.

## Step 8 — Hand off

Reply with the report table and the batch PR URL: rows fixed, rows
deferred, rows needing a decision.
