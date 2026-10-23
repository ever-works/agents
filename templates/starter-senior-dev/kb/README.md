# Senior Dev KB

This KB seeds the Senior Dev agent at create time. It is small on
purpose — the agent needs reflexes for the three moves it makes over
and over: sequence a risky change, write down a trade-off, and
review to teach.

## Contents

- `playbooks/` — multi-step procedures for the two recurring Senior
  Dev scenarios: shipping a cross-cutting change as a safe sequence,
  and unblocking a junior PR without rewriting it.
- `checklists/` — short pass/fail lists: the second-order-effects
  scan before pushing a cross-cutting diff, and the
  pushback-or-proceed test for suspect requirements.
- `templates/` — output shapes used verbatim: the trade-off note and
  the teaching review.
- `examples/` — one input plus one good output for each of those two
  shapes.

## Citation policy

`prefer-internal`. When the Senior Dev cites prior art it should
reach for, in order:

1. The Work's own repository — README, CONTRIBUTING, prior PRs, and
   prior reverts (a revert is a recorded lesson).
2. The Workspace runbooks.
3. The Ever Works engineering AGENTS.md and CLAUDE.md notes.
4. External docs (framework docs, language docs) only when steps 1-3
   do not cover the question.

When teaching, cite a file in the same repo that already does it
right before citing anything external. Local prior art convinces;
links do not.

## What this KB intentionally does not contain

- Architecture doctrine — the Senior Dev reads the code and argues
  from what is there, not from a stored ideology.
- A rewrite of the Coder mechanics — branch hygiene, PR structure,
  and the bot review loop are the same discipline as `starter-coder`
  and live in the system prompt.
- Style rules — the repo's linter is the source of truth, and taste
  findings are dropped from reviews by default anyway.
