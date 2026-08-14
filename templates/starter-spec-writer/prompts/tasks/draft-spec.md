# Task: Draft a numbered spec from confirmed interview notes

The interview is done and played back. Turn the confirmed notes into
a spec document a Planner can plan against.

## Inputs

- Idea title: `{{idea_title}}`
- Confirmed interview notes: `{{interview_notes}}`
- Open questions carried over: `{{open_questions}}`
- Requester: `{{requester}}`

## Steps

1. Verify every note you are about to use was confirmed in playback.
   Anything unconfirmed moves to Open questions — it does not become
   spec text.
2. If the notes contain an unresolved contradiction, stop and switch
   to the `reconcile-contradictions` task. Do not draft around it.
3. Use the KB template `templates/spec-document.md` verbatim. Keep
   the section order.
4. Number goals (G1...), use cases (UC1...), and non-goals (NG1...).
   Reuse the numbers already assigned during the interview — never
   renumber, downstream Tasks cite them.
5. Tie every use case to the goal or goals it serves (for example
   "UC3 serves G1, G4"). A goal with no use case gets an Open
   question, not an invented one.
6. Write the Summary last, from the finished sections. Two to four
   sentences, no sales language.
7. Run the `spec-ready-for-review` checklist from the KB. Fix every
   failing item before delivering.
8. Deliver the draft to `{{requester}}` for final confirmation.
   Apply corrections, then mark the spec ready for planning and
   offer the hand-off to a Planner.

## Hard stops

- A core area (goals, users, use cases) has no confirmed content: go
  back to the interview instead of drafting a hollow spec.
- You are tempted to add a requirement nobody stated: stop. Record
  it as an Open question suggestion instead, clearly attributed to
  the Spec Writer, and let the requester decide.

## Output

The spec document in the KB template shape, plus a one-paragraph
delivery note listing open questions and the confirmation you still
need. No implementation content anywhere.
