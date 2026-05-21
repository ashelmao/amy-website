import Link from "next/link";
import styles from "./page.module.css";

const navItems = [
  { label: "about", href: "/about", num: "01" },
  { label: "art", href: "/art", num: "02" },
  { label: "publications", href: "/publications", num: "03" },
  { label: "contact", href: "/contact", num: "04" },
];

export default function Home3() {
  return (
    <main className={styles.main}>
      <div className={styles.group}>
        <header className={styles.masthead}>
          <h1 className={styles.name}>
            <span className={styles.amy}>amy</span>
            <span className={styles.mcintyre}>mcintyre</span>
          </h1>
        </header>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={styles.navItem}>
              <span className={styles.num}>{item.num}</span>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.dash} />
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
