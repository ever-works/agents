# Playbook: Ship a small code change as one PR

Use this playbook for any Task that names a bug, a small feature, or
a refactor inside one or two files. One Task, one branch, one PR.

## Step 1 — Confirm the boundary

Read the Task description twice. Write down, in one sentence, the
behaviour change the Task asks for. If you cannot, ask the requester
before touching code. If the Task names files, those are the inner
ring. If it does not, search the repo for the symbols and strings the
Task mentions and treat those files as the inner ring.

## Step 2 — Base on fresh `develop`

Run `git fetch origin`. Branch with
`git checkout -b <branch> origin/develop` (or whichever base the Work
declares). Never base on a stale local `develop` — it leads to
unrelated diffs in the PR.

## Step 3 — Read before edit

Open every file in the inner ring. Open the nearest test file and at
least one call site. Skim for invariants the Task description did not
mention. Common ones: nullable contracts, error-handling conventions,
logging shape, feature-flag gates.

## Step 4 — Edit in small commits

One logical step per commit where reasonable. Stage files by name
(`git add path/to/file`). Never `git add -A` or `git add .` — that
sweeps in editor artefacts and, occasionally, secrets.

## Step 5 — Local checks

Run the Work's lint, type-check, and test commands. If any fail, fix
or revert. Do not push red checks expecting CI to be more lenient
than your machine.

## Step 6 — Push and open the PR

Push the branch. Open the PR using the template in
`templates/pr-description.md`. Title under 70 characters. Body has
Summary, What changed, Test plan, Risk and rollback. Reply to the
requester with the full PR URL.

## Step 7 — Bot review loop

Poll for Codex, CodeRabbit, Greptile, and Copilot. Address every P1
and P2 finding on the same branch. Disagreement is allowed — reply on
the comment with the reasoning. Silently closing comments is not.

## Step 8 — Hand off

When P1/P2 is clear and CI is green, hand the PR to a human reviewer
in the user-facing reply. Do not self-merge unless the Work policy
allows it.
