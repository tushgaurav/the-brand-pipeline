import { useInView } from '../hooks/useInView'
import { fonts, colors } from '../constants/styles'

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'We collect information you provide directly when you contact us, subscribe to our communications, or engage our services — including name, email, phone, company, and project details.',
      'We automatically collect technical information via cookies: IP address, browser type, OS, referring URLs, and browsing behavior. Client materials shared during engagements are treated as strictly confidential.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'We use collected information to provide and improve our services, communicate about projects, process transactions, respond to inquiries, and comply with legal obligations.',
      'We never sell personal information to third parties. We may share with trusted service providers who assist our operations, provided they maintain confidentiality.',
    ],
  },
  {
    title: '3. Data Security',
    content: [
      'We implement industry-standard security measures including encryption, secure servers, and access controls. No method of electronic storage is 100% secure — while we strive to protect your data, absolute security cannot be guaranteed.',
      'In the event of a data breach affecting your personal information, we will notify you and relevant authorities as required by applicable law.',
    ],
  },
  {
    title: '4. Client Confidentiality',
    content: [
      'All client projects, brand assets, strategies, and communications are strictly confidential. We do not share client work with third parties without explicit written consent.',
      'We may showcase completed work in our portfolio with client permission. Team members and contractors are bound by NDAs protecting proprietary information.',
    ],
  },
  {
    title: '5. Cookies & Tracking',
    content: [
      'Our website uses cookies to improve functionality and analyze usage. You can control cookie settings through your browser, though some features may not function optimally without them.',
    ],
  },
  {
    title: '6. Your Rights',
    content: [
      'You have the right to access, correct, or delete your personal information. Contact privacy@thebrandpipeline.com to exercise these rights. We respond within 30 days.',
      'You may unsubscribe from marketing communications at any time via the unsubscribe link or by contacting us directly.',
    ],
  },
  {
    title: '7. Changes & Contact',
    content: [
      'We may update this policy to reflect changes in our practices. Continued use after changes constitutes acceptance. Questions? Contact privacy@thebrandpipeline.com.',
    ],
  },
]

export default function Privacy() {
  const topAnim = useInView(0.05)

  return (
    <>
      {/* TOP BAR */}
      <section className="relative pt-24" style={{ borderBottom: `3px solid ${colors.dark}` }}>
        <div ref={topAnim.ref} className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-6 md:p-8" style={{ borderRight: `3px solid ${colors.dark}` }}>
            <div style={{ opacity: topAnim.visible ? 1 : 0, transition: 'opacity 0.6s 0.1s' }}>
              <span style={{
                fontFamily: fonts.spaceMono, fontSize: '9px', letterSpacing: '0.3em', color: 'var(--accent)',
                background: colors.dark, padding: '5px 12px', display: 'inline-block', marginBottom: '0.8rem',
              }}>LEGAL</span>
              <h2 style={{ fontFamily: fonts.bebas, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 0.9, color: colors.dark }}>PRIVACY POLICY</h2>
            </div>
          </div>
          <div className="md:w-2/3 p-6 md:p-8 flex items-center" style={{
            opacity: topAnim.visible ? 1 : 0, transition: 'opacity 0.6s 0.3s',
          }}>
            <p style={{ fontFamily: fonts.dmSerif, fontStyle: 'italic', fontSize: '0.95rem', color: 'rgba(17,17,17,0.4)', maxWidth: '500px' }}>
              How we collect, use, and protect your personal information.
            </p>
            <span className="hidden md:block ml-auto" style={{
              fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.15em', color: 'rgba(17,17,17,0.2)',
            }}>LAST UPDATED: MARCH 2026</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ borderBottom: `3px solid ${colors.dark}` }}>
        <div className="flex flex-col md:flex-row">
          {/* Sidebar nav */}
          <div className="hidden md:block md:w-1/4 p-6 md:p-8" style={{
            borderRight: `3px solid ${colors.dark}`,
            position: 'sticky', top: '80px', alignSelf: 'flex-start',
          }}>
            <span style={{ fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.25em', color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>SECTIONS</span>
            {sections.map((s, i) => (
              <a key={i} href={`#priv-${i}`} style={{
                fontFamily: fonts.syne, fontSize: '0.75rem', color: 'rgba(17,17,17,0.35)', textDecoration: 'none',
                display: 'block', marginBottom: '0.6rem', lineHeight: 1.5, transition: 'color 0.3s, transform 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = colors.dark; e.currentTarget.style.transform = 'translateX(4px)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(17,17,17,0.35)'; e.currentTarget.style.transform = 'translateX(0)' }}
              >{s.title}</a>
            ))}
          </div>

          {/* Content */}
          <div className="md:w-3/4 p-6 md:p-10">
            {sections.map((section, i) => {
              const anim = useInView(0.1)
              return (
                <div key={i} id={`priv-${i}`} ref={anim.ref} className="mb-10" style={{
                  paddingBottom: '1.5rem',
                  borderBottom: i < sections.length - 1 ? '1px solid rgba(17,17,17,0.06)' : 'none',
                  opacity: anim.visible ? 1 : 0,
                  transform: anim.visible ? 'translateY(0)' : 'translateY(15px)',
                  transition: 'all 0.5s cubic-bezier(0.23,1,0.32,1)',
                }}>
                  <h3 style={{ fontFamily: fonts.syne, fontWeight: 800, fontSize: '0.95rem', color: colors.dark, marginBottom: '0.8rem' }}>{section.title}</h3>
                  {section.content.map((p, j) => (
                    <p key={j} style={{ fontFamily: fonts.syne, fontSize: '0.85rem', lineHeight: 1.9, color: 'rgba(17,17,17,0.55)', marginBottom: '0.8rem' }}>{p}</p>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
