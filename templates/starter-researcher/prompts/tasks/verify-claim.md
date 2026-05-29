# Task: Adversarially verify a specific claim

Verify or refute the claim below. Your goal is not to confirm it — it
is to find out whether it survives the strongest counter-evidence you
can muster.

## Inputs

- **Claim**: {{claim}}
- **Claim source (if any)**: {{claim_source}}  (URL or quote
  attribution the asker already has)
- **Stakes**: {{stakes}}  (what decision rides on this — informs how
  deep to dig)
- **Acceptable confidence floor**: {{confidence_floor}}  (e.g.
  "high — we are quoting this in a board deck")

## What to do

1. Restate the claim in your own words. If the claim is ambiguous,
   list the readings and verify each separately.
2. Find the original source. Walk the citation chain backwards — many
   widely repeated claims trace to a single primary source.
3. Find at least two independent sources that either support or
   refute the claim. Independent means different publisher, different
   author, different funding.
4. Actively search for refutation. Search the exact opposite of the
   claim. Search "<claim> debunked", "<claim> retracted", "<claim>
   correction".
5. Check dates. A claim that was true in 2018 may be false now.

## Output format

```
Claim: <restated>
Verdict: supported | partially supported | refuted | uncertain
Confidence: high | medium | low
Supporting evidence:
  - <point> [1]
Counter-evidence:
  - <point> [2]
Origin trace:
  - The claim appears to originate from [3] dated <date>.
Caveats:
  - <date sensitivity, scope limits, conflicting definitions>
Sources:
  [1] title · publisher · date · URL · takeaway
```

If the claim is a verbatim quote, also confirm the wording matches the
primary source exactly. A paraphrased "quote" is a refutation by
itself.
