# Development Guide

## Project goal

742cli is a small research codebase for exploring AI-assisted developer workflows in a CLI-first environment. The repository favors deterministic, inspectable behavior before any provider-backed automation.

## Local workflow

```bash
bun install
bun run src/cli.ts demo
bun test
bun run typecheck
```

If Bun installation runs into cache issues on Windows, use `npm install --package-lock=false` once to install local dev dependencies, then continue using Bun commands for development.

## CLI surface

The current CLI entrypoint is `src/cli.ts`.

Available commands:

- `list`
- `workflow <name>`
- `brief <topic>`
- `demo`

Shared workflow definitions live in `src/core/workflows.ts`.

## How to extend the project

### Add a new workflow template

1. Add a new item to the workflow catalog in `src/core/workflows.ts`.
2. Keep the output deterministic so tests stay stable.
3. Add or update tests in `tests/workflows.test.ts`.
4. Document the new use case in `examples/workflows.md` if it is reviewer-facing.

### Improve the CLI

When adding commands, keep the first milestone principles intact:

- commands should have a no-secrets path when possible
- outputs should be readable in terminal screenshots
- examples and docs should evolve with the command surface

## Validation

Before opening a PR or sharing the repository:

1. Run `bun test`.
2. Run `bun run src/cli.ts demo`.
3. Run `bun run src/cli.ts workflow repo-audit`.
4. Run `bun run typecheck`.

## Near-term roadmap

- expand workflow coverage for issue triage and release preparation
- add structured output modes for workflow artifacts
- introduce real model-provider integration behind a clearly documented interface
