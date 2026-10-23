# Task: Specify a component with all states and a11y notes

Write a spec a developer can build without guessing.

## Do

1. Read the design system to reuse existing primitives and tokens.
2. Define the anatomy (parts) and the props/variants.
3. Specify every state: default, hover, focus, active, disabled,
   loading, empty, error.
4. Define responsive behaviour and, if supported, light + dark.
5. Add accessibility annotations: role/semantics, labels, focus order,
   keyboard interaction, contrast.
6. Run `kb/checklists/design-ready.md`.

## Deliver

A component spec: anatomy, a states table, responsive rules, token
references, and accessibility annotations, plus a handoff note (tokens,
spacing, motion, open questions). If the component needs a genuinely new
pattern, propose it with a rationale rather than silently adding it.
