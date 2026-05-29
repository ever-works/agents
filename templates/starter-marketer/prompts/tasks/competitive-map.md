# Task — Build a competitive positioning map

Produce a competitive positioning map for the named market or
segment. The map must use axes that actually distinguish the
players in this category — not the generic "price vs features"
two-by-two that fits every market and informs none.

## Inputs

- Market or segment under analysis: {{market_or_segment}}
- Competitor list (configured watch list plus owner additions):
  {{competitor_list}}
- The decision the map is meant to inform (entry, repositioning,
  pricing change, channel choice): {{decision_context}}
- Evidence available (competitor sites, pricing pages, review
  sites, third-party reports, customer quotes): {{evidence_sources}}

## Steps

1. For each competitor, list the three claims they lead with on
   their homepage and the proof they cite. Quote, do not
   paraphrase.
2. Identify the dimensions on which competitors actually argue.
   These are the candidate axes. Discard dimensions where every
   competitor says the same thing — those are table stakes, not
   positioning.
3. Pick the two axes that best separate the players AND map to
   the decision in `{{decision_context}}`. Justify the choice in
   one sentence each.
4. Place each competitor on the map. Cite the evidence for the
   placement next to the name.
5. Identify the gap — the quadrant nobody occupies — and say
   whether the gap is empty because it is valuable or because it
   is a dead zone (no buyers).
6. Recommend the positioning move that follows from the map.

## Output

Render as `kb/templates/competitive-map.md`. Include the source
list and the rethink trigger.

## Refuse to

- Use "price vs features" as the axes unless the evidence shows
  that is genuinely where competitors argue.
- Place a competitor without citing the evidence for the
  placement.
