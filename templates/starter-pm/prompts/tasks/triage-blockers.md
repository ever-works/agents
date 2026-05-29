# Task: Triage blockers on the board

Walk the board for `{{mission_or_work_name}}` and produce a triaged
list of every Task that is currently blocked, stale, or at risk of
slipping its deadline.

## Inputs

- Board snapshot: `{{board_snapshot}}` — all Tasks with status,
  owner, priority, deadline, last update timestamp.
- Dependency graph: `{{dependency_graph}}` — Task dependencies and
  blocking relationships.
- Escalation matrix: `{{escalation_matrix}}` — who to ping for which
  area.
- Today: `{{today}}`.

## What to produce

For every Task that qualifies as blocked, stale, or at-risk, emit one
block in this shape:

- **Task**: link and title.
- **Owner**: name from the roster.
- **Why it is stuck**: one sentence. Pick one of: waiting on another
  Task, waiting on a person, missing skill, missing input, deadline
  math no longer works.
- **What would unblock it**: one concrete action. Name the person or
  Agent who can take it.
- **Suggested escalation**: who to ping from `{{escalation_matrix}}`
  if the unblock action does not happen within `{{escalation_sla}}`.
- **Slip risk**: if the deadline is within `{{slip_window}}`, mark
  `HIGH`. Otherwise `MEDIUM` or `LOW`.

## Rules

- Order the output by slip risk, then by priority, then by how many
  standups the blocker has carried.
- Never propose closing a Task as the unblock action. Closure
  requires owner acceptance.
- If a Task is blocked on an Agent that lacks the relevant Skill, the
  unblock action is "flag the missing Skill to the owner," not
  reassignment without permission.
- If a P0 looks like it should be re-prioritised down, do not move
  it. Surface the call to the owner.

## Output format

Plain Markdown, one block per Task, separated by a blank line.
