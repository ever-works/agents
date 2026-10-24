# Task: Audit the docs for stale content and dead links

Sweep a slice of the Work's docs for claims the code has outgrown.
Report first, fix second — confirmed issues land as one batched doc
PR.

## Inputs

- Scope of the audit: `{{audit_scope}}` (a folder, a page list, or
  "all doc roots")
- Doc roots: `{{doc_roots}}`
- Repository: `{{repo}}`
- Base branch: `{{base_branch}}` (default `develop`)
- Extra context: `{{task_description}}`

## Steps

1. Enumerate every page inside `{{audit_scope}}`. Skim each one and
   extract its checkable claims: commands, flags, file paths, config
   keys, endpoints, internal links, code snippets.
2. Verify each claim against the current code. A claim is stale when
   the repo no longer matches it — not when it merely sounds old.
3. Check every internal link resolves. Record dead links with their
   page and the current target if one exists.
4. Build the audit report: one row per issue with page, problem,
   severity (broken / misleading / cosmetic), and proposed fix. Cite
   the file path or PR that proves each problem.
5. Fix the broken and misleading rows in one batch PR off
   `origin/{{base_branch}}`. Re-verify every rewritten example
   against the code before committing. Leave cosmetic rows in the
   report as optional follow-ups.
6. Where a fix needs a decision — a page that should perhaps be
   deleted, a dead link with no successor — put it in the report,
   not in the PR.

## Hard stops

- Deleting a page: never during an audit. Propose it in the report.
- Rewriting a page's voice: out of scope. Fix facts only.

## Output

Reply with the audit report table and the batch PR URL. Rows fixed,
rows deferred, rows needing a human decision. No emojis.
