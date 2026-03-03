import { fonts } from '../constants/styles'
import { nav } from '../constants/nav'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between" style={{
      padding: '1rem 2rem',
      background: 'rgba(245,240,235,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '2px solid #111',
    }}>
      <div className="flex items-center gap-3">
        <img src="/tbp.png" alt="Logo" className="h-8" />
      </div>
      <nav className="flex items-center gap-8">
        {nav.map((item: { label: string; href: string }) => (
          <a key={item.href} href={item.href} className="brutal-link text-xs" style={{
            fontFamily: fonts.syne,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>{item.label}</a>
        ))}
      </nav>
    </header>
  )
}
