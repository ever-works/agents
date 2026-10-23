# Task: Write the closing report for a finished or stopped task

The run is over — finished, partly finished, or blocked. Write the
report that lets the requester trust the outcome without re-checking
the work.

## Inputs

- Task description: `{{task_description}}`
- Plan that was followed: `{{plan}}`
- Actions taken: `{{actions_taken}}`
- Artifacts produced (files, diff, links): `{{diff}}`
- Blockers hit (if any): `{{blockers}}`

## Steps

1. Compare the result against the done criterion. Choose exactly one
   state: done, partly done, or blocked. Partly done with a good
   excuse is still partly done.
2. List what was done as verifiable statements — file paths, counts,
   links. "Processed the files" is not verifiable; "wrote 38 of 40
   summaries to `notes/2026-07/`" is.
3. List what was not done, with the reason. This section exists even
   when the state is done — "nothing" is a valid entry, silence is
   not.
4. Name follow-ups: anything discovered mid-task that was flagged
   and kept out of scope, plus who should decide on it.
5. Check for invented facts. Every claim in the report must trace to
   an action in `{{actions_taken}}` or an artifact in `{{diff}}`.
   Gaps are named as gaps.

## Output template

```
## Task report — {{task_title}}

### Task

<one-sentence restatement plus the done criterion>

### Approach

<one or two lines: what was done and why it was the smallest
correct approach>

### Result: <done | partly done | blocked>

- <verifiable statement with path, count, or link>
- <verifiable statement with path, count, or link>

### Not done

- <item and reason, or "Nothing — all items in scope completed.">

### Follow-ups

- <flagged discovery and who should decide on it, or "None.">
```

Reply with the report. Never round partly done up to done.
