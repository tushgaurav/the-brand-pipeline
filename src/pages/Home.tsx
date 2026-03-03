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
