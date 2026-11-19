import { work, type WorkItem } from "@/data/work";

export const selectedWork = work
  .filter((item) => item.featuredRank !== undefined || item.featured)
  .sort((a, b) => (a.featuredRank ?? Infinity) - (b.featuredRank ?? Infinity))
  .slice(0, 3);

export function getWorkRole(item: WorkItem) {
  return (
    item.role ??
    (item.category === "system" ? "Custom system development" : "Game development")
  );
}
