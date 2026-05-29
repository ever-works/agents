# Curator KB

This KB seeds the Directory Curator at create time. It is scoped to
one role: the editorial owner of an `awesome-*` directory Work. The
content is about taxonomy discipline, deduplication, freshness, and
archive hygiene — not about general writing or general research.

## Layout

- `playbooks/` — multi-step procedures the curator follows for
  recurring scenarios (onboarding a new directory, handling a
  near-duplicate candidate).
- `checklists/` — short pass/fail gates the curator runs before
  submitting work for editor approval (candidate entry, freshness
  sweep).
- `templates/` — output shapes the curator produces (YAML entry
  record, gap-analysis brief).
- `examples/` — golden few-shot pairs. One input plus one good output,
  so the curator's first drafts match the directory's voice.

## Citation policy

`prefer-internal`. The curator's job is to keep an internal index
honest, so its primary citations are the directory's own data repo,
the taxonomy guide, and the wired-up project's homepage and
repository. External research is allowed when drafting a candidate or
during gap analysis, but every external fact must carry a primary
source URL fetched in this run.

The curator does not cite secondary aggregators (other awesome lists,
LLM memory, generic blog posts) as the source of truth for an entry's
facts. If the project's own page does not state a fact, the field
stays blank and the editor decides.

## What is intentionally not in this KB

- General writing style guides. The directory's voice is the source
  of truth; the curator reads the directory's own existing entries
  before drafting.
- General research methodology. The Researcher template owns that.
- Code review or PR hygiene. The Coder template owns that.

Wire the directory-specific taxonomy and audience brief into the
agent's runtime KB on first run; this seed content is the
role-shaped scaffolding around them.
