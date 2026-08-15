# Checklist: plan ready for approval and hand-off

Run this list before presenting a plan to the user. Every item is
pass/fail. A single fail means the plan goes back to investigation,
not to the user.

## Grounding

- [ ] Every touch point names a file that was actually opened and
      read in this session.
- [ ] Every touch point names the symbol at that location, not just
      the file.
- [ ] Callers and consumers are listed for every touched module.
- [ ] Anything not read is explicitly marked "needs confirmation" —
      nothing guessed is presented as verified.

## Spec coverage

- [ ] The Work was searched for a spec on this topic (docs folder,
      workspace notes, linked documents).
- [ ] If a spec exists, every goal and use case appears in the
      coverage map.
- [ ] Every coverage gap is listed with a reason. No goal was
      silently dropped.

## Ambiguities

- [ ] Load-bearing ambiguities were either answered by the user or
      carry a stated default the user can veto.
- [ ] Cosmetic assumptions are recorded in the Context section.
- [ ] No open question blocks step 1 of the plan.

## Steps

- [ ] Steps are in dependency order — no step needs a later step to
      have happened.
- [ ] Each step is small enough to ship as one reviewable change.
- [ ] Each step has a one-line acceptance criterion.
- [ ] Out-of-scope items and follow-up candidates are listed, not
      folded into the steps.

## Risks and verification

- [ ] At least one concrete risk is named, with blast radius.
- [ ] Contract changes (API, schema, events) are called out
      explicitly.
- [ ] The verification strategy names the tests to add with file
      paths, the commands to run, and any manual checks.
- [ ] For a bug fix: the failing regression test is a step that
      precedes the fix step.

## Hand-off discipline

- [ ] No code, config, or migration was written or edited during
      planning.
- [ ] The plan states that hand-off to the Plan Executor happens
      only after user approval.

Every box checked: present the plan. One unchecked: fix the cause
first.
