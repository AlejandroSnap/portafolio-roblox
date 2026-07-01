import Link from "next/link";
import styles from "./navbar.module.css";
import { navItems } from "@/data/navigation";
import { SITE_BASE_PATH, SITE_NAME } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href={`/#home`} className={styles.brand}>
            {SITE_NAME}
          </Link>

          <div className={styles.links}>
            {navItems.map((item) => (
              <Link key={item.title} href={item.href} className={styles.link}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}