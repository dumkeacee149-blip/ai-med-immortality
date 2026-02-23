---
id: 001
name: Evidence-to-Bounty Compiler (EBC)
status: draft
scope: DeSci coordination
---

# Evidence-to-Bounty Compiler (EBC)

## Goal
Convert life-science literature into **shippable bounties** with objective acceptance criteria.

## Inputs
- Paper(s) / preprint(s) URL(s)
- Optional: dataset links, code repo links
- Community constraints (budget, time, target modality)

## Process (algorithm)
1) **Claim extraction**
   - Extract: intervention/exposure, cohort/model, endpoint(s), effect direction, effect size (if present), limitations.
2) **Evidence scoring**
   - Score dimensions: study design, sample size, replication count, mechanistic support, confounders.
3) **Task decomposition**
   - Turn each claim into 1–3 tasks:
     - replication (re-run analysis)
     - benchmarking (compare to baselines)
     - data QA (dataset card, cleaning)
     - mechanistic map (pathway/graph)
4) **Acceptance criteria generation**
   - Define what “done” means:
     - exact outputs (notebook, report, dataset card)
     - reproducibility requirements (seed, env, data pointers)
     - evaluation metric (AUC, correlation, calibration, etc.)
5) **Bounty packaging**
   - Title, scope, required skills, estimated time, references.

## Outputs
- Bounty card JSON/Markdown
- Evidence brief (1 page)
- Suggested reviewer checklist

## Acceptance criteria (verifiable)
- A third party can reproduce outputs from provided instructions.
- Evidence brief cites exact source locations (figure/table/page).

## Failure modes
- Paper has no accessible data/code → bounty must switch to “evidence brief + gap analysis”.
- Metric not measurable → rewrite bounty with measurable proxy.
