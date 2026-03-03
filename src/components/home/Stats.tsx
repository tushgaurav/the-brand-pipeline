import { useInView } from '../../hooks/useInView'
import { fonts, colors } from '../../constants/styles'

const statsData = [
  { number: '247', label: 'PROJECTS', suffix: '+' },
  { number: '58', label: 'BRANDS', suffix: '' },
  { number: '14', label: 'AWARDS', suffix: '' },
]

export default function Stats() {
  const statsAnim = useInView(0.1)

  return (
    <section ref={statsAnim.ref} className="relative py-20 px-6 md:px-16" style={{ borderBottom: `3px solid ${colors.dark}` }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {statsData.map((stat, i) => (
          <div key={stat.label} className="relative py-12 text-center" style={{
            borderRight: i < 2 ? '3px solid rgba(17,17,17,0.1)' : 'none',
            opacity: statsAnim.visible ? 1 : 0,
            transform: statsAnim.visible ? 'translateY(0)' : 'translateY(40px)',
            transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 0.15}s`,
          }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{
                fontFamily: fonts.bebas,
                fontSize: 'clamp(6rem, 18vw, 14rem)',
                lineHeight: 0.8,
                color: 'rgba(17,17,17,0.07)',
                position: 'relative',
                zIndex: 0,
              }}>
                {stat.number}{stat.suffix}
              </div>
              <div style={{
                position: 'absolute',
                bottom: '0.5rem',
                left: '10%',
                width: '80%',
                height: '3px',
                background: 'color-mix(in srgb, var(--accent) 30%, transparent)',
              }} />
            </div>
            <div style={{
              fontFamily: fonts.spaceMono,
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: 'var(--accent)',
              marginTop: '-1.5rem',
              position: 'relative',
              zIndex: 1,
              background: colors.dark,
              display: 'inline-block',
              padding: '4px 12px',
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
