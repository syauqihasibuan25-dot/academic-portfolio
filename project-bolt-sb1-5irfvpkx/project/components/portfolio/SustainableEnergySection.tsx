'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SustainableEnergySection() {
  const titleText = "Chasing a Sustainable Energy Future";
  const words = titleText.split(" ");

  return (
    <section className="relative w-full pt-16 pb-28 px-6 bg-[#0a0103] text-white overflow-hidden border-t border-rose-500/50">
      
      {/* Intense Eye-Catching Neon Red & Hot Pink Glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-rose-600/25 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[140px] pointer-events-none"></div>

      {/* FIXED VIEWPORT LANYARD: Anchors completely to the top of the browser screen (URL bar area) */}
      <div className="absolute -top-16 left-[74%] md:left-[74%] -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
        <div className="w-4 h-[900px] bg-gradient-to-b from-rose-500 via-rose-700 to-neutral-950 shadow-[0_0_25px_rgba(244,63,94,0.7)] border-x border-rose-400/60"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-20">
        
        {/* Left Column: Eye-Catching Neon Cherry Red Title */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500/30 to-pink-500/30 text-rose-200 text-xs font-bold tracking-widest uppercase border border-rose-500/60 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
          >
            Global Vision • Sustainability
          </motion.div>
          
          {/* Extremely Vibrant Neon-Red Animated Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight flex flex-wrap gap-x-3 gap-y-2 [perspective:1000px]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, rotateX: 90, y: 30 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.215, 0.61, 0.355, 1] }}
                className="inline-block bg-gradient-to-r from-white via-rose-300 to-rose-600 bg-clip-text text-transparent transform-gpu drop-shadow-[0_0_25px_rgba(244,63,94,0.6)]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-neutral-200 leading-relaxed text-base font-light"
          >
            Passionate about global sustainability, renewable energy solutions, and climate action. Preparing for platforms like Model United Nations (MUN) to advocate for green policies, while exploring technology and science to help build a cleaner, energy-secure tomorrow.
          </motion.p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-4 py-2 rounded-xl bg-neutral-900/90 border border-rose-500/40 text-xs text-rose-300 font-semibold shadow-lg shadow-rose-950/50 backdrop-blur-md">
              Sustainable Energy
            </span>
            <span className="px-4 py-2 rounded-xl bg-neutral-900/90 border border-rose-500/40 text-xs text-pink-300 font-semibold shadow-lg shadow-rose-950/50 backdrop-blur-md">
              Model United Nations (MUN)
            </span>
            <span className="px-4 py-2 rounded-xl bg-neutral-900/40 border border-rose-500/40 text-xs text-amber-300 font-semibold shadow-lg shadow-rose-950/50 backdrop-blur-md">
              Climate Action & Policy
            </span>
          </div>
        </div>

        {/* Right Column: Draggable Card with Entry Pop-up Animation */}
        <div className="flex justify-center items-center relative min-h-[480px]">

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: -40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            drag
            dragConstraints={{ left: -120, right: 120, top: -120, bottom: 120 }}
            dragElastic={0.6}
            whileTap={{ cursor: "grabbing" }}
            className="relative cursor-grab z-30 origin-top flex flex-col items-center"
          >
            
            {/* Metal connector clip sitting right on top of the card, perfectly aligned to the string */}
            <div className="w-12 h-6 bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-700 rounded-t-md shadow-md border border-neutral-300 flex items-center justify-center z-40 -mb-1">
              <div className="w-4 h-1.5 bg-neutral-900 rounded-full"></div>
            </div>

            {/* The Ultra Eye-Catching Glowing Cherry Red ID Card */}
            <motion.div 
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="w-72 bg-gradient-to-b from-neutral-950 via-[#1f0207] to-neutral-950 border-2 border-rose-500 rounded-3xl p-5 shadow-[0_0_60px_rgba(244,63,94,0.45)] backdrop-blur-2xl relative z-30"
            >
              
              {/* Card Header */}
              <div className="flex justify-between items-center pb-3 border-b border-rose-900/60 mb-4 text-xs tracking-widest text-neutral-300 font-mono">
                <span className="text-rose-400 font-bold tracking-wider">MSH-GLOBAL ID</span>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-bold animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.5)]">
                  ACTIVE
                </span>
              </div>

              {/* Photo Container */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-neutral-900 border border-rose-500/40 shadow-inner">
                <Image 
                  src="/syauqihasibuan.jpeg" 
                  alt="Syauqi Hasibuan"
                  fill
                  className="object-cover object-top pointer-events-none group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Card Footer Details */}
              <div className="mt-4 text-center space-y-1">
                <h3 className="font-bold text-base text-white tracking-wide">Syauqi Hasibuan</h3>
                <p className="text-xs font-semibold bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300 bg-clip-text text-transparent">
                  Delegate & Tech Innovator
                </p>
                <p className="text-[10px] text-rose-400/90 pt-1 font-mono tracking-tight animate-bounce">✨ Grab, fling & watch it snap back! ✨</p>
              </div>

            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
