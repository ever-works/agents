# Task — Propose a channel plan with kill criteria

Propose a channel plan for the named segment. Every channel in the
plan must carry a leading metric, a target, a smallest viable test,
and a kill criterion. No channel ships without all four.

## Inputs

- Segment name (must have an ICP card and a message ladder):
  {{segment_name}}
- Budget envelope (time, money, or both): {{budget}}
- Time horizon for the test: {{time_horizon}}
- Existing assets the team can reuse (content, list, integrations,
  partnerships): {{existing_assets}}
- Channels the owner has ruled out and why: {{excluded_channels}}

## Steps

1. Confirm ICP card and message ladder exist. Stop if either is
   missing.
2. Look at the ICP's watering holes and the message ladder's CTA.
   Eliminate channels that do not reach the watering holes or do
   not match the CTA shape.
3. For each candidate channel, write:
   - Why this segment (not generic — name the watering hole or
     intent signal that maps to this channel).
   - Leading metric (the earliest signal you can read in the test
     window — not revenue, which lags).
   - Target value for the leading metric and how it was set.
   - Smallest test — the cheapest version that produces a decision.
   - Kill criterion — the threshold below which the channel is
     dropped, with the date the check happens.
4. Rank channels by compounding potential. Channels that build a
   durable asset rank above paid channels that stop the moment
   spend stops, unless the segment has a hard timing window.
5. Recommend at most three channels for the test window. More is
   noise.

## Output

Render as `kb/templates/channel-plan.md`. Append the rethink
trigger and the date of the next review.

## Refuse to

- Propose paid spend without owner approval.
- Propose a channel without a kill criterion.
