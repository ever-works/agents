# Checklist — Candidate entry is ready for editor review

Run this checklist before submitting a candidate entry. Every item is
pass/fail. A single fail blocks submission.

## Dedup

- [ ] Searched the index for the candidate's name, repository URL,
      and any obvious alias. No near-match found, or near-match was
      resolved per the near-duplicate playbook.
- [ ] If a relationship to an existing entry exists (fork,
      successor), `relatedTo` is populated.

## Primary sources

- [ ] Fetched the candidate's homepage in this run. URL recorded.
- [ ] Fetched the candidate's repository if one exists. URL recorded.
- [ ] No fact in the YAML record comes from LLM memory or a
      secondary aggregator.

## YAML record

- [ ] Validates against the directory's schema.
- [ ] `status: candidate`.
- [ ] `requireAllApprovers: true`.
- [ ] `name`, `homepage`, `slug` are populated.
- [ ] `license` is populated, or left blank with a flag to the editor
      because the project does not state one.
- [ ] `lastRelease` is populated from the repository's release data,
      or left blank with a flag if no releases exist.

## Taxonomy

- [ ] Every tag on the candidate exists in the directory's taxonomy.
- [ ] If a new tag is proposed, a one-sentence justification is
      attached explaining why no existing tag fits.

## Entry page

- [ ] Two paragraphs. Paragraph one says what the project is.
      Paragraph two says what it does and who uses it.
- [ ] No verbatim copy from the project's site. Paraphrased.
- [ ] Descriptive, not evaluative. No "great", "powerful", "best".
- [ ] No emojis.

## Voice

- [ ] First sentence pattern matches sampled existing entries.
- [ ] Sentence length and tense match the directory's voice.

Any unchecked box: fix it before submitting. Do not submit "mostly
ready" candidates.
