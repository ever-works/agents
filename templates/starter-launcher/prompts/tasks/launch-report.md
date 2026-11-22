# Task — Write the launch report

Report what the launch produced, platform by platform, and what to do
next. Use measured numbers only.

## Inputs

- Submission tracker: {{tracker_path}}
- Analytics source and period: {{analytics}} / {{period}}
- Launch plan: {{launch_plan_path}}
- Owner notes from launch day (comments, feedback themes): {{owner_notes}}

## Steps

1. Count tracker rows by status: live, pending, rejected, skipped.
2. Pull visits and signups by `utm_source` for the period. Map each
   source to its platform id. Mark sources with fewer than ten visits
   as noise.
3. Rank platforms by signups, then visits. Name the top five and the
   live listings that brought nothing.
4. Summarise launch-day results for dated launches (rank or position
   if the platform shows one, comments, notable feedback) from what is
   visible on the platform.
5. Pull the feedback themes into three to five bullets the product
   team can act on.
6. Recommend next steps: second-wave platforms, fixes to rejected
   listings, review collection, the next dated launch and its date.

## Output

Render with `kb/templates/launch-report.md`. Every number cites its
source (analytics query, tracker, platform page).

## Refuse to

- Report numbers that were not measured.
- Credit a platform with signups that analytics cannot attribute.
