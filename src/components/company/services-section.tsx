/* eslint-disable prettier/prettier */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  Coins,
  Landmark,
  Network,
  Palette,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const SERVICES: Service[] = [
  {
    icon: Blocks,
    title: "Blockchain Development",
    description:
      "Custom blockchain solutions, smart contracts, and DApp development on Ethereum, BSC, Polygon, Solana, and more.",
    features: [
      "Smart Contract Development",
      "DeFi Protocol Design",
      "Token Creation & ICO",
      "Blockchain Consulting",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Advanced AI solutions including predictive analytics, natural language processing, and automated trading systems.",
    features: [
      "Trading Bot Development",
      "Predictive Analytics",
      "NLP Solutions",
      "Computer Vision",
    ],
  },
  {
    icon: Palette,
    title: "NFT Platforms",
    description:
      "End-to-end NFT marketplace development with minting, trading, and royalty management features.",
    features: [
      "NFT Marketplace",
      "Minting Platform",
      "Royalty Systems",
      "Metadata Management",
    ],
  },
  {
    icon: Coins,
    title: "DeFi Solutions",
    description:
      "Decentralized exchange platforms, yield farming protocols, and liquidity pool management systems.",
    features: [
      "DEX Development",
      "Yield Farming",
      "Staking Platforms",
      "Liquidity Pools",
    ],
  },
  {
    icon: Landmark,
    title: "DAO & Governance",
    description:
      "Decentralized autonomous organization frameworks with voting mechanisms and treasury management.",
    features: [
      "DAO Infrastructure",
      "Voting Systems",
      "Treasury Management",
      "Governance Tokens",
    ],
  },
  {
    icon: Network,
    title: "Web3 & Cloud Integration",
    description:
      "Seamless Web3 wallet integration, IPFS storage, decentralized identity, and scalable cloud infrastructure.",
    features: [
      "Wallet Integration",
      "IPFS Storage",
      "Decentralized ID",
      "Cloud & DevOps",
    ],
  },
];

function SpotlightCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight((prev) => ({ ...prev, opacity: 0 }))}
      className="gradient-border group relative overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1.5"
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(280px circle at ${spotlight.x}px ${spotlight.y}px, hsl(var(--accent) / 0.12), transparent 70%)`,
        }}
      ></div>

      <div className="relative">
        <div className="mb-6 flex items-start justify-between">
          <div className="bg-brand-gradient inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-glow">
            <service.icon className="h-6 w-6" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
        </div>
        <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
          {service.title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <ul className="space-y-2.5">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 text-sm font-medium text-foreground/75"
            >
              <span className="bg-brand-gradient h-1.5 w-1.5 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative px-6 py-28 sm:px-14 md:px-20">
      <div className="absolute inset-0 -z-10">
        <div className="bg-grid-glow absolute inset-0 opacity-60"></div>
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
            WHAT WE OFFER
          </div>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Services that <span className="text-gradient">scale globally</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Comprehensive blockchain, AI, and software engineering — tailored to
            your business and built to world-class standards.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <SpotlightCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
