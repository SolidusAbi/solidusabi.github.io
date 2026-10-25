export const experiences = [
	{
		company: 'AIMEN',
		time: '2025-Currently',
		title: 'AI Research',
		location: 'Pontevedra, Galicia',
		description: '...',
	},
	{
		company: 'Freelancer',
		time: '2024-2026',
		title: 'Software Engineer and Data Analyst',
		location: 'Remote',
		description: 'Developed .NET applications and AI educational tools. Delivered data solutions to support strategic decisions for clients.',
	},
	{
		company: 'University of Las Palmas de Gran Canaria',
		time: '2020-2024',
		title: 'Research staff',
		location: 'Gran Canaria, Spain',
		description: 'Conducted ML research for medical imaging with focus on interpretability, uncertainty, and diagnostic signal analysis.',
	},
	{
		company: 'University of Las Palmas de Gran Canaria',
		time: '2020-2020',
		title: 'Auxiliary Technical Staff',
		location: 'Gran Canaria, Spain',
		description: "Developed custom WordPress plugins to enhance digital infrastructure for academic platforms.",
	},
	{
		company: 'University of Las Palmas de Gran Canaria',
		time: '2017-2020',
		title: 'Research Staff',
		location: 'Gran Canaria, Spain',
		description: "Built algorithms for thermographic analysis in diabetic foot detection. Contributed to open-source tools and training in medical software.",
	},
	{
		company: 'Aerolaser System',
		time: '2016-2017',
		title: 'Software Engineer and Lidar Data Processing',
		location: 'Gran Canaria, Spain',
		description: 'Created tools for efficient LiDAR data visualization and classification.',
	},
	{
		company: 'Canaryfly',
		time: '2013-2015',
		title: 'Web Developer and Systems Administrator',
		location: 'Gran Canaria, Spain',
		description: 'Server administration, network design, and internal web development.',
	},
];


export const education = [
	{
		degree: 'Ph.D. in Telecomunication Technology and Computer Science',
		school: "University of Las Palmas de Gran Canaria",
		time: '2025',
		description: 'Thesis: Exploring Medical AI Interpretability through the Lens of Information Theory.',
		link: 'https://drive.google.com/file/d/1nARZVDUV4LhkOzA3U6L4JNYeKuamaikl/view?usp=drive_link'
		// description: 'Doctoral thesis addresses the interpretability of Artificial Intelligence in the medical context from the perspective of Information Theory.'
	},
	{
		degree: 'M.Sc. in Telecomunication Technology',
		school: "University of Las Palmas de Gran Canaria",
		time: '2017',
		description: 'Thesis: HyperSpectral Image Classifier Implementation on GPUs.',
		link: 'https://accedacris.ulpgc.es/handle/10553/77431'
	},
	{
		degree: 'B.Sc. in Computer Science',
		school: "University of Las Palmas de Gran Canaria",
		time: '2015',
		description: 'Dissertation: Application of the Atlante supercomputer in the automatic classification of zooplankton from images.',
		link: 'https://accedacris.ulpgc.es/handle/10553/9039'
	},
	// {
	// 	school: 'University of Paris',
	// 	time: '1891 - 1895',
	// 	degree: 'Master’s in Physics and Mathematics',
	// 	location: 'Paris, France',
	// 	description: 'Graduated at the top of her class in physics and second in mathematics.',
	// },
];

export const skills = [
	{
		title: 'Analytical Thinking & Scientific Foundations',
		description: 'Combines scientific and engineering knowledge with an abstract, pattern-oriented mindset to develop cross-domain solutions.',
		badges: ['Computer Science', 'Information Theory', 'Probability Theory', 'Linear Algebra', 'Machine Learning', 'Signal Processing', 'Software Engineering'],
	},
	{
		title: 'Programming Paradigms & Tools',
		description: 'Proficient in both object-oriented and functional programming, with a strong focus on problem-solving, algorithmic thinking, and performance-aware design.',
		badges: ['Python', 'C/C++', 'Rust', 'JavaScript', 'Scheme', 'CMake', 'Bash', 'Git', 'SQL', 'Qt']
	},
	{
		title: 'Machine Learning Tools',
		description: 'Experienced across core Machine Learning paradigms, with a deep learning focus and extensive use of PyTorch and related frameworks.',
		badges: ['Pytorch', 'TensorFlow', 'Numpy', 'Pandas', 'SciPy', 'Scikit-Learn']
	},
];

export const publications = [
	{
		title: 'AI-Driven Gesture and Action Recognition for Learning Medicine Through Virtual Reality',
		authors: 'Daniel Arias-Ruiz-Esquide, Jose Juan Reyes-Cabrera, Abian Hernandez-Guedes, Agustín Trujillo-Pino, Miguel Angel Rodriguez-Florido',
		journal: 'International Conference on Computer Aided Systems Theory 2024',
		time: '2025',
		link: 'https://link.springer.com/chapter/10.1007/978-3-031-82957-4_8',
		abstract: 'Virtual reality (VR) has emerged as a prominent immersive technology, demonstrating significant potential for enhancing education and has been shown as an effective and efficient tool specifically for medical education. VR requires the utilization of dedicated wearable devices that, when worn by students, facilitate the creation of an immersive virtual environment and enable them to interact with both other students and virtual objects within it. However, the use of these gadgets may produce a distortion of the gestures and actions actually performed by the student, causing errors within the environment due to the technology itself and not the student’s mistaken intention. In medical education, this effect of convoluting the student’s own intention with what the hardware interface might limit is of vital importance, as it may result in a, medically speaking, erroneous action or gesture in the virtual scenario. Therefore, in medical education, virtual reality applications should be smart and able to correct these technology-related issues and limitations. In this work, we present our analysis, strategy, and approach to propose AI-based solutions that minimize this limitation in VR-based medical education, describing some experiments that we will conduct with medical students at our University to improve the response of virtual reality in medical learning evaluation.',
	},
	{
		title: 'Development of a visible to 1600 nm hyperspectral imaging rigid-scope system using supercontinuum light and an acousto-optic tunable filter',
		authors: 'Toshihiro Takamatsu, Ryodai Fukushima, Kounosuke Sato, Masakazu Umezawa, Hideo Yokota, Kohei Soga, Abian Hernandez-Guedes, Gustavo M Callico, Hiroshi Takemura',
		journal: 'Optics Express',
		time: '2024',
		link: 'https://opg.optica.org/oe/fulltext.cfm?=oe-32-9-16090&id=549061',
		abstract: 'In this study, we developed a rigid-scope system that can perform hyperspectral imaging (HSI) between visible and 1600 nm wavelengths using a supercontinuum light source and an acousto-optic tunable filter to emit specific wavelengths. The system optical performance was verified, and the classification ability was investigated. Consequently, it was demonstrated that HSI (490–1600 nm) could be performed. In addition, seven different targets could be classified by the neural network with an accuracy of 99.6%, recall of 93.7%, and specificity of 99.1% when the wavelength range of over 1000 nm (OTN) was extracted from HSI data as train data.',
	},
	{
		title: 'Contrastive Learning approach for blind Hyperspectral Unmixing (CLHU)',
		authors: 'Abian Hernandez-Guedes, Ryodai Fukushima, Toshihiro Takamatsu, Himar Fabelo, Juan Ruiz-Alzola, Hiroshi Takemura, Gustavo M Callico',
		journal: 'Preprint',
		time: '2023',
		link: 'https://d197for5662m48.cloudfront.net/documents/publicationstatus/180314/preprint_pdf/5b7d0333a0e713453a1d339fc901d8c4.pdf',
		abstract: 'The Contrastive Learning for blind Hyperspectral Unmixing (CLHU) is a self-supervised deep learning approach for blind hyperspectral unmixing. Unlike existing deep learning methods that rely on reconstruction capabilities, CLHU leverages the input-endmembers relationship for abundance estimation. The endmembers are dynamically updated during training, controlled by two regularization factors. Extensive experiments demonstrate CLHU’s effectiveness, achieving state-of-the-art performance in hyperspectral unmixing. This novel approach offers a promising perspective for the field and holds potential for further enhancements in hyperspectral unmixing tasks',
	},
	{
		title: 'Detection of Exposed Nerves in Two Individuals In Vivo and Unexposed Nerves Ex Vivo with Near-Infrared Hyperspectral Laparoscope',
		authors: 'Ryodai Fukushima, Toshihiro Takamatsu, Kounosuke Sato, Abian Hernandez-Guedes, Gustavo M Callico, Kyouhei Okubo, Masakazu Umezawa, Hideo Yokota, Kouhei Soga, Hiroshi Takemura',
		journal: '2024 IEEE/SICE International Symposium on System Integration (SII)',
		time: '2024',
		link: 'https://ieeexplore.ieee.org/abstract/document/10417671',
		abstract: 'In this study, a laparoscopic device, which can conduct near-infrared hyperspectral imaging (NIR- HSI) was developed for the first time in the world. The optical system was developed with a spectroscopic element, AOTF, which enables non-invasive acquisition of specimen spectrum in the wavelength range of 490 nm to 1600 nm. Using this system, exposed nerves of living pigs were acquired; a total of four nerves from two pigs were imaged by a neural network using leave-one-out cross-validation procedure. The system provides accuracy of 84.6 %, recall of 65.7 %, and specificity of 85.3 %, respectively. In addition, a detection was performed on a specimen with a 2 mm thick mesentery membrane placed on top of the nerves extracted from a pig. The results were accuracy of 95.2 %, recall of 95.2 %, and specificity of 95.1 %, respectively. Through this study, the developed laparoscopic device is expected to be useful for visualization of tissues in living specimens and in deep tissues of the living body.',
	},
	{
		title: 'State-of-the-art features for early-stage detection of diabetic foot ulcers based on thermograms',
		authors: 'Natalia Arteaga-Marrero, Abian Hernandez-Guedes, Jordan Ortega-Rodríguez, Juan Ruiz-Alzola',
		journal: 'Biomedicines',
		time: '2023',
		link: 'https://www.mdpi.com/2227-9059/11/12/3209',
		abstract: 'Diabetic foot ulcers represent the most frequently recognized and highest risk factor among patients affected by diabetes mellitus. The associated recurrent rate is high, and amputation of the foot or lower limb is often required due to infection. Analysis of infrared thermograms covering the entire plantar aspect of both feet is considered an emerging area of research focused on identifying at an early stage the underlying conditions that sustain skin and tissue damage prior to the onset of superficial wounds. The identification of foot disorders at an early stage using thermography requires establishing a subset of relevant features to reduce decision variability and data misinterpretation and provide a better overall cost–performance for classification. The lack of standardization among thermograms as well as the unbalanced datasets towards diabetic cases hinder the establishment of this suitable subset of features. To date, most studies published are mainly based on the exploitation of the publicly available INAOE dataset, which is composed of thermogram images of healthy and diabetic subjects. However, a recently released dataset, STANDUP, provided data for extending the current state of the art. In this work, an extended and more generalized dataset was employed. A comparison was performed between the more relevant and robust features, previously extracted from the INAOE dataset, with the features extracted from the extended dataset. These features were obtained through state-of-the-art methodologies, including two classical approaches, lasso and random forest, and two variational deep learning-based methods. The extracted features were used as an input to a support vector machine classifier to distinguish between diabetic and healthy subjects. The performance metrics employed confirmed the effectiveness of both the methodology and the state-of-the-art features subsequently extracted. Most importantly, their performance was also demonstrated when considering the generalization achieved through the integration of input datasets. Notably, features associated with the MCA and LPA angiosomes seemed the most relevant.',
	},
	{
		title: 'Feature ranking by variational dropout for classification using thermograms from diabetic foot ulcers',
		authors: 'Abian Hernandez-Guedes, Natalia Arteaga-Marrero, Enrique Villa, Gustavo M Callico, Juan Ruiz-Alzola',
		journal: 'Sensors',
		time: '2023',
		link: 'https://www.mdpi.com/1424-8220/23/2/757',
		abstract: 'Diabetes mellitus presents a high prevalence around the world. A common and long-term derived complication is diabetic foot ulcers (DFUs), which have a global prevalence of roughly 6.3%, and a lifetime incidence of up to 34%. Infrared thermograms, covering the entire plantar aspect of both feet, can be employed to monitor the risk of developing a foot ulcer, because diabetic patients exhibit an abnormal pattern that may indicate a foot disorder. In this study, the publicly available INAOE dataset composed of thermogram images of healthy and diabetic subjects was employed to extract relevant features aiming to establish a set of state-of-the-art features that efficiently classify DFU. This database was extended and balanced by fusing it with private local thermograms from healthy volunteers and generating synthetic data via synthetic minority oversampling technique (SMOTE). State-of-the-art features were extracted using two classical approaches, LASSO and random forest, as well as two variational deep learning (DL)-based ones: concrete and variational dropout. Then, the most relevant features were detected and ranked. Subsequently, the extracted features were employed to classify subjects at risk of developing an ulcer using as reference a support vector machine (SVM) classifier with a fixed hyperparameter configuration to evaluate the robustness of the selected features. The new set of features extracted considerably differed from those currently considered state-of-the-art but provided a fair performance. Among the implemented extraction approaches, the variational DL ones, particularly the concrete dropout, performed the best, reporting an F1 score of 90% using the aforementioned SVM classifier. In comparison with features previously considered as the state-of-the-art, approximately 15% better performance was achieved for classification.',
	},
	{
		title: 'Performance evaluation of deep learning models for image classification over small datasets: Diabetic foot case study',
		authors: 'Abian Hernandez-Guedes, Idafen Santana-Perez, Natalia Arteaga-Marrero, Himar Fabelo, Gustavo M Callico, Juan Ruiz-Alzola',
		journal: 'IEEE Access',
		time: '2022',
		link: 'https://ieeexplore.ieee.org/abstract/document/9964207',
		abstract: 'Data scarcity is a common and challenging issue when working with Artificial Intelligence solutions, especially those including Deep Learning (DL) models for tasks such as image classification. This is particularly relevant in healthcare scenarios, in which data collection requires a long-lasting process, involving specific control protocols. The performance of DL models is usually quantified by different classification metrics, which may provide biased results, due to the lack of sufficient data. In this paper, an innovative approach is proposed to evaluate the performance of DL models when labeled data is scarce. This approach, which aims to detect the poor performance provided by DL models, in spite of traditional assessing metrics indicating otherwise, is based on information theoretic concepts and motivated by the Information Bottleneck framework. This methodology has been evaluated by implementing several experimental configurations to classify samples from a plantar thermogram dataset, focused on early stage detection of diabetic foot ulcers, as a case study. The proposed network architectures exhibited high results in terms of classification metrics. However, as our approach shows, only two of those models are indeed consistent to generalize the data properly. In conclusion, a new methodology was introduced and tested to identify promising DL models for image classification over small datasets without relying exclusively on the widely employed classification metrics. Example code and supplementary material using a state-of-the-art DL model are available at https://github.com/mt4sd/PerformanceEvaluationScarceDataset.',
	},
	{
		title: 'Towards skin cancer self-monitoring through an optimized MobileNet with coordinate attention',
		authors: 'María Castro-Fernández, Abian Hernandez-Guedes, Himar Fabelo, Francisco J Balea-Fernández, Samuel Ortega, Gustavo M Callicó',
		journal: '2022 25th Euromicro Conference on Digital System Design (DSD)',
		time: '2022',
		link: 'https://ieeexplore.ieee.org/abstract/document/9996849',
		abstract: 'Skin cancer is one of the most frequent type of cancer, which is tipically divided in two types: melanoma and non-melanoma. Melanoma is the least common, but also the deadliest of them if left untreated in early stages. Thus, skin cancer monitoring is key for early detection, which could be done with the help of mobile devices and artificial intelligence solutions. In this sense, local deployment is suggested to embrace simplicity and avoid data privacy and security issues. However, current high-performance neural networks are extremely challenging to be deployed in mobile devices due to resource constraint, so lighter but effective models are required to make local deployment possible. In this work, simplifying an already light model, such as MobileNetV2, is pursued, combining it with an attention mechanism to enhance the network´s capability to learn and compensate for the lack of information that simplifying the original architecture might cause. Fine-tuning was applied, using an autoencoder to pre-train the model on the CIFAR100 dataset. Experiments covering four scenarios were carried out using HAM10000 dataset. Promising results were obtained, reaching the best performance using a simplified MobileNetV2 combined with Coordinate Attention mechanism with less than a million parameters in total and up to a 83.93 % of accuracy.',
	},
	{
		title: 'Morphological foot model for temperature pattern analysis proposed for diabetic foot disorders',
		authors: 'Natalia Arteaga-Marrero, Lucas Christian Bodson, Abian Hernandez-Guedes, Enrique Villa, Juan Ruiz-Alzola',
		journal: 'Applied Sciences',
		time: '2021',
		link: 'https://www.mdpi.com/2076-3417/11/16/7396',
		abstract: 'Infrared thermography is a non-invasive and accessible tool that maps the surface temperature of a body. This technology is particularly useful for diabetic foot disorders, since it facilitates the identification of higher risk patients by frequent monitoring and therefore limits the incidence of disabling conditions. The aim of this work is to provide a methodology to explore the entire plantar aspects of both feet, based on infrared thermography, for the assessment of diabetic foot anomalies. A non-invasive methodology was established to identify areas of higher risk and track their progress via longitudinal monitoring. A standard morphological model was extracted from a group of healthy subjects, nine females and 13 males, by spatial image registration. This healthy foot model can be taken as a template for the assessment of temperature asymmetry, even in cases in which partial amputations or deformations are present. A pixel-wise comparison of the temperature patterns was carried out by Wilcoxon´s matched-pairs test using the corresponding template. For all the subjects, the left foot was compared to the contralateral foot, the right one, providing a map of statistically significant areas of variation, within the template, among the healthy subjects at different time points. In the female case, the main areas of variability were the boundaries of the feet, whereas for the male, in addition to this, substantial changes that exhibited a clear pattern were observed. A fast and simple monitoring tool is provided to be used for personalized medical diagnosis in patients affected by diabetic foot disorders.',
	},
	{
		title: 'Segmentation approaches for diabetic foot disorders',
		authors: 'Natalia Arteaga-Marrero, Abian Hernandez-Guedes, Enrique Villa, Sara Gonzalez-Perez, Carlos Luque, Juan Ruiz-Alzola',
		journal: 'Sensors',
		time: '2021',
		link: 'https://www.mdpi.com/1424-8220/21/3/934',
		abstract: 'Thermography enables non-invasive, accessible, and easily repeated foot temperature measurements for diabetic patients, promoting early detection and regular monitoring protocols, that limit the incidence of disabling conditions associated with diabetic foot disorders. The establishment of this application into standard diabetic care protocols requires to overcome technical issues, particularly the foot sole segmentation. In this work we implemented and evaluated several segmentation approaches which include conventional and Deep Learning methods. Multimodal images, constituted by registered visual-light, infrared and depth images, were acquired for 37 healthy subjects. The segmentation methods explored were based on both visual-light as well as infrared images, and optimization was achieved using the spatial information provided by the depth images. Furthermore, a ground truth was established from the manual segmentation performed by two independent researchers. Overall, the performance level of all the implemented approaches was satisfactory. Although the best performance, in terms of spatial overlap, accuracy, and precision, was found for the Skin and U-Net approaches optimized by the spatial information. However, the robustness of the U-Net approach is preferred.',
	},
	{
		title: 'SWIR Hyperspectral Imaging to Assess Neurocognitive Disorders Using Blood Plasma Samples',
		authors: 'Sonia Raquel León Martín, Abian Hernandez-Guedes, Himar Antonio Fabelo Gómez, Samuel Ortega Sarmiento, Francisco Javier Balea Fernandez, Gustavo Iván Marrero Callicó',
		journal: 'The international society for optics and photonics (SPIE)',
		time: '2021',
		link: 'https://www.spiedigitallibrary.org/eBooks/PM/Short-Wavelength-Infrared-Windows-for-Biomedical-Applications/Chapter13/SWIR-Hyperspectral-Imaging-to-Assess-Neurocognitive-Disorders-Using-Blood-Plasma/10.1117/3.2604326.ch13',
		abstract: 'An increase in life expectancy is correlated with an increase in the number of people affected by neurocognitive disorders (NCDs), causing major dependency and disability among the older adult population. Additionally, NCDs are not a natural or unavoidable outcome of aging. These types of disorders are a rapidly growing public health problem with nearly 10 million new cases every year, affecting over 50 million people worldwide in 2019. The most common form of NCD is Alzheimer’s disease (AD), accounting for 60% to 70% of NCD cases.',
	},
	{
		title: 'High-level synthesis of multiclass SVM using code refactoring to classify brain cancer from hyperspectral images',
		authors: 'Abelardo Baez, Himar Fabelo, Samuel Ortega, Giordana Florimbi, Emanuele Torti, Abian Hernandez-Guedes, Francesco Leporati, Giovanni Danese, Gustavo M. Callico, Roberto Sarmiento',
		journal: 'Electronics',
		time: '2019',
		link: 'https://www.mdpi.com/2079-9292/8/12/1494',
		abstract: 'Currently, high-level synthesis (HLS) methods and tools are a highly relevant area in the strategy of several leading companies in the field of system-on-chips (SoCs) and field programmable gate arrays (FPGAs). HLS facilitates the work of system developers, who benefit from integrated and automated design workflows, considerably reducing the design time. Although many advances have been made in this research field, there are still some uncertainties about the quality and performance of the designs generated with the use of HLS methodologies. In this paper, we propose an optimization of the HLS methodology by code refactoring using Xilinx SDSoCTM (Software-Defined System-On-Chip). Several options were analyzed for each alternative through code refactoring of a multiclass support vector machine (SVM) classifier written in C, using two different Zynq®-7000 SoC devices from Xilinx, the ZC7020 (ZedBoard) and the ZC7045 (ZC706). The classifier was evaluated using a brain cancer database of hyperspectral images. The proposed methodology not only reduces the required resources using less than 20% of the FPGA, but also reduces the power consumption −23% compared to the full implementation. The speedup obtained of 2.86× (ZC7045) is the highest found in the literature for SVM hardware implementations.',
	},
	{
		title: 'Automatic segmentation based on deep learning techniques for diabetic foot monitoring through multimodal images',
		authors: 'Abian Hernandez-Guedes, Natalia Arteaga-Marrero, Enrique Villa, Himar Fabelo, Gustavo M Callicó, Juan Ruiz-Alzola',
		journal: 'International conference on image analysis and processing (ICIAP)',
		time: '2019',
		link: 'https://link.springer.com/chapter/10.1007/978-3-030-30645-8_38',
		abstract: 'Temperature data acquired by infrared sensors provide relevant information to assess different medical pathologies in early stages, when the symptoms of the diseases are not visible yet to the naked eye. Currently, a clinical system that exploits the use of multimodal images (visible, depth and thermal infrared) is being developed for diabetic foot monitoring. The workflow required to analyze these images starts with their acquisition and the automatic feet segmentation. A novel approach is presented for automatic feet segmentation using Deep Learning employing an architecture composed of an encoder and decoder (U-Net architecture) and applying a segmentation of planes in point cloud data, using the depth information of pixels labeled in the neural network prediction. The proposed automatic segmentation is a robust method for this case study, providing results in a short time and achieving better performance than other traditional segmentation methods as well as a basic U-Net segmentation system.',
	},
	{
		title: 'Random forest training stage acceleration using graphics processing units',
		authors: 'Abian Hernandez-Guedes, Himar Fabelo, Samuel Ortega, Abelardo Báez, Gustavo M Callicó, Roberto Sarmiento',
		journal: '2017 32nd Conference on Design of Circuits and Integrated Systems (DCIS)',
		time: '2017',
		link: 'https://ieeexplore.ieee.org/abstract/document/8311636',
		abstract: 'Temperature data acquired by infrared sensors provide relevant information to assess different medical pathologies in early stages, when the symptoms of the diseases are not visible yet to the naked eye. Currently, a clinical system that exploits the use of multimodal images (visible, depth and thermal infrared) is being developed for diabetic foot monitoring. The workflow required to analyze these images starts with their acquisition and the automatic feet segmentation. A novel approach is presented for automatic feet segmentation using Deep Learning employing an architecture composed of an encoder and decoder (U-Net architecture) and applying a segmentation of planes in point cloud data, using the depth information of pixels labeled in the neural network prediction. The proposed automatic segmentation is a robust method for this case study, providing results in a short time and achieving better performance than other traditional segmentation methods as well as a basic U-Net segmentation system.',
	},
];
