import React from 'react';
import Image from 'next/image';

export default function SustainableEnergySection() {
  return (
    <section className="relative w-full py-20 px-6 bg-[#0f0305] text-white overflow-hidden">
      
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6B2D34]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Content */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#5A1A22]/50 text-[#803941] text-xs font-bold tracking-widest uppercase border border-[#803941]/50">
            Global Vision • Sustainability
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Chasing a Sustainable Energy Future
          </h2>
          
          <p className="text-neutral-300 leading-relaxed text-base font-light">
            Passionate about global sustainability, cutting carbon emissions, and advancing renewable energy solutions. Preparing for platforms like Model United Nations (MUN) to advocate for aggressive green policies, while exploring chemical engineering science to minimize environmental impact and build an energy-secure tomorrow.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-4 py-2 rounded-xl bg-[#120406] border border-[#803941]/40 text-xs text-[#a24853] font-semibold">
              Carbon Emissions Reduction
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#120406] border border-[#803941]/40 text-xs text-[#a24853] font-semibold">
              Model United Nations (MUN)
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#120406] border border-[#803941]/40 text-xs text-[#a24853] font-semibold">
              Climate Action & Policy
            </span>
          </div>
        </div>

        {/* Right Column: Clean Static ID Card */}
        <div className="flex justify-center items-center py-6">
          <div className="flex flex-col items-center">
            
            {/* Top Lanyard Strap */}
            <div className="w-4 h-16 bg-gradient-to-b from-[#5A1A22] via-[#6B2D34] to-[#803941] border-x border-[#803941]/60 rounded-t-sm" />

            {/* Metal Clip */}
            <div className="w-10 h-5 bg-gradient-to-b from-neutral-300 to-neutral-600 rounded-t-md border border-neutral-400 flex items-center justify-center -mb-1 relative z-20">
              <div className="w-3 h-1 bg-black rounded-full" />
            </div>

            {/* ID Card Box */}
            <div className="w-72 bg-gradient-to-b from-[#120406] via-[#21080b] to-[#120406] border-2 border-[#803941] rounded-3xl p-5 shadow-2xl">
              
              {/* Card Header */}
              <div className="flex justify-between items-center pb-3 border-b border-[#5A1A22] mb-4 text-xs tracking-widest text-neutral-300 font-mono">
                <span className="text-[#a24853] font-bold tracking-wider">MSH-GLOBAL ID</span>
                <span className="px-2 py-0.5 rounded-full bg-[#5A1A22]/60 text-[#a24853] border border-[#803941] text-[10px] font-bold">
                  ACTIVE
                </span>
              </div>

              {/* Photo Area */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-neutral-900 border border-[#803941]/50">
                <Image 
                  src="/syauqihasibuan.jpeg" 
                  alt="Syauqi Hasibuan"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Card Footer */}
              <div className="mt-4 text-center space-y-1">
                <h3 className="font-bold text-base text-white tracking-wide">Syauqi Hasibuan</h3>
                <p className="text-xs font-semibold text-[#a24853]">
                  Delegate & Tech Innovator
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
