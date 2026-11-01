interface Profile {
	fullName: string
	title: string
	institute: string
	author_name: string
	research_areas: { title: string; description: string; field: string }[]
}

export const profile: Profile = {
	fullName: 'Abian Hernandez',
	title: 'Ph.D.',
	institute: 'University of Las Palmas de Gran Canaria',
	author_name: 'Abian Hernandez-Guedes', // Author name to be highlighted in the papers section
	research_areas: [
		{
			title: 'Interpretable Deep Learning',
			description:
				'Information-theoretic methods to understand, evaluate and validate deep learning models in critical domains.',
			field: 'computer-science',
		},
		{
			title: 'World Models',
			description:
				'World models for agentic systems, enabling learning, planning and decision-making in both physical and virtual environments.',
			field: 'computer-science',
		},
		{
			title: 'Medical Image Analysis',
			description:
				'Segmentation, registration and classification of multimodal medical images, including hyperspectral imaging.',
			field: 'engineering',
		},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'abianhernandez@outlook.es',
	linkedin: 'https://www.linkedin.com/in/ahguedes/',
	x: '',
	bluesky: '',
	github: 'https://github.com/SolidusAbi',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?hl=es&user=-ujkFqwAAAAJ',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0002-2508-2845',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
