"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const navItems = [
  { label: "about", href: "/about" },
  { label: "art", href: "/art" },
  { label: "publications", href: "/publications" },
  { label: "contact", href: "/contact" },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className={styles.main}>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.bars} aria-hidden>
          <span />
          <span />
          <span />
        </span>
      </button>

      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <nav
        className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
        aria-hidden={!open}
      >
        <ul>
          {navItems.map((item, i) => (
            <li key={item.label} style={{ transitionDelay: `${i * 60}ms` }}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                <span className={styles.num}>0{i + 1}</span>
                <span className={styles.label}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <h1 className={styles.name}>
        <span>amy</span>
        <span>mcintyre</span>
      </h1>
    </main>
  );
}
