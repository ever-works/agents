# Task: Open a PR with a clean description

The branch is pushed. Open one PR against the Work's base branch with
a structured description a reviewer can scan in under a minute.

## Inputs

- Repo: `{{repo}}`
- Head branch: `{{branch_name}}`
- Base branch: `{{base_branch}}` (default `develop`)
- Task title: `{{task_title}}`
- Linked Task or issue: `{{task_link}}`

## Steps

1. Verify `git status` is clean and `{{branch_name}}` is pushed to
   `origin`.
2. Run the local checks one more time: `{{lint_cmd}}`,
   `{{typecheck_cmd}}`, `{{test_cmd}}`. Do not open a PR with red
   local checks.
3. Compose the description using the template below. Keep the title
   under 70 characters.
4. Open the PR with `gh pr create --title "<title>" --body "..."`
   against `{{base_branch}}`. Pass the body via a HEREDOC.
5. Reply with the full PR URL — bare `#NN` references are not enough.

## PR body template

```
## Summary

<three lines: what changed, why, scope boundary>

## What changed

- <file or area>: <one-line change>
- <file or area>: <one-line change>

## Considered and rejected

- <alternative>: <one-line reason>

## Test plan

- [ ] <unit / integration test added or updated>
- [ ] `{{lint_cmd}}` clean
- [ ] `{{typecheck_cmd}}` clean
- [ ] `{{test_cmd}}` green

## Risk and rollback

- Risk: <what could break>
- Rollback: <revert PR or specific commit>

Linked Task: {{task_link}}
```

## Hard stops

- Title starts with `WIP` or `[draft]` and the PR is not in draft
  mode: either mark draft or finish the work.
- Body missing the Test plan section: do not open.
- No tests touched and the Task asks for a behaviour change: stop and
  add tests first.
