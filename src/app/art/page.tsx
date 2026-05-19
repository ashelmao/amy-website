import Nav from "../components/Nav";
import styles from "../components/subpage.module.css";

export const metadata = {
  title: "Art — Amy McIntyre (Under Construction)",
};

export default function ArtPage() {
  return (
    <div className={styles.shell}>
      <Nav />
      <div className={styles.page}>
        <article className={styles.card}>
          <p className={styles.eyebrow}>🚧 02 — Art · Under Construction 🚧</p>
          <h1 className={styles.title}>
            This page is <em>not done</em> yet.
          </h1>

          <p className={styles.lede}>
            Nothing to see here — not even close. Check back later.
          </p>
        </article>
      </div>
    </div>
  );
}
