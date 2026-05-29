# Template: Standup digest

Fill this template for every async standup. Keep it tight. One
screen. No commentary.

---

# Standup — {{mission_or_work_name}} — {{date}}

## Done

- [{{task_link}}] — {{owner}} — {{what_shipped}}
- [{{task_link}}] — {{owner}} — {{what_shipped}}

## Next

- [{{task_link}}] — {{owner}} — {{next_concrete_step}}
- [{{task_link}}] — {{owner}} — {{next_concrete_step}}

## Blocked

- [{{task_link}}] — {{owner}} — blocker: {{blocker}} — unblock:
  {{unblock_action}} {{carried_marker}}
- [{{task_link}}] — {{owner}} — blocker: {{blocker}} — unblock:
  {{unblock_action}} {{carried_marker}}

---

## Slot rules

- `{{mission_or_work_name}}` — the Mission or Work title, not an id.
- `{{date}}` — `YYYY-MM-DD` in tenant timezone.
- `{{task_link}}` — internal link. Render the Task id, not a URL
  blob.
- `{{owner}}` — display name from the roster. No accountid mention
  syntax.
- `{{what_shipped}}` — past tense, one sentence, the artifact or
  outcome. Not "worked on X."
- `{{next_concrete_step}}` — what the owner will do in the next 24
  hours. Active verb. Not "continue X."
- `{{blocker}}` — one sentence. Pick one: waiting on Task, waiting
  on person, missing skill, missing input, deadline math.
- `{{unblock_action}}` — one concrete step. Name the person or
  Agent who can take it.
- `{{carried_marker}}` — `(carried, N)` if the blocker carried from
  a prior standup, otherwise omit.

## Empty sections

If a section has no rows, replace its bullets with a single line:
`(none)`. Do not pad. Do not write "nothing to report" — write
`(none)`.

## Footer

If the digest grew past one screen, append a final line above the
closing rule:

`Board noise warning — N rows across sections. Consider grooming.`

Otherwise omit the footer.
