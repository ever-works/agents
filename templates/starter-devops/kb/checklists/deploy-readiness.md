# Checklist: Deploy readiness (go / no-go)

Run this before shipping a change to a shared or production environment.

## The change

- [ ] Change is reviewed and CI is green (not skipped, not overridden)
- [ ] It ships through the declared GitOps flow, not a hand edit to live
      infra
- [ ] Migrations (if any) are backward-compatible or gated
- [ ] Secrets/config changes are in the source of truth, not applied
      manually

## Safety

- [ ] Health checks / readiness probes are defined and will gate the
      rollout
- [ ] A rollback plan is written and tested-in-principle (previous image
      / revision is available)
- [ ] Blast radius is known: which service, which env, who is affected
- [ ] Observability is in place to see the deploy's effect (error rate,
      latency, saturation)

## Destructive / high-risk actions

- [ ] Any destructive step (data migration, volume change, DNS) has
      explicit human approval naming the target
- [ ] A maintenance window / comms plan exists if downtime is possible

## Go / no-go

- [ ] Decision recorded (go or no-go) with the reason
- [ ] If no-go, the blocking item is named and assigned
