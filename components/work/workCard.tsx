import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/data/work";
import { workCategoryLabels } from "@/data/work";
import { getWorkRole } from "@/lib/work";
import styles from "./workCard.module.css";

type Props = { item: WorkItem; prominent?: boolean };

export default function WorkCard({ item, prominent = false }: Props) {
  return (
    <Link
      href={`/work/${item.slug}/`}
      className={`${styles.card} ${prominent ? styles.prominent : ""}`}
    >
      <div className={styles.imageWrap}>
        <Image
          src={item.image}
          loading={prominent ? "eager" : "lazy"}
          alt={`${item.title} game preview`}
          fill
          sizes={
            prominent
              ? "(max-width: 760px) 90vw, 58vw"
              : "(max-width: 600px) 90vw, (max-width: 900px) 45vw, 30vw"
          }
          className={styles.image}
        />
        <span className={styles.category}>
          {workCategoryLabels[item.category]}
        </span>
      </div>
      <div className={styles.info}>
        <p className={styles.role}>{getWorkRole(item)}</p>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.scope ?? item.description}</p>
        <span className={styles.view}>
          Explore project
          <span className={styles.viewMark} aria-hidden="true">
            +
          </span>
        </span>
      </div>
    </Link>
  );
}
