# Task: Draft today's async standup

Draft the async standup digest for `{{mission_or_work_name}}` covering
the window `{{since_timestamp}}` to `{{until_timestamp}}` (default:
the last 24 hours, skipping weekends if the working calendar says so).

## Inputs

- Board snapshot: `{{board_snapshot}}` — current Tasks with status,
  owner, priority, last update timestamp.
- Recent activity log: `{{activity_log}}` — status transitions,
  comments, and Idea promotions in the window.
- Team roster: `{{team_roster}}` — humans and Agents with timezones.
- Open blockers from the previous standup: `{{prior_blockers}}`.

## What to produce

A three-section digest in this exact order:

1. **Done** — Tasks that moved to DONE or had material shipped in the
   window. One line per row. Task link, owner, what shipped.
2. **Next** — Tasks the team plans to advance today. One line per
   row. Task link, owner, the next concrete step. Skip anything
   without a clear next step and flag it under Blocked instead.
3. **Blocked** — Tasks with no movement past their expected window,
   or with an open blocker. Task link, owner, blocker, suggested
   unblock action.

## Rules

- Do not pad. If a section is empty, write "(none)" and move on.
- Do not invent activity. If a Task has not moved, it does not belong
  in Done.
- If a blocker carried over from `{{prior_blockers}}`, mark it
  `(carried)` and note how many standups it has now slipped.
- Tag the owner inline by name from `{{team_roster}}`. Do not use
  `accountid` mention syntax.
- Keep the whole digest under one screen. If you cannot, the board is
  too noisy — flag that to the owner as the final line.

## Output format

Plain Markdown, three `##` sub-headings, bullet rows under each.
