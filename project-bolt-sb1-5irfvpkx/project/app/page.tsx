import { BackgroundOrbs } from '@/components/portfolio/orbs'
import { Hero } from '@/components/portfolio/hero'
import { Achievements } from '@/components/portfolio/achievements'
import SustainableEnergySection from '@/components/portfolio/SustainableEnergySection';

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0f0305] text-white overflow-hidden">
      <BackgroundOrbs />

      <nav className="sticky top-0 z-50 border-b border-[#5A1A22]/40 bg-[#0f0305]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-lg font-extrabold tracking-tight text-white">
            MSH<span className="text-[#803941]">.</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-neutral-400 sm:flex">
            <a href="#international" className="transition-colors hover:text-[#a24853]">
              International
            </a>
            <a href="#national" className="transition-colors hover:text-[#a24853]">
              National
            </a>
            <a href="#leadership" className="transition-colors hover:text-[#a24853]">
              Leadership
            </a>
          </div>
        </div>
      </nav>

      {/* 1. Sustainable Energy Section at the Top */}
      <SustainableEnergySection />
      
      {/* 2. Your Hero Section (Name, Overview, Bio) */}
      <Hero />

      {/* 3. Your Achievements Section (International, National, etc.) */}
      <Achievements />

      {/* Footer */}
      <footer className="relative border-t border-[#5A1A22] py-10 bg-[#0f0305]">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="font-display text-lg font-bold text-white">Muhammad Syauqi Hasibuan</p>
          <p className="mt-1 text-sm text-neutral-400">
            Academic &amp; Energy Leadership Portfolio — Aspiring Chemical &amp; Petroleum Engineer
          </p>
          <p className="mt-4 text-xs text-neutral-500">Alhamdulillah. All success is by the grace and will of Allah.</p>
        </div>
      </footer>
    </main>
  )
}
