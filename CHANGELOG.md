# Changelog

All notable changes to this project are documented in this file.

The format is based on Keep a Changelog, and this project follows pre-1.0 milestone releases.

## [Unreleased]

### Planned

- security response workflow improvements for contributor reports
- community demo sandbox alpha documentation and setup path
- expanded AI workflow templates for triage and release prep

## [0.2.0] - 2026-03-13

### Added

- MIT license file (`LICENSE`)
- GitHub Actions CI workflow (`.github/workflows/ci.yml`)
- lockfile-based reproducibility (`bun.lock`)
- security policy (`SECURITY.md`)
- six-month milestone roadmap (`ROADMAP.md`)
- sandbox plan (`docs/SANDBOX.md`)
- repository changelog (`CHANGELOG.md`)

### Changed

- `README.md` now includes quality badges and links to governance/project docs
- `docs/DEVELOPMENT.md` now references CI baseline checks

## [0.1.0] - 2026-03-12

### Added

- initial runnable CLI skeleton (`src/cli.ts`, `src/core/workflows.ts`)
- test coverage for workflow behavior (`tests/workflows.test.ts`)
- example workflow docs (`examples/workflows.md`)
- development guide (`docs/DEVELOPMENT.md`)
