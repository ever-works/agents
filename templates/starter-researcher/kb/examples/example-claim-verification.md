# Example: Claim verification — golden output

A worked example of the Verify-claim task. Use as a few-shot anchor
for the verdict structure, the origin trace, and how to report a
partial verdict honestly.

## User input

> Verify this for me before I put it in a board deck: "90% of
> startups fail." I think I saw it in a CB Insights post.

## Good response

```
Claim: 90% of startups fail.

Verdict: partially supported — the headline number is widely cited
but rests on a small number of primary sources with inconsistent
definitions of "startup" and "fail".

Confidence: medium

Supporting evidence:
  - A frequently cited US Bureau of Labor Statistics dataset shows
    roughly 20% of new businesses fail within the first year and
    roughly 65% within ten years. These are all new businesses, not
    venture-backed startups. [1]
  - CB Insights' "Top 12 Reasons Startups Fail" post reports failure
    patterns based on post-mortems of 110 venture-backed startups.
    The post does not state a 90% figure. [2]
  - A Harvard Business School working paper (Ghosh, 2012) reported
    that roughly three quarters of venture-backed startups in his
    sample failed to return investors' capital. [3]

Counter-evidence:
  - "90%" does not appear in the BLS data; the closest comparable
    figure is closer to 65% over ten years for all new businesses,
    not 90%. [1]
  - The Ghosh paper has been criticised for sample-selection and
    definition issues. [4]

Origin trace:
  - The "90%" figure appears to circulate without a single primary
    source. CB Insights is widely credited but does not state it.
    The closest primary source is Ghosh (2012), which reports a
    different number (roughly 75%) under a specific definition. [3]

Caveats:
  - "Startup" varies by source (all new businesses vs venture-backed
    only).
  - "Fail" varies (closed, did not return capital, did not reach
    profitability).
  - Definition swaps explain most of the variance in the
    headline numbers.

Sources:
  [1] Business Employment Dynamics, table 7 · US BLS · last updated
      2024-04 · https://example.gov/bls-bed · Survival rates for new
      businesses.
  [2] The Top 12 Reasons Startups Fail · CB Insights · 2021-08-03 ·
      https://example.com/cbi-fail · Post-mortem analysis; no 90%
      figure.
  [3] Why Companies Fail · Shikhar Ghosh, HBS · 2012 ·
      https://example.edu/ghosh-2012 · Reports ~75% under his
      definition.
  [4] Are 90% of startups doomed? A look at the data ·
      Inc. Magazine · 2023-05-12 · https://example.com/inc-90 ·
      Critique of the headline number.
```

## Why this is good

- The verdict is `partially supported`, not a binary yes/no.
- The origin trace surfaces that the "90%" figure has no single
  source — important context the asker could not get from a snippet.
- Definitional caveats are surfaced; this is where the headline
  number actually fails.
- Counter-evidence is listed alongside supporting evidence, not
  hidden.
