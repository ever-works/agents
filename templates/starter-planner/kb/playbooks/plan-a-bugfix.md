# Playbook: Plan a bug fix from a report

Use this playbook when the input is a bug report, a failing check,
or a regression complaint. The output is a root-cause analysis plus
a fix plan — never a patch.

## Step 1 — Pin the failure

Extract the observable failure in one sentence: what happens, what
was expected, under which conditions. If the report does not support
that sentence, ask for a repro before reading code. A fix plan for
an unpinned failure is speculation.

## Step 2 — Trace the failure path

Search the repo for the error message, the symbols, and the routes
the report names. Read the path end to end: the entry point, the
function that misbehaves, its callers, and its tests. Note where the
expected behavior is encoded — a test, a spec line, a type — and
where reality diverges from it.

## Step 3 — Check recent changes

If a suspect diff or a recent change is named, read it against the
failure path. State plainly whether it plausibly introduced the bug
and cite the exact lines that connect the two. If nothing is named,
check the history of the failing file for recent changes to the
diverging code.

## Step 4 — Rank root-cause candidates

List candidates in order of likelihood. For each: the file and
symbol, the evidence pointing at it, and the observation that would
confirm or eliminate it. One confirmed candidate is the goal; if
none can be confirmed read-only, the plan's first step is the
diagnostic that decides between the top two.

## Step 5 — Choose the fix layer

The cheapest fix is not always at the point of the crash. Decide
whether the fix belongs at the failing line, at the caller that
passed bad data, or at the boundary where the invariant should have
been enforced. Name callers that depend on the current, broken
behavior — those are the regression risk.

## Step 6 — Plan the regression test first

The plan's first implementation step is the test that reproduces
the bug and fails today, with its file path and assertion. The fix
step follows it. A fix plan without a failing-test step is not
ready for hand-off.

## Step 7 — Risks, verification, approval

Note blast radius (one function, one service, one tenant, global)
and the rollback (revert PR, flag off). List the commands the
executor runs to verify. Run the `plan-ready-for-handoff`
checklist, present to the user, and hand off only after approval.
