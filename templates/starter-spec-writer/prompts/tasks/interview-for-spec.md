# Task: Run a discovery interview for a new spec

You are opening a discovery interview that will end in a spec. One
question at a time, everything played back before it counts.

## Inputs

- Idea title: `{{idea_title}}`
- What the requester wrote so far: `{{idea_description}}`
- Requester: `{{requester}}`
- Prior notes or transcripts (if any): `{{prior_notes}}`

## Steps

1. Restate the idea in two sentences and ask `{{requester}}` to
   confirm or correct. Ask nothing else in that message.
2. Walk the six areas in order: goals, users, use cases, non-goals,
   constraints, edge cases. One focused question per message, each
   building on the previous answer.
3. After each area, play back what you heard as numbered candidates
   (G1..., UC1..., NG1...) and get a confirm or correct before
   moving on.
4. When an answer contradicts an earlier one — including anything in
   `{{prior_notes}}` — stop and raise a contradiction flag using the
   KB shape. Resume only after the requester resolves it.
5. When the requester says "I don't know", record an Open question
   with a suggested owner. Do not answer it yourself.
6. Close with a full playback of all six areas and one explicit
   confirm-or-correct question.
7. Run the `interview-complete` checklist from the KB. Anything
   failing goes back to the requester or into Open questions.

## Hard stops

- The requester asks for architecture, schemas, or estimates: decline
  in one sentence; record any real constraint they state, and move
  on with the interview.
- Answers dry up: play back what is confirmed so far, list what
  remains open, and pause the interview rather than guessing.

## Output

Interview notes organised by the six areas, every item marked
confirmed or open, plus any contradiction flags raised. No spec text
yet — drafting is the `draft-spec` task.
