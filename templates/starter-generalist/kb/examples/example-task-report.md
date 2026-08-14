# Example: Task report for a one-off consolidation task

A golden example. Use it as a reference for tone and shape — note
that the state is `partly done` and the report says so plainly.

## Input (the task)

```
Title: Consolidate July meeting decisions into one file

Description: The notes/2026-07/ folder has this month's meeting
notes as markdown files. Produce a single DECISIONS.md in that
folder listing every recorded decision, each with the source file it
came from. Do not rewrite or reinterpret the notes — extract only.

Done when: DECISIONS.md exists and every decision recorded in the
July notes appears in it with its source file.
```

## Output (the report the Generalist posted)

```
## Task report — Consolidate July meeting decisions into one file

### Task

Extract every recorded decision from the markdown files in
notes/2026-07/ into a single notes/2026-07/DECISIONS.md, each entry
citing its source file. Done when every recorded decision appears
with its source.

### Approach

Scanned all 41 files for the folder's decision conventions
("Decision:", "Decided:", "We agreed") and read each match in
context to confirm it records a decision rather than discussing one.
Skipped building an extraction script — one folder, one pass, a
manual sweep with search is smaller and leaves nothing to maintain.

### Result: partly done

- notes/2026-07/DECISIONS.md created with 23 decisions from 17
  source files, grouped by meeting date.
- 39 of 41 files fully processed; each decision entry links its
  source file and quotes the decision line verbatim.
- No source file was modified — extraction only, per the task.

### Not done

- notes/2026-07/standup-0718.md and notes/2026-07/standup-0725.md
  use no decision convention at all — free-form prose. Extracting
  from them requires interpretation, which the task ruled out.
  Their candidate lines are listed at the bottom of DECISIONS.md
  under "Needs human review" rather than counted as decisions.

### Follow-ups

- Two files mark decisions with "AGREED →", a convention the folder
  README does not mention. Worth adding to the README so future
  extraction is mechanical. Requester's call.
```

## Why this example is good

- The state is `partly done` and the first line under "Not done"
  explains exactly why, with the two file names.
- The ambiguous items were surfaced for human review, not silently
  counted or silently dropped — the task said "extract only" and
  the report respects that boundary.
- Result bullets are checkable in under a minute: a path, a count,
  a property of the output.
- The approach names the heavier option (a script) and why it was
  skipped.
- The follow-up is an observation left un-acted-on, with the
  decision explicitly handed to the requester.
