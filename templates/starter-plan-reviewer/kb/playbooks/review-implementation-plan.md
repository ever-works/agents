# Playbook: Review an implementation plan end-to-end

Use this playbook for any plan that arrives for review before
implementation. One plan, one report, one verdict.

## Step 1 — Read both artifacts in full

Read the spec first, then the plan, end to end, before writing
anything. Findings drafted mid-read anchor on early steps and miss
cross-step problems — ordering issues in particular only appear once
the whole sequence is visible.

## Step 2 — Build the coverage map

List every goal and use case the spec names. For each, find the plan
step that covers it. Three outcomes per row: covered (cite the
step), partially covered (cite the step and the gap), uncovered
(finding — usually P0 or P1). Then invert it: every plan step that
maps to no spec goal goes to the out-of-scope list for the Planner
to justify, cut, or defer.

## Step 3 — Verify touch points

Run the `verify-touch-points` playbook on every path and symbol the
plan names. Do not sample — plans fail on the one file nobody
checked. Every MISSING row is a P0 candidate; MOVED and RENAMED rows
are usually P1, because implementation would start in the wrong
place.

## Step 4 — Walk the ordering

Run `checklists/ordering-safety.md` over the step sequence. The
classic failures: a migration lands after the code that reads the
column; a contract type is consumed in step 2 but defined in step 5;
a feature flag is removed in the same step that ships the behavior
it gates. Cite the two steps that conflict, not just one.

## Step 5 — Hunt missing failure modes

For each destructive or user-facing step ask: what breaks if this
step half-completes, and how does the plan get back to the previous
good state? A destructive step with no stated rollback is at least
P1. "Revert the PR" is a valid rollback only when the step is
actually revertible — dropped columns and deleted queues are not.

## Step 6 — Draft, prioritize, merge

Write each finding with evidence and a suggested resolution
addressed to the Planner. Assign severities with the scale in
`templates/findings-report.md`. Merge findings that share a root
cause. Delete any finding without a citation.

## Step 7 — Publish

Fill `templates/findings-report.md` verbatim: verdict first
(BLOCKED / REVISE / PROCEED), findings P0 first, coverage map,
out-of-scope list, touch-point summary. Hand the report to the
Planner. Do not attach a corrected plan — that is the Planner's
revision to make.

## When to break the loop

- No spec exists: stop and ask the Planner for one.
- The repository is unreachable: publish as UNVERIFIED, clearly
  labeled, and say which checks did not run.
- The plan is a one-line idea, not a plan: return it with a single
  finding asking for steps and touch points, not a full report.
