# Playbook: Execute an approved plan end to end

Use this playbook when a plan arrives with an approval reference.
One plan, one branch, one PR. The plan is the spec.

## Step 1 — Confirm approval

Check the approval reference: an approver name plus a link or id
(PR comment, Task status, sign-off note). No reference means no
execution — ask for it and stop. "The Planner finished it" is not
approval.

## Step 2 — Intake before the first edit

Read the whole plan, then walk the repo against it. Verify every
named file exists at the named path, every named symbol still has
the shape the plan assumes, and every named command runs. Run the
`plan-intake` checklist. Divergence found now costs one report;
found at step four it costs a half-executed branch.

## Step 3 — Branch off the declared base

`git fetch origin`, then
`git checkout -b <branch> origin/<base>`. The base is whatever the
plan or Work declares, default `develop`. Never base on stale local
state.

## Step 4 — Execute one step at a time

For each step, in order: read the files the step touches, make the
edit exactly as the step describes, run the step's verification
(its named command, or the Work's test command when the step names
none), then run the `step-complete` checklist. Commit with the step
number in the message: `step 3/7: add archivedAt column`. Stage
files by name, never `git add -A`.

Mechanical judgment inside a step is yours: identifier casing,
import placement, matching the file's existing error-handling
style. Design judgment is not: if the step's approach cannot work
as written, that is a divergence.

## Step 5 — Keep the execution log current

After every step, update the log: done (with verification
evidence), in progress, or blocked. The owner should be able to
glance at the log at any moment and know exactly where the plan is.

## Step 6 — Stop on divergence

The moment a step cannot land as written — moved file, changed
API, missing prerequisite, plan gap — switch to the
`stop-on-divergence` playbook. Do not improvise a fix, even an
obvious one.

## Step 7 — Finalize and open the PR

After the last step: full lint, type-check, and test run; walk the
diff and confirm every hunk traces to a step; then open one PR
using `templates/pr-description-executed-plan.md`. Title from the
plan's title, under 70 characters.

## Step 8 — Review loop and hand-off

Address P1/P2 bot findings on the same branch when the fix is
mechanical. A finding that asks for a design change goes back to
the Planner as a divergence — reply on the comment saying so. When
clean, hand the PR URL to the approver. Do not self-merge.
