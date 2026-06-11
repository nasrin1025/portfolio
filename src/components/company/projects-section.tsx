/* eslint-disable prettier/prettier */
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  ImageIcon,
  Layers,
  X,
} from "lucide-react";

interface Project {
  name: string;
  folder: string;
  description: string;
  category: string;
  liveLink?: string;
  images: string[];
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    name: "Social Midea",
    folder: "socialmidea",
    description:
      "A comprehensive social forum platform for business, money, and ideas. Built for Tahweel, this platform serves as a powerful space for entrepreneurs, investors, business leaders, creators, and decision-makers.",
    category: "Social Platform",
    liveLink: "https://forum.tahweel.io/",
    images: [
      "/socialmidea/Screenshot 2026-02-27 213844.png",
      "/socialmidea/2.png",
      "/socialmidea/3.png",
      "/socialmidea/4.png",
    ],
    tags: ["Web3", "Social", "Community", "Forum"],
  },
  {
    name: "Samurai Metaverse",
    folder: "samuraiMataverse",
    description:
      "An immersive blockchain-based metaverse platform featuring Japanese samurai aesthetics. Users can explore virtual worlds, own digital assets, and participate in metaverse activities.",
    category: "Metaverse",
    liveLink: "https://samuraimetaverse.io",
    images: [
      "/samuraiMataverse/1.png",
      "/samuraiMataverse/2.png",
      "/samuraiMataverse/3.png",
      "/samuraiMataverse/4.png",
    ],
    tags: ["Metaverse", "NFT", "Gaming", "Web3"],
  },
  {
    name: "Samurai DAO",
    folder: "samuraidao",
    description:
      "A decentralized autonomous organization with gamified governance. Features include voting mechanisms, badge systems, treasury management, and community-driven decision making.",
    category: "DAO & Governance",
    liveLink: "https://www.samuraidao.sh",
    images: [
      "/samuraidao/1.png",
      "/samuraidao/2.png",
      "/samuraidao/3.png",
      "/samuraidao/4.png",
    ],
    tags: ["DAO", "Governance", "DeFi", "Gamification"],
  },
  {
    name: "OvenSwap",
    folder: "ovenswap",
    description:
      "A decentralized exchange (DEX) platform enabling seamless token swaps with low fees. Features real-time pricing, liquidity pools, and advanced trading analytics.",
    category: "DeFi Exchange",
    liveLink: "https://ovenswap.online/",
    images: ["/ovenswap/1.png", "/ovenswap/2.png", "/ovenswap/3.png"],
    tags: ["DEX", "DeFi", "Trading", "Liquidity"],
  },
  {
    name: "NFT Rakuichi Rakuza",
    folder: "nftrakuichirakuza",
    description:
      "A sophisticated NFT marketplace supporting multiple blockchains. Users can mint, buy, sell, and trade NFTs with advanced filtering and collection management.",
    category: "NFT Marketplace",
    liveLink: "https://nftrakuichirakuza.io/",
    images: [
      "/nftrakuichirakuza/1.png",
      "/nftrakuichirakuza/2.png",
      "/nftrakuichirakuza/3.png",
    ],
    tags: ["NFT", "Marketplace", "Multi-chain", "Trading"],
  },
  {
    name: "Market Making Bot",
    folder: "marketmakingbot",
    description:
      "An AI-powered automated trading bot for cryptocurrency markets. Features include auto-trading, secure API integration, real-time analytics, and Telegram notifications.",
    category: "AI Trading",
    liveLink: undefined,
    images: [
      "/marketmakingbot/1.png",
      "/marketmakingbot/2.png",
      "/marketmakingbot/3.png",
    ],
    tags: ["AI", "Trading Bot", "Automation", "Analytics"],
  },
];

function getDomain(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setSlideDirection(1);
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1,
      );
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setSlideDirection(-1);
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1,
      );
    }
  }, [selectedProject]);

  // Keyboard navigation + body scroll lock while the modal is open
  useEffect(() => {
    if (!selectedProject) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, nextImage, prevImage]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28 sm:px-14 md:px-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-brand-indigo/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-brand-cyan/10 blur-3xl"></div>
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
            OUR WORK
          </div>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Work that <span className="text-gradient">speaks for itself</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            World-class blockchain and AI products delivered for clients across
            the globe.
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => handleProjectClick(project)}
              className="gradient-border group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                {project.liveLink && (
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-background/70 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    </span>
                    LIVE
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    {project.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project showcase modal — styled as a browser window */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="bg-black/85 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, y: 28, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 28, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-background shadow-2xl"
            >
              {/* Browser-style title bar */}
              <div className="flex shrink-0 items-center justify-between gap-4 border-b border-foreground/10 bg-muted/50 px-5 py-3.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400/90"></span>
                  <span className="h-3 w-3 rounded-full bg-amber-400/90"></span>
                  <span className="h-3 w-3 rounded-full bg-emerald-400/90"></span>
                </div>
                <div className="hidden min-w-0 flex-1 justify-center sm:flex">
                  <div className="flex max-w-md items-center gap-2 truncate rounded-full border border-foreground/10 bg-background px-4 py-1.5 text-xs text-muted-foreground">
                    <Globe className="h-3.5 w-3.5 shrink-0 text-accent" />
                    {selectedProject.liveLink
                      ? getDomain(selectedProject.liveLink)
                      : `${selectedProject.folder}.weflowsolutions.com`}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-accent hover:text-white"
                  aria-label="Close project details"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Body */}
              <div className="grid flex-1 overflow-y-auto md:grid-cols-[1.45fr,1fr]">
                {/* Gallery */}
                <div className="flex flex-col border-foreground/10 bg-muted/30 p-5 md:border-r">
                  <div className="relative aspect-video overflow-hidden rounded-xl border border-foreground/10 bg-zinc-950">
                    <AnimatePresence mode="popLayout" custom={slideDirection}>
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: slideDirection * 48 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: slideDirection * -48 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={selectedProject.images[currentImageIndex]}
                          alt={`${selectedProject.name} screenshot ${
                            currentImageIndex + 1
                          }`}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </motion.div>
                    </AnimatePresence>

                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-accent"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-accent"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                        <div className="absolute bottom-3 right-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          {currentImageIndex + 1} /{" "}
                          {selectedProject.images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {selectedProject.images.length > 1 && (
                    <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">
                      {selectedProject.images.map((image, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSlideDirection(idx > currentImageIndex ? 1 : -1);
                            setCurrentImageIndex(idx);
                          }}
                          className={`relative h-16 w-28 flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
                            idx === currentImageIndex
                              ? "shadow-glow ring-2 ring-accent"
                              : "ring-foreground/15 opacity-50 ring-1 hover:opacity-100"
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        >
                          <Image
                            src={image}
                            alt={`Thumbnail ${idx + 1}`}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-col p-6 md:p-7">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                      {selectedProject.category}
                    </span>
                    {selectedProject.liveLink && (
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        </span>
                        LIVE IN PRODUCTION
                      </span>
                    )}
                  </div>

                  <h3 className="mb-4 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {selectedProject.name}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6 grid grid-cols-2 gap-3">
                    <div className="glass-panel rounded-xl p-3.5">
                      <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <Layers className="h-3.5 w-3.5 text-accent" />
                        Solution
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {selectedProject.category}
                      </div>
                    </div>
                    <div className="glass-panel rounded-xl p-3.5">
                      <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <ImageIcon className="h-3.5 w-3.5 text-accent" />
                        Showcase
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {selectedProject.images.length} screens
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="gradient-border rounded-full px-3.5 py-1.5 text-xs font-semibold text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    {selectedProject.liveLink ? (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-gradient group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white shadow-glow transition-all hover:scale-[1.02] hover:shadow-glow-lg"
                      >
                        Visit Live Project
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <div className="glass-panel inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-muted-foreground">
                        Private client deployment
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
