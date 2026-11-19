import BrandMark from "./brandMark";
import { SITE_NAME, SITE_BASE_PATH } from "@/lib/constants";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.layout}`}>
        <a href={`${SITE_BASE_PATH}/#home`} className={styles.brand}>
          <BrandMark />
          <span>
            {SITE_NAME}
            <span className={styles.period}>.</span>
          </span>
        </a>
        <p>Thoughtfully built. Ready to play.</p>
        <span className={styles.copyright}>
          © {new Date().getFullYear()} {SITE_NAME}
        </span>
      </div>
    </footer>
  );
}
