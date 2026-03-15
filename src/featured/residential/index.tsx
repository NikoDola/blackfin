import { HeroSection } from "@/components/sections/HeroSection";
import { ParallaxImageSection } from "@/components/sections/ParallaxImageSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import styles from "./residential.module.css";

const heroSlides = [
  {
    image: "/images/residential-hero.jpg",
    headline: "One Call Turns Your Old Home Into Your Dream Home",
    subheadline:
      "Interior and exterior residential contractor serving the entire Tampa Bay region with quality craftsmanship.",
    cta: { label: "Get Your Free Quote", href: "/contact" },
  },
  {
    image: "/images/residential-project.jpg",
    headline: "Residential Painting & Remodeling",
    subheadline:
      "With years of experience in Tampa Bay, we understand the challenges homeowners face sourcing quality contractors.",
    cta: { label: "View Our Services", href: "#services" },
  },
];

const galleryImages = [
  { src: "/images/residential-project.jpg", alt: "Residential project" },
  { src: "/images/gallery-8.jpg", alt: "Interior painting" },
  { src: "/images/gallery-9.jpg", alt: "Exterior painting" },
  { src: "/images/gallery-1.jpg", alt: "Cabinet painting" },
  { src: "/images/gallery-10.jpg", alt: "Bathroom remodel" },
  { src: "/images/gallery-11.jpg", alt: "Before and after" },
  { src: "/images/exterior-project.jpg", alt: "Exterior project" },
  { src: "/images/gallery-12.jpg", alt: "Deck and patio" },
  { src: "/images/gallery-7.jpg", alt: "Whole home repaint" },
];

export default function ResidentialPage() {
  return (
    <>
      <HeroSection slides={heroSlides} />

      <section id="services" className={styles.servicesSection}>
        <div className="container">
          <div className={styles.grid}>
            <div>
              <h3 className={styles.groupTitle}>Remodeling Services</h3>
              <ul className={styles.list}>
                {["Kitchen & Bathroom Remodel", "Outdoor Spaces", "Decks & Patios", "Buildouts", "ADUs (Additional Dwelling Units)"].map((s) => (
                  <li key={s} className={styles.listItem}>
                    <span className={styles.dot} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.groupTitleSecondary}>Painting Services</h3>
              <ul className={styles.list}>
                {["Interior Painting", "Exterior Painting", "Roof Coatings", "Specialty & Waterproof Coatings", "Pressure Washing"].map((s) => (
                  <li key={s} className={styles.listItem}>
                    <span className={styles.dotWarm} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ParallaxImageSection
        image="/images/residential-project.jpg"
        tag="Our Approach"
        headline="Quality Craftsmanship, Every Time"
        body="With many years of experience in construction and painting across Tampa Bay, we understand the challenges homeowners face. We source premium materials and bring dedicated craftsmanship to every project — large or small."
        cta={{ label: "Request a Free Quote", href: "/contact" }}
        list={["Licensed & Insured", "Premium Materials", "On-Time Delivery", "Clean Jobsite Guaranteed"]}
      />

      <GallerySection images={galleryImages} tag="Residential Portfolio" title="Recent Projects" />

      <ContactSection />
    </>
  );
}
