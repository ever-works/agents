# Contributing — Ever Works Agents catalog

Thanks for adding a template. Two rules above everything else:

1. **Templates describe an agent, not a fantasy.** Don't promise
   capabilities the platform can't deliver. The `permissions`,
   `idleBehavior`, `suggestedSkills` and `skills.yml` fields must
   reflect what the user will actually see in the wizard after import.
2. **Templates inherit the cross-cutting guardrails.** Truthfulness,
   ToS / compliance, production-awareness rules apply to every
   template; you don't need to repeat them and you can't relax them.
   The full list is in [`OVERVIEW.md`](OVERVIEW.md).

## Per-template structure

Every template is a folder under `templates/<slug>/` with these eight
things:

```
templates/<slug>/
  .works/agent.yml         # platform manifest — schema/agent-manifest.schema.json
  SOUL.md                  # personality contract, body-only (no YAML frontmatter)
  README.md                # wizard-preview card content (~300-500 words)
  prompts/system.md        # final runtime system prompt (~400-700 words)
  prompts/tasks/*.md       # one prompt scaffold per common task
  skills.yml               # required + recommended — schema/skills.schema.json
  kb/                      # seeded into the Agent's runtime KB on create
    README.md
    playbooks/   *.md
    checklists/  *.md
    templates/   *.md
    examples/    *.md
  icon.svg                 # placeholder; platform renders Lucide by default
```

`.works/agent.yml` is the platform's source of truth for everything
the wizard pre-fills. `SOUL.md` is the personality contract — what the
model reads as it forms a decision — and lives next to the manifest,
not inside it. Frontmatter on `SOUL.md` is no longer used.

## Adding a template

1. **Pick a slug.** Lowercase, kebab-case, ≤ 60 chars. `starter-*` is
   reserved for the built-in set shipped from this repo. For
   org-specific templates use your namespace (e.g. `acme-onboarder`).
2. **Scaffold the folder.** Copy an existing `starter-*` as a starting
   point — same eight files/folders, same shape.
3. **Fill `.works/agent.yml`.** Required fields: `schemaVersion`,
   `slug`, `name`, `title`, `scope`, `summary`, `capabilities`,
   `permissions`, `kb`, `prompts`, `soul`. See
   [`schema/agent-manifest.schema.json`](schema/agent-manifest.schema.json).
4. **Write `SOUL.md`.** Eight sections, in this order: Identity,
   Mission, Priorities, Default behaviors, Non-default behaviors,
   Hard rules, Preferred output formats, Skills / KB. **No
   frontmatter.**
5. **Write `prompts/system.md`.** Imperative voice, ~400-700 words.
   Compose the SOUL's priorities + hard rules into a tight runtime
   system prompt — not a duplicate of SOUL.md.
6. **Write `prompts/tasks/<id>.md`.** One file per Quick-Action task.
   ~150-300 words. Use `{{placeholders}}` for the parts the runtime
   fills in.
7. **Populate `kb/`.** Real content, role-specific. Two files in each
   of `playbooks/`, `checklists/`, `templates/`, `examples/`, plus
   `kb/README.md`.
8. **Fill `skills.yml`.** Reference slugs from the (forthcoming)
   `ever-works/skills` catalog. Unknown slugs are ignored by the
   wizard, not rejected. Each entry needs a `why` string (8-200 chars).
9. **Update `manifest.json`.** Add the slug, name, title, summary,
   scope, icon, tags and the template-folder path. Keep entries
   alphabetical by slug within their namespace.
10. **Open a PR.** The `validate` workflow runs the checks in the next
    section.

## Validation pipeline

`.github/workflows/validate.yml` runs on every PR and push to `main`:

- Loads `manifest.json`.
- Walks `manifest.templates[]`.
- Validates `templates/<slug>/.works/agent.yml` against
  `schema/agent-manifest.schema.json`.
- Validates `templates/<slug>/skills.yml` against
  `schema/skills.schema.json`.
- Validates every `eval/*.yml` against `schema/eval.schema.json` and
  checks the `slug` references a known template.
- Checks slug uniqueness across `manifest.json`.
- Checks every `path` from `manifest.json` exists on disk.
- Checks every `prompts.system`, `prompts.tasks[].path` and
  `kb.seedPaths` referenced from `.works/agent.yml` exists.
- Runs `prettier --check` on `.yml`, `.json` and `.md` (non-blocking).

Run the same script locally:

```bash
npm install --no-save ajv ajv-cli ajv-formats yaml js-yaml
# then paste the inline node -e script from validate.yml
```

## Style notes

- **First person singular discouraged.** SOUL is a contract, not a
  diary. "Refuses to ..." beats "I refuse to ...".
- **Short, declarative sentences.** Operators will skim these.
- **No emojis.** Anywhere. Including manifests.
- **No competitor mentions** in the description fields.

## Naming / scope conventions

- **`scope: TENANT`** — the template makes sense at the tenant level
  (PM, Researcher, Marketer, Sales, Support, Copywriter).
- **`scope: WORK`** — the template is tied to a specific Work
  (Coder, Curator).
- **`scope: MISSION`** — the template runs against a Mission's cadence.
- **`scope: IDEA`** — rare; the template operates against a single
  Idea / WorkProposal record.

## When to *not* add a template

- It's a tweak of an existing template. Open a PR against that one,
  or document the variant in its `kb/`.
- It depends on capabilities the platform doesn't have yet. File an
  issue on `ever-works/ever-works` first.
- It's actually a Skill (one tool-shaped capability), not a
  Personality. Skills will live in `ever-works/skills`.
