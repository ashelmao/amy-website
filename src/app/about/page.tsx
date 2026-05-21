import Image from "next/image";
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
            On <em>motherhood</em>, memory, and the small joys in between
          </h1>

          <Image
            src="/amy.jpg"
            alt="Portrait of Amy McIntyre"
            width={160}
            height={200}
            className={styles.portrait}
            priority
          />

          <p className={styles.lede}>
            Amy McIntyre holds an MFA in Creative Nonfiction from Vermont
            College of Fine Arts. She writes primarily about family and
            trauma, but takes time to explore the simple pleasures — like
            ice cream!
          </p>

          <div className={styles.body}>
            <p>
              Amy has been published by <em>Craft Literary</em> and{" "}
              <em>Past Ten</em>, and before her time at VCFA, her
              human-interest stories were published by{" "}
              <em>Seven Mile Satellite</em>.
            </p>
            <p>
              She is currently at work on a memoir about her experiences with
              childbirth and early motherhood, and she enjoys running a local
              community library on Instagram{" "}
              <a
                href="https://instagram.com/KsQreadsBIPOC"
                target="_blank"
                rel="noopener noreferrer"
              >
                @KsQreadsBIPOC
              </a>
              .
            </p>
            <p>
              She is primary caregiver to her adult daughter who has Down
              syndrome and, while raising her family, worked as a
              photographer. Before children, she developed the women’s line
              of apparel at Adidas in Portland, Oregon.
            </p>

          </div>
        </article>
      </div>
    </div>
  );
}
