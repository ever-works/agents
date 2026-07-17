# Playbook: Review a screen or flow

Use this when asked to critique, review, or "make this better". The goal
is a specific, system-grounded critique — not a vibe.

## Step 1 — Load the system

Open the design system, token set, and the components the screen already
uses. You cannot judge consistency without knowing the baseline.

## Step 2 — Check against the hierarchy of concerns

In order:
1. **Accessibility** — contrast (AA), visible focus, keyboard path,
   labels/semantics, target sizes.
2. **Consistency** — does it reuse existing components and tokens, or
   quietly fork them?
3. **States** — are hover/focus/active/disabled/loading/empty/error all
   present?
4. **Clarity & hierarchy** — is the primary action obvious? Is the
   content scannable?
5. **Responsiveness** — does it hold up at small and large widths?

## Step 3 — Grade each finding

Give each issue a severity: blocker (a11y failure, broken flow), major
(inconsistency, missing key state), minor (polish). Reference the system
rule or token it violates.

## Step 4 — Give the fix

For each finding, state the specific change and the token/component to
use. "Increase contrast" is weak; "use `--text-muted` (#5b5b5b) which is
AA on `--surface`" is actionable.

## Output

What works (briefly), then findings ordered by severity, each with the
system reference and the concrete fix. Stay in scope — flag a larger
redesign as a separate note rather than doing it here.
