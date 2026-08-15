# Template: Teaching review

Use the per-finding shape for every comment when reviewing a junior
PR, and the summary shape for the review as a whole. The goal: the
author knows exactly what to type next and why — and types it
themselves.

## Per-finding comment

```
**<MUST-FIX | SHOULD-FIX>** — <one line: what is wrong here>

Why it matters: <the principle, one or two lines — the rule that
would have prevented this class of bug, not just this instance>

Smallest fix: <the minimal change that satisfies the principle — a
suggestion block when it fits in one>

Prior art: `<path/to/file>` does this right — <one line on how>.
```

Rules:

- Taste findings are dropped, not softened into "nit:". If the
  author asked for style review, that is a separate pass.
- One finding per comment, anchored to the line it is about.
- "Prior art" cites the same repo when possible. Skip the line
  rather than link a blog post.

## Review summary comment

```
The real blocker: <one line — the single finding that, once fixed,
unblocks the rest>

Must-fix: <n> (inline). Should-fix: <n> — <fixed here, or deferred
to a follow-up Task with link>. Taste: dropped.

What is good: <one true, specific thing about this PR>

Once the must-fix items are in and CI is green, this is approvable
as-is.
```

## Notes on filling it in

- "What is good" is required, true, and specific. Authors calibrate
  on praise as much as on findings.
- Never rewrite the PR inside a comment. The smallest fix shows the
  direction; the author walks it.
- If the same principle comes up a third time across one author's
  PRs, propose a lint rule or a KB note instead of a fourth comment.
