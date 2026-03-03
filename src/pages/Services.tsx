import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { fonts, colors } from '../constants/styles'

const services = [
  {
    id: '001',
    title: 'Brand Identity & Strategy',
    brief: 'The DNA of your brand — defined, distilled, deployed.',
    description: 'We excavate the core of who you are, map your competitive landscape, and build an identity system so cohesive it becomes instinct. Naming, logos, visual systems, positioning, brand architecture — every element intentional.',
    deliverables: ['Brand Audit', 'Visual Identity', 'Brand Guidelines', 'Naming & Positioning'],
  },
  {
    id: '002',
    title: 'Digital Design & Development',
    brief: 'Websites that perform as good as they look.',
    description: 'From marketing sites that convert to complex web apps that scale — we write clean code, design intuitive interfaces, and ship products that make your competitors redesign. React, Next.js, headless CMS, custom backends.',
    deliverables: ['Website Design', 'Web Applications', 'E-commerce', 'Performance Optimization'],
  },
  {
    id: '003',
    title: 'Video & Film Production',
    brief: 'Moving pictures that move people.',
    description: 'Concept to final grade. Commercials, brand films, social content, motion graphics, sound design. We create visual narratives that embed themselves in memory — the kind people share without being asked.',
    deliverables: ['Brand Films', 'Social Content', 'Motion Graphics', 'Post-Production'],
  },
  {
    id: '004',
    title: 'Event Design & Activation',
    brief: 'Experiences people actually remember.',
    description: 'Trade shows, launches, pop-ups, immersive activations. We fuse spatial design, sensory engagement, and strategic storytelling to create moments that become stories people tell.',
    deliverables: ['Event Concept', 'Spatial Design', 'Brand Activations', 'Launch Events'],
  },
  {
    id: '005',
    title: 'Social Media Management',
    brief: 'Your brand\'s voice, amplified everywhere.',
    description: 'Content ecosystems that foster genuine community engagement while driving measurable outcomes. Platform strategy, content calendars, paid campaigns, influencer partnerships, analytics.',
    deliverables: ['Content Strategy', 'Community Mgmt', 'Paid Campaigns', 'Analytics'],
  },
  {
    id: '006',
    title: 'Print & Packaging',
    brief: 'Tangible design that demands to be touched.',
    description: 'Packaging systems, editorial layouts, OOH campaigns, and collateral that commands attention in physical space. Paper stocks, finishing techniques, sustainable materials — every tactile detail considered.',
    deliverables: ['Packaging Design', 'Editorial Design', 'OOH & Billboard', 'Collateral'],
  },
  {
    id: '007',
    title: 'Content Strategy & Copywriting',
    brief: 'Words that work as hard as your design.',
    description: 'Messaging frameworks, brand voice guidelines, website copy, campaign headlines, blog strategies. Our writers think like strategists and write like poets.',
    deliverables: ['Brand Messaging', 'Website Copy', 'Campaign Copy', 'SEO Content'],
  },
  {
    id: '008',
    title: 'Marketing & Advertising',
    brief: 'Campaigns that cut through the noise.',
    description: 'Integrated campaigns from the ground up — audience definition, message crafting, channel selection, real-time optimization. Every dollar tracked, every impression intentional.',
    deliverables: ['Campaign Strategy', 'Performance Marketing', 'Media Planning', 'Go-to-Market'],
  },
  {
    id: '009',
    title: 'UI/UX Design',
    brief: 'Interfaces that feel inevitable.',
    description: 'User experiences so intuitive they feel like second nature. Journey mapping, wireframing, prototyping, usability testing, design systems, interaction design — obsessing over details most never notice.',
    deliverables: ['User Research', 'Wireframing', 'Design Systems', 'Usability Testing'],
  },
  {
    id: '010',
    title: 'Photography',
    brief: 'Images that tell stories words can\'t.',
    description: 'Product photography, lifestyle shoots, corporate portraits, event documentation. Never stock, never staged, never ordinary. Art directed, masterfully lit, brand-defining.',
    deliverables: ['Product Photography', 'Brand Shoots', 'Corporate Portraits', 'Art Direction'],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const anim = useInView(0.08)
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      ref={anim.ref}
      className="svc-row group"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(1.2rem, 2.5vw, 2rem) clamp(1rem, 3vw, 2.5rem)',
        opacity: anim.visible ? 1 : 0,
        transform: anim.visible ? 'translateX(0)' : 'translateX(-30px)',
        transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) ${index * 0.04}s`,
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center gap-4 md:gap-6">
        <span className="svc-id" style={{
          fontFamily: fonts.spaceMono,
          fontSize: '9px',
          letterSpacing: '0.15em',
          color: 'rgba(17,17,17,0.2)',
          flexShrink: 0,
          transition: 'color 0.35s',
        }}>{service.id}</span>

        <h3 className="svc-title flex-1" style={{
          fontFamily: fonts.syne,
          fontWeight: 800,
          fontSize: 'clamp(0.95rem, 2vw, 1.4rem)',
          letterSpacing: '-0.01em',
        }}>{service.title}</h3>

        <span className="svc-detail hidden md:inline" style={{
          fontFamily: fonts.dmSerif,
          fontStyle: 'italic',
          fontSize: '0.85rem',
          color: 'rgba(17,17,17,0.35)',
          flexShrink: 0,
          maxWidth: '280px',
          textAlign: 'right',
          transition: 'color 0.35s',
        }}>{service.brief}</span>

        <span style={{
          fontFamily: fonts.bebas,
          fontSize: '1.2rem',
          color: 'rgba(17,17,17,0.1)',
          transition: 'transform 0.35s cubic-bezier(0.23,1,0.32,1)',
          transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)',
          flexShrink: 0,
        }}>→</span>
      </div>

      {/* Expanded */}
      <div style={{
        maxHeight: expanded ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.5s cubic-bezier(0.23,1,0.32,1)',
      }}>
        <div className="flex flex-col md:flex-row gap-6 mt-4 ml-0 md:ml-12">
          <p className="svc-detail flex-1" style={{
            fontFamily: fonts.syne,
            fontSize: '0.85rem',
            lineHeight: 1.8,
            color: 'rgba(17,17,17,0.5)',
            maxWidth: '500px',
            transition: 'color 0.35s',
          }}>{service.description}</p>
          <div className="flex flex-wrap gap-2">
            {service.deliverables.map(d => (
              <span key={d} className="svc-detail svc-tag" style={{
                fontFamily: fonts.spaceMono,
                fontSize: '8px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '3px 8px',
                border: '1px solid rgba(17,17,17,0.12)',
                height: 'fit-content',
                transition: 'all 0.35s',
              }}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const topAnim = useInView(0.05)
  const ctaAnim = useInView(0.15)

  return (
    <>
      {/* COMPACT HEADER — not a massive hero */}
      <section className="relative pt-24 pb-0" style={{ borderBottom: `3px solid ${colors.dark}` }}>
        <div className="flex flex-col md:flex-row">
          {/* Left: label */}
          <div className="md:w-1/4 p-6 md:p-8 flex items-end" style={{
            borderRight: `3px solid ${colors.dark}`,
            borderBottom: `3px solid ${colors.dark}`,
          }}>
            <div ref={topAnim.ref} style={{
              opacity: topAnim.visible ? 1 : 0,
              transition: 'opacity 0.6s 0.1s',
            }}>
              <span style={{
                fontFamily: fonts.spaceMono,
                fontSize: '9px',
                letterSpacing: '0.3em',
                color: 'var(--accent)',
                background: colors.dark,
                padding: '5px 12px',
                display: 'inline-block',
                marginBottom: '0.8rem',
              }}>WHAT WE DO</span>
              <h2 style={{
                fontFamily: fonts.bebas,
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                lineHeight: 0.9,
                color: colors.dark,
              }}>SERVICES</h2>
            </div>
          </div>

          {/* Right: description + stats */}
          <div className="md:w-3/4 p-6 md:p-8" style={{ borderBottom: `3px solid ${colors.dark}` }}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <p style={{
                fontFamily: fonts.dmSerif,
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
                lineHeight: 1.6,
                color: 'rgba(17,17,17,0.45)',
                maxWidth: '450px',
                opacity: topAnim.visible ? 1 : 0,
                transform: topAnim.visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s cubic-bezier(0.23,1,0.32,1) 0.2s',
              }}>
                Full-spectrum creative studio. From the first spark of strategy to the final pixel — every discipline, one roof, one system.
              </p>
              <div className="flex gap-8" style={{
                opacity: topAnim.visible ? 1 : 0,
                transition: 'opacity 0.6s 0.4s',
              }}>
                {[{ n: '10', l: 'DISCIPLINES' }, { n: '247+', l: 'PROJECTS' }].map(s => (
                  <div key={s.l} className="text-center">
                    <div style={{ fontFamily: fonts.bebas, fontSize: '2rem', lineHeight: 1, color: colors.dark }}>{s.n}</div>
                    <div style={{ fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.2em', color: 'var(--accent)' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service list */}
        <div>
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* DARK MANIFESTO STRIP */}
      <section className="relative py-16 px-6 md:px-16 overflow-hidden" style={{
        background: colors.dark,
        borderBottom: `3px solid var(--accent)`,
      }}>
        <div className="absolute -right-4 top-0 pointer-events-none select-none" style={{
          fontFamily: fonts.bebas,
          fontSize: 'clamp(10rem, 30vw, 25rem)',
          lineHeight: 0.8,
          color: 'rgba(245,240,235,0.02)',
        }}>∞</div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <span style={{ fontFamily: fonts.spaceMono, fontSize: '9px', letterSpacing: '0.3em', color: 'var(--accent)' }}>OUR PROMISE</span>
            <h3 className="mt-2" style={{
              fontFamily: fonts.bebas,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              lineHeight: 1,
              color: colors.cream,
            }}>EVERY DISCIPLINE. ONE PIPELINE.<br />ZERO COMPROMISES<span style={{ color: 'var(--accent)' }}>.</span></h3>
          </div>
          <a href="/contact" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <button className="px-10 py-4 text-xs tracking-widest uppercase font-bold cursor-pointer" style={{
              fontFamily: fonts.spaceMono,
              background: colors.cream,
              color: colors.dark,
              border: `3px solid ${colors.cream}`,
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = colors.cream
                e.currentTarget.style.borderColor = colors.cream
              }}
            >
              Start a Project →
            </button>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaAnim.ref} className="relative py-20 px-6 text-center" style={{
        borderBottom: `3px solid ${colors.dark}`,
      }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(17,17,17,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="relative z-10" style={{
          opacity: ctaAnim.visible ? 1 : 0,
          transform: ctaAnim.visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1)',
        }}>
          <p style={{ fontFamily: fonts.dmSerif, fontStyle: 'italic', fontSize: '1.1rem', color: 'rgba(17,17,17,0.5)' }}>
            Every project starts with a conversation. Let's have one.
          </p>
          <a href="/contact" className="brutal-link" style={{
            fontFamily: fonts.spaceMono,
            fontSize: '11px',
            letterSpacing: '0.2em',
            display: 'inline-block',
            marginTop: '1rem',
          }}>GET IN TOUCH →</a>
        </div>
      </section>
    </>
  )
}
