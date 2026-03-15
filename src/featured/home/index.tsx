import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ParallaxImageSection } from "@/components/sections/ParallaxImageSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";

const heroSlides = [
  {
    image: "/images/hero-bg.png",
    headline: "Tampa Bay's Finest Painting & Remodeling",
    subheadline:
      "Leverage our years of proven experience to make your residential or commercial project the best it can be.",
    cta: { label: "Get a Free Quote!", href: "/contact" },
  },
  {
    image: "/images/residential-project.jpg",
    headline: "Transform Your Home Into Your Dream",
    subheadline:
      "From kitchens and bathrooms to master suites and whole-home remodels — we manage every detail.",
    cta: { label: "Residential Services", href: "/residential" },
  },
  {
    image: "/images/commercial-project.jpg",
    headline: "Make Your Large Project a Breeze",
    subheadline:
      "HOAs, condos, complexes, and institutions — commercial projects delivered on time and within budget.",
    cta: { label: "Commercial Services", href: "/commercial" },
  },
];

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Residential painting project" },
  { src: "/images/gallery-7.jpg", alt: "Exterior project Tampa" },
  { src: "/images/gallery-8.jpg", alt: "Interior painting" },
  { src: "/images/gallery-9.jpg", alt: "Remodeling work" },
  { src: "/images/gallery-2.jpg", alt: "Cabinet painting" },
  { src: "/images/gallery-10.jpg", alt: "Residential exterior" },
  { src: "/images/commercial-gallery-1.jpg", alt: "Commercial painting" },
  { src: "/images/gallery-11.jpg", alt: "Before and after" },
  { src: "/images/commercial-gallery-2.jpg", alt: "Coating application" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection slides={heroSlides} />

      <ServicesSection />

      <ParallaxImageSection
        image="/images/residential-project.jpg"
        tag="Residential"
        headline="We Manage All the Details So You Don't Have To"
        body="From bathrooms to kitchens, to master suites to whole homes — our team transforms your living space into something extraordinary. We source premium materials and bring master craftsmanship to every project."
        cta={{ label: "View Residential Services", href: "/residential" }}
        list={[
          "Kitchen & Bathroom Remodels",
          "Interior & Exterior Painting",
          "Decks, Patios & Outdoor Spaces",
          "ADUs & Buildouts",
        ]}
      />

      <ParallaxImageSection
        image="/images/exterior-project.jpg"
        tag="Exterior"
        headline="Exteriors Made Simple"
        body="Painting, coating, staining, elastomeric, epoxy — we offer the full spectrum of exterior services. Our team handles stucco repair, gutters, trim, block repair, and waterproofing to protect your investment."
        cta={{ label: "Get a Quote", href: "/contact" }}
        reverse
        dark
        list={[
          "Exterior Painting & Staining",
          "Elastomeric & Ceramic Coatings",
          "Roof Coatings",
          "Pressure Washing",
          "Waterproofing",
        ]}
      />

      <ParallaxImageSection
        image="/images/commercial-project.jpg"
        tag="Commercial"
        headline="Make Your Large Project a Breeze"
        body="HOAs, condominiums, complexes, and institutions trust Blackfin to deliver quality commercial painting and construction services on schedule and within budget across the entire Tampa Bay region."
        cta={{ label: "Commercial Services", href: "/commercial" }}
        list={[
          "Industrial Coating",
          "Epoxy Floors",
          "Commercial Exterior Painting",
          "Large Complex Management",
        ]}
      />

      <GallerySection images={galleryImages} tag="Latest Work" title="Check Out Our Projects" />

      <ContactSection />
    </>
  );
}
