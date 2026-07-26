'use client';

import { motion } from 'framer-motion'
import { Reveal } from './reveal'
import { TiltCard } from './tilt-card'
import { Globe, Medal, Award, Trophy, Star } from 'lucide-react'

type AwardTier = 'Gold' | 'Silver' | 'Bronze' | 'Merit' | 'Participant' | 'Honorable Mention' | 'Recognition'

type AwardItem = {
  title: string
  tier: AwardTier
  year: string
  description: string
  image?: string
  imageAlt?: string
}

const tierStyles: Record<AwardTier, string> = {
  Gold: 'bg-amber-100 text-amber-700 border-amber-300',
  Silver: 'bg-slate-100 text-slate-600 border-slate-300',
  Bronze: 'bg-orange-100 text-orange-700 border-orange-300',
  Merit: 'bg-sky-100 text-sky-700 border-sky-300',
  Participant: 'bg-indigo-100 text-indigo-700 border-indigo-300',
  'Honorable Mention': 'bg-violet-100 text-violet-700 border-violet-300',
  Recognition: 'bg-indigo-100 text-indigo-700 border-indigo-300',
}

const noAwardSuffix: AwardTier[] = ['Participant', 'Honorable Mention', 'Recognition']

// Alternate slide direction by 1-based position: odd -> left-to-right, even -> right-to-left
function alternateDirection(index: number): 'left' | 'right' {
  return index % 2 === 0 ? 'left' : 'right'
}

const baliHighlights: AwardItem[] = [
  {
    title: 'Best Team in Malaysia for Science',
    tier: 'Gold',
    year: '2025',
    description: 'Top-performing national team for exceptional scientific problem-solving and collaboration.',
  },
  {
    title: 'Best Team (International Division) for Science',
    tier: 'Bronze',
    year: '2025',
    description: 'Secured 3rd place globally among international teams for high-level scientific reasoning.',
  },
  {
    title: 'ASMO International Round — Bali, Indonesia',
    tier: 'Merit',
    year: '2025',
    description: 'Represented Malaysia in the Asian Science and Mathematics Olympiad final round.',
  },
]

const international: AwardItem[] = [
  {
    title: 'ASMO International Round — Bangkok, Thailand',
    tier: 'Bronze',
    year: '2024',
    description: 'Earned a podium Bronze Individual Award at the Asian Science and Mathematics Olympiad finals.',
    image: '/asmo-bangkok-2024.jpg',
    imageAlt: 'Bronze Individual Award for Muhammad Syauqi Hasibuan at ASMO International Competition 2024',
  },
]

const national: AwardItem[] = [
  {
    title: 'International Einstein Olympiad — National Round Participant',
    tier: 'Participant',
    year: '2026',
    description:
      'Demonstrated advanced problem-solving proficiency in the National Round of the Einstein Olympiad (Science).',
  },
  {
    title: 'National STEM Round (Science)',
    tier: 'Bronze',
    year: '2025',
    description: 'Recognized among top nationwide competitors in advanced scientific principles.',
  },
  {
    title: 'National STEM Round (Science)',
    tier: 'Silver',
    year: '2024',
    description: 'Achieved high national ranking for analytical performance in competitive science assessments.',
  },
  {
    title: 'National STEM Round (Mathematics)',
    tier: 'Honorable Mention',
    year: '2024',
    description: 'Awarded commendation for problem-solving proficiency in national-level mathematics.',
  },
  {
    title: 'State Qualification Round',
    tier: 'Bronze',
    year: '2024',
    description:
      'Placed in the top tier at the state level to earn a qualification spot for national competition rounds.',
  },
]

const leadership: AwardItem[] = [
  {
    title: 'Prefect of the Month — IISMS',
    tier: 'Recognition',
    year: '',
    description:
      'Awarded for outstanding leadership and steadfast dedication in maintaining campus discipline, order, and student engagement at International Islamic School Malaysia Secondary.',
  },
  {
    title: 'Merit Champion — IISMS',
    tier: 'Gold',
    year: '2024',
    description:
      'Recognized as the top student for overall conduct, academic excellence, and positive school community involvement.',
    image: '/merit-champion.jpg',
    imageAlt: 'Syauqi holding the 1st Place Merit Champion trophy and certificate at IISM',
  },
]

function TierBadge({ tier }: { tier: AwardTier }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tierStyles[tier]}`}
    >
      {noAwardSuffix.includes(tier) ? tier : `${tier} Award`}
    </span>
  )
}

function ImageAwardCard({ item, glow }: { item: AwardItem; glow: string }) {
  return (
    <TiltCard glow={glow} className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur">
        <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl bg-slate-100">
          <motion.img
            src={item.image || '/placeholder.svg'}
            alt={item.imageAlt || item.title}
            className="h-full w-full object-contain"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="min-w-0 flex-1 p-5">
          <div className="flex flex-wrap items-center gap-2">
            <TierBadge tier={item.tier} />
            {item.year ? <span className="text-xs font-semibold text-slate-400">{item.year}</span> : null}
          </div>
          <h4 className="font-display mt-2 text-pretty text-lg font-bold text-slate-900">{item.title}</h4>
          <p className="mt-1.5 text-pretty text-sm leading-relaxed text-slate-600">{item.description}</p>
        </div>
      </article>
    </TiltCard>
  )
}

function TextAwardCard({ item, glow, accent }: { item: AwardItem; glow: string; accent: string }) {
  return (
    <TiltCard glow={glow} className="h-full">
      <article className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${accent}`}>
          <Medal className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <TierBadge tier={item.tier} />
            {item.year ? <span className="text-xs font-semibold text-slate-400">{item.year}</span> : null}
          </div>
          <h4 className="font-display mt-2 text-pretty text-lg font-bold text-slate-900">{item.title}</h4>
          <p className="mt-1.5 text-pretty text-sm leading-relaxed text-slate-600">{item.description}</p>
        </div>
      </article>
    </TiltCard>
  )
}

function AwardCard({ item, glow, accent }: { item: AwardItem; glow: string; accent: string }) {
  return item.image ? (
    <ImageAwardCard item={item} glow={glow} />
  ) : (
    <TextAwardCard item={item} glow={glow} accent={accent} />
  )
}

function BaliShowcase() {
  return (
    <TiltCard glow="rgba(245,158,11,0.35)" className="h-full">
      <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur lg:grid-cols-2">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-slate-100 lg:aspect-auto">
          <motion.img
            src="/asmo-bali-2025.jpg"
            alt="Syauqi receiving his Merit certificate on the ASMO 2025 International Round stage in Bali"
            className="h-full w-full object-contain"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow">
            <Globe className="h-3.5 w-3.5" />
            Bali, Indonesia · Dec 2025
          </span>
        </div>
        <div className="p-6">
          <h4 className="font-display text-xl font-bold text-slate-900">ASMO Bali 2025 Highlights</h4>
          <p className="mt-1 text-sm leading-relaxed text-slate-500">
            Four honors earned at the Asian Science &amp; Mathematics Olympiad International Round.
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {baliHighlights.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3 transition-colors hover:border-amber-200 hover:bg-amber-50/60"
              >
                <div className="mt-0.5 shrink-0">
                  <TierBadge tier={item.tier} />
                </div>
                <div className="min-w-0">
                  <p className="text-pretty text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="text-pretty text-xs leading-relaxed text-slate-500">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </TiltCard>
  )
}

function CategoryHeader({
  icon,
  title,
  subtitle,
  accentText,
  line,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  accentText: string
  line: string
}) {
  return (
    <Reveal direction="fade-scale" className="mb-8">
      <div className="flex items-center gap-3">
        <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${accentText}`}>{icon}</span>
        <div>
          <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h3>
          <p className="text-sm font-medium text-slate-500">{subtitle}</p>
        </div>
      </div>
      <div className={`mt-4 h-1 w-24 rounded-full ${line}`} />
    </Reveal>
  )
}

export function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-6xl px-6 py-16">
      <Reveal direction="fade-scale" className="mb-14 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-semibold text-slate-600 backdrop-blur">
          <Trophy className="h-4 w-4 text-amber-500" />
          Achievements &amp; Awards
        </span>
        <h2 className="font-display mt-4 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          A Record of Excellence Across Every Arena
        </h2>
      </Reveal>

      {/* International */}
      <div id="international" className="scroll-mt-20">
        <CategoryHeader
          icon={<Globe className="h-6 w-6 text-white" />}
          title="International Competitions"
          subtitle="Global olympiads & podium finishes"
          accentText="bg-amber-500 text-white"
          line="bg-amber-400"
        />
        <div className="flex flex-col gap-5">
          <Reveal direction={alternateDirection(1)}>
            <PimsoShowcase />
          </Reveal>
          <Reveal direction={alternateDirection(1)}>
            <BaliShowcase />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            {international.map((item, i) => (
              <Reveal key={item.title + i} direction={alternateDirection(i + 2)} delay={i * 0.06}>
                <AwardCard item={item} glow="rgba(245,158,11,0.35)" accent="border-amber-200 bg-amber-50 text-amber-600" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* National */}
      <div id="national" className="mt-16 scroll-mt-20">
        <CategoryHeader
          icon={<Award className="h-6 w-6 text-white" />}
          title="National & Regional STEM Competitions"
          subtitle="Top-tier national rankings"
          accentText="bg-emerald-500 text-white"
          line="bg-emerald-400"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {national.map((item, i) => (
            <Reveal key={item.title + i} direction={alternateDirection(i + 1)} delay={i * 0.06}>
              <AwardCard
                item={item}
                glow="rgba(16,185,129,0.35)"
                accent="border-emerald-200 bg-emerald-50 text-emerald-600"
              />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div id="leadership" className="mt-16 scroll-mt-20">
        <CategoryHeader
          icon={<Star className="h-6 w-6 text-white" />}
          title="Leadership & Institutional Recognition"
          subtitle="Character, conduct & community"
          accentText="bg-indigo-500 text-white"
          line="bg-indigo-400"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {leadership.map((item, i) => (
            <Reveal key={item.title + i} direction={alternateDirection(i + 1)} delay={i * 0.06}>
              <AwardCard
                item={item}
                glow="rgba(99,102,241,0.35)"
                accent="border-indigo-200 bg-indigo-50 text-indigo-600"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
