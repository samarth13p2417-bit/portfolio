"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { personalInfo, stats } from "@/lib/data";

// ─── Floating tech icon component ─────────────────────────────────────────────
interface FloatingIconProps {
  icon: string;
  className: string;
  delay: number;
}

function FloatingIcon({ icon, className, delay }: FloatingIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg backdrop-blur-md sm:h-12 sm:w-12 ${className}`}
      style={{ animation: `float ${3 + delay}s ease-in-out infinite ${delay}s` }}
    >
      {icon}
    </motion.div>
  );
}

// ─── Highlight bullet data ────────────────────────────────────────────────────
const highlights = [
  { icon: "🎓", text: "B.Tech Data Science Student" },
  { icon: "🤖", text: "ML & AI Enthusiast" },
  { icon: "💻", text: "Full-Stack Developer" },
  { icon: "📊", text: "Data-Driven Problem Solver" },
];

// ─── Floating tech icons around the SC card ───────────────────────────────────
const floatingIcons: FloatingIconProps[] = [
  { icon: "🐍", className: "-top-4 -left-4", delay: 0 },
  { icon: "⚛️", className: "-top-2 right-2", delay: 0.3 },
  { icon: "📊", className: "bottom-6 -left-6", delay: 0.6 },
  { icon: "🧠", className: "-bottom-2 right-0", delay: 0.9 },
  { icon: "🔮", className: "top-1/2 -right-6 -translate-y-1/2", delay: 1.2 },
  { icon: "💡", className: "top-1/3 -left-8", delay: 0.4 },
];

// ─── Animation presets ────────────────────────────────────────────────────────
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// ─── Main component ──────────────────────────────────────────────────────────
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading title="About Me" subtitle="Get to know me" />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Left: Decorative SC Card ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex w-fit items-center justify-center"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-2xl" />

            {/* Animated border container */}
            <div className="relative overflow-hidden rounded-3xl p-[2px]">
              {/* Spinning gradient border */}
              <div
                className="absolute inset-[-50%] animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00E5FF, #7B61FF, #00FFB2, #00E5FF)",
                }}
              />

              {/* Inner card */}
              <div className="relative flex h-72 w-72 items-center justify-center rounded-3xl bg-background sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                {/* Grid background inside card */}
                <div className="absolute inset-0 rounded-3xl bg-grid opacity-30" />

                {/* Radial glow behind initials */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-radial from-primary/10 via-transparent to-transparent" />

                {/* SC Initials */}
                <span className="relative select-none text-8xl font-black tracking-wider sm:text-9xl lg:text-[10rem]">
                  <span className="bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent">
                    SC
                  </span>
                </span>

                {/* Subtle inner border */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" />
              </div>
            </div>

            {/* Floating tech icons */}
            {floatingIcons.map((icon) => (
              <FloatingIcon key={icon.icon} {...icon} />
            ))}
          </motion.div>

          {/* ── Right: Content ─────────────────────────────────────── */}
          <div className="flex flex-col gap-8">
            {/* Summary */}
            <motion.p
              custom={0.2}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-base leading-relaxed text-muted sm:text-lg"
            >
              {personalInfo.summary}
            </motion.p>

            {/* Highlights */}
            <motion.ul
              custom={0.35}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {highlights.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 backdrop-blur-md transition-colors duration-300 hover:border-primary/20 hover:bg-white/[0.06]"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-foreground/90 sm:text-base">
                    {item.text}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* Stats row */}
            <motion.div
              custom={0.5}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-2 grid grid-cols-2 gap-6 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
