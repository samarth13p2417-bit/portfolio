"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { navLinks, personalInfo } from "@/lib/data";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <FaGithub size={16} />,
      href: personalInfo.github,
      label: "GitHub",
      colorClass: "hover:text-primary hover:border-primary/30",
    },
    {
      icon: <FaLinkedinIn size={16} />,
      href: personalInfo.linkedin,
      label: "LinkedIn",
      colorClass: "hover:text-secondary hover:border-secondary/30",
    },
    {
      icon: <FaEnvelope size={16} />,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
      colorClass: "hover:text-accent hover:border-accent/30",
    },
  ];

  return (
    <footer className="relative bg-[#030712] border-t border-white/10 overflow-hidden">
      {/* Footer background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-full max-w-7xl bg-gradient-to-t from-primary/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-4">
            <a href="#home" className="inline-block">
              <span className="text-2xl font-black font-display tracking-wider bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent glow-text">
                SC
              </span>
            </a>
            <p className="text-sm text-muted max-w-xs leading-relaxed">
              Transforming Data Into Intelligent Solutions Through AI, Analytics & Modern Development.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/80">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social/Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/80">
              Let's Stay Connected
            </h4>
            <p className="text-sm text-muted leading-relaxed">
              Based in Pune, Maharashtra, India. Open for remote projects and location opportunities.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="block"
                >
                  <div className={`h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 ${social.colorClass}`}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 2025 Samarth Choudhary. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Developed with <span className="text-red-500 animate-pulse">❤️</span> using Next.js 15
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-background font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] border-none transition-shadow duration-300 cursor-pointer"
          >
            <FaArrowUp size={14} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
