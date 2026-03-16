"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, type Easing } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HeroSlide } from "@/types";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  slides: HeroSlide[];
}

export function HeroSection({ slides }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length, timerKey]);

  const resetTimer = () => setTimerKey((k) => k + 1);

  const goTo = (index: number) => { setCurrent(index); resetTimer(); };
  const prev = () => { setCurrent((c) => (c - 1 + slides.length) % slides.length); resetTimer(); };
  const next = () => { setCurrent((c) => (c + 1) % slides.length); resetTimer(); };

  const slide = slides[current];

  const easeOut: Easing = "easeOut";
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: easeOut },
    }),
  };

  return (
    <section ref={ref} className={styles.section}>
      {/* Parallax Image Layer */}
      <motion.div style={{ y: imageY }} className={styles.bgLayer} key={`bg-${current}`}>
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            variants={{
              enter: { scale: 1.12 },
              center: { scale: 1 },
              exit: { scale: 0.95 },
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className={styles.bgSlide}
          >
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              className={styles.bgImg}
              sizes="100vw"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <AnimatePresence mode="wait">
          <motion.div key={current} className={styles.contentInner}>
            <motion.span
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className={styles.badge}
            >
              Construction & Painting Specialists
            </motion.span>

            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className={styles.headline}
            >
              {slide.headline}
            </motion.h1>

            <motion.p
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className={styles.subheadline}
            >
              {slide.subheadline}
            </motion.p>

            {slide.cta && (
              <motion.div
                custom={3}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className={styles.ctaRow}
              >
                <Button href={slide.cta.href} size="lg">
                  {slide.cta.label}
                </Button>
                <Button href="/residential" size="lg" variant="lightOutline">
                  Our Services
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider controls */}
      {slides.length > 1 && (
        <>
          <button onClick={prev} className={styles.prevBtn} aria-label="Previous slide">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className={styles.nextBtn} aria-label="Next slide">
            <ChevronRight size={20} />
          </button>

          <div className={styles.dots}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[styles.dot, i === current ? styles.dotActive : ""].filter(Boolean).join(" ")}
              />
            ))}
          </div>
        </>
      )}

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>SCROLL</span>
      </motion.div>
    </section>
  );
}
