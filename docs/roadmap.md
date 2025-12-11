<!-- docs/roadmap.md -->
# Roadmap

This roadmap outlines the major phases of the UIC Global Oculomics Initiative. Each phase builds toward the central objective of creating the first multimodal foundational model for oculoplastic and craniofacial disease.

The project proceeds in five coordinated phases:

---
<!-- ## ****

| Phase | Focus Areas | Key Outputs | Status |
|-------|-------------|-------------|--------|
| *Phase 1 — Dataset Assembly* | FM pretraining dataset; UIC retrospective dataset | Large-scale cleaned datasets; PD extraction at scale; multimodal dataset index | In Progress |
| *Phase 2 — Global Deployments* | Ecuador, Thailand, India, Peru, Africa deployments; IRB; site onboarding | Standardized acquisition workflows; prospective datasets; harmonization across sites | In Progress |
| *Phase 3 — Multimodal Pretraining* | Multimodal backbone; PD-integrated encoder | Multimodal embedding space; ablation studies; pretraining reports | Awaiting completion of Phase 1 |
| *Phase 4 — Fine-Tuning* | Disease classification; craniofacial tasks; GVF prediction | Downstream task performance benchmarks; clinical modeling results | Begins after Phase 3 |
| *Phase 5 — Validation & Manuscripts* | Internal + external validation; cross-site evaluation | Foundational model paper; deployment paper; downstream task manuscripts | Ongoing (late project) |

--- -->

## Roadmap Overview

See below for details on each specific phase

???+ roadmap-phase "Phase 1 — Dataset Assembly"

    Dataset development is the rate-limiting step for all downstream work. Two datasets must be completed before pretraining begins.

    **Focus Areas**

    - Foundational Model pretraining dataset (open-source)
    - UIC retrospective clinical dataset

    **Key Outputs**

    - Cleaned, large-scale pretraining dataset  
    - PD extraction at scale  
    - Multimodal dataset index

    **Status:** In Progress

---

???+ roadmap-phase "Phase 2 — Global Deployments"

    Global data collection requires long lead times due to IRB processes, site logistics, and training. This phase runs in parallel with Phase 1.


    **Goals**

    - Deploy Glorbit across 3–4 international sites  
    - Assemble prospective, globally diverse datasets  
    - Enable cross-site harmonization and external validation  

    **Status:** In Progress

---

???+ roadmap-phase "Phase 3 — Multimodal Pretraining"

    Pretraining involves learning a multimodal backbone that binds image embeddings and periorbital distance features.

    **Dependencies**

    - Completed pretraining dataset  
    - Validated PD extraction pipeline  

    **Key Outputs**

    - Multimodal embedding space  
    - Ablation studies  
    - Pretraining technical report  

    **Status:** Begins after Phase 1 completion

---

???+ roadmap-phase "Phase 4 — Fine-Tuning on Clinical and Functional Tasks"

    After pretraining, the backbone is adapted to downstream oculoplastics and craniofacial tasks.

    **Downstream Tasks**

    - Multiclass disease classification  
    - Craniofacial disorder classification  
    - GVF regression/classification  
    - Ptosis outcomes modeling  
    - Lesion / eyelid pathology classification  

    **Status:** Begins after Phase 3

---

???+ roadmap-phase "Phase 5 — Validation, Deployment, and Manuscripts"

    This phase focuses on internal/external validation, clinical interpretation, and manuscript writing.

    **Internal Validation**

    - UIC datasets  
    - Craniofacial datasets  
    - Longitudinal subsets  

    **External Validation**

    - Global deployments  
    - Partner hospitals (Mt. Sinai, others)

    **Key Outputs**
    
    - See [publications page](publications.md) for more information.

    **Status:** Ongoing (late project)


<!-- 
## **Phase 1 — Dataset Assembly**

Dataset development is the rate-limiting step for all downstream work. Two datasets are essential before pretraining can begin:

### *1. Foundational Model Pretraining Dataset (Open Source)*
- Provides large-scale image diversity  
- Enables periorbital distance extraction at massive scale  
- Forms the backbone for multimodal pretraining  

### *2. UIC Retrospective Clinical Dataset*
- High-quality labeled dataset for supervised fine-tuning  
- Supports multiclass disease classification and functional outcome prediction  

See [datasets page](datasets.md) for more information.


---

## **Phase 2 — Global Deployments**

Global data collection requires long lead times due to IRB processes, site coordination, and training. Deployment efforts begin early and continue throughout the project. This phase runs in parallel with Phase 1.

### *Goals*
- Deploy Glorbit across 3–4 international sites  
- Collect diverse, multinational datasets  
- Enable cross-site harmonization and external validation  

See [deployments page](deployments.md) for more information.

---

## **Phase 3 — Multimodal Pretraining**

Pretraining begins once Phase 1 is largely complete. Using the large open-source dataset, a multimodal backbone is trained to integrate image representations with periorbital distance measurements. Details of this phase are actively being investigated to enable scientific developments from both an AI and clinical perspective.

*Dependencies:*  
Requires finalized pretraining dataset + validated PD extraction pipeline.

See [foundational model page](foundational.md) for more information.


---

## **Phase 4 — Fine-Tuning on Clinical and Functional Tasks**

After pretraining, the backbone is adapted to specific oculoplastic and craniofacial applications using curated datasets.

### *Downstream Tasks*
- Multiclass disease classification  
- Craniofacial disorder classification  
- GVF regression / classification  
- Ptosis outcomes  
- Lesion and eyelid pathology classification 

Finalization of downstream tasks will procede after retrosepctive datasets have been fully assembled.

---

## **Phase 5 — Validation, Deployment, and Manuscripts**

This phase includes internal and external validation, clinical interpretation, and manuscript preparation.

### *Internal Validation*
- UIC datasets  
- Craniofacial datasets  
- Longitudinal subsets  

### *External Validation*
- Global deployment sites  
- Partner hospitals (Mt. Sinai, others)  

### *Manuscripts*

See [publications page](publications.md) for more information. -->