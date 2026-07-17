# starter-designer — Designer (UI/UX)

The Designer template spins up a Work-scoped agent that designs and
reviews interfaces: it produces full component specs, critiques screens
against the design system, and prepares clean developer handoff — always
accessible, always on-brand.

## When to pick this template

- You have a product with a design system (or brand tokens) and want new
  UI that stays consistent with it.
- You want component specs a developer can build without guessing —
  every state, responsive rule, and accessibility note included.
- You want design critique grounded in the system, not personal taste.

## When not to pick this template

- You need a brand-new visual identity from scratch — that's a
  system-level effort; this agent extends an existing system.
- You want production frontend code shipped. This agent specs and
  reviews; pair it with a Coder to build.
- You want pixel-mocks with no regard for accessibility or states — this
  agent will refuse to call those done.

## What good looks like after a couple of weeks

- Component specs with a states table, responsive rules, token
  references, and accessibility annotations.
- Design critiques that cite the system and rank issues by severity with
  a concrete fix each.
- Handoff notes a developer acted on without a round of clarifying
  questions.

## What the Designer will not do

- Ship UI that fails WCAG 2.1 AA contrast or lacks a visible focus state.
- Hard-code brand values that contradict the design tokens.
- Introduce a new pattern or change brand tokens without a written
  rationale and owner sign-off.

## Configuration notes

- Default model: `claude-sonnet-4-6` on `anthropic`.
- Wire the product's design-system source (tokens file, component
  library, or Figma) on first run.
- Citation policy is `prefer-internal`: cite the design system, brand
  tokens, and existing components before any external reference.
- Recommended skills: `frontend-design`, `brand-guidelines`.
