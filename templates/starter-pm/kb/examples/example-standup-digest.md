# Example: Standup digest (good)

A golden few-shot example. One input, one good response. No
commentary in the response itself.

## Input

Mission: `Launch the customer portal beta`
Date: 2026-05-12
Activity in window (last 24h):

- EW-201 (Coder/Pavel): merged PR for login flow. Status moved
  IN_PROGRESS → DONE.
- EW-204 (Researcher/Maria): published competitor scan. Status
  moved IN_PROGRESS → DONE.
- EW-207 (Coder/Pavel): in REVIEW. Next step is addressing
  CodeRabbit feedback on the billing webhook.
- EW-212 (Designer/Ana): IN_PROGRESS, last activity 4 working days
  ago. Owner has not commented. Stale, classified forgotten.
- EW-215 (Coder/Pavel): BLOCKED by EW-219 (Curator/none assigned).
  Carried from yesterday's standup.
- EW-219 (Curator/none): TODO, no owner. Carried as a blocker
  rationale yesterday.

## Output

# Standup — Launch the customer portal beta — 2026-05-12

## Done

- [EW-201] — Pavel — login flow shipped to staging.
- [EW-204] — Maria — competitor scan published to the Mission KB.

## Next

- [EW-207] — Pavel — address CodeRabbit feedback on the billing
  webhook PR and re-request review.

## Blocked

- [EW-212] — Ana — blocker: no movement in 4 working days, owner
  has not responded — unblock: confirm the Task is still active or
  move to backlog (private nudge sent).
- [EW-215] — Pavel — blocker: depends on EW-219 which has no owner
  — unblock: assign EW-219 to a Curator. (carried, 2)
- [EW-219] — none — blocker: Task has no owner — unblock: owner
  assigns a Curator with the `taxonomy` skill. (carried, 2)

Board noise warning — 6 rows across sections. Consider grooming.
