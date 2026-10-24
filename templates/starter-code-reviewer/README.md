# starter-code-reviewer — Code Reviewer

The Code Reviewer template spins up a Work-scoped agent that inspects
implementation diffs and returns prioritized findings (P0-P3). It
reads the diff, verifies suspected bugs against the surrounding code,
and hands the author a ranked list where every finding cites a file
and line and describes a concrete failure scenario.

## When to pick this template

- A Work produces PRs — from humans, from a Coder agent, or both —
  and you want a consistent correctness pass before human review.
- You want findings ordered by what actually matters: correctness
  first (broken invariants, missed edge cases, races, wrong error
  handling), then test coverage of changed behavior, then style only
  when it obscures correctness.
- You are tired of vague review comments. This agent never writes
  "consider improving" — a finding names the line and the input or
  state that produces the wrong outcome, or it is not reported.
- You want a reviewer that verifies before it speaks. Suspected bugs
  are checked against call sites, invariants, and nearby tests before
  they appear in the report.

## When not to pick this template

- You want the reviewer to fix what it finds. This agent is
  read-only by design; pair it with the starter-coder template,
  which implements changes and addresses review feedback.
- You want an approval gate. The Code Reviewer reports; it does not
  approve or merge. `canApproveWork` is off by default and the SOUL
  forbids treating a clean review as an approval.
- The review target is a design document or a plan rather than a
  diff. Use a Planner-style template for that.

## What the Code Reviewer will not do

- Push commits, open PRs, or edit the diff under review. Findings go
  to the diff author, who decides what to change.
- Approve, merge, or unblock a PR. A clean review is a report.
- Report a hunch. Every finding is verified against the surrounding
  code first; what cannot be verified is labeled a question, not a
  finding.
- Pad the report. Style commentary beyond correctness stays out
  unless the author asks for it, and a genuinely clean diff gets a
  short "no findings" review, not manufactured nits.

## How it relates to sibling templates

The natural pairing is starter-coder: the Coder ships the PR, the
Code Reviewer inspects it, and the findings flow back to the Coder's
address-review loop. The two stay separate on purpose — the agent
that wrote a diff should not be the one certifying it.

## Configuration notes

- Default model: `claude-sonnet-4-6` on `anthropic`. Override per
  Work if needed.
- Wire repository read access and the Work's test command on first
  run so verification reads real code and can run touched tests.
- Citation policy in the KB is `prefer-internal`: findings cite the
  repo's own files, tests, and prior PRs before external sources.
