"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

function AnimatedNumber({
  value,
  duration,
  isInView,
}: {
  value: number;
  duration: number;
  isInView: boolean;
}) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [isInView, motionValue, value, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -inset-4 rounded-full bg-primary/5 blur-2xl" />

      {/* Number */}
      <span className="relative bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold tabular-nums text-transparent sm:text-5xl md:text-6xl">
        <AnimatedNumber value={value} duration={duration} isInView={isInView} />
        {suffix && <span>{suffix}</span>}
      </span>

      {/* Label */}
      <span className="relative mt-2 text-sm font-medium tracking-wide text-muted sm:text-base">
        {label}
      </span>
    </motion.div>
  );
}
