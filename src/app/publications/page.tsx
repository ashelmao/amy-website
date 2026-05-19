import Nav from "../components/Nav";
import styles from "../components/subpage.module.css";

export const metadata = {
  title: "Publications — Amy McIntyre",
};

const publications = [
  {
    year: "2026",
    title: "Interview: Marty Ross-Dolen",
    venue: "CRAFT Literary, May 2026",
    blurb: "",
    href: "https://www.craftliterary.com/2026/05/01/interview-marty-ross-dolen/",
  },
  {
    year: "2025",
    title: "July 2, 2015 — Amy McIntyre",
    venue: "Past Ten, July 2025",
    blurb: "",
    href: "https://www.past-ten.com/single-post/amymcintyre",
  },
];

export default function PublicationsPage() {
  return (
    <div className={styles.shell}>
      <Nav />
      <div className={styles.page}>
        <article className={styles.card}>
          <p className={styles.eyebrow}>03 — Publications</p>
          <h1 className={styles.title}>
            Essays, <em>chapbooks</em>, and the occasional review
          </h1>

          <p className={styles.lede}>
            Writing tends to arrive in the gaps between objects. Below is a
            selected list, most recent first.
          </p>

          <div>
            {publications.map((p) => (
              <div key={p.title} className={styles.pub}>
                <div className={styles.year}>{p.year}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>
                    <em>{p.venue}.</em>
                    {p.blurb ? ` ${p.blurb} ` : " "}
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      Read →
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
