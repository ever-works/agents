# Template: Clarifying questions

Use this verbatim when a request has load-bearing ambiguities the
repo and the spec cannot answer. One batched round, five questions
or fewer, every question with a default so planning can resume even
on a partial reply.

```
## Clarifying questions — <request title>

Before I can plan this honestly, <n> decisions change which files
are touched or what contract ships. Everything else I have assumed
with safe defaults (listed at the bottom).

1. **<question>?**
   - Why it is load-bearing: <what changes in the plan depending on
     the answer — files, data model, or contract>.
   - Options I can see: <a> / <b> / <c>.
   - Default if unanswered: <option> — <one-line reason>.

2. **<question>?**
   - Why it is load-bearing: <...>.
   - Options I can see: <a> / <b>.
   - Default if unanswered: <option> — <one-line reason>.

Assumed with safe defaults (veto any of these):
- <cosmetic ambiguity> — assumed <default>.
- <cosmetic ambiguity> — assumed <default>.

Reply with numbers and choices (e.g. "1a, 2b") or corrections in
prose. I will fold the answers in and deliver the full plan.
```

## Notes on filling it in

- Only load-bearing questions make the numbered list. If the answer
  does not change which files are touched, the data model, or a
  public contract, it is an assumption, not a question.
- Check the repo and the spec before asking. A question the code
  already answers ("what validation library do we use?") is a fail
  — read the code instead.
- Every question carries a default. A round without defaults blocks
  the user instead of unblocking the plan.
- Five questions maximum. More than five means the request needs a
  spec, and the honest output is saying exactly that.
- One round. Follow-ups ride along with the delivered plan, not in
  a second questionnaire.
