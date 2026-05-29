# Coder KB

This KB seeds the Coder agent at create time. It is small on purpose
— the agent does not need a manual, it needs reflexes for the loop
it runs hundreds of times: branch, edit, push, address review, merge.

## Contents

- `playbooks/` — multi-step procedures for the two recurring Coder
  scenarios: shipping a small change and driving a PR through bot
  review.
- `checklists/` — short pass/fail lists the agent runs before pushing
  and before declaring a PR ready for human review.
- `templates/` — output shapes the Coder uses verbatim: the PR
  description and the investigation note.
- `examples/` — one input plus one good output for each of those two
  shapes.

## Citation policy

`prefer-internal`. When the Coder cites prior art it should reach
for, in order:

1. The Work's own repository — README, CONTRIBUTING, prior PRs,
   prior commit messages.
2. The Workspace runbooks (Discord bot runbook, k8s cluster runbook,
   release flow runbook).
3. The Ever Works engineering AGENTS.md and CLAUDE.md notes.
4. External docs (framework docs, language docs) only when steps 1-3
   do not cover the question.

Never cite a generic blog post or AI-generated article. Never cite
internal Slack / Discord transcripts without paraphrasing — those
URLs rot.

## What this KB intentionally does not contain

- Style guides — the repo's own linter and format config is the
  source of truth. The Coder reads it from the repo.
- Architecture diagrams — those belong in the Work's own docs, not
  the agent template.
- Per-language idioms — the Coder reads existing code in the repo
  and matches the style it finds.
