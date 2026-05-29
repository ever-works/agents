# Template: Investigation note

Use this when the Task you were given is larger than its scope.
Do not write code. Write the note. The point is to give the human
enough information to split the Task cleanly in one pass.

```
## Investigation note — <original Task title>

### Finding

<one paragraph: what the Task asked for, what the code actually needs,
why the gap exists. Stay factual; cite files.>

### What the Task asked for

- <bullet from the original Task description>
- <bullet from the original Task description>

### What the code actually needs

- `<path/to/file>:<symbol>` — <what would have to change here>
- `<path/to/file>:<symbol>` — <what would have to change here>
- <shared module / service> — <change required>

### Proposed split

1. **<sub-Task title>** — <one-line acceptance criterion>
2. **<sub-Task title>** — <one-line acceptance criterion>
3. **<sub-Task title>** — <one-line acceptance criterion>

### Dependencies

- <sub-Task 2> blocks on <sub-Task 1> merging because <reason>.
- <sub-Task 3> can run in parallel.

### Risks the original Task missed

- <invariant the new design must preserve>
- <public API change and who consumes it>
- <migration / rollout consideration>

### What I did not change

- No commits on a shared branch.
- Branch `<branch_name>` is local-only (if applicable) and can be
  discarded.
```

## When to use this template

- Mid-implementation, you realise the change touches more than three
  unrelated files.
- A reviewer asks for a behaviour change that belongs in a different
  Task.
- The Task description and the code disagree on what is supposed to
  happen, and resolving it requires a design call.

## When NOT to use this template

- The Task is just slightly larger than expected. Finish it as one PR
  and note the size in the PR description.
- A single named invariant is harder to satisfy than expected. That
  is still the same Task.
