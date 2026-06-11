import React from "react";

import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const FOOTER_LINKS = [
  {
    heading: "Company",
    links: [
      { title: "Home", href: "#home" },
      { title: "About Us", href: "#about" },
      { title: "Services", href: "#services" },
      { title: "Projects", href: "#projects" },
      { title: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { title: "Blockchain Development", href: "#services" },
      { title: "AI & Machine Learning", href: "#services" },
      { title: "DeFi Solutions", href: "#services" },
      { title: "NFT Platforms", href: "#services" },
      { title: "Web3 Integration", href: "#services" },
    ],
  },
];

export default function Footer() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document
        .getElementById(href.substring(1))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-foreground/10 px-6 pb-8 pt-16 sm:px-14 md:px-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[2fr,1fr,1fr]">
          {/* Brand column */}
          <div className="max-w-sm">
            <div className="font-display text-2xl font-bold tracking-tight">
              <span className="text-gradient">weflow</span>
              <span className="text-foreground/70">solutions</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A global technology partner engineering blockchain, AI, and
              full-stack software solutions for ambitious companies worldwide.
            </p>
            <div className="mt-6 flex gap-5">
              <a
                href={siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-foreground/15 flex h-10 w-10 items-center justify-center rounded-full border p-2.5 transition-all hover:border-accent hover:shadow-glow"
                aria-label="link to Github"
              >
                <GithubIcon className="text-foreground/80 transition-colors hover:text-accent" />
              </a>
              <a
                href={siteMetadata.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="border-foreground/15 flex h-10 w-10 items-center justify-center rounded-full border p-2.5 transition-all hover:border-accent hover:shadow-glow"
                aria-label="link to Twitter"
              >
                <TwitterIcon className="text-foreground/80 transition-colors hover:text-accent" />
              </a>
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border-foreground/15 flex h-10 w-10 items-center justify-center rounded-full border p-2.5 transition-all hover:border-accent hover:shadow-glow"
                aria-label="link to Linkedin"
              >
                <LinkedinIcon className="text-foreground/80 transition-colors hover:text-accent" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-foreground">
                {group.heading}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-center sm:flex-row sm:text-left">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WeFlow Solutions. All rights reserved.
          </span>
          <span className="text-xs text-muted-foreground">
            Engineering the digital future — globally.
          </span>
        </div>
      </div>
    </footer>
  );
}
