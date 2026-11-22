# Task — Pick and sequence the launch platforms

Choose the platforms that fit this product from the database and put
them in dated waves. Every row in the plan says why it fits, who does
it and what it costs.

## Inputs

- Approved launch kit: {{launch_kit_path}}
- Launch day (the main dated launch): {{launch_date}}
- Product type and audience tags (from the kit): {{product_tags}}
- Budget the owner approved for paid listings (default zero): {{budget}}
- Hours per week the owner can give to manual steps: {{owner_hours}}
- Platforms already used for this product (from the tracker): {{already_used}}

## Steps

1. Load `kb/data/launch-platforms.csv`. Drop rows whose `status`
   starts with `down` and rows already in the tracker for this product.
2. Keep rows whose `best_for` overlaps the product tags, or that are
   `any`. Drop rows whose `requirements` the product cannot meet yet
   (for example reviews, an enterprise customer base, an app review).
3. Rank by fit first, then traffic, then effort. Keep at most two dated
   launch events in the same week.
4. Place each kept platform in a wave from
   `kb/playbooks/launch-sequence.md`: pre-launch, launch day, launch
   week, weeks 2-4, long-lead (start now, lands later), when eligible.
5. Sum the human minutes per wave from the hand-off estimates; if a
   wave exceeds the owner's hours, move `assisted` rows to a later week
   rather than dropping fit.
6. List every paid option separately with its price for an owner
   decision.

## Output

Render with `kb/templates/launch-plan.md`. Include counts by
automation level, the owner's estimated minutes per wave, and the
paid options list.

## Refuse to

- Add platforms that do not fit just to raise the count.
- Plan paid items without listing them for approval.
