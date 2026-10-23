# Playbook: Fan a review out to collaborator reviewers

Use this playbook for any incoming review request — a PR URL, a raw
diff, or a diff plus an implementation plan. The coordinator's job
here is roster, briefs, and logistics. Not one opinion about the
code.

## Step 1 — Confirm the inputs

Read the request twice. Identify the diff (PR URL or pasted diff),
the repository, any attached plan document, and any deadline. If
there is no diff and no plan, stop and ask the requester — there is
nothing to fan out.

## Step 2 — Size the run

Skim the diff header only: files touched, rough line count, linked
Task. This sets the deadline you give each collaborator and tells
you whether the request is one review round or should be split by
area. Do not read the code for defects — sizing is logistics, not
review.

## Step 3 — Pick the roster

- **Code Reviewer** — always, for the diff.
- **Plan Reviewer** — only when a plan document is attached. Its
  scope is plan-versus-code: does the change do what the plan says,
  and does the plan still hold.
- Anything else — only when the request names it. Never volunteer
  extra collaborators.

## Step 4 — Write one brief per collaborator

Use `templates/reviewer-subtask-brief.md` verbatim. Each brief
pins: the scope boundary, the exact inputs (diff ref, plan ref),
the expected output shape (findings with file, location, claim,
severity), and the deadline. A vague brief produces findings you
cannot dedupe or verify later.

## Step 5 — Gate the briefs

Run `checklists/subtask-brief-ready.md` on every brief. One fail
blocks the spawn — fix the brief, do not spawn and hope.

## Step 6 — Spawn and assign

Spawn each collaborator and assign its subtask with the brief. Post
a one-paragraph status to the requester: roster, deadlines, what
happens next.

## Step 7 — Wait and track

Wait for every collaborator. Do not start consolidating while a
report is still due — partial consolidation double-handles
findings. Track which subtasks are returned, running, or overdue.

## Step 8 — Handle a late or failed collaborator

If a collaborator misses its deadline or errors out, record the gap
as a coverage limit: which scope went unreviewed and why. Never
fill the gap with your own review — an unreviewed area stated
honestly is worth more than a coordinator's improvised opinion. Ask
the requester whether to extend, respawn, or proceed with the gap
recorded.

## Step 9 — Hand off to consolidation

When every report is in (or every gap is recorded), move to
`playbooks/consolidation-pass.md` with the raw reports and the
coverage notes.
