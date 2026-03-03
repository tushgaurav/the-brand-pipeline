import { useEffect, useState } from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Manifesto from '../components/home/Manifesto'
import Stats from '../components/home/Stats'
import Testimonial from '../components/home/Testimonial'
import CTA from '../components/home/CTA'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap'
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Hero loaded={loaded} />
      <Services />
      <Manifesto />
      <Stats />
      <Testimonial />
      <CTA />
    </>
  )
}
