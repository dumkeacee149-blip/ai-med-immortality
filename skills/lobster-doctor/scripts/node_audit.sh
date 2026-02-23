#!/usr/bin/env bash
set -euo pipefail

# Best-effort dependency audit for Node projects.
# Does NOT fail the shell unless audit command itself errors unexpectedly.

cd "${1:-.}"

if [[ -f pnpm-lock.yaml ]] && command -v pnpm >/dev/null 2>&1; then
  echo "[lobster-doctor] pnpm audit (best-effort)"
  pnpm audit || true
elif [[ -f package-lock.json ]] && command -v npm >/dev/null 2>&1; then
  echo "[lobster-doctor] npm audit (best-effort)"
  npm audit || true
elif [[ -f yarn.lock ]] && command -v yarn >/dev/null 2>&1; then
  echo "[lobster-doctor] yarn audit (best-effort)"
  yarn audit || true
else
  echo "[lobster-doctor] No recognized lockfile or package manager found; skipping audit."
fi
