import { z, defineCollection } from "astro:content";

const schema = z
  .object({
    date: z.date(),
    updated: z.date().optional(),
    deleted: z.date().optional(),
    title: z.string(),
    summary: z.string().optional(),
    category: z.array(z.string()).optional(),
    "bookmark-of": z.string().optional(),
    "like-of": z.string().optional(),
    "repost-of": z.string().optional(),
    "in-reply-to": z.string().optional(),
    link: z.string().optional(),
    published: z.boolean().optional(),
    visibility: z.string().optional(),
  })
  .strict();

export const collections = {
  'blog': defineCollection({ schema: schema }),
};
