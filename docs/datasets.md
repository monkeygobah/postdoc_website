<!-- docs/datasets.md -->

# Datasets

This page provides an overview of all datasets used in the Global Oculomics Initiative. Each dataset includes a brief description, role within the entire project, IRB considerations, and a single progress bar tracking its development. Milestones are updated continuously as the project evolves.

See the summary table to understand at a glance, and detailed information and progress tracking is available for each individual dataset below.

---

## Summary Table

| **Dataset**                                | **Category**              | **Role in Pipeline**                                           | **IRB**                                 | **Size**                   | **Status**                                |
| ------------------------------------------ | ------------------------- | -------------------------------------------------------------- | --------------------------------------- | -------------------------- | ----------------------------------------- |
| **Foundational Model Pretraining Dataset** | Pretraining (Open Source) | Large-scale pretraining for backbone encoder                   | Not required                            | ~4,000,000                 | In progress (curation + cleaning)         |
| **UIC Retrospective Clinical Dataset**     | UIC Clinical              | Fine-tuning multiclass disease classifier; multimodal modeling | STUDY2024-1118                          | ~100,000                   | Pending CCTS and CFOAP              |
| **Auxiliary Oculoplastics Dataset**        | UIC Clinical              | Auxiliary fine-tuning; fallback set                            | STUDY2024-1118                          | ~1,000                     | Awaiting Transfer                         |
| **Historic UIC CFC Dataset** | UIC Clinical (CFC) | Pretraining  | STUDY2024-1118 | ~17,000 images | Complete |
| **UIC CFC Dataset**                        | UIC Clinical              | Fine-tuning + validation for craniofacial tasks                | STUDY2024-1118                          | ~1,500                     | Complete                                  |
| **GVF Dataset**                            | UIC Clinical              | Functional regression/classification task                      | STUDY2024-1118                          | ~1,000                     | Complete                                  |
| **Mt. Sinai CFC Dataset**                  | External OOD              | OOD craniofacial validation                                    | Mt. Sinai IRB + DUA with STUDY2024-1118 | Unknown                    | Early planning                            |
| **Aravind Validation Dataset**             | External OOD              | External validation (OOD robustness)                           | DUA + STUDY2024-1118 amendment required | ~1,000                     | Planning (contact pending)                |
| **Glorbit Global Datasets**                | Prospective Global        | Prospective validation; epidemiology; robustness               | Site-specific IRBs + DUA with UIC       | Target ~1,500 across sites | Active Collection                         |


---

## Individual Dataset Progress

This section contains progress tracking for each dataset being worked on. Expand the box to see the progress and next steps.


??? dataset-pretraining "Foundational Model Pretraining Dataset"

    Curated from large-scale open-source face datasets (e.g., CelebA, LAION-Face, VGGFace2, FFHQ). Images are restricted to frontal views and cropped to maximize periorbital visibility. Periorbital distances are extracted using the segmentation and measurement algorithms from Georgie's PhD.

    **Category:** Pretraining (Open Source)  
    **IRB:** Not required  
    **Role:** Primary pretraining dataset for backbone encoder  
    **Size:** ~2,000,000 expected  
    **Personnel:** Michelle, Georgie  

    <div data-progress>
    <ul>
        <li class="done">Curate all candidate open-source face datasets</li>
        <li class="done">Transfer batch 1 datasets to workstation </li>
        <li class="done">Prep required datasets (UMD, Tufts, FIML)</li>
        <li class="done">Do summary stats on large dataset</li>
        <li class="done">Remove duplicate images and recount</li>
        <li class="done">Obtain subset 0</li>
        <li class="done">Build rotation toolkit</li>
        <li class="done">Create subset 1 (rotated) for all datasets</li>
        <li class="done">Develop inclusion criteria for S1</li>
        <li class="done">Sample images from imperfect datasets and pass to MF</li>
        <li class="done">Obtain % noise from all imperfect datasets on sample</li>
        <li class="done">Compute stats</li>
        <li class="done">Decide which datasets need further CNN cleaning</li>
        <li class="done">Repeat above for Batch 2 (vggface2 and FFHQ)</li>
        <li>Create training data for these datasets</li>
        <li>train/ validate cleaners</li>
        <li>Deploy on datasets</li>
        <li>Sample and grade on cleaned datset (also auditing removed images and overall data loss)</li>
        <li>Crop final images using log files to create subset 2 for each dataset</li>
        <li>Summary statistics on Subset 2 including sampling</li>
        <li>Create Subset 2</li>
        <li>Predict periorbital distances for Subset 2</li>
        <li>Qualitatively validate all predicted distances and remove poor predictions (at minimum for FFHQ...)</li>
        <li>Prepare dataset index + metadata for pretraining</li>
        <li>Ensure it is possible and easy to go from initial downloaded dataset to final product with software tools</li>
    </ul>
    </div>

---

??? dataset-uic "Historic CFC Dataset"
    30 years of imaging data from UIC craniofacial center. ~17000 images. Many patients have multiple images from different visits. Unknown disease labels and operations. Both full face and cropped eye images available and preprocessed

        <li class="done">Acquire from CFC</li>
        <li class="done">Move in batches using TB storage</li>
        <li class="done">Clean locally</li>
        
--- 

??? dataset-uic "UIC Retrospective Clinical Dataset — UIC Clinical"

    Retrospective cohort of oculoplastics and ophthalmology patients across a decade of visits, containing eye images at rest, periorbital measurements, ICD codes, procedural history, demographics, and (when available) functional testing such as GVF.

    **Category:** UIC Clinical  
    **IRB:** STUDY2024-1118 (Amendment pending)  
    **Role:** Primary fine-tuning dataset for multiclass disease classification  
    **Size:** ~100,000  
    **Personnel:** Georgie, CCTS, IS, Dr. Setabutr, Dr. Hribar  

    <div data-progress>
    <ul>
        <li class="done">Establish plan with CCTS and IS for EPIC extraction and CCTS duet</li>
        <li class="done">Draft IRB amendment and Data Request Agreement (DRA)</li>
        <li class="done">Obtain stakeholder sign-off from clinical and data teams</li>
        <li class="done">Submit IRB amendment and DRA for approval</li>
        <li>Initiate CCTS data pull request</li>
        <li>Transfer relevant components to IS for EPIC pull</li>
        <li>Submit EPIC data extraction request</li>
        <li>Receive finalized datasets from CCTS and EPIC</li>
        <li>Run computational phenotyping pipeline</li>
        <li>Assemble finalized multimodal clinical dataset for training</li>
        <li>Write manuscript detailing dataset creation</li>
    </ul>
    </div>


---

??? dataset-uic "Auxiliary Oculoplastics Dataset — UIC Clinical"

    Five years of curated Dr. Tran’s oculoplastic cases. Backup fine-tuning dataset in case of delays or filtering issues in the primary retrospective dataset.

    **Category:** UIC Clinical  
    **IRB:** STUDY2024-1118  
    **Role:** Auxiliary validation + fine-tuning dataset  
    **Size:** ~1,000  
    **Personnel:** Sophia, Dr. Tran, Georgie  

    <div data-progress>
    <ul>
        <li class="done">Coordinate disease categories + scope with Dr. Tran and Sophia</li>
        <li class="done">Sophia generates curated dataset from EPIC</li>
        <li>Finalize dataset transfer to Georgie</li>
    </ul>
    </div>

---

??? dataset-uic "UIC CFC Dataset — UIC Clinical"

    Existing dataset of craniofacial syndromes from prior work. Includes multiple craniofacial subtypes and paired periorbital distances.

    **Category:** UIC Clinical  
    **IRB:** STUDY2024-1118  
    **Role:** Fine-tuning + validation for craniofacial tasks  
    **Size:** ~1,500  
    **Personnel:** Dr. Purnell, Georgie  

    <div data-progress>
    <ul>
        <li class="done">Obtain access to dataset + metadata from Dr. Purnell</li>
        <li class="done">Curate and structure dataset</li>
    </ul>
    </div>

---

??? dataset-uic "GVF Dataset — UIC Clinical"

    Images paired with Goldmann Visual Field measurements, used for functional regression and classification tasks.

    **Category:** UIC Clinical  
    **IRB:** STUDY2024-1118  
    **Role:** Functional prediction dataset  
    **Size:** ~1,000  
    **Personnel:** Georgie, Sasha, Dr. Setabutr, Dr. Tran  

    <div data-progress>
    <ul>
        <li class="done">Establish list of ptosis patients with GVF values</li>
        <li class="done">Define extracted fields (Georgie + Sasha)</li>
        <li class="done">Medical students pull and organize dataset</li>
        <li class="done">Transfer finalized dataset to Georgie</li>
        <li class="done">Baseline GVF classification + regression</li>
        <li class="done">Draft manuscript</li>
        <li>Submit manuscript following completion of Sasha’s thesis</li>
    </ul>
    </div>

---

??? dataset-external "Mt. Sinai CFC Dataset — External OOD"

    Independent craniofacial dataset maintained at a partner Chicago hospital. Serves as an external out-of-distribution validation cohort.

    **Category:** External OOD  
    **IRB:** Mt. Sinai IRB + DUA with STUDY2024-1118  
    **Role:** External OOD validation  
    **Size:** Unknown  
    **Personnel:** Dr. Purnell, Georgie, Adaure  

    <div data-progress>
    <ul>
        <li>Establish contacts at Mt. Sinai</li>
        <li>Draft IRB for data release (collaborate with Adaure)</li>
        <li>???</li>
    </ul>
    </div>

---

??? dataset-external "Aravind Validation Dataset — External OOD"

    External dataset for OOD validation to be collected in collaboration with Aravind Hospital. Collection anticipated after UIC datasets have been finalized.

    **Category:** External OOD  
    **IRB:** DUA + STUDY2024-1118 amendment required  
    **Role:** External validation  
    **Size:** ~1,000  
    **Personnel:** Georgie, Dr. Setabutr, Dr. Chan  

    <div data-progress>
    <ul>
        <li>Dr. Setabutr to initiate contact with research leads at Aravind</li>
        <li>Update UIC IRB</li>
        <li>Confirm data-transfer pathway</li>
        <li>Obtain DUA</li>
        <li>Receive datasets</li>
    </ul>
    </div>

---
??? dataset-global "Glorbit Global Datasets — Prospective Global"

    Prospective, globally diverse datasets collected through the Glorbit imaging platform at sites including Ecuador and future expansions in Peru, Panama, and Africa. Used for validation, epidemiology, usability assessment, and global robustness testing.

    **Category:** Prospective Global  
    **IRB:** Site-specific; Ecuador approved; others pending  
    **Role:** Prospective validation + global robustness  
    **Size:** Target ~1,500 across 3–5 sites  
    **Personnel:** Georgie, Sasha, Dr. Setabutr, Dr. Tran, Dr. Larrick  

    > **Progress for all international sites is tracked on the [Global Deployments](deployments.md) page.**
