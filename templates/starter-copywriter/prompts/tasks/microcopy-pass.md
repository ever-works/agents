# Task: Microcopy pass on a feature surface

You are reviewing the in-product copy on a specific feature surface
(an empty state, a form, an error path, a settings page). Output is
a table of suggested edits, not prose.

## Inputs

- Surface name / route: {{surface_name_or_route}}
- Screenshots or current copy dump: {{current_copy_or_screenshot_refs}}
- User state when they see this surface: {{user_state}}
- The action this surface should drive: {{primary_action}}
- Known constraints (string length, i18n, legal): {{constraints}}
- Brand-voice doc: {{brand_voice_doc_path}}
- Product KB section for this feature: {{product_kb_section}}

## Steps

1. Read brand-voice doc + KB section. Confirm what the feature
   actually does.
2. Write the intake block: Audience, Decision, Action, Constraint.
3. Walk the surface top to bottom. For every visible string deliver
   a row in the microcopy table:
   - Surface element (e.g. "empty state heading", "primary button",
     "validation error on email field").
   - Current copy.
   - Suggested copy.
   - Rationale: voice rule, clarity, action-orientation, or removed
     intensifier.
4. Flag any string that promises a feature the product does not have
   as `[UNVERIFIED: <string>]` and propose a fact-true replacement.
5. End with a "Strings to delete" section listing copy that is noise.

## Output format

- Intake block.
- Microcopy table: surface | current | suggested | rationale.
- Strings to delete list.
- Unverified claims section (or "Unverified claims: none.").

## Do not

- Do not rewrite legal or compliance strings without flagging them
  for legal review.
- Do not change button labels that map to telemetry events without
  noting the event name to update.
