import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { fonts, colors } from '../constants/styles'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function RootLayout() {
  return (
    <div style={{
      fontFamily: fonts.syne,
      background: colors.cream,
      color: colors.dark,
      minHeight: '100vh',
      overflowX: 'hidden',
      '--accent': colors.accent,
    } as React.CSSProperties}>
      <style>{`
        @keyframes slideUp { from { opacity:0; transform:translateY(60px); } to { opacity:1; transform:translateY(0); } }
        @keyframes expandLine { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes slideIn { from { opacity:0; transform:translateX(-40px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slideInR { from { opacity:0; transform:translateX(40px); } to { opacity:1; transform:translateX(0); } }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes rotateBadge { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
        @keyframes dashDraw { to { stroke-dashoffset: 0; } }
        .svc-row { border-bottom: 3px solid ${colors.dark}; transition: all 0.35s cubic-bezier(0.23,1,0.32,1); cursor: pointer; }
        .svc-row:hover { padding-left: 2rem; background: ${colors.dark}; color: ${colors.cream}; }
        .svc-row .svc-title { transition: transform 0.35s cubic-bezier(0.23,1,0.32,1); }
        .svc-row:hover .svc-title { transform: skewX(-3deg); color: ${colors.cream} !important; }
        .svc-row:hover h3, .svc-row:hover h4, .svc-row:hover p, .svc-row:hover span, .svc-row:hover div { color: ${colors.cream}; }
        .svc-row:hover .svc-id { color: var(--accent) !important; }
        .svc-row:hover .svc-detail { color: rgba(245,240,235,0.6) !important; }
        .svc-row:hover button { background: ${colors.cream} !important; color: ${colors.dark} !important; border-color: ${colors.cream} !important; }
        .svc-row:hover .svc-tag { border-color: rgba(245,240,235,0.2) !important; color: rgba(245,240,235,0.5) !important; }
        .svc-row:hover .svc-box { background: rgba(245,240,235,0.06) !important; border-color: rgba(245,240,235,0.1) !important; }
        .brutal-link { position:relative; text-decoration:none; color:${colors.dark}; transition: color 0.2s; }
        .brutal-link:hover { color: ${colors.dark}; }
        .brutal-link::after { content:''; position:absolute; bottom:-2px; left:0; width:100%; height:2px; background:var(--accent); transform:scaleX(0); transition:transform 0.3s; transform-origin:left; }
        .brutal-link:hover::after { transform:scaleX(1); }
        .ticker-track { display: flex; animation: ticker 20s linear infinite; width: max-content; }
        .ticker-track:hover { animation-play-state: paused; }
        .footer-link { color: rgba(245,240,235,0.35); text-decoration: none; transition: color 0.3s, transform 0.3s; display: inline-block; }
        .footer-link:hover { color: var(--accent); transform: translateX(8px); }
      `}</style>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
