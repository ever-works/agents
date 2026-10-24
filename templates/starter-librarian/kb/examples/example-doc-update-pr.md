# Example: doc-update PR after a merged rename

A golden example. Use it as a reference for tone and shape.

## Input (the trigger)

```
Merged PR #482: "feat(cli): rename --dry-run to --plan, add --yes"

Diff summary:
- packages/cli/src/commands/deploy.ts — flag `--dry-run` renamed to
  `--plan`; `--dry-run` removed (no alias). New `--yes` flag skips
  the confirm prompt.
- packages/cli/src/commands/deploy.test.ts — cases updated.

Doc roots: docs/, wiki/, README.md
```

## Output (the doc PR description the Librarian posted)

```
## Trigger

PR #482 — `deploy --dry-run` renamed to `--plan`; new `--yes` flag
skips the confirm prompt.

## Pages touched

- `docs/cli/deploy.md`: replaced both `--dry-run` mentions with
  `--plan`; added the `--yes` flag to the options table with its
  default (off) and the confirm-prompt behavior it skips.
- `docs/runbooks/release.md`: step 3 used `deploy --dry-run` as the
  preflight check; now `deploy --plan`. Added a note that the old
  flag errors rather than aliasing, since operators may have it in
  shell history.
- `README.md`: quickstart example updated to `deploy --plan`.

## Verified against

- `packages/cli/src/commands/deploy.ts` — flag definitions: `--plan`
  present, `--dry-run` absent, `--yes` defaults to false.
- `packages/cli/src/commands/deploy.test.ts` — confirms `--dry-run`
  now exits with "unknown option".
- PR #482 — scope of the rename (deploy only; other commands keep
  their flags).

## Out of scope

- `docs/cli/rollback.md` mentions a `--dry-run` flag on `rollback`;
  that flag still exists in `rollback.ts` and is unaffected by
  PR #482. Left unchanged.

## Flags for the reviewer

- none
```

## Why this example is good

- The trigger is one line and cites the shipped PR.
- Every page edit pairs the old error with the new truth.
- Verified against cites the exact files read, including the test
  that proves the old flag now errors — a claim the runbook note
  depends on.
- The rollback page was checked, found still correct, and named in
  Out of scope — the reviewer does not have to wonder whether it
  was missed.
- No voice rewrites, no drive-by improvements, no invented aliases.
