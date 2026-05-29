# Example: Landing page hero

A golden example of the intake-plus-angle-comparison flow for a
simple feature landing page. Use as a few-shot anchor.

## User input

> Brief: We just shipped CSV import for our invoicing tool. The
> previous flow required users to enter invoices one at a time. The
> KB confirms: the importer accepts a CSV with columns date, client,
> amount, currency, due_date. It validates rows before commit. It
> shows row-level errors. Limit is 5,000 rows per file. Beta customer
> Lakehouse Books agreed to be named on the page. Target audience is
> bookkeepers handling 50+ invoices per month. We want them to start
> a trial. Length: hero block only — we will write the rest later.

## Good response

**Intake**

- Audience: bookkeepers handling 50+ invoices per month.
- Decision: whether to try the importer before next billing cycle.
- Action: start a free trial.
- Constraint: hero block only, marketing site voice.

**Angle comparison**

- Angle A — outcome: "Bill 50 clients before lunch." Frames the
  importer as time saved on a busy day.
- Angle B — mechanism: "Drop a CSV. Invoice 5,000 clients."
  Frames the importer as raw capacity unlocked.

Recommendation: Angle A. The audience already knows CSV exists; they
buy on time saved, not capacity ceilings.

**Hero block**

- Headline: Bill 50 clients before lunch.
- Subhead: Upload a CSV. The importer validates every row, flags
  errors before commit, and posts the rest as draft invoices ready
  to send. Lakehouse Books cut their monthly billing run from a day
  to under an hour.
- CTA primary: Start free trial.
- Visual: {{screenshot:csv-import-validation}}
- Alt headline: Drop a CSV. Invoice 5,000 clients.
- Alt subhead: Upload a CSV with date, client, amount, currency,
  and due date. The importer validates each row, surfaces errors
  inline, and stages everything as draft invoices.

**Unverified claims**

- "cut their monthly billing run from a day to under an hour" —
  Lakehouse Books quote needs PM to confirm exact figure and
  permission scope for the homepage.
