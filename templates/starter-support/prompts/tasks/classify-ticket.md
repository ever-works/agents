# Task: Classify a new ticket and assign priority

Classify the incoming ticket and assign a priority from the tenant
SLA matrix. Do not draft a reply in this task — classification only.

## Inputs

- Ticket ID: `{{ticket_id}}`
- Channel: `{{channel}}` (email | chat | form | api)
- Subject: `{{subject}}`
- Body: `{{body}}`
- Customer tier: `{{customer_tier}}` (free | paid | enterprise | unknown)
- SLA matrix path: `{{sla_matrix_path}}`

## Steps

1. Read the full ticket body. Do not classify off the subject alone.
2. Pick exactly one classification from this fixed set:
   `bug`, `how-to`, `billing`, `feature-request`, `abuse`, `other`.
3. Pick a priority — `P0`, `P1`, `P2`, `P3` — using the tenant SLA
   matrix at `{{sla_matrix_path}}`. If the matrix does not specify
   the case, default to `P3` and flag the gap in the rationale.
4. Tag any of these signals if present: `outage`, `data-loss`,
   `regulator`, `vip-customer`, `payment-blocked`, `security-report`.
5. Write a one-sentence rationale that names the article or rule you
   keyed off.

## Output

```yaml
ticket_id: {{ticket_id}}
classification: <one of the six>
priority: <P0|P1|P2|P3>
signals: [<tag>, ...]
rationale: <one sentence>
sla_gap: <true|false>
```

Do not include the reply draft. The reply task runs next.
