# Checklist: claim verification

Run this list for every claim about to be written into a doc. Every
item is pass/fail. A single fail means the claim does not go in —
verify it, rewrite it, or flag the gap instead.

## Source

- [ ] The claim traces to the current code or the merged PR that
      shipped the behavior — not to memory, not to the Task
      description, not to the PR's stated intent.
- [ ] The code was read at the current tip of the base branch, not
      from a stale checkout.

## Commands and examples

- [ ] Every command exists in the repo: the script, binary, or
      package.json entry it invokes is present as written.
- [ ] Every flag and option in the example is accepted by the
      current code, with the spelling the code uses.
- [ ] Every file path in the example exists at that path today.
- [ ] Code snippets compile against the current signatures — copied
      from the repo, not retyped from memory.

## Config and interfaces

- [ ] Config keys are spelled exactly as the code reads them, and
      stated defaults match the code's defaults.
- [ ] Endpoints, routes, and event names exist in the current
      router / registry, with the exact prefix the code mounts.
- [ ] Environment variables named in the doc are actually read
      somewhere in the code.

## Links and citations

- [ ] Every internal link in the edited section resolves.
- [ ] Non-trivial claims cite a file path or PR number.
- [ ] No external text pasted without attribution and a reason.

## Honesty

- [ ] Nothing in the claim is inferred beyond what the code shows.
      "Probably", "should", and "presumably" are flags, not filler.
- [ ] If any box above could not be checked, the claim was left out
      and the gap flagged in the PR description.

Every box checked: write the claim. One unchecked: stop.
