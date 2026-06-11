import React, { useState, useEffect } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import MenuLogo from "@/components/utility/menu-button";
import ThemeSwitch from "@/components/utility/theme-switch";
import AnimatedLogo from "@/animation/animated-logo";
import MobileMenu from "@/components/utility/mobile-menu";
import { classNames } from "@/utility/classNames";

export type NavbarRoute = {
  title: string;
  href: string;
};

export type NavbarRoutes = NavbarRoute[];

export interface NavbarProps {
  routes: NavbarRoutes;
}

export default function Navbar(props: NavbarProps) {
  const [activeSection, setActiveSection] = useState("#home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const sections = ["home", "about", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header
      className={classNames(
        "sticky top-0 z-50 px-6 py-4 transition-all duration-300 sm:px-14 md:px-20",
        isScrolled
          ? "border-b border-foreground/10 bg-background/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex items-center justify-between lg:max-w-7xl">
        <button
          onClick={() => {
            const element = document.getElementById("home");
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="flex items-center justify-center"
          aria-label="Return to home page"
        >
          <div className="flex items-center">
            <AnimatedLogo />
          </div>
        </button>
        <nav className="glass-panel hidden items-center gap-2 rounded-full px-2 py-1.5 shadow-md md:flex">
          <ul className="flex gap-1 text-sm font-medium">
            {props.routes.map((_link, index) => {
              return (
                <li key={index} className="my-1.5">
                  <Link
                    href={_link.href}
                    onClick={(e) => handleNavClick(e, _link.href)}
                    className={classNames(
                      activeSection === _link.href
                        ? "font-semibold text-white"
                        : "text-foreground/80 hover:text-foreground",
                      "group relative mx-1 rounded-full px-4 py-2 transition-colors duration-200",
                    )}
                  >
                    {_link.href === activeSection && (
                      <motion.span
                        layoutId="tab-pill"
                        animate={{
                          transition: {
                            x: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            },
                          },
                        }}
                        className="bg-brand-gradient absolute inset-0 -z-10 rounded-full shadow-glow"
                      ></motion.span>
                    )}
                    {_link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeSwitch />
        </nav>
        <AnimatePresence>
          <MenuLogo open={isModalOpen} toggle={toggleModal} />
        </AnimatePresence>
      </div>

      <MobileMenu
        routes={props.routes}
        openMenu={isModalOpen}
        setOpenMenu={setIsModalOpen}
      />
    </header>
  );
}
