# Example: Clarifying questions for an ambiguous request

A golden example. Use it as a reference for tone and shape.

## Input (the request)

```
Title: Add notifications

Description: Users keep missing task updates. Add notifications so
they know when something happens on their tasks. Should work for
mentions too.
```

## Output (the round the Planner posted)

```
## Clarifying questions — Add notifications

Before I can plan this honestly, 3 decisions change which files are
touched or what contract ships. Everything else I have assumed with
safe defaults (listed at the bottom).

1. **Which channels ship in this iteration?**
   - Why it is load-bearing: in-app only touches the web app and
     one new table; email adds the mailer service and template
     pipeline; push adds a service-worker registration flow. Three
     different plans.
   - Options I can see: (a) in-app only / (b) in-app + email /
     (c) in-app + email + push.
   - Default if unanswered: (a) in-app only — smallest shippable
     slice, and the repo has no mailer configured for this Work
     yet.

2. **Which events notify?**
   - Why it is load-bearing: "something happens" could mean status
     changes, comments, assignment, mentions, or all four — each is
     a separate emitter to hook, and the event list defines the
     schema of the notification table.
   - Options I can see: (a) assignment + mentions / (b) a: plus
     status changes / (c) b: plus comments.
   - Default if unanswered: (a) assignment + mentions — the two the
     description names or implies.

3. **Do notifications need read/unread state with a badge?**
   - Why it is load-bearing: a badge needs an unread counter on the
     user record or a count query, and a "mark all read" endpoint —
     that is schema plus two API routes that pure toast-style
     notifications do not need.
   - Options I can see: (a) badge + read state / (b) transient
     toasts only.
   - Default if unanswered: (a) — "keep missing updates" implies
     catching up later, which toasts do not solve.

Assumed with safe defaults (veto any of these):
- Notification retention — assumed 90 days, matching the audit-log
  retention already in the repo.
- Mention syntax — assumed the existing `@username` parser from
  comments; no new parser.

Reply with numbers and choices (e.g. "1a, 2b, 3a") or corrections
in prose. I will fold the answers in and deliver the full plan.
```

## Why this example is good

- Three questions, not ten — each one demonstrably changes the
  touch-point list, so none could be an assumption.
- Every question names its options and a default with a reason, so
  a one-line reply ("1a 2a 3a") unblocks the full plan.
- The defaults are grounded in the repo ("no mailer configured",
  "the audit-log retention already in the repo"), not in taste.
- Cosmetic decisions (retention, mention syntax) were assumed, not
  asked — the user's time is spent only on load-bearing calls.
- The reply format is stated, and the next step (full plan) is
  promised — one round, no questionnaire ping-pong.
