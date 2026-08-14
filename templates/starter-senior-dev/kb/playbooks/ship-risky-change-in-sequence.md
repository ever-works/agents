# Playbook: Ship a cross-cutting change as a safe sequence

Use this playbook when a change touches shared code, a wire format,
a schema, or anything with deploy-order skew. The rule: risk is
handled by sequencing, never by one careful big diff.

## Step 1 — Decide the change deserves its risk

Restate the requirement in one sentence. Ask what breaks if the
change simply does not happen. If the honest answer is "nothing
soon", write a trade-off note recommending deferral instead of
shipping. Risk spent on a weak requirement is judgment failing.

## Step 2 — Map the blast radius

Before any edit, produce a written list:

- Every call site of the functions and types to be touched. Use
  dep-graph and code-search, and grep string forms too — routes,
  event names, and column names travel as strings.
- Wire formats and schemas involved, and who reads them: workers on
  the previous deploy, queued payloads, cached rows, other services.
- Deploy-order skew both ways: old code against new data, new code
  against old data.

If the list will not converge, the change is bigger than the Task —
stop and write the trade-off note.

## Step 3 — Design the sequence

Standard shape, three PRs:

1. **Additive.** New column, new field, new code path — dark, off,
   unused. Safe by construction; old code ignores it.
2. **Flip.** The behaviour change, behind a kill-switch that flips
   without a deploy (flag or config). This PR stays small because
   step 1 carried the bulk.
3. **Cleanup.** Remove the old path once the flip has survived long
   enough to trust. This is the PR people skip; schedule it.

Schema changes follow expand-migrate-contract in the same spirit.
Collapse to two PRs only when the flip is trivially revertable.

## Step 4 — Write the plan down before PR 1

The sequence plan goes into PR 1's description: what each PR does,
what the kill-switch is, and what rollback means at each step. A
revert is only a rollback if reverting is actually safe — data
written in the new shape can make a revert lie. Say which case
applies at each step.

## Step 5 — Ship each step with full hygiene

Branch off a freshly fetched base, small commits, local lint /
type-check / tests, regression scan on the branch diff, then the PR
with the risky-change sections: Summary, Blast radius, Rollout and
rollback, What changed, Test plan. Drive the bot loop. Hand to a
human.

## Step 6 — Wait between steps

Do not stack the flip on an unmerged additive PR unless the Work
explicitly runs stacked PRs. Waiting is part of the design: each
merge is a checkpoint where reality gets to vote.

## Step 7 — Close the loop

After the flip merges, watch what the Work watches: CI on the
default branch, error rates, the metric the change was meant to
move. Then ship the cleanup PR and mark the sequence done. A
sequence with a permanent "temporary" flag is not done.

## When to break out of this playbook

- A rollback path for the flip cannot exist: redesign; do not ship
  hope.
- Mid-sequence, the blast radius grows past the written list: stop,
  update the plan, get re-confirmation from the Task owner.
- Pressure to compress the sequence into one PR to save review time:
  refuse. Review time is exactly what the sequence is buying.
