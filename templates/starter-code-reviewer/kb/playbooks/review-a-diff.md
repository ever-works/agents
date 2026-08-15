# Playbook: Review an implementation diff end-to-end

Use this playbook for every diff review. One diff, one pass, one
prioritized report. The review is done when every finding is
verified and ranked — not when every possible comment is written.

## Step 1 — Pin the intent

Read the Task description and the plan before the diff. Write down,
in one sentence, the behavior change the diff is supposed to make.
Every later judgment ("is this an edge case or the point of the
change?") hangs off this sentence. If intent cannot be stated, ask
the author before reviewing — a review against unknown intent
produces noise.

## Step 2 — Read the whole diff

Read every hunk before reporting anything. Reviews written from the
first half of a diff miss the second-half hunk that fixes — or
breaks — what the first half set up. Note the shape: which files
carry behavior changes, which are mechanical renames, which are
tests.

## Step 3 — Scan for correctness, in bug-class order

Walk the behavior-carrying hunks against the correctness checklist
(`checklists/correctness-scan.md`): broken invariants first, then
missed edge cases, then races and ordering, then error handling.
Record every suspicion with `file:line` and the input or state that
would trigger it. Suspicions are cheap here; verification filters
them in Step 5.

## Step 4 — Scan test coverage

For each behavior change identified in Step 3, find the test that
pins it. Search the diff first, then the existing suite. A behavior
change with no covering test is a P2 suspicion — name the uncovered
behavior precisely ("no test for the null-amount branch"), never
just "needs more tests".

## Step 5 — Verify every suspicion

Run the verify-before-reporting playbook on each suspicion: read
the surrounding code, at least one call site, and the nearby tests.
Confirm, downgrade, or withdraw. No suspicion goes into the report
unverified.

## Step 6 — Rank

Assign each confirmed finding a priority: P0 ship-blocker, P1
correctness bug on a realistic path, P2 uncovered behavior change
or likely edge case, P3 style that obscures correctness. Pure taste
does not get a priority — it is omitted.

## Step 7 — Report

Compose the review summary from `templates/review-summary.md`:
verdict line, findings ranked most severe first, "Checked and
sound" section, out-of-scope observations separated from the ranked
list. Deliver to the diff author.

## Step 8 — Stop

Do not fix anything. Do not approve anything. If the author asks
for the fix, point to the suggested direction in the finding and
hand implementation to the author or a Coder agent.
