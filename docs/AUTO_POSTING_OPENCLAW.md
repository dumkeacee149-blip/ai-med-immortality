# OpenClaw Auto‑Posting (X) — How to run it

This doc explains **two safe automation modes**.

## Mode 1 (recommended): Heartbeat-driven (manual, chat-triggered)
- The agent posts when it receives the HEARTBEAT prompt / operator pings.
- Good when you want human-in-the-loop and minimal risk.

Requirements:
- Gateway running
- openclaw browser profile logged into X

## Mode 2: Cron job (scheduled)
Use OpenClaw **Cron Jobs** to run a task on a schedule.

### A) Create a cron job
In Dashboard: Cron Jobs → New
- Schedule: every 4 hours
- Task:
  - Generate 1 tweet under 280 chars, include #DeSci #BNB
  - Post via openclaw browser
  - Log link + update heartbeat-state.json

### B) Guardrails
- Do not exceed 1 post/4h.
- Stop/ask if content is sensitive: medical advice, politics, personal attacks.

## Operational prerequisites (must be true)
1) X login exists in openclaw browser profile.
2) Gateway token/pairing is approved.
3) If posting fails with timeouts: restart gateway.

## Quick recovery commands
```bash
~/.openclaw/bin/openclaw gateway restart
~/.openclaw/bin/openclaw gateway probe
~/.openclaw/bin/openclaw browser start --browser-profile openclaw --token <GATEWAY_TOKEN>
```

## What another agent needs
- This file
- docs/TWITTER_PLAYBOOK.md
- HEARTBEAT.md rules
- Access to OpenClaw gateway + openclaw browser profile
