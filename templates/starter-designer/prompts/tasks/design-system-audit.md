# Task: Audit the UI for design-system and token drift

Find where the product has drifted from its own system and prioritise
the cleanup.

## Do

1. Inventory the screens/components in scope.
2. Compare against the design system: components that were forked
   instead of reused, hard-coded colors/spacing/type that should be
   tokens, and inconsistent states.
3. Run an accessibility pass (contrast, focus, semantics) across the
   audited surface.
4. Grade each finding by severity and group by type (component reuse /
   token drift / accessibility / state gaps).

## Deliver

An audit report: findings grouped by type, each with severity, the
affected screens/components, and the fix (the token or component to
adopt). Attach a suggested order of remediation. Do not change brand
tokens themselves — flag token-level questions for the owner.
