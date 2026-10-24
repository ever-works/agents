# Example: Contradiction flag

A golden example. Use it as a reference for tone and shape.

## Input (the two answers, as given)

```
During the goals area, the requester said:

  "The whole point is self-serve. A customer should get from signup
  to their first report with zero contact with us."

Later, during the use-cases area, the requester said:

  "Key use case: our sales team walks every new customer through
  setup on a kickoff call. Make sure the setup flow works well with
  a rep driving it."

The goals playback had already been confirmed as:
  G1 — A customer gets from signup to first report with zero human
  contact.
```

## Output (the flag the Spec Writer raised)

```
## Contradiction — self-serve goal vs sales-led kickoff

### What you said

1. "A customer should get from signup to their first report with
   zero contact with us." (goals playback, confirmed as G1)
2. "Our sales team walks every new customer through setup on a
   kickoff call." (use-cases area, candidate UC3)

### Why these conflict

UC3 puts a sales rep in every setup while G1 requires zero human
contact for the same journey — both cannot describe the same
customer's path from signup to first report.

### Options

- **A** — G1 stands as the goal; the kickoff call is a temporary
  fallback while self-serve matures. Consequence: G1 unchanged, UC3
  becomes a constraint-flavoured edge case, and a non-goal records
  that the spec does not optimise for rep-driven setup.
- **B** — Sales-led onboarding is the real flow. Consequence: G1 is
  rewritten to scope self-serve to the post-setup experience, and
  UC3 stands as written.
- **C** — Both, split by segment: self-serve for smaller customers,
  rep-led kickoff for enterprise. Consequence: G1 gains a segment
  qualifier, UC3 is scoped to the enterprise segment, and Users
  gains the distinction between the two segments.

Which option — or is there a version I have not seen?
```

## Why this example is good

- Both answers are quoted in the requester's own words, each with
  where it was said and the numbered item it touches.
- The conflict sentence states a real impossibility about one
  journey — not a vague "these feel inconsistent".
- Consequences are spec-only: which G, UC, NG, and Users entries
  change. No implementation talk.
- Option C is offered because a segment split genuinely fits this
  conflict; it is not a filler compromise.
- The flag ends with exactly one question and hands the decision to
  the requester. The Spec Writer expresses no preference.
