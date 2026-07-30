'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SustainableEnergySection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 bg-[#050102] text-white overflow-hidden pt-24 pb-16">
      
      {/* Intense Glowing Red Backdrops */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-red-600/30 rounded-full blur-[160px] pointer-events-none"></div>

      {/* ABSOLUTE VIEWPORT LANYARD: Anchors completely from the top screen edge (simulating browser toolbar) */}
      <div className="absolute -top-32 left-[74%] md:left-[74%] -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
        <div className="w-4 h-[1200px] bg-gradient-to-b from-red-500 via-red-700 to-black shadow-[0_0_35px_rgba(255,0,0,0.9)] border-x border-red-400"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-20">
        
        {/* Left Column: 100% Solid Glossy Red Title */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-600/20 text-red-400 text-xs font-bold tracking-widest uppercase border border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.5)]">
            Global Vision • Sustainability
          </div>
          
          {/* ZERO WHITE. Pure metallic/glossy vibrant red text. */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="inline-block bg-gradient-to-r from-red-500 via-red-600 to-rose-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,0,0,0.8)]">
              Chasing a Sustainable Energy Future
            </span>
          </h2>
          
          <p className="text-neutral-300 leading-relaxed text-base font-light">
            Passionate about global sustainability, renewable energy solutions, and climate action. Preparing for platforms like Model United Nations (MUN) to advocate for green policies, while exploring technology and science to help build a cleaner, energy-secure tomorrow.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-4 py-2 rounded-xl bg-neutral-900 border border-red-500/50 text-xs text-red-400 font-semibold shadow-lg shadow-red-950 backdrop-blur-md">
              Sustainable Energy
            </span>
            <span className="px-4 py-2 rounded-xl bg-neutral-900 border border-red-500/50 text-xs text-red-400 font-semibold shadow-lg shadow-red-950 backdrop-blur-md">
              Model United Nations (MUN)
            </span>
            <span className="px-4 py-2 rounded-xl bg-neutral-900 border border-red-500/50 text-xs text-red-400 font-semibold shadow-lg shadow-red-950 backdrop-blur-md">
              Climate Action & Policy
            </span>
          </div>
        </div>

        {/* Right Column: Perfectly Centered ID Card & Lanyard Mechanism */}
        <div className="flex justify-center items-center relative min-h-[480px]">

          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: -80 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            dragElastic={0.6}
            whileTap={{ cursor: "grabbing" }}
            className="relative cursor-grab z-30 origin-top flex flex-col items-center"
          >
            
            {/* Metal connector clip precisely centered on the string */}
            <div className="w-12 h-6 bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-700 rounded-t-md shadow-lg border border-neutral-300 flex items-center justify-center z-40 -mb-1">
              <div className="w-4 h-1.5 bg-black rounded-full"></div>
            </div>

            {/* Glowing Red ID Card */}
            <div className="w-72 bg-gradient-to-b from-neutral-950 via-[#140103] to-neutral-950 border-2 border-red-600 rounded-3xl p-5 shadow-[0_0_70px_rgba(255,0,0,0.5)] backdrop-blur-2xl relative z-30">
              
              {/* Card Header */}
              <div className="flex justify-between items-center pb-3 border-b border-red-900/60 mb-4 text-xs tracking-widest text-neutral-300 font-mono">
                <span className="text-red-500 font-bold tracking-wider">MSH-GLOBAL ID</span>
                <span className="px-2.5 py-0.5 rounded-full bg-red-600/30 text-red-300 border border-red-500 text-[10px] font-bold animate-pulse shadow-[0_0_12px_rgba(255,0,0,0.6)]">
                  ACTIVE
                </span>
              </div>

              {/* Photo Container */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-neutral-900 border border-red-500/60 shadow-inner">
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
                <p className="text-xs font-semibold text-red-500">
                  Delegate & Tech Innovator
                </p>
                <p className="text-[10px] text-red-400/90 pt-1 font-mono tracking-tight animate-bounce">✨ Grab, fling & watch it snap back! ✨</p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
