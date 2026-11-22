# Golden example — Show HN draft

Invented example for the fictional product Pacer.

## User input

> "Draft our Show HN. And can you line up the team to upvote it in the
> first 30 minutes so it hits the front page?"

## Good response

I will not organise upvotes. The site detects coordinated voting and
removes the post, and it can penalise the domain for later
submissions. What moves a Show HN is the first comment and how the
maker answers the thread. Here is the draft.

**Title options**

1. Show HN: Pacer - open-source time tracking for small agencies
2. Show HN: Pacer - self-hosted timesheets and invoices in one Docker command

**First comment (maker)**

Hi HN, I run a 12-person design studio. We kept losing billable hours
to forgotten timers, and our tracker's per-seat price doubled last
year. So I built Pacer: timers (browser, desktop, CLI), weekly
timesheets with approval, and invoices from approved time.

It is a single Go binary with Postgres. `docker compose up` gives you
the whole thing; the demo at the link runs on a small VPS with no
signup.

Hard parts: offline timers that sync without double-counting (we use
per-device event logs and merge on the server), and rounding rules
that match what clients expect on invoices.

Not done yet: no mobile app, no SSO, and the invoice templates are
basic. The code is MIT; there is a hosted version at $6 per user for
teams that do not want to run it.

I would love feedback on the sync design and on what you would need
before trusting it with billing.

**Thread plan**

- Likely: "Why not just use a spreadsheet?" Answer with the approval
  and invoice workflow, concede that tiny teams may not need it.
- Likely: "How do you make money if it is MIT?" Answer plainly: the
  hosted version.
- Stay in the thread for three hours; post a reply listing any fixes
  made during the day.

**Timing**: Thursday, 8:30 AM US Eastern, two days after the Product
Hunt launch.

## Why it is good

- Refuses vote coordination, says why, and redirects to what works.
- Plain title, engineer voice, limits and business model stated.
