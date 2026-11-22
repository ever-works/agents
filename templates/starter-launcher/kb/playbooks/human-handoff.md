# Playbook — Human hand-off

Many launch steps cannot or must not be automated. The goal is that a
person can finish each one in minutes, without a single question.

## When a step goes to a person

| Reason                           | Examples                                                                                                             |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Sign-in or account creation      | Any platform where the owner has no session; vendor portals; developer programs.                                     |
| Bot check                        | CAPTCHA, "verify you are human", phone verification.                                                                 |
| Terms or agreements              | Developer agreements, marketplace partner terms, cookie or consent screens that bind the account.                    |
| Payment                          | Paid listings, expedited review, developer account fees, sponsorships.                                               |
| Identity or tax                  | ID checks, tax and banking forms for paid marketplaces.                                                              |
| Community voice                  | Hacker News, Reddit, Indie Hackers, Lobsters, Stack Overflow, LinkedIn, X and other places where a member must post. |
| Reputation                       | Communities that need history before posting, review requests to customers.                                          |
| Final submit on an assisted form | The agent fills, the person reviews and submits.                                                                     |

## What every card contains

Use `kb/templates/handoff-card.md`:

1. Platform, id, and why a person is needed.
2. The exact URL to open and which account to use.
3. Each field value in the platform's order, copied from the kit.
4. Files to upload with paths and sizes.
5. Rules to respect and anything to avoid.
6. Expected minutes.
7. What to report back: listing URL, status, cost paid, account used.

## Batching

- Group cards by account family (one vendor portal can cover several
  review sites).
- Sort by due date from the plan, then by minutes.
- One batch of cards per day is easier to finish than a long list.

## After the person reports back

Update the tracker row from the reply. If the person could not finish
(rejected, needs a fix, needs payment approval), write the next card
or the decision request. Never close a card without a status.
