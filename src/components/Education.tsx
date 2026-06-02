"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { education } from "@/lib/data";

// ─── Circular grade badge ─────────────────────────────────────────────────────
function GradeBadge({ grade }: { grade: string }) {
  return (
    <div className="relative flex-shrink-0">
      {/* Outer glow */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-md" />

      {/* Gradient border ring */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[2px] sm:h-20 sm:w-20">
        {/* Inner dark circle */}
        <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
          <span className="text-xs font-bold text-primary sm:text-sm">
            {grade}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Education card ───────────────────────────────────────────────────────────
interface EduCardProps {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  index: number;
  isLast: boolean;
}

function EduCard({
  degree,
  institution,
  duration,
  grade,
  index,
  isLast,
}: EduCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <div ref={cardRef} className="relative pl-10 sm:pl-14">
      {/* ── Timeline dot ───────────────────────────────────────── */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          duration: 0.4,
          delay: index * 0.15,
          type: "spring",
          stiffness: 300,
        }}
        className="absolute left-0 top-8 z-10 sm:left-2"
      >
        {/* Glow */}
        <div className="absolute -inset-2 rounded-full bg-primary/20 blur-md" />
        {/* Dot */}
        <div className="relative h-3.5 w-3.5 rounded-full border-2 border-primary bg-background shadow-[0_0_12px_rgba(0,229,255,0.5)]" />
      </motion.div>

      {/* ── Connecting line ────────────────────────────────────── */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : { height: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.15 + 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-[6px] top-10 w-[2px] bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent sm:left-[14px]"
          style={{ bottom: "-3rem" }}
        />
      )}

      {/* ── Card ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40, x: -20 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, x: 0 }
            : { opacity: 0, y: 40, x: -20 }
        }
        transition={{
          duration: 0.6,
          delay: index * 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <GlassCard className="relative" hover>
          {/* Top accent line */}
          <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-primary via-secondary to-accent" />

          <div className="flex items-start gap-5">
            {/* Text content */}
            <div className="min-w-0 flex-1">
              {/* Degree — gradient text */}
              <h3 className="text-lg font-bold sm:text-xl">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {degree}
                </span>
              </h3>

              {/* Institution */}
              <p className="mt-1.5 text-sm font-medium text-foreground/90 sm:text-base">
                {institution}
              </p>

              {/* Duration */}
              <div className="mt-2 flex items-center gap-1.5 text-xs text-primary/70 sm:text-sm">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {duration}
              </div>
            </div>

            {/* Grade badge */}
            <GradeBadge grade={grade} />
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl">
        <SectionHeading title="Education" subtitle="Academic background" />

        {/* Education cards */}
        <div className="flex flex-col gap-12">
          {education.map((edu, idx) => (
            <EduCard
              key={edu.degree}
              degree={edu.degree}
              institution={edu.institution}
              duration={edu.duration}
              grade={edu.grade}
              index={idx}
              isLast={idx === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
