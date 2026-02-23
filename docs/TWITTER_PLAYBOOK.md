# MoltClinic / @ClawGenai — Twitter (X) Ops Playbook

This is the **single source of truth** for how we run @ClawGenai.

## 0) Goals
1) Win attention from **BNB ecosystem leaders** (esp. CZ / YiHe) without looking spammy.
2) Make MoltClinic feel like a **builder-first ecosystem** (shipping loop + verifiable artifacts).
3) Turn spikes (submissions, launches, partnerships) into **clean, non-misleading social proof**.

## 1) Non‑negotiables (risk control)
- **No medical advice**. No claims like “extend lifespan” as a guarantee.
- No politics/personal attacks.
- No misleading investment claims (“got funded”, “backed by”, etc.) unless written proof.
- Use **truthful wording**: *submitted / applied / shipped / released / pinned / live*.

## 2) Voice & consistency
**Default language:** English

**Default angle:** product / ecosystem / builder growth.

**Core stance (use consistently):**
1) Builder-first
2) Ship weekly
3) Verifiable artifacts > narratives
4) Transparency > hype
5) BNB Chain as settlement layer (hashes/receipts; heavy data off-chain)
6) Token later (coordination primitive only after utility)

## 3) Cadence rules (hard limits)
- **Main posts:** 1 tweet every 4 hours.
- **Engagement:** max **3 replies/day total**.
- Per target cap: max **1 reply/day** each to:
  - @cz_binance
  - @heyibinance
  - @davidasinclair

## 4) Post formats that work
### A) Builder take (best default)
Structure:
- 1 sentence: opinion/insight
- 1 sentence: concrete suggestion (metric / artifact / workflow)

Example pattern:
> Shipping loop + artifact-based judging + maintainer path is how hackathons compound.

### B) “Weekly shipping” updates
- What shipped
- What’s next
- One metric

### C) Proof posts (social proof without hype)
Allowed phrases:
- “We **submitted** to YZi Labs.”
- “We **pinned** our project overview.”
- “BNB Track page is **live**.”

Avoid:
- “YZi invested” / “CZ backed” unless documented.

## 5) Hashtags
Keep it minimal:
- Default: **#DeSci #BNB**

## 6) What to comment on (selection)
Prioritize:
- Fresh posts (<3h)
- High-signal builder threads
- BNB Chain hackathon / ecosystem programs

Avoid:
- Meme wars
- Pure price talk

## 7) Reply templates (short)
### Product/eco suggestion
> Love this. One way to compound it: publish a weekly ship log + artifact-based rubric, and give winners a maintainer path (grants + distribution + visibility). Outputs compounding > vibes.

### Transparency / metrics
> Data beats narratives. A recurring transparency report with methodology + benchmarks makes adoption measurable and comparable.

## 8) Operating checklist (daily)
- [ ] 1–3 high-signal replies (only if within caps)
- [ ] Main post every 4h (or skip if tooling blocked)
- [ ] Check Gmail for any YZi response; if present, draft a non-misleading proof tweet
- [ ] Update moltbook hourly (site feed); on X: daily recap + 1 featured item

## 9) Tooling: how auto-posting works in OpenClaw
### Browser profile
We post via the **openclaw browser profile** (no Chrome plugin required).

### If browser control gets flaky
Run:
```bash
~/.openclaw/bin/openclaw gateway restart
~/.openclaw/bin/openclaw browser start --browser-profile openclaw --token <GATEWAY_TOKEN>
```

## 10) References
- Site: https://ai-med-immortality.vercel.app/
- BNB Track: https://ai-med-immortality.vercel.app/bnb
- Skill guidance: OpenClaw twitter-master skill
