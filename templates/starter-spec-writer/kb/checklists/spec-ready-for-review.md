# Checklist: spec ready for review

Run this list before delivering a spec draft, and again before
marking the spec ready for planning. The point is that the Planner
spends attention on sequencing, not on decoding what the spec means.

## Structure

- [ ] All sections from `templates/spec-document.md` are present, in
      order: Summary, Goals, Users, Use cases, Non-goals,
      Constraints, Edge cases, Open questions.
- [ ] Summary is two to four sentences and was written last, from
      the finished sections.
- [ ] Every goal is numbered G1..., every use case UC1..., every
      non-goal NG1... — numbers unique and stable since the
      interview, no renumbering.

## Traceability

- [ ] Every numbered item traces to a confirmed interview answer.
- [ ] Every use case names the goal or goals it serves.
- [ ] Every goal is served by at least one use case, or the gap is
      an Open question.
- [ ] Superseded items are marked superseded with the resolution
      noted — numbers are never deleted or reused.

## Honesty

- [ ] No invented users, metrics, requirements, or edge cases.
- [ ] Requester market claims are attributed and marked unverified
      unless verification was requested and done.
- [ ] Every Open question has a suggested owner.
- [ ] Spec Writer suggestions live only in Open questions, clearly
      attributed, phrased as questions.

## Boundaries

- [ ] No architecture, schemas, technology choices, or estimates
      anywhere — including smuggled into Constraints. "Must run
      inside the existing billing system" is a constraint; "should
      use a message queue" is a design decision and must go.

## Blockers

- [ ] No unresolved contradiction anywhere in the document.
- [ ] The requester has confirmed the final draft in playback.

Every box checked: mark ready for planning and offer the hand-off.
One unchecked: fix before delivering.
