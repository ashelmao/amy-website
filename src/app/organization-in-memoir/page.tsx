import Nav from "../components/Nav";
import styles from "../components/subpage.module.css";
import pdfStyles from "../born-to-create/pdf.module.css";
import PdfViewer from "../components/PdfViewer";
import { pdfPagePaths } from "../components/pdfPages";

export const metadata = {
  title: "Organization in Memoir — Amy McIntyre",
};

export default function OrganizationInMemoirPage() {
  return (
    <div className={styles.shell}>
      <Nav />
      <div className={styles.page}>
        <article className={`${styles.card} ${pdfStyles.card}`}>
          <p className={styles.eyebrow}>02 — Art</p>
          <h1 className={styles.title}>
            <em>Organization</em> in Memoir
          </h1>
          <PdfViewer
            pages={pdfPagePaths("organization-in-memoir", 22)}
            pdfHref="/Organization in Memoir for website.pdf"
            title="Organization in Memoir"
            backHref="/art"
          />
        </article>
      </div>
    </div>
  );
}
