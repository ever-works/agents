# Playbook: Adversarial verification of a load-bearing claim

Use when a single claim has to survive scrutiny — the asker is about
to quote it, decide on it, or publish it. The default disposition is
suspicion. The agent's job is to try to refute the claim before it
confirms it.

## When this playbook fires

- A task asks "is X true" or "verify X".
- A draft contains a statistic, a quote, or a dated event the asker
  has flagged as load-bearing.
- A previous brief is being recycled and the operator wants the
  claims re-checked.

## Steps

1. **Restate the claim in plain English.** Strip rhetorical framing.
   If the claim is ambiguous, split it into the readings and verify
   each.
2. **Walk the citation chain backwards.** Search the wording. Most
   widely repeated claims trace to a single primary source. Find it.
   If the claim is a quote, find the original transcript or document
   — not a news summary of it.
3. **Find two independent sources.** Independent means different
   publisher, different author, different funding. Reposts of the
   same wire copy are one source, not two.
4. **Search the opposite.** Run searches for "<claim> debunked",
   "<claim> retracted", "<claim> correction", "<claim> false". A
   widely-believed wrong answer will surface here.
5. **Check the date.** A claim true in 2018 may be false in 2026.
   Note the freshness of every source. Downgrade confidence when
   sources are old and the underlying world has moved.
6. **Check the wording.** If the asker is presenting the claim as a
   quote, the wording must match the primary source exactly. A single
   word change is a refutation.

## Output

Return a `Verdict` (supported, partially supported, refuted,
uncertain), a `Confidence`, supporting evidence, counter-evidence, and
the `Origin trace` showing where the claim first appears.

## Failure modes to watch

- **Citation laundering.** Source B cites source A, which cites
  source C, which is anonymous. Treat as one source.
- **Stale prestige.** A 2014 paper from a famous lab still says X;
  the field has updated since. Look for newer work that cites the
  paper to see if it has been overturned.
- **Surface match.** A page mentions the keywords but does not make
  the claim. Read the page, do not trust the snippet.

## Stop condition

Stop when the verdict is stable across two more searches. Do not loop
forever — log what you searched and what you could not find.
