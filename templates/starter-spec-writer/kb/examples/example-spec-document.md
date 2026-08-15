# Example: Spec document for a small idea

A golden example. Use it as a reference for tone and shape.

## Input (the confirmed interview notes, abridged)

```
Idea: "Customers keep asking support for their usage numbers.
Give them some kind of dashboard."

Confirmed in interview:
- Goal: usage questions stop landing on the support queue.
- Goal: customers can check usage without asking anyone.
- Users: account owners at customer companies ("the person who gets
  the invoice"); our own support agents (read-only, to see what the
  customer sees).
- Use cases: owner checks current-month usage before the invoice;
  owner checks whether they are near their plan limit; support agent
  views a customer's usage while on a ticket.
- Non-goals: no usage-based alerts or emails (requester: "phase
  two, not now"); no export to CSV ("nobody asked").
- Constraints: must live inside the existing customer portal login;
  numbers must match the invoice exactly ("close enough is worse
  than nothing"); wanted before the March renewal cycle.
- Edge cases: customer with zero usage this month; customer on a
  legacy plan with no defined limit.
- Requester unsure who owns the invoice-matching definition of
  "usage" — finance or engineering.
```

## Output (the spec the Spec Writer delivered)

```
# Spec — Customer usage dashboard

Status: confirmed
Requester: Dana (Head of Support)
Interviewed: 2026-08-10, 2026-08-11
Change log: 2026-08-11 — NG1 added (alerts out) — Dana

## Summary

Account owners can see their own usage inside the existing customer
portal, so usage questions stop landing on the support queue.
Support agents get the same read-only view for tickets. Alerts,
emails, and exports are explicitly out of scope.

## Goals

- **G1** — Usage questions stop landing on the support queue.
- **G2** — An account owner can check usage without asking anyone.

## Users

- **Account owner** ("the person who gets the invoice") — wants to
  know what the invoice will say before it arrives.
- **Support agent** — wants to see exactly what the customer sees
  while working a ticket.

## Use cases

- **UC1** (serves G1, G2) — An account owner checks current-month
  usage before the invoice arrives, so the number is not a surprise.
- **UC2** (serves G2) — An account owner checks how close they are
  to their plan limit, so they can decide whether to upgrade.
- **UC3** (serves G1) — A support agent views a customer's usage
  read-only while on a ticket, so both sides talk about the same
  number.

## Non-goals

- **NG1** — No usage alerts or notification emails. Requester:
  "phase two, not now."
- **NG2** — No CSV or any other export. "Nobody asked."

## Constraints

- Lives inside the existing customer portal login — no separate
  sign-in.
- Displayed numbers must match the invoice exactly. Per Dana:
  "close enough is worse than nothing."
- Wanted before the March renewal cycle.

## Edge cases

- Customer with zero usage in the current month sees an explicit
  zero state, not an empty screen.
- Customer on a legacy plan with no defined limit: UC2 must degrade
  — what it shows instead is OQ2.

## Open questions

- **OQ1** — Who owns the invoice-matching definition of "usage",
  finance or engineering? (owner: Dana)
- **OQ2** — What does the plan-limit view show for legacy plans
  with no limit? (owner: Dana)
```

## Why this example is good

- Every numbered item traces to a confirmed answer in the notes;
  nothing is invented.
- Goals are outcomes ("questions stop landing on the queue"), not
  features.
- Each use case names the goals it serves, so a Planner can
  sequence by goal.
- The non-goals quote the requester's own reasoning — the cheapest
  scope defence available later.
- The legacy-plan gap is an Open question with an owner, not a
  guessed behaviour.
- Not one implementation decision: no data source, no charting
  library, no schema. The March deadline and invoice-match rule are
  constraints, stated as facts.
