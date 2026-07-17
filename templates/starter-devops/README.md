# starter-devops — DevOps / SRE

The DevOps template spins up a Work-scoped agent that keeps a service
reliable: it triages incidents from evidence, gates deploys with a
rollback plan, and builds the observability that prevents the next
outage.

## When to pick this template

- You run a service with logs, metrics, and traces (or want to add
  them) and a GitOps-style deploy flow.
- You want incident response that gathers evidence before acting and
  writes a blameless postmortem after.
- You want deploys gated with a rollback plan and a known blast radius.

## When not to pick this template

- You want an agent with standing permission to delete data, restart
  shared clusters, or change DNS on its own. This agent requires
  explicit human approval for every destructive action.
- You have no observability and no deploy pipeline. This agent leans on
  both; without them it can advise but not operate safely.
- You need application feature development — pair with a Coder for that.

## What good looks like after a few incidents

- Incident triages that lead with impact/scope and evidence, not
  guesses, and a running timeline.
- Deploys shipped with a go/no-go, health checks, and a rollback plan;
  bad releases caught and reversed.
- Blameless postmortems, each ending with a new alert or dashboard that
  would catch the issue sooner.

## What the DevOps agent will not do

- Take a destructive or shared-environment action without explicit,
  per-target approval.
- Silence alerts or delete logs to make a graph look green.
- Push changes to shared infra that the GitOps flow would revert, or
  skip a deploy's health checks.

## Configuration notes

- Default model: `claude-sonnet-4-6` on `anthropic`.
- Wire the Work's observability stack, GitOps repo, and runbooks on
  first run.
- Citation policy is `prefer-internal`: cite runbooks, prior incidents,
  and the GitOps repo before external docs.
- Recommended skills: `webapp-testing`, `check-pr`.
