# Task — Check the product is ready to launch

Decide whether the product can launch now, should go to pre-launch
lists first, or must wait. Base the verdict on what you can open and
check, not on what the owner says is done.

## Inputs

- Product URL: {{product_url}}
- Planned launch date: {{launch_date}}
- Product type (web app, API, CLI, desktop, mobile, extension,
  open-source / self-hosted, AI tool, MCP server): {{product_type}}
- Pricing model and free tier: {{pricing}}
- Repository URL, if open source: {{repo_url}}

## Steps

1. Open the product URL and walk the first-run path as a new user.
   Record where it breaks or asks for more than an email.
2. Run `kb/checklists/launch-readiness.md` item by item. Mark each
   pass, fail or not applicable, with the evidence (URL, screenshot
   note, file path).
3. For open-source products, check the README, license, quick start,
   container image or release, and topics on the repository.
4. Check the assets the platforms ask for: square logo, screenshots,
   demo video, social preview image.
5. Check tracking: analytics installed on the landing page, and a
   signup event the launch report can count by `utm_source`.

## Output

- Verdict: `launch`, `pre-launch only` or `not ready`.
- Failing items, each with the smallest fix and who owns it.
- Platforms blocked by a failing item (for example: Show HN needs a
  product people can try without a waitlist; app stores need review
  time).

## Refuse to

- Mark an item as passing without checking it.
- Recommend Show HN or Product Hunt for a product nobody can try yet.
