---
id: 002
name: Drift-Weighted Methylome Targeting (DWMT)
status: draft
scope: longevity biomarkers
---

# Drift-Weighted Methylome Targeting (DWMT)

## Goal
Prioritize CpG loci/regions for *research* interventions by combining **age-drift**, **regulatory impact**, and **risk**.

> Research concept only. Not medical advice.

## Inputs
- Longitudinal methylation data or cross-sectional cohorts with age
- Annotation layers: enhancers/promoters, TF binding, chromatin state
- Off-target / safety proxy features (e.g., proximity to oncogenes, high pleiotropy regions)

## Process
1) Fit an age-drift model per locus/region: drift magnitude + uncertainty.
2) Estimate regulatory impact proxy (e.g., overlap with active enhancers in relevant tissues).
3) Define risk penalty features (oncogenic proximity, instability, broad pleiotropy).
4) Compute score:
   - **Score = DriftZ × ImpactWeight − RiskPenalty**
5) Output top-N targets with justification and caveats.

## Outputs
- Ranked target list
- Per-target rationale card (drift, impact, risk)
- Suggested follow-up experiments (cheap→expensive)

## Acceptance criteria
- Scoring code is reproducible (notebook + fixed versions).
- Targets include uncertainty estimates.

## Failure modes
- Tissue mismatch → require tissue-stratified rankings.
- Confounding by cell-type composition → require correction/stratification.
