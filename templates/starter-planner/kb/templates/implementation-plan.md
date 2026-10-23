# Template: Implementation plan

Use this verbatim. Replace the angle-bracket placeholders. Keep the
section order — the user approves in this order and the Plan
Executor consumes it in this order.

```
## Implementation plan — <request title>

### Context

<one paragraph: the user-visible outcome, the spec (if any) with its
location, prior related PRs, and the conventions the change must
respect.>

Assumptions:
- <assumption> (safe | load-bearing, default: <default>)
- <assumption> (safe | load-bearing, default: <default>)

### Touch points

- `<path/to/file>:<symbol>` — <one-line change at this location>
- `<path/to/file>:<symbol>` — <one-line change at this location>
- Callers / consumers affected:
  - `<path/to/caller>:<symbol>` — <why it is affected>
- Needs confirmation:
  - `<path/or/symbol>` — <why it could not be verified read-only>

### Ordered steps

1. **<step title>** — <what changes, where>.
   Acceptance: <one-line criterion>.
2. **<step title>** — <what changes, where>.
   Acceptance: <one-line criterion>.
3. **<step title>** — <what changes, where>.
   Acceptance: <one-line criterion>.

### Risks

- **<risk>** — blast radius: <one function | one service | one
  tenant | global>; mitigation: <one line>.
- **Contract changes**: <API / schema / event changes and who
  consumes them, or "none">.

### Verification strategy

- Tests to add: <assertion> in `<path/to/test-file>`.
- Commands: <lint / typecheck / test commands the Work declares>.
- Manual checks: <behavior to confirm by hand, or "none">.

### Out of scope

- <named exclusion> — <why, and the follow-up candidate if any>.

### Spec coverage map (when a spec exists)

| Spec goal / use case | Covered by | Status |
| --- | --- | --- |
| <goal, spec's wording> | Step <n> | covered |
| <use case, spec's wording> | Step <n> + verification | covered |
| <goal, spec's wording> | — | GAP: <reason> |
```

## Notes on filling it in

- Touch points come from files actually read. Guesses go under
  "Needs confirmation", never in the main list.
- Steps are dependency-ordered and individually shippable. A step
  that cannot be reviewed alone is two steps.
- For bug fixes, the failing regression test is its own step and
  precedes the fix step.
- The coverage map quotes the spec's own wording. Rewording a goal
  to make it easier to cover is a fail.
- No dates, no estimates, unless the user asked for them.
