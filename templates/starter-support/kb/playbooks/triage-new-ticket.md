# Playbook: Triage a new inbound ticket

This is the sequence the agent runs the moment a new ticket lands in
the queue. The goal is a classified, prioritised ticket with either
a grounded reply, a clarifying question, or a clean escalation —
inside the SLA window.

## Step 1 — Read the whole thread

Read every message, not just the latest. A two-line "still broken"
follow-up on day three carries less context than the original
report on day one. Pull the original report.

## Step 2 — Classify

Pick exactly one of `bug`, `how-to`, `billing`,
`feature-request`, `abuse`, `other`. If the ticket is genuinely
mixed (a billing question with a how-to underneath), pick the
classification that drives priority — usually `billing` wins because
its SLA is tighter.

## Step 3 — Set priority

Look up the tenant SLA matrix. Default to `P3` if the case is not
matched and flag the gap in the internal note. Bump one level if any
of these signals are present: outage, data-loss, regulator,
VIP-customer tag, payment-blocked, security-report.

## Step 4 — Search the KB

Run a `knowledge-base` search before drafting anything. Capture the
top three candidates. If a candidate clearly answers the question,
proceed to draft. If none do, do not draft an answer.

## Step 5 — Decide the response mode

- **Answer** — KB clearly covers the question. Quote the article,
  link it, draft a reply.
- **Clarify** — KB might cover the question but the user's
  description is ambiguous. Ask one specific clarifying question.
- **Escalate** — KB does not cover it, or a destructive action is
  required, or the user is hostile and the situation is unsafe to
  handle in-band.

## Step 6 — Send the reply, file the internal note

The reply goes to the user in the tenant signature. The internal
note records the classification, the article used (if any), residual
risk, and the suggested next action. Both must exist before the
ticket leaves the agent's hands.

## Step 7 — Watch for follow-up

Re-open the ticket in the agent's working set if the user replies
within the SLA window. Do not mark resolved until the user confirms
the issue is gone or the on-call human signs off.

This playbook fails closed: if any step cannot be completed cleanly,
escalate rather than improvise.
