"use client";

import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaTerminal, FaRobot, FaBrain } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import Button from "@/components/ui/Button";
import HeroBackground from "@/components/HeroBackground";

// ---------------------------------------------------------------------------
// Framer Motion helpers
// ---------------------------------------------------------------------------
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
  },
};

// Build the TypeAnimation sequence from personalInfo.roles
const typeSequence: (string | number)[] = personalInfo.roles.flatMap((role) => [
  role,
  2000,
]);

// ---------------------------------------------------------------------------
// Social link data
// ---------------------------------------------------------------------------
const socials = [
  {
    icon: <FaGithub size={18} />,
    href: personalInfo.github,
    label: "GitHub",
    color: "hover:border-[#ff007a] hover:text-[#ff007a] hover:shadow-[0_0_15px_rgba(255,0,122,0.3)]",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    href: personalInfo.linkedin,
    label: "LinkedIn",
    color: "hover:border-[#00f5ff] hover:text-[#00f5ff] hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]",
  },
  {
    icon: <FaEnvelope size={18} />,
    href: `mailto:${personalInfo.email}`,
    label: "Email",
    color: "hover:border-[#3dfa28] hover:text-[#3dfa28] hover:shadow-[0_0_15px_rgba(61,250,40,0.3)]",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#02040a]"
    >
      {/* Dynamic background layout */}
      <HeroBackground />

      {/* Decorative Grid Corners for Cockpit HUD Feel */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-[#131b31] pointer-events-none hidden md:block" />
      <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-[#131b31] pointer-events-none hidden md:block" />
      <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-[#131b31] pointer-events-none hidden md:block" />
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-[#131b31] pointer-events-none hidden md:block" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-32 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        
        {/* Status indicator pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 bg-[#060b16] border border-[#131b31] rounded-full px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest text-[#3dfa28] shadow-[0_0_15px_rgba(61,250,40,0.05)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3dfa28] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3dfa28]"></span>
          </span>
          <span>SYS_STATUS: ACTIVE // PUNE_OBS</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 max-w-4xl"
        >
          {/* Tag / Greeting */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00f5ff] bg-[#00f5ff]/5 border border-[#00f5ff]/20 px-3 py-1 rounded">
              INITIALIZE PORTFOLIO PROTOCOL
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl font-display"
          >
            <span className="text-white">HI, I&apos;M </span>
            <span className="relative inline-block">
              <span className="gradient-text-primary">{personalInfo.name}</span>
              {/* Behind-glowing drop shadow effect */}
              <span className="absolute -inset-1 -z-10 bg-gradient-to-r from-[#00f5ff] to-[#ff007a] opacity-20 blur-xl" />
            </span>
          </motion.h1>

          {/* Typing Animation HUD */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 font-mono text-base sm:text-xl md:text-2xl text-[#7f8a9e]"
          >
            <FaTerminal size={14} className="text-[#00f5ff] animate-pulse" />
            <span>EXEC:</span>
            <TypeAnimation
              sequence={typeSequence}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="text-white font-bold tracking-wide border-r border-[#00f5ff] animate-blink"
            />
          </motion.div>

          {/* Custom taglines inside visual panel */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto p-4 sm:p-5 rounded-xl border border-[#131b31] bg-[#060b16]/50 backdrop-blur-md relative"
          >
            {/* Top-right corner tech indicator */}
            <div className="absolute top-1.5 right-2 font-mono text-[8px] text-[#7f8a9e]">
              [ HUD_V.2.5 ]
            </div>
            
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-[#7f8a9e]">
              &ldquo;{personalInfo.tagline}&rdquo;
            </p>
          </motion.div>

          {/* CTA Buttons Layout */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Button 
              variant="primary" 
              size="md" 
              href="#projects" 
              className="group/btn relative px-8 py-3 overflow-hidden shadow-[0_0_20px_rgba(0,245,255,0.2)] hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]"
            >
              <span>EXPLORE PROJECTS</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="md" 
              href="/resume" 
              className="border-2 border-[#131b31] hover:border-[#ff007a] hover:text-[#ff007a] hover:bg-[#ff007a]/5"
            >
              DIGITAL RESUME
            </Button>
            
            <Button 
              variant="secondary" 
              size="md" 
              href="#contact" 
              className="shadow-[0_0_20px_rgba(255,0,122,0.15)] hover:shadow-[0_0_30px_rgba(255,0,122,0.3)]"
            >
              CONTACT DIRECT
            </Button>
          </motion.div>

          {/* Social connections */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 pt-6"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className={`group flex h-10 w-10 items-center justify-center rounded-xl border border-[#131b31] bg-[#060b16] text-[#7f8a9e] transition-all duration-300 ${s.color}`}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Futuristic animated pulsing HUD ring behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full border border-[#131b31]/40 animate-spin-slow pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00f5ff] shadow-[0_0_8px_#00f5ff]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ff007a] shadow-[0_0_8px_#ff007a]" />
      </div>

      {/* Bouncing scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#about"
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1.5 text-muted/60 transition-colors duration-300 hover:text-[#00f5ff]"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </motion.svg>
        </a>
      </motion.div>
    </section>
  );
}
