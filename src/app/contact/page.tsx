import Nav from "../components/Nav";
import styles from "../components/subpage.module.css";

export const metadata = {
  title: "Contact — Amy McIntyre",
};

export default function ContactPage() {
  return (
    <div className={styles.shell}>
      <Nav />
      <div className={styles.page}>
        <article className={styles.card}>
          <p className={styles.eyebrow}>04 — Contact</p>
          <h1 className={styles.title}>
            Calls, <em>letters</em>, any kind of musings
          </h1>

          <p className={styles.lede}>
            Get in touch.
          </p>

          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <div className={styles.key}>Email</div>
              <div className={styles.val}>
                <a href="mailto:amy@amymcintyre.art">amy@amymcintyre.art</a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.key}>Phone</div>
              <div className={styles.val}>
                <a href="tel:+16104575259">+1 610-457-5259</a>
              </div>
            </div>
          </div>

          <span className={styles.divider} />

          <p className={styles.lede}>Let&rsquo;s connect!</p>
        </article>
      </div>
    </div>
  );
}
