import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const servicesList = [
  { id: '001', title: 'Brand Identity & Strategy', detail: 'Naming, logos, visual systems, positioning, and brand architecture for companies that refuse to blend in.' },
  { id: '002', title: 'Digital Design & Development', detail: 'Websites, apps, and digital platforms built with obsessive attention to craft and performance.' },
  { id: '003', title: 'Video & Film Production', detail: 'Commercials, brand films, social content, and motion design. From script to final grade.' },
  { id: '004', title: 'Event Design & Activation', detail: 'Launch events, trade shows, pop-ups, and immersive brand experiences that people actually remember.' },
  { id: '005', title: 'Social Media Management', detail: 'Content strategy, community building, paid campaigns, and analytics. Every platform, every format.' },
  { id: '006', title: 'Print & Packaging', detail: 'Editorial design, packaging systems, out-of-home, and everything that exists in physical space.' },
]

const manifesto = [
  { text: 'Brands are not logos.', align: 'left' as const },
  { text: 'They are living systems.', align: 'right' as const },
  { text: 'We build the whole machine.', align: 'left' as const },
  { text: 'Not just the paint job.', align: 'right' as const },
]

const statsData = [
  { number: '247', label: 'PROJECTS' },
  { number: '58', label: 'BRANDS' },
  { number: '14', label: 'AWARDS' },
]

export default function Design2() {
  const [loaded, setLoaded] = useState(false)
  const servicesAnim = useInView(0.05)
  const manifestoAnim = useInView(0.1)
  const statsAnim = useInView(0.1)
  const ctaAnim = useInView(0.15)

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap'
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150)
    return () => clearTimeout(t)
  }, [])

  const diagonalStripes = `repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 8px,
    rgba(17,17,17,0.04) 8px,
    rgba(17,17,17,0.04) 9px
  )`

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", background: '#F5F0EB', color: '#111', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @keyframes slideUp { from { opacity:0; transform:translateY(60px); } to { opacity:1; transform:translateY(0); } }
        @keyframes expandLine { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes slideIn { from { opacity:0; transform:translateX(-40px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slideInR { from { opacity:0; transform:translateX(40px); } to { opacity:1; transform:translateX(0); } }
        .svc-row { border-bottom: 3px solid #111; transition: all 0.35s cubic-bezier(0.23,1,0.32,1); cursor: pointer; }
        .svc-row:hover { padding-left: 2rem; background: #111; color: #F5F0EB; }
        .svc-row:hover .svc-id { color: #FF2D2D; }
        .svc-row:hover .svc-detail { color: rgba(245,240,235,0.6); }
        .svc-row .svc-title { transition: transform 0.35s cubic-bezier(0.23,1,0.32,1); }
        .svc-row:hover .svc-title { transform: skewX(-3deg); }
        .brutal-link { position:relative; text-decoration:none; color:#111; transition: color 0.2s; }
        .brutal-link:hover { color: #FF2D2D; }
        .brutal-link::after { content:''; position:absolute; bottom:-2px; left:0; width:100%; height:2px; background:#FF2D2D; transform:scaleX(0); transition:transform 0.3s; transform-origin:left; }
        .brutal-link:hover::after { transform:scaleX(1); }
      `}</style>

      {/* TOPBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between" style={{
        padding: '1rem 2rem',
        background: 'rgba(245,240,235,0.9)',
        backdropFilter: 'blur(6px)',
        borderBottom: '2px solid #111',
      }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          TBP<span style={{ color: '#FF2D2D' }}>®</span>
        </span>
        <nav className="flex gap-8">
          {['Index', 'Services', 'Manifesto', 'Contact'].map(item => (
            <a key={item} href="#" className="brutal-link" style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{item}</a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-28 pb-16 px-6" style={{ borderBottom: '3px solid #111' }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(17,17,17,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        <div className="relative z-10">
          <div className="flex items-end gap-4 mb-0" style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.23,1,0.32,1) 0.2s',
          }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.2em', color: '#FF2D2D' }}>EST. 2020</span>
            <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontStyle: 'italic', color: '#111', lineHeight: 1 }}>The Brand</span>
          </div>

          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(5rem, 18vw, 22rem)',
            lineHeight: 0.85,
            letterSpacing: '-0.02em',
            color: '#111',
            margin: 0,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(80px)',
            transition: 'all 0.9s cubic-bezier(0.23,1,0.32,1) 0.3s',
          }}>
            PIPELINE
          </h1>

          <div className="mt-6 flex items-start justify-between flex-wrap gap-8" style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.8s 0.8s',
          }}>
            <p className="max-w-md" style={{
              fontFamily: "'DM Serif Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
              lineHeight: 1.5,
              color: 'rgba(17,17,17,0.7)',
            }}>
              We don't decorate brands.<br />
              We <span style={{ color: '#FF2D2D', textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>engineer</span> them from the inside out.
            </p>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)' }}>
              Design / Dev / Video<br />Events / Social / Print
            </div>
          </div>
        </div>

        {/* Red accent bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, width: loaded ? '30%' : '0%', height: '3px', background: '#FF2D2D',
          transition: 'width 1.2s cubic-bezier(0.23,1,0.32,1) 0.5s',
        }} />
      </section>

      {/* HALFTONE DIVIDER */}
      <div className="w-full py-12" style={{
        background: diagonalStripes,
        borderBottom: '3px solid #111',
      }}>
        <div className="flex justify-center">
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(17,17,17,0.3)' }}>
            ▼ FULL-SPECTRUM CREATIVE STUDIO ▼
          </span>
        </div>
      </div>

      {/* SERVICES */}
      <section ref={servicesAnim.ref} className="relative" style={{ borderBottom: '3px solid #111' }}>
        <div className="flex flex-col md:flex-row">
          {/* Left label column */}
          <div className="md:w-1/4 p-8 flex flex-col justify-between" style={{ borderRight: '3px solid #111', minHeight: '200px' }}>
            <div style={{
              opacity: servicesAnim.visible ? 1 : 0,
              transition: 'opacity 0.6s 0.1s',
            }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.2em', color: '#FF2D2D' }}>SECTION 02</span>
              <h2 className="mt-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.9, color: '#111' }}>WHAT<br />WE<br />DO</h2>
            </div>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'rgba(17,17,17,0.3)', letterSpacing: '0.1em' }}>[6] SERVICES</span>
          </div>

          {/* Right services list */}
          <div className="md:w-3/4">
            {servicesList.map((svc, i) => (
              <div key={svc.id} className="svc-row py-6 px-8 flex items-baseline gap-6" style={{
                opacity: servicesAnim.visible ? 1 : 0,
                transform: servicesAnim.visible ? 'translateX(0)' : 'translateX(-30px)',
                transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s`,
              }}>
                <span className="svc-id shrink-0" style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#FF2D2D', letterSpacing: '0.1em' }}>{svc.id}</span>
                <div className="flex-1">
                  <div className="svc-title text-xl md:text-2xl font-bold" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, letterSpacing: '-0.01em' }}>{svc.title}</div>
                  <p className="svc-detail mt-1 text-xs" style={{ fontFamily: "'Space Mono', monospace", color: 'rgba(17,17,17,0.4)', lineHeight: 1.6 }}>{svc.detail}</p>
                </div>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: 'rgba(17,17,17,0.1)' }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section ref={manifestoAnim.ref} className="relative py-24 px-6 md:px-16" style={{ background: '#111', borderBottom: '3px solid #FF2D2D' }}>
        <span style={{
          fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.3em', color: '#FF2D2D',
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
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(2.5rem, 8vw, 7rem)',
              lineHeight: 1.1,
              color: '#F5F0EB',
              display: 'inline',
            }}>
              {line.text}
            </span>
          </div>
        ))}
        <div className="mt-12" style={{
          opacity: manifestoAnim.visible ? 1 : 0,
          transition: 'opacity 0.6s 0.8s',
        }}>
          <p style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: '1.1rem', color: 'rgba(245,240,235,0.4)', maxWidth: '500px' }}>
            Every touchpoint is a chance to mean something. We make sure you never waste one.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsAnim.ref} className="relative py-20 px-6 md:px-16" style={{ borderBottom: '3px solid #111' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {statsData.map((stat, i) => (
            <div key={stat.label} className="relative py-12 text-center" style={{
              borderRight: i < 2 ? '3px solid rgba(17,17,17,0.1)' : 'none',
              opacity: statsAnim.visible ? 1 : 0,
              transform: statsAnim.visible ? 'translateY(0)' : 'translateY(40px)',
              transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 0.15}s`,
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(6rem, 18vw, 14rem)',
                lineHeight: 0.8,
                color: 'rgba(17,17,17,0.07)',
                position: 'relative',
                zIndex: 0,
              }}>
                {stat.number}
              </div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '11px',
                letterSpacing: '0.3em',
                color: '#FF2D2D',
                marginTop: '-2rem',
                position: 'relative',
                zIndex: 1,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL STRIP */}
      <section className="py-16 px-6 md:px-16" style={{ background: '#FF2D2D', borderBottom: '3px solid #111' }}>
        <div className="max-w-4xl mx-auto text-center">
          <blockquote style={{
            fontFamily: "'DM Serif Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            lineHeight: 1.6,
            color: '#F5F0EB',
          }}>
            "They approached our brand like surgeons — precise, deliberate, and absolutely uncompromising. The result was something we couldn't have imagined."
          </blockquote>
          <div className="mt-6" style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(245,240,235,0.7)' }}>
            — DIRECTOR OF MARKETING, VOLTERA INC.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaAnim.ref} className="relative py-32 px-6 text-center" style={{
        background: '#F5F0EB',
        borderBottom: '3px solid #111',
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
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 10vw, 9rem)', lineHeight: 0.9, color: '#111' }}>
            LET'S WORK<span style={{ color: '#FF2D2D' }}>.</span>
          </h2>
          <p className="mt-6 max-w-md mx-auto" style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: '1.1rem', color: 'rgba(17,17,17,0.5)' }}>
            Your brand deserves more than templates and trends. It deserves a pipeline.
          </p>
          <button className="mt-10 px-14 py-5 text-sm tracking-widest uppercase font-bold cursor-pointer" style={{
            fontFamily: "'Space Mono', monospace",
            background: '#111',
            color: '#F5F0EB',
            border: '3px solid #111',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FF2D2D'; e.currentTarget.style.borderColor = '#FF2D2D' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.borderColor = '#111' }}
          >
            Start a Project →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative px-6 md:px-16 py-16" style={{ background: '#111', color: '#F5F0EB' }}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
          {/* Giant copyright */}
          <div className="col-span-2 md:col-span-1">
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '8rem', lineHeight: 0.8, color: 'rgba(245,240,235,0.06)' }}>©</div>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(245,240,235,0.3)' }}>2026 TBP</span>
          </div>
          {[
            { heading: 'Services', items: ['Branding', 'Digital', 'Video', 'Events', 'Social'] },
            { heading: 'Company', items: ['About', 'Careers', 'Process', 'Press'] },
            { heading: 'Social', items: ['Instagram', 'LinkedIn', 'X / Twitter', 'Behance'] },
            { heading: 'Contact', items: ['hello@tbp.co', '+1 555 987 6543', 'New York, NY'] },
          ].map(col => (
            <div key={col.heading}>
              <h4 style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.25em', color: '#FF2D2D', marginBottom: '1rem', textTransform: 'uppercase' }}>{col.heading}</h4>
              {col.items.map(item => (
                <a key={item} href="#" className="block mb-2 transition-colors duration-200 hover:text-red-400" style={{ fontFamily: "'Syne', sans-serif", fontSize: '12px', color: 'rgba(245,240,235,0.4)', textDecoration: 'none' }}>{item}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-16 pt-6 flex justify-between items-center" style={{ borderTop: '1px solid rgba(245,240,235,0.1)' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(245,240,235,0.2)' }}>THE BRAND PIPELINE®</span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(245,240,235,0.2)' }}>ALL RIGHTS RESERVED</span>
        </div>
      </footer>
    </div>
  )
}
