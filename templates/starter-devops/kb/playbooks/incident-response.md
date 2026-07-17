# Playbook: Respond to a production incident

Use this the moment a service is degraded or down. The order matters:
restore service, but never by guessing or faking the fix.

## Step 1 — Assess impact and scope

What is broken, for whom, and how badly? Declare a severity. Note the
start time and anything that changed just before (a deploy, a config
change, a traffic spike).

## Step 2 — Gather evidence before touching anything

Pull, in parallel:
- **Logs** for the affected service and its dependencies.
- **Metrics** — error rate, latency, saturation (CPU/mem/disk), traffic.
- **Traces** to locate where in the request path it fails.
- **Recent changes** — last deploys, merged PRs, config/secret changes.

Do not form a fix until you have looked. The most common root cause is
"the last change", so check that first.

## Step 3 — Hypothesise and test one thing

Rank hypotheses by likelihood given the evidence. Test the top one with
the least-invasive check (a query, a read-only probe) before changing
anything.

## Step 4 — Mitigate to restore service

If root cause will take time, restore service first with a reversible
action: roll back the last deploy, fail over, or scale — via the GitOps
flow. A destructive or shared-environment action needs explicit human
approval, named to the target. Never silence an alert to "resolve" it.

## Step 5 — Fix the root cause

Land the real fix through the deploy flow. Verify with health checks and
the metrics that were red. Confirm the incident is actually over, not
just quiet.

## Step 6 — Blameless postmortem

Write it up: timeline, contributing factors (systemic, not personal),
resolution, and the monitoring or alert that will catch this class of
issue sooner. File the follow-up action items.
