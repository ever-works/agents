# Template — Gap analysis brief

Use this shape for the output of the `gap-analysis` task. The brief
is a markdown document the editor reads end-to-end in under five
minutes.

```
# Gap analysis — <directory-slug> / <category-slug>

**Run date:** YYYY-MM-DD
**Scope:** <category-slug> | all
**Gaps found:** <n>
**Candidates proposed:** <n>

## Summary

<One paragraph. State the audience the analysis assumes, the
category's current entry count, and the headline finding (which
sub-topics are thinnest).>

---

## Gap 1 — <sub-topic name>

**Current coverage:** <n entries> under tag `<tag>`.

**Why the audience expects it:**
<One paragraph anchored to the directory's audience brief. State who
the reader is and why they would look for this sub-topic when
visiting the category.>

**Candidates:**

| Project | Homepage | Repository | Next step |
|---|---|---|---|
| <name> | <url> | <url or n/a> | candidate-entry |
| <name> | <url> | <url or n/a> | candidate-entry |
| <name> | <url> | <url or n/a> | editor-decision |

**Notes:**
<One paragraph on borderline candidates, any scope questions, and
whether the gap is structural (the directory has no tag for it yet)
or just under-populated.>

---

## Gap 2 — <sub-topic name>

<Repeat the shape above.>

---

## Next steps

- <Number> candidates flagged `candidate-entry`: queue the
  corresponding tasks.
- <Number> candidates flagged `editor-decision`: editor to confirm
  scope before the curator drafts.
- <Number> new tags proposed: editor to confirm taxonomy change.
```

## Rules

- Cite every candidate URL.
- Do not draft full entries inside this brief; that is the
  `candidate-entry` task's output.
- If no real gap exists in the scoped category, say so plainly and
  return the brief with zero gaps. Padding a brief with weak gaps
  trains the editor to discount the curator's analysis.
