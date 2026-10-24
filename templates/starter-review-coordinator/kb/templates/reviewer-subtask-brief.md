# Template: Reviewer subtask brief

Use this verbatim when spawning a collaborator reviewer. Replace
the angle-bracket placeholders. One brief per collaborator — never
one shared brief for two reviewers with different scopes.

```
## Review subtask — <collaborator role> on <PR title or diff ref>

### Scope

<one sentence: what this reviewer examines>

Out of scope: <one sentence: what it must not spend time on>

### Inputs

- Diff: <PR URL | commit range | attached diff ref>
- Plan document: <ref, Plan Reviewer only — omit otherwise>
- Repository: <org/repo>

### What to return

A findings list. Each finding:

- **File / location**: <path:line or plan section>
- **Claim**: <one sentence, factual>
- **Severity**: P1 | P2 | P3
- **Evidence**: <required for P1: why this is true, one line>

If there are no findings, say "no findings" explicitly. Do not fix
anything — review only.

### Deadline

<timestamp or duration>. If you cannot finish in time, return what
you have with a note on what went unreviewed.
```

## Notes on filling it in

- Scope is the load-bearing line. "Review the diff" is not a scope;
  "Review the rate-limiter change in `packages/gateway` for
  correctness and concurrency" is.
- Name the area, never the verdict. "Check the retry logic" is
  fine; "check the probably-broken retry logic" leads the witness
  and taints corroboration.
- The output contract matters downstream: findings that arrive as
  file / claim / severity lines can be deduped and verified;
  freeform prose cannot.
- For Plan Reviewer, scope is always plan-versus-code: does the
  change do what the plan says, and does the plan still hold given
  what the code shows.
- The explicit "no findings" rule distinguishes a clean review from
  a silent failure.
