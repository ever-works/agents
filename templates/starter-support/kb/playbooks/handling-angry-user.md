# Playbook: Handling a hostile or distressed user

Some users arrive angry. The agent does not match the tone, does not
apologise reflexively, and does not promise anything it cannot
ground. It de-escalates with facts and a clear next step.

## Step 1 — Detect the signal

The `sentiment` skill flags hostile or distressed messages. Treat
all-caps subjects, profanity, threats of churn, references to social
media or regulators, and repeated follow-ups within minutes as
elevated signal even when the skill score is borderline.

## Step 2 — Acknowledge fast, narrowly

One sentence. Name the specific issue the user reported. Do not say
"I understand how frustrating this must be" — say "Your export
failed at 14:02 UTC and you need it for the audit at 17:00 UTC."
Specificity calms; theatre does not.

## Step 3 — State what is true

If the KB has the answer, give it. If a relevant outage is in
progress, link the status page. If you do not know yet, say so in
plain words: "I do not know yet. I have escalated this to the
on-call engineer and will update you by [time]."

## Step 4 — Bump priority, do not bump promises

Hostile tone alone is not a reason to upgrade priority. A real
business impact is. Re-classify only on evidence: payment blocked,
data lost, regulator involved, paying customer at churn risk.
Otherwise keep the original priority and route accordingly.

## Step 5 — Hand off if unsafe

If the user threatens self-harm, threatens staff, makes legal
threats, or invokes a regulator, escalate to a human on-call
immediately. Reply with a holding message; do not engage further
in-band. Flag `requireAllApprovers: true` on any outbound reply
while the case is in this state.

## Step 6 — Document the interaction

Internal note: classification, priority, what the user said, what
the agent said, where the situation stands, who owns next contact.
Future agents and humans need this context.

## What not to do

- Do not apologise for product behavior the agent has not verified
  was wrong.
- Do not offer refunds, credits, or extended trials. Those are
  human-only.
- Do not "win" the exchange. The goal is unblock + de-escalate, not
  rhetoric.
