# Example: Review summary for a small feature diff

A golden example. Use it as a reference for tone and shape.

## Input (the review request)

```
Task: EW-902 — add an "export as CSV" action to the tenant members
list. Acceptance: button on the members page, GET
/api/members/export returns CSV, only OWNER and ADMIN roles can
call it.

Diff under review: PR #1911, branch feat/ew-902-members-csv-export,
4 files changed:
- apps/api/src/members/members.controller.ts (+18)
- apps/api/src/members/members.service.ts (+31)
- apps/web/components/members/MembersToolbar.tsx (+12)
- apps/api/src/members/members.service.spec.ts (+22)
```

## Output (the review summary the Reviewer posted)

```
## Review — feat/ew-902-members-csv-export @ 3f81c2a

**Verdict**: 3 findings — 0 P0, 1 P1, 2 P2. Merge-blocking issues
present.

### Findings

### [P1] Export endpoint skips the role guard the Task requires

- **Where**: `apps/api/src/members/members.controller.ts:74`
- **Failure scenario**: A MEMBER-role user calls
  GET /api/members/export directly and receives the full member
  list with emails — the acceptance criterion restricts this to
  OWNER and ADMIN. The UI hides the button, but the endpoint is
  the boundary.
- **Verified by**: Read the controller — sibling endpoints use
  `@Roles(OWNER, ADMIN)`; the new route has no decorator. Confirmed
  the global guard defaults to authenticated-only via
  `apps/api/src/auth/roles.guard.ts:21`.
- **Test status**: not covered — the new spec tests service output,
  not controller authorization.
- **Suggested direction**: Add the same `@Roles` decorator the
  sibling admin endpoints use, plus a 403 controller test.

### [P2] CSV fields are not escaped, so a display name containing a
comma shifts every following column

- **Where**: `apps/api/src/members/members.service.ts:88`
- **Failure scenario**: A member named `Smith, Jane` produces a row
  with one extra column; importing the file into a spreadsheet
  shows her email under the role header.
- **Verified by**: Read `buildCsvRow` — plain `values.join(',')`,
  no quoting. Display names are free text
  (`members.entity.ts:34`, no validation).
- **Test status**: not covered — spec fixtures use comma-free
  names.
- **Suggested direction**: Quote fields per RFC 4180 (wrap in
  quotes, double embedded quotes) and add a fixture with a comma.

### [P2] No test covers the empty-members case

- **Where**: `apps/api/src/members/members.service.spec.ts:41`
- **Failure scenario**: A tenant with zero members exports either a
  header-only file or a crash — the diff decides this behavior
  (header row is built from the first member's keys at
  `members.service.ts:82`) and no test pins it. As written it
  throws on `members[0]`.
- **Verified by**: Read `buildCsv` — header derivation reads
  `Object.keys(members[0])` with no length check.
- **Test status**: not covered.
- **Suggested direction**: Derive headers from a constant column
  list and add an empty-tenant test.

### Checked and sound

- `MembersToolbar.tsx` — button gated on the same role hook the
  page header uses; no client-side state issues.
- Query in `members.service.ts:71` scopes by `tenantId` from the
  request context — no cross-tenant leak.
- Encoding: response sets `text/csv; charset=utf-8`; verified
  non-ASCII names survive.

### Out-of-scope observations

- `members.controller.ts:31` (unchanged): the list endpoint paginates
  but the new export does not reuse its query cap — fine for CSV,
  worth a note if tenants grow past memory.

### Boundary

Findings go to the diff author. This review is a report, not an
approval; fixing, re-requesting review, and merging stay with the
author and the Work's merge policy.
```

## Why this example is good

- The verdict line gives counts and the merge call in one glance.
- The P1 is ranked above both P2s, and its scenario explains why
  UI-only gating does not satisfy the acceptance criterion.
- Every finding cites `file:line`, a concrete trigger, and what was
  read to verify — call sites and sibling code, not just the hunk.
- "Checked and sound" proves the clean areas were actually read.
- The pre-existing pagination gap stays out of the ranked list.
- No patches, no approval, no offer to push a fix.
