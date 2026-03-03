import { fonts } from '../constants/styles'

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
        <div style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--accent)',
          boxShadow: '0 0 8px var(--accent)',
        }} />
      </div>
      <nav className="flex items-center gap-8">
        {['Index', 'Services', 'Manifesto', 'Contact'].map(item => (
          <a key={item} href="#" className="brutal-link" style={{
            fontFamily: fonts.spaceMono,
            fontSize: '10px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>{item}</a>
        ))}
        <div style={{
          width: '32px',
          height: '2px',
          background: 'var(--accent)',
        }} />
      </nav>
    </header>
  )
}
