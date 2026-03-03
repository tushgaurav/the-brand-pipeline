import { useInView } from '../hooks/useInView'
import { fonts, colors, diagonalStripes } from '../constants/styles'
import PageHeader from '../components/PageHeader'

const steps = [
  {
    num: '01',
    title: 'DISCOVERY & RESEARCH',
    tagline: 'Before we create, we listen.',
    description: 'Deep immersion into your market, competitors, stakeholders, and audience. No assumptions — only discoveries. This builds the foundation everything stands on.',
    details: ['Stakeholder Interviews', 'Market Analysis', 'Brand Audit', 'Trend Mapping'],
    duration: '1–2 WKS',
  },
  {
    num: '02',
    title: 'STRATEGY & PLANNING',
    tagline: 'Ideas without strategy are just art projects.',
    description: 'Translating insights into action. Positioning, messaging, creative briefs, channel strategies, technical architecture. Chaos becomes clarity.',
    details: ['Brand Positioning', 'Creative Brief', 'Architecture', 'Roadmap'],
    duration: '1–2 WKS',
  },
  {
    num: '03',
    title: 'CREATIVE DEVELOPMENT',
    tagline: 'Where the magic gets made.',
    description: 'Multiple creative directions explored, boundaries pushed, conventions broken, then refined obsessively. Every idea stress-tested against strategy.',
    details: ['Concepts', 'Moodboards', 'Wireframes', 'Prototypes'],
    duration: '2–3 WKS',
  },
  {
    num: '04',
    title: 'DESIGN & PRODUCTION',
    tagline: 'Pixel by pixel. Frame by frame.',
    description: 'Full-fidelity execution. Designers craft every asset. Developers write clean code. Videographers capture footage. Quality isn\'t negotiable.',
    details: ['Visual Design', 'Development', 'Video Production', 'QA'],
    duration: '3–6 WKS',
  },
  {
    num: '05',
    title: 'LAUNCH & DEPLOYMENT',
    tagline: 'The world meets your brand.',
    description: 'A symphony, not a switch flip. Coordinated across every channel — web, social, press, campaigns. Real-time monitoring. Ready to optimize on the fly.',
    details: ['Deployment', 'Campaign Launch', 'Cross-Channel', 'Monitoring'],
    duration: '1 WK',
  },
  {
    num: '06',
    title: 'ANALYSIS & OPTIMIZATION',
    tagline: 'Great work never stops getting better.',
    description: 'Track performance, measure KPIs, gather feedback, identify optimizations. Monthly reports, A/B tests, strategic pivots. This separates campaigns from systems.',
    details: ['Analytics', 'KPI Tracking', 'A/B Testing', 'Optimization'],
    duration: 'ONGOING',
  },
]

function StepRow({ step, index }: { step: typeof steps[0]; index: number }) {
  const anim = useInView(0.08)
  const isEven = index % 2 === 0

  return (
    <div ref={anim.ref} style={{
      background: isEven ? 'transparent' : colors.dark,
      color: isEven ? colors.dark : colors.cream,
      borderBottom: `3px solid ${isEven ? colors.dark : 'var(--accent)'}`,
    }}>
      <div className="flex flex-col md:flex-row">
        {/* Left: number + title */}
        <div className="md:w-2/5 p-6 md:p-8 flex items-center gap-4 md:gap-6" style={{
          borderRight: `3px solid ${isEven ? colors.dark : 'rgba(245,240,235,0.06)'}`,
          opacity: anim.visible ? 1 : 0,
          transform: anim.visible ? 'translateX(0)' : 'translateX(-30px)',
          transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) 0.05s`,
        }}>
          <span style={{
            fontFamily: fonts.bebas,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 0.9,
            color: isEven ? 'rgba(17,17,17,0.06)' : 'rgba(245,240,235,0.06)',
            flexShrink: 0,
          }}>{step.num}</span>
          <div>
            <h3 style={{
              fontFamily: fonts.syne,
              fontWeight: 800,
              fontSize: 'clamp(0.85rem, 1.8vw, 1.15rem)',
              letterSpacing: '0.02em',
              lineHeight: 1.3,
            }}>{step.title}</h3>
            <span style={{
              fontFamily: fonts.dmSerif,
              fontStyle: 'italic',
              fontSize: '0.8rem',
              color: isEven ? 'rgba(17,17,17,0.35)' : 'rgba(245,240,235,0.3)',
            }}>{step.tagline}</span>
          </div>
        </div>

        {/* Right: description + details */}
        <div className="md:w-3/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4" style={{
          opacity: anim.visible ? 1 : 0,
          transform: anim.visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.23,1,0.32,1) 0.15s',
        }}>
          <p className="flex-1" style={{
            fontFamily: fonts.syne,
            fontSize: '0.8rem',
            lineHeight: 1.8,
            color: isEven ? 'rgba(17,17,17,0.5)' : 'rgba(245,240,235,0.45)',
            maxWidth: '400px',
          }}>{step.description}</p>

          <div className="flex flex-col gap-1 md:text-right flex-shrink-0">
            {step.details.map(d => (
              <span key={d} style={{
                fontFamily: fonts.spaceMono,
                fontSize: '7px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: isEven ? 'rgba(17,17,17,0.25)' : 'rgba(245,240,235,0.2)',
              }}>{d}</span>
            ))}
            <span className="mt-2" style={{
              fontFamily: fonts.spaceMono,
              fontSize: '8px',
              letterSpacing: '0.15em',
              color: 'var(--accent)',
            }}>{step.duration}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <>
      <PageHeader
        tag="HOW WE WORK"
        title="OUR PROCESS"
        description="Great work isn't accidental. It's the product of a rigorous, repeatable system — refined over hundreds of projects."
        stats={[{ n: '6', l: 'PHASES' }, { n: '8–14', l: 'WEEKS' }]}
      />

      {/* STEP INDICATORS */}
      <div className="w-full py-5" style={{ background: diagonalStripes, borderBottom: `3px solid ${colors.dark}` }}>
        <div className="flex justify-center items-center gap-4 md:gap-8 px-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-4">
              <span style={{
                fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.15em', color: 'rgba(17,17,17,0.3)',
              }}>{step.num}</span>
              {i < steps.length - 1 && (
                <div style={{ width: '12px', height: '1px', background: 'rgba(17,17,17,0.15)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* STEPS */}
      {steps.map((step, i) => (
        <StepRow key={step.num} step={step} index={i} />
      ))}

      {/* PHILOSOPHY */}
      <section className="relative py-16 px-6 md:px-10 overflow-hidden" style={{
        background: colors.dark, borderBottom: `3px solid var(--accent)`,
      }}>
        <div className="absolute -right-4 top-0 pointer-events-none select-none" style={{
          fontFamily: fonts.bebas, fontSize: 'clamp(10rem, 30vw, 25rem)', lineHeight: 0.8, color: 'rgba(245,240,235,0.02)',
        }}>∞</div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span style={{ fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.25em', color: 'var(--accent)' }}>THE PHILOSOPHY</span>
            <h3 className="mt-2" style={{ fontFamily: fonts.bebas, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', lineHeight: 1, color: colors.cream }}>
              PROCESS ISN'T BUREAUCRACY. IT'S FREEDOM<span style={{ color: 'var(--accent)' }}>.</span>
            </h3>
            <p className="mt-3" style={{
              fontFamily: fonts.dmSerif, fontStyle: 'italic', fontSize: '0.9rem', color: 'rgba(245,240,235,0.3)', maxWidth: '500px', lineHeight: 1.6,
            }}>
              When the system is airtight, the creativity flows freely.
            </p>
          </div>
          <a href="/contact" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <button className="px-10 py-4 text-xs tracking-widest uppercase font-bold cursor-pointer" style={{
              fontFamily: fonts.spaceMono, background: colors.cream, color: colors.dark,
              border: `3px solid ${colors.cream}`, transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.background = colors.cream; e.currentTarget.style.borderColor = colors.cream }}
            >Start a Project →</button>
          </a>
        </div>
      </section>
    </>
  )
}
