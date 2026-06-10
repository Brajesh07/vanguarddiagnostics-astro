import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    category: z.string().optional(),
    image: z.object({
      url: z.string(),
      width: z.number().optional(),
      height: z.number().optional(),
    }).optional(),
    graphicPlaceholders: z.array(z.object({
      type: z.enum(['chart', 'table']),
      description: z.string(),
      altText: z.string(),
      data: z.array(z.record(z.any())),
    })).optional(),
    unsplashImages: z.array(z.object({
      url: z.string(),
      altText: z.string(),
      width: z.number().optional(),
      height: z.number().optional(),
    })).optional(),
    tags: z.array(z.string()).optional(),
    isFeatured: z.boolean().optional(),
    readTime: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = { blog };
