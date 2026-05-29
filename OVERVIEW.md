# Ever Works — Agents catalog overview

This repository is the canonical source of reusable **Agent templates**
for the [Ever Works](https://ever.works) platform. The Workshop's
"Create Agent" wizard reads `manifest.json` from this repo, then walks
the listed templates and pre-fills the wizard from each one. A user
picks a template, tweaks a few fields, confirms, and the platform
provisions a real Agent with its skills, KB and prompts in place.

Status: bootstrap. Eight starter templates ship here. The repo is
private until the catalog stabilises.

## SOUL.md — the personality contract

Every template ships a `SOUL.md` file in its folder. It uses the same
eight-section structure as the
[Workspace personalities](https://github.com/ever-works/workspace/blob/develop/personalities/OVERVIEW.md)
spec used by the on-workstation agent: **Identity**, **Mission**,
**Priorities**, **Default behaviors**, **Non-default behaviors**,
**Hard rules**, **Preferred output formats**, **Skills / KB**. The
shape is identical so a template imported into the platform reads the
same as one written by hand for the workstation.

`SOUL.md` is the *personality* contract. It is **not** the platform
manifest. Platform-mappable fields (name, scope, capabilities,
permissions, idle behavior, suggested skills, avatar) live in
`.works/agent.yml` next to it.

## .works/ manifest convention

The catalog follows the same `.works/` convention used by Ever Works
**Mission Templates** (see Workspace `notes/2026-05-24-missions-ideas-works-spec.md` §7.5):
the platform-mappable manifest lives in a `.works/` folder, not at the
template root. Two reasons:

1. **Clean top level.** Humans browsing the repo see a README, a SOUL
   and a couple of folders — not a wall of YAML.
2. **Marker for the platform.** Anything inside `.works/` is an
   Ever Works artifact the loader will parse; everything outside is
   for humans.

So every template ships `.works/agent.yml` validated against
`schema/agent-manifest.schema.json`. The Mission Templates spec uses
`.works/mission.yml`; the Agent catalog uses `.works/agent.yml`. Same
pattern.

## Per-template folder layout

```
templates/<slug>/
  .works/
    agent.yml            # platform manifest (this repo's contract)
  SOUL.md                # personality contract, body-only
  README.md              # wizard-preview card content
  prompts/
    system.md            # final runtime system prompt
    tasks/
      <task-id>.md       # one prompt scaffold per common task
  skills.yml             # required + recommended skill slugs
  kb/
    README.md            # citation policy + KB index
    playbooks/           # multi-step playbooks
    checklists/          # short pass/fail checklists
    templates/           # output templates
    examples/            # golden few-shot pairs
  icon.svg               # placeholder; platform renders Lucide by default
```

## Eight cross-cutting guardrails

Every template inherits these. Templates cannot relax them and should
not restate them in their SOUL.

1. **Truthfulness.** No invented sources, quotes, features, or facts.
2. **ToS / legal compliance.** No scraping behind auth, no impersonation
   of humans, no covert recording.
3. **Production awareness.** Treat shared infrastructure as live;
   destructive actions need an explicit, scoped request.
4. **Scope discipline.** Stay inside the Agent's scope (`TENANT`,
   `MISSION`, `IDEA`, `WORK`). Surface, do not silently expand.
5. **Permission honesty.** `permissions` reflect what the platform
   will actually grant, not what the role conceptually wants.
6. **Citation policy.** External claims cite a source; internal claims
   cite a KB path. `mix` allowed; silent assertion is not.
7. **Idempotency on retry.** Tasks must be safe to re-run; no
   double-posting, double-charging, or double-creating.
8. **No emoji, no hype, no marketing voice.** Operators read these.
   Short declarative sentences.

## How the platform consumes the catalog

1. **manifest.json** — the loader's entry point. Lists every template,
   its slug, scope, icon, tags, and the path to its folder.
2. **templates/`<slug>`/.works/agent.yml** — parsed for every entry.
   Validated against `schema/agent-manifest.schema.json`. Drives the
   wizard's pre-fill.
3. **templates/`<slug>`/SOUL.md** — rendered into the Agent's
   `personality` field at provision time.
4. **kb.seedPaths** — directories whose contents are bulk-imported
   into the new Agent's runtime KB on create.
5. **prompts/system.md + prompts/tasks/\*** — composed into the
   Agent's system prompt and Quick-Action menu in the chat surface.
6. **skills.yml** — required slugs are auto-attached; recommended
   slugs are pre-checked in the wizard's Skills step.

The wizard never trusts the catalog blindly: the user can override any
field before confirming. The catalog's job is good defaults, not
imposed policy.

## License

Private. Internal Ever Works use only for now.
