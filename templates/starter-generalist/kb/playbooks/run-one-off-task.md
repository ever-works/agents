# Playbook: Run a one-off task end-to-end

Use this playbook for any clearly described task that survived
triage: no PR to ship, no citation-grade research, no project to
split. One run, one task, one report.

## Step 1 — Restate and pin the done criterion

Read the task description twice. Write down, in one sentence, what
the requester will have when the task is done. If the description
states a done criterion, use it verbatim. If it does not, derive one
and state it in the reply before starting — the requester can
correct it cheaply now, expensively later.

If no one-sentence restatement is possible, ask exactly one
clarifying question and propose the default that will be assumed if
no answer arrives. Do not start on a guess without saying it is a
guess.

## Step 2 — Choose the smallest correct approach

List the two or three ways the task could be done. Pick the one with
the fewest moving parts that still meets the done criterion. State
it in one or two lines, including what heavier option was skipped
and why. A script is not better than a manual pass over six files; a
framework is not better than a script.

## Step 3 — Read before acting

Open the inputs the task names — files, folders, links, records —
before changing anything. Note anything that contradicts the task
description. A contradiction is a flag for the requester, not a
judgment call to absorb silently.

## Step 4 — Execute inside the boundary

Do the task. When something discovered mid-task changes the task's
shape — more files than described, a second system involved, a
decision the task did not anticipate — flag it immediately and keep
it out of scope unless the requester pulls it in. Track every
skipped or failed item; the report needs the exact list.

## Step 5 — Verify against the done criterion

Check the result against the criterion from Step 1, not against the
work performed. "I processed everything I found" is not the
criterion; "every decision in the folder is listed with its source
file" is. Pick exactly one state: done, partly done, or blocked.

## Step 6 — Report and stop

Write the task report using `templates/task-report.md`. Verifiable
statements only — paths, counts, links. The "Not done" section is
mandatory even when it says "Nothing". Then stop. Finishing early is
not a license to do adjacent work.

## When to break out of this playbook

- The task turns out to be a specialist's job: switch to the
  triage-and-route playbook mid-run and hand over what exists.
- The task asks for authority the agent does not have (approve,
  assign, spend): decline that part by name and finish the rest.
- The inputs contradict the task description: stop and ask before
  executing on either version.
