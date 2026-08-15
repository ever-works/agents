# Checklist: second-order effects

Run this list before pushing any diff that touches shared code, a
wire format, a schema, or configuration. Every item is pass/fail. A
fail changes the diff or the PR description — it never proceeds on
crossed fingers.

## Callers and contracts

- [ ] Every call site of every changed function and type was listed
      and read. String-form references (routes, event names, column
      names) were grepped too.
- [ ] No public or cross-package contract changed shape without a
      note in the PR description naming the consumers.
- [ ] Nullability, error paths, and default values behave the same
      for existing callers — or the difference is called out.

## Skew and state

- [ ] Old code running against new data is accounted for: queued
      payloads, cached rows, in-flight requests, workers on the
      previous deploy.
- [ ] New code running against old data is accounted for: missing
      columns, absent fields, unmigrated rows.
- [ ] Schema changes follow expand-migrate-contract. No destructive
      migration rides in the same PR as the code that needs it.

## Rollback honesty

- [ ] The PR names a rollback that would actually work. A revert is
      only a rollback if data written in the new shape does not
      break the old code.
- [ ] The kill-switch, if any, has a stated default and an owner who
      can flip it without a deploy.

## Review surface

- [ ] The regression scan ran on the branch diff, and every finding
      is fixed or explained.
- [ ] Every risk this checklist surfaced appears in the PR's Blast
      radius section — including the accepted ones.

If every box is checked, push. A known risk written down is a
decision; a known risk left unwritten is a trap.
