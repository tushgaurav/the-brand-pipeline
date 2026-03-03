import { useEffect, useState } from 'react'
import { fonts, colors } from '../../constants/styles'

interface HeroProps {
  loaded: boolean
}

const tickerItems = ['BRAND IDENTITY', 'DIGITAL DESIGN', 'VIDEO PRODUCTION', 'EVENT ACTIVATION', 'SOCIAL MEDIA', 'PRINT & PACKAGING']

export default function Hero({ loaded }: HeroProps) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className="relative pt-24 pb-0 px-0" style={{ borderBottom: `3px solid ${colors.dark}`, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ objectFit: 'cover', opacity: loaded ? 1 : 0, transition: 'opacity 1.5s ease 0.3s' }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(180deg, ${colors.cream}99 0%, ${colors.cream}80 50%, ${colors.cream}99 100%)` }} />

        {/* Floating editorial metadata */}
        <div className="absolute top-28 right-8 z-20" style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s 1.2s',
        }}>
          <div style={{
            fontFamily: fonts.spaceMono,
            fontSize: '9px',
            letterSpacing: '0.2em',
            color: 'rgba(17,17,17,0.3)',
            textAlign: 'right',
            lineHeight: 2.2,
          }}>
            NEW YORK, NY<br />
            {time}<br />
            40.7128° N
          </div>
        </div>

        {/* Rotating badge */}
        <div className="absolute z-20" style={{
          right: 'clamp(2rem, 8vw, 8rem)',
          top: 'clamp(12rem, 30vh, 20rem)',
          width: 'clamp(80px, 10vw, 120px)',
          height: 'clamp(80px, 10vw, 120px)',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.8s 1.4s',
        }}>
          <svg viewBox="0 0 120 120" style={{ animation: 'rotateBadge 12s linear infinite' }}>
            <defs>
              <path id="circlePath" d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
            </defs>
            <text style={{ fontFamily: fonts.spaceMono, fontSize: '9.5px', letterSpacing: '0.35em', fill: colors.dark }}>
              <textPath href="#circlePath">FULL-SPECTRUM CREATIVE STUDIO — EST. 2020 — </textPath>
            </text>
          </svg>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 20px color-mix(in srgb, var(--accent) 50%, transparent)',
          }} />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12">
          {/* Top line */}
          <div className="flex items-end gap-6" style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.23,1,0.32,1) 0.3s',
          }}>
            <span style={{
              fontFamily: fonts.spaceMono,
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: 'var(--accent)',
              background: colors.dark,
              padding: '6px 14px',
              display: 'inline-block',
            }}>EST. 2020</span>
            <span style={{
              fontFamily: fonts.dmSerif,
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              fontStyle: 'italic',
              color: 'rgba(17,17,17,0.5)',
              lineHeight: 1,
            }}>The Brand</span>
          </div>

          {/* PIPELINE — massive split */}
          <div style={{ position: 'relative', margin: '0 -0.5rem' }}>
            <h1 style={{
              fontFamily: fonts.bebas,
              fontSize: 'clamp(6rem, 20vw, 26rem)',
              lineHeight: 0.82,
              letterSpacing: '-0.03em',
              color: colors.dark,
              margin: 0,
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(100px)',
              transition: 'all 1s cubic-bezier(0.23,1,0.32,1) 0.4s',
            }}>
              PIPE
            </h1>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(1rem, 3vw, 3rem)' }}>
              <h1 style={{
                fontFamily: fonts.bebas,
                fontSize: 'clamp(6rem, 20vw, 26rem)',
                lineHeight: 0.82,
                letterSpacing: '-0.03em',
                color: colors.dark,
                margin: 0,
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(100px)',
                transition: 'all 1s cubic-bezier(0.23,1,0.32,1) 0.55s',
              }}>
                LINE
              </h1>
              <div style={{
                width: 'clamp(14px, 2vw, 28px)',
                height: 'clamp(14px, 2vw, 28px)',
                borderRadius: '50%',
                background: 'var(--accent)',
                marginBottom: 'clamp(1rem, 2.5vw, 3.5rem)',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'scale(1)' : 'scale(0)',
                transition: 'all 0.5s cubic-bezier(0.23,1,0.32,1) 0.9s',
                flexShrink: 0,
              }} />
            </div>

            {/* Vertical accent line */}
            <div style={{
              position: 'absolute',
              right: 'clamp(1rem, 5vw, 4rem)',
              top: '15%',
              width: '3px',
              height: loaded ? '70%' : '0%',
              background: 'var(--accent)',
              transition: 'height 1.2s cubic-bezier(0.23,1,0.32,1) 0.8s',
            }} />
          </div>

          {/* Tagline row */}
          <div className="mt-8 md:mt-12 flex items-start justify-between flex-wrap gap-8 max-w-5xl" style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1) 1s',
          }}>
            <p className="max-w-lg" style={{
              fontFamily: fonts.dmSerif,
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2.2vw, 1.7rem)',
              lineHeight: 1.5,
              color: 'rgba(17,17,17,0.6)',
            }}>
              We don't decorate brands.<br />
              We <span style={{
                color: colors.dark,
                background: 'linear-gradient(180deg, transparent 60%, color-mix(in srgb, var(--accent) 50%, transparent) 60%)',
                padding: '0 4px',
              }}>engineer</span> them from the inside out.
            </p>
            <div style={{
              fontFamily: fonts.spaceMono,
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(17,17,17,0.3)',
              borderLeft: '3px solid var(--accent)',
              paddingLeft: '1rem',
              lineHeight: 2.4,
            }}>
              Design / Dev / Video<br />
              Events / Social / Print
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: loaded ? '40%' : '0%',
          height: '3px',
          background: 'linear-gradient(90deg, var(--accent), transparent)',
          transition: 'width 1.5s cubic-bezier(0.23,1,0.32,1) 0.6s',
        }} />
      </section>

      {/* TICKER STRIP */}
      <div style={{
        background: colors.dark,
        borderBottom: `3px solid ${colors.dark}`,
        padding: '1rem 0',
        overflow: 'hidden',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.6s 1.2s',
      }}>
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{
              fontFamily: fonts.bebas,
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              color: i % 2 === 0 ? colors.cream : 'var(--accent)',
              whiteSpace: 'nowrap',
              padding: '0 2rem',
              letterSpacing: '0.05em',
            }}>
              {item}
              <span style={{ margin: '0 1.5rem', color: 'rgba(245,240,235,0.15)' }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
