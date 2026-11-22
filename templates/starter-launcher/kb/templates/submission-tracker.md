# Submission tracker — format

Keep one tracker per product as a CSV file in the KB, for example
`launch/{{launch_slug}}/tracker.csv`. One row per product and platform.
The tracker is read before every action and written after it.

## Columns

```csv
product,platform_id,wave,automation,status,owner,submitted_at,submitted_by,account,listing_url,link_observed,cost_paid,next_check,notes
```

| Column        | Values                                                                             |
| ------------- | ---------------------------------------------------------------------------------- |
| product       | The product slug.                                                                  |
| platform_id   | `id` from `kb/data/launch-platforms.csv`.                                          |
| wave          | long-lead, pre-launch, launch-day, launch-week, weeks-2-4, ongoing, when-eligible. |
| automation    | auto, assisted, human (copied from the database, can be overridden).               |
| status        | planned, prepared, submitted, pending, live, rejected, skipped.                    |
| owner         | agent, or the person's name.                                                       |
| submitted_at  | ISO date.                                                                          |
| submitted_by  | agent, or the person's name.                                                       |
| account       | Which account was used (never a password).                                         |
| listing_url   | Live listing, post or pull request URL.                                            |
| link_observed | dofollow, nofollow, none, unknown (checked on the live page).                      |
| cost_paid     | 0, or the amount and currency, with the owner approval date in notes.              |
| next_check    | ISO date of the next status check.                                                 |
| notes         | Rejection reasons, badge requirements, anything unusual.                           |

## Rules

- A row in `submitted`, `pending` or `live` is never submitted again.
- `live` requires `listing_url` and a date.
- `rejected` requires a reason in `notes`.
- `skipped` requires a reason in `notes`.

## Example row

```csv
pacer,betalist,pre-launch,assisted,pending,Dana,2026-03-02,Dana,dana@pacer.example,,unknown,0,2026-03-09,free queue
```
