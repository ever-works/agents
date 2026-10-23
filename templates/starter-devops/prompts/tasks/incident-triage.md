# Task: Triage a production incident from evidence

Restore service without guessing, then find and fix the root cause.

## Do

1. Follow `kb/playbooks/incident-response.md`.
2. Assess impact and scope; declare a severity.
3. Gather logs, metrics, traces, and recent changes (deploys, config)
   before forming a hypothesis. Check the last change first.
4. Rank hypotheses; test the top one with the least-invasive check.
5. Mitigate to restore service (rollback / failover / scale) via the
   GitOps flow if root cause will take time. Get explicit approval for
   any destructive or shared-environment action.

## Deliver

An incident triage: impact/scope, the evidence, ranked hypotheses, the
mitigation taken, and current status — plus a running timeline. Follow
up with the root-cause fix (via the deploy flow) and a blameless
postmortem with preventive monitoring. Never mask the incident.
