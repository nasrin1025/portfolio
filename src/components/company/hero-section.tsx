/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Blocks,
  BrainCircuit,
  Coins,
  Cpu,
  Globe2,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const ROTATING_WORDS = [
  "Blockchain Platforms",
  "AI-Driven Systems",
  "Digital Experiences",
  "Scalable Software",
];

const TECH_STACK = [
  "Ethereum",
  "Solana",
  "Solidity",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TensorFlow",
  "AWS",
  "Polygon",
  "TypeScript",
  "Rust",
  "PostgreSQL",
  "Docker",
];

const HERO_STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Global Clients" },
  { value: "5+", label: "Years of Excellence" },
  { value: "24/7", label: "Dedicated Support" },
];

const TERMINAL_LINES = [
  { text: "$ weflow deploy --prod", accent: false },
  { text: "✓ Smart contracts audited", accent: true },
  { text: "✓ AI models calibrated", accent: true },
  { text: "✓ Shipped to 3 continents", accent: true },
];

function OrbitChip({
  icon: Icon,
  position,
  reverse = false,
  slower = false,
  gradient = false,
}: {
  icon: React.ElementType;
  position: string;
  reverse?: boolean;
  slower?: boolean;
  gradient?: boolean;
}) {
  // Counter-rotation keeps the chip upright while its parent layer spins
  const counterSpin = slower
    ? reverse
      ? "animate-spin-slower"
      : "animate-spin-slower-reverse"
    : reverse
    ? "animate-spin-slow"
    : "animate-spin-slow-reverse";

  return (
    <div className={`absolute ${position}`}>
      <div
        className={`${counterSpin} flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg ${
          gradient
            ? "bg-brand-gradient text-white shadow-glow"
            : "glass-panel text-accent"
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>
    </div>
  );
}

function OrbitalVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative hidden aspect-square w-full max-w-[540px] select-none justify-self-center lg:block"
    >
      {/* Static guide rings */}
      <div className="border-foreground/15 absolute inset-0 rounded-full border border-dashed"></div>
      <div className="absolute inset-[16%] rounded-full border border-foreground/10"></div>
      <div className="absolute inset-[32%] rounded-full border border-dashed border-foreground/10"></div>

      {/* Outer orbit layer */}
      <div className="absolute inset-0 animate-spin-slower">
        <OrbitChip
          icon={Blocks}
          position="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          slower
          gradient
        />
        <OrbitChip
          icon={Coins}
          position="right-[6.5%] top-3/4 translate-x-1/2 -translate-y-1/2"
          slower
        />
        <OrbitChip
          icon={ShieldCheck}
          position="left-[6.5%] top-3/4 -translate-x-1/2 -translate-y-1/2"
          slower
        />
      </div>

      {/* Middle orbit layer (reverse) */}
      <div className="absolute inset-[16%] animate-spin-slow-reverse">
        <OrbitChip
          icon={BrainCircuit}
          position="left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2"
          reverse
          gradient
        />
        <OrbitChip
          icon={Network}
          position="right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
          reverse
        />
        <OrbitChip
          icon={Cpu}
          position="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
          reverse
        />
      </div>

      {/* Glowing core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-brand-gradient absolute inset-0 animate-pulse-ring rounded-full"></div>
        <div className="bg-brand-gradient relative flex h-28 w-28 items-center justify-center rounded-full shadow-glow-lg">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
          >
            <path
              d="M11 16L17.5 32L24 19L30.5 32L37 16"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Floating status card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="glass-panel absolute -right-2 top-6 animate-float-slow rounded-2xl px-4 py-3 shadow-xl"
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
          </span>
          <span className="text-xs font-semibold text-foreground">
            All Systems Operational
          </span>
        </div>
        <div className="mt-1 text-[11px] font-medium text-muted-foreground">
          99.9% uptime · global delivery
        </div>
      </motion.div>

      {/* Floating terminal card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="animation-delay-2000 absolute -left-6 bottom-8 w-64 animate-float-slow overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
          <span className="ml-2 font-mono text-[10px] text-zinc-500">
            weflow-cli
          </span>
        </div>
        <div className="space-y-1.5 px-4 py-3 font-mono text-[11px]">
          {TERMINAL_LINES.map((line, index) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 + index * 0.5 }}
              className={line.accent ? "text-emerald-400" : "text-zinc-300"}
            >
              {line.text}
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block h-3 w-1.5 translate-y-0.5 bg-zinc-400"
          ></motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-6rem)] flex-col justify-between overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-grid-glow absolute inset-0"></div>
        <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] animate-blob rounded-full bg-brand-cyan/20 blur-3xl"></div>
        <div className="animation-delay-2000 absolute right-0 top-1/3 h-[26rem] w-[26rem] animate-blob rounded-full bg-brand-violet/20 blur-3xl"></div>
        <div className="animation-delay-4000 bg-brand-indigo/15 absolute bottom-0 left-1/3 h-[22rem] w-[22rem] animate-blob rounded-full blur-3xl"></div>
      </div>

      <div className="flex flex-1 items-center px-6 pt-10 sm:px-14 md:px-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-2 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan"></span>
                </span>
                <span className="text-sm font-medium text-foreground/80">
                  Global Technology Partner
                </span>
                <Globe2 className="h-4 w-4 text-accent" />
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-6xl"
              >
                We Engineer
                <br />
                <span className="relative inline-block min-h-[1.2em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
                      transition={{ duration: 0.45 }}
                      className="text-gradient inline-block pb-2"
                    >
                      {ROTATING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                <span className="font-semibold text-foreground">
                  WeFlow Solutions
                </span>{" "}
                is a global software engineering company crafting blockchain,
                AI, and full-stack products for ambitious teams worldwide — from
                DeFi platforms and NFT ecosystems to intelligent trading
                systems.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <button
                  onClick={() => scrollTo("contact")}
                  className="bg-brand-gradient group inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollTo("projects")}
                  className="glass-panel group inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:border-accent/50"
                >
                  <Sparkles className="h-4 w-4 text-accent" />
                  Explore Our Work
                </button>
              </motion.div>
            </div>

            {/* Orbital tech visual */}
            <OrbitalVisual />
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 sm:grid-cols-4"
          >
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-background/80 px-6 py-5 backdrop-blur-sm"
              >
                <div className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative mt-16 border-t border-foreground/10 py-6"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"></div>
        <div className="flex overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12 pr-12">
            {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
              <span
                key={index}
                className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-muted-foreground/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent/60"></span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
