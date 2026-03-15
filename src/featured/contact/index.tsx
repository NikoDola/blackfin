import { ContactSection } from "@/components/sections/ContactSection";
import { PHONE, PHONE_HREF } from "@/lib/utils";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <>
      <div className={styles.pageHero}>
        <span className={styles.eyebrow}>We&apos;re Here to Help</span>
        <h1 className={styles.heroTitle}>Contact Us</h1>
        <p className={styles.heroBody}>
          Call us at{" "}
          <a href={PHONE_HREF} className={styles.phoneLink}>
            {PHONE}
          </a>{" "}
          or submit the form below and we&apos;ll get back to you with a free quote.
        </p>
      </div>

      <ContactSection />
    </>
  );
}
