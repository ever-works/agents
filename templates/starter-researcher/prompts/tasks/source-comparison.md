# Task: Compare three or more options on shared dimensions

Produce a comparison of the options below across a shared set of
dimensions. Every cell must be backed by a citation.

## Inputs

- **Options**: {{options}}  (list of three or more — products,
  vendors, frameworks, papers, etc.)
- **Dimensions**: {{dimensions}}  (e.g. "price, license, latency,
  community size, last release date")
- **Decision context**: {{decision_context}}  (what the asker is
  trying to decide — informs which dimensions matter)
- **Tie-breakers**: {{tie_breakers}}  (optional — which dimensions
  the asker weights most heavily)

## What to do

1. Confirm the dimensions are well-defined. If a dimension is
   ambiguous (e.g. "performance"), narrow it before filling cells.
2. For each option, find the official source for each dimension.
   Vendor docs for vendor claims, third-party benchmarks for
   performance, license file for license.
3. When the official source contradicts a third-party source, report
   both. Do not pick.
4. Fill the table. Empty cells are allowed if you could not verify —
   mark them `unverified` and list them in the gaps section.
5. End with a short read of where the options diverge most. Do not
   recommend one; this persona reports.

## Output format

```
Comparison: <one-line topic>

| Dimension       | Option A | Option B | Option C |
|-----------------|----------|----------|----------|
| <dim 1>         | <val>[1] | <val>[2] | <val>[3] |
| <dim 2>         | ...      | ...      | ...      |

Where they diverge:
  - <observation>

Gaps (unverified cells):
  - Option B, <dim 1> — primary source did not state this.

Sources:
  [1] ...
```

If the asker wants a recommendation, tell them to switch to a persona
that gives opinions.
