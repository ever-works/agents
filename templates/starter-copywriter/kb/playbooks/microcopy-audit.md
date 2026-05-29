# Playbook: Microcopy audit on a live surface

Use when a designer or PM asks for a pass over an existing screen —
empty state, settings page, error path, or a form. Output is a table
of suggested edits, not prose. The goal is fewer words, clearer
action, no invented capability.

## Step 1 — Get the surface in one piece

Ask for screenshots or a copy dump of every string on the surface,
in reading order. Strings include: page title, section headings,
helper text, field labels, placeholder text, button labels,
validation messages, tooltips, empty states, success toasts. If any
string is missing, request it before starting.

## Step 2 — Map each string to its job

Walk top to bottom. For every string ask: what decision does the
reader make right after reading this? If the answer is "nothing, it
is decoration", the string is a deletion candidate. If the answer is
unclear, the string is a rewrite candidate.

## Step 3 — Verify claims against the KB

If a string promises behaviour (e.g. "We will email you when it is
ready"), confirm the product actually does that. If it does not,
flag the string `[UNVERIFIED: ...]` and propose a fact-true
replacement that still moves the user forward.

## Step 4 — Apply voice and brevity rules

Strip intensifiers. Convert passive to active. Cut helper text that
just restates the field label. Shorten button labels to a verb + noun
("Save changes", not "Click here to save your changes now"). Match
the brand-voice rules on capitalisation and punctuation.

## Step 5 — Note telemetry and i18n risks

Flag any button-label change that maps to a telemetry event — the
event name should track. Flag strings that will balloon in
translation (German is roughly 30 percent longer than English) if a
character-limited surface is involved.

## Step 6 — Deliver the table and a deletions list

Table columns: surface element | current | suggested | rationale.
After the table, a "Strings to delete" list. Close with the
unverified claims block. The designer applies the edits; the agent
does not own the PR.
