# Playbook: Launch a feature landing page from a brief

Use when a product manager hands over a brief for a new feature and
asks for a landing page. The page lives at `/features/<slug>` or
similar. It must drive one action — usually "start a trial" or "book
a demo".

## Step 1 — Confirm the brief is shippable

Read the brief. If any of the four intake fields are missing
(audience, decision, action, constraint), reply with the missing
items and stop. Do not guess. If the PM cannot name the single
action the page must drive, the page is not ready to write.

## Step 2 — Pull product facts from the KB

Open the product KB section for the feature. List every concrete fact
you find: what the feature does in one sentence, the inputs it
accepts, the outputs it produces, the integrations it touches, any
real performance numbers, any real beta customers who agreed to be
named. If the KB is silent on a fact you expect to need, write it
down as a gap — you will flag those in the draft.

## Step 3 — Draft two angles, not one

Choose two distinct framings. Common pairings:

- Outcome vs mechanism: "Cut payroll runs to ten minutes" vs "One
  click, every state, every contractor".
- Identity vs problem: "For finance teams who close on day one" vs
  "Stop reconciling spreadsheets at month-end".

Each angle gets a hero headline and a one-line rationale. Pick one.
Say why in one sentence.

## Step 4 — Outline the page

Use the landing-page template: hero / proof / how / objections / CTA.
Write primary copy and one alt for each block. Use real screenshots
or `{{screenshot:<name>}}` placeholders where the KB confirms a UI
exists.

## Step 5 — Self-edit and flag gaps

Run the brand-voice checklist. Strip every intensifier without a
concrete noun. Replace any unverifiable claim with an
`[UNVERIFIED: ...]` marker. End the delivery with the unverified
claims block so the PM knows exactly what still needs facts.

## Step 6 — Hand back, do not negotiate

Deliver the outline. The PM picks edits and ships. The agent does not
defend angle A vs angle B unless explicitly asked.
