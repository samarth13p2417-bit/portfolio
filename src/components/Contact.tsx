"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Construct mailto link
    const subjectLine = encodeURIComponent(`[Portfolio Contact] ${formState.subject}`);
    const bodyText = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    
    const mailtoLink = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyText}`;
    
    // Trigger client default mail client
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // Clear success notification
      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  const infoItems = [
    {
      icon: <FaEnvelope className="text-primary" size={18} />,
      label: "Email Address",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FaPhone className="text-secondary" size={18} />,
      label: "Phone Number",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: <FaMapMarkerAlt className="text-accent" size={18} />,
      label: "Current Location",
      value: personalInfo.location,
      href: "https://maps.google.com/?q=Pune,Maharashtra,India",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={18} />,
      href: personalInfo.github,
      label: "GitHub Profile",
      colorClass: "hover:text-primary hover:border-primary/45 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      href: personalInfo.linkedin,
      label: "LinkedIn Profile",
      colorClass: "hover:text-secondary hover:border-secondary/45 hover:shadow-[0_0_15px_rgba(123,97,255,0.3)]",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-background">
      {/* Decorative Blur Gradients */}
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 h-80 w-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's build something intelligent. Reach out for collaborations, job openings, or freelancing."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto mt-12 items-stretch">
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Let's discuss your next project
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed mb-6">
                Have a challenging data engineering problem, need machine learning insights, or looking for a responsive full-stack developer? Drop a message, and I'll get back to you shortly.
              </p>

              <div className="space-y-4">
                {infoItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block group"
                  >
                    <GlassCard className="p-4 flex items-center gap-4 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/15">
                      <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <span className="block text-xs font-mono uppercase tracking-wider text-muted">
                          {item.label}
                        </span>
                        <span className="block text-sm md:text-base font-semibold text-white/90 group-hover:text-primary transition-colors duration-200">
                          {item.value}
                        </span>
                      </div>
                    </GlassCard>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Grid */}
            <div className="space-y-4">
              <span className="block text-xs font-mono uppercase tracking-widest text-muted">
                Connect on Social Networks
              </span>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="block"
                  >
                    <div className={`h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300 ${social.colorClass}`}>
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-center border-white/10 bg-white/5 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-muted uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Samarth Choudhary"
                      className="w-full bg-[#0a0f1e]/80 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-muted uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="name@domain.com"
                      className="w-full bg-[#0a0f1e]/80 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-muted uppercase tracking-wider">
                    Subject Line
                  </label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-[#0a0f1e]/80 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 transition-all outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-muted uppercase tracking-wider">
                    Detailed Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Hello Samarth, I would like to discuss..."
                    className="w-full bg-[#0a0f1e]/80 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 transition-all outline-none resize-none"
                  />
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={submitting}
                  className="w-full justify-center py-3 text-sm font-semibold tracking-wider uppercase flex items-center gap-2 group/btn"
                >
                  {submitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
                    </>
                  )}
                </Button>

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-accent/15 border border-accent/30 text-accent rounded-xl text-center text-xs font-medium"
                  >
                    Successfully drafted! Opening mail app to complete send.
                  </motion.div>
                )}
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
