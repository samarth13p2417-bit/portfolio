"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";
import { certifications, Certification } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function Certifications() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-background">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 right-1/4 -z-10 h-64 w-64 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Professional Certifications"
          subtitle="Verifiable credentials earned from online education platforms and engineering organizations."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12"
        >
          {certifications.map((cert: Certification, idx: number) => (
            <motion.div key={idx} variants={cardVariants}>
              <GlassCard
                className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-[0_0_20px_rgba(0,255,178,0.08)] transition-all duration-300"
                hover={true}
              >
                <div className="flex items-start gap-4 flex-grow">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(0,255,178,0.1)]">
                    <FaCertificate size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-white mb-1 group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-primary font-medium tracking-wide mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <FaCalendarAlt size={11} className="text-secondary" />
                      <span>Issued: {cert.date}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-auto mt-2 sm:mt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    href={cert.link}
                    className="w-full sm:w-auto text-xs py-2 px-4 flex items-center justify-center gap-1.5"
                  >
                    View <FaExternalLinkAlt size={10} />
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
