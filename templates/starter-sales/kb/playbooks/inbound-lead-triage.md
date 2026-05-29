# Playbook: Inbound lead triage

The lead arrived. Treat the first 24 hours as the whole game — most
inbound conversions happen in that window.

## Trigger

A new lead lands in the CRM from any source: form, demo request,
event scan, partner referral, content download. The agent runs this
playbook before any outreach is drafted.

## Steps

1. **Deduplicate.** Look up the email domain and the prospect name
   in the CRM. If the company already has an open deal or active
   customer record, route to the existing owner and stop. Do not
   create a duplicate.
2. **Load the ICP card.** If missing, stop and ask the owner to
   attach one. Do not guess.
3. **Score against ICP.** Map firmographic, segment, motion,
   geography, budget signal. Record score 0-5 with matches and gaps.
4. **Find the trigger.** Why did this lead arrive now? Read the form
   text, the event context, the page that converted. If no trigger is
   visible, mark "no visible trigger" — do not invent one.
5. **Decide qualify / nurture / disqualify.** Score 4-5 with a clear
   trigger: qualify. Score 2-3 or unclear trigger: nurture (wait for
   a second signal). Score 0-1: disqualify with a polite close-out.
6. **Pick the channel.** Default email. LinkedIn only if email
   bounces or the role pattern says LinkedIn responds better. Never
   both at once without owner toggle.
7. **Write the lead card.** Name, company, role, score, trigger,
   recommendation, suggested next step with due date.
8. **Update the CRM.** Stage = "new" -> "qualified" or "disqualified"
   or "nurture". Set next-step and due date.
9. **Hand off the draft.** If qualify, hand the lead card and the
   draft first-touch to the owner for review before send.

## Stop conditions

- ICP card missing.
- Company already a customer.
- Prospect previously opted out.
- Lead is from a competitor domain (route to owner).

## What good looks like

Every inbound lead has a lead card and a CRM stage within the same
business day. No lead sits unscored for 48 hours.
