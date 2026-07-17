# Ever Works — Agents catalog

This repository is the canonical source of **reusable Agent templates**
for the [Ever Works](https://ever.works) platform. The "Create Agent"
wizard in the Workshop loads these templates from this repo so a user
can pick a pre-built Agent (e.g. *Project Manager*, *Researcher*,
*Curator*) and tweak it instead of writing one from scratch.

> Status: bootstrap. Twelve starter templates ship here. This repo is
> **private** until the catalog stabilises. New templates land via PR;
> the platform pulls `manifest.json` and the per-template `.works/`
> manifest at build time.

For the long-form tour — SOUL.md format, `.works/` convention,
cross-cutting guardrails, how the platform consumes the catalog — see
[`OVERVIEW.md`](OVERVIEW.md).

## What lives here

```
schema/
  agent-manifest.schema.json   # JSON Schema for .works/agent.yml
  skills.schema.json           # JSON Schema for skills.yml
  eval.schema.json             # JSON Schema for eval/<slug>.yml
templates/
  starter-pm/
    .works/agent.yml           # platform manifest (parsed by the loader)
    SOUL.md                    # personality contract (body-only)
    README.md                  # wizard-preview card content
    prompts/system.md          # runtime system prompt
    prompts/tasks/*.md         # Quick-Action prompt scaffolds
    skills.yml                 # required + recommended skill slugs
    kb/README.md
    kb/playbooks/, checklists/, templates/, examples/
    icon.svg
  starter-coder/        ...
  starter-researcher/   ...
  starter-copywriter/   ...
  starter-marketer/     ...
  starter-sales/        ...
  starter-support/      ...
  starter-curator/      ...
eval/
  <slug>.yml                   # conversation-level behavioral evals
manifest.json                  # the loader's entry point
.github/workflows/validate.yml # ajv + path + uniqueness checks on PR
```

## The `.works/` convention

Platform-mappable manifests live under `.works/`, not at the template
root. Same convention used for Ever Works **Mission Templates** (see
Workspace `notes/2026-05-24-missions-ideas-works-spec.md` §7.5). Humans
browsing the repo see a clean top level; the loader knows to look in
`.works/`.

For Agent templates that file is `.works/agent.yml`, validated against
[`schema/agent-manifest.schema.json`](schema/agent-manifest.schema.json).

## SOUL.md — personality contract

Each template ships a `SOUL.md` next to `.works/agent.yml`. It is
body-only (no YAML frontmatter — that moved to `.works/agent.yml`) and
follows the eight-section Workspace personality spec: Identity,
Mission, Priorities, Default behaviors, Non-default behaviors, Hard
rules, Preferred output formats, Skills / KB.

## How the platform consumes this repo

1. Loader reads `manifest.json` from the repo's default branch.
2. For each entry it reads `templates/<slug>/.works/agent.yml`,
   parses it, and pre-fills the Create-Agent wizard.
3. `SOUL.md` is rendered into the new Agent's `personality` field.
4. `kb.seedPaths` directories bulk-import into the Agent's runtime KB.
5. `prompts/system.md` + `prompts/tasks/*` populate the Agent's system
   prompt and Quick-Action menu.
6. `skills.yml` drives the Skills step (required = locked, recommended
   = pre-checked).

## Local validation

```bash
npm install --no-save ajv ajv-cli ajv-formats yaml js-yaml
# CI runs the same script as .github/workflows/validate.yml.
```

## Sources & attribution

The original eight starter templates (`starter-pm`, `starter-coder`,
`starter-researcher`, `starter-copywriter`, `starter-marketer`,
`starter-sales`, `starter-support`, `starter-curator`) are authored by
Ever Co. LTD.

Four additional role templates were adapted from permissively-licensed
(MIT) public subagent collections. System prompts were rewritten into
this repo's SOUL.md + `.works/agent.yml` format; the domain expertise is
credited to the upstream authors.

| Template(s) | Adapted from | License |
|-------------|--------------|---------|
| starter-growth | [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) (`seo-specialist`, `growth-loops`) + [wshobson/agents](https://github.com/wshobson/agents) (`seo-*`) | MIT |
| starter-designer | [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) (`ui-designer`) + [wshobson/agents](https://github.com/wshobson/agents) (`ui-ux-designer`) | MIT |
| starter-devops | [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) (`devops-engineer`, `sre-engineer`) + [wshobson/agents](https://github.com/wshobson/agents) (`devops-troubleshooter`) | MIT |
| starter-founder | [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) (`product-manager`, `market-researcher`) | MIT |

Both upstream repositories are MIT-licensed. Only MIT / permissively-licensed
sources were used; repos without a clear permissive license
(e.g. contains-studio/agents, dl-ezo/claude-code-sub-agents,
crewAIInc/crewAI-examples) were intentionally excluded.

## License

[Apache 2.0](LICENSE)
