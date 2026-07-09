import Nav from "../components/Nav";
import styles from "../components/subpage.module.css";
import pdfStyles from "./pdf.module.css";
import PdfViewer from "../components/PdfViewer";
import { pdfPagePaths } from "../components/pdfPages";

export const metadata = {
  title: "Born to Create — Amy McIntyre",
};

export default function BornToCreatePage() {
  return (
    <div className={styles.shell}>
      <Nav />
      <div className={styles.page}>
        <article className={`${styles.card} ${pdfStyles.card}`}>
          <p className={styles.eyebrow}>02 — Art</p>
          <h1 className={styles.title}>
            Born to Create: <em>High Sensitivity</em> with Fire and Prose
          </h1>
          <PdfViewer
            pages={pdfPagePaths("born-to-create", 17)}
            pdfHref="/Born to Create Lecture for website.pdf"
            title="Born to Create"
            backHref="/art"
          />
        </article>
      </div>
    </div>
  );
}
