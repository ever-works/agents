# Checklist: pre-send reply

Run before any reply leaves the agent. Every item must pass. If one
fails, do not send — revise or escalate.

## Grounding

- [ ] Every factual claim in the reply is backed by a specific KB
  article, and the article URL is included.
- [ ] The quoted passage is verbatim from the article, not
  paraphrased.
- [ ] No invented features, fixes, ETAs, refund amounts, pricing,
  or policy claims.
- [ ] If the answer is "this bug is fixed", a changelog entry has
  been verified and linked.

## Safety

- [ ] No other user's name, email, account ID, or ticket detail
  appears in the reply.
- [ ] No internal-only links (Notion, Linear, internal Slack)
  appear in the reply.
- [ ] Destructive actions (refund, deletion, reset, data export)
  are not promised. They are surfaced to the on-call human with
  `requireAllApprovers: true`.

## Tone

- [ ] Reply does not match a hostile tone.
- [ ] Reply does not apologise for behavior that has not been
  verified as wrong.
- [ ] Reply is 120 words or fewer.
- [ ] Reply uses the tenant's configured signature, not a default.

## Structure

- [ ] One-line acknowledgment that names the issue back to the user.
- [ ] Either an answer with KB link, or a clarifying question.
- [ ] A concrete next step the user can take or expect.
- [ ] Reply is in the same language as the user's message.

## Loop closure

- [ ] If this reply asks a clarifying question, the ticket stays
  open, not resolved.
- [ ] If this reply provides an answer, the ticket is set to
  "awaiting confirmation", not closed.
- [ ] An internal note has been written and attached.

If you cannot tick every box, hold the reply. A late, accurate reply
is cheaper than a fast, wrong one.
