"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import styles from "./ParallaxImageSection.module.css";

interface ParallaxImageSectionProps {
  image: string;
  tag?: string;
  headline: string;
  body: string;
  cta?: { label: string; href: string };
  reverse?: boolean;
  dark?: boolean;
  list?: string[];
}

export function ParallaxImageSection({
  image,
  tag,
  headline,
  body,
  cta,
  reverse = false,
  dark = false,
  list,
}: ParallaxImageSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const sectionClass = [styles.section, dark ? styles.dark : styles.light].join(" ");
  const innerClass = [styles.inner, reverse ? styles.innerReverse : ""].filter(Boolean).join(" ");

  return (
    <section ref={ref} className={sectionClass}>
      <div className={innerClass}>
        {/* Image with parallax */}
        <div className={styles.imageWrap}>
          <motion.div style={{ y: imageY }} className={styles.imageParallax}>
            <Image
              src={image}
              alt={headline}
              fill
              className={styles.imageBg}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.textWrap}
        >
          {tag && (
            <span className={[styles.tag, dark ? styles.tagDark : styles.tagLight].join(" ")}>
              {tag}
            </span>
          )}
          <h2 className={[styles.headline, dark ? styles.headlineDark : styles.headlineLight].join(" ")}>
            {headline}
          </h2>
          <p className={[styles.body, dark ? styles.bodyDark : styles.bodyLight].join(" ")}>
            {body}
          </p>
          {list && (
            <ul className={styles.list}>
              {list.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.listDot} />
                  <span className={[styles.listText, dark ? styles.listTextDark : styles.listTextLight].join(" ")}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {cta && (
            <Button href={cta.href} variant={dark ? "tealOutline" : "primary"}>
              {cta.label}
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
