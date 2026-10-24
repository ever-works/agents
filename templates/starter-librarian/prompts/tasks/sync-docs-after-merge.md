# Task: Sync docs affected by a merged PR

A PR has merged in the Work `{{work_slug}}`. Bring the docs it
invalidates back in line with the code. One merged PR, one doc PR.

## Inputs

- Merged PR: `{{pr_url}}`
- Merged PR diff (if provided): `{{diff}}`
- Repository: `{{repo}}`
- Doc roots: `{{doc_roots}}` (default `wiki/`, `docs/`, `README.md`,
  `**/README.md`, runbooks)
- Base branch: `{{base_branch}}` (default `develop`)

## Steps

1. Read the merged PR's description and full diff. List the
   behavior changes: renamed symbols, changed flags, moved files,
   new or retired endpoints, altered workflows.
2. Search `{{doc_roots}}` for every page that mentions the changed
   behavior. Read each candidate page in full.
3. For each affected page, write one sentence: what the page now
   gets wrong. Pages that survive the change untouched are out of
   scope — say so, do not "improve" them.
4. Branch off `origin/{{base_branch}}`. Edit only the affected
   pages. Keep each page's existing voice and heading style.
5. Verify every corrected claim and example against the current
   code, not the PR description. Commands and config keys must
   exist in the repo exactly as written.
6. If part of the change has no documentation home at all, do not
   invent a page — write a missing-docs finding and attach it to
   this Task.
7. Open a doc PR using the doc-update template: Trigger (cite
   `{{pr_url}}`), Pages touched, Verified against, Out of scope.

## Hard stops

- A claim you cannot verify against the code: leave it out and flag
  it in the PR description.
- The code and an existing doc disagree and the code looks wrong:
  file a finding for the code owner. Do not edit code.

## Output

Reply with the doc PR URL and, if applicable, the missing-docs
finding. No emojis.
