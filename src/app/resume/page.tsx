"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaBriefcase, FaGraduationCap, FaCogs, FaTrophy, FaCertificate } from "react-icons/fa";
import { personalInfo, experiences, education, skillCategories, achievements, certifications } from "@/lib/data";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden print:bg-white print:text-black print:py-0 print:px-0">
      {/* Decorative background glows - hidden on print */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none print:hidden" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none print:hidden" />

      {/* Main Wrapper */}
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation / Actions Bar - hidden on print */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 print:hidden">
          <Button
            variant="ghost"
            size="sm"
            href="/"
            className="flex items-center gap-2 group/btn border border-white/5 bg-white/5 hover:bg-white/10"
          >
            <FaArrowLeft size={12} className="group-hover/btn:-translate-x-1 transition-transform duration-200" /> Back to Portfolio
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={handlePrint}
            className="flex items-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
          >
            <FaDownload size={12} /> Save / Print PDF
          </Button>
        </div>

        {/* Paper Resume Container */}
        <GlassCard 
          className="p-8 md:p-12 border-white/10 bg-[#070b1e]/90 shadow-2xl relative overflow-hidden print:bg-white print:text-black print:border-none print:shadow-none print:p-0 print:m-0"
          hover={false}
        >
          {/* Print instructions - hidden on print */}
          <div className="absolute top-4 right-4 bg-primary/10 border border-primary/20 rounded-lg px-3 py-1 text-xs text-primary font-mono select-none animate-pulse print:hidden">
            Interactive Digital Version
          </div>

          {/* Resume Header */}
          <div className="border-b border-white/10 pb-8 mb-8 print:border-black/10">
            <div className="text-center sm:text-left space-y-3">
              <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent print:from-black print:to-black print:text-black print:bg-none">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl md:text-2xl font-bold font-mono text-primary print:text-black">
                {personalInfo.title}
              </h2>
              
              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-4 text-sm text-muted print:text-black">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center sm:justify-start gap-2 hover:text-primary transition-colors print:pointer-events-none">
                  <FaEnvelope className="text-primary print:text-black" />
                  <span>{personalInfo.email}</span>
                </a>
                <a href={`tel:${personalInfo.phone}`} className="flex items-center justify-center sm:justify-start gap-2 hover:text-primary transition-colors print:pointer-events-none">
                  <FaPhone className="text-secondary print:text-black" />
                  <span>{personalInfo.phone}</span>
                </a>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <FaMapMarkerAlt className="text-accent print:text-black" />
                  <span>{personalInfo.location}</span>
                </div>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-2 hover:text-primary transition-colors print:pointer-events-none">
                  <FaLinkedinIn className="text-primary print:text-black" />
                  <span className="truncate">linkedin.com/in/samarth-choudhary...</span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-2 hover:text-primary transition-colors print:pointer-events-none">
                  <FaGithub className="text-secondary print:text-black" />
                  <span>github.com/samarth13p2417-bit</span>
                </a>
              </div>
            </div>
          </div>

          {/* Resume Body */}
          <div className="space-y-8">
            
            {/* Summary */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold font-display text-white uppercase tracking-wider border-l-4 border-primary pl-3 flex items-center gap-2 print:text-black print:border-black">
                Professional Summary
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed print:text-black">
                {personalInfo.summary}
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-display text-white uppercase tracking-wider border-l-4 border-primary pl-3 flex items-center gap-2 print:text-black print:border-black">
                <FaBriefcase size={16} /> Professional Experience
              </h3>
              
              {experiences.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-base font-bold text-white print:text-black">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-primary font-semibold print:text-black">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right sm:text-right">
                      <p className="text-sm font-mono text-muted print:text-black">
                        {exp.duration}
                      </p>
                      <p className="text-xs text-muted/80 print:text-black">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc list-outside pl-5 text-sm text-muted space-y-1.5 print:text-black">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-display text-white uppercase tracking-wider border-l-4 border-primary pl-3 flex items-center gap-2 print:text-black print:border-black">
                Featured Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-1">
                {/* project list */}
                <div className="space-y-4">
                  <div className="border border-white/5 bg-white/[0.02] p-4 rounded-xl print:border-black/10 print:bg-transparent">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-base font-bold text-white print:text-black">Credit Card Fraud Detection</h4>
                      <span className="text-xs font-mono text-primary font-semibold">2026</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed print:text-black">
                      Machine Learning based fraud detection platform using multiple classification models with real-time prediction and analytics dashboard.
                    </p>
                    <p className="text-[10px] font-mono text-accent mt-2 print:text-black">
                      Python • Flask • Pandas • Scikit-Learn
                    </p>
                  </div>

                  <div className="border border-white/5 bg-white/[0.02] p-4 rounded-xl print:border-black/10 print:bg-transparent">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-base font-bold text-white print:text-black">School Management System</h4>
                      <span className="text-xs font-mono text-primary font-semibold">2025</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed print:text-black">
                      Complete digital school administration platform with attendance, academics, and reporting modules.
                    </p>
                    <p className="text-[10px] font-mono text-accent mt-2 print:text-black">
                      Python • Flask • SQL • HTML/CSS • JavaScript
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-white/5 bg-white/[0.02] p-4 rounded-xl print:border-black/10 print:bg-transparent">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-base font-bold text-white print:text-black">Customer Churn Prediction</h4>
                      <span className="text-xs font-mono text-primary font-semibold">2025</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed print:text-black">
                      Predict customer retention and identify churn risks using advanced machine learning models and business analytics.
                    </p>
                    <p className="text-[10px] font-mono text-accent mt-2 print:text-black">
                      Python • Machine Learning • Pandas • Scikit-Learn
                    </p>
                  </div>

                  <div className="border border-white/5 bg-white/[0.02] p-4 rounded-xl print:border-black/10 print:bg-transparent">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-base font-bold text-white print:text-black">3D Car Showroom Showcase</h4>
                      <span className="text-xs font-mono text-primary font-semibold">2024</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed print:text-black">
                      Interactive vehicle showcase platform with modern UI and immersive 3D browsing experiences.
                    </p>
                    <p className="text-[10px] font-mono text-accent mt-2 print:text-black">
                      JavaScript • Three.js • 3D Modeling • HTML/CSS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-display text-white uppercase tracking-wider border-l-4 border-primary pl-3 flex items-center gap-2 print:text-black print:border-black">
                <FaCogs size={16} /> Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {skillCategories.map((category, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <h4 className="text-sm font-bold text-primary print:text-black">
                      {category.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed print:text-black">
                      {category.skills.map(s => s.name).join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Two Column Layout for Education & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 print:grid-cols-1">
              
              {/* Education */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-display text-white uppercase tracking-wider border-l-4 border-primary pl-3 flex items-center gap-2 print:text-black print:border-black">
                  <FaGraduationCap size={18} /> Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <div key={idx} className="border-l border-white/10 pl-3 space-y-1 print:border-black/20">
                      <h4 className="text-sm font-bold text-white print:text-black">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-primary font-semibold print:text-black">
                        {edu.institution}
                      </p>
                      <div className="flex justify-between items-center text-[11px] text-muted print:text-black">
                        <span>{edu.duration}</span>
                        <span className="font-mono bg-white/5 border border-white/5 px-2 py-0.5 rounded text-[10px] print:bg-transparent print:border-none print:p-0">Score: {edu.grade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Achievements */}
              <div className="space-y-6">
                
                {/* Certifications */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-display text-white uppercase tracking-wider border-l-4 border-primary pl-3 flex items-center gap-2 print:text-black print:border-black">
                    <FaCertificate size={16} /> Certifications
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {certifications.slice(0, 3).map((cert, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs text-muted print:text-black">
                        <span className="font-semibold text-white/95 truncate max-w-[200px] print:text-black">{cert.title}</span>
                        <span className="text-[10px] font-mono shrink-0">{cert.issuer} ({cert.date})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-display text-white uppercase tracking-wider border-l-4 border-primary pl-3 flex items-center gap-2 print:text-black print:border-black">
                    <FaTrophy size={16} /> Key Achievements
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {achievements.slice(0, 3).map((ach, idx) => (
                      <div key={idx} className="text-xs text-muted leading-relaxed print:text-black">
                        <span className="font-semibold text-white/95 print:text-black">🏆 {ach.title}</span> – {ach.description}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </GlassCard>
      </div>
    </div>
  );
}
