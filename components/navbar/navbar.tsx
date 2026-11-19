"use client";

import { useState } from "react";
import BrandMark from "@/components/brandMark";
import { navItems } from "@/data/navigation";
import { SITE_NAME, SITE_BASE_PATH } from "@/lib/constants";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav
        className={`container ${styles.nav}`}
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            event.currentTarget
              .querySelector<HTMLButtonElement>("button")
              ?.focus();
          }
        }}
      >
        <a
          href={`${SITE_BASE_PATH}/#home`}
          className={styles.brand}
          onClick={() => setOpen(false)}
          aria-label={`${SITE_NAME}, home`}
        >
          <BrandMark />
          <span>
            Alejandro<span className={styles.brandAccent}>Snap</span>
            <span className={styles.brandPeriod}>.</span>
          </span>
        </a>
        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={open}
          aria-controls="navigation-links"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "+"}</span>
        </button>
        <div
          id="navigation-links"
          className={`${styles.links} ${open ? styles.open : ""}`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {item.title}
            </a>
          ))}
          <a
            href={`${SITE_BASE_PATH}/#contact`}
            className={`button ${styles.contact}`}
            onClick={() => setOpen(false)}
          >
            Let’s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
