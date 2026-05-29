# Example: PR description for a small bug fix

A golden example. Use it as a reference for tone and shape.

## Input (the Task)

```
Title: Fix tag-filter dropdown losing selection on locale change

Description: On the directory-web-template listing page, when a user
selects a tag in the filter dropdown and then switches locale via the
header switcher, the selected tag is dropped. Expected: the tag
survives the locale switch.

Named files:
- apps/web/components/filters/TagFilter.tsx
- apps/web/lib/url-state.ts

Acceptance:
- Selecting a tag and switching locale keeps the tag applied.
- No regression on the search-query state, which already survives.
```

## Output (the PR description the Coder posted)

```
## Summary

Persist the selected tag in the URL query so locale switches do not
drop it. The locale switcher rebuilds the path but kept only the
search query — extend it to keep `tag` too. Out of scope: the
category filter, which has its own ticket.

## What changed

- `apps/web/lib/url-state.ts`: `preserveQuery` now copies `tag` in
  addition to `q`. Added explicit allow-list constant so future
  additions are intentional.
- `apps/web/components/filters/TagFilter.tsx`: read initial value
  from `useSearchParams().get('tag')` instead of local state only.
- `apps/web/lib/url-state.test.ts`: new test
  `preserveQuery keeps tag across locale switch`.

## Considered and rejected

- Storing the tag in `localStorage`: rejected — breaks shareable
  URLs and adds hydration mismatches.
- Adding every filter to the allow-list now: rejected — out of scope
  for this Task; opened EW-1842 for category filter.

## Test plan

- [x] New unit test `preserveQuery keeps tag across locale switch`
      in `url-state.test.ts`.
- [x] Manual: select tag `design`, switch locale en -> uk, URL still
      contains `?tag=design` and chip is rendered selected.
- [x] `pnpm lint` clean.
- [x] `pnpm typecheck` clean.
- [x] `pnpm test --filter web` green.

## Risk and rollback

- **Risk**: `preserveQuery` is called from three places; an extra
  query param could shadow a route param on a future page.
- **Blast radius**: listing page only — other pages do not call
  `preserveQuery`.
- **Rollback**: revert this PR.

## Linked Task

EW-1817
```

## Why this example is good

- Summary is three lines and names what is intentionally out of
  scope.
- Considered and rejected has a concrete alternative and a concrete
  reason.
- Test plan items are real assertions, not "added tests".
- Risk is named, blast radius is sized, rollback is one action.
- Follow-up work (category filter) is filed as a separate Task, not
  smuggled into this PR.
