# Tools & Assets

This page centralizes all publicly shareable tools, model weights, datasets, and annotation utilities developed as part of the UIC Global Oculomics Initiative.  
These assets support reproducible research in periorbital measurement, segmentation, distance prediction, and functional downstream modeling.

Only **publicly available** datasets and tools are listed here.  
Internal clinical datasets, global deployment datasets, and proprietary code remain excluded until formally released.

---

## Model Weights

Pretrained models are hosted on [Hugging Face](https://huggingface.co/grnahass/periorbital_segmentation/tree/main) and are compatible with PyTorch.  
These weights support segmentation, distance prediction, and baseline tasks.

??? dataset-public "Periorbital Segmentation Models"
    DeepLabV3 and SAM-finetuned models trained on labeled periorbital datasets.  
    Useful for research in eyelid, sclera, brow, and iris segmentation.

    **Includes:**

    - DeepLabV3 (resnet101 backbone) trained on CFD, ~2000 images from CELEB, as well as trained on both datasets for periorbital segmentation
    - Models trained using semi supervised methods (ST and ST++) for periorbital distance prediction
    - Inference scripts (coming soon)

---

## Software Tools

Reusable tools built during PhD and postdoc work, designed for internal research groups, collaborators, and external researchers.

??? tool "Periorbital Distance Prediction Pipeline"
    Python package that runs inference on an input image and predicts periorbital distances. Install via pip [here](https://pypi.org/project/periorbital-package/)

    **Includes:**
    
    - Segmentation inference  
    - Landmark extraction  
    - Computation of 40+ periorbital distances with anatomical constraints  
    - Code for inference
    - Code for model deployment through HF

    **Features**

    - Works on single images or large datasets  
    - Supports GPU inference  


??? tool "Glorbit Web Platform"
    [Glorbit](https://glorbit.app) is the browser-based tool used in global deployments for image capture, alignment, segmentation, and measurement.

    While the *clinical deployment platform* is restricted, the app home page is publicly available.

    **Includes**
    - System architecture  
    - Security + encryption workflow  
    - Measurement pipeline flow  
    - Example outputs  

    **Public Documentation:** Coming soon (non-PHI, non-deployment version).

---

## Public Datasets

Only datasets that can be distributed publicly are included here.

??? dataset-public "Periorbital Segmentation Dataset — *Labeled Subset*"
    A curated subset of periorbital segmentation images with eyelid/sclera/iris/brow masks. Available for download [here](https://zenodo.org/records/13916845).

    **Contents**

    - High-quality labeled masks  
    - Annotation protocol  

    **Use cases**

    - Segmentation research  
    - SSL exploration  
    - Domain adaptation experiments  


??? dataset-public "Periorbital OOD Dataset — *Web-Scraped*"

    A small collection of publicly sourced periorbital and facial images curated for OOD testing. Available for download [here](https://drive.google.com/drive/folders/1aPdEuIHHsBLZH3pSsQAQdjY1Z06-rHDN).

    **Use cases**

    - Testing generalization  
    - Robustness benchmarking  
    - Domain shift research  


---

## Annotation Tools

Tools for standardized annotation. More coming soon here.

??? tool "ImageJ Periorbital Measurement Plugin"
    A custom ImageJ macro for manually annotating:
    - MRD1  
    - MRD2  
    - PFH  
    - Eyelid contour distances  
    - Brow position  


    Contact jpeter56@uic.edu for access.


