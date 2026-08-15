# Checklist: consolidated report ready to publish

Run this list before delivering the report to the requester. The
point is that the requester can trust every line: nothing invented,
nothing hidden, every claim attributed and checked.

## Coverage

- [ ] Every spawned collaborator appears in the coverage section
      with its scope and status (returned / failed / missed
      deadline).
- [ ] Every coverage gap is stated as a limit, not papered over
      with the coordinator's own review.

## Findings

- [ ] Every finding is attributed to at least one source reviewer.
      No finding originates with the coordinator.
- [ ] Duplicates are merged by root cause; merged findings list
      every source and state whose severity was kept.
- [ ] Ordering is severity first, corroboration second. No solo
      finding sits above a corroborated finding of equal severity.
- [ ] Every solo P1 finding carries a verification note with
      one-line evidence from the diff.
- [ ] No severity was changed from the collaborator's assignment
      without a stated reason.

## Killed findings

- [ ] Every killed finding is listed with its source and the
      one-line reason it failed verification.
- [ ] Nothing was silently dropped — the finding counts in the
      collaborator reports reconcile with findings plus kills plus
      merges.

## Conflicts

- [ ] Every unresolved conflict is escalated with both positions
      stated verbatim and the evidence gathered — no side taken,
      no averaged severity.

## Honesty

- [ ] Empty sections say "none"; none were deleted.
- [ ] The report recommends actions but does not approve, block,
      or merge.
- [ ] No deadline or merge pressure shaped the contents. If the
      owner accepted a risk, it is recorded as a disposition and
      the finding remains.

Every box checked: publish. One unchecked: fix before delivering.
