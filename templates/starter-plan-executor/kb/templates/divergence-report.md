# Template: Divergence report

Use this when a step cannot land as written. Do not write code. The
point is to give the Planner or approver enough to decide in one
pass — and nothing that looks like a decision already made.

```
## Divergence report — <plan title>, step <n>

### Status

- Last verified step: <n-1> (branch `<branch_name>` holds it,
  pushed: yes/no)
- Execution: halted, awaiting decision

### The step as written

> <verbatim text of the diverging step>

### What the plan expected

- `<path/to/file>:<symbol>` — <the assumption the plan made>

### What the repo actually contains

- `<path/to/file>:<symbol>` — <what is really there, on fresh
  `origin/<base>`>

### Classification

<one of: moved or renamed | API or schema changed | impossible as
written | missing prerequisite | plan gap>

### Options

1. **<option title>** — <one line: outcome>. Cost: <one line:
   effort / risk / what it touches>.
2. **<option title>** — <one line: outcome>. Cost: <one line>.
3. **Revise the plan** — <one line: which steps need rewriting>.

### Impact on remaining steps

- Blocked: steps <n..m> — <reason>.
- Independent: steps <x, y> — could proceed on explicit
  approval; not started.

### Decision needed from

<approver / Planner> — execution resumes on an updated plan or an
explicit option choice.
```

## Notes on filling it in

- Quote the step verbatim. The decider should not have to open the
  plan to understand the report.
- Expected vs found must cite real paths and symbols, checked
  against a freshly fetched base branch — not memory.
- Options are outcomes with costs, not implementations. No diffs,
  no code blocks, no "I already started option 1".
- Two options minimum, three maximum. One option is a decision in
  disguise; four is a menu nobody reads.
- If any remaining steps are independent, say so explicitly —
  silence reads as "everything is blocked".
