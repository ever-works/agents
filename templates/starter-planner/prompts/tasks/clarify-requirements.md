# Task: Clarify ambiguous requirements before planning

The request is too ambiguous to plan honestly. Ask the load-bearing
questions in one batched round, with defaults, so planning can
resume after a single reply.

## Inputs

- Original request: `{{task_description}}`
- Draft plan so far (if any): `{{plan}}`
- Ambiguities already identified: `{{ambiguities}}`

## Steps

1. Re-read `{{task_description}}` and separate the ambiguities into
   two piles: load-bearing (changes which files are touched, the
   data model, or a public contract) and cosmetic (any reasonable
   choice works).
2. For cosmetic ambiguities, do not ask. Record an explicit
   assumption with the chosen default; these go in the plan's
   Context section later.
3. For each load-bearing ambiguity, check the codebase and the spec
   first — many "open questions" are already answered by an
   existing pattern or a prior PR. Only ask what the repo cannot
   answer.
4. Write the remaining questions using the KB
   `clarifying-questions` template: numbered, each with why it is
   load-bearing, the options you see, and the default you will take
   if unanswered.
5. Keep it to one round. Five questions or fewer; if you have more,
   the request needs a spec, not a questionnaire — say so.
6. After the user replies, fold the answers into `{{plan}}` (or
   start the plan) and continue with the `plan-feature` or
   `plan-bugfix` prompt.

## Hard stops

- Never pad the list with questions the repo already answers.
- Never proceed to a full plan while a load-bearing question is
  open and has no stated default.

## Output

The numbered question list in the template structure, followed by
one line stating what happens after the reply. No emojis.
