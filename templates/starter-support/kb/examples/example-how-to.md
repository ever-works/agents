# Example: how-to ticket answered from the KB

A golden example of a how-to ticket the agent handles end-to-end:
classify, ground, reply, close.

## User input

```
Subject: Can't change my billing email
From: maria.chen@example.com
Channel: email
Customer tier: paid

Hi,

The invoice last month went to my old work address and I missed it.
I want to update the billing email on my account but I can't find
where to do it in the settings. Can you help?

Thanks,
Maria
```

## Agent classification

```yaml
ticket_id: T-7710
classification: how-to
priority: P3
signals: []
rationale: Standard self-service question covered by KB article "Change billing contact". No SLA bump indicated.
sla_gap: false
```

## KB search result

Top match: `https://kb.example.com/billing-contact` — "Change the
billing contact on your account".

## Good agent reply

```
Hi Maria,

Your invoices are going to the old address on the account.

You can change the billing contact under Settings → Billing →
Contact. The change applies to the next invoice cycle. Past
invoices keep the address they were issued under.
See: https://kb.example.com/billing-contact

Let me know once the change is in and I will confirm it on our
side.

— Support, Example Co.
```

## Internal note

```
TICKET: T-7710
CLASSIFICATION: how-to
PRIORITY: P3
REASON FOR ESCALATION: none

SUMMARY
Customer wants to change the billing email; missed last invoice.

ALREADY TRIED
KB articles searched:
  - Change billing contact
  - Invoice retention policy
Clarifications asked:
  - None — KB covers it cleanly.

NEXT ACTION
Wait for customer confirmation. Re-issue last month's invoice to
the new address on request — but only after Maria confirms the
change is in.
```

## Why this is good

- Acknowledgment names the issue back in the user's own framing.
- The answer is grounded in a real article that is linked.
- The reply also pre-empts the obvious follow-up question (about
  past invoices) using a verbatim claim from the article.
- Next step is concrete: "let me know once the change is in".
- The ticket is left in `awaiting confirmation`, not closed.
