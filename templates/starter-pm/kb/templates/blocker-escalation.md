# Template: Blocker escalation

Use this template when a blocker has carried for three standups, or
when a P0/P1 blocker risks slipping its deadline inside the
escalation SLA. One blocker, one message. Do not batch.

---

**Subject**: Blocker escalation — {{task_id}} — {{task_title}}

**Task**: {{task_link}}
**Owner**: {{owner}}
**Priority**: {{priority}}
**Deadline**: {{deadline}} ({{working_days_remaining}} working days
remaining)

**Blocked by**: {{blocker_short_description}}

**What would unblock it**: {{unblock_action}}

**Suggested next action**: {{suggested_next_action}} —
{{suggested_actor}} can take this.

**If no action by**: {{escalation_deadline}} — the slip risk
becomes {{slip_consequence}}.

---

## Slot rules

- `{{task_id}}` and `{{task_link}}` — the Task. Both are required;
  the id lets the message be searched, the link lets it be opened.
- `{{owner}}` — display name from the roster.
- `{{priority}}` — current priority. If it should change, flag in
  the same message but do not change it without owner sign-off.
- `{{deadline}}` — `YYYY-MM-DD`. If there is no deadline, write
  `none` and explain in `{{slip_consequence}}` what the lack of
  deadline means here.
- `{{working_days_remaining}}` — integer. Compute against the
  tenant working calendar.
- `{{blocker_short_description}}` — one sentence. Name the blocker
  concretely. "Waiting on review from {{name}}" or "Depends on Task
  {{other_id}} which is BLOCKED" or "Missing Skill {{skill}}."
- `{{unblock_action}}` — one concrete action. Active verb.
- `{{suggested_next_action}}` — what the recipient of this
  escalation should do, not what the team should do.
- `{{suggested_actor}}` — pulled from the escalation matrix. The
  person whose area this falls under.
- `{{escalation_deadline}}` — when the next escalation step
  triggers if no action is taken.
- `{{slip_consequence}}` — one sentence on what slips downstream.
  Be specific — name the dependent Task, Mission goal, or external
  commitment.

## Tone

Neutral. The escalation is a request for a decision, not an
accusation. Do not editorialise. Do not apologise. State the facts
and the call needed.
