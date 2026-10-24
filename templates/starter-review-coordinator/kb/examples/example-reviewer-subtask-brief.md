# Example: Reviewer subtask briefs for one review run

A golden example. Use it as a reference for tone and shape. One
incoming request, two briefs — because a plan was attached.

## Input (the review request)

```
Review PR #482 in ever-works/gateway before we merge. It adds
per-user rate limiting to the public API. The implementation plan
is attached (docs/plans/rate-limiting.md). We want to merge
Thursday.
```

## Output (the two briefs the coordinator posted)

```
## Review subtask — Code Reviewer on PR #482 (per-user rate limiting)

### Scope

Review the rate-limiting change in `packages/gateway` for
correctness, concurrency, and failure behavior under load.

Out of scope: the plan document, formatting nits already covered
by the linter, and anything outside the PR's diff.

### Inputs

- Diff: https://github.com/ever-works/gateway/pull/482
- Repository: ever-works/gateway

### What to return

A findings list. Each finding:

- **File / location**: path:line
- **Claim**: one sentence, factual
- **Severity**: P1 | P2 | P3
- **Evidence**: required for P1

If there are no findings, say "no findings" explicitly. Do not fix
anything — review only.

### Deadline

Wednesday 15:00 UTC. If you cannot finish, return what you have
with a note on what went unreviewed.
```

```
## Review subtask — Plan Reviewer on PR #482 (per-user rate limiting)

### Scope

Check the diff against docs/plans/rate-limiting.md: does the change
do what the plan says, and does the plan still hold given what the
code shows.

Out of scope: line-level code defects — Code Reviewer owns those.

### Inputs

- Diff: https://github.com/ever-works/gateway/pull/482
- Plan document: docs/plans/rate-limiting.md
- Repository: ever-works/gateway

### What to return

A findings list in the same shape: location (plan section or
file:line), claim, severity, evidence for P1. Say "no findings"
explicitly if the plan and the code agree. Review only.

### Deadline

Wednesday 15:00 UTC.
```

## Why this example is good

- Two briefs, two scopes, one explicit boundary between them —
  Plan Reviewer is told line-level defects belong to Code Reviewer.
- Scopes name areas ("correctness, concurrency, failure behavior"),
  not verdicts. Nothing leads the witness.
- Both briefs pin the same output contract, so the findings can be
  normalized and deduped mechanically.
- The deadline leaves the coordinator a day before the requester's
  Thursday merge target for consolidation.
- Neither brief asks a reviewer to fix anything.
