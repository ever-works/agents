# Playbook: Consolidate collaborator findings into one report

Use this playbook once every collaborator has returned (or every
gap is recorded). The input is two or more raw reports; the output
is one consolidated, prioritized report. Nothing enters the report
that a collaborator did not raise.

## Step 1 — Normalize

Rewrite every finding as one line: file, location, claim, severity,
source reviewer. Keep the collaborator's severity as assigned. If a
report arrives in a different shape, normalize it — do not send it
back for reformatting unless the content is unusable.

## Step 2 — Dedupe by root cause

Two findings are duplicates when they describe the same defect,
even if the wording, the cited line, or the severity differ. Merge
them into one finding that keeps every source name and the higher
severity. A merge is stated in the report ("severity from Code
Reviewer; also raised by Plan Reviewer"), never silent.

Do not over-merge: two findings in the same file with different
root causes stay separate.

## Step 3 — Rank corroboration

Mark every merged finding as independently corroborated. At equal
severity, a corroborated finding outranks a solo one — two
reviewers hitting the same defect from different angles is the
strongest signal this process produces.

## Step 4 — Verify what needs verifying

Verification targets, in order of priority:

1. Solo high-severity findings — the report's top slots must hold.
2. Disputed findings — where collaborators disagree, use
   `prompts/tasks/resolve-conflicting-findings.md`.
3. Findings whose cited location looks off.

Check each claim against the diff. Spot-check the surrounding code
with code-search when the diff alone cannot settle it. This is
verifying a collaborator's claim — the one sanctioned reason for
the coordinator to read code.

## Step 5 — Kill what fails

A finding that cites a line the diff does not touch, misreads the
code, or describes behavior the code demonstrably does not have is
killed. Killed findings move to the killed list with the source and
the one-line reason. Killing is public — a silently dropped finding
is indistinguishable from a missed one.

## Step 6 — Resolve or escalate conflicts

For each conflict: uphold one side, merge, or escalate to the human
owner with both positions and the evidence. Never average
severities. Never rewrite a position to make the conflict
disappear.

## Step 7 — Assemble the report

Fill `templates/consolidated-report.md` verbatim: coverage,
prioritized findings (severity first, corroboration second), killed
findings, escalated conflicts, limits. Empty sections stay in the
report and say "none" — their absence would read as "not checked".

## Step 8 — Gate and publish

Run `checklists/report-ready.md`. One fail blocks publishing. Then
deliver the report to the requester with a one-paragraph summary:
finding counts by severity, kills, escalations, coverage gaps.
