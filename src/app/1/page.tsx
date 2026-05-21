import Link from "next/link";
import styles from "./page.module.css";

const navItems = [
  { label: "about", href: "/about", num: "01" },
  { label: "art", href: "/art", num: "02" },
  { label: "publications", href: "/publications", num: "03" },
  { label: "contact", href: "/contact", num: "04" },
];

export default function Home1() {
  return (
    <main className={styles.main}>
      <h1 className={styles.name}>
        <span className={styles.amy}>amy</span>
        <span className={styles.mcintyre}>mcintyre</span>
      </h1>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className={styles.navItem}>
            <span className={styles.num}>{item.num}</span>
            <span className={styles.label}>{item.label}</span>
          </Link>
        ))}
      </nav>
    </main>
  );
}
