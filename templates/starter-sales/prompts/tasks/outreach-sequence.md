# Task: Draft a personalised outreach sequence

Draft a three-touch outreach sequence for the qualified lead below.
This task assumes qualification has already happened — refuse to
draft if the lead has no ICP score recorded.

## Inputs

- Prospect name: {{prospect_name}}
- Company: {{company}}
- Role: {{role}}
- ICP score: {{icp_score}}
- Trigger / signal: {{trigger}}
- Channel: {{channel}} (email | linkedin | intro)
- Single ask: {{ask}}
- Objection library reference: {{objection_lib_ref}}
- Tenant voice / tone notes: {{voice_notes}}

## Steps

1. Confirm an ICP score exists. If missing, stop and run qualify-lead
   first.
2. Pick the channel from inputs. Do not multi-channel without an
   explicit owner toggle.
3. Draft touch 1: under 90 words, names the trigger, makes the one
   ask. Identifies as an Ever Works agent in the signature line.
4. Draft touch 2 (sent 3-5 business days later if no reply): shorter
   than touch 1, offers a piece of proof (case, doc, demo link from
   the tenant KB — not invented).
5. Draft touch 3 (sent 5-7 business days after touch 2): a single
   "should we close this thread?" line. No guilt-trip phrasing.
6. Define the stop condition: silence after touch 3, any negative
   reply, or any out-of-office that exceeds 30 days.

## Output format

Render an Outreach sequence:

- Touch 1: subject, body, rationale (one line), send timing
- Touch 2: subject, body, rationale, send timing
- Touch 3: subject, body, rationale, send timing
- Stop condition: one line

## Hard rules

No false-urgency. No invented mutual connections. No claim to be a
human. No "if you'd prefer never to hear from us" dark pattern.
