"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { experiences } from "@/lib/data";

// ─── Timeline entry ───────────────────────────────────────────────────────────
interface TimelineEntryProps {
  company: string;
  location: string;
  role: string;
  duration: string;
  responsibilities: string[];
  index: number;
  isEven: boolean;
}

function TimelineEntry({
  company,
  location,
  role,
  duration,
  responsibilities,
  index,
  isEven,
}: TimelineEntryProps) {
  const entryRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(entryRef, { once: true, margin: "-60px" });

  return (
    <div
      ref={entryRef}
      className={`relative flex w-full items-start gap-6 md:gap-0 ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* ── Card side ──────────────────────────────────────────── */}
      <motion.div
        initial={{
          opacity: 0,
          x: isEven ? 60 : -60,
        }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: isEven ? 60 : -60 }
        }
        transition={{
          duration: 0.7,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full pl-10 md:w-[calc(50%-2rem)] md:pl-0"
      >
        <GlassCard className="group relative" hover>
          {/* Top accent line */}
          <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-primary via-secondary to-transparent" />

          {/* Company */}
          <h3 className="text-lg font-bold text-foreground sm:text-xl">
            {company}
          </h3>

          {/* Role */}
          <p className="mt-1 text-sm font-semibold text-primary sm:text-base">
            {role}
          </p>

          {/* Duration & Location */}
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted sm:text-sm">
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 text-primary/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              {duration}
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 text-primary/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <circle cx="12" cy="11" r="3" />
              </svg>
              {location}
            </span>
          </div>

          {/* Responsibilities */}
          <ul className="mt-4 space-y-2 border-l-2 border-primary/20 pl-4">
            {responsibilities.map((resp) => (
              <li
                key={resp}
                className="text-xs leading-relaxed text-muted/90 sm:text-sm"
              >
                {resp}
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>

      {/* ── Timeline dot (center) ──────────────────────────────── */}
      <div className="absolute left-0 top-6 z-20 md:left-1/2 md:-translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.15,
            type: "spring",
            stiffness: 300,
          }}
          className="relative"
        >
          {/* Glow ring */}
          <div className="absolute -inset-2 rounded-full bg-primary/20 blur-md" />
          {/* Dot */}
          <div className="relative h-4 w-4 rounded-full border-2 border-primary bg-background shadow-[0_0_12px_rgba(0,229,255,0.5)]" />
        </motion.div>
      </div>

      {/* ── Spacer for the opposite side (desktop) ─────────────── */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey"
        />

        {/* Timeline container */}
        <div className="relative">
          {/* ── Vertical timeline line ───────────────────────────── */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] md:left-1/2 md:-translate-x-[1px]">
            {/* Static background line */}
            <div className="h-full w-full bg-white/[0.06]" />

            {/* Animated gradient fill */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-primary via-secondary to-primary"
            />
          </div>

          {/* ── Timeline entries ─────────────────────────────────── */}
          <div className="relative flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <TimelineEntry
                key={exp.company + exp.duration}
                company={exp.company}
                location={exp.location}
                role={exp.role}
                duration={exp.duration}
                responsibilities={exp.responsibilities}
                index={idx}
                isEven={idx % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
