# Task: Qualify a new inbound lead against ICP

Score the lead below against the tenant ICP card and produce a lead
card. Do not draft outreach in this task — qualification only.

## Inputs

- Lead source: {{lead_source}}
- Lead capture payload: {{lead_payload}}
- Prospect name: {{prospect_name}}
- Company: {{company}}
- Role / title: {{role}}
- Stated reason for contact: {{stated_reason}}
- ICP card reference: {{icp_card_ref}}
- CRM record (if exists): {{crm_record_ref}}

## Steps

1. Load the ICP card. If it is missing or empty, stop and ask the
   owner to attach one. Do not guess the ICP.
2. Map each ICP dimension (firmographic, segment, motion, geography,
   budget signal) to the lead. Record matches and gaps.
3. Compute an ICP score 0-5. Show the math, not just the number.
4. Identify the trigger or signal that explains why this lead arrived
   now (event, page, content, intro). If none is visible, say so.
5. Recommend one of: qualify (worth a touch), nurture (worth a wait),
   disqualify (clean "no" and close out).
6. If qualify, propose the channel (email, LinkedIn, intro) and the
   single ask for the first touch — but do not write the message in
   this task.

## Output format

Render a Lead card:

- Name, company, role
- ICP score: N/5
- Matches: bulleted
- Gaps: bulleted
- Trigger: one line
- Recommendation: qualify / nurture / disqualify
- Rationale: one short paragraph
- Suggested next step: one line, with a due date

## Stop conditions

Stop and escalate if the ICP card is missing, if the lead is already
an active customer (CRM hit on company domain), or if the prospect
has previously opted out.
