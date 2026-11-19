"use client";

import { useState } from "react";
import type { WorkCategory, WorkItem } from "@/data/work";
import WorkCard from "./workCard";
import styles from "./workCollection.module.css";

const filters = [
  { key: "all", label: "All work" },
  { key: "game", label: "Games" },
  { key: "system", label: "Systems" },
] as const;

export default function WorkCollection({ items }: { items: WorkItem[] }) {
  const [filter, setFilter] = useState<"all" | WorkCategory>("all");
  const visible = items.filter(
    (item) => filter === "all" || item.category === filter,
  );
  const activeLabel = filters.find(({ key }) => key === filter)!.label;

  return (
    <section
      id="more-work"
      className="section"
      aria-labelledby="collection-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The full collection</p>
            <h2 id="collection-title" className="section-title">
              All my work,
              <br />
              in one place.
            </h2>
          </div>
          <p className="section-description">
            Explore all my Roblox games and custom systems. Pick a category to
            find the kind of work you’re looking for.
          </p>
        </div>
        <div className={styles.toolbar}>
          <div
            className={styles.filters}
            role="group"
            aria-label="Filter work by type"
          >
            {filters.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                aria-controls="work-results"
                className={filter === key ? styles.active : ""}
              >
                {label}
              </button>
            ))}
          </div>
          <p className={styles.count} role="status" aria-live="polite">
            {activeLabel} · {visible.length} {visible.length === 1 ? "project" : "projects"}
          </p>
        </div>
        <div id="work-results" className={styles.grid}>
          {visible.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
        {visible.length === 0 && (
          <p className={styles.empty}>
            No projects in this category yet. Try another filter.
          </p>
        )}
      </div>
    </section>
  );
}
