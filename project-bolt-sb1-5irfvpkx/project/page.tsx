import { BackgroundOrbs } from '@/components/portfolio/orbs'
import { Hero } from '@/components/portfolio/hero'
import { Achievements } from '@/components/portfolio/achievements'
import SustainableEnergySection from '@/components/portfolio/SustainableEnergySection';

export default function Page() {
  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900">
      <BackgroundOrbs />
      <SustainableEnergySection/>

      <nav className="sticky top-0 z-40 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-lg font-extrabold tracking-tight text-slate-900">
            MSH<span className="text-amber-500">.</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 sm:flex">
            <a href="#international" className="transition-colors hover:text-amber-600">
              International
            </a>
            <a href="#national" className="transition-colors hover:text-emerald-600">
              National
            </a>
            <a href="#leadership" className="transition-colors hover:text-indigo-600">
              Leadership
            </a>
          </div>
        </div>
      </nav>

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
    </main>
  )
}
