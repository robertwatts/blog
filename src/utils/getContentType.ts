import { CONTENT_TYPES } from "@config";
import type { ContentType } from "types";

const defaultContentType = "Note";

/**
 * Returns the ContentType from a CollectionEntry's id (file path)
 * Defaults to "Note" if no ContentType is found
 * https://docs.astro.build/en/reference/api-reference/#id
 */
const getContentType = (id: string): ContentType => {
  const slashIndex = id.indexOf("/");

  if (slashIndex < 0) {
    return defaultContentType;
  }

  const folder = id.substring(0, slashIndex);
  const contentTypeObject = CONTENT_TYPES.find(contentType => contentType.folder === folder);
  return contentTypeObject ? contentTypeObject.name : defaultContentType;
}

export default getContentType;
