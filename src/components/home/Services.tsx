import { useInView } from '../../hooks/useInView'
import { fonts, colors, diagonalStripes } from '../../constants/styles'

const servicesList = [
  { id: '001', title: 'Brand Identity & Strategy', detail: 'Naming, logos, visual systems, positioning, and brand architecture for companies that refuse to blend in.' },
  { id: '002', title: 'Digital Design & Development', detail: 'Websites, apps, and digital platforms built with obsessive attention to craft and performance.' },
  { id: '003', title: 'Video & Film Production', detail: 'Commercials, brand films, social content, and motion design. From script to final grade.' },
  { id: '004', title: 'Event Design & Activation', detail: 'Launch events, trade shows, pop-ups, and immersive brand experiences that people actually remember.' },
  { id: '005', title: 'Social Media Management', detail: 'Content strategy, community building, paid campaigns, and analytics. Every platform, every format.' },
  { id: '006', title: 'Print & Packaging', detail: 'Editorial design, packaging systems, out-of-home, and everything that exists in physical space.' },
]

export default function Services() {
  const servicesAnim = useInView(0.05)

  return (
    <>
      {/* HALFTONE DIVIDER */}
      <div className="w-full py-12" style={{
        background: diagonalStripes,
        borderBottom: `3px solid ${colors.dark}`,
      }}>
        <div className="flex justify-center items-center gap-6">
          <div style={{ width: '40px', height: '2px', background: 'var(--accent)' }} />
          <span style={{ fontFamily: fonts.spaceMono, fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(17,17,17,0.3)' }}>
            FULL-SPECTRUM CREATIVE STUDIO
          </span>
          <div style={{ width: '40px', height: '2px', background: 'var(--accent)' }} />
        </div>
      </div>

      {/* SERVICES */}
      <section ref={servicesAnim.ref} className="relative" style={{ borderBottom: `3px solid ${colors.dark}` }}>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 p-8 flex flex-col justify-between" style={{ borderRight: `3px solid ${colors.dark}`, minHeight: '200px' }}>
            <div style={{
              opacity: servicesAnim.visible ? 1 : 0,
              transition: 'opacity 0.6s 0.1s',
            }}>
              <span style={{ fontFamily: fonts.spaceMono, fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent)', background: colors.dark, padding: '4px 10px', display: 'inline-block' }}>SECTION 02</span>
              <h2 className="mt-4" style={{ fontFamily: fonts.bebas, fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.9, color: colors.dark }}>WHAT<br />WE<br />DO</h2>
            </div>
            <span style={{ fontFamily: fonts.spaceMono, fontSize: '9px', color: 'rgba(17,17,17,0.3)', letterSpacing: '0.1em' }}>[6] SERVICES</span>
          </div>

          <div className="md:w-3/4">
            {servicesList.map((svc, i) => (
              <div key={svc.id} className="svc-row py-6 px-8 flex items-baseline gap-6" style={{
                opacity: servicesAnim.visible ? 1 : 0,
                transform: servicesAnim.visible ? 'translateX(0)' : 'translateX(-30px)',
                transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s`,
              }}>
                <span className="svc-id shrink-0" style={{ fontFamily: fonts.spaceMono, fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em' }}>{svc.id}</span>
                <div className="flex-1">
                  <div className="svc-title text-xl md:text-2xl font-bold" style={{ fontFamily: fonts.syne, fontWeight: 800, letterSpacing: '-0.01em' }}>{svc.title}</div>
                  <p className="svc-detail mt-1 text-xs" style={{ fontFamily: fonts.spaceMono, color: 'rgba(17,17,17,0.4)', lineHeight: 1.6 }}>{svc.detail}</p>
                </div>
                <span style={{ fontFamily: fonts.bebas, fontSize: '1.5rem', color: 'rgba(17,17,17,0.1)' }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
