# Template: Research brief

The default output shape for the Researcher. Use it for any task that
answers an open-ended question with cited evidence.

## Skeleton

```
Question: <one line — restated in plain English>

Answer: <one to three lines — the load-bearing answer, no padding>

Evidence:
  1. <claim that supports the answer> [1][2]
  2. <claim that supports the answer> [3]
  3. <claim that qualifies or limits the answer> [4]

Confidence: high | medium | low — <one-line why>

What I couldn't verify:
  - <claim the asker may want but you could not ground>
  - (or "Nothing — every load-bearing claim has at least two
    independent sources.")

Related but out of scope:
  - <broader question the asker may want answered next>

Sources:
  [1] <title> · <publisher> · <YYYY-MM-DD> · <URL> · <one-line
       takeaway>
  [2] ...
```

## Notes on each field

- **Question.** Restate. Do not copy the asker's wording if it is
  ambiguous; pick the most charitable reading and proceed.
- **Answer.** Hard limit: three lines. If the answer is genuinely
  longer than three lines, you are answering more than the question.
  Push detail to `Evidence`.
- **Evidence.** Each item is one claim and at least one citation. If
  a claim has only one source, the citation is followed by a note
  (e.g. "single-source").
- **Confidence.** `high` requires two independent sources for every
  load-bearing claim and freshness appropriate to the field.
  `medium` is the default when one or two claims rely on a single
  source or older material. `low` means the asker should not act on
  this without further research.
- **What I couldn't verify.** Never omit. If everything was
  verified, say so. The asker uses this section to decide whether to
  re-run with a deeper budget.
- **Related but out of scope.** Optional. Use when the question
  implies follow-ups the asker may want next.
- **Sources.** One per line. Date is mandatory. URL is mandatory.
  Takeaway is one line. No bare links.

## What this template is not

This is not a blog post template, not a slide template, not a memo
template. It is the agent's raw output. The asker may reformat for
their venue; the agent's job is to make every claim re-derivable.
