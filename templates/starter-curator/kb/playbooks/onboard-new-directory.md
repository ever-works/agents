# Playbook — Onboard a new directory

Run this the first time the Curator is wired to a directory Work it
has not seen before. The goal is to understand the directory's scope,
voice, taxonomy, and existing index before producing any drafts.

## Step 1 — Read the scope statement

Open the directory's `README.md` and any `SCOPE.md` or `ABOUT.md`. In
one paragraph, write back what is in scope and what is explicitly
out of scope. If the scope is fuzzy ("tools for developers" with no
boundary), stop and ask the editor before going further. A fuzzy
scope generates duplicate work and noisy candidates.

## Step 2 — Map the taxonomy

Load the taxonomy file (often `tags.yml` or `categories.yml`). List
every existing tag and the count of entries under each. Note which
tags are heavily used and which are nearly empty. The curator reuses
heavy tags by default and treats nearly-empty tags as either
candidates for retirement or as the seed for a future gap analysis.

## Step 3 — Sample the voice

Read ten existing entries chosen at random from across the index.
Extract the recurring sentence patterns: tense, person, sentence
length, what each entry's first sentence does (says what the thing
is), what the second paragraph does (says what it does and who uses
it). Save the patterns; the curator's first drafts must match.

## Step 4 — Snapshot the index

Build a one-time snapshot of every entry's slug, homepage URL,
repository URL, license, and last-checked timestamp. This snapshot
becomes the baseline for the first freshness sweep. Without it the
first sweep cannot tell what changed.

## Step 5 — Schedule the heartbeat

Confirm the heartbeat cadence is set to Mondays 06:00 UTC. Confirm
`requireAllApprovers: true` is on. Confirm the editor's account is
wired as the approver. Propose the first gap analysis for the
category with the fewest entries; do not start drafting candidates
until the editor has approved the scope summary from Step 1.
