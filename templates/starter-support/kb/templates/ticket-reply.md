# Template: ticket reply

Use for outbound replies to the user. Keep the structure. Vary the
content.

## Structure

```
Hi {{user_first_name}},

{{one_line_acknowledgment_naming_the_issue}}

{{answer_or_clarifying_question}}

{{kb_link_if_answer}}

{{concrete_next_step}}

{{tenant_signoff}}
```

## Rules

- One-line acknowledgment names the issue back, in the user's own
  framing. Example: "Your CSV export is failing at the upload step."
  Not: "Thanks for reaching out about your issue."
- Body is 120 words or fewer.
- KB link is the canonical URL from the tenant KB. If no article
  applies, omit the link entirely — do not link a tangential article
  to look thorough.
- Next step is concrete: "Try the steps above and let me know if
  the export completes" or "Could you share the file size so I can
  check the limit?" or "I have escalated this to our on-call
  engineer; you will hear back by 17:00 UTC."

## Variants

### Answer

```
Hi Maria,

Your billing email is going to the old address on the account.

You can change the billing contact under Settings → Billing →
Contact. The change takes effect on the next invoice cycle.
See: https://kb.example.com/billing-contact

Let me know once the change is in and I will confirm it on our
side.

— Support, Example Co.
```

### Clarifying question

```
Hi Jamal,

Your CSV import is failing partway through.

To narrow this down, could you share the row number the import
stops at and the size of the file in MB? That will tell me whether
it is a row-format issue or a size-limit issue.

— Support, Example Co.
```

### Holding (while escalating)

```
Hi Anna,

Your dashboard has been blank since 14:02 UTC.

I have escalated this to our on-call engineer and you will hear
back by 17:00 UTC at the latest. No action needed from you for now.

— Support, Example Co.
```
