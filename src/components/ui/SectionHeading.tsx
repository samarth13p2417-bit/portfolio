"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="mb-16 flex flex-col items-center text-center relative select-none">
      {/* Sci-Fi Tech Header Bracket */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="mb-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-accent flex items-center gap-2"
      >
        <span className="text-[#ff007a]">[</span>
        <span>SYS // PNQ_COORD: 18.52° N • 73.85° E</span>
        <span className="text-[#ff007a]">]</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className="relative inline-flex items-center gap-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl font-display"
      >
        {/* Left terminal bracket */}
        <span className="text-[#ff007a] font-mono text-xl sm:text-2xl md:text-3xl">&lt;//</span>
        
        {/* Primary Title text */}
        <span className="bg-gradient-to-r from-[#00f5ff] to-[#ff007a] bg-clip-text text-transparent uppercase tracking-wide">
          {title}
        </span>

        {/* Right terminal bracket */}
        <span className="text-[#00f5ff] font-mono text-xl sm:text-2xl md:text-3xl">//&gt;</span>
      </motion.h2>

      {/* Futuristic Dotted separator bar */}
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#00f5ff] to-transparent mt-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#ff007a] animate-pulse" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-[#7f8a9e]"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
