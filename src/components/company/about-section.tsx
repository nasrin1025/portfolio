/* eslint-disable prettier/prettier */
import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Globe2, Rocket, ShieldCheck, Users } from "lucide-react";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 10, suffix: "+", label: "International Clients" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const VALUES = [
  {
    icon: Globe2,
    title: "Global Mindset",
    description:
      "We partner with startups and enterprises across continents, delivering to international standards.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Audited smart contracts, hardened infrastructure, and rigorous QA on every release.",
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    description:
      "Agile delivery with rapid iterations — from concept to production in weeks, not months.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "We embed with your team and stay accountable long after launch with 24/7 support.",
  },
];

const EXPERTISE_TAGS = [
  "Smart Contracts",
  "Web3 Development",
  "Machine Learning",
  "DeFi Solutions",
  "NFT Platforms",
  "AI Trading Systems",
  "Cloud Architecture",
  "Full-Stack Engineering",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28 sm:px-14 md:px-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-violet/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-cyan/10 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-sm font-semibold tracking-wide text-accent">
            WHO WE ARE
          </div>
          <h2 className="mb-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            A global team building the{" "}
            <span className="text-gradient">digital economy</span> of tomorrow
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-xl leading-relaxed text-foreground/90">
              At{" "}
              <span className="font-semibold text-accent">
                WeFlow Solutions
              </span>
              , we pioneer the intersection of blockchain technology and
              artificial intelligence to create transformative digital products
              for clients around the world.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our team of expert engineers, blockchain architects, and AI
              specialists has delivered everything from DeFi platforms and NFT
              marketplaces to AI-powered trading systems and decentralized
              autonomous organizations — the infrastructure of tomorrow&apos;s
              digital economy.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Wherever you are in the world, we operate as an extension of your
              team: transparent, fast-moving, and obsessed with quality.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {EXPERTISE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="gradient-border rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-5"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="gradient-border group relative overflow-hidden rounded-2xl p-8 transition-transform hover:-translate-y-1"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-all group-hover:scale-150"></div>
                <div className="text-gradient mb-2 font-display text-4xl font-bold md:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Value props */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="bg-brand-gradient mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-glow">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
