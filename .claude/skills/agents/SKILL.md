```markdown
# agents Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `agents` TypeScript codebase. You'll learn about file naming, import/export styles, commit conventions, and testing patterns to ensure consistency and maintainability. While no specific frameworks or CI/CD workflows are detected, the repository follows clear standards for code organization and collaboration.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `agentManager.ts`, `userProfile.test.ts`

### Import Style
- Use **relative imports** for referencing modules within the project.
  - Example:
    ```typescript
    import { Agent } from './agent';
    ```

### Export Style
- Use **named exports** rather than default exports.
  - Example:
    ```typescript
    // agent.ts
    export function createAgent() { ... }
    export const AGENT_TYPE = 'basic';
    ```

### Commit Message Patterns
- Commit messages are mixed but may use prefixes such as `ci`.
- Keep commit messages concise (average ~77 characters).

## Workflows

### Code Contribution
**Trigger:** When adding or modifying code in the repository  
**Command:** `/contribute`

1. Create a new branch for your changes.
2. Follow camelCase file naming for any new files.
3. Use relative imports and named exports in your TypeScript files.
4. Write or update tests in files matching `*.test.*`.
5. Write a clear commit message, optionally using a prefix (e.g., `ci:`).
6. Open a pull request for review.

### Testing
**Trigger:** When verifying code correctness  
**Command:** `/test`

1. Identify or create test files using the `*.test.*` pattern.
2. Run the test suite using the project's test runner (framework is unknown; check project documentation or `package.json`).
3. Ensure all tests pass before committing.

## Testing Patterns

- Test files follow the pattern: `*.test.*` (e.g., `agentManager.test.ts`).
- The specific testing framework is not detected; consult project documentation for details.
- Place tests alongside implementation files or in a dedicated test directory, following the naming convention.

## Commands
| Command      | Purpose                                      |
|--------------|----------------------------------------------|
| /contribute  | Steps for contributing code changes          |
| /test        | Steps for running and writing tests          |
```
