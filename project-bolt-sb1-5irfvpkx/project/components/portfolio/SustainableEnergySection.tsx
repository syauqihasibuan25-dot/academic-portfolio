'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SustainableEnergySection() {
  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white overflow-hidden border-t border-indigo-500/20">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Vision & Mission */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 text-xs font-bold tracking-widest uppercase border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
            Global Vision • Sustainability
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-emerald-400 bg-clip-text text-transparent leading-tight">
            Chasing a Sustainable Energy Future
          </h2>
          
          <p className="text-slate-300 leading-relaxed text-base">
            Passionate about global sustainability, renewable energy solutions, and climate action. Preparing for platforms like Model United Nations (MUN) to advocate for green policies, while exploring technology and science to help build a cleaner, energy-secure tomorrow.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-emerald-300 font-semibold shadow-md backdrop-blur-sm">
              Sustainable Energy
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-blue-300 font-semibold shadow-md backdrop-blur-sm">
              Model United Nations (MUN)
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-amber-300 font-semibold shadow-md backdrop-blur-sm">
              Climate Action & Policy
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Physics Draggable ID Card */}
        <div className="flex justify-center items-center pt-10 min-h-[420px] relative">
          
          {/* Lanyard Top Anchor Point */}
          <div className="absolute top-0 flex flex-col items-center z-10">
            <div className="w-12 h-4 bg-slate-700 rounded-md border border-slate-600 shadow-lg"></div>
            <div className="w-2 h-16 bg-gradient-to-b from-slate-700 via-indigo-900 to-slate-800"></div>
          </div>

          {/* Draggable Spring-Physics Card */}
          <motion.div
            drag
            dragConstraints={{ left: -80, right: 80, top: -20, bottom: 80 }}
            dragElastic={0.4}
            whileHover={{ scale: 1.02 }}
            whileTap={{ cursor: "grabbing" }}
            className="relative cursor-grab mt-20 z-20"
          >
            <div className="w-72 bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-indigo-500/30 rounded-3xl p-5 shadow-2xl shadow-indigo-950/90 backdrop-blur-xl">
              
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
                  className="object-cover object-top pointer-events-none"
                />
              </div>

              {/* Card Footer Details */}
              <div className="mt-4 text-center space-y-1">
                <h3 className="font-bold text-base text-white tracking-wide">Syauqi Hasibuan</h3>
                <p className="text-xs font-medium bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Delegate & Tech Innovator
                </p>
                <p className="text-[10px] text-slate-500 pt-1 italic">(Click & drag me around!)</p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
