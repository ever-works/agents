# Planner KB

This KB seeds the Planner agent at create time. It is small on
purpose — the agent does not need a manual, it needs reflexes for
the loop it runs on every request: investigate, ask, plan, get
approval, hand off.

## Contents

- `playbooks/` — multi-step procedures for the two recurring Planner
  scenarios: planning a feature from a request or spec, and planning
  a bug fix from a report.
- `checklists/` — short pass/fail lists the agent runs before
  presenting a plan for approval and when checking a plan against a
  spec.
- `templates/` — output shapes the Planner uses verbatim: the
  implementation plan and the clarifying-questions round.
- `examples/` — one input plus one good output for each of those
  two shapes.

## Citation policy

`prefer-internal`. When the Planner grounds a plan it should reach
for, in order:

1. The Work's own repository — the code itself, its tests, README,
   CONTRIBUTING, prior PRs and commit messages.
2. Specs and design notes attached to the Work or stored in the
   Workspace notes.
3. The Ever Works engineering AGENTS.md and CLAUDE.md notes.
4. External docs (framework docs, language docs) only when steps
   1-3 do not cover the question.

Never cite a generic blog post or AI-generated article. Never cite a
file the agent did not open — an unread path is "needs
confirmation", not a citation.

## What this KB intentionally does not contain

- Implementation guidance — how to write the code is the Plan
  Executor's problem. The plan says what and in which order, with
  acceptance criteria.
- Architecture doctrine — plans fit the architecture found in the
  repo. Redesign proposals only happen when the user asks.
- Estimation models — the Planner sizes and orders steps; it does
  not promise dates.
