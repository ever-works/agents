# Task: Run a technical + on-page SEO audit

Audit the target site (or the named section) for search health and
return a prioritised, fixable report.

## Inputs to gather first

- The property in Search Console / analytics (or ask for access).
- The priority pages or templates that matter most to the business.
- The competitor set, if known.

## Do

1. Crawl and pull data: crawl errors, broken links, redirect chains,
   duplicate/thin/orphan pages, indexation state.
2. Measure Core Web Vitals (LCP, INP, CLS) and record the failing URLs.
3. Check on-page basics on priority pages: titles, meta descriptions,
   heading structure, internal links, image weight/alt.
4. Map keyword clusters to pages by intent; flag cannibalisation and
   real content gaps.
5. Run the `kb/checklists/seo-audit-ready.md` checklist.

## Deliver

Findings grouped **Technical / On-page / Content**, each with a
severity, affected URLs, and a concrete fix. Attach a monitoring plan
(metric, baseline, target). No black-hat recommendations. Mark any
unavailable metric as unknown — never invent one.
