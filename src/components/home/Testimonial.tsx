import { fonts, colors } from '../../constants/styles'

export default function Testimonial() {
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden" style={{ background: colors.dark, borderBottom: '3px solid var(--accent)' }}>
      {/* Large decorative quote mark */}
      <div className="absolute -left-4 -top-8 pointer-events-none select-none" style={{
        fontFamily: fonts.bebas,
        fontSize: 'clamp(12rem, 30vw, 30rem)',
        lineHeight: 0.8,
        color: 'color-mix(in srgb, var(--accent) 5%, transparent)',
      }}>"</div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div style={{ marginBottom: '2rem' }}>
          <span style={{
            fontFamily: fonts.spaceMono,
            fontSize: '9px',
            letterSpacing: '0.3em',
            color: 'var(--accent)',
          }}>WHAT OUR CLIENTS SAY</span>
        </div>
        <blockquote style={{
          fontFamily: fonts.dmSerif,
          fontStyle: 'italic',
          fontSize: 'clamp(1.3rem, 3vw, 2.2rem)',
          lineHeight: 1.6,
          color: colors.cream,
        }}>
          "They approached our brand like surgeons — precise, deliberate, and absolutely uncompromising. The result was something we couldn't have imagined."
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div style={{ width: '10px', height: '2px', background: 'var(--accent)' }} />
          <span style={{ fontFamily: fonts.spaceMono, fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(245,240,235,0.5)' }}>
            DIRECTOR OF MARKETING, PROKITS DIGITAL.
          </span>
          <div style={{ width: '10px', height: '2px', background: 'var(--accent)' }} />
        </div>
      </div>
    </section>
  )
}
