/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteMetadata } from "@/data/siteMetaData.mjs";

interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  link?: string;
}

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: siteMetadata.email,
    link: `mailto:${siteMetadata.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "WeFlow Solutions",
    link: siteMetadata.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "weflowsolutions",
    link: siteMetadata.github,
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Dhaka, Bangladesh — Serving Clients Worldwide",
  },
];

const WHY_US = [
  "Expert blockchain & AI engineering team",
  "Proven track record with 10+ international clients",
  "End-to-end delivery, from concept to scale",
  "World-class technology stack and security standards",
  "24/7 support and long-term partnership",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputClasses =
    "w-full rounded-xl border border-foreground/15 bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 sm:px-14 md:px-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-brand-cyan/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-violet/10 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-sm font-semibold tracking-wide text-accent">
            GET IN TOUCH
          </div>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">extraordinary</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Ready to transform your vision into reality? Tell us about your next
            blockchain, AI, or software project.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="mb-8 font-display text-2xl font-semibold text-foreground">
              Contact Information
            </h3>

            <div className="space-y-5">
              {CONTACT_INFO.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="glass-panel flex items-start gap-4 rounded-2xl p-4 transition-colors hover:border-accent/40"
                >
                  <div className="bg-brand-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-glow">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {info.label}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-words font-medium text-accent transition-all hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-medium text-foreground">
                        {info.value}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <h4 className="mb-5 font-display text-lg font-semibold text-foreground">
                Why choose WeFlow Solutions?
              </h4>
              <ul className="space-y-3.5">
                {WHY_US.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gradient-border rounded-3xl p-8 shadow-xl"
          >
            <h3 className="mb-6 font-display text-2xl font-semibold text-foreground">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground/80"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputClasses}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground/80"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputClasses}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-foreground/80"
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className={inputClasses}
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className={inputClasses}
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-brand-gradient group inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white shadow-glow transition-all hover:scale-[1.02] hover:shadow-glow-lg"
              >
                Send Message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
