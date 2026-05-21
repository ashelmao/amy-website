import Link from "next/link";
import styles from "./page.module.css";

const quadrants = [
  { label: "about",        href: "/about",        num: "01", pos: "tl" },
  { label: "art",          href: "/art",           num: "02", pos: "tr" },
  { label: "publications", href: "/publications",  num: "03", pos: "bl" },
  { label: "contact",      href: "/contact",       num: "04", pos: "br" },
];

export default function Home4() {
  return (
    <main className={styles.main}>
      {quadrants.map((q) => (
        <Link key={q.label} href={q.href} className={`${styles.quadrant} ${styles[q.pos]}`}>
          <span className={styles.num}>{q.num}</span>
          <span className={styles.label}>{q.label}</span>
        </Link>
      ))}

      {/* Cross-hair lines */}
      <div className={styles.hLine} aria-hidden />
      <div className={styles.vLine} aria-hidden />

      <h1 className={styles.name} aria-label="Amy McIntyre">
        <span className={styles.amy}>amy</span>
        <span className={styles.mcintyre}>mcintyre</span>
      </h1>
    </main>
  );
}
