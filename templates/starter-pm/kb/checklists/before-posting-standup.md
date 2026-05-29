# Checklist: Before posting the standup digest

Run this pass before the PM posts the standup to the channel. Each
item is pass/fail. If any item fails, fix it before posting. Do not
post a digest that fails any item.

## Content checks

- [ ] Every row in Done has a Task link, an owner, and what shipped.
      No rows where "what shipped" is empty or hand-wavy.
- [ ] Every row in Next has a Task link, an owner, and one concrete
      next step that fits in 24 hours. No "continue work on X."
- [ ] Every row in Blocked names the blocker and the suggested
      unblock action. No row that just says "blocked."
- [ ] Carried blockers are marked `(carried, N)` with the correct
      N. A blocker on its third standup also has a separate
      escalation message queued.
- [ ] No Task appears in two sections. A Task is Done, Next, or
      Blocked — not two of three.

## Truth checks

- [ ] Nothing in Done was inferred from a comment. Every Done row
      maps to a status transition or a shipped artifact.
- [ ] Nothing in Next was invented to fill the section. If the team
      genuinely has no next step on a Task, it goes to Blocked.
- [ ] No Task whose status disagrees with the digest. If the board
      says BLOCKED and the digest says Next, the board wins.

## Scope checks

- [ ] All Tasks belong to the Mission or Work this PM is scoped to.
      No cross-Mission rows.
- [ ] No accountid mention syntax in the digest. Owners are tagged
      by display name from the roster.
- [ ] No emoji. No marketing language. No "great progress."

## Length checks

- [ ] The digest fits on one screen. If not, the final line of the
      digest flags board noise to the owner.
- [ ] No section runs more than 10 rows without a roll-up. If a
      section is long, group by owner or priority and link to the
      full board view.

## Side-effect checks

- [ ] No Task was closed in the act of writing the digest. Closure
      requires owner acceptance.
- [ ] No priority was changed silently. Priority changes belong in
      the re-prioritise flow, not the standup.

If every box is checked, post. If any box failed, fix and re-run the
checklist before posting.
