import type { BlogFrontmatter } from "@content/_schemas";
import type { ContentTypeObject } from "types";
import Datetime from "./Datetime";
import ContentType from "./ContentType";
import React from "react";
import type { CollectionEntry } from "astro:content";

export interface Props {
  post: CollectionEntry<BlogFrontmatter>;
  secHeading?: boolean;
}

export default function Card({ post, secHeading = true }: Props) {
  const { title, date, summary } = post.frontmatter;
  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className="text-lg font-medium decoration-dashed hover:underline">
            {title}
          </h2>
        ) : (
          <h3 className="text-lg font-medium decoration-dashed hover:underline">
            {title}
          </h3>
        )}
      </a>
      <ContentType id={post.id} />
      <Datetime datetime={date} />
      <p>{summary}</p>
    </li>
  );
}
