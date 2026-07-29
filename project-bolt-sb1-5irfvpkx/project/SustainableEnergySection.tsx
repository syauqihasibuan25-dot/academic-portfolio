import React from 'react';
import Image from 'next/image'; 

export default function SustainableEnergySection() {
  return (
    <section className="relative w-full py-20 px-6 bg-[#0a0a0a] text-white border-t border-[#222]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Sustainable Energy & MUN Mission Statement */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase border border-emerald-500/20">
            Plan A • Global Vision
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Chasing a Sustainable Energy Future
          </h2>
          
          <p className="text-gray-400 leading-relaxed text-base">
            Passionate about global sustainability, renewable energy solutions, and climate action. Preparing for platforms like Model United Nations (MUN) to advocate for green policies, while exploring technology and science to help build a cleaner, energy-secure tomorrow.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-3.5 py-1.5 rounded-md bg-[#161616] border border-[#262626] text-xs text-gray-300 font-medium">
              Sustainable Energy
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-[#161616] border border-[#262626] text-xs text-gray-300 font-medium">
              Model United Nations (MUN)
            </span>
            <span className="px-3.5 py-1.5 rounded-md bg-[#161616] border border-[#262626] text-xs text-gray-300 font-medium">
              Climate Action & Policy
            </span>
          </div>
        </div>

        {/* Right Column: Interactive ID Card & Lanyard Visual */}
        <div className="flex justify-center items-center">
          <div className="relative w-72 bg-[#121212] border border-[#262626] rounded-2xl p-4 shadow-2xl shadow-black/50 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            
            {/* Lanyard Clip Simulation at Top */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-[#1f1f1f] border border-[#333] rounded-t-lg flex items-center justify-center">
              <div className="w-4 h-2 bg-[#0a0a0a] rounded-sm"></div>
            </div>

            {/* Card Header */}
            <div className="flex justify-between items-center pb-3 border-b border-[#222] mb-4 text-xs tracking-widest text-gray-500 font-mono">
              <span>ID CARD</span>
              <span className="text-emerald-400">ACTIVE</span>
            </div>

            {/* Photo Container */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden bg-[#181818] border border-[#222]">
              <Image 
                src="/syauqihasibuan.jpeg" 
                alt="Syauqi Hasibuan"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Card Footer Details */}
            <div className="mt-4 text-center space-y-1">
              <h3 className="font-semibold text-sm text-gray-200">Syauqi Hasibuan</h3>
              <p className="text-xs text-gray-500">Delegate & Tech Innovator</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
