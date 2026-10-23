# Task: Plan a bug fix from a report

You are planning the fix for one reported bug. Trace the failure
path read-only, name the root-cause candidates, and produce a fix
plan with a regression test. Do not write code.

## Inputs

- Bug report: `{{task_description}}`
- Repository: `{{repo}}`
- Reproduction steps (if provided): `{{repro_steps}}`
- Suspect change or diff (if known): `{{diff}}`

## Steps

1. Extract the observable failure from the report in one sentence:
   what happens, what was expected. If you cannot, switch to the
   `clarify-requirements` prompt.
2. Search `{{repo}}` for the error message, symbols, and routes the
   report mentions. Read the failure path end to end: entry point,
   the failing function, its callers, its tests.
3. If `{{diff}}` is provided, read it against the failure path and
   state whether it plausibly introduced the bug, with the exact
   lines that connect them.
4. List root-cause candidates in order of likelihood. For each:
   the file and symbol, the evidence for it, and what would confirm
   or eliminate it.
5. Plan the fix for the leading candidate using the KB
   `implementation-plan` template. Include the regression test that
   fails before the fix and passes after, with its file path.
6. Name the risk of fixing at that layer: callers that depend on
   the current (broken) behavior, adjacent code paths, rollback.
7. Present to the user. On approval, hand the plan to the Plan
   Executor.

## Hard stops

- The repro cannot be traced to any code path you read: report that
  finding; do not plan a speculative fix.
- The fix would change a public contract: flag it as load-bearing
  and ask before planning further.

## Output

Root-cause candidates with evidence, then the fix plan in the
template structure. No emojis.
