# Checklist: PR ready for human reviewer

Run this list before tagging the human reviewer. The point is that
the human spends their attention on the design call, not on the
mechanics the agent should already have handled.

## Description

- [ ] Title is under 70 characters and describes the change, not the
      Task ID alone.
- [ ] Summary section is three lines: what changed, why, scope
      boundary.
- [ ] What changed section lists each touched file or area with a
      one-line note.
- [ ] Test plan section is a real checklist, not "tests added".
- [ ] Risk and rollback section names a concrete risk and a concrete
      rollback (revert PR, revert commit, feature flag off).
- [ ] Linked Task or issue is referenced.

## CI and bots

- [ ] CI is green on the latest commit.
- [ ] Codex / CodeRabbit / Greptile / Copilot have all posted a
      review, and every P1 and P2 finding is either fixed or
      explained in a reply.
- [ ] No bot finding is silently resolved without a fix or a reply.

## Diff

- [ ] Diff matches the Task scope. Unrelated changes are pulled into
      a separate PR.
- [ ] No `--no-verify` commits in the branch history (check with
      `git log --format='%H %s' origin/<base>..HEAD`).
- [ ] No deleted tests. No skipped tests added in this PR.
- [ ] No secrets, no `.env`, no key material.

## Self-review

- [ ] Walked the diff one more time looking for the kind of bug the
      tests do not catch: off-by-one, null contracts, dropped error
      paths, log levels.
- [ ] Confirmed the change works against the actual behaviour the
      Task asked for, not just the tests.

## Hand-off

- [ ] User-facing reply includes the full PR URL, not bare `#NN`.
- [ ] Reviewer is tagged (the Work's designated reviewer, or the
      requester if the Work has no policy).
- [ ] Any deferred follow-ups are filed as new Tasks with links in
      the PR.

Every box checked: hand off. One unchecked: address before tagging.
