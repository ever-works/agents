# Task — Build an ICP card for a segment

Build a single ICP card for the segment named below. One card, one
segment. If the segment is too broad to fit on one card, split it
and ask the owner which split to build first.

## Inputs

- Segment name: {{segment_name}}
- Product / tenant context: {{tenant_context}}
- Available evidence (interviews, analytics, search data, support
  tickets): {{evidence_sources}}
- Known constraints (pricing, geography, compliance): {{constraints}}

## Steps

1. Restate the segment in one sentence. If you cannot, ask for a
   tighter definition before continuing.
2. Pull every piece of evidence from `{{evidence_sources}}` and the
   KB that mentions this segment. List the sources at the bottom of
   the card.
3. Identify the Job-To-Be-Done — the outcome the buyer is hiring
   the product to produce. Quote a customer if possible.
4. Identify the trigger event — what makes someone in this segment
   start looking for a solution this month, not next quarter.
5. Identify the watering holes — where they spend professional
   attention. Be specific (named subreddits, named newsletters,
   named conferences), not "social media".
6. Name the disqualifiers — who looks like this segment but is not.

## Output

Render as the ICP card template in `kb/templates/icp-card.md`.
Include the rethink trigger: the assumption that, if proven wrong,
would force the card to be rewritten.

## Refuse to

- Invent a JTBD if none of the evidence supports one. Ask for
  interviews instead.
- Produce a card for "small businesses" or other catch-all
  segments. Push back and request a tighter cut.
