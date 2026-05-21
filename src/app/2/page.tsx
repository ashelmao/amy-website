import Link from "next/link";
import styles from "./page.module.css";

const navItems = [
  { label: "about", href: "/about", num: "01" },
  { label: "art", href: "/art", num: "02" },
  { label: "publications", href: "/publications", num: "03" },
  { label: "contact", href: "/contact", num: "04" },
];

export default function Home2() {
  return (
    <main className={styles.main}>
      <span className={styles.amy}>amy</span>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className={styles.navItem}>
            <span className={styles.num}>{item.num}</span>
            <span className={styles.label}>{item.label}</span>
          </Link>
        ))}
      </nav>

      <h1 className={styles.mcintyre}>mcintyre</h1>
    </main>
  );
}
