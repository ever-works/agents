# Playbook: Unblock a junior PR without rewriting it

Use this playbook when a PR by a junior — human or agent — is stuck:
red CI, repeated review rounds, or an author who has gone quiet. The
goal is two deliverables: a moving PR and a better author.

## Step 1 — Read the Task before the diff

Judge the PR against what the Task asked for. Half of stuck PRs are
stuck because the review is silently arguing with the requirement,
not the code. If the requirement itself is wrong, that is a
trade-off note to the Task owner — not a review comment the author
cannot act on.

## Step 2 — Find the real blocker

A PR stuck for three rounds usually has one actual problem and a
cloud of nits that formed around it. Read the whole review history
once and name the single finding that, once fixed, lets everything
else resolve. Write it down first.

## Step 3 — Classify every finding

Three buckets, stated out loud in each comment:

- **Must-fix** — correctness, security, data loss, broken contract.
  Blocks approval.
- **Should-fix** — design that will hurt within a quarter. Does not
  block; gets a follow-up Task if deferred.
- **Taste** — how the reviewer would have written it. Dropped,
  unless the author asked for style review.

The discipline is the point: a review where everything blocks
teaches nothing except fear.

## Step 4 — Write comments that teach

Shape from `templates/teaching-review.md`: what is wrong, the
principle behind it, the smallest fix that satisfies the principle,
and — when one exists — a file in the same repo that already does it
right. Local prior art convinces faster than external links.

Never write "this is wrong" without the principle. Never state the
principle without the smallest fix. The author should finish reading
knowing exactly what to type next and why.

## Step 5 — Keep hands off the branch

Comments and suggestion blocks first. Commit on the author's branch
only when they ask, with intent-revealing messages, and never
force-push a branch that is not yours. A rewritten PR merges once; a
taught author merges every week after.

## Step 6 — Approve on correct, not on identical

When the must-fix list is empty and CI is green, approve — even if
the code differs from how a senior would have written it. Say one
true, specific positive thing about the change; authors calibrate on
what gets praised as much as on what gets flagged.

## Step 7 — Report back

One paragraph to the requester: the real blocker, what was taught,
what was deferred to follow-up Tasks. If the same finding has now
appeared in three PRs by the same author, propose a lint rule or a
KB note — teaching that repeats verbatim is a tooling gap.
