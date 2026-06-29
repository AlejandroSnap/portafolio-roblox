import Link from "next/link";
import styles from "./workCard.module.css";
import type { WorkItem } from "@/data/work";
import { workKindLabels } from "@/data/work";
import { SITE_BASE_PATH } from "@/lib/constants";

type Props = { item: WorkItem };

export default function WorkCard({ item }: Props) {
  return (
    <Link
      href={`${SITE_BASE_PATH}/work/${item.slug}/`}
      className={styles.card}
    >
      {/* Thumbnail */}
      <div className={styles.imageWrap}>
        <img src={item.image} alt={item.title} className={styles.image} />
        {item.featured && (
          <span className={styles.featuredBadge}>Featured</span>
        )}
        <div className={styles.hoverOverlay}>
          <span className={styles.hoverLabel}>View →</span>
        </div>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <p className={styles.meta}>
          {workKindLabels[item.kind]}
          {item.date ? ` · ${item.date}` : ""}
        </p>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>
      </div>
    </Link>
  );
}
