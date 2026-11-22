# Task — Run a batch of directory submissions

Work through one wave or batch of the launch plan. Finish the
automatable rows, pre-fill the assisted ones, and leave the tracker
exact.

## Inputs

- Launch plan and wave: {{launch_plan_path}} / {{wave}}
- Approved launch kit: {{launch_kit_path}}
- Submission tracker: {{tracker_path}}
- Browser session available and signed in (yes / no): {{browser_session}}
- Contact email for verification messages: {{contact_email}}

## Steps

For each platform in the batch, in plan order:

1. Read the tracker row. If the status is `submitted`, `pending` or
   `live`, skip to the next platform and note it.
2. Open the platform's `submit_url` (or find the submit page from the
   site header or footer). Read the field list and any rules. If the
   page asks for something the kit does not have, stop on this row and
   list the gap.
3. Map kit fields to the platform's fields with
   `kb/playbooks/directory-submission-run.md`. Add the UTM link for
   this platform id.
4. By automation level:
   - `auto`: publish or open the pull request; record the URL.
   - `assisted` with a signed-in session: fill the form, stop before
     the final submit, CAPTCHA, terms, payment or sign-in, and ask the
     person to finish. Without a session: write a hand-off card.
   - `human`: write a hand-off card with the drafted post.
5. Update the tracker: status, date, who submitted, listing or pull
   request URL, cost, next check date.
6. Pace the batch: no more than ten form submissions per hour, and
   vary the description length per the kit to avoid identical blocks.

## Output

A batch summary: done, waiting on a person (with card links), skipped
(with reason), blocked (with the missing input). Then the updated
tracker rows.

## Refuse to

- Re-submit a platform already in the tracker.
- Finish a CAPTCHA, payment, sign-in or terms step yourself.
