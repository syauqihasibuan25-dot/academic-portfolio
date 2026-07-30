import { BackgroundOrbs } from '@/components/portfolio/orbs'
import { Hero } from '@/components/portfolio/hero'
import { Achievements } from '@/components/portfolio/achievements'
import SustainableEnergySection from '@/components/portfolio/SustainableEnergySection';

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* 1. Burgundy Section at the very top */}
      <div className="bg-[#0f0305] text-white">
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

        <SustainableEnergySection />
      </div>

      {/* 2. Everything underneath switches to clean beige/slate style */}
      <div className="bg-slate-50 text-slate-900">
        <Hero />
        <Achievements />

        <footer className="relative border-t border-slate-200 py-10">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="font-display text-lg font-bold text-slate-900">Muhammad Syauqi Hasibuan</p>
            <p className="mt-1 text-sm text-slate-500">
              Academic &amp; Energy Leadership Portfolio — Aspiring Chemical &amp; Petroleum Engineer
            </p>
            <p className="mt-4 text-xs text-slate-400">Alhamdulillah. All success is by the grace and will of Allah.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
