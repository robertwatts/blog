import contentTypeIcons from "@assets/contentTypeIcons";
import getContentType from "@utils/getContentType";
import React from "react";
import type { ContentType } from "types";

export interface Props {
  id: string;
  size?: "sm" | "lg";
  className?: string;
}

export default function ContentType({ id, size = "sm", className }: Props) {
  const type = getContentType(id) as ContentType;
  
  return (
    <div className={`flex items-center space-x-2 opacity-80 ${className}`}>
      <span
        className={`${size === "sm" ? "scale-90" : "scale-100"
          } inline-block h-6 w-6 fill-skin-base`}
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: contentTypeIcons[type], }} />
      <span className="sr-only">Type:</span>
      <span className={`italic ${size === "sm" ? "text-sm" : "text-base"}`}>
        {type}
      </span>
    </div>
  );
}

