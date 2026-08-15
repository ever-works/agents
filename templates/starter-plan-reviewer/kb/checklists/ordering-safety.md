# Checklist: ordering safety

Run this list over the plan's step sequence as a whole. Ordering
bugs live between steps — each step can be individually correct and
the sequence still breaks production mid-rollout. Cite both steps in
every finding, not just one.

## Data before code

- [ ] Every migration lands in a step before any step whose code
      reads or writes the new column, table, or index.
- [ ] Destructive migrations (drop column, drop table) come after
      the step that removes the last reader — never before, never
      in the same deploy.
- [ ] Backfills are their own step, ordered after the schema change
      and before the code that assumes the data is present.

## Contracts before implementations

- [ ] Shared types, interfaces, API schemas, and events are defined
      in a step before any step that consumes them.
- [ ] A widened contract (new optional field) ships before the
      producer that emits it; a narrowed contract ships after the
      last consumer that needs the old shape is gone.
- [ ] Cross-package or cross-service changes state which side
      deploys first and why that order tolerates skew.

## Flags before rollouts

- [ ] Risky behavior changes ship behind a flag in one step, get
      enabled in a later step, and the flag's removal is a separate
      step after stability is confirmed.
- [ ] No step both introduces a behavior and removes its kill
      switch.

## Deploy skew

- [ ] For every pair of adjacent steps that deploy separately: old
      code against new schema works, and new code against old
      schema works, for the overlap window.
- [ ] Queue and event payload changes tolerate an old consumer
      seeing a new payload (unknown fields must not fail open).

## Rollback per step

- [ ] Every destructive or user-facing step names its rollback.
- [ ] The rollback is real for that step: dropped data, deleted
      queues, and sent notifications cannot be "revert the PR".
- [ ] Rolling back step N does not strand the output of step N-1 in
      a broken state.

## Severity guide for fails

- Consumer ordered before its migration or contract: P0.
- Destructive step with no stated rollback: P1.
- Skew window unexamined between separately-deployed steps: P1.
- Flag removal bundled with the behavior it gates: P1.
- Backfill folded into a code step: P2.
