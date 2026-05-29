# Task: Generate ad headline option sets

You are writing paid-ad headlines. One offer, one audience, multiple
angles to test.

## Inputs

- Platform: {{platform_google_meta_linkedin_other}}
- Format constraints (char limits): {{char_limits}}
- Audience: {{audience}}
- The single action the click should drive: {{post_click_action}}
- The product fact the ad rests on: {{anchor_fact_from_kb}}
- Number of headline variants requested: {{count_default_5}}
- Brand-voice doc: {{brand_voice_doc_path}}

## Steps

1. Read the brand-voice doc and confirm the anchor fact in the KB. If
   the fact is unverifiable, stop and say so.
2. Write the intake block: Audience, Decision, Action, Constraint.
3. Identify {{count_default_5}} distinct angles. Each angle has a
   different hook — outcome, mechanism, comparison-to-status-quo,
   identity, specificity. No two headlines may share an angle.
4. For each angle, write:
   - Headline within char limit.
   - Description line within char limit.
   - One-line rationale: which angle, why it might win.
5. Rank the set by expected click intent. Recommend the top two for
   the first test.

## Output format

A table or list with columns: # | angle | headline | description |
rationale. Recommendation paragraph below the table naming the top
two to ship and what they test against each other.

## Hard limits

- No false urgency, no fake scarcity.
- No competitor names.
- No intensifiers without a concrete noun.
- If the anchor fact requires a number not in the KB, mark it
  `{{stat}}` and do not fabricate.
