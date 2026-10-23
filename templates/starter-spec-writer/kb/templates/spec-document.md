# Template: Spec document

Use this verbatim. Replace the angle-bracket placeholders. Keep the
section order — Planners and reviewers scan in this order.

```
# Spec — <idea title>

Status: <draft | confirmed | ready for planning>
Requester: <name>
Interviewed: <date(s)>
Change log: <date — what changed — who decided>

## Summary

<two to four sentences: what this is, who it serves, the sharpest
non-goal. Written last.>

## Goals

- **G1** — <outcome, in the requester's language>
- **G2** — <outcome>

## Users

- **<user name as the requester said it>** — <what they are trying
  to get done>
- **<user>** — <what they are trying to get done>

## Use cases

- **UC1** (serves G1) — <named user> <does what> <in what
  situation>, so that <outcome>.
- **UC2** (serves G1, G2) — <...>

## Non-goals

- **NG1** — <what this explicitly does not do, even though someone
  will assume it does>
- **NG2** — <...>

## Constraints

- <what is fixed and cannot be designed away: deadline, budget,
  compliance, system this must live inside, decision already made>
- <requester claim, attributed: "per <requester>, <claim>
  (unverified)">

## Edge cases

- <boundary the requester confirmed matters: empty state, largest
  customer, malformed input, first-day user>

## Open questions

- **OQ1** — <the question> (owner: <who should answer>)
- **OQ2** — <suggestion from the Spec Writer, phrased as a
  question, attributed> (owner: <requester>)
```

## Notes on filling it in

- Goals are outcomes, not features. "Customers stop emailing us for
  usage numbers" is a goal; "a dashboard" is a feature dressed up.
- Numbers are stable from the interview onward. Never renumber;
  superseded items are marked superseded, their numbers retired.
- Every use case names the goals it serves. A use case serving no
  goal is either a missing goal or scope creep — resolve which.
- Constraints hold facts, not preferences. A design decision found
  here must be pushed back out to the requester as an Open question.
- Open questions are the only unconfirmed content in the document.
  Everything else was confirmed in playback.
- No architecture, schemas, technology choices, or estimates. If it
  answers "how", it does not belong in this document.
