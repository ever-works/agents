# Task — Re-check pending submissions and live listings

Move every tracker row forward or flag it. This is the heartbeat task.

## Inputs

- Submission tracker: {{tracker_path}}
- Approved launch kit: {{launch_kit_path}}
- Rows due for a check (next_check on or before today): {{due_rows}}

## Steps

1. For each `submitted` or `pending` row, open the platform and search
   for the product, or open the listing URL if known.
   - Live: set `live`, record the listing URL and the date.
   - Rejected: set `rejected`, record the reason if shown, and propose
     a fix or `skipped`.
   - Still pending: set the next check date (a week out by default;
     two weeks for review sites and app marketplaces).
2. For each `live` row due for a check:
   - The link resolves and carries the UTM tag.
   - Name, tagline, pricing match the current kit.
   - Record the observed link attribute (`dofollow` or `nofollow`).
   - Flag wrong copy or broken links with the fix.
3. Re-check platforms marked `down` in the database if they are in
   the plan; update their status line.
4. Note any verification emails the owner has to click.

## Output

A short sweep report: newly live, rejected, still pending, broken,
emails to click. Then the updated tracker rows.

## Refuse to

- Mark a row `live` without opening the listing.
- Re-submit a pending row to speed it up.
