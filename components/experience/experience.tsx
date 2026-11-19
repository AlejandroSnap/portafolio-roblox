import { SITE_BASE_PATH } from "@/lib/constants";
import { services } from "@/data/experience";
import styles from "./experience.module.css";

function ServiceIcon({ name }: { name: "game" | "system" | "tools" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {name === "game" ? (
        <>
          <rect x="3" y="9" width="26" height="17" rx="6" />
          <path
            d="M8 17h8m-4-4v8m9-7h.1m4 5h.1M12 9V6h8V3"
            strokeLinecap="round"
          />
        </>
      ) : name === "system" ? (
        <>
          <path
            d="m16 3 12 7-12 7L4 10 16 3Zm-12 13 12 7 12-7M4 22l12 7 12-7"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          <path
            d="m5 27 14-14m-5-8a8 8 0 0 0 10 10l5-5-7 1-1-7-7 1ZM5 27l-2-2 6-6 4 4-6 6-2-2Z"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

export default function Experience() {
  return (
    <section
      id="services"
      className={`section ${styles.section}`}
      aria-labelledby="services-title"
    >
      <span id="experience" className={styles.legacyAnchor} />
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How I can help</p>
            <h2 id="services-title" className="section-title">
              Your idea. My next challenge.
            </h2>
          </div>
          <p className="section-description">
            Starting fresh or building on what’s already there? I can help with
            the whole experience or the piece you’re missing.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title} className={styles.service}>
              <div className={styles.icon}>
                <ServiceIcon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className={styles.footer}>
          <p>Have something a little different in mind?</p>
          <a href={`${SITE_BASE_PATH}/#contact`} className="text-link">
            Tell me about your project
          </a>
        </div>
      </div>
    </section>
  );
}
