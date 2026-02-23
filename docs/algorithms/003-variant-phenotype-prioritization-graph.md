---
id: 003
name: Variant→Phenotype Prioritization Graph (VPPG)
status: draft
scope: DNA sequence interpretation
---

# Variant→Phenotype Prioritization Graph (VPPG)

## Goal
Turn DNA sequence variant evidence into a **ranked, auditable hypothesis list** for longevity-related phenotypes.

## Inputs
- Variant set (VCF or list)
- Public knowledge sources (ClinVar, GWAS Catalog, eQTL resources, pathway DBs)
- Phenotype definition(s) (aging clocks, frailty, disease incidence proxies)

## Process
1) Normalize variants + map to genes/regions.
2) Build a graph:
   - nodes: variants, genes, pathways, phenotypes, papers
   - edges: evidence links (GWAS assoc, eQTL effect, functional annotation)
3) Score each variant/gene hypothesis by:
   - evidence count + quality
   - effect direction consistency
   - tissue relevance
   - novelty (penalize overfitting to popular genes)
4) Produce top hypotheses + “what would falsify this?” tests.

## Outputs
- Ranked hypothesis list
- Evidence graph export (JSON)
- 1-page brief per top hypothesis

## Acceptance criteria
- Every score is traceable to citations.
- Graph export can be regenerated deterministically.

## Failure modes
- Conflicting evidence → flag and require stratified analysis.
- Population structure confounding → require ancestry-aware checks.
