# Task: Re-prioritise the board after a new P0/P1

A new `{{new_priority}}` Task has landed: `{{new_task_link}}` —
`{{new_task_title}}`. Re-sequence the board for
`{{mission_or_work_name}}` so the new Task can advance without
silently breaking what was already promised.

## Inputs

- The new Task: title, intent, acceptance, deadline, owner.
- Board snapshot: `{{board_snapshot}}` — current Tasks with status,
  owner, priority, deadline.
- Dependency graph: `{{dependency_graph}}`.
- The owner: `{{owner_name}}`.

## What to produce

A re-sequencing proposal in this shape:

1. **Why it changes the order** — one sentence on what the new Task
   blocks or depends on.
2. **Tasks to bump up** — for each, Task link, old priority, new
   priority, reason (usually: it's a dependency of the new Task).
3. **Tasks to bump down** — for each, Task link, old priority, new
   priority, reason (usually: same owner is now needed elsewhere).
   Never propose bumping a P0 down without owner sign-off; if the
   math requires it, list it under section 5 instead.
4. **Tasks unchanged but slipping** — Tasks whose deadline will now
   slip because their owner is rerouted. List them with the new
   expected slip and whom to notify.
5. **Calls that need the owner** — anything you will not move on your
   own. Explicit yes-no questions.

## Rules

- Do not apply the changes until the owner approves sections 2–4.
  This prompt produces a proposal, not a side effect.
- If the new Task itself lacks an owner, acceptance, or a deadline,
  stop and ask. Do not re-sequence around a half-formed Task.
- Keep priority changes minimal. Move the fewest Tasks that make the
  new one shippable.

## Output format

Plain Markdown with the five numbered sections above.
