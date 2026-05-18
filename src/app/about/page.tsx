import Nav from "../components/Nav";
import styles from "../components/subpage.module.css";

export const metadata = {
  title: "About — Amy McIntyre",
};

export default function AboutPage() {
  return (
    <div className={styles.shell}>
      <Nav />
      <div className={styles.page}>
        <article className={styles.card}>
          <p className={styles.eyebrow}>01 — About</p>
          <h1 className={styles.title}>
            On <em>colour</em>, glass, and the slow business of looking
          </h1>

          <p className={styles.lede}>
            Amy McIntyre is an artist and writer based on the south coast,
            working with blown glass, watercolour, and the quiet drift of
            language between them.
          </p>

          <div className={styles.body}>
            <p>
              Her practice began in studio glasswork and has since opened out
              to include painting, printed essays, and small-press
              publications. Each medium informs the next: a vessel becomes a
              paragraph, a paragraph an excuse to mix a new pigment.
            </p>
            <p>
              Recent work has focused on the way light behaves at the edge of
              a curved surface — the lilac and milk-white of a tipped bowl,
              the way a horizon refuses to stay where you left it. McIntyre
              has exhibited in Bristol, Edinburgh, and Copenhagen, and her
              writing has appeared in <em>Frieze</em>, <em>The White Review</em>,
              and <em>Granta Online</em>.
            </p>
            <p>
              She holds an MA in Fine Art from the Royal College of Art and
              previously read English at Cambridge. When not in the studio,
              she teaches occasional workshops on hot glass and on the essay
              as a form.
            </p>

            <span className={styles.divider} />

            <p>
              For commissions, interviews, or studio visits, please use the
              contact page. Responses can be slow during exhibition months;
              patience is rewarded with longer letters.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
