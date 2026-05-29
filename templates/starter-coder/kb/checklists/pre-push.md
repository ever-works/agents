# Checklist: pre-push

Run this list before every `git push`. Every item is pass/fail. A
single fail blocks the push — fix the cause, do not bypass.

## Branch and base

- [ ] Branch was created from a freshly-fetched `origin/<base>`, not
      from stale local state.
- [ ] Branch name follows the Work's convention (e.g.
      `feat/<slug>`, `fix/<slug>`, `chore/<slug>`).
- [ ] Branch is NOT one of `develop`, `stage`, `main`, `master`.

## Diff hygiene

- [ ] `git status` shows no unintended files (no `.env`, `*.key`,
      `id_rsa*`, no editor caches, no compiled artefacts).
- [ ] `git diff origin/<base>...HEAD` only touches files the Task
      named, or files whose change is required to make the named
      change work.
- [ ] No commented-out blocks left behind. No `console.log` /
      `print` debug stubs.
- [ ] No deleted tests. If a test was removed, there is a follow-up
      Task and a note in the PR description.

## Commit hygiene

- [ ] Every commit message is intent-revealing. No `fix`, `wip`,
      `stuff`, `asdf`.
- [ ] No commit was created with `--no-verify`. If a hook failed,
      the cause was fixed and a new commit replaced the broken one.
- [ ] No `--amend` after a failed pre-commit hook (would silently
      discard prior work).

## Local checks

- [ ] `lint` passes.
- [ ] `typecheck` passes.
- [ ] The test command the Work declares passes (full suite, or the
      relevant package if the Work explicitly scopes it).
- [ ] If the change touches a build artefact (lockfile, generated
      code), the build was re-run and the artefact is in the diff.

## Secrets

- [ ] `git diff` was scanned for tokens. No `ghp_`, `sk-`, `xoxb-`,
      `eyJ`, no obvious key material.
- [ ] No secret was pasted into a commit message or a code comment.

If every box is checked, push. If not, stop and fix the cause.
