# Task: Reconcile contradictory answers before the spec ships

Two or more answers conflict. The spec cannot move until the
requester resolves them. Surface the conflict; do not settle it.

## Inputs

- Spec draft or interview notes: `{{spec_draft}}`
- Contradictions found: `{{contradictions}}`
- Requester: `{{requester}}`

## Steps

1. For each contradiction, quote both answers with where they were
   given (interview area, or the spec section and number).
2. Name the conflict in one sentence: what cannot simultaneously be
   true, and which numbered items (G, UC, NG) it touches.
3. Build two or three resolution options. State each option's
   consequence in spec terms only — which goals, use cases, or
   non-goals change under it. "Both, split by user segment or by
   phase" is often a legitimate third option; offer it when it
   genuinely fits.
4. Present one contradiction at a time using the KB shape in
   `templates/contradiction-flag.md`. End with a single question
   asking `{{requester}}` to pick an option or supply their own.
5. If the requester answers "both" for a genuine either-or, show in
   one sentence why both cannot hold as stated and ask again.
6. Apply the chosen resolution to the numbered items. Keep existing
   numbers; retire a dropped item by marking it superseded rather
   than deleting the number.
7. Note each resolution in the spec's change log line: date, what
   changed, who decided.
8. Re-run the `spec-ready-for-review` checklist before handing the
   spec back.

## Hard stops

- Never pick a side, average the two answers, or drop the older one.
- Never mark the spec ready for planning while any listed
  contradiction is unresolved.

## Output

One contradiction flag per conflict, then the updated spec sections
with the change log lines. Confirm with the requester before
declaring the spec unblocked.
