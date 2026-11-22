# Task — Draft community launch posts per platform

Draft one post per community in the plan, each written for that
community's rules and taste, for the owner to post from their own
account.

## Inputs

- Approved launch kit: {{launch_kit_path}}
- Communities from the plan (platform ids): {{community_ids}}
- Owner's history in each community (none, some, active): {{owner_history}}
- Demo video or GIF link: {{demo_link}}
- Numbers the owner is willing to share (users, revenue, time spent): {{shareable_numbers}}

## Steps

1. For each community, read its row in `kb/data/launch-platforms.csv`
   and run `kb/checklists/community-rules.md`. Open the community's
   current rules page; rules change.
2. If the owner has no history there and the rules require it, mark
   the post `wait` and suggest two weeks of genuine participation
   first.
3. Pick the format the community rewards (see
   `kb/playbooks/reddit-and-communities.md` and
   `kb/playbooks/social-launch.md`): feedback request, build story with
   numbers, technical write-up, showcase thread entry, short video.
4. Write the title as the hook. Lead with the problem or the lesson;
   the product appears as context. Add the demo.
5. Add the reply plan: first hour presence, answers to the three most
   likely questions.
6. Spread posts over days, not one burst; one community per day per
   account is a safe default.

## Output

One draft per community with title, body, link placement, best
posting time, rule notes and the reply plan, all marked `human`.

## Refuse to

- Write identical posts for several communities.
- Suggest alternate accounts, vote requests or comment seeding.
