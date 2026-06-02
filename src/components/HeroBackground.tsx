"use client";

/**
 * HeroBackground – Lightweight animated background for the hero section.
 *
 * Pure CSS approach:
 *  • Cyan radial gradient blob top-right
 *  • Purple radial gradient blob bottom-left
 *  • Subtle grid pattern overlay
 *  • 20 floating dot particles with staggered CSS animations
 */

const PARTICLE_COUNT = 20;

interface FloatingDot {
  id: number;
  left: string;
  size: number;
  opacity: number;
  duration: string;
  delay: string;
  startY: string;
}

// Pre-generate floating dots so the JSX is deterministic
const dots: FloatingDot[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  left: `${5 + (i * 4.7) % 90}%`,
  size: 2 + (i % 4),
  opacity: 0.15 + (i % 5) * 0.06,
  duration: `${8 + (i % 7) * 3}s`,
  delay: `${(i * 1.3) % 10}s`,
  startY: `${80 + (i % 3) * 10}%`,
}));

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* ---- Cyan gradient blob (top-right) ---- */}
      <div
        className="absolute -top-1/4 -right-1/4 h-[700px] w-[700px] rounded-full opacity-30 blur-[120px] md:h-[900px] md:w-[900px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.4) 0%, rgba(0,229,255,0.05) 60%, transparent 80%)",
        }}
      />

      {/* ---- Purple gradient blob (bottom-left) ---- */}
      <div
        className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full opacity-25 blur-[120px] md:h-[800px] md:w-[800px]"
        style={{
          background:
            "radial-gradient(circle, rgba(123,97,255,0.4) 0%, rgba(123,97,255,0.05) 60%, transparent 80%)",
        }}
      />

      {/* ---- Accent glow center ---- */}
      <div
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,178,0.3) 0%, transparent 70%)",
        }}
      />

      {/* ---- Grid pattern overlay ---- */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ---- Floating particles ---- */}
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="absolute block rounded-full bg-primary"
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.left,
            top: dot.startY,
            opacity: dot.opacity,
            animation: `hero-float-up ${dot.duration} ${dot.delay} linear infinite`,
          }}
        />
      ))}

    </div>
  );
}
