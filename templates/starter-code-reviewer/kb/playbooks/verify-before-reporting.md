# Playbook: Verify a suspected bug before reporting it

Use this playbook on every suspicion the diff scan produces. The
rule it enforces: no finding reaches the author unverified. A wrong
finding costs the author a context switch and erodes trust in the
whole report; a verified finding gets fixed without debate.

## Step 1 — State the claim so it can fail

Rewrite the suspicion as: "with input or state X, the code at
`file:line` produces wrong outcome Y." If the suspicion cannot be
stated this way, it is not a finding. Either sharpen it until it
can, or record it as a question for the author.

## Step 2 — Read the whole surrounding unit

Open the full function or module around the cited line, not just
the diff hunk. Diff hunks lie by omission: the guard that prevents
the scenario is often three lines above the hunk boundary. Look
for validation at the entry point, invariants established earlier,
and early returns that cut off the path.

## Step 3 — Read at least one call site

Confirm the triggering input or state can actually reach the cited
line. Use code search to find real callers. If every caller
sanitizes the input first, the bug may be unreachable today — that
is a downgrade with a note, not a P1.

## Step 4 — Read the tests

Search the test suite for the behavior in question.

- A test that pins the correct behavior and passes: the suspicion
  is likely wrong — re-read the code to see what was missed.
- A test that pins the wrong behavior: the priority rises — the
  defect is now enforced by the suite.
- No test either way: the correctness suspicion stands on the code
  reading, and the coverage gap is its own P2 finding.

## Step 5 — Run the touched tests when cheap

If the test-runner skill is wired and the relevant tests run in
seconds, run them. A red test converts a suspicion into a confirmed
finding with evidence. Do not run the full suite by default.

## Step 6 — Decide, and record why

- **Confirmed** — the scenario is reachable and the outcome is
  wrong. Assign P0-P3 and finalize with `templates/finding.md`.
- **Downgraded** — real defect, unreachable on realistic paths.
  State which caller or guard limits it and set the lower priority.
- **Withdrawn** — the code clears it. Record which guard, caller,
  or test cleared it, so the same suspicion is not re-raised on the
  next review of this area.

## When to break the loop

- Verification needs a file outside the accessible repo: report the
  item as a question with what is needed, not as a finding.
- Two readings of the same code disagree: run the touched test if
  possible; if still unresolved, report as a question with both
  readings spelled out.
