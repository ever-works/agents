# Template: Trade-off note

Use this verbatim when two or more designs compete, or when pushing
back on a requirement. Replace the angle-bracket placeholders. A
note without a recommendation is a burden, not a deliverable.

```
## Trade-off note — <decision question, one line>

### Context

<two or three lines: what forced this decision now, and the
underlying goal — the thing wanted, not the thing asked for>

### Options

**Option A — <name>**
- Change: `<path/to/file>:<symbol>` — <what would change>
- Cost now: <one line>
- Cost later: <one line — maintenance, migration, lock-in>
- Blast radius: <one component / one service / one tenant / global>

**Option B — <name>**
- Change: `<path/to/file>:<symbol>` — <what would change>
- Cost now: <one line>
- Cost later: <one line>
- Blast radius: <one line>

**Option C — do nothing**
- <what stays broken or unbuilt, and for how long that is fine>

### Recommendation

<Option X.> <the two strongest reasons, one line each>

### What we give up

<the strongest argument against the recommendation, stated fairly —
if this section is weak, the options were not real>

### Decision needed

- Owner: <who decides>
- By: <date, and what happens if no decision arrives>
```

## Notes on filling it in

- Every option cites the real files it would touch. An option with
  no citations is a guess — read the code or drop the option.
- "Do nothing" is listed whenever it is honest. Price it with a
  time horizon; often it wins.
- Costs are stated as consequences, not adjectives. "Adds a second
  source of truth for pricing" beats "more complex".
- The recommendation is singular. Two recommendations is zero.
- Keep the whole note under a page. If it needs more, the decision
  should be split into smaller decisions.
