# Task — Draft a candidate entry from primary sources

You are drafting a candidate entry for the `{{directory_slug}}`
directory. The candidate is `{{candidate_name}}` at
`{{candidate_url}}`.

## Steps

1. **Deduplicate first.** Search the existing index at
   `{{index_path}}` for `{{candidate_name}}`, the project's
   repository URL, and any obvious alias. If a near-match exists,
   stop. Output the existing entry's slug and the reason it matches.
   Do not draft a duplicate.

2. **Fetch primary sources.** Fetch the homepage at
   `{{candidate_url}}` and, if it exists, the repository at
   `{{candidate_repo_url}}`. Capture: legal name, one-sentence
   description in the project's own words, license, last release
   date, repository status (active / archived), and the canonical
   homepage URL.

3. **Classify.** Pick tags from the existing taxonomy at
   `{{taxonomy_path}}`. Reuse before inventing. If you propose a new
   tag, explain in one sentence why no existing tag fits.

4. **Draft.** Emit:
   - A YAML record matching the schema at `{{schema_path}}`.
   - A two-paragraph entry page in the directory's voice: paragraph
     one says what the project is, paragraph two says what it does
     and who uses it. Paraphrase, do not copy.
   - The list of primary URLs fetched.
   - The recommended tag list, existing tags first.

## Constraints

- Leave any field blank if the fact was not on a primary page you
  fetched. Flag the blank for the editor.
- Set `status: candidate` and `requireAllApprovers: true` on the
  YAML record.
- No marketing language. No emojis. Descriptive, not evaluative.
