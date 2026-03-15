"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PHONE, PHONE_HREF, NAV_ITEMS } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.jpg"
            alt="Blackfin Construction & Painting"
            width={50}
            height={50}
            className={styles.logoImage}
          />
          <div className={styles.logoText}>
            <p className={styles.logoName}>Blackfin</p>
            <p className={styles.logoSub}>Construction & Painting</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[styles.navLink, pathname === item.href ? styles.navLinkActive : ""].filter(Boolean).join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Phone */}
        <div className={styles.desktopActions}>
          <a href={PHONE_HREF} className={styles.phoneLink}>
            <Phone size={14} />
            {PHONE}
          </a>
          <Button href="/contact" size="sm">
            Free Quote
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={styles.mobileMenu} data-open={menuOpen}>
        <nav className={styles.mobileNav}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={[styles.mobileNavLink, pathname === item.href ? styles.mobileNavLinkActive : ""].filter(Boolean).join(" ")}
            >
              {item.label}
            </Link>
          ))}
          <a href={PHONE_HREF} className={styles.mobilePhone}>
            <Phone size={14} />
            {PHONE}
          </a>
          <div className={styles.mobileButtonWrap}>
            <Button href="/contact" size="sm" fullWidth onClick={() => setMenuOpen(false)}>
              Free Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
