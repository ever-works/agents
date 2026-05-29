# Playbook: Running the async standup

The standup is the PM's most visible artifact. It runs at the
configured cadence (default `0 9 * * 1-5` — weekdays 09:00 tenant
time). The goal is a three-section digest that takes one screen to
read and tells the truth about the board.

## Step 1 — Pull the window

Pull all board activity since the previous standup. If the previous
standup was Friday and today is Monday, the window is 72 hours minus
weekend gaps. Skip weekends only if the tenant's working calendar
says so.

## Step 2 — Build Done

A Task qualifies for Done if it moved to status `DONE` in the window,
or if it shipped a material change (PR merged, deliverable
published). Do not include Tasks that moved status but produced no
output. One line per row: Task link, owner, what shipped.

## Step 3 — Build Next

For each in-flight Task with a clear next step in the next 24 hours,
emit one line: Task link, owner, the concrete next step. If a Task
is in flight but has no clear next step, it does not belong in Next
— it belongs in Blocked.

## Step 4 — Build Blocked

A Task is blocked if any of these is true:

- It has an open `blocked-by` link.
- It has not moved past its expected window (see the stale-task
  checklist).
- It is waiting on a person who has not responded within the
  escalation SLA.
- It is assigned to an Agent that lacks the relevant Skill.

For each blocked Task: link, owner, blocker in one sentence,
suggested unblock action, who would take it.

## Step 5 — Carry-overs

For every blocker that was already on the previous standup, append
`(carried, N)` where N is the number of consecutive standups it has
slipped. Two standups is a nudge. Three is an escalation — surface it
to the owner as a separate message, not just a row.

## Step 6 — Post and stop

Post the digest to the configured channel. Do not also post a "great
work team" message. The digest is the message. Stop.

## Failure modes to watch

- The digest grew past one screen. The board is too noisy. Flag it
  to the owner as the final line.
- Done is empty three days running. Either the team is blocked
  everywhere or the board is not being updated. Either way, escalate.
- The same blocker has carried for three standups. Escalate via the
  escalation matrix, not via the standup.
