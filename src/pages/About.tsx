import { useInView } from '../hooks/useInView'
import { fonts, colors, diagonalStripes } from '../constants/styles'

const team = [
  {
    name: 'Tushar Gaurav',
    role: 'FOUNDER & CREATIVE DIRECTOR',
    bio: 'Web developer at Orangewood Labs by day, brand architect by obsession. Built The Brand Pipeline to give his growing client base a home — and a promise.',
    initials: 'TG',
    featured: true,
  },
  {
    name: 'Priya Sharma',
    role: 'LEAD DESIGNER',
    bio: 'Visual thinker with a background in editorial design. Ten years of agency experience and an unhealthy obsession with type pairing.',
    initials: 'PS',
  },
  {
    name: 'Arjun Mehta',
    role: 'MOTION & VIDEO LEAD',
    bio: 'Sees stories in everything. Directs, shoots, and edits with a filmmaker\'s eye and a marketer\'s brain. Previously at Vice Media.',
    initials: 'AM',
  },
  {
    name: 'Sneha Kapoor',
    role: 'BRAND STRATEGIST',
    bio: 'Data-informed, gut-validated. Bridges the gap between what brands want to say and what audiences need to hear.',
    initials: 'SK',
  },
  {
    name: 'Rohan Desai',
    role: 'FRONTEND DEVELOPER',
    bio: 'Clean code, fast sites, smooth animations. React and TypeScript purist with a soft spot for creative CSS.',
    initials: 'RD',
  },
  {
    name: 'Ananya Joshi',
    role: 'SOCIAL MEDIA MANAGER',
    bio: 'Turns brands into conversations. Her campaigns have generated over 50M organic impressions across platforms.',
    initials: 'AJ',
  },
]

export default function About() {
  const introAnim = useInView(0.05)
  const storyAnim = useInView(0.1)
  const teamAnim = useInView(0.05)
  const valuesAnim = useInView(0.1)

  return (
    <>
      {/* INTRO BAR — compact, not massive */}
      <section className="relative pt-24" style={{ borderBottom: `3px solid ${colors.dark}` }}>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 p-6 md:p-10" style={{ borderRight: `3px solid ${colors.dark}` }}>
            <div ref={introAnim.ref} style={{
              opacity: introAnim.visible ? 1 : 0,
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
                marginBottom: '1rem',
              }}>WHO WE ARE</span>
              <h2 style={{
                fontFamily: fonts.bebas,
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                lineHeight: 0.9,
                color: colors.dark,
              }}>ABOUT US</h2>
              <p className="mt-4" style={{
                fontFamily: fonts.dmSerif,
                fontStyle: 'italic',
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'rgba(17,17,17,0.4)',
                maxWidth: '360px',
              }}>
                A collective of designers, developers, strategists, and storytellers who build brands like systems — not surfaces.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="md:w-3/5 grid grid-cols-3 divide-x" style={{
            borderColor: 'rgba(17,17,17,0.1)',
          }}>
            {[
              { n: '247+', l: 'PROJECTS' },
              { n: '58', l: 'BRANDS' },
              { n: 'EST. 2020', l: 'SINCE' },
            ].map((s) => (
              <div key={s.l} className="p-6 md:p-10 flex flex-col items-center justify-center text-center" style={{
                opacity: introAnim.visible ? 1 : 0,
                transition: 'opacity 0.6s 0.3s',
              }}>
                <div style={{ fontFamily: fonts.bebas, fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1, color: colors.dark }}>{s.n}</div>
                <div style={{ fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.25em', color: 'var(--accent)', marginTop: '0.3rem' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section ref={storyAnim.ref} style={{ borderBottom: `3px solid ${colors.dark}` }}>
        <div className="flex flex-col md:flex-row">
          {/* Dark sidebar */}
          <div className="md:w-1/4 p-6 md:p-10 flex flex-col justify-center" style={{
            background: colors.dark,
            borderRight: `3px solid ${colors.dark}`,
            minHeight: '200px',
          }}>
            <span style={{ fontFamily: fonts.spaceMono, fontSize: '9px', letterSpacing: '0.3em', color: 'var(--accent)' }}>THE ORIGIN</span>
            <h3 className="mt-2" style={{ fontFamily: fonts.bebas, fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 0.9, color: colors.cream }}>
              OUR<br />STORY
            </h3>
          </div>

          {/* Content */}
          <div className="md:w-3/4 p-6 md:p-10" style={{
            opacity: storyAnim.visible ? 1 : 0,
            transform: storyAnim.visible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.7s cubic-bezier(0.23,1,0.32,1) 0.15s',
          }}>
            <p style={{ fontFamily: fonts.syne, fontSize: '0.95rem', lineHeight: 1.9, color: 'rgba(17,17,17,0.65)', marginBottom: '1.2rem' }}>
              The Brand Pipeline started the way most good things start — out of necessity. <strong style={{ color: colors.dark }}>Tushar Gaurav</strong>, a web developer at <a href="https://orangewood.co" target="_blank" rel="noopener noreferrer" style={{ color: colors.dark, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Orangewood Labs</a>, had been doing design and marketing work for clients long before it became official. Websites, brand identities, social campaigns, video production — the work kept coming.
            </p>
            <p style={{ fontFamily: fonts.syne, fontSize: '0.95rem', lineHeight: 1.9, color: 'rgba(17,17,17,0.65)', marginBottom: '1.2rem' }}>
              What started as freelance projects evolved into something bigger. Tushar built The Brand Pipeline as a proper creative front — a studio where clients could find world-class design, development, and strategy under one cohesive brand. Not a freelancer marketplace. Not an agency factory. A <em>pipeline</em> — where raw ideas enter one end and refined, beautifully-executed brands come out the other.
            </p>
            <p style={{ fontFamily: fonts.syne, fontSize: '0.95rem', lineHeight: 1.9, color: 'rgba(17,17,17,0.65)' }}>
              Today, the studio operates with a lean core team and a trusted network of specialist contractors. This model keeps us agile, cost-effective, and ruthlessly focused on quality.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div style={{ width: '20px', height: '2px', background: 'var(--accent)' }} />
              <a href="https://tushgaurav.com" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: fonts.spaceMono, fontSize: '9px', letterSpacing: '0.2em', color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid var(--accent)', paddingBottom: '2px',
              }}>TUSHGAURAV.COM →</a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES — horizontal strip */}
      <section ref={valuesAnim.ref} className="relative" style={{
        background: diagonalStripes,
        borderBottom: `3px solid ${colors.dark}`,
      }}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { title: 'CRAFT OVER SPEED', text: 'We\'d rather do it right than do it fast.' },
            { title: 'SYSTEM THINKING', text: 'Brands aren\'t logos. They\'re ecosystems.' },
            { title: 'RADICAL HONESTY', text: 'We tell you what you need to hear.' },
            { title: 'ZERO HANDOFFS', text: 'Strategy, design, dev — under one roof.' },
          ].map((v, i) => (
            <div key={v.title} className="p-6 md:p-8" style={{
              borderRight: i < 3 ? '1px solid rgba(17,17,17,0.08)' : 'none',
              opacity: valuesAnim.visible ? 1 : 0,
              transform: valuesAnim.visible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.1}s`,
            }}>
              <span style={{ fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.2em', color: 'var(--accent)' }}>0{i + 1}</span>
              <h4 className="mt-1" style={{ fontFamily: fonts.syne, fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.03em', color: colors.dark }}>{v.title}</h4>
              <p className="mt-2" style={{ fontFamily: fonts.dmSerif, fontStyle: 'italic', fontSize: '0.85rem', color: 'rgba(17,17,17,0.4)', lineHeight: 1.5 }}>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section ref={teamAnim.ref} style={{ background: colors.dark, borderBottom: `3px solid var(--accent)` }}>
        <div className="px-6 md:px-10 py-12">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span style={{ fontFamily: fonts.spaceMono, fontSize: '9px', letterSpacing: '0.3em', color: 'var(--accent)' }}>THE PEOPLE</span>
              <h3 className="mt-2" style={{ fontFamily: fonts.bebas, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 0.9, color: colors.cream }}>
                OUR TEAM<span style={{ color: 'var(--accent)' }}>.</span>
              </h3>
            </div>
            <p className="hidden md:block" style={{
              fontFamily: fonts.dmSerif, fontStyle: 'italic', fontSize: '0.9rem', color: 'rgba(245,240,235,0.3)', maxWidth: '300px', textAlign: 'right',
            }}>Small enough to care, skilled enough to deliver.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {team.map((member, i) => (
              <div key={member.name} style={{
                opacity: teamAnim.visible ? 1 : 0,
                transform: teamAnim.visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s`,
              }}>
                {/* Avatar */}
                <div style={{
                  width: '100%',
                  aspectRatio: '1',
                  background: member.featured ? colors.cream : 'rgba(245,240,235,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `2px solid ${member.featured ? colors.cream : 'rgba(245,240,235,0.08)'}`,
                  marginBottom: '0.8rem',
                  position: 'relative',
                }}>
                  <span style={{
                    fontFamily: fonts.bebas,
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    color: member.featured ? colors.dark : 'rgba(245,240,235,0.1)',
                  }}>{member.initials}</span>
                  <div style={{
                    position: 'absolute', bottom: 0, right: 0, width: '30%', height: '2px', background: 'var(--accent)',
                  }} />
                </div>

                <span style={{
                  fontFamily: fonts.spaceMono, fontSize: '7px', letterSpacing: '0.2em', color: 'var(--accent)', display: 'block',
                }}>{member.role}</span>
                <h4 className="mt-1" style={{
                  fontFamily: fonts.syne, fontWeight: 800, fontSize: '0.85rem', color: colors.cream, lineHeight: 1.3,
                }}>{member.name}</h4>
                <p className="mt-1" style={{
                  fontFamily: fonts.syne, fontSize: '0.75rem', lineHeight: 1.6, color: 'rgba(245,240,235,0.35)',
                }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative py-16 px-6 text-center" style={{ borderBottom: `3px solid ${colors.dark}` }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(17,17,17,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="relative z-10">
          <p style={{ fontFamily: fonts.dmSerif, fontStyle: 'italic', fontSize: '1.1rem', color: 'rgba(17,17,17,0.5)' }}>
            We're always looking for bold brands and ambitious projects.
          </p>
          <a href="/contact" className="brutal-link" style={{
            fontFamily: fonts.spaceMono, fontSize: '11px', letterSpacing: '0.2em', display: 'inline-block', marginTop: '1rem',
          }}>START A CONVERSATION →</a>
        </div>
      </section>
    </>
  )
}
