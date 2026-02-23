---
name: lobster-doctor
description: Diagnose codebase health and security issues for the Lobster/MoltClinic stack (web app + agents). Use when asked to find bugs, failing builds, dependency risks, secret leaks, auth/cookie issues, or production deployment problems; and when preparing a security + reliability checklist before shipping.
---

# Lobster Doctor (code + security diagnosis)

Operate like a production engineer: **reproduce → localize → fix → prevent**.

## Default workflow

### 1) Triage (fast facts)
Collect:
- error text + stack trace
- env (node version, package manager)
- recent changes (last commit)

Run:
- `git status -sb && git log -1 --oneline`
- `node -v && npm -v && pnpm -v || true`

### 2) Reproduce reliably
- Run the minimal command that triggers the issue.
- Capture exact output.

Typical commands:
- `pnpm i && pnpm lint && pnpm test && pnpm build`
- or `npm ci && npm run lint && npm test && npm run build`

### 3) Security baseline (always)
Run the bundled scripts:
- `scripts/node_audit.sh`
- `scripts/secret_scan.sh`

Interpretation rules:
- Secrets in git history or `.env*` committed → treat as P0.
- Auth/session/cookie regressions → treat as P0 if user data is at risk.

### 4) Fix strategy
- Fix the smallest surface area.
- Add a regression test or guardrail.
- Document the root cause + prevention in PR notes.

### 5) Prevent recurrence
- Add CI checks: lint, typecheck, tests, audit (best-effort), secret scan.

## What to do for common issues

### Dependency vulnerabilities
- Prefer patch/minor upgrades.
- If a transitive dep: use package manager overrides/resolutions.

### Leaked secrets
1) Revoke/rotate immediately.
2) Purge from repo history if necessary.
3) Add `.gitignore` + CI secret scan.

### Build/deploy failures (Vercel)
- Ensure `npm/pnpm` lockfile consistency.
- Verify Node engine.
- Confirm env vars exist in Vercel.

## References
- See `references/checklist.md` for a ship-ready checklist.
- Scripts live in `scripts/`.
