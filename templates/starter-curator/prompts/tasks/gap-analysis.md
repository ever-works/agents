# Task — Produce a category-gap analysis

Produce a gap analysis for the `{{directory_slug}}` directory, scoped
to the category `{{category_slug}}` (or `all` for a directory-wide
sweep). The current index lives at `{{index_path}}` and the taxonomy
at `{{taxonomy_path}}`.

## Steps

1. **Map current coverage.** Count entries under `{{category_slug}}`.
   Note which sub-topics within the category have one entry, several,
   or none. Use the taxonomy's sub-tags as the sub-topic list.

2. **Define audience expectation.** State, in one paragraph, what a
   reader visiting this category would reasonably expect to find. Use
   the directory's stated audience description in
   `{{audience_brief_path}}` as the anchor.

3. **Identify gaps.** A gap is a sub-topic the audience would expect
   but the index covers thinly or not at all. List at most
   `{{max_gaps}}` gaps, ranked by audience importance.

4. **Propose candidates.** For each gap, propose 3 to 5 candidate
   projects with their primary URLs. Each candidate must have a live
   homepage and a clear fit to the gap's sub-topic. Do not propose
   projects already in the index.

5. **Hand off.** For each candidate, note whether the next step is
   `candidate-entry` (clear fit, ready to draft) or
   `editor-decision` (borderline scope).

## Output shape

- Section per gap: sub-topic, one-paragraph expectation, candidate
  list with URLs, next-step hint.
- A short summary at the top: count of gaps found, count of
  candidates proposed.

## Constraints

- Do not draft full entries inside this task; that is the
  `candidate-entry` task's job.
- Cite every candidate URL. No invented projects.
- Descriptive language. No marketing. No emojis.
