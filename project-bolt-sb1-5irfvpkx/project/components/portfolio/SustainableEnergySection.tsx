'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function SustainableEnergySection() {
  const titleText = "Chasing a Sustainable Energy Future";
  const words = titleText.split(" ");

  // Motion values for free-roaming drag
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Dynamically stretch string length based on distance pulled from center
  const stringLength = useTransform([x, y], ([latestX, latestY]: number[]) => {
    const distance = Math.sqrt(latestX * latestX + latestY * latestY);
    return Math.max(80, 100 + distance * 0.4);
  });

  // Dynamically tilt string angle when pulled sideways
  const stringAngle = useTransform([x, y], ([latestX, latestY]: number[]) => {
    return (Math.atan2(latestX, -latestY) * 180) / Math.PI;
  });

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden pt-12 pb-16">
      
      {/* Soft Burgundy & Wine Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#6B2D34]/25 rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-20">
        
        {/* Left Column: Title & Content */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#5A1A22]/50 text-[#803941] text-xs font-bold tracking-widest uppercase border border-[#803941]/50 shadow-[0_0_20px_rgba(128,57,65,0.3)]"
          >
            Global Vision • Sustainability
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight flex flex-wrap gap-x-3 gap-y-2">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="inline-block bg-gradient-to-r from-[#6B2D34] via-[#803941] to-[#a24853] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(107,45,52,0.6)]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-neutral-300 leading-relaxed text-base font-light"
          >
            Passionate about global sustainability, renewable energy solutions, and climate action. Preparing for platforms like Model United Nations (MUN) to advocate for green policies, while exploring technology and science to help build a cleaner, energy-secure tomorrow.
          </motion.p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-4 py-2 rounded-xl bg-[#0f0305] border border-[#803941]/40 text-xs text-[#a24853] font-semibold shadow-lg shadow-black/80 backdrop-blur-md">
              Sustainable Energy
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0f0305] border border-[#803941]/40 text-xs text-[#a24853] font-semibold shadow-lg shadow-black/80 backdrop-blur-md">
              Model United Nations (MUN)
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0f0305] border border-[#803941]/40 text-xs text-[#a24853] font-semibold shadow-lg shadow-black/80 backdrop-blur-md">
              Climate Action & Policy
            </span>
          </div>
        </div>

        {/* Right Column: Unified Lanyard & Card Container */}
        <div className="flex justify-center items-center relative min-h-[500px]">

          {/* Master draggable wrapper containing both the string and the card together */}
          <motion.div
            style={{ x, y }}
            drag
            dragConstraints={{ left: -130, right: 130, top: -70, bottom: 180 }}
            dragElastic={0.3}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
            whileTap={{ cursor: "grabbing" }}
            className="relative cursor-grab z-30 flex flex-col items-center pt-20"
          >
            {/* STRETCHING STRING: Directly attached to the top of the drag group */}
            <motion.div 
              style={{ 
                height: stringLength,
                rotate: stringAngle,
                transformOrigin: "top center"
              }}
              className="absolute top-0 w-4 bg-gradient-to-b from-[#5A1A22] via-[#6B2D34] to-[#803941] shadow-[0_0_25px_rgba(107,45,52,0.8)] border-x border-[#803941]/60 z-10 pointer-events-none"
            />

            {/* Container for card and clip positioned below the string */}
            <div className="relative flex flex-col items-center mt-[100px] z-30">
              
              {/* Metal connector clip */}
              <div className="w-12 h-6 bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-700 rounded-t-md shadow-lg border border-neutral-300 flex items-center justify-center z-40 -mb-1 relative">
                <div className="w-4 h-1.5 bg-black rounded-full"></div>
              </div>

              {/* Burgundy Leather-Look ID Card */}
              <div className="w-72 bg-gradient-to-b from-[#120406] via-[#21080b] to-[#120406] border-2 border-[#803941] rounded-3xl p-5 shadow-[0_0_50px_rgba(107,45,52,0.4)] backdrop-blur-2xl relative z-30">
                
                {/* Card Header */}
                <div className="flex justify-between items-center pb-3 border-b border-[#5A1A22] mb-4 text-xs tracking-widest text-neutral-300 font-mono">
                  <span className="text-[#a24853] font-bold tracking-wider">MSH-GLOBAL ID</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#5A1A22]/60 text-[#a24853] border border-[#803941] text-[10px] font-bold animate-pulse shadow-[0_0_10px_rgba(128,57,65,0.5)]">
                    ACTIVE
                  </span>
                </div>

                {/* Photo Container */}
                <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-neutral-900 border border-[#803941]/50 shadow-inner">
                  <Image 
                    src="/syauqihasibuan.jpeg" 
                    alt="Syauqi Hasibuan"
                    fill
                    className="object-cover object-top pointer-events-none"
                  />
                </div>

                {/* Card Footer Details */}
                <div className="mt-4 text-center space-y-1">
                  <h3 className="font-bold text-base text-white tracking-wide">Syauqi Hasibuan</h3>
                  <p className="text-xs font-semibold text-[#a24853]">
                    Delegate & Tech Innovator
                  </p>
                  <p className="text-[10px] text-[#803941] pt-1 font-mono tracking-tight animate-bounce">✨ Drag anywhere & watch it stretch! ✨</p>
                </div>

              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
