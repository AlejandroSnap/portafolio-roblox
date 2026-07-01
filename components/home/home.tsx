import styles from "./home.module.css";
import { SITE_BASE_PATH, SITE_TAGLINE } from "@/lib/constants";

const stack = [
  "Luau",
  "Roblox Studio",
  "OOP",
  "Modular",
  "UI",
  "Gameplay",
  "DataStore",
  "Optimization",
];

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.kicker}>{SITE_TAGLINE}</p>

          <h1 className={styles.title}>
            I build game systems that feel <span>good to play.</span>
          </h1>

          <p className={styles.description}>
            I&apos;m AlejandroSnap, a Roblox developer with 5 years of experience. I develop complete Roblox experiences, from gameplay systems and UI to optimization, bug fixing, and custom features.
          </p>

          <div className={styles.actions}>
            <a href={`${SITE_BASE_PATH}/#work`} className={styles.primaryButton}>
              See my work
            </a>
            <a href={`${SITE_BASE_PATH}/#contact`} className={styles.secondaryButton}>
              Get in touch
            </a>
          </div>

          <div className={styles.badges}>
            {stack.map((item) => (
              <span key={item} className={styles.badge}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* <div className={styles.panel}>
          <div className={styles.panelGlow} aria-hidden="true" />
          <p className={styles.panelLabel}>Currently building</p>
          <p className={styles.panelTitle}>Bridge Race Teams</p>
          <p className={styles.panelText}>
            A team-based race game with a custom build mechanic, live on
            Roblox and getting new content every update.
          </p>
          <div className={styles.panelStats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>3+</span>
              <span className={styles.statLabel}>Systems shipped</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>2025</span>
              <span className={styles.statLabel}>Learning web dev</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}