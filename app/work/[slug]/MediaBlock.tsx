"use client";

import { useState } from "react";
import styles from "./workDetail.module.css";
import type { WorkItem } from "@/data/work";

type Props = { item: WorkItem };

export default function MediaBlock({ item }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!item.media) {
    return (
      <div className={styles.mediaFrame}>
        <img src={item.image} alt={item.title} className={styles.mediaImage} />
      </div>
    );
  }

  if (item.media.type === "youtube") {
    return (
      <div className={styles.mediaFrame}>
        <iframe
          className={styles.mediaVideo}
          src={`https://www.youtube.com/embed/${item.media.videoId}`}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // Gallery
  const images = item.media.images;
  const active = images[activeIndex] ?? images[0];

  return (
    <div className={styles.galleryWrap}>
      <div className={styles.mediaFrame}>
        <img src={active} alt={item.title} className={styles.mediaImage} />

        {images.length > 1 && (
          <>
            <button
              type="button"
              className={styles.galleryNav}
              style={{ left: 8 }}
              onClick={() =>
                setActiveIndex((i) => (i - 1 + images.length) % images.length)
              }
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.galleryNav}
              style={{ right: 8 }}
              onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className={styles.thumbRow}>
          {images.map((src, idx) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={
                idx === activeIndex
                  ? `${styles.thumb} ${styles.thumbActive}`
                  : styles.thumb
              }
              aria-label={`Image ${idx + 1}`}
            >
              <img src={src} alt="" className={styles.thumbImage} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
