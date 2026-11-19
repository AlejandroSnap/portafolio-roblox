import Image from "next/image";
import Link from "next/link";
import { SITE_BASE_PATH } from "@/lib/constants";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section id="home" className={styles.home} aria-labelledby="home-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <p className={styles.intro}>
            <span aria-hidden="true" className={styles.miniCube} /> Independent
            Roblox developer
          </p>
          <h1 id="home-title" className={styles.title}>
            Playful ideas.
            <br />
            Thoughtfully
            <br />
            <span>built.</span>
          </h1>
          <p className={styles.description}>
            Hey, I’m Alejandro. I turn ideas into Roblox games with engaging
            gameplay, intuitive interfaces, and systems built to grow.
          </p>
          <div className={styles.actions}>
            <a href={`${SITE_BASE_PATH}/#work`} className="button">
              Explore my work
            </a>
            <a
              href={`${SITE_BASE_PATH}/#contact`}
              className="button button-secondary"
            >
              Let’s build something
            </a>
          </div>
          <div className={styles.signature}>
            <span className={styles.experience}>
              5+ <span>years creating on Roblox</span>
            </span>
            <span className={styles.signatureDivider} aria-hidden="true" />
            <span className={styles.tools}>
              Luau <span aria-hidden="true">/</span> Roblox Studio
            </span>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.visualHeading}>
            <span>A little of what I build</span>
            <span className={styles.spark} aria-hidden="true">
              ✳
            </span>
          </div>
          <Link href="/work/step-risk-rng/" className={styles.showcase}>
            <div className={styles.frameTop}>
              <span className={styles.frameIcon} aria-hidden="true">
                ◈
              </span>
              <span>Step Risk RNG</span>
              <span className={styles.frameLabel}>In-game preview</span>
            </div>
            <div className={styles.imageWrap}>
              <Image
                src={`${SITE_BASE_PATH}/img/work/step-risk-img-1.webp`}
                alt="Step Risk RNG gameplay with its shop, progression, auras, and reward systems"
                fill
                sizes="(max-width: 900px) 90vw, 46vw"
                preload
                className={styles.image}
              />
            </div>
            <div className={styles.frameBottom}>
              <div>
                <span className={styles.frameEyebrow}>
                  From concept to playable
                </span>
                <strong>One more step. One more risk.</strong>
              </div>
              <span className={styles.projectLabel}>Explore project</span>
            </div>
          </Link>
          <div className={styles.visualNote}>
            <span className={styles.noteLine} aria-hidden="true" />
            <p>
              Good gameplay starts with
              <br />
              <strong>the details you can feel.</strong>
            </p>
          </div>
        </div>
      </div>
      <div className={`container ${styles.bottomLine}`}>
        <span>Games with personality. Code with purpose.</span>
        <span>Gameplay · UI · Custom systems</span>
      </div>
    </section>
  );
}
