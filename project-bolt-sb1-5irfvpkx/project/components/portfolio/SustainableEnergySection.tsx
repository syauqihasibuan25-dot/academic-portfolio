'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SustainableEnergySection() {
  const titleText = "Chasing a Sustainable Energy Future";
  const words = titleText.split(" ");

  return (
    <section className="relative w-full py-32 px-6 bg-gradient-to-b from-[#120306] via-[#1a0508] to-[#120306] text-white overflow-hidden border-t border-rose-500/30">
      
      {/* Deep Cherry Red Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-rose-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none"></div>

      {/* LANYARD ANCHORED ABSOLUTELY TO THE VERY TOP EDGE (URL BAR CONCEPT) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 pointer-events-none">
        {/* Metal top clamp mimicking the browser window edge */}
        <div className="w-24 h-4 bg-gradient-to-r from-neutral-300 via-rose-200 to-neutral-300 rounded-b-md shadow-2xl border-b border-rose-400"></div>
        {/* The lanyard strap string hanging down seamlessly */}
        <div className="w-4 h-36 bg-gradient-to-b from-rose-950 via-rose-900 to-neutral-950 shadow-2xl border-x border-rose-500/30"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 pt-16">
        
        {/* Left Column: Shiny Solid Cherry Red Title */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500/20 to-red-500/20 text-rose-300 text-xs font-bold tracking-widest uppercase border border-rose-500/40 shadow-lg shadow-rose-950/50"
          >
            Global Vision • Sustainability
          </motion.div>
          
          {/* Solid Shiny Cherry Red Animated Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight flex flex-wrap gap-x-3 gap-y-2 [perspective:1000px]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, rotateX: 90, y: 30 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.215, 0.61, 0.355, 1] }}
                className="inline-block bg-gradient-to-r from-rose-400 via-red-500 to-rose-600 bg-clip-text text-transparent transform-gpu drop-shadow-[0_2px_10px_rgba(225,29,72,0.4)]"
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
            <span className="px-4 py-2 rounded-xl bg-neutral-900/90 border border-rose-500/30 text-xs text-rose-300 font-semibold shadow-lg shadow-rose-950/30 backdrop-blur-md">
              Sustainable Energy
            </span>
            <span className="px-4 py-2 rounded-xl bg-neutral-900/90 border border-rose-500/30 text-xs text-red-300 font-semibold shadow-lg shadow-rose-950/30 backdrop-blur-md">
              Model United Nations (MUN)
            </span>
            <span className="px-4 py-2 rounded-xl bg-neutral-900/90 border border-rose-500/30 text-xs text-amber-300 font-semibold shadow-lg shadow-rose-950/30 backdrop-blur-md">
              Climate Action & Policy
            </span>
          </div>
        </div>

        {/* Right Column: Perfectly Connected Strap & Draggable ID Card */}
        <div className="flex justify-center items-center pt-24 relative min-h-[520px]">

          <motion.div
            drag
            dragConstraints={{ left: -100, right: 100, top: -10, bottom: 100 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing" }}
            animate={{ x: 0, y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            className="relative cursor-grab z-20 origin-top flex flex-col items-center"
          >
            {/* Seamless physical connector clip linking the strap directly to the badge */}
            <div className="w-12 h-8 bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-700 rounded-t-lg shadow-md border border-neutral-300 z-30 -mb-1 flex items-center justify-center">
              <div className="w-4 h-1.5 bg-neutral-900 rounded-full"></div>
            </div>

            {/* The Cherry Red ID Card with glowing hover zoom effect */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-72 bg-gradient-to-b from-neutral-950 via-[#1a0508] to-neutral-950 border-2 border-rose-500/50 rounded-3xl p-5 shadow-[0_0_50px_rgba(225,29,72,0.3)] backdrop-blur-2xl"
            >
              
              {/* Card Header */}
              <div className="flex justify-between items-center pb-3 border-b border-rose-900/40 mb-4 text-xs tracking-widest text-neutral-400 font-mono">
                <span className="text-rose-400 font-bold tracking-wider">MSH-GLOBAL ID</span>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 text-[10px] font-bold animate-pulse shadow-sm">
                  ACTIVE
                </span>
              </div>

              {/* Photo Container */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-neutral-900 border border-rose-500/30 shadow-inner">
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
                <p className="text-xs font-semibold bg-gradient-to-r from-rose-400 via-red-400 to-rose-300 bg-clip-text text-transparent">
                  Delegate & Tech Innovator
                </p>
                <p className="text-[10px] text-rose-400/80 pt-1 font-mono tracking-tight animate-bounce">✨ Grab, fling & watch it snap back! ✨</p>
              </div>

            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
