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
            Letters, <em>commissions</em>, and studio visits
          </h1>

          <p className={styles.lede}>
            Email is the surest way to reach me. I read everything, though I
            may take a week or two to write back during exhibition months.
          </p>

          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <div className={styles.key}>General</div>
              <div className={styles.val}>
                <a href="mailto:studio@amymcintyre.art">
                  studio@amymcintyre.art
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.key}>Commissions</div>
              <div className={styles.val}>
                <a href="mailto:commissions@amymcintyre.art">
                  commissions@amymcintyre.art
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.key}>Representation</div>
              <div className={styles.val}>
                Wren &amp; Pell Gallery, Bristol
                <br />
                <a href="mailto:hello@wrenandpell.com">hello@wrenandpell.com</a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.key}>Studio</div>
              <div className={styles.val}>
                Unit 7, The Glassworks
                <br />
                Hove, East Sussex
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.key}>Elsewhere</div>
              <div className={styles.val}>
                <a href="https://instagram.com">Instagram</a>
                <br />
                <a href="https://are.na">Are.na</a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.key}>Newsletter</div>
              <div className={styles.val}>
                <a href="#">Quarterly letter →</a>
              </div>
            </div>
          </div>

          <span className={styles.divider} />

          <div className={styles.body}>
            <p>
              For press enquiries and high-resolution images, please write
              with a brief outline of the project and your deadline. A press
              kit is available on request.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
