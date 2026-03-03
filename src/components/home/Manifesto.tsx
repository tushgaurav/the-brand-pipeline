import { useInView } from '../../hooks/useInView'
import { fonts, colors } from '../../constants/styles'

const manifesto = [
  { text: 'Brands are not logos.', align: 'left' as const },
  { text: 'They are living systems.', align: 'right' as const },
  { text: 'We build the whole machine.', align: 'left' as const },
  { text: 'Not just the paint job.', align: 'right' as const },
]

export default function Manifesto() {
  const manifestoAnim = useInView(0.1)

  return (
    <section ref={manifestoAnim.ref} className="relative py-24 px-6 md:px-16 overflow-hidden" style={{ background: colors.dark, borderBottom: '3px solid var(--accent)' }}>
      {/* Large decorative number */}
      <div className="absolute -right-8 top-8 pointer-events-none select-none" style={{
        fontFamily: fonts.bebas,
        fontSize: 'clamp(15rem, 40vw, 45rem)',
        lineHeight: 0.8,
        color: 'rgba(245,240,235,0.02)',
      }}>03</div>

      <span style={{
        fontFamily: fonts.spaceMono, fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)',
        display: 'block', marginBottom: '3rem',
      }}>MANIFESTO</span>
      {manifesto.map((line, i) => (
        <div key={i} style={{
          textAlign: line.align,
          opacity: manifestoAnim.visible ? 1 : 0,
          transform: manifestoAnim.visible ? 'translateX(0)' : `translateX(${line.align === 'left' ? '-60px' : '60px'})`,
          transition: `all 0.8s cubic-bezier(0.23,1,0.32,1) ${i * 0.15}s`,
        }}>
          <span style={{
            fontFamily: fonts.bebas,
            fontSize: 'clamp(2.5rem, 8vw, 7rem)',
            lineHeight: 1.1,
            color: colors.cream,
            display: 'inline',
          }}>
            {line.text}
          </span>
        </div>
      ))}
      <div className="mt-12 flex items-start gap-6" style={{
        opacity: manifestoAnim.visible ? 1 : 0,
        transition: 'opacity 0.6s 0.8s',
      }}>
        <div style={{ width: '40px', height: '2px', background: 'var(--accent)', marginTop: '12px', flexShrink: 0 }} />
        <p style={{ fontFamily: fonts.dmSerif, fontStyle: 'italic', fontSize: '1.1rem', color: 'rgba(245,240,235,0.4)', maxWidth: '500px' }}>
          Every touchpoint is a chance to mean something. We make sure you never waste one.
        </p>
      </div>
    </section>
  )
}
