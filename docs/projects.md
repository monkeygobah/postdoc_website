# Papers

This page tracks the manuscript portfolio supporting the postdoctoral research program. Papers are grouped by the pillar they support:


---

# Paper Summary

| Paper                                                       | Theme                                             | Status         | Target Venue                         | Notes | Core Collaborators
|---|---|---|---|---| ---|
| Representation Geometry of SSL on Periocular Data           | <span class="tier-badge tier1">Core AI</span>     | Researching    | NeurIPS                              | Must finish before large-scale pretraining | Sathya
| Paired Clinical + Media Tab Dataset                         | <span class="tier-badge tier2">Data Engine</span> | Researching    | TBD                                  | Enables clinical finetuning                | Setabutr, Tran, Chan, CCTS, UIH
| Global Validation of AI Periorbital Measurements            | <span class="tier-badge tier3">Global</span>      | Researching    | npj Digital Medicine                 | Global validation of predicted distances   | Larrick, Michelle, Christian (?)
| UIC-EYE-4M Dataset Paper                                    | <span class="tier-badge tier2">Data Engine</span> | Writing        | Oph Sci                              | Enables pretraining                        | Michelle, Sanjay, Sathya
| Foundational Model for External Eye Phenotyping             | <span class="tier-badge tier1">Core AI</span>     | Planned        | TBD                                  | Flagship scientific paper                  | Sathya
| Global Deployment of AI-Enabled Ocular Phenotyping          | <span class="tier-badge tier3">Global</span>      | Planned        | TBD                                  | Larger final paper of CVPR workshop        | Setabutr, Bhavana, Sathya, Tran 
| Cross-Population Ocular Phenotype Survey (Optional)         | <span class="tier-badge tier3">Global</span>      | Optional       | TBD                                  | Interesting epidemiology from Glorbit data | Larrick
| Periorbital Distances as Features for Disease Classification| <span class="tier-badge tier1">Core AI</span>     | Under review   | Scientific Reports                   | PhD paper                                  | Tran
| Regulatory Blueprint for Global Health Data Collection      | <span class="tier-badge tier3">Global</span>      | Under Review   | CVPR Workshop                        | Workshop paper formalizing ethical structure | Bhavana, Setabutr, Tran 
| Glorbit: Low-Cost Global Phenotyping System                 | <span class="tier-badge tier3">Global</span>      | Accepted       | JMIR Human Factors                   | infrastructure paper                       | 


- **Core AI** — foundational scientific claims
- **Data Engine** — datasets enabling AI research
- **Global Deployment** — Glorbit infrastructure and real-world validation



---

# Grant and Funding Tracker

| Funding Source                         | Program | Amount | Status | Notes |
|---|---|---|---|---|
| OSV Fellowship                         | Fellowship                         | $10K–$100K | Submitted | Cross fingers toes and intestines |
| NIH SBIR (with PRI)                    | Small Business Innovation Research | ~$300K     | Preparing (04/01) | Industry collaboration |
| NSF Grant                              | Research Grant                     | ~$500K     | Planned   (10/01) | Will write proposal |
| Google Cloud Research Credits          | Cloud Compute Grant                | $5K        | Submitted | Compute support |
| ISPB Grant                             | Research Grant                     | $5K        | Planned   (05/01) | Limited spending flexibility |
| UIC BME Grant                          | Research Grant                     | $2K        | Preparing (03/12) |  |


<!-- 
---
# Pillar A — Core AI

---

### Representation Geometry of Self-Supervised Learning on Periocular Data

**Tentative title**

Representation Geometry of Self-Supervised Learning in Periocular Image Models

**Description**

This paper investigates the geometric structure of embeddings learned through self-supervised learning methods on periocular datasets. The work analyzes embedding isotropy, clustering behavior, and the relationship between representation structure and downstream task performance.

**Role in the Program**

This paper establishes the theoretical and empirical foundation for representation learning in periocular datasets. The findings guide the architecture and training design of the external eye foundation model.

---

### Foundational Model for External Eye Phenotyping

**Tentative title**

A Foundation Model for External Eye Phenotyping

**Description**

This work introduces a large-scale representation model trained on millions of periocular images. The model is designed to learn generalized visual features of the external eye that can support downstream tasks including disease classification, biometric analysis, and clinical phenotyping.

**Role in the Program**

This is the flagship scientific contribution of the program. It integrates the dataset pipeline, representation learning experiments, and clinical datasets to produce a reusable foundational model for external eye analysis.

---

# Pillar B — Data Engine

---

### UIC-EYE-4M Dataset

**Tentative title**

UIC-EYE-4M: A Large-Scale Dataset for Periocular Representation Learning

**Description**

This paper introduces a large curated dataset of periocular images assembled from multiple public sources. The dataset includes standardized preprocessing, deduplication, and quality control procedures designed to support representation learning experiments.

**Role in the Program**

This dataset provides the primary training corpus used for representation learning and foundational model development. It enables large-scale self-supervised training and supports future benchmarking efforts in periocular AI.

---

### Paired Clinical + Media Tab Dataset

**Tentative title**

A Paired Clinical and Imaging Dataset for Ocular Phenotyping

**Description**

This dataset links clinical ophthalmic metadata with facial and periocular imaging data extracted from electronic medical records. The resulting dataset enables research into relationships between ocular imaging features and clinical phenotypes.

**Role in the Program**

This dataset enables clinical finetuning experiments and supports future research on biomarker discovery and disease prediction using external eye imagery.

---

# Pillar C — Global Deployment

---

### Glorbit: Low-Cost Global Phenotyping System

**Tentative title**

Glorbit: A Low-Cost Platform for Global Ocular Phenotyping

**Description**

This paper describes the design and implementation of the Glorbit platform, a lightweight system for capturing standardized periocular images and associated clinical metadata in diverse clinical environments.

**Role in the Program**

Glorbit provides the infrastructure necessary to collect prospective global datasets used for downstream validation and clinical research.

---

### Regulatory Blueprint for Global Health Data Collection

**Tentative title**

A Regulatory Framework for Cross-Border Ocular Imaging Research

**Description**

This work describes a hub-and-spoke ethical governance framework enabling cross-border data collection for minimal-risk medical imaging research. The framework outlines IRB oversight structures, data transfer considerations, and practical deployment strategies.

**Role in the Program**

This paper establishes the governance model enabling global data collection and supports the expansion of Glorbit deployments across multiple countries.

---

### Global Deployment of AI-Enabled Ocular Phenotyping

**Tentative title**

Global Deployment of AI-Enabled Ocular Phenotyping Infrastructure

**Description**

This paper documents the operational deployment of the Glorbit platform across multiple clinical sites and countries. The study evaluates deployment logistics, operational reliability, and data integrity across heterogeneous environments.

**Role in the Program**

This work demonstrates that the data collection infrastructure can scale internationally, validating the feasibility of global ocular phenotyping research.

---

### Human-Level Validation of AI Periorbital Measurements

**Tentative title**

Human-Level Agreement in AI-Derived Periorbital Measurements

**Description**

This study evaluates agreement between AI-derived periorbital measurements and human graders using manually measured annotations. The evaluation spans globally collected clinical images from multiple sites.

**Role in the Program**

This paper validates the measurement pipeline underlying the Glorbit system and establishes the reliability of AI-derived periorbital anatomical features.

---

### Cross-Population Ocular Phenotype Survey (Optional)

**Tentative title**

Cross-Population Variation in Ocular Phenotypes

**Description**

Using prospectively collected Glorbit data, this study examines variation in ocular anatomical features and disease history across populations from multiple geographic regions.

**Role in the Program**

This work provides descriptive epidemiological context for global ocular phenotypes and demonstrates the scientific value of prospective global data collection. -->
