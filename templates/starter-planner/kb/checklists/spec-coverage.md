# Checklist: spec coverage

Run this list whenever a spec exists for the topic being planned.
The contract is total: every goal and every use case in the spec is
either covered by a plan step or listed as an explicit gap.

## Finding the spec

- [ ] The Work's docs folder was searched for the topic.
- [ ] Workspace notes and linked documents were searched.
- [ ] Prior PRs referencing the topic were checked for an attached
      spec or design note.
- [ ] If multiple spec versions exist, the newest is used and the
      plan says which one.

## Extracting the contract

- [ ] Every goal in the spec is copied into a flat checklist before
      planning starts.
- [ ] Every use case is copied the same way, including edge and
      error cases the spec names.
- [ ] Non-functional requirements (performance, permissions,
      localization) are extracted too — these are the most
      commonly dropped.

## Mapping

- [ ] Each goal maps to at least one plan step by number.
- [ ] Each use case maps to at least one plan step and at least one
      verification item.
- [ ] No plan step exists that serves no goal — unmapped steps are
      scope creep and move to follow-up candidates.

## Gaps

- [ ] Every unmapped goal or use case appears in the gap list.
- [ ] Every gap has a reason: out of scope by user decision, blocked
      on another Work, needs a product call.
- [ ] Gaps that need a product call are phrased as questions with
      defaults, not left hanging.

## Honesty

- [ ] No spec line was reworded to make it easier to cover. The map
      quotes or references the spec's own wording.
- [ ] Partial coverage is marked partial, not done.

Every box checked: attach the coverage map to the plan. One
unchecked: the plan is not ready for approval.
