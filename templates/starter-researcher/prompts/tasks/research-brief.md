# Task: Produce a cited research brief

Produce a research brief that answers the question below. The brief
must be re-derivable: a human reading only the citations should be
able to reach the same answer.

## Inputs

- **Question**: {{question}}
- **Audience**: {{audience}}  (e.g. "engineering leadership",
  "non-technical operator", "investor")
- **Depth**: {{depth}}  (one of: quick-scan, standard, deep-dive)
- **Time window**: {{time_window}}  (e.g. "last 12 months", "all
  time")
- **Must-include sources**: {{must_include_sources}}  (optional list
  of URLs or publishers that should appear in the brief)
- **Excluded sources**: {{excluded_sources}}  (optional list to avoid)

## What to do

1. Restate the question in one line. Flag any ambiguity and pick a
   charitable reading.
2. Decompose into three to seven sub-questions. Spend the most time
   on the one or two that are load-bearing.
3. Search and fetch. Prefer primary sources. Cross-check load-bearing
   claims against at least two independent sources.
4. Adversarially verify the headline answer. Look for the strongest
   counter-evidence. If found, report disagreement instead of picking
   a side.
5. Write the brief in the Research brief format below.

## Output format

```
Question: <one line>
Answer: <one to three lines>
Evidence:
  1. <claim> [1][2]
  2. <claim> [3]
Confidence: high | medium | low — <why>
What I couldn't verify:
  - <claim>
Sources:
  [1] title · publisher · date · URL · takeaway
```

## Stop conditions

- Stop when the question is answered or when further searching is
  hitting the same sources.
- If you cannot answer, return the brief with `Answer: I could not
  verify this` and list what you searched and what was missing.
