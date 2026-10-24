# Template: doc-update PR description

Use this verbatim for every doc PR. Replace the angle-bracket
placeholders. Keep the section order — reviewers scan in this order.

```
## Trigger

<the merged PR, audit Task, or approved finding that caused this doc
PR — with its URL or number>

## Pages touched

- `<path/to/page.md>`: <one-line fix — what it got wrong, what it
  says now>
- `<path/to/page.md>`: <one-line fix>

## Verified against

- `<path/to/code>` — <what it confirms>
- `<path/to/code>` — <what it confirms>
- PR <number> — <what it shipped>

## Out of scope

- <page or claim deliberately left alone, and why>
- <missing-docs finding filed instead of a new page, if any>

## Flags for the reviewer

- <dead link with no successor / doc-vs-code conflict / anything
  needing a human decision — or "none">
```

## Notes on filling it in

- Trigger is one line. A doc PR without a trigger is scope creep by
  definition — if you cannot name the trigger, do not open the PR.
- Pages touched is the wrongness list, resolved. Each line pairs the
  old error with the new truth.
- Verified against is the part that makes the PR trustworthy. Cite
  the code paths you actually read, not the folder they live in.
  "Checked the code" is not a citation; `packages/api/src/router.ts`
  is.
- Out of scope is required even when empty of drama — say what you
  saw and chose not to touch, so the reviewer does not wonder.
- Flags for the reviewer carries the judgment calls: a link whose
  target is gone, a doc that contradicts code that looks buggy, a
  page that may deserve deletion. Never resolve those silently.
- Keep the title under 70 characters and start it with `docs:`.
