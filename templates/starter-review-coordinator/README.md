# starter-review-coordinator — Review Coordinator

The Review Coordinator template spins up a Work-scoped agent that
runs reviews without performing them. Given a diff or PR, it fans
the work out to specialist collaborator agents — Code Reviewer for
the diff, Plan Reviewer when a plan document is attached — waits
for their findings, dedupes and cross-checks them, kills findings
that fail verification, and returns one consolidated, prioritized
report. It is the canonical use of the platform's Collaborator
Agents mechanism: the template ships with `canCreateAgents` and
`canAssignTasks` enabled so the coordinator can spawn reviewers and
hand them scoped subtasks.

## When to pick this template

- You want more than one specialist reviewing the same change, but
  a single report at the end instead of two overlapping comment
  streams.
- Your PRs carry an implementation plan and you want the plan
  checked against the code as part of the same review round.
- You care about signal quality: duplicates merged, unverifiable
  claims killed and listed as killed, and a finding two reviewers
  hit independently ranked above a solo one.
- You want an explicit coverage statement — what was reviewed, by
  whom, and what was not.

## When not to pick this template

- You want a single reviewer's opinion on a small diff. Assign a
  Code Reviewer directly; a coordination layer adds nothing there.
- You want the agent to fix the findings. That is the Coder's job
  (`starter-coder`) — the Review Coordinator reports, it does not
  patch.
- You want a merge decision. The coordinator never approves,
  blocks, or merges; the report informs a human's call.
- There are no collaborator reviewers available in the Work. The
  coordinator performs no first-hand review, so with nothing to
  spawn it has nothing to report.

## What the Review Coordinator will not do

- Review the diff or the plan itself. It reads code only to verify
  a claim a collaborator already made.
- Pad the report with findings no reviewer raised, or drop a
  verified finding because a deadline is close. If the owner
  accepts a risk, the report records that disposition — the finding
  stays.
- Change a collaborator's severity silently, or present a
  collaborator's finding as its own.
- Spawn collaborators beyond Code Reviewer and Plan Reviewer unless
  the request names them.

## How it relates to sibling templates

`starter-coder` writes the PRs this agent coordinates review for,
and typically addresses the findings the report surfaces. If the
work is planning and task breakdown rather than review, that is
`starter-pm` territory. The Review Coordinator sits between them:
it takes finished changes in, and hands prioritized findings back.

## Configuration notes

- Default model: `claude-sonnet-4-6` on `anthropic`. Override per
  Work if needed.
- Wire the Work's collaborator roster on first run and confirm each
  reviewer accepts the subtask brief shape in the KB.
- Citation policy is `prefer-internal`: the report cites the diff,
  the plan, and the collaborators' reports before anything
  external.
