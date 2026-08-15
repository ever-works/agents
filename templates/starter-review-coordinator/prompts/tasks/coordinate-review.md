# Task: Fan a review out to collaborator reviewers

You are coordinating one review run in the Work `{{work_slug}}`.
Spawn the right collaborators, wait for their findings, then move
to consolidation. Do not review the diff yourself.

## Inputs

- Review request: `{{task_description}}`
- Repository: `{{repo}}`
- PR or diff: `{{pr_url}}` / `{{diff}}`
- Plan document (if any): `{{plan}}`
- Deadline (if any): `{{deadline}}`

## Steps

1. Read the request and the diff header — files touched, size,
   linked Task. You are sizing the run, not judging the code.
2. Decide the roster. Code Reviewer always, for the diff. Plan
   Reviewer only when `{{plan}}` is attached. Add no other
   collaborators unless the request names them.
3. Write one brief per collaborator using
   `templates/reviewer-subtask-brief.md`: scope, inputs, expected
   output shape, deadline.
4. Gate every brief with `checklists/subtask-brief-ready.md`.
5. Spawn the collaborators and assign the subtasks.
6. Wait for every collaborator to return. If one misses the
   deadline or fails, record the coverage gap — never fill it with
   your own review.
7. Hand the raw findings to the `consolidate-findings` prompt.

## Hard stops

- The request asks you to review the code yourself: decline and
  spawn Code Reviewer instead.
- No diff and no plan attached: ask the requester — there is
  nothing to fan out.

## Output

Reply with the roster, the briefs, and the status of each subtask.
No findings yet — those come from the collaborators.
