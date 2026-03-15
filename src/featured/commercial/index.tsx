import { HeroSection } from "@/components/sections/HeroSection";
import { ParallaxImageSection } from "@/components/sections/ParallaxImageSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import styles from "./commercial.module.css";

const heroSlides = [
  {
    image: "/images/commercial-hero-1.jpg",
    headline: "Commercial Painting & Construction",
    subheadline:
      "Delivering large-scale projects on time and within budget for HOAs, condos, complexes, and institutions across Tampa Bay.",
    cta: { label: "Get a Commercial Quote", href: "/contact" },
  },
  {
    image: "/images/commercial-hero-2.jpg",
    headline: "Industrial Coating & Epoxy Specialists",
    subheadline:
      "From industrial coatings to epoxy floors, we bring professional-grade finishes to every commercial surface.",
    cta: { label: "Learn More", href: "/contact" },
  },
  {
    image: "/images/commercial-hero-3.jpg",
    headline: "Make Your Large Project a Breeze",
    subheadline:
      "Our experienced team manages every facet of your commercial project so you can focus on your business.",
    cta: { label: "Contact Us Today", href: "/contact" },
  },
];

const services = [
  { category: "Repair & Prep", items: ["Stucco Repair", "Gutters & Trim", "Block Repair", "Wood Repair"] },
  { category: "Cleaning & Coating", items: ["Pressure Cleaning", "Industrial Coating", "Waterproofing", "Exterior Painting"] },
  { category: "Specialty Finishes", items: ["Elastomeric Coating", "Ceramic Coating", "Roof Coatings", "Epoxy Floors"] },
];

const galleryImages = [
  { src: "/images/commercial-hero-1.jpg", alt: "Commercial painting project" },
  { src: "/images/commercial-gallery-1.jpg", alt: "ALF repaint Largo FL" },
  { src: "/images/commercial-hero-2.jpg", alt: "Industrial coating" },
  { src: "/images/commercial-gallery-2.jpg", alt: "Epoxy floor application" },
  { src: "/images/commercial-hero-3.jpg", alt: "Large commercial project" },
  { src: "/images/commercial-gallery-3.jpg", alt: "Exterior commercial paint" },
  { src: "/images/commercial-project.jpg", alt: "Complex painting" },
  { src: "/images/commercial-gallery-4.jpg", alt: "Before and after commercial" },
];

export default function CommercialPage() {
  return (
    <>
      <HeroSection slides={heroSlides} />

      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.header}>
            <span className={styles.tag}>Commercial Services</span>
            <h2 className={styles.title}>Full-Scope Commercial Solutions</h2>
          </div>
          <div className={styles.grid}>
            {services.map((group) => (
              <div key={group.category} className={styles.card}>
                <h3 className={styles.cardTitle}>{group.category}</h3>
                <ul className={styles.list}>
                  {group.items.map((item) => (
                    <li key={item} className={styles.listItem}>
                      <span className={styles.dot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ParallaxImageSection
        image="/images/commercial-project.jpg"
        tag="Our Specialty"
        headline="Trusted by HOAs, Condos & Complexes"
        body="We understand that commercial clients need reliability. Our team delivers every project on schedule with minimal disruption to residents and operations. We work closely with property managers and boards to keep everything running smoothly."
        cta={{ label: "Request a Commercial Quote", href: "/contact" }}
        dark
        list={["On-Time, On-Budget Delivery", "Minimal Disruption", "Licensed & Insured", "Tampa Bay's #1 Commercial Contractor"]}
      />

      <GallerySection images={galleryImages} tag="Commercial Portfolio" title="Recent Commercial Projects" />

      <ContactSection />
    </>
  );
}
