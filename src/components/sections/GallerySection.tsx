"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GalleryImage } from "@/types";
import styles from "./GallerySection.module.css";

interface GallerySectionProps {
  images: GalleryImage[];
  title?: string;
  tag?: string;
}

export function GallerySection({ images, title = "Our Work", tag = "Portfolio" }: GallerySectionProps) {
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
            {tag}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.title}
          >
            {title}
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={styles.item}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className={styles.img}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
