"use client";

import { motion, type Easing } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    title: "Residential Painting",
    subtitle: "Interior · Exterior · Cabinetry",
    description:
      "From bold accent walls to whole-home transformations, we bring precision and passion to every residential painting project.",
    icon: "/images/logo.jpg",
    href: "/residential",
    accent: "#97bcc7",
  },
  {
    title: "Commercial Painting",
    subtitle: "Paint · Coating · Epoxy & More",
    description:
      "We deliver commercial projects on time and within budget — HOAs, condos, complexes, and institutions across Tampa Bay.",
    icon: "/images/logo.jpg",
    href: "/commercial",
    accent: "#006884",
  },
  {
    title: "Construction & Remodel",
    subtitle: "Residential & Commercial",
    description:
      "Kitchens, bathrooms, outdoor spaces, ADUs — our construction team handles every facet of your remodeling vision.",
    icon: "/images/logo.jpg",
    href: "/residential",
    accent: "#bfa76a",
  },
];

const easeOut: Easing = "easeOut";
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: easeOut },
  }),
};

export function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.tag}
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.title}
          >
            Our Services
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                href={service.href}
                className={styles.card}
              >
                <div
                  className={styles.iconWrap}
                  style={{ "--ring-color": service.accent } as React.CSSProperties}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={56}
                    height={56}
                    className={styles.iconImg}
                  />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardSubtitle} style={{ color: service.accent }}>
                  {service.subtitle}
                </p>
                <p className={styles.cardDesc}>{service.description}</p>
                <span className={styles.cardMore}>
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
