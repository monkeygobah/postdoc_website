<!-- docs/side_quests.md -->
# Side Quest Projects

Side quests are focused, self-contained research projects that meaningfully contribute to the UIC Global Oculomics Initiative while remaining independent from the main objectives of dataset assembly, multimodal pretraining, and global deployments.
They are ideal for collaborators seeking well-defined work with clear scientific value and tangible outputs.

Explore some side quests below that we have been thinking about, but just don't have time to work on right now!


??? sidequest-ssl "Semi-Supervised Segmentation & Distance Prediction"

    Modern semi-supervised learning (SSL) techniques can dramatically reduce reliance on expert annotations by leveraging unlabeled images. Because segmentation is a rate-limiting step for high-quality periorbital distance prediction, SSL has the potential to unlock tens of thousands of additional training images. Much work has been done recently on the topic of semi supervised segmentation, and adapting existing methods as well as developing new ones on our datasets would be highly interesting.

    **Why This Matters**  

    - Enables scaling segmentation beyond labeled clinical datasets  
    - Improves downstream periorbital distance accuracy  
    - Enhances generalization to global sites and diseased eyes  
    - Supports pretraining and fine-tuning robustness

    **Skills Needed:** PyTorch, segmentation models, data wrangling, ML foundational knowledge


??? sidequest-ood "Web-Scraped OOD Dataset"

    A major challenge for Global Oculomics is the lack of diverse, globally representative datasets for testing out-of-distribution robustness. Publicly accessible images (clinical galleries, surgical teaching sites, educational videos) contain enormous untapped diversity, but need systematic extraction and curation. Additionally, attention msut be paid to the licensing of available images and ethics of using publicly avaialble data, both topics which could be explored in this work.

    **Why This Matters**

    - Expand the open OOD benchmark in oculoplastics/craniofacial surgery  
    - Tests periorbital distance robustness across real-world variation  
    - Critical for the foundational model's generalization  
    - Enables research in domain shift and morphology variation  

    **Potential Data Sources**

    - Pubmed
    - Public hospital before/after galleries  
    - Craniofacial surgical society archives  
    - Dermatology/ophthalmology case blogs  
    - YouTube surgery lectures (frame extraction)  
    - Educational conference material  


    **Skills Needed:** Python scraping, data wrangling, basic computer vision  
