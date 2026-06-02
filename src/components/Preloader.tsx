"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const animFrameRef = useRef<number>(0);
  const completedRef = useRef(false);

  // Custom diagnostic logs tailored perfectly to Samarth's background!
  const diagnosticLogs = [
    "// SYSTEM INITIALIZATION START...",
    "SYS_BOOT // Loading ML kernels...",
    "SYS_LOAD // Indexing: Python, SQL, Dart, JS",
    "SYS_LOAD // Mapped database: SPPU Savitribai Phule",
    "SYS_LOAD // Academic Index: Diploma CS (82.15%)",
    "SYS_LOAD // Core modules: Feature Engineering",
    "SYS_LOAD // ML modules: Classification Models",
    "SYS_LOAD // Fetching: Credit Card Fraud system",
    "SYS_BOOT // Activating: 3D Car Showcase engine",
    "SYS_BOOT // Connecting to Pune Obs Node...",
    "SYS_BOOT // SECURE CONNECTION STABLE.",
    "SYS_BOOT // Calibration complete.",
    "// BOOT SEQUENCE FINISHED. STARTING HUD...",
  ];

  const handleComplete = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    cancelAnimationFrame(animFrameRef.current);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // ---- GSAP Timeline for Loader ----
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      onComplete: handleComplete,
    });

    const progressObj = { value: 0 };

    // Tween the progress counter from 0 to 100
    tl.to(progressObj, {
      value: 100,
      duration: 3.8,
      ease: "power2.inOut",
      onUpdate: () => {
        const val = Math.floor(progressObj.value);
        setProgress(val);
        
        // Dynamically add logs based on progress steps
        const logIndex = Math.floor((val / 100) * diagnosticLogs.length);
        if (logIndex > 0) {
          setLogs(diagnosticLogs.slice(0, logIndex));
        }
      },
    })
    // Glitch hold at 100%
    .to({}, { duration: 0.5 })
    // Fade out preloader screen
    .to(container, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    // ---- Canvas HUD Graphic Drawing ----
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let rotationAngle = 0;

    const drawHUD = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;

      // Draw subtle background matrix coordinates grid
      ctx.strokeStyle = "rgba(19, 27, 49, 0.25)";
      ctx.lineWidth = 1;
      
      // Vertical grid lines
      for (let x = 0; x < w; x += 80) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      // Horizontal grid lines
      for (let y = 0; y < h; y += 80) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw Rotating Outer Compass Ring (Neon Cyan)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotationAngle);
      ctx.beginPath();
      ctx.arc(0, 0, 140, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 245, 255, 0.15)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw compass ticks
      ctx.strokeStyle = "rgba(0, 245, 255, 0.4)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 360; i += 30) {
        const rad = (i * Math.PI) / 180;
        ctx.beginPath();
        ctx.moveTo(Math.cos(rad) * 135, Math.sin(rad) * 135);
        ctx.lineTo(Math.cos(rad) * 145, Math.sin(rad) * 145);
        ctx.stroke();
      }
      ctx.restore();

      // Draw Rotating Counter Ring (Cyber Magenta)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-rotationAngle * 1.5);
      ctx.beginPath();
      ctx.arc(0, 0, 160, 0, Math.PI * 1.5);
      ctx.strokeStyle = "rgba(255, 0, 122, 0.25)";
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw sub brackets on ring
      ctx.strokeStyle = "rgba(255, 0, 122, 0.6)";
      ctx.beginPath();
      ctx.arc(0, 0, 165, -0.1, 0.1);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, 165, Math.PI - 0.1, Math.PI + 0.1);
      ctx.stroke();
      ctx.restore();

      // Pulse Central Scanning Core (Laser Target)
      const scale = 1 + Math.sin(rotationAngle * 10) * 0.03;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);
      
      // Target Brackets
      ctx.strokeStyle = "rgba(61, 250, 40, 0.35)"; // Accent green
      ctx.lineWidth = 1.5;
      
      // Top-Left bracket
      ctx.beginPath();
      ctx.moveTo(-100, -60);
      ctx.lineTo(-100, -100);
      ctx.lineTo(-60, -100);
      ctx.stroke();

      // Top-Right bracket
      ctx.beginPath();
      ctx.moveTo(60, -100);
      ctx.lineTo(100, -100);
      ctx.lineTo(100, -60);
      ctx.stroke();

      // Bottom-Left bracket
      ctx.beginPath();
      ctx.moveTo(-100, 60);
      ctx.lineTo(-100, 100);
      ctx.lineTo(-60, 100);
      ctx.stroke();

      // Bottom-Right bracket
      ctx.beginPath();
      ctx.moveTo(60, 100);
      ctx.lineTo(100, 100);
      ctx.lineTo(100, 60);
      ctx.stroke();

      ctx.restore();

      // Update rotation speed
      rotationAngle += 0.008;
      animFrameRef.current = requestAnimationFrame(drawHUD);
    };

    animFrameRef.current = requestAnimationFrame(drawHUD);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      tl.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [handleComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#02040a] p-8 md:p-12 select-none overflow-hidden"
    >
      {/* HUD canvas elements */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* TOP HUD ROW - Coordinates & Status indicators */}
      <div className="relative z-10 w-full flex items-center justify-between border-b border-[#131b31] pb-4 font-mono text-[9px] sm:text-xs text-[#7f8a9e]">
        <div className="flex items-center gap-4">
          <span className="text-[#00f5ff] font-bold">SYS_BOOT_REVISION: v4.81</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline">PUNE_OBS_STATION // GRID_ACTIVE</span>
        </div>
        <div className="flex items-center gap-2 text-[#ff007a]">
          <span className="animate-pulse">●</span> SECURE INTERACTIVE CONSOLE
        </div>
      </div>

      {/* CENTER HUD ROW - Vector Glitch Logo & Calibrator */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow py-8 text-center">
        
        {/* Giant Cyber Glitching initials */}
        <div className="relative mb-6">
          {/* Cyan Glow outline */}
          <span className="absolute inset-0 text-7xl sm:text-8xl md:text-9xl font-black font-display tracking-widest text-[#00f5ff]/20 select-none pointer-events-none blur-md">
            SC
          </span>
          {/* Main Logo text */}
          <span className="text-7xl sm:text-8xl md:text-9xl font-black font-display tracking-widest bg-gradient-to-br from-[#00f5ff] via-[#ff007a] to-[#3dfa28] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,122,0.25)] select-none">
            SC
          </span>
        </div>

        {/* Loading percentage status */}
        <div className="space-y-2 max-w-xs w-full">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[#00f5ff]">
            <span>LOADING PORTFOLIO...</span>
            <span className="font-bold">{progress}%</span>
          </div>
          
          {/* Technical cyber loading bar */}
          <div className="w-full h-1 bg-[#131b31] rounded-full overflow-hidden p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-[#00f5ff] to-[#ff007a] rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM HUD ROW - Live Rolling Tech Console Log */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-[#131b31] pt-6 font-mono">
        
        {/* Diagnostics Log Column */}
        <div className="md:col-span-3 h-28 overflow-hidden text-left flex flex-col justify-end text-[9px] sm:text-xs text-[#3dfa28]/80 leading-relaxed font-mono">
          <div className="space-y-0.5">
            {logs.slice(-5).map((log, idx) => (
              <div key={idx} className="truncate">
                <span className="text-[#ff007a]/70 font-semibold mr-1.5">&gt;&gt;</span>
                {log}
              </div>
            ))}
            <div className="animate-pulse inline-block text-white">&gt;&gt; _</div>
          </div>
        </div>

        {/* Calibrator / Skip Row */}
        <div className="flex flex-col justify-between items-end gap-4">
          <div className="text-right text-[9px] sm:text-xs text-[#7f8a9e]">
            <p>[ MEM_ADDR: 0x7FFF00F2 ]</p>
            <p>[ OBS_COORD: 18.52° N ]</p>
          </div>
          
          <button
            ref={skipRef}
            onClick={handleComplete}
            className="cursor-pointer border border-[#131b31] bg-[#060b16] hover:bg-[#ff007a]/10 hover:border-[#ff007a] hover:text-[#ff007a] px-5 py-2 text-xs font-mono tracking-widest uppercase rounded-lg text-[#7f8a9e] transition-all duration-300 shadow-[0_0_15px_rgba(255,0,122,0.02)]"
          >
            Skip Intro &gt;&gt;
          </button>
        </div>

      </div>
    </div>
  );
}
