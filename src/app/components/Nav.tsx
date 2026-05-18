"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const navItems = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "art", href: "/art" },
  { label: "publications", href: "/publications" },
  { label: "contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
        <ul>
          {navItems.map((item, i) => (
            <li key={item.label} style={{ transitionDelay: `${i * 60}ms` }}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                <span className={styles.num}>0{i + 1}</span>
                <span className={styles.label}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
