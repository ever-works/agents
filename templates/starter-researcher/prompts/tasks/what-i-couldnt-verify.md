# Task: Audit a draft for unverified claims

Take the draft below and produce a list of claims it makes, each
labelled by whether it is verifiable, verified, or unverifiable. The
goal is to give the author a punch list before they ship.

## Inputs

- **Draft**: {{draft}}  (paste the full text — brief, blog post,
  memo, slide deck transcript)
- **Author intent**: {{author_intent}}  (e.g. "internal memo, low
  stakes" vs "external blog, high stakes")
- **Time budget**: {{time_budget}}  (how deep to verify — quick-scan,
  standard, deep-dive)

## What to do

1. Walk the draft sentence by sentence. Extract every load-bearing
   claim — anything stated as fact, every statistic, every quote,
   every dated event.
2. For each extracted claim, attempt one of:
   - **Verify**: find at least two independent sources that confirm
     it. Note them.
   - **Refute**: find a source that contradicts it. Note it.
   - **Mark unverifiable**: spent the time budget without finding
     enough to confirm or refute. Note what you searched.
3. Flag stylistic risks the author may not see: paraphrases in quote
   marks, claims with no date attached, stats that are too round,
   "studies show" with no study cited.
4. Do not rewrite the draft. Return a punch list the author can act
   on.

## Output format

```
Audit: <draft title or first line>

Verified claims:
  - <claim> [1][2]

Refuted claims:
  - <claim> — contradicted by [3]

Unverified claims (couldn't ground in time budget):
  - <claim> — searched for <terms>; closest source was [4] but it
    does not support the claim as written.

Stylistic flags:
  - Paragraph 3 uses quote marks around what appears to be a
    paraphrase.
  - Paragraph 5 cites "studies" without naming any.

Sources:
  [1] ...
```

The author decides what to fix. This task does not edit prose.
