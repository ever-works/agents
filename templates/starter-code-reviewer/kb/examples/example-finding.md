# Example: Finding for a race in a diff hunk

A golden example. Use it as a reference for tone and shape.

## Input (the diff hunk under review)

```diff
--- a/packages/billing/src/credits.service.ts
+++ b/packages/billing/src/credits.service.ts
@@ -41,12 +41,10 @@ export class CreditsService {
   async consume(tenantId: string, amount: number): Promise<void> {
-    await this.repo.manager.transaction(async (em) => {
-      const row = await em.findOneOrFail(CreditBalance, {
-        where: { tenantId },
-        lock: { mode: 'pessimistic_write' },
-      });
-      if (row.balance < amount) throw new InsufficientCreditsError();
-      row.balance -= amount;
-      await em.save(row);
-    });
+    const row = await this.repo.findOneOrFail({ where: { tenantId } });
+    if (row.balance < amount) throw new InsufficientCreditsError();
+    row.balance -= amount;
+    await this.repo.save(row);
   }
```

## Output (the finding the Reviewer reported)

```
### [P0] Credit consumption lost the transaction and row lock,
allowing concurrent overspend

- **Where**: `packages/billing/src/credits.service.ts:42`
- **Failure scenario**: With balance 10, two concurrent
  `consume(tenant, 10)` calls both read balance 10, both pass the
  check, and both save — the tenant spends 20 credits from a
  balance of 10, and the second save silently overwrites the
  first. Any parallel task execution triggers this.
- **Verified by**: Read `consume` call sites —
  `packages/agent/src/runs/run-executor.ts:188` calls it once per
  task run, and runs execute concurrently per tenant. No
  serialization exists upstream. The removed pessimistic lock was
  the only guard.
- **Test status**: not covered — `credits.service.spec.ts` tests
  sequential consumption only; no concurrent-call test existed
  before or after this diff.
- **Suggested direction**: Restore the transaction with the
  pessimistic write lock, or move the decrement into a single
  conditional UPDATE that checks the balance atomically.
```

## Why this example is good

- The defect statement is one sentence and names the mechanism
  (lost lock), not a vibe ("concurrency concerns").
- The failure scenario has concrete numbers, the exact interleaving,
  and who observes the damage.
- "Verified by" shows the reviewer left the hunk: it names the real
  call site and confirms concurrency is reachable, which is what
  makes this P0 rather than a theoretical note.
- Test status distinguishes "not covered" from "covered wrong".
- The suggested direction offers two shapes in one line and writes
  no code — the fix belongs to the diff author.
