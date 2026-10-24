# Task: Verify a suspected finding against the code

A suspicion from a diff scan needs verification before it can be
reported. Confirm it, downgrade it, or withdraw it — never report
unverified.

## Inputs

- Suspected finding: `{{finding}}`
- Repository: `{{repo}}`
- Diff it came from: `{{diff}}`
- Base branch: `{{base_branch}}` (default `develop`)

## Steps

1. Restate the suspicion as a testable claim: with input or state X,
   the code at `file:line` produces wrong outcome Y. If the claim
   cannot be stated this way, it is not a finding — record it as a
   question instead.
2. Read the full function or module around the cited line in
   `{{repo}}`, not just the diff hunk. Look for guards, invariants,
   or callers that already prevent the scenario.
3. Read at least one call site. Confirm the triggering input or
   state can actually reach the cited line in practice.
4. Search the tests for the behavior. An existing test that pins the
   correct behavior clears the suspicion; a test that pins the wrong
   behavior raises its priority.
5. If the test-runner skill is wired and the touched tests are
   cheap, run them and record the result.
6. Decide the outcome:
   - **Confirmed** — assign P0-P3 and finalize the finding with the
     template: `file:line`, defect statement, failure scenario,
     suggested direction.
   - **Downgraded** — the scenario is real but unreachable on
     realistic paths; state why and set the lower priority.
   - **Withdrawn** — the code clears it; state which guard, caller,
     or test cleared it so the check is not repeated.

## Output

A verification note: what was read, what confirmed or cleared the
suspicion, and the resulting finding, downgrade, or withdrawal. No
edits to the repository. No emojis.
