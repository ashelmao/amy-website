import Nav from "../components/Nav";
import styles from "../components/subpage.module.css";

export const metadata = {
  title: "Publications — Amy McIntyre",
};

const publications = [
  {
    year: "2025",
    title: "A Bowl is a Sentence",
    venue: "Frieze, no. 248",
    blurb:
      "An essay on glassblowing as a grammar — what it means to think with breath, gravity, and a viscous medium that refuses to stay still.",
    href: "#",
  },
  {
    year: "2024",
    title: "Murex, Milk, Memory",
    venue: "The White Review (online)",
    blurb:
      "On Tyrian purple, on the smell of a hot shop in February, and on inheriting a colour from a mother who never named it.",
    href: "#",
  },
  {
    year: "2024",
    title: "Field Notes from a Slow Studio",
    venue: "Granta Online",
    blurb:
      "A diary in fragments. Includes a recipe for an unreliable lilac and an argument with a kiln.",
    href: "#",
  },
  {
    year: "2023",
    title: "Tipped",
    venue: "Self-published, ed. of 200",
    blurb:
      "Letterpress chapbook pairing watercolour studies with short prose. Sold out; a second printing is planned for late 2025.",
    href: "#",
  },
  {
    year: "2022",
    title: "On Looking Twice",
    venue: "Burlington Contemporary",
    blurb:
      "A short review of the V&A glass rehang, with an aside on the ethics of vitrines.",
    href: "#",
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
                    <em>{p.venue}.</em> {p.blurb}{" "}
                    <a href={p.href}>Read →</a>
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
