import { SITE_BASE_PATH } from "@/lib/constants";
import BrandMark from "@/components/brandMark";
import styles from "./about.module.css";

export default function About() {
  return (
    <section
      id="about"
      className={`section ${styles.section}`}
      aria-labelledby="about-title"
    >
      <div className={`container ${styles.layout}`}>
        <div className={styles.profile}>
          <div className={styles.monogram} aria-hidden="true">
            <BrandMark />
            <span>
              AS<span className={styles.period}>.</span>
            </span>
            <span className={styles.profileCorner}>Luau / Roblox</span>
          </div>
          <div className={styles.profileName}>
            <strong>AlejandroSnap</strong>
            <span>Developer. Problem solver. Game maker.</span>
          </div>
        </div>
        <div className={styles.copy}>
          <p className="eyebrow">The person behind the projects</p>
          <h2 id="about-title" className="section-title">
            Hi again, I’m Alejandro.
          </h2>
          <p>
            I’ve spent over five years building on Roblox, exploring everything
            from puzzle games and competitive experiences to obbies and custom
            systems.
          </p>
          <p>
            I enjoy figuring out how the pieces fit together: a mechanic that’s
            fun to repeat, an interface that just makes sense, and code that’s
            easy to build on later.
          </p>
          <p>
            Whether I’m developing a complete game or improving one feature, I
            bring that same care to the details.
          </p>
          <div className={styles.principles}>
            <span>Gameplay first</span>
            <span>Clear interfaces</span>
            <span>Maintainable code</span>
          </div>
          <a href={`${SITE_BASE_PATH}/#contact`} className="text-link">
            Let’s make something worth playing
          </a>
        </div>
      </div>
    </section>
  );
}
