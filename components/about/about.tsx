import styles from "./about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>About</p>
        <h2 className={styles.title}>A bit about me</h2>

        <div className={styles.content}>
          <p>
            I develop complete Roblox experiences across a wide range of genres,
            including simulators, puzzle games, obbies, platformers, and custom concepts.
            I specialize in building scalable gameplay systems, intuitive UI, and
            maintainable codebases using modular and object-oriented programming. I also
            work on custom systems, bug fixing, optimization, and expanding existing
            projects with new features.
          </p>
        </div>
      </div>
    </section>
  );
}