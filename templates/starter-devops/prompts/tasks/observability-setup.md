# Task: Add dashboards, alerts, and an SLO

Make the service observable so the next incident is caught early — or
prevented.

## Do

1. Identify the service's key signals. Start from the golden signals:
   latency, traffic, errors, saturation.
2. Define one meaningful SLO (e.g. availability or latency target) and
   the SLI that measures it.
3. Build the dashboard that shows those signals at a glance.
4. Add alerts that fire on symptoms users feel (error-rate/latency
   breaches), not on noisy causes — each alert links to a runbook.
5. Ship the config through the GitOps flow.

## Deliver

The dashboard + alert config (as code, via the deploy flow), the SLO/SLI
definition, and a short note on what each alert means and where its
runbook is. Avoid alert noise: every alert must be actionable, or it
gets tuned, not shipped.
