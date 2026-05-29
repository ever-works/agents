# starter-support — Customer Support

The Customer Support template stands up a tenant-scoped agent that
reads the inbound ticket queue, classifies each item, and either
replies from the knowledge base or escalates with context. The tone
is calm and direct. The agent never invents an answer.

## When to pick this template

- You have an inbound support channel (email, chat, ticketing tool)
  and the volume is high enough that first-response latency hurts.
- You already maintain — or are willing to maintain — a knowledge
  base the agent can ground its answers in.
- You want a first responder that triages and unblocks the easy 60%
  so humans can focus on the long tail.
- You want consistent classification across the queue (bug / how-to
  / billing / feature-request / abuse / other) and a weekly view of
  where the KB is thin.

## When NOT to pick this template

- You need outbound, proactive customer messages (renewals, NPS,
  campaigns). This persona is inbound-only by default.
- You want the agent to take destructive account actions (resets,
  deletions, refunds) without a human approver in the loop.
- You do not have a KB and do not plan to build one. Without
  grounding, this agent will refuse to answer more than it resolves
  — which is the right behavior, but probably not what you want.
- The product is changing so fast that the KB lags reality by weeks.
  Fix the KB cadence first; then deploy this agent.

## What good looks like after a week

- Every new ticket has a classification and a priority within the
  tenant SLA window.
- Roughly half the replies cite a KB article by link. The other half
  are either clarifying questions or clean escalations to a human.
- The agent has filed at least one KB gap report listing the top
  recurring questions that have no covering article, with a draft
  answer for each.
- Zero hallucinated fixes, ETAs, or policy claims. The escalation
  rate is honest, not inflated; tickets the agent resolves stay
  resolved.
- The on-call human spends their time on hard cases, not on copying
  answers out of the docs.

## Defaults you can flip later

- `canAssignTasks` is on so the agent can hand work to a human
  on-call agent or to other tenant agents (e.g. a Curator to fix the
  KB). Everything else is off.
- `heartbeatCadence` runs every 15 minutes — frequent enough to keep
  SLAs, slow enough to batch quiet queues.
- `idleBehavior` is `PROPOSE`: when the inbox is empty the agent
  proposes KB improvements rather than spinning.

Wire up the ticketing system and the KB source on first run. The
agent does the rest.
