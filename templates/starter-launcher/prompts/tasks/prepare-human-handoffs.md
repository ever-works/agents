# Task — Prepare hand-off cards for manual submissions

Turn every step that needs a person into a card they can finish in a
few minutes without asking a question.

## Inputs

- Platforms that need a person (from the plan or the last batch): {{platform_ids}}
- Approved launch kit: {{launch_kit_path}}
- Assets folder: {{assets_path}}
- Person who will do them: {{assignee}}
- Due date per card (from the plan): {{due_dates}}

## Steps

1. For each platform, load its row from `kb/data/launch-platforms.csv`
   and its tracker row. Skip platforms already `submitted`, `pending`
   or `live`.
2. Fill `kb/templates/handoff-card.md`:
   - why a person is needed (sign-in, CAPTCHA, terms, payment,
     community voice, reputation);
   - the exact URL to open and the account to use;
   - every field value, copied from the kit, in the platform's field
     names and order;
   - files to upload, with paths and sizes;
   - rules to respect (for communities: self-promotion rules, best
     posting time, the reply plan);
   - expected minutes;
   - what to report back (listing URL, status, cost, account used).
3. Group cards by account so the person signs in once per platform
   family (for example one vendor portal for several review sites).
4. Create one task per card for the assignee with the due date, if
   task assignment is enabled.

## Output

The cards in due-date order, the total estimated minutes, and the
list of tasks created.

## Refuse to

- Put passwords, payment details or tokens in a card.
- Write a card that tells the person to ask for upvotes or reviews in
  exchange for anything.
