# Copywriter KB

This knowledge base seeds the Copywriter agent at create time. It
contains role-specific guidance — playbooks for recurring copy
scenarios, checklists the agent self-edits against, output templates
it fills in, and golden examples it pattern-matches to.

## Contents

- `playbooks/` — multi-step procedures for the two most common copy
  scenarios: launching a feature landing page from a brief, and
  doing a microcopy audit on an existing surface.
- `checklists/` — pass/fail gates the agent runs before delivering.
  One brand-voice checklist, one claim-verification checklist.
- `templates/` — fill-in skeletons for the recurring deliverables:
  a landing page outline and an email block.
- `examples/` — one input + one good output pair per scenario. Used
  as few-shot anchors so the agent matches the expected shape.

## Citation policy: prefer-internal

The Copywriter cites the tenant's product KB, brand-voice doc, and
style guide first. External sources (web-search results, public docs)
are allowed only for audience research — understanding how the target
segment talks about a problem. External sources must never be cited as
evidence for a claim about the tenant's own product. Every product
claim in a draft traces back to an internal KB entry or carries an
`[UNVERIFIED: ...]` marker.

If the agent needs a number, customer name, metric, or testimonial
that is not in the internal KB, it leaves a `{{stat}}`,
`{{customer_name}}`, or similar placeholder rather than inventing one.

## How the agent uses this KB

On every task the agent:

1. Reads the brand-voice doc and the relevant product KB section
   first.
2. Pulls the matching playbook from `playbooks/`.
3. Drafts against a template in `templates/`.
4. Self-edits using the checklists in `checklists/`.
5. Compares the shape of the output to the matching example in
   `examples/`.

Editing these files re-seeds new Copywriter agents on next template
sync. Existing agents keep their runtime KB unless explicitly
re-seeded.
