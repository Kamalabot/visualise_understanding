import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	// Note: No 'base' property here for local testing
	site: 'https://kamalabot.github.io',
	base: '/visualise_understanding',
	integrations: [
		starlight({
			title: 'System Architect Docs',
			customCss: ['./src/styles/custom.css'],
			// Explicit sidebar mapping
			sidebar: [
				{ label: 'Home', link: '/' },
				{ 
					label: 'Simulations', 
					items: [
						{ label: 'Network Physics', link: '/simulations/network/' }
					] 
				},
			],
		}),
	],
});