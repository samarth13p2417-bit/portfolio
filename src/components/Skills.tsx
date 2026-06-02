"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/data";

// ─── Tab icon map ─────────────────────────────────────────────────────────────
const tabIcons: Record<string, string> = {
  code: "⟨/⟩",
  brain: "🧠",
  layers: "📚",
  tool: "🛠️",
};

// ─── Animated progress bar ────────────────────────────────────────────────────
function ProgressBar({ level, isInView }: { level: number; isInView: boolean }) {
  return (
    <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
      {/* Track glow */}
      <div className="absolute inset-0 rounded-full bg-white/[0.02]" />

      {/* Fill */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full rounded-full bg-gradient-to-r from-primary via-secondary to-primary"
      >
        {/* Shine effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.div>
    </div>
  );
}

// ─── Skill card ───────────────────────────────────────────────────────────────
interface SkillCardProps {
  name: string;
  level: number;
  index: number;
  isInView: boolean;
}

function SkillCard({ name, level, index, isInView }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.08]"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        {/* Skill name + percentage */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground sm:text-base">
            {name}
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
            className="text-xs font-bold text-primary sm:text-sm"
          >
            {level}%
          </motion.span>
        </div>

        {/* Progress bar */}
        <ProgressBar level={level} isInView={isInView} />
      </div>
    </motion.div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isGridInView = useInView(gridRef, { once: false, margin: "-40px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="What I work with"
        />

        {/* ── Tab Navigation ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          {skillCategories.map((category, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(idx)}
                className={`relative flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base ${
                  isActive
                    ? "border border-primary/40 bg-primary/10 text-primary shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                    : "border border-white/10 bg-white/5 text-muted backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.08] hover:text-foreground"
                }`}
              >
                <span className="text-base">
                  {tabIcons[category.icon] ?? "📦"}
                </span>
                {category.title}

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-xl border border-primary/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* ── Tab Content ───────────────────────────────────────── */}
        <div ref={gridRef} className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {skillCategories[activeTab].skills.map((skill, idx) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={idx}
                  isInView={isGridInView}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
