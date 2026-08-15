# Checklist: plan intake

Run this list before executing step one of any plan. Every item is
pass/fail. A single fail blocks execution — file the problem as a
divergence (or ask for approval), do not start anyway.

## Approval

- [ ] The plan carries an explicit approval reference: approver
      plus a link or id. "Looks done" is not approval.
- [ ] The approval covers this version of the plan, not an earlier
      draft that has since changed.

## Plan shape

- [ ] Steps are numbered and ordered. If the plan marks any steps
      as independent or parallel, that is written in the plan, not
      assumed.
- [ ] Every step names what it touches: files, symbols, commands,
      or config keys. A step that says "wire it up" with no target
      is a plan gap.
- [ ] Every behavior-changing step has a verification: a named
      test, a command, or an observable check. Steps without one
      inherit the Work's test command — confirm that is acceptable.
- [ ] The plan declares its base branch, or the Work's default
      applies.

## Repo reality check

- [ ] Every file the plan names exists at the named path on a
      freshly fetched base branch.
- [ ] Every symbol the plan names still has the shape the plan
      assumes (spot-check signatures, not just existence).
- [ ] Every command the plan names runs on this machine (lint,
      type-check, test, codegen).
- [ ] No step depends on credentials, environments, or permissions
      the agent does not have — those need the owner, flagged now.

## Boundaries

- [ ] The plan fits one branch and one PR. If it clearly cannot,
      raise it before starting — splitting is a Planner decision.
- [ ] No step asks for a hard-rule violation (skip hooks,
      force-push a shared branch, delete tests, touch secrets).
      Such a step is refused at intake, never mid-run.

Every box checked: branch and begin. One unchecked: stop and
report before any edit.
