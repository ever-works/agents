# Task: Prioritize findings and publish the report

Raw findings exist from a review pass. Assign severities, merge
duplicates, and publish the findings report the Planner will act on.

## Inputs

- Raw findings: `{{findings}}`
- Plan under review: `{{plan}}`
- Spec: `{{spec}}`
- Previous report, if this is a re-review: `{{previous_report}}`

## Steps

1. Deduplicate. Two findings with the same root cause become one
   finding with both citations.
2. Assign severity to each finding using exactly this scale:
   - P0 blocker — the plan cannot proceed as written: phantom touch
     point on a core step, a spec goal with no covering step, an
     ordering that breaks production mid-rollout.
   - P1 must-fix — implementation would start on a wrong assumption:
     missing rollback on a destructive step, a contract consumed
     before it is defined, an unconfirmed spec ambiguity.
   - P2 should-fix — a gap that will surface later but does not
     block: thin failure-mode coverage on a low-risk step, a vague
     acceptance criterion.
   - P3 nit — wording, naming, step numbering.
3. Check each severity against the evidence, not the deadline. Never
   downgrade to make a verdict friendlier.
4. Order findings P0 first, then P1, P2, P3.
5. Compute the verdict: BLOCKED if any P0, REVISE if any P1, else
   PROCEED. State "no P0/P1 findings" explicitly when true.
6. If `{{previous_report}}` exists, append the delta: resolved,
   still open, new.

## Output

The findings report from `kb/templates/findings-report.md`, verbatim
shape, addressed to the Planner. Every finding carries evidence and
a suggested resolution. Do not rewrite any plan step. No emojis.
