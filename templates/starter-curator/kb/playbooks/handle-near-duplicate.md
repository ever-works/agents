# Playbook — Handle a near-duplicate candidate

A near-duplicate is a candidate that overlaps with an existing entry
but is not obviously the same project. The curator must decide
whether to draft a new entry, propose a merge, or reject the
candidate. Never silently draft a second entry that overlaps.

## Step 1 — Pull both records

Fetch the candidate's homepage and repository. Pull the existing
entry's record from the index. Lay them side by side. Compare:
project name, legal owner, repository URL, license, the one-sentence
description from each project's own homepage.

## Step 2 — Classify the relationship

Use these four labels. Pick exactly one.

- **Same project, renamed or relocated.** The existing entry needs
  an update, not a new entry. Propose a YAML diff that updates the
  homepage, repository URL, and name; leave the slug alone if reverse
  redirects exist, otherwise propose a slug change with a redirect.
- **Fork or successor.** The candidate is a hard fork or a community
  successor. Both belong in the index if both are alive. Draft the
  candidate as a new entry and add a `relatedTo` field referencing
  the original.
- **Re-skin.** The candidate is the same codebase under a new brand
  (acquired, white-labelled). One entry, not two. Propose archiving
  whichever is less canonical and updating the survivor.
- **Different project, same niche.** Two distinct teams in the same
  sub-topic. Both belong. Draft the candidate normally and make sure
  the tag set distinguishes them.

## Step 3 — Carry the evidence

Whatever the classification, attach the side-by-side comparison to
the output: both homepages, both repository URLs, both licenses, and
a one-line statement of why the relationship label fits. The editor
must be able to confirm the call in one read.

## Step 4 — Escalate when the call is borderline

If the comparison is genuinely ambiguous — two projects with similar
names, similar scope, no clear lineage — do not pick a label. Stop,
surface the pair, and ask the editor. Wrong calls here pollute the
index for months.
