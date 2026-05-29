# Contributing — Ever Works Agents catalog

Thanks for adding a template. Two rules above everything else:

1. **Templates describe an agent, not a fantasy.** Don't promise
   capabilities the platform can't deliver. The `permissions`,
   `idleBehavior` and `suggestedSkills` fields must reflect what the
   user will actually see in the wizard after import.
2. **Templates inherit the cross-cutting guardrails.** Truthfulness,
   ToS / compliance, and production-awareness rules apply to every
   template; you don't need to repeat them and you can't relax them.

## Adding a template

1. Pick a slug — lowercase, kebab-case, ≤ 60 chars. `starter-*` is
   reserved for the built-in set shipped from this repo. For
   org-specific templates use your namespace (e.g. `acme-onboarder`).
2. Create `templates/<slug>/SOUL.md`. Use one of the existing
   `starter-*` templates as your starting point — same eight body
   sections, same frontmatter shape.
3. Fill the frontmatter:
   - `slug`, `name`, `title`, `scope`, `summary`, `capabilities` and
     `permissions` are required.
   - `avatarIcon` is required when `avatarMode` is `ICON` (default).
     Pick a name from <https://lucide.dev/icons>.
   - `suggestedSkills` should reference slugs from the (forthcoming)
     `ever-works/skills` catalog. Unknown slugs are ignored by the
     wizard, not rejected — so it's safe to suggest skills that
     don't exist yet.
4. Write the body. Eight sections, in this order:
   - Identity
   - Mission
   - Priorities (ordered)
   - Default behaviors (on)
   - Non-default behaviors (off — flip on by request)
   - Hard rules (never)
   - Preferred output formats
   - Skills / KB
5. Update `manifest.json` — add an entry with the slug, name, title,
   summary, scope, icon, tags and the path. Keep entries alphabetical
   by slug within their namespace.
6. Open a PR. CI will:
   - Validate the YAML frontmatter against
     [`schema/agent-template.schema.json`](schema/agent-template.schema.json).
   - Check each linked `path` in `manifest.json` exists.
   - Check `slug` uniqueness across the manifest.

## Style notes

- **First person singular discouraged.** SOUL is a contract, not a
  diary. "Refuses to ..." > "I refuse to ...".
- **Short, declarative sentences.** Operators will skim these.
- **No emojis** anywhere in the file, including frontmatter, unless
  the explicit purpose of the template requires them.
- **No competitor mentions** in the description fields. Compare pages
  are a separate surface; templates are not the place.

## Local validation

```bash
# Validate one template's frontmatter
npx ajv validate -s schema/agent-template.schema.json \
  -d "templates/<slug>/SOUL.md" --frontmatter

# Rebuild manifest from templates/* (script lands with the loader)
# pnpm run manifest:build   # TODO once CI lives in this repo
```

## Naming / scope conventions

- **`scope: TENANT`** — the template makes sense at the tenant level
  (PM, Researcher, Marketer, Sales, Support, Copywriter).
- **`scope: WORK`** — the template is tied to a specific Work
  (Coder, Curator).
- **`scope: MISSION`** — the template runs against a Mission's cadence.
- **`scope: IDEA`** — rare; the template operates against a single
  Idea / WorkProposal record.

## When to *not* add a template

- It's a tweak of an existing template. Open a PR against that one
  instead, or document the variant in its `kb/` (when we add it).
- It depends on capabilities the platform doesn't have yet. File an
  issue on `ever-works/ever-works` first.
- It's actually a Skill (one tool-shaped capability), not a Personality.
  Skills will live in `ever-works/skills`.
