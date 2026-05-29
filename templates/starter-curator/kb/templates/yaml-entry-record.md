# Template — YAML entry record

Use this shape for every candidate entry. Field names map to the
directory's schema; adjust to the wired-up directory's exact schema
on first run, but keep the structure and the status/approval fields
identical.

```yaml
slug: <kebab-case-project-name>
name: <Display Name>
status: candidate          # candidate | published | archived
requireAllApprovers: true

homepage: https://<project-homepage>
repository: https://github.com/<owner>/<repo>   # omit if no repo
docs: https://<docs-site>                       # omit if same as homepage

license: <SPDX id, e.g. MIT, Apache-2.0>        # blank if not stated; flag to editor
pricing: <free | freemium | paid | unknown>     # unknown if not stated on a primary page

lastRelease:
  version: v<x.y.z>                             # blank if no releases
  date: YYYY-MM-DD                              # blank if no releases

tags:
  - <existing-tag>
  - <existing-tag>
# proposedTags only if no existing tag fits — include justification in PR body
proposedTags: []

relatedTo: <slug-of-related-entry>              # omit unless a relationship exists

sources:
  - https://<primary-url-fetched-in-this-run>
  - https://<primary-url-fetched-in-this-run>

submittedBy: starter-curator
submittedAt: YYYY-MM-DDTHH:MM:SSZ
```

## Companion entry page

A two-paragraph markdown page sits next to the YAML record. Shape:

```
# <Display Name>

<Paragraph 1: one or two sentences saying what the project is.
Mirror the voice of existing entries. Paraphrased, never copied.>

<Paragraph 2: one or two sentences saying what the project does and
who uses it. Descriptive, not evaluative.>

Sources: <bulleted list of the primary URLs from sources[] above>
```

## Rules

- Leave a field blank rather than guessing.
- Every blank field that should have data gets a one-line flag in
  the submission body so the editor knows to fill it.
- `sources` must list every URL fetched in this run that informed
  the record. The editor uses it to spot-check facts.
