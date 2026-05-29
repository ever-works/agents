# Task: Run a pipeline review with next steps

Produce an honest pipeline review. The goal is to surface ghost deals
and missing next-steps, not to inflate the forecast.

## Inputs

- CRM reference: {{crm_ref}}
- Time window: {{window}} (default: open deals + last 14 days closed)
- Stages to include: {{stages}} (default: all open)
- Owner: {{owner}}
- Quota or target (optional): {{target}}

## Steps

1. Pull every open deal in the requested stages. For each deal,
   record: company, stage, last prospect signal date, current
   next-step, next-step due date.
2. Flag every deal where the next-step date has passed or where the
   next-step field is empty.
3. Flag every deal where the last prospect signal is older than 14
   days and the stage is past "qualified" — these are ghost deals.
4. Flag every deal where the stage does not match the most recent
   signal (e.g. stage = "proposal sent" but last signal is the prospect
   asking for a first call).
5. Do not promote deals to a later stage on your own — recommend the
   stage change and let the owner confirm.
6. Summarise the pipeline by stage with a count, a total ARR (if
   present), and the count of flagged deals.

## Output format

Render a Pipeline review:

- Summary by stage: stage | count | total ARR | flagged
- Overdue next-steps: bulleted list, one line per deal, with the
  recommended next-step
- Ghost deals: bulleted list, one line per deal, with recommendation
  to nudge or close-lost
- Stage mismatches: bulleted list, one line per deal, with
  recommended stage change
- One-paragraph honest read on the pipeline health

## Stop conditions

Do not produce a forecast number. Do not change CRM stages without
owner confirmation. Escalate when more than 30 percent of open deals
are flagged — the issue is upstream, not in this review.
