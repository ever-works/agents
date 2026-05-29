# Task: Write an internal escalation note

Write the internal note that hands a ticket from the agent to a
human on-call. The human reads this note instead of re-reading the
whole thread. Make it scannable. Make it honest.

## Inputs

- Ticket ID: `{{ticket_id}}`
- Classification: `{{classification}}`
- Priority: `{{priority}}`
- User message summary: `{{user_summary}}`
- KB articles already searched: `{{kb_searched}}`
- Clarifying questions already asked: `{{clarifications}}`
- Reason for escalation: `{{escalation_reason}}` (kb-gap | policy
  | destructive-action | hostile-user | outage | other)

## Steps

1. One-sentence problem summary in the customer's own framing.
2. State the classification and priority.
3. List what the agent already tried: KB articles searched (by
   title), clarifying questions asked, anything ruled out.
4. State precisely what the human needs to do next — not "please
   help", but "approve a refund of $X" or "confirm whether the
   2026-05 changelog entry covers this bug report".
5. Flag time-sensitive context: VIP customer, regulator, public
   outage, payment blocked, data-loss risk.
6. Do not include the user's raw PII unless it is essential for the
   action. Redact email addresses and account IDs to last 4 chars.

## Output

```yaml
ticket_id: {{ticket_id}}
classification: {{classification}}
priority: {{priority}}
escalation_reason: {{escalation_reason}}
summary: <one sentence>
already_tried:
  kb_articles: [<title>, ...]
  clarifications: [<question>, ...]
next_action: <imperative, specific>
time_sensitive: <true|false, with one-line reason if true>
```

Attach to the ticket as an internal note. Do not send to the user.
