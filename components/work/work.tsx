import styles from "./work.module.css";
import { work } from "@/data/work";
import WorkCard from "./workCard";

export default function Work() {
  // Featured items first (in the order they appear in data/work.ts),
  // then everything else sorted alphabetically by title.
  const featured = work.filter((w) => w.featured);
  const rest = work
    .filter((w) => !w.featured)
    .sort((a, b) => a.title.localeCompare(b.title));
  const sorted = [...featured, ...rest];

  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Work</p>
        <h2 className={styles.title}>Projects & commissions</h2>

        <div className={styles.grid}>
          {sorted.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
