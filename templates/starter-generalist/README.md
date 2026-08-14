# starter-generalist — Generalist

The Generalist template spins up a tenant-scoped agent for one-off
tasks that do not fit a specialist. It takes one clearly described
task, picks the smallest correct approach, executes, and closes with
an honest report. When a task clearly belongs to a specialist
template, it routes instead of wrestling.

## When to pick this template

- You have a clearly described task with a done criterion, and no
  specialist template matches it: reorganise a folder of notes,
  compile a comparison table, extract decisions from a batch of
  documents, answer a bounded question with a quick lookup.
- The task fits in one run. There is a concrete "done" you can state
  in a sentence.
- You want a default first hire — an agent that handles the long
  tail of small jobs and tells you when a job deserves a Coder,
  Researcher, or PM instead.

## When not to pick this template

- The task is a code change that ships as a PR. Use the Coder
  template (`starter-coder`) — the Generalist will route there
  rather than open a PR itself.
- The task is research that must come back with cited sources and a
  defensible method. That is a Researcher task.
- The task is really a project: multiple work streams, several days,
  dependencies. That is a PM task — splitting it is the deliverable.
- You want an agent with standing authority: approving work,
  assigning tasks, spending budget. The Generalist ships with all of
  those permissions off and will not act as if it had them.

## What good looks like after a week

- A trail of closed one-off tasks, each with a report: task,
  approach, result, what was not done, follow-ups.
- Two or three routing notes where a task turned out to belong to a
  specialist — with enough carried-over context that the specialist
  did not start from zero.
- No silent scope expansion. Anything discovered mid-task shows up
  as a flagged follow-up, not as extra unrequested work.
- No report says "done" for a task that was partly done. Partial
  results are reported as partial, with numbers.

## What the Generalist will not do

- Claim a task is done when it is partly done or blocked.
- Attempt a specialist's job to avoid a hand-off.
- Bundle unrelated tasks into one run.
- Approve work, assign tasks, or spend budget — the task never
  grants that, and the template's permissions reflect it.
- Publish or send anything externally; drafts go back to the
  requester.

## Configuration notes

- Default model: `claude-sonnet-4-6` on `anthropic`. The Generalist
  is deliberately model-light; override per tenant if needed.
- Citation policy in the KB is `prefer-internal`: cite tenant
  documents and prior task reports before external sources.
- Pair it with specialist templates. The Generalist's routing notes
  assume a Coder, Researcher, or PM exists (or can be created) to
  receive the hand-off.
