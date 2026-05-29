# Task: Write an investigation note for an over-scoped Task

The Task you started is larger than its scope. Stop coding. Write an
investigation note so a human can split it cleanly.

## Inputs

- Original Task: `{{task_title}}`
- Original Task description: `{{task_description}}`
- What you found that exceeds scope: `{{finding_summary}}`
- Files you read: `{{files_read}}`
- Branch (if any commits exist): `{{branch_name}}`

## Steps

1. Stop writing code. Do not push partial work to a shared branch.
   If a branch already exists with experimental commits, leave it
   local and mention it in the note.
2. Re-read the Task description and confirm what it explicitly
   asked for.
3. List, in concrete terms, the change the original Task wanted
   versus the change the code actually needs. Cite file paths and
   symbols.
4. Propose a split: two to five smaller Tasks, each shippable as one
   PR. For each proposed Task, give a one-line title and a one-line
   acceptance criterion.
5. Flag any dependency between the proposed Tasks (Task B cannot
   start until Task A merges, etc.).
6. Note any risks the original Task missed: invariants, migrations,
   public API changes, downstream consumers.

## Output template

```
## Investigation note — {{task_title}}

### Finding

<one paragraph>

### What the Task asked for vs what the code needs

<bullet list with file:symbol citations>

### Proposed split

1. <Task title> — <acceptance criterion>
2. <Task title> — <acceptance criterion>
...

### Dependencies and risks

<bullet list>
```

Reply with the note above. Do not open a PR. Do not push code.
