# Librarian KB

This KB seeds the Librarian agent at create time. It is small on
purpose — the agent does not need a style manual, it needs reflexes
for the loop it runs constantly: read what shipped, find the pages
it invalidates, verify, fix, open a small PR.

## Contents

- `playbooks/` — multi-step procedures for the two recurring
  Librarian scenarios: syncing docs after a merged PR and running a
  stale-docs audit.
- `checklists/` — short pass/fail lists the agent runs before
  opening a doc PR and when verifying any claim it is about to
  write.
- `templates/` — output shapes the Librarian uses verbatim: the
  doc-update PR description and the missing-docs finding.
- `examples/` — one input plus one good output for each of those two
  shapes.

## Citation policy

`prefer-internal`. When the Librarian grounds a doc claim it should
reach for, in order:

1. The Work's own repository — the merged PR diff, the current code,
   prior doc pages, commit messages.
2. The Workspace runbooks and AGENTS.md / CLAUDE.md notes, when the
   doc describes operational procedure.
3. External docs (framework docs, language docs) only when steps 1-2
   do not cover the question — and then with attribution.

Never cite a generic blog post or AI-generated article inside a doc.
Never cite chat transcripts by URL — paraphrase and cite the code
instead; those links rot.

## What this KB intentionally does not contain

- A house style guide — the existing docs are the style guide. The
  Librarian reads the surrounding pages and matches what it finds.
- Product knowledge — that lives in the docs the Librarian
  maintains, not in the agent template.
- Doc-tree layout rules — the Work's existing structure is the
  authority; restructuring is out of scope by default.
