import { useInView } from '../../hooks/useInView'
import { fonts, colors } from '../../constants/styles'

export default function CTA() {
  const ctaAnim = useInView(0.15)

  return (
    <section ref={ctaAnim.ref} className="relative py-32 px-6 text-center" style={{
      background: colors.cream,
      borderBottom: `3px solid ${colors.dark}`,
    }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(17,17,17,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div className="relative z-10" style={{
        opacity: ctaAnim.visible ? 1 : 0,
        transform: ctaAnim.visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1)',
      }}>
        <h2 style={{ fontFamily: fonts.bebas, fontSize: 'clamp(3rem, 10vw, 9rem)', lineHeight: 0.9, color: colors.dark }}>
          LET'S WORK<span style={{ color: 'var(--accent)' }}>.</span>
        </h2>
        <p className="mt-6 max-w-md mx-auto" style={{ fontFamily: fonts.dmSerif, fontStyle: 'italic', fontSize: '1.1rem', color: 'rgba(17,17,17,0.5)' }}>
          Your brand deserves more than templates and trends. It deserves a pipeline.
        </p>
        <button className="mt-10 px-14 py-5 text-sm tracking-widest uppercase font-bold cursor-pointer" style={{
          fontFamily: fonts.spaceMono,
          background: colors.dark,
          color: colors.cream,
          border: `3px solid ${colors.dark}`,
          transition: 'all 0.3s',
        }}
          onMouseEnter={e => {
            const accent = getComputedStyle(e.currentTarget).getPropertyValue('--accent').trim() || '#CDEA68'
            e.currentTarget.style.background = accent
            e.currentTarget.style.borderColor = accent
            e.currentTarget.style.color = colors.dark
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = colors.dark
            e.currentTarget.style.borderColor = colors.dark
            e.currentTarget.style.color = colors.cream
          }}
        >
          Start a Project →
        </button>
      </div>
    </section>
  )
}
