# Task: Draft a cold email sequence

You are drafting an outbound email sequence. Each email has one job.
Each step in the sequence has a distinct reason to exist.

## Inputs

- Audience segment: {{audience_segment}}
- What they currently do about the problem: {{current_workaround}}
- The product capability that helps: {{product_capability}}
- Desired action from the recipient: {{desired_action}}
- Sequence length: {{number_of_emails_default_3}}
- Sender persona (name, role): {{sender_persona}}
- Brand-voice doc: {{brand_voice_doc_path}}
- Product KB section: {{product_kb_section}}

## Steps

1. Read brand-voice doc and the KB section. Note real facts you can
   use; flag claims you cannot verify.
2. Write the intake block: Audience, Decision, Action, Constraint.
3. For each email in the sequence deliver:
   - Subject line: 3 options, ordered by recommendation.
   - Preview text: ≤90 characters.
   - Body: ≤120 words, plain text, no images.
   - Single CTA: link text + the link's destination intent.
   - Send-after delay from previous email (e.g. "+3 business days").
4. Each follow-up must add new information or a new angle — never
   "just bumping this".

## Output format

A numbered list of emails. For each: subject options, preview, body,
CTA, send-after.

## Hard limits

- No false urgency. No "limited time" unless the KB confirms a real
  deadline.
- No invented customer names or metrics. Use `{{stat}}` placeholders
  where the KB is silent.
- No competitor name-drops.
- No links in the P.S. line if the email already has a primary CTA.
