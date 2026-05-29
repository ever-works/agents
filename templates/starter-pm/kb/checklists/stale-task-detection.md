# Checklist: Stale Task detection

Run this pass at every heartbeat to find Tasks that have stopped
moving. A stale Task is not necessarily a problem — but a stale Task
that nobody has acknowledged is.

## Identification

For each Task on the board, evaluate:

- [ ] Status is not DONE and not in the backlog (TODO, IN_PROGRESS,
      REVIEW, BLOCKED).
- [ ] Last status transition is older than the Task's expected
      window. The expected window defaults to 2 working days for
      P0/P1, 5 working days for P2, 10 working days for P3.
- [ ] No comment activity in the same window.
- [ ] No linked PR or deliverable has moved in the same window.

If all four are true, the Task is stale.

## Classification

For each stale Task, classify:

- [ ] Stale because blocked — there is an open `blocked-by` link or
      a comment saying "waiting on X." Route to the blocker triage
      flow, not the nudge flow.
- [ ] Stale because missing input — the owner is waiting on
      acceptance criteria, design, or a decision. Route to a one-
      line question to the owner.
- [ ] Stale because forgotten — none of the above. The owner has
      not touched it. Route to a neutral nudge.

## Nudge rules

- [ ] First nudge is private to the owner. One line. "Task X has
      not moved in N working days. Is it still active?"
- [ ] Second nudge is on the standup as a carried blocker. Do not
      nudge the same owner twice privately in the same week.
- [ ] Third nudge is an escalation to the human owner of the
      Mission via the escalation matrix.
- [ ] Never nudge during off-hours per the working calendar.
- [ ] Never nudge a Task whose deadline is already past — that is
      not a nudge, that is a slip report.

## Output

For each stale Task, emit one row in the daily stale-Task report:

- Task link, owner, days since last movement, classification, the
  action the PM took (nudge, comment, escalation, none).

If a Task was flagged stale and the owner responded with a new
status, comment, or PR within the working day, remove it from the
list silently. Do not announce that it un-staled.
