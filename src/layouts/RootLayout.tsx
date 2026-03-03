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
    }}>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
