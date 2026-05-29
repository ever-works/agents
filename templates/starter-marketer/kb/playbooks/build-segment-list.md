# Playbook — Build the tenant's segment list from raw research

Use this playbook the first time the Marketer agent is dropped
into a tenant that has interviews, support tickets, or call notes
but no named segment list.

## Trigger

- Owner asks "who is this product for?" and there is no segment
  list in the KB.
- Owner pastes raw research and asks for ICPs.
- The agent is asked to write a message ladder and discovers no
  segment is named.

## Steps

1. Inventory the evidence. List every interview, ticket bundle,
   survey, and call-note source available in the KB. If the
   evidence pool is fewer than five customer voices, stop and
   tell the owner the agent needs more before naming segments.
2. Extract the JTBD from each customer voice. Tag each quote with
   the outcome the customer was hiring the product to produce.
   Do not tag with demographic labels yet.
3. Cluster the JTBDs. Two customers in the same industry with
   different jobs are different segments. Two customers in
   different industries with the same job are one segment.
4. Name each cluster after the JTBD, not after the industry.
   "Founders prepping for fundraise" beats "B2B SaaS".
5. Test each candidate segment against the disqualifier filter:
   if you cannot name a buyer who LOOKS like this segment but is
   NOT, the segment is too broad.
6. Cap the list at five. If you have more than five, the
   clusters are not yet tight enough — merge or split.
7. Write each segment to `kb/segments/<slug>.md` with the JTBD,
   the source quotes, and the disqualifiers. Leave the watering
   holes and trigger event sections blank for the ICP card task
   to fill in.

## Outputs

- A segment list of three-to-five named segments, each with a
  JTBD and citation trail back to the customer voices.
- One file per segment in `kb/segments/`.

## Common failure modes

- Naming segments by industry. The Marketer must push back when
  this happens.
- Skipping the disqualifier check. A segment without a clear
  "not this person" is too broad to ship.
