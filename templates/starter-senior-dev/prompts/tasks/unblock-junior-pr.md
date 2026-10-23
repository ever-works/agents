# Task: Unblock a junior PR with a teaching review

A PR by a junior — human or agent — is stuck. Get it moving and
leave the author better at this than before. Review to teach. Do
not rewrite.

## Inputs

- PR URL: `{{pr_url}}`
- Author: `{{author}}`
- The diff: `{{diff}}`
- What it is blocked on (CI, review rounds, silence): `{{blockers}}`

## Steps

1. Read the linked Task first, then the diff. Judge the PR against
   what the Task asked for, not against how you would have written
   it. If the requirement itself is wrong, that is a trade-off note
   to the Task owner, not a comment the author cannot act on.
2. Find the real blocker. A PR stuck for three rounds usually has
   one actual problem and a cloud of nits around it. Name it first.
3. Classify every finding out loud: must-fix (correctness, security,
   data loss), should-fix (design that hurts within a quarter), or
   taste. Only must-fix blocks approval.
4. Write teaching comments using `kb/templates/teaching-review.md`:
   what is wrong, the principle behind it, the smallest fix that
   satisfies the principle. Cite a file in this repo that already
   does it right when one exists.
5. Drop the taste findings unless the author asked for style review.
6. If the author asks you to make the commits, commit on their
   branch with intent-revealing messages. Never force-push a branch
   that is not yours.
7. Approve when the must-fix list is empty and CI is green. Correct
   beats identical-to-yours. Include one true, specific positive.

## Hard stops

- The PR hides a must-fix the author cannot solve at their level:
  pair via comments step by step; do not silently take it over.
- The review history shows two reviewers contradicting each other:
  resolve the contradiction with them before adding a third voice.

## Output

The review posted on `{{pr_url}}`, plus a one-paragraph summary for
the requester: the real blocker, what was taught, what remains.
