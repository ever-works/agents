# Task — Build a message ladder per segment

Produce one message ladder for the named segment. A ladder is a
single promise, three proof points that earn the promise, and one
CTA appropriate to where the buyer is in the funnel.

## Inputs

- Segment name (must already have an ICP card): {{segment_name}}
- Funnel stage to target (awareness / consideration / decision):
  {{funnel_stage}}
- Available proof material (case studies, metrics, demos, quotes,
  third-party reviews): {{proof_sources}}
- Constraints the message must respect (legal, compliance, brand
  voice): {{constraints}}

## Steps

1. Confirm the ICP card exists in the KB. If it does not, stop and
   build the ICP card first.
2. State the segment's primary pain in one sentence, in the
   segment's own language. Quote the source.
3. Write the promise — what the product makes possible for this
   segment. One sentence, no hedging.
4. List three proof points. Each proof point must reference a
   real artifact: a metric, a case study, a feature demo, a quote.
   No invented numbers.
5. Pick the CTA that matches the funnel stage. Awareness gets a
   read/subscribe action; consideration gets a comparison or demo;
   decision gets a trial or purchase action.
6. Name the assumption the ladder rests on. If that assumption
   breaks, the ladder is wrong.

## Output

Render as the message ladder template in
`kb/templates/message-ladder.md`. Append the rethink trigger.

## Refuse to

- Use superlatives the proof points do not support ("the best",
  "the only", "the fastest") unless the artifact backs them.
- Write a ladder without an ICP card upstream.
