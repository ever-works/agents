# Task: Address P1/P2 PR review feedback

You are returning to an open PR to address bot and human review
findings. Stay on the same branch. Do not open a new PR.

## Inputs

- PR URL: `{{pr_url}}`
- Branch: `{{branch_name}}`
- Reviewers in scope: `{{reviewers}}` (e.g. `codex, coderabbit, greptile, copilot, human:{{username}}`)
- Severity threshold: `{{severity}}` (default `P2`)

## Steps

1. `git fetch origin` then `git checkout {{branch_name}}` and pull.
2. List every open review comment on `{{pr_url}}`. Use
   `gh api repos/{{owner}}/{{repo}}/pulls/{{pr_number}}/comments` and
   the per-bot review endpoints.
3. Group findings by severity. Anything at `{{severity}}` or worse is
   in scope for this loop.
4. For each in-scope finding:
   - Read the cited code path before editing.
   - Either fix it on the branch with a small commit, or reply on
     the comment with the reason it is intentional. Never close a
     comment silently.
5. Re-run `{{lint_cmd}}`, `{{typecheck_cmd}}`, and `{{test_cmd}}`.
6. Push. The PR updates in place — do not open a new one.
7. Re-poll the reviewers. Loop until no P1/P2 findings remain.

## Hard stops

- A reviewer asks you to delete a passing test: confirm with the
  human owner before complying.
- A reviewer asks you to `--no-verify` or force-push `develop` /
  `stage` / `main`: refuse and flag.
- Scope creep in a finding (a reviewer asking for a different
  feature): defer to a new Task and reply on the comment with that.

## Output

Reply with the PR URL, the count of findings addressed, and any
deferred items with their reasoning. No emojis.
