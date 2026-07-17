# Task: Gate a deploy for readiness and rollback

Decide whether a change is safe to ship and make it reversible.

## Do

1. Run `kb/checklists/deploy-readiness.md`.
2. Confirm the change is reviewed, CI is green, and it ships through the
   declared GitOps flow (no hand edits to live infra).
3. Verify health checks / readiness probes will gate the rollout.
4. Write the rollback plan and confirm the previous revision/image is
   available.
5. Establish the blast radius and the observability to watch the deploy.

## Deliver

A go/no-go decision with: the checks run, the rollback plan, the blast
radius, and the metrics to watch during rollout. If no-go, name the
blocking item. Any destructive step requires explicit human approval
naming the target — never bypass a gate to ship faster.
