'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SustainableEnergySection() {
  const titleText = "Chasing a Sustainable Energy Future";
  const words = titleText.split(" ");

  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-b from-[#090d16] via-[#111827] to-[#090d16] text-white overflow-hidden border-t border-indigo-500/20">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* LANYARD ANCHORED TO THE VERY TOP BAR OF THE SECTION */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 pointer-events-none">
        <div className="w-16 h-4 bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500 rounded-b-md shadow-lg border-b border-slate-600"></div>
        <div className="w-3 h-28 bg-gradient-to-b from-slate-700 via-indigo-950 to-slate-900 shadow-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 pt-12">
        
        {/* Left Column: Animated Text with Word Flipping */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 text-xs font-bold tracking-widest uppercase border border-emerald-500/30 shadow-lg"
          >
            Global Vision • Sustainability
          </motion.div>
          
          {/* Word-by-word flipping/stagger animation */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight flex flex-wrap gap-x-3 gap-y-2">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, rotateX: 90, y: 20 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="inline-block bg-gradient-to-r from-white via-slate-100 to-emerald-400 bg-clip-text text-transparent transform-gpu"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 leading-relaxed text-base"
          >
            Passionate about global sustainability, renewable energy solutions, and climate action. Preparing for platforms like Model United Nations (MUN) to advocate for green policies, while exploring technology and science to help build a cleaner, energy-secure tomorrow.
          </motion.p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-emerald-300 font-semibold shadow-md">
              Sustainable Energy
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-blue-300 font-semibold shadow-md">
              Model United Nations (MUN)
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-amber-300 font-semibold shadow-md">
              Climate Action & Policy
            </span>
          </div>
        </div>

        {/* Right Column: Draggable Card with Spring Snap-Back Physics */}
        <div className="flex justify-center items-center pt-16 relative min-h-[480px]">

          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            whileTap={{ cursor: "grabbing" }}
            animate={{ x: 0, y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative cursor-grab z-20 origin-top pt-20"
          >
            <div className="w-72 bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-indigo-500/30 rounded-3xl p-5 shadow-2xl shadow-indigo-950/90 backdrop-blur-xl group hover:border-emerald-500/40 transition-colors">
              
              {/* Card Header */}
              <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4 text-xs tracking-widest text-slate-400 font-mono">
                <span className="text-indigo-400 font-bold">MSH-GLOBAL ID</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold animate-pulse">
                  ACTIVE
                </span>
              </div>

              {/* Photo Container */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                <Image 
                  src="/syauqihasibuan.jpeg" 
                  alt="Syauqi Hasibuan"
                  fill
                  className="object-cover object-top pointer-events-none group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Footer Details */}
              <div className="mt-4 text-center space-y-1">
                <h3 className="font-bold text-base text-white tracking-wide">Syauqi Hasibuan</h3>
                <p className="text-xs font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Delegate & Tech Innovator
                </p>
                <p className="text-[10px] text-emerald-400/80 pt-1 font-mono tracking-tight animate-bounce">✨ Fling me & watch me snap back! ✨</p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
