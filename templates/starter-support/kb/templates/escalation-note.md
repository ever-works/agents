# Template: internal escalation note

Use when handing a ticket from the agent to a human on-call. The
human reads this note instead of re-reading the whole thread.

## Structure

```
TICKET: {{ticket_id}}
CLASSIFICATION: {{classification}}
PRIORITY: {{priority}}
REASON FOR ESCALATION: {{reason}}

SUMMARY
{{one_sentence_problem_summary}}

ALREADY TRIED
KB articles searched:
  - {{article_title}}
  - {{article_title}}
Clarifications asked:
  - {{question}}

NEXT ACTION
{{specific_imperative_for_the_human}}

TIME-SENSITIVE
{{flag_or_none}}: {{one_line_reason_if_flagged}}
```

## Rules

- Summary is one sentence in the customer's own framing, not the
  agent's interpretation.
- `REASON FOR ESCALATION` is one of: `kb-gap`, `policy`,
  `destructive-action`, `hostile-user`, `outage`, `other`.
- `NEXT ACTION` is imperative and specific. Not "please help".
  Yes: "Approve a refund of $42 for invoice INV-1042" or "Confirm
  whether the 2026-05 changelog covers the dashboard-blank bug".
- `TIME-SENSITIVE` flags are: `vip-customer`, `regulator`,
  `outage`, `payment-blocked`, `data-loss-risk`, `legal-threat`.
  Otherwise `none`.

## Example

```
TICKET: T-8821
CLASSIFICATION: billing
PRIORITY: P1
REASON FOR ESCALATION: policy

SUMMARY
Customer was double-charged after upgrading mid-cycle and is asking
for a refund of the difference.

ALREADY TRIED
KB articles searched:
  - Plan upgrades and proration
  - Refund policy
Clarifications asked:
  - Confirmed invoice IDs INV-1042 and INV-1043.

NEXT ACTION
Approve and execute a $42 refund on INV-1043, then reply to the
customer confirming the refund and the proration logic.

TIME-SENSITIVE
vip-customer: enterprise tier, renewal in 11 days.
```

Do not include the user's raw PII unless it is essential for the
action. Redact email and account IDs to last 4 chars.
