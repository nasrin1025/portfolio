import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const pathVariant: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

  return (
    <AnimatePresence>
      <div className="flex items-center gap-3">
        <motion.svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 sm:h-11 sm:w-11"
          initial={{ rotate: -8, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <defs>
            <linearGradient
              id="wf-gradient"
              x1="4"
              y1="4"
              x2="44"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--brand-cyan))" />
              <stop offset="0.5" stopColor="hsl(var(--brand-indigo))" />
              <stop offset="1" stopColor="hsl(var(--brand-violet))" />
            </linearGradient>
          </defs>
          <motion.rect
            x="2.5"
            y="2.5"
            width="43"
            height="43"
            rx="12"
            stroke="url(#wf-gradient)"
            strokeWidth="2.5"
            variants={pathVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          <motion.path
            d="M11 16L17.5 32L24 19L30.5 32L37 16"
            stroke="url(#wf-gradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
          />
        </motion.svg>
        <motion.span
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-xl font-bold tracking-tight sm:text-2xl"
        >
          <span className="text-gradient">weflow</span>
          <span className="text-foreground/70">solutions</span>
        </motion.span>
      </div>
    </AnimatePresence>
  );
}
