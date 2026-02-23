# Lobster Doctor — Ship Checklist

## Reliability
- [ ] `lint` passes
- [ ] `typecheck` passes (if TS)
- [ ] `test` passes
- [ ] `build` passes
- [ ] production config documented (Node version, lockfile, env vars)

## Security
- [ ] No secrets committed (scan repo)
- [ ] Dependencies audited (best-effort)
- [ ] Auth/session cookies: `Secure`, `HttpOnly`, `SameSite` set correctly
- [ ] Rate limiting / abuse controls for any public endpoints

## Observability
- [ ] Error reporting or logs reachable
- [ ] Clear reproduction steps in issue/PR
