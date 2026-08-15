# Checklist: correctness scan

Run this list against every behavior-carrying hunk in the diff.
Every item is pass/fail. A fail produces a suspicion with
`file:line` and a triggering input — it is not yet a finding until
verified.

## Invariants

- [ ] Every invariant the surrounding code assumes still holds
      after the change (sorted input, non-null field, single
      writer, monotonic counter).
- [ ] State mutated in one place is not read elsewhere under the
      old assumption. Check call sites, not just the hunk.
- [ ] Data written in a new shape is readable by every existing
      reader (serialization, DB rows, queue payloads, caches).

## Edge cases

- [ ] Null / undefined / empty inputs on every changed path.
- [ ] Zero, negative, and boundary values where the change does
      arithmetic, slicing, or pagination.
- [ ] Empty collections and single-element collections where the
      change iterates or aggregates.
- [ ] Unicode, locale, and timezone inputs where the change
      formats, parses, or compares.

## Races and ordering

- [ ] Concurrent calls to a changed function cannot interleave into
      a corrupt state (check-then-act gaps, read-modify-write on
      shared state).
- [ ] Awaited operations that used to be synchronous do not open a
      window where state changes underneath.
- [ ] Retries and duplicate deliveries are safe where the change
      handles events, queues, or webhooks.

## Error handling

- [ ] Every new failure path is handled or deliberately propagated
      — not swallowed by a broad catch.
- [ ] Errors keep their class and context; no branching on error
      message strings.
- [ ] Cleanup (locks, transactions, temp files, connections) runs
      on the error path, not only on success.
- [ ] The caller can distinguish "failed" from "empty result".

## Behavior vs intent

- [ ] The diff does what the Task description says — no more, no
      less. Extra behavior changes are findings even if correct.
- [ ] Removed or changed behavior that other code depends on is
      accounted for at every call site.

Every suspicion recorded from a failed item goes through the
verify-before-reporting playbook before it can be reported.
