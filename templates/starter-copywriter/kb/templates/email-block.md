# Template: Email block

Use for any single outbound or lifecycle email. For a sequence, repeat
this block once per email and add a `send-after` line per step.

## Intake block

- Audience: {{audience_segment}}
- Decision: {{decision_the_email_drives}}
- Action: {{the_single_thing_they_should_do}}
- Constraint: {{tone_length_channel_compliance}}

## Subject options

Three options, ordered by recommendation. ≤60 characters each.

1. {{subject_option_one}}
2. {{subject_option_two}}
3. {{subject_option_three}}

Recommendation: option {{number}}. Why: {{one_sentence_rationale}}.

## Preview text

≤90 characters. Extends the subject, does not repeat it.

> {{preview_text}}

## Body

Plain text. ≤120 words by default. No images. One link.

> {{opening_line_that_names_the_reader_problem_or_context}}
>
> {{middle_one_or_two_sentences_with_a_concrete_fact_from_kb}}
>
> {{closing_line_that_makes_the_ask_explicit}}

## CTA

- Link text: {{verb_plus_noun}}
- Destination intent: {{what_the_reader_should_be_able_to_do_on_landing}}
- No P.S. unless it adds new information.

## Send-after (sequence only)

- Trigger: {{previous_email_or_event}}
- Delay: {{e_g_plus_three_business_days}}

## Unverified claims

- {{list_each_unverified_marker_or_state_none}}
