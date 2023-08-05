import type { Site, SocialObjects, ContentTypeObject } from "./types";

export const SITE: Site = {
  website: "https://robwatts.org/",
  author: "Rob Watts",
  desc: "The personal blog of Rob Watts.",
  title: "robwatts.org",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/robertwatts",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/robertjoelwatts/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:rw@robwatts.org",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/rwatts_",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://social.lol/@robwatts",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];

export const CONTENT_TYPES: ContentTypeObject[] = [
  {
    name: "Article",
    folder: "articles",
  },
  {
    name: "Note",
    folder: "notes",
  },
  {
    name: "Bookmark",
    folder: "bookmarks",
  },
  {
    name: "Like",
    folder: "likes",
  },
  {
    name: "Reply",
    folder: "replies",
  },
  {
    name: "Repost",
    folder: "reposts",
  },
  {
    name: "RSVP",
    folder: "replies",
  },
  {
    name: "Event",
    folder: "events",
  },
  {
    name: "Checkin",
    folder: "checkins",
  },
  {
    name: "Photo",
    folder: "photos",
  },
  {
    name: "Audio",
    folder: "audio",
  },
  {
    name: "Video",
    folder: "videos",
  }
]
