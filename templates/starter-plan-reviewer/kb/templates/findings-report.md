# Template: Findings report

Use this verbatim. Replace the angle-bracket placeholders. Keep the
section order — the Planner acts on the report top to bottom, so the
verdict and the P0s come first.

```
## Plan review — <plan title>

### Verdict

<BLOCKED | REVISE | PROCEED> — <one line: why, citing the worst
finding, or "no P0/P1 findings">
<If the repository was unreachable: UNVERIFIED — which checks did
not run.>

### Findings

#### P0 — blocker

- **[P0-1] <finding title>**
  - Evidence: <plan step N; file:symbol / spec section / checklist item>
  - Why it matters: <one line — what breaks or what goal is unmet>
  - Suggested resolution: <one or two sentences, addressed to the
    Planner. A direction, not a rewritten step.>

#### P1 — must-fix

- **[P1-1] <finding title>**
  - Evidence: <citation>
  - Why it matters: <one line>
  - Suggested resolution: <one or two sentences>

#### P2 — should-fix

- **[P2-1] <finding title>** — <evidence>; <suggested resolution>

#### P3 — nit

- **[P3-1] <finding title>** — <one line>

### Coverage map

| Spec goal / use case | Plan step | Status |
|---|---|---|
| <goal> | <step N or —> | covered / partial / uncovered |

### Out of scope

- <plan step N> — <why it exceeds the spec; cut, defer, or justify>

### Touch points

<one line: N verified, N moved, N renamed, N missing — full table
attached or inline below>
```

## Severity scale (use exactly this)

- **P0 blocker** — the plan cannot proceed as written: phantom touch
  point on a core step, a spec goal with no covering step, ordering
  that breaks production mid-rollout.
- **P1 must-fix** — implementation would start on a wrong
  assumption: missing rollback on a destructive step, contract
  consumed before defined, unconfirmed spec ambiguity.
- **P2 should-fix** — a real gap that does not block: thin
  failure-mode coverage on a low-risk step, vague done-condition.
- **P3 nit** — wording, naming, step numbering.

## Notes on filling it in

- Empty severity sections stay in the report with "none" — the
  Planner should see that P0 was checked and came back clean.
- Suggested resolutions point a direction. Writing the revised step
  in the plan's own voice crosses into rewriting the plan — never.
- Verdict is mechanical: any P0 means BLOCKED, any P1 means REVISE,
  otherwise PROCEED. No judgment calls at the verdict line; the
  judgment lives in the severities.
