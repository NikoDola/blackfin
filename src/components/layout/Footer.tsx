import Link from "next/link";
import Image from "next/image";
import { Phone, Instagram, MapPin } from "lucide-react";
import { PHONE, PHONE_HREF, INSTAGRAM, NAV_ITEMS, SERVICE_LOCATIONS } from "@/lib/utils";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand */}
          <div>
            <div className={styles.brandRow}>
              <Image
                src="/images/logo.jpg"
                alt="Blackfin Construction & Painting"
                width={52}
                height={52}
                className={styles.logoImage}
              />
              <div>
                <p className={styles.brandName}>Blackfin</p>
                <p className={styles.brandSub}>Construction & Painting</p>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Tampa Bay&apos;s finest painting and remodeling contractor. Leverage our years of proven experience to make your project the best it can be.
            </p>
            <div className={styles.socialRow}>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a href={PHONE_HREF} className={styles.socialLink}>
                <Phone size={16} />
                {PHONE}
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className={styles.colTitle}>Pages</h3>
            <ul className={styles.linkList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className={styles.footerLink}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className={styles.colTitle}>
              <MapPin size={12} />
              Service Area
            </h3>
            <p className={styles.serviceAreaDesc}>Serving the Entire Tampa Bay Region</p>
            <div className={styles.tagList}>
              {SERVICE_LOCATIONS.map((loc) => (
                <span key={loc} className={styles.tag}>
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Blackfin Construction & Painting. All rights reserved.
          </p>
          <p className={styles.copyright}>Tampa Bay, Florida</p>
        </div>
      </div>
    </footer>
  );
}
