export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
};

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SocialMedia =
  | "Github"
  | "Facebook"
  | "Instagram"
  | "LinkedIn"
  | "Mail"
  | "Twitter"
  | "Twitch"
  | "YouTube"
  | "WhatsApp"
  | "Snapchat"
  | "Pinterest"
  | "TikTok"
  | "CodePen"
  | "Discord"
  | "GitLab"
  | "Reddit"
  | "Skype"
  | "Steam"
  | "Telegram"
  | "Mastodon";

export type ContentTypeObject = {
  name: ContentType;
  folder: string;
};

export type ContentTypeIcons = {
  [contentType in ContentType]: string;
};

export type ContentType =
  | "Article"
  | "Audio"
  | "Bookmark"
  | "Checkin"
  | "Like"
  | "Note"
  | "Photo"
  | "Reply"
  | "Repost"
  | "RSVP"
  | "Video";
