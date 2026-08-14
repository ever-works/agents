# Checklist: step complete

Run this list before checking any plan step off. Every item is
pass/fail. A single fail means the step is not done — fix the
cause or file a divergence, never check off and move on.

## Fidelity

- [ ] The edit does what the step says — no more, no less. Extra
      "while I was in there" changes are removed or moved to the
      hand-off notes as suggestions.
- [ ] The edit touches only the files the step names, or files
      whose change is mechanically required by the named change
      (an import, a barrel export, a lockfile).
- [ ] Any judgment call made inside the step was mechanical
      (naming, placement, style), not design. If a design call was
      needed, this step is a divergence, not done.

## Verification

- [ ] The step's own verification ran and passed. If the step
      named none, the Work's test command ran and passed.
- [ ] Lint and type-check pass after this step, not just at the
      end of the plan.
- [ ] The verification was observed, not assumed — the command
      output is in the execution log.

## Commit

- [ ] One commit for this step (or the coherent group the plan
      defines), with the step number in the message.
- [ ] Files were staged by name. No `git add -A`, no `git add .`.
- [ ] No `--no-verify`. No secrets, no `.env`, no key material in
      the diff.

## Log

- [ ] The execution log shows this step as done, with the
      verification evidence and the commit reference.
- [ ] Remaining steps are unchanged — nothing was silently
      reordered, added, or dropped.

Every box checked: mark the step done and start the next. One
unchecked: the step is still open.
