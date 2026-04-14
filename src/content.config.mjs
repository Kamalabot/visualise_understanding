// src/content.config.ts
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		// Use Starlight's dedicated loader instead of the generic glob
		loader: docsLoader(),
		schema: docsSchema(),
	}),
};