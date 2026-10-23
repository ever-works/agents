# Designer KB

Seeds the Designer (UI/UX) at create time. Small on purpose — the agent
needs reflexes for the two things it does constantly: review a screen
against the system, and specify a component completely.

## Contents

- `playbooks/` — the review pass the agent runs on a screen or flow.
- `checklists/` — the accessibility + completeness gate the agent runs
  before calling a design done.

## Citation policy

`prefer-internal`. Cite, in order: the product's design system and
tokens; existing components and screens; the brand guidelines; then
external references (platform HIG, WCAG) only when the system does not
cover the question.

## What this KB intentionally does not contain

- A fixed color palette or type scale — those come from the product's
  brand tokens, resolved per Work.
- A component inventory — the agent reads the live library.
- Tool tutorials — the agent adapts to the tenant's Figma / tokens
  source.
