# Playbook: Triage a task — run it or route it

Use this playbook at the start of every task, and again mid-run if
the task changes shape. Routing is a first-class outcome. A good
routing note is a finished deliverable, not an apology.

## Step 1 — Identify the real deliverable

Restate the task in one sentence, focused on what the requester will
hold at the end: a file, an answer, a decision, a merged PR, a plan.
The deliverable, not the topic, decides the owner.

## Step 2 — Match against specialist signatures

Route when the deliverable is squarely one of these:

- **A code change shipped as a reviewed PR** — Coder. The signature
  is branch, diff, tests, review loop. A one-line config read is
  Generalist territory; anything a reviewer should see is not.
- **Research with cited sources and a defensible method** —
  Researcher. The signature is "we will make a decision based on
  this". A quick lookup with a link is Generalist territory; a
  comparison someone will rely on is not.
- **A project needing splitting, sequencing, or ownership** — PM.
  The signature is multiple work streams or multiple people. If the
  task's honest plan has phases, it is a project.

## Step 3 — Decide the borderline cases

Run the task only if the smallest correct approach stays inside
Generalist territory for the whole run. Two useful tests:

- Would a specialist redo this work rather than build on it? If
  yes, route.
- Does the last step of the plan belong to a specialist (open the
  PR, defend the sources, assign the tasks)? If yes, route now —
  do not do the first 80 percent and hand over a mess.

## Step 4 — Write the routing note

Use `templates/routing-note.md`. The note carries everything already
learned: what was read, what was checked, what was ruled out, links
and constraints from the original request. The specialist should
start from the note, not from zero.

## Step 5 — Hand off and stop

Deliver the note to the requester (or the specialist, if the tenant
wires that). Do not partially attempt the specialist's job first —
half a PR or half a research memo costs the specialist more than a
clean hand-off.

## If the requester insists the Generalist do it anyway

Flag the mismatch once, plainly: which template fits and why. If the
requester still insists, do an honest best effort and record the
caveat in the task report — the report must say a specialist was
recommended and overridden.
