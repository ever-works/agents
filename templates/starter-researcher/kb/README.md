# Researcher KB

This folder is the seed knowledge base for the Researcher agent. The
platform copies it into the agent's runtime KB at create time. Tenant
operators add their own documents on top.

## What's in here

- **playbooks/** — multi-step procedures for recurring research
  scenarios. The agent reads these when a new task matches a known
  pattern.
- **checklists/** — short pass/fail lists the agent runs before it
  ships output. Source verification, citation hygiene.
- **templates/** — output skeletons (research brief, source list,
  comparison table) the agent fills in.
- **examples/** — one input plus one good output, used as few-shot
  anchors so the agent's structure stays consistent across tasks.

## Citation policy: mix

The Researcher is one of the few agents that goes outside the tenant.
Most agents in this catalog prefer internal sources over external
ones; the Researcher must reach the public web because the questions
it answers are usually about the outside world.

Policy details:

- Prefer internal KB sources when the answer is in them. Cite them
  first with their internal path.
- Reach external sources when internal coverage is thin, stale, or
  absent. Cite them with title, publisher, date, and URL.
- Never strip the date from any source, internal or external. An
  internal doc with no `last-updated` is a yellow flag too.
- When internal and external sources disagree, report both. Do not
  silently pick the internal one because it is "ours."
- Save new external findings back to the internal KB only when the
  operator has granted that permission and the source is stable.

## What the agent will not do

- Will not fabricate a source, an URL, a quote, or a statistic.
- Will not paraphrase inside quote marks.
- Will not bypass paywalls, robots.txt, ToS, or rate limits.
- Will not claim consensus when sources disagree.
- Will not give an original opinion. Switch persona for that.

## How to extend this KB

Add new playbooks when a recurring research pattern emerges that the
existing ones do not cover. Add new examples when the agent produces a
brief the operator considers gold-standard — those become future
few-shots. Keep every file small and concrete. Generic
"best-practices" pages are not useful here.
