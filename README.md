# Ever Works — Agents catalog

This repository is the canonical source of **reusable Agent templates**
for the [Ever Works](https://ever.works) platform. The "Create Agent"
wizard in the Workshop loads these templates from this repo so a user
can pick a pre-built Agent (e.g. *Project Manager*, *Researcher*,
*Curator*) and tweak it instead of writing one from scratch.

> Status: bootstrap. Eight starter templates ship here. New templates
> land via PR; the platform pulls `manifest.json` and the individual
> `SOUL.md` files at build time.

## What lives here

```
schema/
  agent-template.schema.json   # JSON Schema for the YAML frontmatter in every SOUL.md
templates/
  starter-pm/SOUL.md           # Project Manager
  starter-coder/SOUL.md        # Coder
  starter-researcher/SOUL.md   # Researcher
  starter-copywriter/SOUL.md   # Copywriter
  starter-marketer/SOUL.md     # Marketer
  starter-sales/SOUL.md        # Sales SDR
  starter-support/SOUL.md      # Customer Support
  starter-curator/SOUL.md      # Directory Curator (Ever Works specific)
manifest.json                  # auto-built index the platform reads first
```

## Format — one Agent = one `SOUL.md`

Each template is a single Markdown file with **YAML frontmatter** for
the fields the platform's Agent entity needs (name, scope, capabilities,
permissions, idle behavior, suggested skills, etc.) and a **Markdown
body** that describes the personality — identity, priorities, default
behaviors, hard rules, output formats.

The body format mirrors the
[Workspace personalities `SOUL.md`](https://github.com/ever-works/workspace/blob/develop/personalities/OVERVIEW.md)
spec used by the internal agent on this workstation, so a template
imported into the platform reads the same as one written by hand.

See [`schema/agent-template.schema.json`](schema/agent-template.schema.json)
for the canonical frontmatter contract.

## How the platform consumes this repo

1. At build time (or via a scheduled refresh), the platform fetches
   `manifest.json` from this repo's `main` branch.
2. For each entry it reads the listed `SOUL.md`, parses the YAML
   frontmatter, and exposes the template in the **Create Agent
   wizard → Template step**.
3. When the user picks a template the wizard pre-fills name, title,
   scope, capabilities, permissions, model, idle behavior, avatar icon
   and a suggested set of skills. The user can override anything before
   confirming.

The platform's `Agent` entity is defined in
`packages/agent/src/entities/agent.entity.ts`; the wizard component is
`apps/web/src/components/agents/NewAgentDialog.tsx`. Until the remote
loader lands (tracked in ADR-010), there is a hardcoded fallback list
at `apps/web/src/lib/api/agent-templates.ts` that mirrors the slugs in
this repo.

## Adding a new template

1. Fork or branch this repo.
2. Pick a slug (lowercase, kebab-case, prefixed `starter-` for the
   built-in set or your namespace for org-specific templates).
3. Create `templates/<slug>/SOUL.md`:
   - Fill the frontmatter — every field marked `required` in the schema.
   - Write the personality body using the eight-section structure
     (Identity, Mission, Priorities, Default behaviors, Non-default
     behaviors, Hard rules, Preferred output formats, Skills/KB).
4. Validate locally:
   ```bash
   npx ajv validate -s schema/agent-template.schema.json \
     -d "templates/<slug>/SOUL.md" --frontmatter
   ```
5. Open a PR. CI checks the frontmatter against the schema and rebuilds
   `manifest.json`.

## Cross-cutting rules (apply to every template)

The platform applies the cross-cutting guardrails described in the
Workspace personalities OVERVIEW — truthfulness, ToS compliance,
production awareness. Templates must not try to relax these. The
`permissions` block in frontmatter sets *capabilities*, not *trust*.

## License

Private. Internal Ever Works use only for now. We will revisit licensing
once the catalog stabilises and we open it to the community.
