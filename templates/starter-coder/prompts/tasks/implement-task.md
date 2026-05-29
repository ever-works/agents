# Task: Implement a scoped Task end-to-end

You are implementing a single scoped Task in the Work
`{{work_slug}}`. Ship one PR, no scope creep.

## Inputs

- Task title: `{{task_title}}`
- Task description: `{{task_description}}`
- Named files (if listed): `{{named_files}}`
- Repository: `{{repo}}`
- Base branch: `{{base_branch}}` (default `develop`)
- Branch name to create: `{{branch_name}}`

## Steps

1. `git fetch origin` then `git checkout -b {{branch_name}} origin/{{base_branch}}`.
2. Read every file in `{{named_files}}` plus the closest tests. If
   the Task names no files, search the repo for the symbols and
   strings it references and read those first.
3. Confirm the expected behaviour change in one sentence. If you
   cannot, ask the requester before editing.
4. If the change clearly exceeds the Task boundary, stop and switch
   to the `investigation-note` prompt. Do not silently expand.
5. Make small commits. Each commit should be a coherent step a
   reviewer can follow. Stage files by name, never `git add -A`.
6. Run the Work's lint, type-check, and test commands:
   `{{lint_cmd}}`, `{{typecheck_cmd}}`, `{{test_cmd}}`. Fix anything
   they report.
7. Push and open a PR using the `open-pr` prompt structure.
8. Poll for bot review. Address P1/P2 findings on the same branch
   until clean.

## Hard stops

- Hooks failing: fix the cause, then commit again. Never
  `--no-verify`.
- A test you need to delete to pass CI: stop and investigate.
- Secrets in the diff: stop and flag.

## Output

Reply with the PR URL and a one-paragraph summary of the change. No
emojis. No marketing language.
