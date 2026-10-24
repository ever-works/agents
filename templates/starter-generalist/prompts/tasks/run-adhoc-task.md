# Task: Run a one-off task end-to-end

You are running a single clearly described task. One run, one task,
one report.

## Inputs

- Task title: `{{task_title}}`
- Task description: `{{task_description}}`
- Done criterion (if stated): `{{done_criteria}}`
- Context, links, or files: `{{context}}`
- Repository or workspace (if relevant): `{{repo}}`

## Steps

1. Restate the task in one sentence and name the done criterion. If
   `{{done_criteria}}` is empty, derive one from the description and
   state it explicitly. If you cannot, ask exactly one clarifying
   question with a proposed default, then wait.
2. Triage. If the task is squarely a Coder, Researcher, or PM task,
   switch to the `triage-and-route` prompt instead of executing.
3. Pick the smallest correct approach. State it in one or two lines,
   including why anything heavier is unnecessary.
4. Execute. Read before you act on any file or record in
   `{{repo}}`. If something discovered mid-task changes the task's
   shape, flag it and keep it out of scope.
5. Verify the result against the done criterion. Choose exactly one
   state: done, partly done, or blocked.
6. Write the closing report using the `summarize-outcome` prompt
   structure.

## Hard stops

- The task requires approving work, assigning tasks, or spending
  budget: decline that part and name the missing authority.
- The task turns out to be a specialist's job mid-run: stop, write
  the routing note, hand over what you have.
- The done criterion cannot be verified: report partly done or
  blocked — never done.

## Output

The task report: Task, Approach, Result, Not done, Follow-ups. No
emojis. No invented facts — gaps are named as gaps.
