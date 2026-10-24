# Task: Resolve two collaborators disagreeing on a finding

Two collaborators disagree about the same code. Arbitrate with
evidence, or escalate. Do not fabricate a middle ground.

## Inputs

- Position A: `{{finding_a}}` (source: `{{reviewer_a}}`)
- Position B: `{{finding_b}}` (source: `{{reviewer_b}}`)
- Diff under review: `{{diff}}`
- Repository: `{{repo}}`

## Steps

1. Restate both positions in one line each, severity included.
   Confirm they are actually about the same code — if not, they are
   two findings, not a conflict.
2. Spot-check the disputed claim against `{{diff}}` and, where
   needed, the surrounding code via code-search. This is
   verification of the collaborators' claims, not a fresh review.
3. Decide one of three outcomes:
   - **Uphold one.** The evidence contradicts the other position.
     Record the losing position in the killed list with the reason.
   - **Merge.** Both are right about different aspects of the same
     root cause. One finding, both sources, the higher severity —
     with the merge stated in the report.
   - **Escalate.** The evidence does not settle it; it is a design
     call. Write a conflict escalation note with both positions and
     the evidence, addressed to the human owner. Take no side.
4. Update the consolidated report entry accordingly.

## Hard stops

- Averaging the two severities to avoid deciding: never. Decide or
  escalate.
- Rewriting a position so the conflict disappears: never. Both
  positions survive verbatim in the note.

## Output

The outcome, the evidence, and the updated report entry — or the
escalation note.
