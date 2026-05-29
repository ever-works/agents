# Template: Lead card

The lead card is the single qualification artifact. It lives on the
CRM deal record and is the input to every downstream task (outreach,
review, handoff).

## Shape

```
Lead card
---------

Prospect: {{name}} ({{role}} at {{company}})
Source: {{source}}        Captured: {{captured_at}}
CRM record: {{crm_link}}

ICP score: {{score}} / 5

Matches:
- {{matching_signal_1}}
- {{matching_signal_2}}
- {{matching_signal_3}}

Gaps:
- {{missing_signal_1}}
- {{missing_signal_2}}

Trigger: {{one_line_trigger_or_"no visible trigger"}}

Recommendation: qualify | nurture | disqualify
Rationale: {{one_short_paragraph}}

Suggested next step: {{action}}        Due: {{due_date}}
Channel: {{email | linkedin | intro}}
Owner approval required before send: yes
```

## Notes

- ICP score is 0-5. Anything below 2 is a disqualify candidate.
- "Matches" and "Gaps" must reference ICP dimensions explicitly —
  not vibes. If the ICP card lists five dimensions, every dimension
  is either a match or a gap.
- "Trigger" is the specific reason this lead arrived now. If there
  is none, write "no visible trigger" — do not invent.
- Recommendation is one of three words. No "qualify but..." hedge.
- Next step is one action with a due date. "Follow up" is not an
  action; "send touch 1 referencing the funding-round trigger" is.

## When to update

The lead card is rewritten — not appended — whenever the score
changes, the trigger changes, or the recommendation changes. Old
versions stay in the CRM activity log.
