<!-- docs/foundational.md -->
# Foundational Model Development

Two main AI projects are planned for this work. See both below for more information and the various phases.

## ECCV Project: Multi-View JEPA for Anatomical Representation and Hierarchical Structure

This project investigates how multi-view self-supervised learning can produce anatomically faithful representations of the periocular region, and how different geometric interpretations of those representations (Euclidean vs hyperbolic) reflect hierarchical disease structure. The project is designed as a controlled precursor to later foundation-model development.

??? eccv-phase1 "Phase 1 - Landmark prediction from segmentation encoder embeddings"

    **Rationale:**  
    Before introducing JEPA-style multi-view learning, we establish that existing segmentation encoders preserve sufficient anatomical information to support fine-grained geometric reasoning. Landmark prediction is used as a direct probe of learned anatomical representation.

    **Datasets:**  
    Chicago facial segmentation dataset (~900)  
    Celeb segmentation dataset (~2k)

    **Objective:**  
    Predict periorbital landmark coordinates (e.g., 2×K matrix) from frozen segmentation encoder embeddings.

    <div data-progress>
    <ul>
    <li>Train segmentation model (UNET and DeepLabV3) on celeb</li>
    <li>Extract encoder embeddings from segmentation model on cfd</li>
    <li>Train MLP head for landmark regression</li>
    <li>Quantitative evaluation and qualitative anatomical overlays </li>
    </ul>
    </div>

??? eccv-phase2 "Phase 2 — Hierarchical clinical label preparation"

    **Rationale:**  
    For evaluation of hierarchical structure in learned representations we need a clinically meaningful label hierarchy We can also try and use existing segmentation pipelines to obtain pixel level anatomical landmarks.

    **Datasets:**  
    Clinical imaging dataset (~300–5k images, depending on subsets used)

    **Objective:**  
    Curate a clinically annotated evaluation dataset with explicit hierarchical disease labels.

    <div data-progress>
    <ul>
      <li>Define hierarchical disease labels in collaboration with clinicians</li>
      <li>Run pretrained segmentation model for periorbital landmark verification</li>
    </ul>
    </div>


??? eccv-phase3 "Phase 3 - Multi-view JEPA pretraining (left and right eyes as paired views)"

    **Rationale:**  
    Multi-view self-supervised learning is used to learn periocular representations that are stable across related views while preserving shared anatomical information. Left and right eyes from the same face provide a natural, label-free pairing for JEPA-style training.

    **Datasets:**  
    Large unlabeled CELEB dataset (~30k images split at midline)
    Potentially CELEB dataset with periorbital distances as another view to inspect viability for future foundational model

    **Objective:**  
    Train a JEPA encoder using left–right eye image pairs (potentially both eyes and PD distance vector) to learn view-consistent periorbital embeddings.

    **Training objectives:**  
    - JEPA predictive loss: predict the embedding of the right eye from the left eye (and vice versa)  
    - SIGReg regularization?

    <div data-progress>
    <ul>
      <li>Define left–right eye view construction from front-facing images</li>
      <li>Implement JEPA predictive objective with embedding-to-embedding targets</li>
      <li>Train JEPA encoder on Celeb dataset</li>
      <li>Freeze trained JEPA encoder for downstream analysis</li>
    </ul>
    </div>


??? eccv-phase4 "Phase 4 - Hierarchical structure analysis of JEPA embeddings"

    **Rationale:**  
    Clinical disease labels are expected to exhibit hierarchical structure. Rather than enforcing hierarchy during representation learning, we evaluate how hierarchical structure is expressed when fixed JEPA embeddings are analyzed using different geometric distance models.

    **Datasets:**  
    Classification dataset (~3–7k images with hierarchical disease labels)

    **Objective:**  
    Evaluate whether hierarchical disease relationships are better captured using Euclidean or hyperbolic geometry on frozen JEPA embeddings.

    **Evaluation**  
    - Freeze JEPA encoder and extract embeddings for all classification samples  
    - Measure neighborhood structure using Euclidean distance  
    - Project embeddings into hyperbolic space and repeat analysis (potentially using Gonzalez-Jimenez MICCAI)
    - Compare hierarchy-alignment metrics across geometries

    <div data-progress>
    <ul>
      <li>Embed classification dataset using frozen JEPA encoder</li>
      <li>Define explicit label hierarchy in collaboration with clinicians</li>
      <li>Evaluate Euclidean hyperbolic distance-based retrieval and clustering</li>
      <li>Evaluate </li>
    </ul>
    </div>


## Foundational Model

Try and survive the ECCV work and dataset collection and then figure this out using insights from those
