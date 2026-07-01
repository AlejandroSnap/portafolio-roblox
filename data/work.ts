import { SITE_BASE_PATH } from "@/lib/constants";

// ---------------------------------------------------------------------------
// This file is the single source of truth for everything in the Work
// section: projects, commissions, collabs, anything you want to show off.
//
// To add a new item, copy the example below and fill in your own data.
// To pin an item at the top of the section, set `featured: true` featured
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
  slug: string; // Used in the URL: /work/<slug>/ keep it short and unique
  title: string;
  kind: WorkKind;
  description: string; // Short description (shown on the card)
  longDescription: string; // Long description (shown on the detail page)
  date?: string; // e.g. "March 2024". If omitted, the date is just hidden.
  technologies: string[];
  features: string[]; // Shown as low-key tags at the bottom of the detail page
  image: string; // Card thumbnail put the file in /public/img/work/
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
    slug: "obby-to-outdo-your-ex",
    title: "Obby to outdo your ex",
    kind: "project",

    description:
      "A Roblox obby where I built most of the core systems and UI from scratch.",

    longDescription:
      "I've been working on this obby for a while now and built a big chunk of what makes it work progression, player menus, cosmetics, monetization, daily rewards, social stuff. Everything is set up to be easy to expand so adding new features doesn't turn into a mess. Still actively working on it.",

    technologies: [
      "Luau",
      "Roblox Studio",
      "UI Design",
      "Client-Server Architecture",
    ],

    features: [
      "Level selector",
      "Advanced radio system",
      "Player menu (Auras, Settings, Trails, Titles & Pets)",
      "Pet system",
      "Game Pass integration",
      "Daily rewards",
      "Level progression system",
      "Per-level checkpoints",
      "Leaderboards",
      "Donation system & donation leaderboard",
      "Badge system with custom notifications",
      "Completed level rewards",
    ],

    image: `${SITE_BASE_PATH}/img/work/obby-to-outdo-your-ex.png`,
    robloxUrl: `https://www.roblox.com/games/133634702197989/Obby-para-superar-a-tu-ex`,
    featured: true,
  },

  {
    slug: "find-the-number-or-explode",
    title: "Find The Number Or Explode",
    kind: "project",

    description:
      "1v1 competitive game based on the number-finding challenges that blew up on TikTok.",

    longDescription:
      "Two players race to find the right number before the other one does. On top of the main gameplay I added a bunch of stuff to keep players coming back inventory, cosmetics, quests, daily rewards, playtime rewards, a reward obby. The UI is animated and has sound feedback, which makes it feel a lot more polished than it sounds.",

    technologies: [
      "Luau",
      "Roblox Studio",
      "UI Design",
      "Game Design",
      "Client-Server Architecture",
    ],

    features: [
      "1v1 competitive gameplay",
      "Inventory system",
      "Shop system",
      "Cosmetics (chairs and bombs)",
      "Leaderboard",
      "Playtime rewards",
      "Daily login rewards",
      "Quest system",
      "Reward-based obby",
      "Animated UI",
      "Interactive sound effects",
    ],

    image: `${SITE_BASE_PATH}/img/work/find-the-number-or-explode.png`,
    robloxUrl: `https://www.roblox.com/games/116158778712571/Find-the-Number-Or-Explode`,
    featured: true,
  },

  {
    slug: "step-risk-rng",
    title: "Step Risk RNG",
    kind: "project",

    description:
      "RNG game where walking forward gives you rewards but the further you go, the higher the death chance.",

    longDescription:
      "Probably the most complete game I've made so far. You walk forward to get random rewards, but your chance of dying also goes up the further you get. That tension is what makes it fun. I built the whole thing auras, upgrades, rebirths, leaderboards, monetization, admin tools all in a modular way so it's easy to maintain and add stuff later.",

    technologies: [
      "Luau",
      "Roblox Studio",
      "UI Design",
      "Game Design",
      "Client-Server Architecture",
    ],

    features: [
      "Risk-reward progression system",
      "Random reward system",
      "Luck wheel",
      "Aura system",
      "Upgradeable movement speed",
      "Death chance reduction upgrades",
      "Advanced rebirth system",
      "Rebirth multipliers and permanent upgrades",
      "Leaderboard & donation leaderboard",
      "Advanced monetization systems",
      "Modular architecture",
      "Admin command system for game passes and rewards",
    ],

    image: `${SITE_BASE_PATH}/img/work/step-risk-rng.png`,

    robloxUrl: `https://www.roblox.com/games/78393082925300/Step-Risk-RNG`,

    media: {
      type: "youtube",
      videoId: "6XrMpl_VsxE",
    },

    featured: true,
  },

  {
    slug: "guess-the-refrain",
    title: "Guess The Refrain",
    kind: "project",

    description:
      "Pick the right door or get eliminated based on the door-choosing trend on Roblox.",

    longDescription:
      "Simple concept: pick a door, wrong choice and you're out. I added a troll system, a hidden easter egg, a correct door that rotates every 5 minutes so it stays unpredictable, and some monetization built around the gameplay. Nothing overcomplicated, but it came out pretty solid.",

    technologies: [
      "Luau",
      "Roblox Studio",
      "UI Design",
      "Game Design",
    ],

    features: [
      "Configurable door system",
      "Door layouts editable through configuration",
      "Correct door rotates every 5 minutes",
      "Hidden easter egg (#67)",
      "Player troll system with fun interactions",
      "Advanced monetization system",
      "In-game game pass promotion system",
      "Replayability-focused gameplay",
    ],

    image: `${SITE_BASE_PATH}/img/work/guess-the-refrain.png`,

    robloxUrl: `https://www.roblox.com/games/119864785994624/Guess-The-Refrain`,

    media: {
      type: "youtube",
      videoId: "Zf6ovvS6u-Y",
    },

    featured: true,
  },

  {
    slug: "perfect-order",
    title: "Perfect Order",
    kind: "project",

    description:
      "1v1 game where you race to sort numbers in order before your opponent does.",

    longDescription:
      "Took the viral TikTok number-ordering challenge and turned it into a proper Roblox game. Beyond the 1v1 gameplay there's progression, cosmetics, quests, daily rewards and a reward obby basically the same retention loop as Find The Number, but the core mechanic is completely different and felt worth building separately.",

    technologies: [
      "Luau",
      "Roblox Studio",
      "UI Design",
      "Game Design",
      "Client-Server Architecture",
    ],

    features: [
      "1v1 competitive gameplay",
      "Inventory system",
      "Shop system",
      "Chair cosmetics",
      "Leaderboard",
      "Playtime rewards",
      "Daily login rewards",
      "Quest system",
      "Reward-based obby",
      "Animated UI",
      "Interactive sound effects",
    ],

    image: `${SITE_BASE_PATH}/img/work/perfect-order.png`,

    media: {
      type: "youtube",
      videoId: "hvkE8G5DoKs",
    },

    robloxUrl: "https://www.roblox.com/games/96713219134341/Perfect-Order",
    featured: true,
  },

  {
    slug: "quests-system",
    title: "Quests System",
    kind: "other",
    description:
      "Modular quest system you can drop into a game and customize without much effort.",
    longDescription:
      "Built this as a standalone system that's easy to plug into different types of games. You configure the quests, objectives and rewards however you need, and there's an optional refill feature so players can buy more quests with Robux after they finish the available ones.",

    technologies: ["Luau", "Roblox Studio", "UI Design", "Game Design"],

    features: [
      "Easily customizable quests",
      "Simple objective and reward configuration",
      "Quest refill system with Robux",
      "Modular architecture",
      "Easy integration",
    ],

    image: `${SITE_BASE_PATH}/img/work/quests-system.png`,

    media: {
      type: "youtube",
      videoId: "PUbeQy2NTk4",
    },

    robloxUrl: "https://www.roblox.com/games/135177212718303/Quests-System",
    featured: false,
  },

  {
    slug: "ragdoll-system-r6",
    title: "Ragdoll System R6",
    kind: "other",
    description: "Lightweight ragdoll system for R6 characters, easy to integrate.",
    longDescription:
      "A simple R6 ragdoll system. It handles the physics without being heavy or complicated, and the code is set up so you can customize the behavior for whatever mechanic you're building around it.",

    technologies: ["Luau", "Roblox Studio"],

    features: [
      "Easy integration",
      "Smooth physics simulation",
      "Modular architecture",
      "Customizable behavior",
      "Optimized for R6 characters",
    ],

    image: `${SITE_BASE_PATH}/img/work/ragdoll-r6.png`,
    media: {
      type: "youtube",
      videoId: "A9Wd6oRAoZY",
    },

    robloxUrl: "https://www.roblox.com/games/139487364515924/Ragdoll-System-R6",
  },

  {
    slug: "leaderboard-system",
    title: "Leaderboard System",
    kind: "other",
    description: "Class-based leaderboard system, easy to set up and customize.",
    longDescription:
      "A leaderboard system built with a class-based structure so you can spin up multiple leaderboards without duplicating code. Easy to drop in, easy to customize, easy to maintain.",

    technologies: ["Luau", "Roblox Studio"],

    features: [
      "Class-based architecture",
      "Easy integration",
      "Fully customizable",
      "Supports multiple leaderboards",
      "Modular and maintainable code",
    ],

    media: {
      type: "youtube",
      videoId: "rdwf0Kh5xg4",
    },

    image: `${SITE_BASE_PATH}/img/work/leaderboard-system.png`,
    robloxUrl: "https://www.roblox.com/games/103844629443358/Leaderboard",
  },

  // {
  //   slug: "donation-leaderboard-system",
  //   title: "Donation Leaderboard System",
  //   kind: "other",
  //   description: "h",
  //   longDescription: "h",
  //   technologies: ["1"],

  //   features: [],

  //   image: `${SITE_BASE_PATH}/img/work/quests-system.png`,
  // },

  // {
  //   slug: "codes-system",
  //   title: "Codes System",
  //   kind: "other",
  //   description: "h",
  //   longDescription: "h",
  //   technologies: ["1"],

  //   features: [],

  //   image: `${SITE_BASE_PATH}/img/work/quests-system.png`,
  // },

  // {
  //   slug: "settings-system",
  //   title: "Settings System",
  //   kind: "other",
  //   description: "h",
  //   longDescription: "h",
  //   technologies: ["1"],

  //   features: [],

  //   image: `${SITE_BASE_PATH}/img/work/quests-system.png`,
  // },

  {
    slug: "obby-features",
    title: "Obby Features",
    kind: "other",
    description: "A full obby framework with progression, UI effects, and monetization built in.",
    longDescription:
      "A ready to use obby system with automatic progress saving, checkpoints, monetization, and some UI polish. The code is modular so it's straightforward to expand or adapt for different styles of obby game.",

    technologies: ["Luau", "Roblox Studio"],

    features: [
      "Automatic progress saving",
      "Checkpoint system",
      "Advanced monetization system",
      "Fully modular codebase",
      "UI Effects",
    ],
    featured: true,

    media: {
      type: "youtube",
      videoId: "LoHhkubbkIw",
    },

    robloxUrl: "https://www.roblox.com/games/101295608373599/Obby-features",

    image: `${SITE_BASE_PATH}/img/work/obby-features.png`,
  },

  {
    slug: "nuke-bomb",
    title: "Nuke Bomb",
    kind: "other",
    description: "A nuke event with countdown, visual effects, and map-wide destruction.",
    longDescription:
      "A nuke system you can drop into a game. It has a countdown, camera shake, visual and sound effects, and configurable settings. Simple to set up and easy to tweak.",

    technologies: ["Luau", "Roblox Studio"],

    features: [
      "Customizable countdown",
      "Visual and sound effects",
      "Camera shake",
      "Configurable settings",
    ],

    image: `${SITE_BASE_PATH}/img/work/nuke-bomb.png`,
    media: {
      type: "youtube",
      videoId: "6g5-cAqpcPY",
    },
  },
];
