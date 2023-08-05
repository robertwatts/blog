import type { ContentTypeIcons } from "../types";

const contentTypeIcons: ContentTypeIcons = {
  Article: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-notes"
    stroke-linecap="round"
    stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
     <path d="M9 7l6 0"></path>
     <path d="M9 11l6 0"></path>
     <path d="M9 15l4 0"></path>
  </svg>`,
  Audio: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-headphones"
    stroke-linecap="round"
    stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z"></path>
     <path d="M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z"></path>
     <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
  </svg>`,
  Bookmark: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-bookmark"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
  </svg>`,
  Checkin: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-map-pin"
    stroke-linecap="round"
    stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
     <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
  </svg>`,
  Like: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-thumb-up"
    stroke-linecap="round"
    stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
  </svg>`,
  Note: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-note"
    stroke-linecap="round"
    stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M13 20l7 -7"></path>
     <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7"></path>
  </svg>`,
  Photo: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-camera"
    stroke-linecap="round"
    stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
     <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
  </svg>`,
  Reply: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-messages"
    stroke-linecap="round"
    stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
      <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
  </svg>`,
  Repost: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-star-filled"
    stroke-linecap="round"
    stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
  </svg>`,
  RSVP: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-calendar"
    stroke-linecap="round"
    stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
     <path d="M16 3v4"></path>
     <path d="M8 3v4"></path>
     <path d="M4 11h16"></path>
     <path d="M11 15h1"></path>
     <path d="M12 15v3"></path>
  </svg>`,
  Video: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-video"
    stroke-linecap="round"
    stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"></path>
     <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
  </svg>`,
}

export default contentTypeIcons;
