"use client";

import Image from "next/image";
import { useState } from "react";
import type { WorkItem } from "@/data/work";
import styles from "./workDetail.module.css";

export default function MediaBlock({ item }: { item: WorkItem }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const images =
    item.media?.type === "gallery" && item.media.images.length > 0
      ? item.media.images
      : [item.image];
  const active = images[activeIndex] ?? item.image;

  if (item.media?.type === "youtube") {
    return (
      <div>
        <div className={styles.mediaFrame}>
          {playing ? (
            <iframe
              className={styles.mediaVideo}
              src={`https://www.youtube-nocookie.com/embed/${item.media.videoId}?autoplay=1&rel=0`}
              title={`${item.title} project demonstration`}
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className={styles.playButton}
              onClick={() => setPlaying(true)}
              aria-label={`Play ${item.title} project demo`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 900px) 90vw, 65vw"
                preload
                className={styles.mediaImage}
              />
              <span className={styles.playOverlay}>
                <span className={styles.playIcon} aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="23"
                    height="23"
                    fill="currentColor"
                  >
                    <path d="m9 5 11 7-11 7V5Z" />
                  </svg>
                </span>
                <span>Play project demo</span>
              </span>
            </button>
          )}
        </div>
        <p className={styles.caption}>
          A closer look at {item.title}. Video plays via YouTube.
        </p>
      </div>
    );
  }

  return (
    <div
      className={styles.gallery}
      role="region"
      aria-label={`${item.title} gallery`}
      onKeyDown={(event) => {
        if (images.length < 2) return;
        if (event.key === "ArrowRight") {
          event.preventDefault();
          setActiveIndex((index) => (index + 1) % images.length);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          setActiveIndex(
            (index) => (index - 1 + images.length) % images.length,
          );
        }
      }}
    >
      <div className={styles.mediaFrame}>
        <Image
          src={active}
          alt={`${item.title}, preview ${activeIndex + 1} of ${images.length}`}
          fill
          sizes="(max-width: 900px) 90vw, 65vw"
          preload
          className={styles.mediaImage}
        />
        {images.length > 1 && (
          <div className={styles.galleryControls}>
            <button
              type="button"
              onClick={() =>
                setActiveIndex(
                  (index) => (index - 1 + images.length) % images.length,
                )
              }
              aria-label="Previous image"
            >
              ‹
            </button>
            <span role="status">
              {activeIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={() =>
                setActiveIndex((index) => (index + 1) % images.length)
              }
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        )}
      </div>
      {images.length > 1 && (
        <div className={styles.thumbRow}>
          {images.map((src, index) => (
            <button
              type="button"
              key={src}
              onClick={() => setActiveIndex(index)}
              className={`${styles.thumb} ${index === activeIndex ? styles.thumbActive : ""}`}
              aria-label={`Show image ${index + 1}`}
              aria-pressed={index === activeIndex}
            >
              <Image src={src} alt="" fill sizes="90px" />
            </button>
          ))}
        </div>
      )}
      <p className={styles.caption}>{item.title} · Project preview</p>
    </div>
  );
}
