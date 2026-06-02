"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFolder, FaStar, FaUsers, FaArrowRight, FaCodeBranch } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

interface GitHubUser {
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export default function GitHub() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/samarth13p2417-bit");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setUserData({
          avatar_url: data.avatar_url,
          name: data.name || "Samarth Choudhary",
          bio: data.bio || "B.Tech Data Science Student | Machine Learning Enthusiast",
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        });
      } catch (err) {
        console.error("Error fetching GitHub profile:", err);
        setError(true);
        // Fallback placeholder data if API rate limits or offline
        setUserData({
          avatar_url: "https://avatars.githubusercontent.com/u/121210174?v=4", // placeholder
          name: "Samarth Choudhary",
          bio: "B.Tech Data Science Student | Machine Learning Enthusiast | AI Developer",
          public_repos: 12,
          followers: 5,
          following: 8,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="section-padding relative overflow-hidden bg-background">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/3 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="GitHub Contributions"
          subtitle="A real-time snapshot of my active open-source activity, projects, and programming commits."
        />

        <div className="max-w-4xl mx-auto mt-12">
          {loading ? (
            // Loading skeleton animation
            <GlassCard className="p-8 animate-pulse border-white/5 bg-white/5">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="h-24 w-24 rounded-full bg-white/10" />
                <div className="flex-1 space-y-3">
                  <div className="h-6 w-48 bg-white/10 rounded" />
                  <div className="h-4 w-full bg-white/10 rounded" />
                  <div className="h-4 w-2/3 bg-white/10 rounded" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="h-16 bg-white/10 rounded-xl" />
                <div className="h-16 bg-white/10 rounded-xl" />
                <div className="h-16 bg-white/10 rounded-xl" />
              </div>
            </GlassCard>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Profile Overview Card */}
              <GlassCard className="p-6 md:p-8 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {/* Avatar */}
                  <div className="relative group">
                    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-75 blur-sm group-hover:opacity-100 transition duration-300" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={userData?.avatar_url}
                      alt={userData?.name}
                      className="relative h-24 w-24 rounded-full border border-white/10 object-cover shadow-2xl"
                    />
                  </div>

                  {/* Profile info */}
                  <div className="flex-grow text-center md:text-left space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold font-display text-white">
                          {userData?.name}
                        </h3>
                        <p className="text-sm font-mono text-primary">
                          @samarth13p2417-bit
                        </p>
                      </div>
                      <div>
                        <Button
                          variant="outline"
                          size="sm"
                          href={personalInfo.github}
                          className="text-xs flex items-center justify-center gap-2 group/btn"
                        >
                          <FaGithub size={14} /> Follow on GitHub <FaArrowRight size={10} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-muted leading-relaxed max-w-xl">
                      {userData?.bio}
                    </p>
                  </div>
                </div>

                {/* Profile Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex justify-center text-primary mb-1">
                      <FaFolder size={18} />
                    </div>
                    <div className="text-xl font-bold text-white font-display">
                      {userData?.public_repos}
                    </div>
                    <div className="text-xs text-muted">Repositories</div>
                  </div>

                  <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex justify-center text-secondary mb-1">
                      <FaUsers size={18} />
                    </div>
                    <div className="text-xl font-bold text-white font-display">
                      {userData?.followers}
                    </div>
                    <div className="text-xs text-muted">Followers</div>
                  </div>

                  <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex justify-center text-accent mb-1">
                      <FaCodeBranch size={16} />
                    </div>
                    <div className="text-xl font-bold text-white font-display">
                      {userData?.following}
                    </div>
                    <div className="text-xs text-muted">Following</div>
                  </div>
                </div>
              </GlassCard>

              {/* Contribution Heatmap Card */}
              <GlassCard className="p-6 overflow-hidden">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted font-mono mb-4 flex items-center gap-2">
                  <FaGithub className="text-primary animate-pulse" /> Weekly Contribution History
                </h4>
                
                <div className="w-full overflow-x-auto flex justify-center py-2 relative scrollbar-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://ghchart.rshah.org/00E5FF/samarth13p2417-bit"
                    alt="Samarth Choudhary's GitHub Contribution Chart"
                    className="min-w-[650px] max-w-full rounded-md opacity-85 hover:opacity-100 transition-opacity duration-300 contrast-125 select-none"
                    onError={(e) => {
                      // hide chart image if fetch fails or rate limits
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted font-mono mt-4 pt-4 border-t border-white/5">
                  <span>Less Active</span>
                  <div className="flex gap-1">
                    <span className="w-3 h-3 bg-white/5 rounded-sm" />
                    <span className="w-3 h-3 bg-primary/20 rounded-sm" />
                    <span className="w-3 h-3 bg-primary/45 rounded-sm" />
                    <span className="w-3 h-3 bg-primary/70 rounded-sm" />
                    <span className="w-3 h-3 bg-primary rounded-sm" />
                  </div>
                  <span>More Active</span>
                </div>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
