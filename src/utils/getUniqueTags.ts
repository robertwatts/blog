import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  let tags: string[] = [];
  const filteredPosts = posts.filter(({ id, data }) => !data.draft);
  filteredPosts.forEach(post => {
    // Category is a tag
    const categoryTags: string[] = post.data.category;

    tags = [...tags, ...categoryTags || []]
      .map(tag => slugifyStr(tag))
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      );
  });
  return tags;
};

export default getUniqueTags;
