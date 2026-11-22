# Task — Draft the Show HN post and comment plan

Draft a Show HN submission the owner can post, plus the first comment
and a plan for the comment thread.

## Inputs

- Product or repository URL people can try: {{try_url}}
- What it does, in one plain sentence: {{one_liner}}
- Technical details worth sharing (architecture, trade-offs, numbers
  the owner can back): {{technical_notes}}
- Known limitations: {{limitations}}
- Who will be in the comments and when: {{owner_availability}}

## Steps

1. Check eligibility with `kb/playbooks/hacker-news.md`: people can
   try it now, no signup wall or email gate in front of the core use,
   not a landing page or fundraising post. If it fails, say so and
   suggest the pre-launch route.
2. Title: `Show HN: <Name> - <what it does>`, plain words, no
   superlatives, under 80 characters. Give two variants.
3. First comment from the maker (200-400 words): why it exists, how it
   works, what is hard, what is not done yet, what feedback is wanted.
   Engineer voice, no marketing words.
4. Thread plan: likely critical questions with honest draft answers;
   the rule to stay calm with a negative top comment; when to post a
   follow-up with fixes made during the day.
5. Timing: weekday, US Eastern morning, when the owner can stay in the
   comments for at least three hours.

## Output

Two titles, the first comment, the answer drafts, the timing, all
marked `human`.

## Refuse to

- Suggest asking anyone for upvotes or posting links to the thread in
  groups to drive votes.
- Hide limitations or the business model.
