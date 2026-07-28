import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTASection() {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #09090B 0%, #0D0B14 40%, #09090B 100%)',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
      className="relative overflow-hidden"
    >
      {/* Radial glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(139,92,246,0.14) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)',
        }}
      />

      {/* Subtle bokeh blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)',
          top: '-80px',
          left: '-100px',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 65%)',
          bottom: '-60px',
          right: '-80px',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 lg:py-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}
          >
            <Sparkles size={13} style={{ color: '#FBBF24' }} />
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FBBF24' }}>
              Your Journey Awaits
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              marginBottom: '22px',
              color: '#FAFAFA',
            }}
          >
            Ready to Start Your{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #6366F1, #60A5FA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Journey?
            </span>
          </h2>

          {/* Subtext */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
              color: '#71717A',
              maxWidth: '480px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}
          >
            Join thousands of ambitious students earning their first income. Your 30-day challenge starts today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary button */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #6366F1)',
                color: '#FAFAFA',
                border: 'none',
                borderRadius: '14px',
                padding: '14px 30px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 0 36px rgba(124,58,237,0.38), 0 8px 32px rgba(0,0,0,0.4)',
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: '-0.01em',
              }}
            >
              Become a Campus Ambassador
              <ArrowRight size={16} />
            </motion.button>

            {/* Secondary button */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                color: '#D4D4D8',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '14px',
                padding: '14px 30px',
                fontSize: '15px',
                fontWeight: 500,
                cursor: 'pointer',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: '-0.01em',
              }}
            >
              Learn More
            </motion.button>
          </div>

          {/* Social proof line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3 mt-12"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              {['#7C3AED', '#6366F1', '#60A5FA', '#34D399'].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: `radial-gradient(circle at 35% 35%, ${c}cc, ${c}88)`,
                    border: '2px solid #09090B',
                    zIndex: 4 - i,
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: '13px', color: '#52525B', fontWeight: 500 }}>
              <span style={{ color: '#A78BFA', fontWeight: 600 }}>2,400+</span> ambassadors across India
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }}
      />
    </section>
  )
}
