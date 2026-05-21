import Link from "next/link";
import styles from "./page.module.css";

const navItems = [
  { label: "about",        href: "/about",       num: "01" },
  { label: "art",          href: "/art",          num: "02" },
  { label: "publications", href: "/publications", num: "03" },
  { label: "contact",      href: "/contact",      num: "04" },
];

export default function Home5() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        {navItems.map((item, i) => (
          <Link
            key={item.label}
            href={item.href}
            className={styles.row}
            style={{ "--i": i } as React.CSSProperties}
          >
            <span className={styles.num}>{item.num}</span>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.arrow}>→</span>
          </Link>
        ))}
      </nav>

      <h1 className={styles.name}>
        <span className={styles.amy}>amy</span>
        <span className={styles.mcintyre}>mcintyre</span>
      </h1>
    </main>
  );
}
