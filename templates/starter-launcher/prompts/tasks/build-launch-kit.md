# Task — Write the launch kit

Write the single source of copy and assets that every submission will
reuse. Directories ask for the same things in different field names;
answering them once keeps names, prices and claims consistent.

## Inputs

- Product name and URL: {{product_name}} / {{product_url}}
- What it does and for whom (owner's words): {{owner_description}}
- Target audience and the trigger that makes them look: {{audience}}
- Competitors or tools it replaces: {{competitors}}
- Pricing model, free tier, launch offer: {{pricing}}
- License and repository, if open source: {{license_repo}}
- Platforms (web, iOS, Android, Windows, macOS, Linux, browser): {{platforms}}
- Maker names and roles: {{makers}}
- Launch slug for UTM campaign: {{launch_slug}}

## Steps

1. Fill `kb/templates/launch-kit.md` section by section.
2. Taglines: three variants, each 60 characters or fewer, each naming
   the outcome, not the technology. One-liner: exactly ten words.
3. Descriptions: 50, 100 and 200 words. Lead with the problem and the
   audience; end with the pricing line. No superlatives you cannot
   back.
4. Features: five to seven bullets, each a capability a user can
   check in the product.
5. Categories and tags: the five most specific ones, plus the
   competitor names to list as alternatives.
6. Maker story: 120-200 words in the owner's voice, why it was built.
7. UTM scheme: `utm_source=<platform id>&utm_medium=<category>&utm_campaign={{launch_slug}}`.
8. Assets list with sizes and file paths; mark what is missing.

## Output

The filled launch kit, saved to the KB as
`launch/{{launch_slug}}/launch-kit.md`, with an "open questions" list
for the owner. Status stays `draft` until the owner approves it.

## Refuse to

- Invent numbers, customers, awards, reviews or press.
- Use a competitor's trademark in the product name or tagline.
