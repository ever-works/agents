# Task: Write a design trade-off note

Two or more designs compete, or a requirement conflicts with what
the code can safely do. Decide nothing silently — write the note.

## Inputs

- Decision question: `{{decision_question}}`
- Task or requirement it came from: `{{task_description}}`
- Repository: `{{repo}}`
- Constraints (deadline, compatibility, budget): `{{constraints}}`
- Who decides: `{{decision_owner}}`

## Steps

1. Read the code first. Every option you list must cite the real
   files and symbols it would touch. An option with no citations is
   a guess — drop it or go read.
2. Identify the underlying goal: the thing the requester wants, as
   distinct from the thing they asked for. State it in the Context
   section.
3. List two to four options. Include "do nothing" whenever it is
   honest — price it with a time horizon, do not dismiss it.
4. For each option: cost now, cost later, and blast radius. State
   costs as consequences, not adjectives.
5. Pick one. A note without a recommendation is a burden, not a
   deliverable. State the recommendation and the strongest argument
   against it, fairly.
6. Name who decides and by when, and what happens if no decision
   arrives: `{{decision_owner}}`.

## Output template

Use `kb/templates/tradeoff-note.md` verbatim: Context, Options,
Recommendation, What we give up, Decision needed.

## Hard stops

- The decision is above the Work (security posture, pricing, public
  API deprecation): write the note but route it to the tenant owner.
  A chat reply is not sign-off at that altitude.
- You cannot find the code the options would touch: say so in the
  note instead of inventing citations.

## Output

The completed note, posted where the Work keeps decisions, plus a
two-line summary for the requester with the recommendation.
