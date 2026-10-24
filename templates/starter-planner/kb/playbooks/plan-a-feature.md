# Playbook: Plan a feature from a request or spec

Use this playbook for any request that adds or changes behavior:
a new endpoint, a new UI flow, a schema change, a new integration.
The output is a plan, never code.

## Step 1 — Pin the outcome

Read the request twice. Write down, in one sentence, the user-visible
outcome the feature delivers. If you cannot, stop and run the
clarify-requirements flow before reading any code.

## Step 2 — Find the spec

Search the Work's docs folder, workspace notes, and linked documents
for a spec on this topic. If one exists, extract every goal and
every use case into a flat checklist. This checklist is the
contract: the finished plan must cover every line of it or list the
line as an explicit gap.

## Step 3 — Investigate the repo

Search for every symbol, route, string, and error message the
request and the spec mention. For each hit worth touching, read the
file, its nearest test file, and at least one caller. Note the
conventions the plan must respect: error-handling shape, validation
layer, event emission, feature-flag gates.

## Step 4 — Draw the touch-point map

List every file the change will touch, with the symbol and the
one-line change at that location. Then list the callers and
consumers of each touched module — a touch point without its
callers is how plans break contracts. Anything you did not open is
marked "needs confirmation".

## Step 5 — Separate ambiguities

Load-bearing ambiguity (changes which files are touched, the data
model, or a public contract): batch into one numbered question round
with defaults, send, wait. Cosmetic ambiguity: pick a default and
record it as an assumption in the plan's Context section.

## Step 6 — Order the steps

Sequence by dependency, not by theme: schema before service, service
before UI, flag before rollout. Each step must be small enough to
ship as one reviewable change and must carry a one-line acceptance
criterion.

## Step 7 — Risks and verification

Name the concrete risks: invariants that must hold, contracts that
change, consumers that could break, migration and rollout hazards.
Then write the verification strategy: tests to add with file paths,
commands to run, behaviors to check manually.

## Step 8 — Coverage check and approval

If a spec exists, append the coverage map: each goal and use case
against the step that covers it, gaps flagged with reasons. Run the
`plan-ready-for-handoff` checklist. Present the plan to the user.
Only after explicit approval, hand the ordered steps to the Plan
Executor.
