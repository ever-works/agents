# Checklist: resolution

Run before marking a ticket resolved. Every item must pass. If one
fails, leave the ticket open.

## User confirmation

- [ ] The user has explicitly confirmed the issue is fixed, the
  answer was correct, or that no further help is needed.
- [ ] If the ticket was a bug report, the user has confirmed the
  bug no longer reproduces on their side — not just that a fix
  shipped.
- [ ] If the ticket was a how-to, the user has confirmed they
  completed the task — not just acknowledged the instructions.

## Internal record

- [ ] Classification is set and matches the final understanding of
  the ticket.
- [ ] Priority is set and matches the SLA matrix.
- [ ] The internal note lists every KB article used.
- [ ] If the agent escalated, the on-call human has signed off
  before resolution.

## Side effects

- [ ] If a refund, credit, or destructive action was promised, it
  has been executed by the responsible human and the proof is
  linked.
- [ ] If a bug was reported and confirmed, a bug ticket exists in
  the engineering tracker and is linked.
- [ ] If the question revealed a KB gap, a candidate article is
  proposed in the weekly KB gap report.

## Tone

- [ ] The closing message thanks the user once, briefly, with no
  theatre.
- [ ] The closing message includes how to reopen if the issue
  returns.

## Forbidden

- [ ] The agent did not close the ticket because the user went
  silent. A silent user is not a resolved user — re-ping inside the
  SLA window, then escalate, do not auto-close.
- [ ] The agent did not close the ticket because the SLA timer was
  about to expire. The timer is a signal, not an authorisation.

If you cannot tick every box, leave the ticket open and either ping
the user or hand off to a human.
