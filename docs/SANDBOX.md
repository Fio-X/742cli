# Community Demo Sandbox Plan

## Purpose

The sandbox is a public, reproducible environment that lets contributors and reviewers try `742cli` workflows without deep local setup.

Primary goals:

- show a working path from prompt idea to workflow artifact
- help users validate changes before opening pull requests
- provide a shared baseline for issue reproduction

## What the Sandbox Includes

- core CLI commands (`list`, `workflow`, `brief`, `demo`)
- example workflow artifacts from `examples/workflows.md`
- a fixed project state that matches CI expectations

## What the Sandbox Does Not Include

- production credentials
- long-lived user data
- unrestricted arbitrary command execution

## Security and Privacy Baseline

- no real API keys are stored in the sandbox
- logs are redacted before publication
- only non-sensitive sample inputs are used
- workflow examples are deterministic and reviewable

## Rollout Plan

1. Publish a first public sandbox script and setup guide.
2. Add contributor instructions for reproducing sandbox behavior locally.
3. Collect community feedback and track improvements in `CHANGELOG.md`.

## Success Criteria

- new users can run a full demo path in under 10 minutes
- bug reports include reproducible steps using sandbox baseline
- workflow examples stay aligned with repository CI checks
