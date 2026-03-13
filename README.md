# 742cli

[![CI](https://github.com/Fio-X/742cli/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Fio-X/742cli/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

742cli is a lightweight research CLI for designing, testing, and documenting AI-assisted developer workflows.

The current milestone focuses on a simple but important goal: turn vague AI-tooling experiments into repository-native artifacts that reviewers and collaborators can inspect quickly. Instead of keeping ideas in chat logs, 742cli pushes them into runnable commands, example workflows, and development notes.

## Why this project exists

- Explore how AI can support terminal-first developer workflows without hiding the process.
- Keep experiments small, deterministic, and easy to review.
- Document prompt shapes, workflow stages, and repository decisions in plain files.

## Current milestone

This repository now ships a minimal CLI surface for workflow planning and repo-audit experiments:

- `list` shows the current workflow templates.
- `workflow <name>` prints a structured workflow for a specific scenario.
- `brief <topic>` generates a short project brief for the next milestone.
- `demo` shows the happy path for exploring the project locally.

## Quickstart

```bash
bun install
bun run src/cli.ts list
bun run src/cli.ts workflow repo-audit
bun test
```

If Bun dependency installation has cache issues on Windows, you can hydrate local dev dependencies once with:

```bash
npm install --package-lock=false
```

Then continue running the project with Bun.

## Example output

```text
Workflow: repo-audit
Goal: Turn a rough repository into a reviewer-friendly AI project.
Stages:
1. Inspect the repo structure and identify missing proof points.
2. Define a runnable happy path with minimal setup.
3. Add examples, docs, and repeatable validation commands.
```

## Repository structure

```text
src/
  cli.ts
  core/workflows.ts
examples/
  workflows.md
tests/
  workflows.test.ts
docs/
  DEVELOPMENT.md
  SANDBOX.md
SECURITY.md
ROADMAP.md
CHANGELOG.md
```

## Development approach

742cli is intentionally small at this stage. The emphasis is on making workflow research legible:

- code lives in `src/`
- reviewer-facing examples live in `examples/`
- contributor guidance lives in `docs/`
- repeatable verification lives in `tests/`

See `docs/DEVELOPMENT.md` for the local workflow, extension points, and next-step development notes.

## Quality signals

- Automated CI runs tests, type checks, and CLI smoke checks on pushes and pull requests.
- Dependencies are locked with `bun.lock` and verified in CI with `--frozen-lockfile`.
- The project is released under the MIT License (`LICENSE`).

## Security and governance docs

- Security policy: `SECURITY.md`
- Community sandbox plan: `docs/SANDBOX.md`
- Six-month delivery plan: `ROADMAP.md`
- Public change history: `CHANGELOG.md`

## Roadmap

See `ROADMAP.md` for the month-by-month plan through the next six months.

## Status

Active research prototype. The repository is moving from idea capture toward a more structured AI developer-tooling project, with an emphasis on readable artifacts, small milestones, and verifiable behavior.
