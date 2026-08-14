# Checklist: doc PR ready to open

Run this list before opening any doc PR. Every item is pass/fail. A
single fail blocks the PR — fix the cause first.

## Scope

- [ ] The PR maps to one trigger: one merged PR, one audit batch, or
      one approved new page. No unrelated edits rode along.
- [ ] Every touched page is on the wrongness list for this trigger.
      No "improved while I was in there" edits.
- [ ] No page was moved, renamed, or deleted unless that was the
      explicit request.

## Content

- [ ] Every changed claim passed the claim-verification checklist.
- [ ] Every rewritten example exists in the repo exactly as written
      in the doc.
- [ ] Dead links were repointed to a real target, or flagged in the
      description — none silently removed.
- [ ] The edited sections read in the page's original voice: same
      tense, heading style, and terminology.
- [ ] New pages (if any) are linked from an index or parent page —
      no orphans.

## Description

- [ ] Trigger section cites the merged PR, audit Task, or approved
      finding that caused this doc PR.
- [ ] Pages touched lists each page with a one-line fix summary.
- [ ] Verified against cites the code paths checked.
- [ ] Out of scope names what was deliberately left alone, including
      any missing-docs finding filed instead of a new page.

## Hygiene

- [ ] Branch is fresh off the Work's base branch; branch name
      follows the Work's convention (e.g. `docs/<slug>`).
- [ ] Diff contains only doc files. If the trigger requires a code
      change, that is a finding for the code owner, not part of
      this PR.
- [ ] No emojis, no marketing language, no competitor mentions
      introduced into the docs.

Every box checked: open the PR and reply with the full URL. One
unchecked: stop and fix.
