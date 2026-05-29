# Task — Archive a deprecated entry with reason

Archive the entry `{{entry_slug}}` in the `{{directory_slug}}`
directory. The entry's record lives at `{{entry_path}}`. The trigger
for this archive is `{{archive_trigger}}` (one of: `repository
archived`, `acquired`, `deprecated`, `out-of-scope`, `dead link x2`,
`editor-requested`).

## Steps

1. **Confirm the trigger.** Re-check the primary signal that caused
   the archive proposal:
   - For `repository archived`: re-fetch the repo metadata and
     confirm `archived: true`.
   - For `acquired`: cite the acquisition announcement URL.
   - For `deprecated`: cite the project's deprecation notice URL.
   - For `out-of-scope`: cite the directory's scope statement and the
     project page that breaks it.
   - For `dead link x2`: cite the two consecutive freshness reports
     that flagged it.
   - For `editor-requested`: cite the editor's instruction.

2. **Mutate, don't delete.** Produce a YAML diff that:
   - Sets `status: archived`.
   - Sets `archivedAt` to today's UTC date.
   - Adds `archivedReason: {{archive_trigger}}` plus a one-line human
     summary in `archivedNote`.
   - Leaves the entry's name, slug, tags, and entry-page markdown
     intact so existing inbound links keep resolving.

3. **Queue for approval.** Set `requireAllApprovers: true` on the
   diff. Archival is a publish-grade change; the editor approves.

## Constraints

- Never delete the entry's file or its slug.
- Never archive without a cited primary source. If the source has
  disappeared, escalate to the editor instead.
- Keep the diff small and reviewable: only the archive-related fields
  should change.
