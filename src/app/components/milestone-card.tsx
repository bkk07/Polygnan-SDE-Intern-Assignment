import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, Compass, BadgeCheck, Gift, Rocket, Trophy, Crown, Sparkles } from 'lucide-react'

export type Tier = 'gray' | 'blue' | 'green' | 'purple' | 'orange' | 'gold'

const tierStyles: Record<Tier, {
  color: string
  glow: string
  hoverGlow: string
  border: string
  cardBg: string
  iconBg: string
  badgeBg: string
  label: string
}> = {
  gray: {
    color: '#9CA3AF',
    glow: 'rgba(156, 163, 175, 0.18)',
    hoverGlow: 'rgba(156, 163, 175, 0.38)',
    border: 'rgba(156, 163, 175, 0.22)',
    cardBg: 'rgba(156, 163, 175, 0.035)',
    iconBg: 'rgba(156, 163, 175, 0.14)',
    badgeBg: 'rgba(156, 163, 175, 0.12)',
    label: 'Scout',
  },
  blue: {
    color: '#60A5FA',
    glow: 'rgba(96, 165, 250, 0.2)',
    hoverGlow: 'rgba(96, 165, 250, 0.42)',
    border: 'rgba(96, 165, 250, 0.28)',
    cardBg: 'rgba(96, 165, 250, 0.04)',
    iconBg: 'rgba(96, 165, 250, 0.14)',
    badgeBg: 'rgba(96, 165, 250, 0.12)',
    label: 'Envoy',
  },
  green: {
    color: '#34D399',
    glow: 'rgba(52, 211, 153, 0.2)',
    hoverGlow: 'rgba(52, 211, 153, 0.42)',
    border: 'rgba(52, 211, 153, 0.28)',
    cardBg: 'rgba(52, 211, 153, 0.04)',
    iconBg: 'rgba(52, 211, 153, 0.14)',
    badgeBg: 'rgba(52, 211, 153, 0.12)',
    label: 'Advocate',
  },
  purple: {
    color: '#A78BFA',
    glow: 'rgba(167, 139, 250, 0.22)',
    hoverGlow: 'rgba(167, 139, 250, 0.48)',
    border: 'rgba(167, 139, 250, 0.32)',
    cardBg: 'rgba(167, 139, 250, 0.045)',
    iconBg: 'rgba(167, 139, 250, 0.15)',
    badgeBg: 'rgba(167, 139, 250, 0.12)',
    label: 'Champion',
  },
  orange: {
    color: '#FB923C',
    glow: 'rgba(251, 146, 60, 0.22)',
    hoverGlow: 'rgba(251, 146, 60, 0.48)',
    border: 'rgba(251, 146, 60, 0.32)',
    cardBg: 'rgba(251, 146, 60, 0.045)',
    iconBg: 'rgba(251, 146, 60, 0.15)',
    badgeBg: 'rgba(251, 146, 60, 0.12)',
    label: 'Leader',
  },
  gold: {
    color: '#FBBF24',
    glow: 'rgba(251, 191, 36, 0.3)',
    hoverGlow: 'rgba(251, 191, 36, 0.6)',
    border: 'rgba(251, 191, 36, 0.45)',
    cardBg: 'rgba(251, 191, 36, 0.055)',
    iconBg: 'rgba(251, 191, 36, 0.18)',
    badgeBg: 'rgba(251, 191, 36, 0.14)',
    label: 'Legend',
  },
}

const tierIcons: Record<Tier, React.ReactNode> = {
  gray: <Compass size={22} />,
  blue: <BadgeCheck size={22} />,
  green: <Gift size={22} />,
  purple: <Rocket size={22} />,
  orange: <Trophy size={22} />,
  gold: <Crown size={22} />,
}

interface Reward {
  emoji: string
  label: string
}

export interface MilestoneCardProps {
  step: number
  tier: Tier
  title: string
  registrations: number | null
  badge?: string
  rewards: Reward[]
  isLegendary?: boolean
}

function GoldSparkle({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={style}
      animate={{ opacity: [0, 1, 0], scale: [0.6, 1.2, 0.6] }}
      transition={{ duration: 2.4, repeat: Infinity, repeatDelay: Math.random() * 2 }}
    >
      <Sparkles size={10} style={{ color: '#FBBF24' }} />
    </motion.div>
  )
}

export function MilestoneCard({ step, tier, title, registrations, badge, rewards, isLegendary }: MilestoneCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)
  const s = tierStyles[tier]
  const icon = tierIcons[tier]

  const boxShadow = hovered
    ? `0 0 ${isLegendary ? 90 : 55}px ${s.hoverGlow}, 0 32px 80px rgba(0,0,0,0.65), inset 0 0 0 1px ${s.border}`
    : `0 0 ${isLegendary ? 45 : 22}px ${s.glow}, 0 20px 60px rgba(0,0,0,0.5), inset 0 0 0 1px ${s.border}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      animate={{ scale: hovered ? 1.03 : 1, y: hovered ? -7 : 0 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => setExpanded(v => !v)}
      style={{
        background: isLegendary
          ? `linear-gradient(135deg, rgba(251,191,36,0.07), rgba(245,158,11,0.04), rgba(251,191,36,0.06))`
          : s.cardBg,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow,
        borderRadius: '24px',
        transition: 'box-shadow 0.22s ease',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
      className="relative cursor-pointer overflow-hidden w-full"
    >
      {/* Gold shimmer overlay */}
      {isLegendary && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ borderRadius: '24px', zIndex: 0 }}
          animate={{ backgroundPosition: ['200% center', '-200% center'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          initial={{ backgroundPosition: '200% center' }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(105deg, transparent 30%, rgba(251,191,36,0.06) 50%, transparent 70%)',
              backgroundSize: '300% 100%',
              borderRadius: '24px',
            }}
          />
        </motion.div>
      )}

      {/* Gold sparkles */}
      {isLegendary && (
        <>
          <GoldSparkle style={{ top: '12%', right: '8%' }} />
          <GoldSparkle style={{ top: '65%', right: '12%' }} />
          <GoldSparkle style={{ top: '30%', right: '20%' }} />
          <GoldSparkle style={{ bottom: '18%', left: '8%' }} />
        </>
      )}

      <div className="relative z-10 p-7 lg:p-8">
        {/* Top row: step badge + tier label */}
        <div className="flex items-center justify-between mb-5">
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ background: s.badgeBg, border: `1px solid ${s.border}` }}
          >
            <span style={{ color: s.color, fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>
              {s.label}
            </span>
          </div>

          {badge && (
            <span style={{ color: s.color, fontSize: '11px', fontWeight: 500, opacity: 0.75 }}>
              {badge}
            </span>
          )}

          {/* Expand chevron */}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.22 }}
            style={{ color: s.color, opacity: 0.6 }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </div>

        {/* Icon + Title row */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: isLegendary ? 52 : 46,
              height: isLegendary ? 52 : 46,
              borderRadius: '14px',
              background: s.iconBg,
              border: `1.5px solid ${s.border}`,
              color: s.color,
              boxShadow: `0 0 16px ${s.glow}`,
            }}
          >
            {icon}
          </div>
          <div>
            <h3
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: isLegendary ? '1.35rem' : '1.15rem',
                fontWeight: 700,
                color: isLegendary ? s.color : '#F4F4F5',
                lineHeight: 1.25,
                marginBottom: '4px',
              }}
            >
              {title}
            </h3>
            <p style={{ fontSize: '12.5px', color: '#52525B', fontWeight: 500 }}>
              {registrations === null ? 'Join as Campus Ambassador' : `${registrations.toLocaleString()} registrations needed`}
            </p>
          </div>
        </div>

        {/* Step number */}
        <div className="flex items-center gap-2 mb-2">
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#3F3F46',
            }}
          >
            MILESTONE {step} OF 6
          </span>
          <div className="flex gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 18,
                  height: 3,
                  borderRadius: 99,
                  background: i < step ? s.color : 'rgba(255,255,255,0.08)',
                  transition: 'background 0.3s',
                }}
              />
            ))}
          </div>
        </div>

        {/* Expandable rewards */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ paddingTop: '18px' }}>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#52525B', marginBottom: '10px' }}>
                  UNLOCKS
                </p>
                <div className="flex flex-wrap gap-2">
                  {rewards.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.85, y: 6 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.22 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                      style={{
                        background: s.badgeBg,
                        border: `1px solid ${s.border}`,
                        fontSize: '12.5px',
                        color: '#D4D4D8',
                        fontWeight: 500,
                      }}
                    >
                      <span>{r.emoji}</span>
                      <span>{r.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!expanded && (
          <p style={{ fontSize: '11.5px', color: '#3F3F46', marginTop: '6px', fontWeight: 500 }}>
            Tap to reveal rewards →
          </p>
        )}
      </div>
    </motion.div>
  )
}
