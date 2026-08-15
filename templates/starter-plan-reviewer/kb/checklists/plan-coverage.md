# Checklist: plan coverage and scope

Run this list for every review, after reading the spec and the plan
in full. Every item is pass/fail. A fail becomes a finding — it does
not block the review itself, which always completes and reports.

## Spec side — everything the spec wants is planned

- [ ] Every goal the spec states maps to at least one plan step.
- [ ] Every use case the spec describes is reachable through the
      planned steps (walk each one mentally, end to end).
- [ ] Every acceptance criterion in the spec has a step whose output
      can satisfy it.
- [ ] Non-functional requirements the spec names (performance,
      auth, migration windows, backwards compatibility) appear in
      the plan, not just the feature work.
- [ ] Edge cases the spec calls out explicitly are addressed or
      explicitly deferred with a reason.

## Plan side — everything planned is wanted

- [ ] Every plan step maps back to a spec goal, or is listed in the
      out-of-scope section of the report.
- [ ] No step smuggles in a refactor, dependency bump, or cleanup
      the spec never asked for.
- [ ] No step depends on a decision the spec has not made. If the
      spec is silent, there is a finding asking the Planner to
      confirm intent — not an assumption.

## Plan quality — the steps are checkable

- [ ] Every step names concrete touch points (paths, symbols,
      tables, routes) — "update the auth module" is not checkable.
- [ ] Every step has an observable done-condition a reviewer or CI
      could confirm.
- [ ] The plan states its own boundary: what it deliberately does
      not change.

## Severity guide for fails

- Spec goal with no covering step: P0.
- Use case that dead-ends mid-walk: P0 or P1 by user impact.
- Unconfirmed spec ambiguity a step depends on: P1.
- Step with no spec goal behind it: P1 if it touches shared code,
  P2 otherwise.
- Vague touch points or missing done-condition: P2.

Every fail becomes a finding with the spec line and plan step cited.
No silent passes.
