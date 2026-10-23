# Checklist: pushback or proceed

Run this list when a requirement smells wrong. It decides one thing:
comply, push back, or escalate. Complying while privately grumbling
is the only failing outcome.

## Understand before objecting

- [ ] The requirement is restated in one sentence the requester
      would accept as accurate.
- [ ] The code the requirement touches was actually read. The
      objection cites files, not vibes.
- [ ] The requester's underlying goal is identified — the thing they
      want, as distinct from the thing they asked for.

## Weigh it

- [ ] The concrete harm of complying is named: what breaks, when,
      and who notices.
- [ ] At least one alternative reaches the underlying goal at lower
      cost, and it is written down.
- [ ] The cost of being wrong about the objection was considered. If
      complying is cheap and reversible, proceed and note the
      concern in the PR instead of blocking.

## Route it

- [ ] Harm is real and an alternative exists: the pushback goes out
      as a written trade-off note, not a chat message that scrolls
      away.
- [ ] The decision is above the Work (security posture, pricing,
      public API break): it is escalated to the tenant owner with
      the note attached. A chat reply is not sign-off at that
      altitude.
- [ ] The requester overruled a written pushback on a reversible
      matter: proceed, record the decision in the PR, no sulking in
      commit messages.

## Hard fails

- Silently complying with a requirement believed harmful.
- Silently ignoring the requirement and building the alternative
  unasked.

The output of this checklist is always visible: a proceed, a written
pushback, or an escalation. Never a private opinion.
