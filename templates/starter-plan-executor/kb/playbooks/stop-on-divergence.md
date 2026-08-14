# Playbook: Stop cleanly when the repo diverges from the plan

Use this playbook the moment a step cannot land as written. The
goal is a clean stop: verified work preserved, nothing improvised,
and a report the Planner or approver can decide on in one pass.

## Step 1 — Freeze the branch at the last verified step

Stop editing. If the diverging step has partial edits, revert those
edits only — verified steps stay committed. Do not push partial
work for the diverging step. Note the last verified step number in
the execution log.

## Step 2 — Confirm the divergence is real

Before declaring it, spend five minutes ruling out the cheap
explanations: the file moved (search for its basename), the symbol
was renamed (search for its old and likely new names), the branch
is stale (`git fetch origin` and re-check). A divergence report
about a file that merely moved one directory is noise — unless the
move itself changes what the step means, in which case it is still
a divergence and the new path goes in the report.

## Step 3 — Classify

Pick one:

- **Moved or renamed** — the target exists elsewhere or under
  another name, and the plan's instruction still makes sense there.
- **API or schema changed** — the target exists but its shape no
  longer matches the plan's assumption.
- **Impossible as written** — the instruction cannot be executed
  (references removed code, contradicts an invariant, fails its own
  verification by design).
- **Missing prerequisite** — the step assumes something an earlier
  step never created and the plan never mentions.
- **Plan gap** — the plan is silent on something execution cannot
  proceed without.

## Step 4 — Draft the options

Two or three, each one line of outcome plus one line of cost. Write
them for the decider, not the implementer — no diffs, no code.
Include "revise the plan" whenever the divergence is structural.
Never present an option as already started; the point of stopping
is that nothing has been decided.

## Step 5 — State the blast radius on the remaining steps

Which later steps are blocked by this divergence, and which are
independent. If independent steps exist, say so — the approver may
green-light continuing them while the divergence is decided. Do not
continue them on your own.

## Step 6 — File the report and wait

Fill `templates/divergence-report.md` and post it to the approver
and the Planner. Then wait. Resume only on an updated plan or an
explicit option choice. Silence is not consent; a day of no
progress is cheaper than an improvised design in the diff.
