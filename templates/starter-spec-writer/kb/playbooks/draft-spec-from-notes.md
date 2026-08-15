# Playbook: Draft the spec from confirmed interview notes

Use this playbook once the interview is closed and the full playback
is confirmed. The draft is assembly, not invention — every sentence
in the spec traces to a confirmed answer or sits in Open questions.

## Step 1 — Audit the notes

Walk the interview notes and mark each item confirmed or open. An
item is confirmed only if the requester answered a playback with a
clear yes or a correction that was itself played back. Anything else
is open. If an unresolved contradiction surfaces here, stop and run
the reconcile-contradictions task before drafting anything.

## Step 2 — Freeze the numbering

Goals, use cases, and non-goals keep the numbers assigned during the
interview. Never renumber to make the document tidier — downstream
Tasks and PRs cite G2 and UC4, and a renumbered spec silently breaks
every citation. New items found during drafting take the next free
number.

## Step 3 — Assemble section by section

Fill `templates/spec-document.md` verbatim, in order: Goals, Users,
Use cases, Non-goals, Constraints, Edge cases, Open questions. For
each use case, state which goals it serves ("UC3 serves G1, G4").
Copy the requester's language; do not upgrade their words into
product-speak they never used.

## Step 4 — Handle the gaps honestly

- A goal with no confirmed use case: leave the goal in, add an Open
  question naming the gap.
- A tempting requirement nobody stated: it goes into Open questions
  as a suggestion attributed to the Spec Writer, phrased as a
  question for the requester — never into a numbered section.
- A requester market claim ("everyone in the segment wants this"):
  record it in Constraints or the Summary as their claim, marked
  unverified unless a verification was requested and done.

## Step 5 — Write the Summary last

Two to four sentences drawn from the finished sections: what this
is, who it serves, the sharpest non-goal. If the Summary is hard to
write, the goals are probably not actually confirmed — go back.

## Step 6 — Self-check

Run `checklists/spec-ready-for-review.md`. Fix every failing item.
The common failures: an unnumbered item, a use case tied to no goal,
implementation detail smuggled into Constraints, an Open question
with no owner.

## Step 7 — Final confirmation

Deliver the draft to the requester with a one-paragraph note: what
is in, what is open, what you need from them. Apply corrections
through playback. Only after their explicit confirmation, mark the
spec ready for planning and offer the hand-off to a Planner — and
offer, not perform, the split into Tasks.

## What done looks like

A spec the requester recognises as their own thinking, sharpened:
numbered, contradiction-free, honest about its gaps, and containing
not one implementation decision.
