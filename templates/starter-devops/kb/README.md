# DevOps / SRE KB

Seeds the DevOps / SRE agent at create time. Small on purpose — the
agent needs reflexes for the loop it runs under pressure: assess,
gather evidence, mitigate, fix, prevent.

## Contents

- `playbooks/` — the incident-response procedure the agent runs when a
  service is degraded or down.
- `checklists/` — the go/no-go gate the agent runs before a deploy.

## Citation policy

`prefer-internal`. Cite, in order: the Work's runbooks; prior incidents
and postmortems; the GitOps repo and its history; then external docs
(cloud provider, Kubernetes, tool docs) only when the internal sources
don't cover it. Never cite an internal chat transcript without
paraphrasing — those links rot.

## What this KB intentionally does not contain

- Environment-specific credentials, endpoints, or cluster names — those
  live in the Work's config, not the template.
- A fixed tool list — the agent adapts to whatever observability and
  deploy stack the Work has wired up.
- Architecture diagrams — those belong in the Work's own docs.
