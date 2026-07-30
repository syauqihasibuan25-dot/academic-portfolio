import { BackgroundOrbs } from '@/components/portfolio/orbs'
import { Hero } from '@/components/portfolio/hero'
import { Achievements } from '@/components/portfolio/achievements'
import SustainableEnergySection from '@/components/portfolio/SustainableEnergySection';

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0f0305] text-white selection:bg-[#803941] selection:text-white">
      <BackgroundOrbs />
      
      <nav className="sticky top-0 z-50 border-b border-[#803941]/30 bg-[#0f0305]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-lg font-extrabold tracking-tight text-white">
            MSH<span className="text-[#a24853]">.</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-neutral-300 sm:flex">
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

      <SustainableEnergySection />
      <Hero />
      <Achievements />

      <footer className="relative border-t border-[#803941]/30 py-10 bg-[#0f0305]">
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
