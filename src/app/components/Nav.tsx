"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const navItems = [
  { label: "home", href: "/", num: null },
  { label: "about", href: "/about", num: "01" },
  { label: "art", href: "/art", num: "02" },
  { label: "publications", href: "/publications", num: "03" },
  { label: "contact", href: "/contact", num: "04" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
                <span className={styles.num}>{item.num ?? "—"}</span>
                <span className={styles.label}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
