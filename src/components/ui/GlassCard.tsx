"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -5,
              x: -5,
            }
          : undefined
      }
      transition={{
        duration: 0.25,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={`
        relative overflow-hidden p-6 rounded-xl
        ${hover ? "cyber-card cyber-corners hover:shadow-[5px_5px_0px_#ff007a] hover:border-[#00f5ff]" : "bg-[#060b16] border border-[#131b31]"}
        ${className}
      `}
    >
      {/* Corner indicators for futuristic UI */}
      {hover && (
        <>
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00f5ff] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#ff007a] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />
        </>
      )}

      {children}
    </motion.div>
  );
}
