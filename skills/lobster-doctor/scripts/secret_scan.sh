#!/usr/bin/env bash
set -euo pipefail

# Lightweight secret scan (best-effort). Not a substitute for gitleaks/trufflehog.
# Flags common patterns in tracked files.

cd "${1:-.}"

echo "[lobster-doctor] scanning for common secret patterns..."

PATTERNS=(
  "AKIA[0-9A-Z]{16}"              # AWS access key
  "AIza[0-9A-Za-z\-_]{35}"        # Google API key
  "xox[baprs]-[0-9A-Za-z-]{10,}"  # Slack token
  "ghp_[0-9A-Za-z]{36}"           # GitHub classic PAT
  "github_pat_[0-9A-Za-z_]{20,}"  # GitHub fine-grained token
  "sk-[0-9A-Za-z]{20,}"           # OpenAI-like key
  "BEGIN (RSA|OPENSSH) PRIVATE KEY"
)

FOUND=0
for p in "${PATTERNS[@]}"; do
  if git grep -nE "$p" -- . 2>/dev/null; then
    FOUND=1
  fi
done

if [[ "$FOUND" -eq 1 ]]; then
  echo "[lobster-doctor] Potential secrets found. Treat as P0: rotate/revoke immediately."
  exit 2
else
  echo "[lobster-doctor] No matches found."
fi
