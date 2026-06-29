import styles from "./experience.module.css";
import { experienceItems } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Experience</p>
        <h2 className={styles.title}>What I&apos;ve been building</h2>

        <div className={styles.list}>
          {experienceItems.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.topRow}>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.organization}>{item.organization}</p>
                </div>

                <span className={styles.period}>{item.period}</span>
              </div>

              <p className={styles.description}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}