# Example: Routing note for a task that belongs to the Coder

A golden example. Use it as a reference for tone and shape — note
that the Generalist did useful intake work and then stopped, rather
than attempting part of the PR.

## Input (the task)

```
Title: Stop the weekly digest from emailing archived projects

Description: Customers with archived projects still get the weekly
digest email for them. Find where that happens and make it stop.
Probably a small fix.
```

## Output (the routing note the Generalist posted)

```
## Routing note — Stop the weekly digest from emailing archived
projects

### The task

Change the weekly digest so archived projects are excluded from the
emails customers receive.

### Recommended owner

Coder — the deliverable is a reviewed code change: the digest query
lives in application code, the fix needs a regression test, and the
change ships as a PR through CI. "Probably a small fix" does not
change the shape, only the size.

### Context to carry over

- The digest job builds its project list in
  `packages/notifications/src/digest/build-digest.ts`
  (`listProjectsForDigest`); the query filters on `ownerId` and
  `deletedAt IS NULL` but never checks archived state.
- Archived state is `archivedAt` on the project entity
  (`packages/core/src/project/project.entity.ts`), added in EW-988.
- Ruled out a data problem: spot-checked three affected customers —
  their projects are correctly archived in the database, so this is
  query logic, not bad rows.
- Constraint from the requester: no change to digest content for
  non-archived projects.

### What the Generalist did not attempt

No code was changed and no branch was created — a query change
without a regression test would arrive unreviewable, and the test
belongs to the same PR.

### Suggested first step for the owner

Add an `archivedAt IS NULL` condition to `listProjectsForDigest`
and a test fixture with one archived project asserting it is absent
from the built digest.
```

## Why this example is good

- The triage call is explained by the deliverable's shape (PR, test,
  review), not by the topic being "code".
- The carried-over context is concrete: file paths, the symbol, the
  entity field, and a ruled-out alternative cause. The Coder starts
  at the right line instead of at the bug report.
- The Generalist read code to locate the problem — inside its
  territory — and stopped exactly where the reviewed change begins.
- "What the Generalist did not attempt" states plainly that no
  partial work exists to inherit.
- The suggested first step is one line and actionable, not a plan
  that second-guesses the specialist.
