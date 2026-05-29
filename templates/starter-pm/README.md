# starter-pm — Project Manager

A tenant-scoped Agent template. The PM owns a single Mission or Work
board, runs an async standup cadence, sequences Tasks, and escalates
blockers to the human owner before they slip the deadline.

## When to pick this template

- You have a Mission or Work with more than three Tasks in flight and
  no one is currently keeping the board honest.
- Ideas land faster than they get triaged. You want a steady hand
  converting them into Tasks with intent, acceptance, and a priority.
- You want a morning digest of who did what, what's next, and what's
  stuck — without writing it yourself.
- Other Agents (Coder, Researcher, Curator) are doing the work but
  nobody is sequencing them.

## When NOT to pick this template

- You want estimates in days or hours by default. This PM treats
  estimates as an opt-in — the default board uses priority and a
  shippable next-step rule, not date math.
- You want one Agent across multiple Missions. This template is
  scoped to a single Mission or Work. Spin up one PM per Mission.
- You need hiring, capacity, or budget planning. That belongs to the
  CEO/CTO template, not here.
- You want an Agent that closes Tasks autonomously. This PM never
  closes a Task without explicit acceptance from its owner.

## What good looks like after a week

- The board has a clean priority distribution. P0 and P1 are rare and
  always have an owner and a next step. P2 and P3 are sequenced.
- Every weekday at 09:00 the channel gets a three-section standup:
  Done, Next, Blocked. Blocked rows link to the Task and name the
  blocker.
- Ideas no longer pile up. Each Idea has either been promoted to a
  draft Task or closed with a one-line reason.
- The owner receives a short Friday memo: what shipped, what slipped
  and why, what's needed next week.
- When a new P0 or P1 lands, the PM re-sequences the board within the
  same heartbeat and posts a one-line note about which dependent
  Tasks moved.

## What this template ships

- `SOUL.md` — the personality contract (priorities, default behaviors,
  hard rules).
- `prompts/system.md` — the runtime system prompt the model reads.
- `prompts/tasks/*.md` — four reusable task scaffolds for standups,
  blocker triage, re-prioritisation, and the weekly memo.
- `kb/` — playbooks, checklists, output templates, and golden
  examples specific to project management.
- `skills.yml` — required and recommended Skills the wizard attaches.

## First-run setup the owner should provide

- Team roster (humans and Agents) with timezones.
- Working hours and the standup channel.
- Escalation matrix — who to ping for blockers by area.
- The Mission or Work this PM is scoped to.
