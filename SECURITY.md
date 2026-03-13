# Security Policy

## Scope

This project handles AI workflow metadata and may process API credentials in local development environments. Security priorities are:

- prevent secret exposure in code and logs
- keep routing logic explicit and auditable
- enforce least-privilege defaults

## Supported Versions

Security fixes are provided for the latest `main` branch state.

## Reporting a Vulnerability

If you find a security issue:

1. Do not publish secrets or exploit details in a public issue.
2. Contact the maintainer through GitHub profile messaging, or use GitHub private vulnerability reporting if available for this repository.
3. Include reproduction steps, impact, and suggested mitigation.

We aim to acknowledge reports within 72 hours and publish a fix plan after triage.

## Security Controls

- Secrets must never be committed (API keys, tokens, private prompts).
- Logs and examples must redact sensitive values.
- CI runs automated checks (`bun test`, `typecheck`, CLI smoke checks) on pull requests.
- Dependency reproducibility is enforced with `bun.lock` and `bun install --frozen-lockfile`.

## Recommended Maintainer Workflow

Before merging security-sensitive changes:

1. Review routing and permission boundaries.
2. Re-run the full validation checklist from `docs/DEVELOPMENT.md`.
3. Confirm no sensitive material appears in examples, fixtures, or logs.
