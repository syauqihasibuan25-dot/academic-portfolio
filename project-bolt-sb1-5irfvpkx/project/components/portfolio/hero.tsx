import { ArrowDown, Globe2, GraduationCap, Fuel, BookOpen, HeartHandshake, Star } from 'lucide-react';
import { Reveal } from '@/components/portfolio/reveal';

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-32">
        <div className="flex flex-col items-start gap-6">
          <Reveal direction="fade-scale">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              Aspiring Chemical &amp; Petroleum Engineer
            </span>
          </Reveal>

          <Reveal direction="fade-scale" delay={0.1}>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 text-balance sm:text-7xl">
              Muhammad Syauqi <span className="text-orange-500">Hasibuan</span>
            </h1>
          </Reveal>

          <Reveal direction="fade-scale" delay={0.2}>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              An academic and energy leader turning curiosity about how the world
              powers itself into international stages, national medals, and a
              relentless drive to engineer a cleaner energy future.
            </p>
          </Reveal>

          <Reveal direction="fade-scale" delay={0.3}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#achievements"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md"
              >
                Explore achievements
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#leadership"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition-all hover:border-slate-300 hover:bg-white"
              >
                Leadership journey
              </a>
            </div>
          </Reveal>

          <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Globe2, label: 'International stages', value: 'Representing Indonesia', tint: 'text-amber-600' },
              { icon: GraduationCap, label: 'Academic olympiads', value: 'National medalist', tint: 'text-emerald-600' },
              { icon: Fuel, label: 'Energy focus', value: 'Petroleum & chemical', tint: 'text-indigo-600' },
              { icon: Star, label: 'Earth Science Club', value: 'Vice President', tint: 'text-violet-600' },
            ].map(({ icon: Icon, label, value, tint }, i) => (
              <Reveal key={label} direction="fade-scale" delay={0.4 + i * 0.1}>
                <div className="group h-full rounded-xl border border-slate-200/70 bg-white/60 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white/80">
                  <Icon className={`h-6 w-6 ${tint}`} />
                  <p className="mt-3 text-sm font-semibold text-slate-900">{value}</p>
                  <p className="text-xs text-slate-500">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
            <Reveal direction="drop" delay={0.1}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-600">
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900">Profile Overview</h3>
                </div>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-600">
                  High-achieving STEM student combining advanced competitive expertise in
                  molecular chemistry, thermodynamics, and fluid mechanics. Targeting a
                  Bachelor&apos;s degree in Chemical Engineering to pioneer technologically
                  viable and sustainable solutions for the global Oil &amp; Gas sector.
                  Dedicated to maintaining top 10 rankings with a straight-A record, aiming
                  for top global universities including Oxford University.
                </p>
              </div>
            </Reveal>

            <Reveal direction="drop" delay={0.2}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-600">
                    <HeartHandshake className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Personal Foundation &amp; Faith
                  </h3>
                </div>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-600">
                  Passionate about peer mentorship and explaining complex STEM topics.
                  Driven by the grit of humble beginnings and anchored in the firm belief
                  that all success is only possible through the grace and will of Allah.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
