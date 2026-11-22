# Playbook — Marketplaces, stores and registries

These listings put the product where users already work. They take
longer than directories: developer accounts, reviews, agreements.
Start them in the long-lead wave.

## Package registries and developer hubs (mostly `auto`)

- Publish from CI with credentials the owner provisioned: npm, PyPI,
  crates.io, container registries, editor extension registries.
- Fill the metadata the registry shows: description, keywords,
  homepage, repository, license, a README that works as the listing.
- For containers, write a full overview: quick start, tags, environment
  variables. Self-hosters judge the project by the image page.
- For Helm charts, register the chart repository on the cloud-native
  package hub and add its metadata file to claim the listing.

## Catalogs fed by pull requests (`auto`)

Awesome-lists, self-hosting app catalogs, desktop app stores that take
manifests, launcher extension stores, the MCP registry and similar.

- Read the contribution guide and inclusion criteria first: license,
  project age, activity, format, alphabetical order.
- One clean pull request per list, in the list's exact format, with a
  neutral one-line description. Never mass-open pull requests on lists
  that do not fit.
- Track the pull request URL; reply to maintainer review promptly.

## App stores and extension stores (`assisted`)

- Developer accounts cost money on some stores (an annual or one-time
  fee). The owner creates and pays; the agent prepares the listing.
- Review takes days. Submit builds before launch day.
- Store search decides installs: title, subtitle, keywords,
  screenshots, the first lines of the description, and early ratings.
- Some stores require a closed test with real testers before a new
  account can publish; plan the time.

## Integration marketplaces (`assisted`)

Automation platforms, chat apps, CRM and work-management marketplaces,
office suites, design tools, cloud marketplaces.

- They need a working integration that solves a real workflow, plus a
  review. Build it for the top use cases before listing.
- Being on the main automation marketplaces is expected of a SaaS and
  signals legitimacy.
- Enterprise marketplaces (CRM, cloud, office suites) need security
  reviews, compliance answers and partner agreements. Pursue them when
  enterprise customers ask.
- Marketplace reviews matter. Ask happy users to leave one; never
  incentivise beyond the platform's rules.
