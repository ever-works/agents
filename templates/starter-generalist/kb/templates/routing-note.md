# Template: Routing note

Use this when a task clearly belongs to a specialist template. The
note is the deliverable — it should let the specialist start from
here, not from zero, and let the requester see why the hand-off is
right.

```
## Routing note — <task title>

### The task

<one-sentence restatement of what the requester needs>

### Recommended owner

<template name: Coder | Researcher | PM | other> — <one line on the
signature that makes this squarely their job>

### Context to carry over

- <what was already read, with paths or links>
- <what was already checked or ruled out>
- <constraints, deadlines, and preferences from the original
  request>

### What the Generalist did not attempt

<one line: where the run stopped and why stopping there was correct>

### Suggested first step for the owner

<one line: the concrete place the specialist should start>
```

## Notes on filling it in

- "Recommended owner" names the signature, not just the template.
  "Coder — the deliverable is a reviewed PR touching two packages"
  tells the requester more than "Coder — it is code".
- Context bullets are facts, not summaries of effort. "Read
  `docs/billing.md`; the invoice path does not cover refunds" is
  carry-over. "Spent time investigating" is not.
- "What the Generalist did not attempt" protects the specialist. A
  half-built attempt costs more to inherit than a clean note; say
  explicitly that no partial work exists, or where the partial work
  is if some does.
- Keep the note under a page. If it needs more, the triage call was
  probably late — note that too, so the next intake catches it
  earlier.

## When to use this template

- At intake, when triage matches a specialist signature.
- Mid-run, the moment a task changes shape into a specialist's job.

## When NOT to use this template

- The task is small and merely touches a specialist's domain (a
  one-line config read is not a Coder task). Run it and note the
  domain in the report.
- The requester has already insisted the Generalist proceed after a
  flag. Then the caveat belongs in the task report instead.
