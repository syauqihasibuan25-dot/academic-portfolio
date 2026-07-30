import { BackgroundOrbs } from '@/components/portfolio/orbs'
import { Hero } from '@/components/portfolio/hero'
import { Achievements } from '@/components/portfolio/achievements'
import SustainableEnergySection from '@/components/portfolio/SustainableEnergySection';

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#050102] text-white">
      <BackgroundOrbs />

      <nav className="sticky top-0 z-50 border-b border-red-900/40 bg-[#050102]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-lg font-extrabold tracking-tight text-white">
            MSH<span className="text-red-500">.</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-neutral-400 sm:flex">
            <a href="#international" className="transition-colors hover:text-red-400">
              International
            </a>
            <a href="#national" className="transition-colors hover:text-red-400">
              National
            </a>
            <a href="#leadership" className="transition-colors hover:text-red-400">
              Leadership
            </a>
          </div>
        </div>
      </nav>

      {/* MOVED TO THE VERY TOP */}
      <SustainableEnergySection />
      
      <Hero />
      <Achievements />

      <footer className="relative border-t border-red-950 py-10 bg-[#050102]">
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
