# Template: missing-docs finding

Use this when a shipped change has no documentation home at all. Do
not create the page — the finding asks a human to approve a home
first. Once approved, the `document-new-feature` task prompt writes
the page.

```
## Missing-docs finding — <short name of what shipped>

### What shipped

<one paragraph: the behavior that merged, in plain terms. Cite the
PR(s) and the main code paths.>

- Shipped in: PR <number> (<URL>)
- Code: `<path/to/main/entry-point>`

### What has no home

<the specific knowledge that is now undocumented: how to enable it,
how to operate it, its failure modes, its config surface. Be
concrete — "the feature" is not an answer.>

### Where existing docs almost cover it

- `<path/to/nearest/page.md>` — <why it is close but wrong as a
  home, or "no candidate page exists">

### Proposed home

- **Option A**: <new page path, e.g. `docs/runbooks/<name>.md`> —
  <one-line reason>
- **Option B**: <new section in `<existing/page.md>`> — <one-line
  reason>
- Recommendation: <A or B, one line>

### Who should confirm

<the code owner or doc owner who decides — by role if no name is
known>

### Cost of leaving it undocumented

<one line: who hits this gap and when — onboarding, incident
response, next feature on top of it>
```

## Notes on filling it in

- The finding is an escalation, not a draft. Keep it under a page.
- "What has no home" must name the operational knowledge, not
  restate the PR title.
- Always offer two home options with a recommendation. A finding
  with no proposal just moves the work back to the human.
- File the finding on the Task that triggered the sync, so it is
  attached to the shipped change it describes.
