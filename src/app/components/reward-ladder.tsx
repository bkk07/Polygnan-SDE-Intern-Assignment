import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { MilestoneCard } from './milestone-card'
import type { Tier } from './milestone-card'

const milestones: {
  step: number
  tier: Tier
  title: string
  registrations: number | null
  badge?: string
  rewards: { emoji: string; label: string }[]
  isLegendary?: boolean
}[] = [
  {
    step: 1,
    tier: 'gray',
    title: 'Selected as Scout',
    registrations: null,
    badge: 'Journey Begins',
    rewards: [
      { emoji: '🏠', label: 'Private Community' },
      { emoji: '📦', label: 'Starter Kit' },
    ],
  },
  {
    step: 2,
    tier: 'blue',
    title: '25 Registrations',
    registrations: 25,
    rewards: [
      { emoji: '🎖️', label: 'Official Campus Ambassador' },
      { emoji: '👕', label: 'First Swag Drop' },
      { emoji: '🏆', label: 'Prize Challenge' },
    ],
  },
  {
    step: 3,
    tier: 'green',
    title: '50 Registrations',
    registrations: 50,
    rewards: [
      { emoji: '🎁', label: 'Exclusive Merchandise' },
      { emoji: '🎟️', label: 'Campus Event Grants' },
    ],
  },
  {
    step: 4,
    tier: 'purple',
    title: '75 Registrations',
    registrations: 75,
    rewards: [
      { emoji: '🧭', label: 'Mentorship Access' },
      { emoji: '🎟️', label: 'Campus Event Grants' },
    ],
  },
  {
    step: 5,
    tier: 'orange',
    title: '100 Registrations',
    registrations: 100,
    rewards: [
      { emoji: '💼', label: 'Paid Internship Opportunities' },
      { emoji: '🌟', label: 'Exclusive Ambassador Events' },
    ],
  },
  {
    step: 6,
    tier: 'gold',
    title: '200 Registrations',
    registrations: 200,
    badge: 'Legendary',
    rewards: [
      { emoji: '🚀', label: 'Founding Team Consideration' },
      { emoji: '👑', label: 'Elite Recognition' },
      { emoji: '🏅', label: 'Top Performer Badge' },
    ],
    isLegendary: true,
  },
]

const tierNodeColors: Record<Tier, string> = {
  gray: '#9CA3AF',
  blue: '#60A5FA',
  green: '#34D399',
  purple: '#A78BFA',
  orange: '#FB923C',
  gold: '#FBBF24',
}

function SpineNode({ tier, index }: { tier: Tier; index: number }) {
  const color = tierNodeColors[tier]
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay: index * 0.08, type: 'spring', stiffness: 200 }}
      className="relative flex items-center justify-center shrink-0"
      style={{ width: 48, height: 48 }}
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ scale: [1, 1.55, 1], opacity: [0.35, 0, 0.35] }}
        transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.3 }}
        style={{ background: color, borderRadius: '50%' }}
      />
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: `2px solid ${color}`, borderRadius: '50%', opacity: 0.4 }}
      />
      {/* Inner filled circle */}
      <div
        className="rounded-full flex items-center justify-center"
        style={{
          width: 28,
          height: 28,
          background: `radial-gradient(circle at 35% 35%, ${color}cc, ${color}88)`,
          boxShadow: `0 0 14px ${color}88`,
          fontSize: '11px',
          fontWeight: 700,
          color: '#09090B',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {index + 1}
      </div>
    </motion.div>
  )
}

export function RewardLadder() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', 'end center'] })
  const spineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={containerRef}
      style={{ background: '#09090B', fontFamily: "'Inter', system-ui, sans-serif" }}
      className="relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.12) 0%, transparent 65%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(251,191,36,0.06) 0%, transparent 55%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32">
        {/* Section header */}
        <div className="text-center mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.22)' }}
            >
              <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#A78BFA' }}>
                EYFI Ambassador Program
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
              }}
            >
              <span style={{ color: '#FAFAFA' }}>Climb the </span>
              <span
                style={{
                  background: 'linear-gradient(135deg, #A78BFA 0%, #6366F1 40%, #60A5FA 70%, #34D399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Reward Ladder
              </span>
              <span style={{ marginLeft: '12px' }}>🚀</span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: '#71717A',
                maxWidth: '560px',
                margin: '0 auto',
                lineHeight: 1.65,
              }}
            >
              Every student you inspire brings you closer to exclusive rewards, recognition and life-changing opportunities.
            </p>

            {/* Decorative gradient line */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12))' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(167,139,250,0.6)' }} />
              <div style={{ width: 120, height: 1, background: 'linear-gradient(to right, rgba(139,92,246,0.5), rgba(99,102,241,0.5), rgba(96,165,250,0.3), transparent)' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(96,165,250,0.6)' }} />
              <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.12))' }} />
            </div>
          </motion.div>
        </div>

        {/* Ladder layout */}
        {/* DESKTOP: alternating left/right with central spine */}
        <div className="hidden lg:block relative">
          {/* Spine track (background) */}
          <div
            className="absolute left-1/2 top-6 bottom-6 pointer-events-none"
            style={{ width: '2px', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.05)', zIndex: 0 }}
          />

          {/* Spine fill (scroll-linked) */}
          <div
            className="absolute left-1/2 top-6 pointer-events-none overflow-hidden"
            style={{ width: '2px', transform: 'translateX(-50%)', height: 'calc(100% - 3rem)', zIndex: 1 }}
          >
            <motion.div
              style={{
                height: spineHeight,
                background: 'linear-gradient(to bottom, #A78BFA, #6366F1, #60A5FA, #34D399, #FB923C, #FBBF24)',
                width: '100%',
              }}
            />
          </div>

          {/* Milestones */}
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={m.step} className="relative flex items-start mb-16 last:mb-0" style={{ zIndex: 2 }}>
                {/* Left column */}
                <div className="flex-1 flex justify-end pr-10">
                  {isLeft ? (
                    <div className="w-full max-w-[430px]">
                      <MilestoneCard {...m} />
                    </div>
                  ) : (
                    <div className="w-full max-w-[430px]" />
                  )}
                </div>

                {/* Central node */}
                <div className="flex items-start justify-center pt-7 shrink-0" style={{ width: '80px' }}>
                  <SpineNode tier={m.tier} index={i} />
                </div>

                {/* Right column */}
                <div className="flex-1 flex justify-start pl-10">
                  {!isLeft ? (
                    <div className="w-full max-w-[430px]">
                      <MilestoneCard {...m} />
                    </div>
                  ) : (
                    <div className="w-full max-w-[430px]" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* MOBILE/TABLET: single column with left-side spine */}
        <div className="lg:hidden relative">
          {/* Spine track */}
          <div
            className="absolute top-6 bottom-6 pointer-events-none"
            style={{ left: '23px', width: '2px', background: 'rgba(255,255,255,0.05)', zIndex: 0 }}
          />

          {/* Spine fill */}
          <div
            className="absolute top-6 pointer-events-none overflow-hidden"
            style={{ left: '23px', width: '2px', height: 'calc(100% - 3rem)', zIndex: 1 }}
          >
            <motion.div
              style={{
                height: spineHeight,
                background: 'linear-gradient(to bottom, #A78BFA, #6366F1, #60A5FA, #34D399, #FB923C, #FBBF24)',
                width: '100%',
              }}
            />
          </div>

          {milestones.map((m, i) => (
            <div key={m.step} className="relative flex items-start gap-4 mb-10 last:mb-0" style={{ zIndex: 2 }}>
              <div className="shrink-0 pt-7" style={{ width: '48px' }}>
                <SpineNode tier={m.tier} index={i} />
              </div>
              <div className="flex-1 min-w-0">
                <MilestoneCard {...m} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
