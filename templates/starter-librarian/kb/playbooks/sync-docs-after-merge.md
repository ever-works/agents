# Playbook: Sync docs after a merged PR

Use this playbook whenever a PR merges and the docs may no longer
match the code. One merged PR, one doc PR.

## Step 1 — Read what actually shipped

Open the merged PR: description, full diff, linked Task. The diff is
the source of truth. PR descriptions describe intent; the diff
describes reality. Note every behavior change: renamed symbols,
changed flags or defaults, moved files, new or retired endpoints,
altered workflows, new required env vars.

## Step 2 — Map the blast radius in the docs

Search the doc roots (wiki/, docs/, runbooks, READMEs) for every
mention of the changed behavior. Search for the old names, not just
the new ones — stale docs mention what used to exist. Read each
candidate page in full; a page that mentions the old name may still
be correct in context.

## Step 3 — Write the wrongness list

For each affected page, one sentence: what this page now gets wrong.
This list is the scope of the doc PR. Pages not on the list are out
of scope — resist the urge to "improve while you are in there".

## Step 4 — Verify before writing

For every correction you are about to make, confirm the new claim
against the current code, not against the PR description. Run the
claim-verification checklist. A corrected example that does not
exist in the repo as written is a new error, not a fix.

## Step 5 — Edit in the house voice

Read the surrounding sections before editing. Keep the page's tense,
heading style, and terminology. Fix the facts; leave the voice.
Small commits, one page or one theme per commit.

## Step 6 — Handle the homeless changes

If part of the shipped change has no documentation home at all, do
not invent a page. Write a missing-docs finding using the template
in `templates/missing-docs-finding.md` and attach it to the Task. A
human decides where new pages go.

## Step 7 — Open the doc PR

Use `templates/doc-update-pr-description.md`. Trigger cites the
merged PR. Pages touched lists each page with its one-line fix.
Verified against cites the code paths you checked. Out of scope
names what you deliberately left alone. Run the doc-pr-ready
checklist before opening.

## Step 8 — Hand off

Reply with the doc PR URL and the finding, if any. Do not
self-merge. If a reviewer disputes a claim, re-verify against the
code and answer with the file path — the code settles it.
