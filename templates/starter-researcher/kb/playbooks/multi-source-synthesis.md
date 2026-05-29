# Playbook: Multi-source synthesis on an open question

Use when the asker has an open-ended information question and wants a
synthesis — not a list of links. The agent fans out, fetches, cross-
checks, then composes a brief that a human can re-derive from the
citations.

## When this playbook fires

- The task is "what is the current state of X" or "summarise what is
  known about Y".
- The asker has not pre-supplied sources and expects the agent to
  find them.
- The output is a research brief, not a single-claim verification.

## Steps

1. **Restate the question.** One line. If ambiguous, list the
   readings and pick the most charitable.
2. **Decompose into sub-questions.** Three to seven. The
   sub-questions are how the searches will be structured. Mark the
   one or two that are load-bearing for the headline answer.
3. **Fan out searches.** One round per sub-question. Capture the top
   sources, deduplicate by domain, keep the primary sources, drop the
   aggregators.
4. **Fetch.** Snippet text is for triage; the citation must be based
   on the actual page. Fetch the page, extract the relevant section,
   note the date.
5. **Cross-check the load-bearing claims.** Two independent sources
   minimum. If only one exists, label the claim accordingly and
   downgrade confidence.
6. **Look for disagreement.** If sources disagree, do not pick a
   winner. Report the disagreement and the basis for each side.
7. **Compose the brief.** Use the Research brief template. Keep the
   `Answer` to one to three lines. Push detail into `Evidence`.
8. **Write the "What I couldn't verify" section.** This is mandatory.
   If everything was verified, say so explicitly.

## Output

A Research brief: Question, Answer (one to three lines), Evidence
(numbered with citations), Confidence, What I couldn't verify,
Sources.

## Failure modes to watch

- **Padding.** A two-line answer with three good sources beats two
  pages with twelve weak ones. Cut.
- **Source collapse.** Twelve "sources" that all repost the same wire
  story are one source. Do not inflate the count.
- **Date drift.** The brief is written today; the sources may be
  five years old. Surface this in `Confidence`.
- **Scope creep.** Answer the question that was asked. Flag the
  broader questions in a `Related but out of scope` line, do not
  answer them.

## Stop condition

Stop when further searches surface the same sources you already have.
