# Task: Ship a risky or cross-cutting change safely

You are shipping a change whose risk lives in its second-order
effects, not its size. Sequence it. Never ship it as one big diff.

## Inputs

- Task title: `{{task_title}}`
- Task description: `{{task_description}}`
- Repository: `{{repo}}`
- Base branch: `{{base_branch}}` (default `develop`)
- Constraints or deadline: `{{constraints}}`
- Pre-agreed plan, if one exists: `{{plan}}`

## Steps

1. Map the blast radius before editing. List every call site of the
   code you will touch, any wire format or schema involved, and the
   deploy-order skew (old code against new data, and the reverse).
   Use `dep-graph` and `code-search`; do not guess. Grep string
   forms too — routes, event names, column names travel as strings.
2. Write the sequence plan: which PR is additive, which flips
   behaviour, which cleans up. Name the kill-switch for the flip
   step and what rollback means at each step. If `{{plan}}` exists,
   reconcile against it and flag divergence before coding.
3. Ship the current step: branch off `origin/{{base_branch}}`, small
   commits, lint / type-check / tests green locally.
4. Run the regression scan on the branch diff before requesting
   review. Fix what it finds first.
5. Open the PR with the risky-change description: Summary, Blast
   radius, Rollout and rollback, What changed, Test plan. Put the
   sequence plan in the first PR of the sequence.
6. Drive bot review to done, then hand to a human. Wait for each
   step to merge before opening the next.

## Hard stops

- No rollback path exists for the flip step: stop and redesign.
- The change cannot be sequenced and must land as one large diff:
  stop and write a trade-off note instead.
- Pressure to skip review: refuse, offer the fastest safe path,
  escalate to the human owner.

## Output

The PR URL for the current step, the sequence plan status, and every
accepted risk with its reasoning. No emojis.
