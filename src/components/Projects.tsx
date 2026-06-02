"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaCode } from "react-icons/fa";
import { projects, Project, personalInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-background">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 -z-10 h-72 w-72 rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of data analytics, machine learning models, and modern web applications."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mt-12"
        >
          {projects.map((project: Project, idx: number) => {
            const isExpanded = expandedId === project.id;

            // Generate premium gradient for each project card header
            const gradients = [
              "from-[#00E5FF]/20 to-[#7B61FF]/10 border-b border-[#00E5FF]/20",
              "from-[#7B61FF]/20 to-[#00FFB2]/10 border-b border-[#7B61FF]/20",
              "from-[#00FFB2]/20 to-[#00E5FF]/10 border-b border-[#00FFB2]/20",
              "from-[#00E5FF]/20 to-[#7B61FF]/20 border-b border-[#00E5FF]/20",
            ];
            const headerGradient = gradients[idx % gradients.length];

            return (
              <motion.div key={project.id} variants={cardVariants} className="h-full">
                <GlassCard
                  className="flex flex-col h-full overflow-hidden transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]"
                  hover={true}
                >
                  {/* Card Header/Banner */}
                  <div className={`h-40 relative flex items-center justify-center bg-gradient-to-br ${headerGradient} overflow-hidden`}>
                    {/* Animated background lines */}
                    <div className="absolute inset-0 bg-grid opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                    
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-xs font-semibold text-accent tracking-wider">
                      {project.year}
                    </div>

                    <div className="flex flex-col items-center justify-center text-center p-4">
                      <div className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                        <FaCode size={24} />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-widest text-muted mt-2">
                        PROJECT 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-muted mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono bg-white/5 border border-white/10 text-white/80 px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      {/* Features Toggle */}
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-accent/80 hover:text-accent transition-colors duration-200 mb-4"
                      >
                        {isExpanded ? (
                          <>
                            Hide Features <FaChevronUp size={10} />
                          </>
                        ) : (
                          <>
                            Key Features <FaChevronDown size={10} />
                          </>
                        )}
                      </button>

                      {/* Expanded Features List */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-2 border-l border-primary/30 pl-4 py-1 mb-6 text-sm text-muted">
                              {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Actions */}
                      <div className="flex items-center gap-4">
                        <Button
                          variant="primary"
                          size="sm"
                          href={project.demo}
                          className="flex-1 justify-center py-2"
                        >
                          <FaExternalLinkAlt className="mr-2" size={12} /> Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          href={project.github === "#" ? personalInfo.github : project.github}
                          className="flex-1 justify-center py-2"
                        >
                          <FaGithub className="mr-2" size={14} /> Repository
                        </Button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
