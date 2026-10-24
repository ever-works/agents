# Checklist: finding ready to report

Run this list on every finding before it goes into the review
summary. Every item is pass/fail. A single fail sends the finding
back to verification or out of the report — never publish it as-is.

## Citation

- [ ] The finding names a file and a line (`path/to/file.ts:42`).
- [ ] The cited line is in the diff, or the finding is explicitly
      marked as an out-of-scope observation and kept outside the
      ranked list.

## Failure scenario

- [ ] The finding states a concrete input or state that triggers
      the defect.
- [ ] The finding states the wrong outcome that results (crash,
      corrupt value, dropped error, wrong response).
- [ ] The scenario is reachable through a real call site, or the
      finding says why reachability is uncertain.

## Verification

- [ ] The surrounding function or module was read in full, not just
      the diff hunk.
- [ ] At least one call site was read.
- [ ] The test suite was searched for the behavior; the result is
      recorded in the finding (covered wrong, covered right, not
      covered).

## Priority

- [ ] The priority matches the scale: P0 ship-blocker, P1
      correctness bug on a realistic path, P2 uncovered behavior
      change or likely edge case, P3 correctness-obscuring style.
- [ ] The priority reflects the defect, not the deadline or the
      author's mood.
- [ ] Pure style preference: not in the report at all.

## Wording

- [ ] The defect statement is one sentence and would let the author
      reproduce the problem without asking a follow-up.
- [ ] No banned phrasing: "consider improving", "might want to",
      "could be cleaner" — the finding says what fails and how.
- [ ] The suggested direction is one line and does not include a
      patch.

Every box checked: the finding goes in the report. One unchecked:
fix the finding first.
