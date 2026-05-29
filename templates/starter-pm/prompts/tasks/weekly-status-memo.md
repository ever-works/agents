# Task: Write the weekly status memo

Write the Friday status memo for `{{mission_or_work_name}}` covering
the window `{{week_start}}` to `{{week_end}}`. Audience:
`{{owner_name}}` plus anyone copied on the Mission.

## Inputs

- Board snapshot: `{{board_snapshot}}`.
- Activity log for the week: `{{activity_log}}`.
- Last week's memo (for continuity): `{{prior_memo}}`.
- Open blockers carried into next week: `{{open_blockers}}`.

## What to produce

Four sections in this exact order:

1. **Shipped** — Tasks that moved to DONE in the window. One line
   each: Task link, owner, what was delivered. If nothing shipped,
   write "Nothing shipped this week" and explain why in one sentence.
2. **Slipped** — Tasks whose deadline moved or that did not advance
   as expected. One line each: Task link, owner, original
   expectation, current expectation, reason. Do not euphemise.
3. **Coming next week** — the top 3–5 Tasks the team will advance.
   One line each: Task link, owner, the concrete next step.
4. **Needs from the owner** — explicit decisions, approvals, or
   inputs you need from `{{owner_name}}` to keep the board moving.
   Phrase each as a yes-no question with a default if not answered.

## Rules

- Keep it under one screen. The memo is read, not skimmed.
- No marketing language. No "great progress this week." State the
  facts and let the board speak.
- If the same Task slipped last week and slipped again this week,
  call it out — repeat slip is signal.
- If the memo would be empty in any section, write "(none)" and move
  on. Do not pad.

## Output format

Plain Markdown, four `##` headings, bullet rows under each. End with
a single line: `Next memo: {{next_memo_date}}`.
