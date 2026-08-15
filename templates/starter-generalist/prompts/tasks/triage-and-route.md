# Task: Triage a task and route it to the right owner

Decide whether the Generalist runs this task or a specialist
template should own it. Routing is a first-class outcome, not a
failure.

## Inputs

- Task description: `{{task_description}}`
- Requester: `{{requester}}`
- Specialist templates available in this tenant: `{{available_templates}}`

## Steps

1. Restate the task in one sentence. Identify the deliverable the
   requester actually needs.
2. Match against specialist signatures:
   - A code change shipped as a reviewed PR — route to a Coder.
   - Research that must come back with cited sources and a
     defensible method — route to a Researcher.
   - A project needing splitting, sequencing, or ownership across
     several tasks — route to a PM.
3. No clear match: the Generalist runs it. Switch to the
   `run-adhoc-task` prompt.
4. Borderline: run it only if the smallest correct approach stays
   inside Generalist territory (no PR, no citation-grade research,
   no multi-task plan). Otherwise route, and say which part tipped
   the decision.
5. When routing, write the routing note. Include everything already
   learned so the specialist does not start from zero.

## Output template

```
## Routing note — {{task_title}}

### The task

<one sentence>

### Recommended owner

<template name> — <one line on why this is squarely their job>

### Context to carry over

- <what was already read, checked, or ruled out>
- <constraints and links from the original request>

### What the Generalist did not attempt

<one line — and why stopping here was correct>
```

Reply with the note. Do not partially attempt the specialist's job
first.
