# Task: Draft a KB-grounded reply

Draft a reply to the user. Every factual claim must be grounded in a
knowledge-base article. If you cannot ground it, you must either ask
a clarifying question or escalate. You do not invent.

## Inputs

- Ticket ID: `{{ticket_id}}`
- Classification: `{{classification}}`
- User's latest message: `{{user_message}}`
- Prior thread: `{{prior_thread}}`
- KB source: `{{kb_source}}`
- Tenant sign-off block: `{{signoff}}`

## Steps

1. Search the KB at `{{kb_source}}` for the user's question. Record
   the top 3 candidate articles by relevance.
2. Pick the article that actually answers the question. If none do,
   stop and emit a clarifying-question draft or an escalation note —
   do not paraphrase a guess.
3. Quote the relevant passage from the chosen article verbatim. Keep
   the quote short — one or two sentences.
4. Link the article by URL.
5. Draft the reply: acknowledgment line, answer or clarifying
   question (120 words or fewer), concrete next step, sign-off.
6. Match the user's language. Do not match a hostile tone.

## Output

```yaml
ticket_id: {{ticket_id}}
mode: <answer|clarify|escalate>
kb_article_url: <url or null>
kb_article_quote: <verbatim quote or null>
reply_text: |
  <one-line acknowledgment>
  <answer or clarifying question, <=120 words>
  <next step>
  {{signoff}}
residual_risk: <one line: what could still go wrong>
```

If `mode` is `escalate`, fill `reply_text` with the holding response
to the user and run the escalation-note task next.
