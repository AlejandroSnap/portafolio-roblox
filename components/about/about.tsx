import styles from "./about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>About</p>
        <h2 className={styles.title}>A bit about me</h2>

        <div className={styles.content}>
          <p>
            I like building games with clear systems, a progression that
            feels rewarding, and an experience that feels alive. On Roblox, I
            focus a lot on gameplay, economy, and UI.
          </p>

          <p>
            I&apos;m also learning web development with Next.js to build
            pages, portfolios, and tools that support my bigger projects.
          </p>
        </div>
      </div>
    </section>
  );
}