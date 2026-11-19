import { SITE_BASE_PATH } from "@/lib/constants";
import { selectedWork } from "@/lib/work";
import WorkCard from "./workCard";
import styles from "./work.module.css";

export default function Work() {
  return (
    <section
      id="work"
      className={`section ${styles.section}`}
      aria-labelledby="work-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title" className="section-title">
              Made to be played.
            </h2>
          </div>
          <div className={styles.intro}>
            <p>
              From the first mechanic to the finishing touches.
              <br />
              Here’s what that looks like in practice.
            </p>
            <a href={`${SITE_BASE_PATH}/#more-work`} className="text-link">
              Browse all work
            </a>
          </div>
        </div>
        <div className={styles.grid}>
          {selectedWork.map((item, index) => (
            <div
              key={item.slug}
              className={index === 0 ? styles.mainProject : styles.sideProject}
            >
              <WorkCard item={item} prominent={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
