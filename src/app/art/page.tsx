import Nav from "../components/Nav";
import styles from "../components/subpage.module.css";

export const metadata = {
  title: "Art — Amy McIntyre",
};

const works = [
  { title: "Lilac Bowl, No. 3", year: "2025", medium: "Blown glass" },
  { title: "Spotted Horizon", year: "2025", medium: "Watercolour on Arches" },
  { title: "Milk & Murex", year: "2024", medium: "Blown glass, silver leaf" },
  { title: "Notes Toward a Vessel", year: "2024", medium: "Ink, gouache" },
  { title: "Tipped Sea", year: "2023", medium: "Blown glass" },
  { title: "Field Recording (Violet)", year: "2023", medium: "Pigment, wax" },
  { title: "Untitled (Bruise)", year: "2022", medium: "Watercolour" },
  { title: "Glass Hours", year: "2022", medium: "Series of 9 vessels" },
];

export default function ArtPage() {
  return (
    <div className={styles.shell}>
      <Nav />
      <div className={styles.page}>
        <article className={styles.card}>
          <p className={styles.eyebrow}>02 — Art</p>
          <h1 className={styles.title}>
            Selected <em>works</em>, 2022 — 2025
          </h1>

          <p className={styles.lede}>
            A rotating selection of vessels, paintings on paper, and a few
            pieces that resist the question. Click any tile to read more.
          </p>

          <div className={styles.grid}>
            {works.map((w) => (
              <a key={w.title} className={styles.tile} href="#">
                <span className={styles.caption}>{w.title}</span>
                <span className={styles.meta}>
                  {w.year} · {w.medium}
                </span>
              </a>
            ))}
          </div>

          <span className={styles.divider} />

          <div className={styles.body}>
            <p>
              Prints and a small number of original watercolours are available
              through the studio. Vessels are sold via represented galleries;
              please enquire through the contact page for current availability.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
