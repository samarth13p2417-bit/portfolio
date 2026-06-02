"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaTrophy, FaAward, FaUsers, FaMicrochip, FaBookOpen, FaCode } from "react-icons/fa";
import { achievements, Achievement } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

// Map string icon names to React Icons
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "trophy":
      return <FaTrophy className="text-amber-400" size={22} />;
    case "award":
      return <FaAward className="text-secondary" size={22} />;
    case "users":
      return <FaUsers className="text-primary" size={22} />;
    case "cpu":
      return <FaMicrochip className="text-accent" size={22} />;
    case "book":
      return <FaBookOpen className="text-indigo-400" size={22} />;
    case "code":
      return <FaCode className="text-emerald-400" size={22} />;
    default:
      return <FaAward className="text-primary" size={22} />;
  }
};

export default function Achievements() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="achievements" className="section-padding relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Achievements & Activities"
          subtitle="Milestones, leadership accomplishments, technical contributions, and competitive awards."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12"
        >
          {achievements.map((item: Achievement, idx: number) => (
            <motion.div key={idx} variants={cardVariants}>
              <GlassCard
                className="p-6 h-full flex flex-col justify-start relative group hover:shadow-[0_0_25px_rgba(123,97,255,0.12)] transition-all duration-300 border-white/5 hover:border-white/15"
                hover={true}
              >
                {/* Header Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle border corner decoration */}
                <span className="absolute bottom-0 right-0 h-4 w-4 rounded-br-2xl border-b border-r border-transparent group-hover:border-primary/40 transition-colors duration-300" />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
