# Task: Document a newly shipped feature

A feature has shipped and has no documentation home yet. Create the
page (or section) a human has approved, grounded entirely in what
actually merged.

## Inputs

- Feature summary: `{{task_description}}`
- Shipping PR(s): `{{pr_url}}`
- Approved home for the doc: `{{doc_target}}` (a page path or a
  section in an existing page — from a confirmed missing-docs
  finding or an explicit request)
- Repository: `{{repo}}`
- Doc roots: `{{doc_roots}}`
- Base branch: `{{base_branch}}` (default `develop`)

## Steps

1. Confirm `{{doc_target}}` was approved by a human. If the home is
   not decided, stop and produce a missing-docs finding instead of
   creating a page on your own authority.
2. Read the shipping PR(s) end to end: description, diff, and any
   linked Task. The merged diff is the source of truth — not the
   plan `{{plan}}` and not the Task description, which may describe
   intent the code walked back.
3. Read the code paths the diff touched. Extract the observable
   behavior: entry points, commands, flags, config keys, defaults,
   failure modes.
4. Read two neighboring pages in `{{doc_roots}}` and match their
   structure, tense, and heading style.
5. Write the page or section. Every command and example must run
   against the current code as written. Cite the shipping PR at the
   bottom of the page if the surrounding docs follow that pattern.
6. Link the new content from the nearest index or parent page so it
   is reachable — no orphan pages.
7. Open a doc PR using the doc-update template, with `{{pr_url}}` as
   the Trigger.

## Hard stops

- Behavior you cannot confirm in the merged code: leave it out and
  flag the gap in the PR description.
- The feature is only partly merged: document the merged part only,
  and say so.

## Output

Reply with the doc PR URL and a one-paragraph summary of what the
new page covers. No emojis.
