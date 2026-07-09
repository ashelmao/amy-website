import Link from "next/link";
import Nav from "../components/Nav";
import styles from "../components/subpage.module.css";

export const metadata = {
  title: "Art/Craft — Amy McIntyre",
};

const pieces = [
  {
    year: "2021",
    title: "Born to Create",
    subtitle: "High Sensitivity with Fire and Prose",
    href: "/born-to-create",
  },
  {
    year: "2022",
    title: "Organization in Memoir",
    subtitle: "A Look at Form Choices in Memoir, along with a Focused Look at Certain Authors and the Structural and Form Choices They Made",
    href: "/organization-in-memoir",
  },
];

export default function ArtPage() {
  return (
    <div className={styles.shell}>
      <Nav />
      <div className={styles.page}>
        <article className={styles.card}>
          <p className={styles.eyebrow}>02 — Art/Craft</p>
          <h1 className={styles.title}>
            Glassblowing allowed me to be most <em>emotive</em>, until writing came along
          </h1>

          <div>
            {pieces.map((p) => (
              <div key={p.title} className={styles.pub}>
                <div className={styles.year}>{p.year}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.subtitle}</p>
                  <Link href={p.href} className={styles.readLink}>
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
