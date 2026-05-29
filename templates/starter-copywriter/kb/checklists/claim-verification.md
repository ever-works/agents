# Checklist: Claim verification

Run this pass on every draft that contains numbers, customer names,
capability statements, or comparisons. Each item is pass or fail.

## Numbers and stats

- Every number in the draft has a source in the product KB or an
  internal dashboard cited by path.
- "Up to" claims show the underlying calculation in a KB note, not
  the marketing page.
- Percentages name the denominator. "30 percent faster" answers
  "faster than what".
- Time-bound numbers ("this quarter", "last 90 days") name the
  reporting window the data came from.

## Customer references

- Named customers have signed permission to be named for this
  surface. The KB records the permission scope (logo only, name
  only, full quote, named case study).
- Testimonial quotes are exact. Edits for length use ellipses and do
  not change meaning.
- Logos used match the customer-permission scope. Logo on a
  comparison page is a different permission than logo on a
  homepage.

## Capability statements

- "The product does X" matches a feature in the product KB that
  ships in the current release. Beta features are labeled "beta".
- "The product will do X" requires a roadmap entry the PM has
  confirmed for a named release window. No vague "soon".
- Integrations claimed are live in production. Coming-soon
  integrations are listed under "coming soon", not under
  "integrations".

## Comparisons

- The draft is in a `/compare/*` asset. If not, comparison content
  is removed.
- Competitor claims are sourced from the competitor's own public
  documentation, not from a sales narrative.
- The comparison includes a "where the competitor is better" line
  for credibility.

## Result

- No `[UNVERIFIED: ...]` marker is left silent. Every one is listed
  in the unverified claims block at the end of the delivery.
- If a claim cannot be verified and the brief requires it, the
  delivery flags the gap and proposes a fact-true alternative.

If any item in "Numbers and stats" or "Customer references" fails,
the draft is not ready. Fix it before delivery.
