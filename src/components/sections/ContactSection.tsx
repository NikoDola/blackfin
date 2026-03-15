"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/utils";
import { ContactFormData } from "@/types";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    telephone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

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
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.title}
          >
            Request a Free Quote
          </motion.h2>
        </div>

        <div className={styles.layout}>
          {/* Info cards */}
          <div className={styles.infoCards}>
            {[
              { icon: <Phone size={20} />, label: "Call Us", value: PHONE, href: PHONE_HREF },
              { icon: <Mail size={20} />, label: "Email", value: "info@blackfincon.com", href: "mailto:info@blackfincon.com" },
              { icon: <MapPin size={20} />, label: "Service Area", value: "Entire Tampa Bay Region" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={styles.infoCard}
              >
                <div className={styles.infoIcon}>{item.icon}</div>
                <div>
                  <p className={styles.infoLabel}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className={styles.infoLink}>{item.value}</a>
                  ) : (
                    <p className={styles.infoValue}>{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={styles.formPanel}
          >
            {submitted ? (
              <div className={styles.success}>
                <CheckCircle size={48} className={styles.successIcon} />
                <h3 className={styles.successTitle}>Message Received!</h3>
                <p className={styles.successText}>
                  Thank you for reaching out. We&apos;ll get back to you shortly with your free quote.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <Input id="name" name="name" label="Name" placeholder="John Smith" required value={form.name} onChange={handleChange} />
                <Input id="telephone" name="telephone" label="Phone" type="tel" placeholder="(727) 000-0000" required value={form.telephone} onChange={handleChange} />
                <Input id="email" name="email" label="Email" type="email" placeholder="john@example.com" required value={form.email} onChange={handleChange} />
                <Input id="subject" name="subject" label="Subject" placeholder="Residential painting quote" value={form.subject} onChange={handleChange} />
                <div className={styles.fullSpan}>
                  <Textarea id="message" name="message" label="Message (optional)" placeholder="Tell us about your project..." value={form.message} onChange={handleChange} />
                </div>
                <div className={styles.fullSpan}>
                  <Button type="submit" fullWidth size="lg" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
