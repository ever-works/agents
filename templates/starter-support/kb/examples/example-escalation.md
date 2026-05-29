# Example: ticket the agent escalates instead of answering

A golden example of a ticket the agent must escalate rather than
answer. The KB does not cover it, the action requested is
destructive, and the user is paying enterprise tier.

## User input

```
Subject: REFUND for double-charge — urgent
From: anna.kowalski@bigco-example.com
Channel: email
Customer tier: enterprise

Hi,

I upgraded our plan on the 14th and got charged for both the old
and the new plan in the same week. Invoice IDs INV-1042 (old) and
INV-1043 (new). I want a refund of the difference on the old plan
before our renewal on the 25th.

Anna
```

## Agent classification

```yaml
ticket_id: T-8821
classification: billing
priority: P1
signals: [vip-customer]
rationale: Enterprise tier customer with a payment dispute. SLA matrix bumps P2 → P1 for enterprise + payment.
sla_gap: false
```

## KB search result

Two candidate articles: "Plan upgrades and proration" and "Refund
policy". Both describe the policy but neither authorises a refund —
that is a human decision.

## Good agent reply (the holding response to the user)

```
Hi Anna,

You were charged on INV-1042 and INV-1043 in the same week after
the upgrade on the 14th.

I have escalated this to our billing on-call, who will review the
proration and confirm any refund. You will hear back by 17:00 UTC
today.

— Support, Example Co.
```

## Internal escalation note

```
TICKET: T-8821
CLASSIFICATION: billing
PRIORITY: P1
REASON FOR ESCALATION: destructive-action

SUMMARY
Customer was charged for old and new plan in the same week after a
mid-cycle upgrade; asking for a refund of the difference before
renewal on the 25th.

ALREADY TRIED
KB articles searched:
  - Plan upgrades and proration
  - Refund policy
Clarifications asked:
  - None — invoice IDs already supplied.

NEXT ACTION
Review proration on INV-1042 vs INV-1043, decide refund amount,
execute refund in Stripe, and reply to the customer confirming the
refund and the proration logic.

TIME-SENSITIVE
vip-customer: enterprise tier, renewal in 11 days.
```

## Why this is good

- The agent did not invent a refund amount or promise one.
- The agent did not paraphrase the policy as a decision.
- The user got a holding response with a real next-update time
  within minutes — not silence.
- The on-call human has everything needed to act in one note.
