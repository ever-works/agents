# Checklist: subtask brief ready to spawn

Run this list on every collaborator brief before spawning. Every
item is pass/fail. A single fail blocks the spawn — fix the brief,
do not spawn and hope.

## Roster

- [ ] The collaborator matches the input: Code Reviewer for a diff,
      Plan Reviewer only when a plan document is attached.
- [ ] No collaborator was added that the request did not name,
      beyond the two defaults.
- [ ] No two collaborators have overlapping scope without a stated
      reason (overlap is fine when corroboration is the point —
      but it must be deliberate).

## Scope

- [ ] The scope boundary is one sentence a reviewer cannot
      misread.
- [ ] The brief names what is out of scope, not just what is in.
- [ ] The brief does not ask the collaborator to fix anything —
      review only, findings only.

## Inputs

- [ ] The exact diff ref (PR URL, commit range, or attached diff)
      is in the brief.
- [ ] For Plan Reviewer: the exact plan document ref is in the
      brief.
- [ ] Nothing in the brief pre-judges the code ("check the
      probably-broken retry logic" leads the witness — name the
      area, not the verdict).

## Output contract

- [ ] The brief states the required finding shape: file, location,
      claim, severity, plus a one-line note when severity is P1.
- [ ] The brief states the deadline.
- [ ] The brief tells the collaborator to report "no findings"
      explicitly rather than staying silent.

If every box is checked, spawn. If not, fix the brief first.
