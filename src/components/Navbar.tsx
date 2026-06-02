"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import { useScrollDirection } from "@/hooks/useScrollDirection";

// ---------------------------------------------------------------------------
// Navbar Component
// ---------------------------------------------------------------------------
export default function Navbar() {
  const scrollDirection = useScrollDirection(10);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // ---- Track which section is in-view via IntersectionObserver ----
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // ---- Detect scroll for background opacity ----
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---- Lock body scroll when mobile menu is open ----
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // ---- Computed visibility ----
  const hidden = scrollDirection === "down" && scrolled && !mobileOpen;

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 right-0 left-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ---- Logo ---- */}
          <a
            href="#home"
            className="group relative text-2xl font-bold tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="glow-text text-primary transition-all duration-300 group-hover:brightness-125">
              SC
            </span>
          </a>

          {/* ---- Desktop links ---- */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {/* Active underline */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-1/2 h-[2px] w-4/5 -translate-x-1/2 rounded-full bg-primary"
                        style={{
                          boxShadow: "0 0 8px rgba(0,229,255,0.5)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ---- Mobile hamburger ---- */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="relative z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 7, width: 24 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              transition={{ duration: 0.3 }}
              className="block h-[2px] rounded-full bg-white"
              style={{ width: 24 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-4 rounded-full bg-white"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -7, width: 24 }
                  : { rotate: 0, y: 0, width: 18 }
              }
              transition={{ duration: 0.3 }}
              className="block h-[2px] rounded-full bg-white"
              style={{ width: 18 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* ---- Mobile overlay ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-[#050816]/90 backdrop-blur-2xl md:hidden"
          >
            <nav>
              <ul className="flex flex-col items-center gap-6">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={closeMobile}
                        className={`text-2xl font-medium transition-colors duration-200 ${
                          isActive
                            ? "glow-text text-primary"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
