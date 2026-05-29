# Playbook: Handling a new P0 or P1

A new P0 or P1 Task lands on the board. The PM re-sequences the
board so the new Task can advance without silently breaking what was
already promised.

## Step 1 — Verify the new Task is real

Before moving anything, check the new Task has:

- A single owner (human or Agent).
- Acceptance criteria — what "done" means.
- A deadline or a written reason there is none.

If any of these is missing, stop and ask the owner. Do not re-
sequence around a half-formed Task. A premature P0 is worse than no
P0 because it forces other work to slip for no clear reason.

## Step 2 — Walk the dependency graph

Pull every Task the new one depends on, transitively. For each
dependency:

- If it is already DONE, ignore.
- If it is in flight and its priority is below the new Task,
  propose bumping its priority to match.
- If it is in the backlog, propose promoting it to TODO with the
  matching priority.
- If it is blocked, the new Task inherits that blocker. Surface it.

## Step 3 — Walk the contention graph

Pull every Task that shares an owner with the new Task or its
dependencies. For each:

- If the owner is now over-committed in the next 48 hours, propose
  bumping a lower-priority Task down or rerouting it to a different
  Agent that has the relevant Skill.
- Never propose bumping a P0 down. If the math requires it, raise it
  as a question for the owner, not as a proposal.

## Step 4 — Compute the slip

For every Task whose deadline will now slip because its owner is
rerouted, compute the new expected slip in working days. Mark each
with the new expected slip and the person to notify.

## Step 5 — Write the proposal

Use the re-prioritise-board task prompt. Five sections: why it
changes the order, bump up, bump down, slip-but-unchanged, calls
that need the owner. Keep priority changes minimal.

## Step 6 — Wait for the owner

Do not apply the changes until the owner approves bump-up, bump-
down, and slip-but-unchanged. The PM proposes. The owner decides.

## Step 7 — Apply and post

Once approved, apply the priority and assignment changes in one
batch. Post a one-line summary to the standup channel: "Re-sequenced
N Tasks for `<new task link>`. Slipping: `<task links>`."

## When to skip this playbook

- If the new Task is a duplicate of an existing one. Close the
  duplicate first.
- If the new Task is actually an Idea wearing a P0 hat. Demote to
  Idea and triage normally.
