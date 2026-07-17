# Checklist: Design ready for handoff

Run this before calling a design or component spec done.

## Accessibility (blockers)

- [ ] Text and essential UI meet WCAG 2.1 AA contrast
- [ ] Every interactive element has a visible focus state
- [ ] Keyboard path is complete and logical (no traps)
- [ ] Labels / roles / alt text present; not conveyed by color alone
- [ ] Touch/click targets are large enough

## Completeness

- [ ] All states specified: default, hover, focus, active, disabled,
      loading, empty, error
- [ ] Responsive behaviour defined for small and large widths
- [ ] Light and dark treatments provided (if the product supports both)

## Consistency

- [ ] Reuses existing components where they exist
- [ ] Colors, type, spacing come from tokens — no contradicting hard-codes
- [ ] Any new pattern has a written rationale and is flagged for sign-off

## Handoff

- [ ] Token references, spacing, and motion notes included
- [ ] Open questions for the developer listed
- [ ] Scope respected — larger issues noted separately, not silently
      expanded
