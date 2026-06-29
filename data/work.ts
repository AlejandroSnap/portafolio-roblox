import { SITE_BASE_PATH } from "@/lib/constants";

// ---------------------------------------------------------------------------
// This file is the single source of truth for everything in the Work
// section: projects, commissions, collabs, anything you want to show off.
//
// To add a new item, copy the example below and fill in your own data.
// To pin an item at the top of the section, set `featured: true` — featured
// items show up first, in the order they appear in this file. Everything
// else is sorted alphabetically by title automatically.
// ---------------------------------------------------------------------------

// Media shown on the detail page:
// - "youtube": embeds a YouTube video by videoId (the part after watch?v=)
// - "gallery": shows an image carousel (pass one or more image paths)
export type WorkMedia =
  | { type: "youtube"; videoId: string }
  | { type: "gallery"; images: string[] };

// The kind of work this item represents. Lets the same section host
// projects, commissions, collabs, etc. without separate pages for each.
export type WorkKind = "project" | "commission" | "collab" | "other";

export type WorkItem = {
  slug: string; // Used in the URL: /work/<slug>/ — keep it short and unique
  title: string;
  kind: WorkKind;
  description: string; // Short description (shown on the card)
  longDescription: string; // Long description (shown on the detail page)
  date?: string; // e.g. "March 2024". If omitted, the date is just hidden.
  technologies: string[];
  features: string[]; // Shown as low-key tags at the bottom of the detail page
  image: string; // Card thumbnail — put the file in /public/img/work/
  media?: WorkMedia; // Media shown on the detail page
  robloxUrl?: string; // If set, shows the "View on Roblox" button
  github?: string; // If set, shows a "View source" button
  // Featured items are pinned at the top, in the order they appear here.
  // Everything else is sorted alphabetically by title.
  featured?: boolean;
};

export const workKindLabels: Record<WorkKind, string> = {
  project: "Project",
  commission: "Commission",
  collab: "Collaboration",
  other: "Work",
};

export const work: WorkItem[] = [
  {
    slug: "perfect-order",
    title: "Perfect Order",
    kind: "project",
    description: "h",
    longDescription: "a",

    technologies: ["Lua", "Roblox Studio", "UI Design", "Game Design"],
    features: ["Dynamic team system", "Custom build mechanic", "Live updates"],
    
    image: `${SITE_BASE_PATH}/img/work/quests-system.png`,
    media: {
      type: "gallery",
      images: [`${SITE_BASE_PATH}/img/work/quests-system.png`],
    },

    robloxUrl: "https://www.roblox.com/games/",
    featured: true,
  },

  {
    slug: "bridge-race-teams",
    title: "Bridge Race Teams",
    kind: "other",
    description:
      "Team-based competitive game where the first team to build their bridge and reach the goal wins.",
    longDescription:
      "Bridge Race Teams is a multiplayer game where teams compete to build bridges as fast as possible. Each player collects blocks in their team's color and places them strategically to move forward. The first team to reach the goal wins the round.",
    // date: "January 2024",
    technologies: ["Lua", "Roblox Studio", "UI Design", "Game Design"],
    features: ["Dynamic team system", "Custom build mechanic", "Live updates"],
    image: `${SITE_BASE_PATH}/img/work/quests-system.png`,
    // Swap this for a real YouTube video, or switch to a gallery like:
    // media: { type: "gallery", images: [`${SITE_BASE_PATH}/img/work/bridge-race-teams-1.png`] },
    media: {
      type: "gallery",
      images: [`${SITE_BASE_PATH}/img/work/quests-system.png`],
    },
    robloxUrl: "https://www.roblox.com/games/",
    featured: false,
  },
];
