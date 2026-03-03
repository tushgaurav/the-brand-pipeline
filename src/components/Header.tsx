import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { fonts, colors } from '../constants/styles'
import { nav } from '../constants/nav'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between" style={{
        padding: '1rem 2rem',
        background: 'rgba(245,240,235,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '2px solid #111',
      }}>
        <a href="/" className="flex items-center gap-3">
          <img src="/tbp.png" alt="Logo" className="h-8" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item: { label: string; href: string }) => (
            <a key={item.href} href={item.href} className="brutal-link text-xs" style={{
              fontFamily: fonts.syne,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>{item.label}</a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', padding: '4px' }}
        >
          {open ? <X size={24} color={colors.dark} strokeWidth={2} /> : <Menu size={24} color={colors.dark} strokeWidth={2} />}
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{
          pointerEvents: open ? 'auto' : 'none',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(17,17,17,0.3)' }}
          onClick={() => setOpen(false)}
        />

        {/* Menu panel */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '75%',
          maxWidth: '320px',
          height: '100%',
          background: colors.cream,
          borderLeft: `3px solid ${colors.dark}`,
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.23,1,0.32,1)',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '5rem',
        }}>
          {nav.map((item: { label: string; href: string }, i: number) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: fonts.bebas,
                fontSize: '2.5rem',
                letterSpacing: '0.05em',
                color: colors.dark,
                textDecoration: 'none',
                padding: '0.8rem 2rem',
                borderBottom: `1px solid rgba(17,17,17,0.08)`,
                transform: open ? 'translateX(0)' : 'translateX(40px)',
                opacity: open ? 1 : 0,
                transition: `all 0.4s cubic-bezier(0.23,1,0.32,1) ${0.1 + i * 0.06}s`,
              }}
            >
              {item.label}
            </a>
          ))}

          {/* Bottom info */}
          <div style={{
            marginTop: 'auto',
            padding: '2rem',
            borderTop: `1px solid rgba(17,17,17,0.08)`,
          }}>
            <span style={{
              fontFamily: fonts.spaceMono,
              fontSize: '9px',
              letterSpacing: '0.2em',
              color: 'rgba(17,17,17,0.3)',
            }}>
              THE BRAND PIPELINE®
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
