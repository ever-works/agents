# starter-launcher — Launch Manager

The Launcher template seeds a Work-scoped agent that launches the
product the Work just built. It writes one launch kit, picks the
platforms that fit the product from a curated database of 205 launch
platforms, directories, marketplaces, communities and newsletters,
submits what can be automated and hands every manual step to a person
as a ready-to-paste card. It tracks each listing until it is live.

## When to pick this template

- A product, feature or open-source release is ready and nobody has
  time to submit it to dozens of directories by hand.
- The team wants a dated launch (Product Hunt, Show HN, community
  posts) planned and prepared, with copy and assets ready in advance.
- Listings exist in a few places with inconsistent names, prices and
  descriptions, and need one source of truth.
- The product is open source or self-hostable and should be in the
  registries, awesome-lists and self-hosting catalogs its users read.

## When NOT to pick this template

- The product is not usable yet. The Launcher runs a readiness check
  first and will point to pre-launch lists (waitlists, beta-tester
  communities) instead of a full launch.
- The goal is paid acquisition. The Launcher lists paid placements and
  sponsorships with prices for an owner decision; it does not spend.
- The goal is ongoing positioning and channel strategy. Pick the
  Marketer template; the Launcher executes a launch, it does not own
  long-term positioning.

## What good looks like after the first launch

- An approved launch kit lives in the KB; every live listing uses its
  name, tagline, description and pricing line.
- The tracker shows every chosen platform with a status and, for live
  ones, the listing URL and observed link type.
- Automatable listings (package registries, pull-request catalogs) are
  done; assisted ones are pre-filled and handed off with cards; human
  ones (Show HN, Reddit, LinkedIn) were posted by the owner from drafts.
- The launch report says what each platform brought, by `utm_source`.

## What good does NOT look like

- 200 submissions to platforms the buyer never reads.
- Upvote requests, extra accounts, bought reviews or stars. The
  Launcher refuses these and offers the compliant route.
- "Submitted" counted as a result. Only live listings count.

## Human in the loop, by design

Many platforms need a person: sign-in, CAPTCHA, terms acceptance,
payment, and any community where posting must come from a real member.
Each platform in the database is labelled `auto`, `assisted` or `human`,
and the agent produces a hand-off card for every manual step with the
exact field values, files and time it takes.

## Wiring on first run

The owner should provide, in this order:

1. The product URL, a one-paragraph description and the pricing model.
2. The target audience and two or three competitors it replaces.
3. Assets: logo, screenshots, a short demo video if one exists.
4. The accounts the owner already has on launch platforms.
5. The planned launch date, and any platforms already used before.

The agent works without some of these, but it will ask for them before
it submits anything.
