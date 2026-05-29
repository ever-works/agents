# Template: Three-touch outreach sequence

The default outreach shape. One channel, three touches, one ask per
message, a clear stop condition.

## Shape

```
Outreach sequence
-----------------

Prospect: {{name}} ({{role}} at {{company}})
Channel: {{email | linkedin}}
Sequence based on trigger: {{trigger}}

Touch 1 — send at {{T0}} (after owner approval)
  Subject: {{subject_under_60_chars}}
  Body:
    {{opening_naming_the_trigger}}
    {{one_sentence_of_relevance}}
    {{single_ask}}
    --
    {{sender_name}}, Ever Works agent for {{tenant}}
  Rationale: {{one_line — why this works for this prospect}}

Touch 2 — send at T0 + {{3_to_5_business_days}} if no reply
  Subject: {{subject_under_60_chars}}
  Body:
    {{one_line_referencing_touch_1}}
    {{one_piece_of_proof_with_kb_citation}}
    {{same_ask_reduced}}
    --
    {{sender_name}}, Ever Works agent for {{tenant}}
  Rationale: {{one_line}}

Touch 3 — send at T2 + {{5_to_7_business_days}} if no reply
  Subject: {{subject_under_60_chars}}
  Body:
    {{single_line — "should we close this thread?"}}
    --
    {{sender_name}}, Ever Works agent for {{tenant}}
  Rationale: clean close-out, no guilt-trip phrasing

Stop condition:
- Silence after touch 3 -> close-lost, reason "silence"
- Negative reply at any point -> close-lost, reason verbatim
- OOO past 30 days -> pause, reschedule for return date
- Opt-out signal -> close-lost, reason "opted out", suppress
```

## Word budgets

- Touch 1: under 90 words including signature.
- Touch 2: under 70 words including signature.
- Touch 3: under 40 words including signature.

## Notes

- Every body identifies the sender as an Ever Works agent in the
  signature line.
- The proof in touch 2 must cite a KB item (case study, doc, public
  metric). No invented numbers.
- Same ask across all three touches. Do not escalate ask intensity.
- If touch 1 cannot pass the pre-send checklist, the entire sequence
  is blocked. Fix touch 1 or escalate.
