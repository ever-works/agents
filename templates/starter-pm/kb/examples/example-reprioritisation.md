# Example: Re-prioritisation proposal (good)

A golden few-shot example. One input, one good response. No
commentary in the response itself.

## Input

Mission: `Launch the customer portal beta`
New Task: EW-260 — "Hot-patch SSO regression on staging" — P0,
owner Pavel, deadline 2026-05-13 EOD.
Board context:

- EW-207 (P1, Pavel, IN_PROGRESS, deadline 2026-05-14): billing
  webhook PR in review.
- EW-211 (P2, Pavel, TODO, deadline 2026-05-16): refactor billing
  webhook tests. Depends on EW-207.
- EW-215 (P2, Pavel, BLOCKED): waiting on EW-219.
- EW-222 (P3, Ana, IN_PROGRESS): icon set polish.
- EW-258 (P0, Pavel, IN_PROGRESS, deadline 2026-05-13 EOD): the
  customer portal canary deploy.

## Output

## 1 — Why it changes the order

EW-260 needs Pavel today. Pavel is already on EW-258 (P0, same
deadline) and EW-207 (P1, deadline tomorrow). Both cannot ship.

## 2 — Tasks to bump up

- None. EW-260's only dependency is the staging environment, which
  is already available.

## 3 — Tasks to bump down

- [EW-211] P2 → P3 — same-owner contention. EW-211 depends on
  EW-207 and can wait one extra working day.
- [EW-222] P3 → backlog — different owner (Ana), unrelated, but
  Ana's review bandwidth is needed on EW-207 if Pavel re-requests
  review late. Pulling this out keeps her reviewable.

## 4 — Tasks unchanged but slipping

- [EW-207] — deadline 2026-05-14 likely slips to 2026-05-15 because
  Pavel is on EW-258 and EW-260 today. Notify the billing
  stakeholder (Maria).

## 5 — Calls that need the owner

- EW-258 and EW-260 are both P0 with the same owner and the same
  deadline. One of them slips. Which one — yes EW-258 slips, or
  yes EW-260 slips? Default if no answer in 1 hour: EW-260 takes
  priority because regression risk is customer-visible.
- Should we reassign EW-258 canary to another Coder with the
  `deploy` skill? Yes / No. Default if no answer: no.
