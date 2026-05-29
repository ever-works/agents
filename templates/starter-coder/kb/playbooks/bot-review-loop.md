# Playbook: Drive a PR through the bot review loop

Use this playbook once a PR is open. It applies whether the PR is
fresh or has been sitting overnight with new bot comments.

## Step 1 — Re-sync the branch

`git fetch origin`, then `git checkout <branch>` and pull. If
`develop` has moved and the PR has conflicts, merge or rebase from
`origin/develop` first. Never force-push a shared branch; for the
agent's own feature branch a forced update after a rebase is fine.

## Step 2 — Collect every open finding

Pull review comments from each reviewer:

- Codex / Copilot / CodeRabbit / Greptile inline comments via
  `gh api repos/<owner>/<repo>/pulls/<n>/comments`.
- Per-bot summary reviews via
  `gh api repos/<owner>/<repo>/pulls/<n>/reviews`.
- Human review comments — same endpoints.

Group findings by severity. Anything P1 or P2 is in scope for this
loop. P3 and nit-pick findings are optional unless the human reviewer
flags them.

## Step 3 — Decide per finding

For each P1/P2 finding pick one outcome and act on it now:

- **Fix it.** Small commit on the same branch. Reference the comment
  in the commit message when it helps.
- **Defend it.** Reply on the inline comment with the reason. Cite a
  file, a test, or a runbook. Never just say "intentional" with no
  reasoning.
- **Defer it.** If the finding is real but outside the Task's scope,
  reply on the comment with a one-line plan and create a follow-up
  Task. Then resolve the comment with that link.

## Step 4 — Re-run local checks

After every batch of fixes, run `lint`, `typecheck`, and `test`
locally before pushing. Pushing a half-fix and waiting for CI burns
review time.

## Step 5 — Push and re-poll

Push. The PR updates in place. Wait for the bots to re-run (most
re-run on push). Re-poll their comments. Repeat steps 2-5 until no
P1/P2 finding remains open.

## Step 6 — Hand back

When the loop is clean, reply with the PR URL and a short status:
findings addressed, findings deferred (with follow-up Task links),
CI green. Tag the human reviewer. Do not self-merge.

## When to break the loop

- A reviewer asks for a different feature: defer, do not implement.
- A finding requires force-pushing `develop` / `stage` / `main`:
  refuse and flag the human owner.
- Three rounds with the same bot on the same line: stop, ask the
  human reviewer to arbitrate.
