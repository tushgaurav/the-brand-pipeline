import { fonts, colors } from '../constants/styles'

const tickerText = 'THE BRAND PIPELINE — FULL-SPECTRUM CREATIVE — NOIDA — '

export default function Footer() {
  return (
    <footer className="relative" style={{ background: colors.dark, color: colors.cream }}>
      {/* Top ticker strip */}
      <div style={{ borderBottom: '1px solid rgba(245,240,235,0.08)', overflow: 'hidden', padding: '0.6rem 0' }}>
        <div className="ticker-track" style={{ animationDuration: '60s' }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} style={{
              fontFamily: fonts.spaceMono,
              fontSize: '9px',
              letterSpacing: '0.3em',
              color: 'rgba(245,240,235,0.12)',
              whiteSpace: 'nowrap',
            }}>
              {tickerText}
            </span>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="px-6 md:px-16 pt-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-20">
          <div>
            <img src="/tbp_cream.svg" alt="Logo" className="h-32 mb-6" style={{ opacity: 0.8 }} />
            <p style={{
              fontFamily: fonts.dmSerif,
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'rgba(245,240,235,0.3)',
              maxWidth: '280px',
              lineHeight: 1.7,
            }}>
              Building brands that refuse to be ignored since 2020.
            </p>
          </div>
          {/* HIDDEN FOR NOW */}
          {/* <div style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: fonts.bebas,
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: 0.9,
              color: colors.accent,
              opacity: 0.5,
              letterSpacing: '-0.02em',
            }}>
              LET'S<br />TALK<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <a href="mailto:hello@tbp.co" className="footer-link" style={{
              fontFamily: fonts.spaceMono,
              fontSize: '12px',
              letterSpacing: '0.1em',
              display: 'inline-block',
              marginTop: '1rem',
              color: 'var(--accent)',
              borderBottom: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)',
              paddingBottom: '4px',
            }}>
              hello@tbp.co
            </a>
          </div> */}
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12" style={{ borderTop: '1px solid rgba(245,240,235,0.08)', paddingTop: '2.5rem' }}>
          {[
            { heading: 'Services', items: [
              { label: 'Branding', href: '/services' },
              { label: 'Digital', href: '/services' },
              { label: 'Video', href: '/services' },
              { label: 'Events', href: '/services' },
              { label: 'Social', href: '/services' },
            ]},
            { heading: 'Company', items: [
              { label: 'About', href: '/about' },
              { label: 'Careers', href: '/careers' },
              { label: 'Process', href: '/process' },
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Service', href: '/terms-of-service' },
            ]},
            { heading: 'Social', items: [
              { label: 'Instagram', href: '#' },
              { label: 'LinkedIn', href: '#' },
              { label: 'X / Twitter', href: '#' },
              { label: 'Behance', href: '#' },
            ]},
            { heading: 'Contact', items: [
              { label: '+91 98765 43210', href: 'tel:+919876543210' },
              { label: 'Noida, UP, India', href: '#' },
              { label: 'hello@thebrandpipeline.com', href: 'mailto:hello@thebrandpipeline.com' },
            ]},
          ].map(col => (
            <div key={col.heading}>
              <h4 style={{
                fontFamily: fonts.spaceMono,
                fontSize: '9px',
                letterSpacing: '0.25em',
                color: 'var(--accent)',
                marginBottom: '1.2rem',
                textTransform: 'uppercase',
              }}>{col.heading}</h4>
              {col.items.map(item => (
                <a key={item.label} href={item.href} className="footer-link" style={{
                  fontFamily: fonts.syne,
                  fontSize: '13px',
                  display: 'block',
                  marginBottom: '0.6rem',
                  lineHeight: 1.6,
                }}>{item.label}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(245,240,235,0.08)' }}>
          <span style={{ fontFamily: fonts.spaceMono, fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(245,240,235,0.15)' }}>
            © 2026 THE BRAND PIPELINE®
          </span>
          <div className="flex items-center gap-6">
            <span style={{ fontFamily: fonts.spaceMono, fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(245,240,235,0.15)' }}>ALL RIGHTS RESERVED</span>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px color-mix(in srgb, var(--accent) 40%, transparent)' }} />
          </div>
        </div>
      </div>
    </footer>
  )
}
