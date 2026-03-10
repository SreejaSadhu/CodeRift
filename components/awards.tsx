"use client";
import React from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export default function Awards() {
  const awards = [
    {
      rank: "1ST",
      title: "CTRL Award",
      description: "Best Fundamentals",
      colors: [[193, 45, 40]], // #c12d28
    },
    {
      rank: "2ND",
      title: "ALT Award",
      description: "Most Creative Concept",
      colors: [[193, 45, 40]], // #c12d28
    },
    {
      rank: "3RD",
      title: "CREATE Award",
      description: "Best Final App / Prototype",
      colors: [[193, 45, 40]], // #c12d28
    },
  ];

  return (
    <section id="awards" className="relative py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-4xl sm:text-5xl font-bold text-white neon-text">
          AWARDS & RECOGNITION
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl border border-[#c12d28]/30 bg-[#0a0a0a] p-8 transition-all duration-300 hover:border-[#c12d28]/60 neon-border group h-[300px] flex flex-col justify-center items-center text-center"
            >
              {/* Effect Layer - Always visible now, relying on the effect's internal animation */}
              <div className="absolute inset-0 z-0 opacity-100">
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-black"
                  colors={award.colors}
                  dotSize={3}
                  showGradient={false} 
                  opacities={[0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1, 1, 1, 1]}
                />
              </div>
              
              {/* Radial gradient for easier text reading */}
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 pointer-events-none" />

              <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <p className="mb-4 text-sm font-mono uppercase tracking-[0.2em] text-[#c12d28] font-bold">
                  {award.rank} Place
                </p>
                <h3 className="mb-3 text-3xl font-bold text-white tracking-tight">
                  {award.title}
                </h3>
                <p className="text-white/80 font-light leading-relaxed max-w-[200px] mx-auto">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
