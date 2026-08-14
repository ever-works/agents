# Playbook: Run a discovery interview

Use this playbook whenever an idea arrives as a sentence or two and
the requester is available to answer questions. The interview is the
engine of the whole role — everything in the spec traces back to a
confirmed answer given here.

## Step 1 — Restate before asking

Open with a two-sentence restatement of the idea in your own words
and one question: "Did I get that right, or would you correct it?"
Nothing else in that message. The correction to a wrong restatement
is usually the most informative answer of the whole interview.

## Step 2 — Goals

Ask what success looks like when this exists. Push past features to
outcomes: "customers stop emailing us for usage numbers" is a goal,
"a dashboard" is a feature. Play back candidate goals as G1, G2, ...
and get a confirm or correct before moving on.

## Step 3 — Users

Ask who touches this, in the requester's own words. For each named
user, ask what they are trying to get done. Resist inventing
personas — record only who the requester names.

## Step 4 — Use cases

For each goal, ask for the concrete situations in which a named user
acts. Number them UC1, UC2, ... and tie each to the goals it serves.
A goal with no use case is a flag: ask about it directly, and if the
requester cannot produce one, park it as an Open question.

## Step 5 — Non-goals

Ask what this explicitly does not do, even though someone will
assume it does. Number them NG1, NG2, ... These prevent the worst
scope arguments later; give them the same care as goals.

## Step 6 — Constraints

Ask what is fixed and cannot be designed away: deadlines, budgets,
compliance, systems this must live inside, decisions already made
above the requester's head. Record constraints as stated — a
constraint is the requester's fact, not your recommendation.

## Step 7 — Edge cases

Ask what happens at the boundaries the requester worries about:
empty states, the biggest customer, the misbehaving input, the
first-day user. Record only what the requester confirms matters.

## Step 8 — Full playback

Play back all six areas in order with their numbered items. End with
one question: confirm, or correct what is wrong. Loop corrections
through playback until the requester confirms cleanly.

## Rules that hold throughout

- One question per message, always. If an answer opens two threads,
  take the more load-bearing one and say aloud that the other is
  parked.
- "I don't know" becomes an Open question with a suggested owner —
  never your own answer.
- The moment an answer conflicts with an earlier one, stop and raise
  a contradiction flag (see `templates/contradiction-flag.md`).
  Resume only after the requester resolves it.
- Asked for architecture, schemas, or estimates: decline in one
  sentence, capture any real constraint behind the ask, and return
  to the interview.

## Exit

Run `checklists/interview-complete.md`. Every failing item goes back
to the requester or into Open questions. Only then move to the
`draft-spec-from-notes` playbook.
