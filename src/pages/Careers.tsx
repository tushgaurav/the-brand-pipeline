import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { fonts, colors, diagonalStripes } from '../constants/styles'
import PageHeader from '../components/PageHeader'

const jobs = [
  {
    id: 'SLS-001',
    title: 'Sales Representative',
    type: 'CONTRACT',
    location: 'REMOTE',
    department: 'GROWTH',
    summary: 'Drive new business and build lasting client relationships.',
    description: 'We need a self-driven sales professional who understands the creative industry. You\'ll identify opportunities, qualify leads, craft proposals, and close deals. Not cold-calling from a script — understanding what brands need and articulating how we deliver.',
    responsibilities: [
      'Identify and pursue new business through networking, referrals, and outreach',
      'Manage full sales pipeline from first contact to signed contract',
      'Craft tailored proposals and pitch decks',
      'Collaborate with creative team to scope projects accurately',
      'Track and report on pipeline health and revenue forecasts',
    ],
    requirements: [
      '2+ years sales experience in creative services or marketing',
      'Strong communication and presentation skills',
      'Self-motivated with proven ability to meet targets independently',
      'Network in the startup, tech, or D2C space is a plus',
    ],
    compensation: 'Competitive commission-based structure with base retainer.',
  },
  {
    id: 'DSG-002',
    title: 'Graphic Designer',
    type: 'CONTRACT',
    location: 'REMOTE',
    department: 'CREATIVE',
    summary: 'Create stunning visual work across brand, digital, and print.',
    description: 'We need a designer who thinks in systems, not just screens. Someone who can craft brand identities, design converting websites, lay out magazine spreads, and create engaging social content — all while maintaining craft that makes other designers jealous.',
    responsibilities: [
      'Design brand identity systems: logos, color, typography, guidelines',
      'Create digital assets for web, social, email, and ads',
      'Design print materials: packaging, editorial, collateral',
      'Collaborate with developers to ensure pixel-perfect implementation',
      'Maintain and evolve brand guidelines for multiple clients',
    ],
    requirements: [
      '3+ years professional design experience with strong portfolio',
      'Expert in Figma and Adobe Creative Suite',
      'Strong typography and grid/layout skills',
      'Understanding of UI/UX and responsive design',
      'Motion graphics (After Effects) is a significant plus',
    ],
    compensation: 'Project-based with retainer options. Rates commensurate with experience.',
  },
]

function JobCard({ job, index }: { job: typeof jobs[0]; index: number }) {
  const anim = useInView(0.08)
  const [expanded, setExpanded] = useState(false)

  return (
    <div ref={anim.ref} className="svc-row group" style={{
      opacity: anim.visible ? 1 : 0,
      transform: anim.visible ? 'translateX(0)' : 'translateX(-30px)',
      transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) ${index * 0.1}s`,
    }} onClick={() => setExpanded(!expanded)}>
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-3">
          {[job.type, job.location, job.department].map(tag => (
            <span key={tag} className="svc-tag" style={{
              fontFamily: fonts.spaceMono, fontSize: '7px', letterSpacing: '0.15em',
              padding: '3px 8px', border: '1px solid rgba(17,17,17,0.12)', color: 'rgba(17,17,17,0.35)',
            }}>{tag}</span>
          ))}
          <span className="ml-auto" style={{
            fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.1em', color: 'rgba(17,17,17,0.15)',
          }}>{job.id}</span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="svc-title" style={{ fontFamily: fonts.syne, fontWeight: 800, fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>{job.title}</h3>
            <span className="svc-detail" style={{
              fontFamily: fonts.dmSerif, fontStyle: 'italic', fontSize: '0.85rem', color: 'rgba(17,17,17,0.4)', transition: 'color 0.35s',
            }}>{job.summary}</span>
          </div>
          <span style={{
            fontFamily: fonts.bebas, fontSize: '1.2rem', color: 'rgba(17,17,17,0.1)',
            transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.35s cubic-bezier(0.23,1,0.32,1)', flexShrink: 0,
          }}>→</span>
        </div>

        {/* Expanded */}
        <div style={{ maxHeight: expanded ? '1500px' : '0', overflow: 'hidden', transition: 'max-height 0.6s cubic-bezier(0.23,1,0.32,1)' }}>
          <div className="mt-4 pt-4 svc-box" style={{ borderTop: '1px solid rgba(17,17,17,0.06)' }}>
            <p className="svc-detail" style={{
              fontFamily: fonts.syne, fontSize: '0.85rem', lineHeight: 1.8, color: 'rgba(17,17,17,0.55)', maxWidth: '600px', marginBottom: '1.5rem', transition: 'color 0.35s',
            }}>{job.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: "WHAT YOU'LL DO", items: job.responsibilities },
                { label: "WHAT YOU NEED", items: job.requirements },
              ].map(col => (
                <div key={col.label}>
                  <span style={{ fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.25em', color: 'var(--accent)' }}>{col.label}</span>
                  {col.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 mt-2">
                      <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--accent)', marginTop: '7px', flexShrink: 0 }} />
                      <span className="svc-detail" style={{
                        fontFamily: fonts.syne, fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(17,17,17,0.5)', transition: 'color 0.35s',
                      }}>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 svc-box" style={{ background: 'rgba(17,17,17,0.02)', border: '1px solid rgba(17,17,17,0.06)' }}>
              <span style={{ fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.2em', color: 'var(--accent)' }}>COMPENSATION</span>
              <p className="svc-detail mt-1" style={{
                fontFamily: fonts.syne, fontSize: '0.8rem', color: 'rgba(17,17,17,0.5)', transition: 'color 0.35s',
              }}>{job.compensation}</p>
            </div>

            <a href={`mailto:careers@thebrandpipeline.com?subject=Application: ${job.title} (${job.id})`} style={{ textDecoration: 'none' }}>
              <button className="mt-6 px-8 py-3 text-xs tracking-widest uppercase font-bold cursor-pointer" style={{
                fontFamily: fonts.spaceMono, background: colors.dark, color: colors.cream,
                border: `2px solid ${colors.dark}`, transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = colors.accent; e.currentTarget.style.borderColor = colors.accent; e.currentTarget.style.color = colors.dark }}
                onMouseLeave={e => { e.currentTarget.style.background = colors.dark; e.currentTarget.style.borderColor = colors.dark; e.currentTarget.style.color = colors.cream }}
              >Apply Now →</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Careers() {
  const perksAnim = useInView(0.1)

  return (
    <>
      <PageHeader
        tag="JOIN THE TEAM"
        title="CAREERS"
        description="We're always looking for exceptional people who care deeply about craft."
        stats={[{ n: `${jobs.length}`, l: 'OPEN' }, { n: '100%', l: 'REMOTE' }]}
      />

      {/* DIVIDER */}
      <div className="w-full py-6" style={{ background: diagonalStripes, borderBottom: `3px solid ${colors.dark}` }}>
        <div className="flex justify-center">
          <span style={{ fontFamily: fonts.spaceMono, fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(17,17,17,0.35)' }}>
            OPEN POSITIONS — CLICK TO EXPAND
          </span>
        </div>
      </div>

      {/* JOBS */}
      <section style={{ borderBottom: `3px solid ${colors.dark}` }}>
        {jobs.map((job, i) => (
          <JobCard key={job.id} job={job} index={i} />
        ))}
      </section>

      {/* PERKS */}
      <section ref={perksAnim.ref} style={{ background: colors.dark, borderBottom: `3px solid var(--accent)` }}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { title: 'FULLY REMOTE', text: 'Work from anywhere.' },
            { title: 'CREATIVE FREEDOM', text: 'No micromanagement.' },
            { title: 'FLEXIBLE HOURS', text: 'Your schedule, your call.' },
            { title: 'DIVERSE PROJECTS', text: 'Learn something new weekly.' },
          ].map((perk, i) => (
            <div key={perk.title} className="p-5 md:p-8" style={{
              borderRight: i < 3 ? '1px solid rgba(245,240,235,0.05)' : 'none',
              opacity: perksAnim.visible ? 1 : 0,
              transform: perksAnim.visible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s`,
            }}>
              <span style={{ fontFamily: fonts.spaceMono, fontSize: '7px', letterSpacing: '0.2em', color: 'var(--accent)' }}>0{i + 1}</span>
              <h4 className="mt-1" style={{ fontFamily: fonts.syne, fontWeight: 800, fontSize: '0.75rem', color: colors.cream }}>{perk.title}</h4>
              <p className="mt-1" style={{ fontFamily: fonts.dmSerif, fontStyle: 'italic', fontSize: '0.8rem', color: 'rgba(245,240,235,0.3)', lineHeight: 1.5 }}>{perk.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM */}
      <section className="relative py-14 px-6 text-center" style={{ borderBottom: `3px solid ${colors.dark}` }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(17,17,17,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="relative z-10">
          <p style={{ fontFamily: fonts.dmSerif, fontStyle: 'italic', fontSize: '1rem', color: 'rgba(17,17,17,0.45)' }}>
            Don't see your role? Send your portfolio to careers@thebrandpipeline.com
          </p>
          <a href="mailto:careers@thebrandpipeline.com" className="brutal-link" style={{
            fontFamily: fonts.spaceMono, fontSize: '10px', letterSpacing: '0.2em', display: 'inline-block', marginTop: '0.8rem',
          }}>SAY HELLO →</a>
        </div>
      </section>
    </>
  )
}
