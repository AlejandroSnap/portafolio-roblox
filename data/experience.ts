export type ServiceItem = {
  title: string;
  description: string;
  examples: string[];
  icon: "game" | "system" | "tools";
};

export const services: ServiceItem[] = [
  {
    title: "Complete Roblox games",
    description:
      "Turn a game idea into a playable experience, with the gameplay, interfaces, and supporting systems working together.",
    examples: ["Core gameplay", "Player progression", "UI & monetization"],
    icon: "game",
  },
  {
    title: "Systems that fit your game",
    description:
      "Custom, modular systems built around what your project needs and designed to be straightforward to expand.",
    examples: [
      "Quests & rewards",
      "Inventories & shops",
      "Data & leaderboards",
    ],
    icon: "system",
  },
  {
    title: "A better existing project",
    description:
      "Keep your game moving forward with new features, bug fixes, performance improvements, and cleaner code.",
    examples: ["Bug fixing", "Optimization", "New features"],
    icon: "tools",
  },
];
