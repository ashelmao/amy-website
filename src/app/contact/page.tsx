import Image from "next/image";
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
            Calls, <em>letters</em>, musings of any kind
          </h1>

          <div className={styles.contactLayout}>
            <div className={styles.contactPhoto}>
              <Image
                src="/amy.jpg"
                alt="Portrait of Amy McIntyre"
                width={200}
                height={260}
                className={styles.contactPortrait}
                priority
              />
              <p className={styles.contactCaption}>&copy; Adrianne Mathiowetz Photography</p>
            </div>

            <div className={styles.contactDetails}>
              <p className={styles.lede}>Get in touch.</p>

              <div className={styles.contactStack}>
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

                <div className={styles.contactItem}>
                  <div className={styles.key}>Instagram</div>
                  <div className={styles.val}>
                    <a
                      href="https://instagram.com/KsQreadsBIPOC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @KsQreadsBIPOC
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
