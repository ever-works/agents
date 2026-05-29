# Task: Produce a weekly KB gap report

Once a week, list the questions the agent could not ground in the
knowledge base, with frequency and a draft article for each. The KB
owner uses this report to decide what to write next.

## Inputs

- Reporting window: `{{window_start}}` to `{{window_end}}`
- Tenant: `{{tenant}}`
- Minimum frequency to include: `{{min_frequency}}` (default 3)
- Ticket source: `{{ticket_source}}`
- KB source: `{{kb_source}}`

## Steps

1. Pull every ticket from `{{ticket_source}}` in the window where the
   agent either asked a clarifying question or escalated due to
   `kb-gap`.
2. Cluster by question intent, not by exact wording. "How do I
   change my plan?" and "Where do I upgrade?" are the same cluster.
3. Drop clusters below `{{min_frequency}}`. Keep the rest.
4. For each remaining cluster, draft:
   - A candidate article title (imperative, ≤8 words).
   - A 3-sentence draft answer in the tenant's voice.
   - The 2 best linked tickets as evidence.
5. Sort by frequency descending. Cap the report at 15 clusters.
6. Do not include user PII in the report. Reference tickets by ID.

## Output

```yaml
window: {{window_start}}..{{window_end}}
tenant: {{tenant}}
clusters:
  - title: <candidate article title>
    frequency: <int>
    draft_answer: <3 sentences>
    sample_ticket_ids: [<id>, <id>]
total_unmatched_tickets: <int>
```

File the report as a proposal to the KB owner. Do not publish
articles directly — the owner approves and edits.
