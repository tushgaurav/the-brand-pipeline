import { useEffect, useState } from 'react'
import { fonts, colors } from '../../constants/styles'

interface HeroProps {
  loaded: boolean
}

const tickerItems = ['BRAND IDENTITY', 'DESIGN & DEVELOPMENT', 'VIDEO PRODUCTION', 'EVENT MANAGEMENT', 'SOCIAL MEDIA', 'PRINT & PACKAGING', 'STRATEGY & CONSULTING', 'ADVERTISING']

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
      <section className="relative" style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr auto',
        borderBottom: `3px solid ${colors.dark}`,
      }}>

        {/* ─── TOP BAR ─── */}
        <div className="flex items-center justify-between px-6 md:px-10 py-4" style={{
          borderBottom: `3px solid ${colors.dark}`,
          marginTop: '4.5rem',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.8s cubic-bezier(0.23,1,0.32,1) 0.6s',
        }}>
          <span style={{
            fontFamily: fonts.spaceMono,
            fontSize: '9px',
            letterSpacing: '0.3em',
            color: 'var(--accent)',
            background: colors.dark,
            padding: '5px 14px',
          }}>EST. 2020</span>
          <span style={{
            fontFamily: fonts.spaceMono,
            fontSize: '9px',
            letterSpacing: '0.2em',
            color: 'rgba(17,17,17,0.25)',
          }}>NOIDA, IN — {time}</span>
        </div>

        {/* ─── MAIN GRID ─── */}
        <div className="flex flex-col md:flex-row" style={{ minHeight: 0 }}>

          {/* LEFT — Dark panel with brand mark */}
          <div className="md:w-[38%] relative overflow-hidden" style={{
            background: colors.dark,
            borderRight: `3px solid ${colors.dark}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(2rem, 4vw, 4rem)',
            minHeight: '300px',
          }}>
            {/* Background pattern */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: `linear-gradient(rgba(245,240,235,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,235,0.02) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }} />

            {/* Video window inside dark panel */}
            <div className="relative z-10" style={{
              width: '100%',
              aspectRatio: '16/10',
              overflow: 'hidden',
              border: `2px solid rgba(245,240,235,0.08)`,
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
              transition: 'all 1.2s cubic-bezier(0.23,1,0.32,1) 0.8s',
            }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full"
                style={{ objectFit: 'cover' }}
              >
                <source src="https://public-projects.t3.storage.dev/tbp-hero.mp4" type="video/mp4" />
              </video>
              {/* Video overlay grain */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'linear-gradient(180deg, transparent 60%, rgba(17,17,17,0.4) 100%)',
              }} />
              <div className="absolute bottom-3 left-3" style={{
                fontFamily: fonts.spaceMono,
                fontSize: '7px',
                letterSpacing: '0.2em',
                color: 'rgba(245,240,235,0.4)',
              }}>SHOWREEL 2026</div>
            </div>

            {/* Brand tagline in dark panel */}
            <div className="relative z-10" style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1) 1.2s',
            }}>
              <p style={{
                fontFamily: fonts.dmSerif,
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
                lineHeight: 1.6,
                color: 'rgba(245,240,235,0.45)',
                maxWidth: '360px',
              }}>
                We don't decorate brands.{' '}
                <span style={{
                  color: colors.cream,
                  background: 'linear-gradient(180deg, transparent 60%, rgba(168,168,168,0.3) 60%)',
                  padding: '0 3px',
                }}>We engineer them</span>{' '}
                from the inside out.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div style={{ width: '24px', height: '2px', background: 'var(--accent)' }} />
                <span style={{
                  fontFamily: fonts.spaceMono,
                  fontSize: '8px',
                  letterSpacing: '0.2em',
                  color: 'var(--accent)',
                }}>FULL-SPECTRUM CREATIVE STUDIO</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Cream panel with massive typography */}
          <div className="md:w-[62%] relative flex flex-col justify-center overflow-hidden" style={{
            padding: 'clamp(2rem, 4vw, 4rem) clamp(1.5rem, 3vw, 3rem)',
          }}>
            {/* Diagonal stripes texture */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 14px, rgba(17,17,17,0.015) 14px, rgba(17,17,17,0.015) 15px)`,
            }} />

            {/* Oversized watermark number */}
            <div className="absolute -right-8 -top-8 pointer-events-none select-none" style={{
              fontFamily: fonts.bebas,
              fontSize: 'clamp(20rem, 45vw, 50rem)',
              lineHeight: 0.75,
              color: 'rgba(17,17,17,0.018)',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 2s 0.5s',
            }}>P</div>

            {/* Main heading group */}
            <div className="relative z-10">
              <div style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'all 0.9s cubic-bezier(0.23,1,0.32,1) 0.35s',
              }}>
                <span style={{
                  fontFamily: fonts.dmSerif,
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                  color: 'rgba(17,17,17,0.4)',
                  display: 'block',
                  marginBottom: '-0.2em',
                  marginLeft: '0.15em',
                }}>The Brand</span>
              </div>

              <div style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(80px)',
                transition: 'all 1s cubic-bezier(0.23,1,0.32,1) 0.4s',
              }}>
                <h1 style={{
                  fontFamily: fonts.bebas,
                  fontSize: 'clamp(5.5rem, 17vw, 20rem)',
                  lineHeight: 0.82,
                  letterSpacing: '-0.02em',
                  color: colors.dark,
                  margin: 0,
                }}>PIPE</h1>
              </div>

              <div className="flex items-end" style={{ gap: 'clamp(0.5rem, 2vw, 2rem)' }}>
                <div style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? 'translateY(0)' : 'translateY(80px)',
                  transition: 'all 1s cubic-bezier(0.23,1,0.32,1) 0.55s',
                }}>
                  <h1 style={{
                    fontFamily: fonts.bebas,
                    fontSize: 'clamp(5.5rem, 17vw, 20rem)',
                    lineHeight: 0.82,
                    letterSpacing: '-0.02em',
                    color: colors.dark,
                    margin: 0,
                  }}>LINE</h1>
                </div>

                {/* Accent dot */}
                <div style={{
                  width: 'clamp(12px, 1.5vw, 22px)',
                  height: 'clamp(12px, 1.5vw, 22px)',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  marginBottom: 'clamp(0.8rem, 2vw, 2.5rem)',
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? 'scale(1)' : 'scale(0)',
                  transition: 'all 0.5s cubic-bezier(0.23,1,0.32,1) 0.9s',
                  flexShrink: 0,
                }} />
              </div>

              {/* Service tags row */}
              <div className="mt-6 md:mt-10 flex flex-wrap gap-2" style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s cubic-bezier(0.23,1,0.32,1) 1.1s',
              }}>
                {['DESIGN', 'DEVELOPMENT', 'VIDEO', 'STRATEGY', 'SOCIAL', 'PRINT'].map((tag, i) => (
                  <span key={tag} style={{
                    fontFamily: fonts.spaceMono,
                    fontSize: '8px',
                    letterSpacing: '0.15em',
                    padding: '4px 10px',
                    border: `1px solid rgba(17,17,17,${i === 0 ? '0.2' : '0.1'})`,
                    color: `rgba(17,17,17,${i === 0 ? '0.5' : '0.25'})`,
                    transition: 'all 0.3s',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = colors.dark
                      e.currentTarget.style.color = colors.cream
                      e.currentTarget.style.borderColor = colors.dark
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = `rgba(17,17,17,${i === 0 ? '0.5' : '0.25'})`
                      e.currentTarget.style.borderColor = `rgba(17,17,17,${i === 0 ? '0.2' : '0.1'})`
                    }}
                  >{tag}</span>
                ))}
              </div>
            </div>

            {/* Rotating badge — bottom right */}
            <div className="absolute z-20 hidden md:block" style={{
              right: 'clamp(1.5rem, 3vw, 3rem)',
              bottom: 'clamp(1.5rem, 3vw, 3rem)',
              width: 'clamp(70px, 8vw, 100px)',
              height: 'clamp(70px, 8vw, 100px)',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.8s 1.4s',
            }}>
              <svg viewBox="0 0 120 120" style={{ animation: 'rotateBadge 12s linear infinite' }}>
                <defs>
                  <path id="circlePath" d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
                </defs>
                <text style={{ fontFamily: fonts.spaceMono, fontSize: '9.5px', letterSpacing: '0.35em', fill: 'rgba(17,17,17,0.12)' }}>
                  <textPath href="#circlePath">FULL-SPECTRUM CREATIVE STUDIO — EST. 2020 — </textPath>
                </text>
              </svg>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 15px color-mix(in srgb, var(--accent) 40%, transparent)',
              }} />
            </div>
          </div>
        </div>

        {/* ─── BOTTOM INFO BAR ─── */}
        <div className="flex items-center justify-between px-6 md:px-10 py-3" style={{
          borderTop: `3px solid ${colors.dark}`,
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s 1.3s',
        }}>
          <div className="flex items-center gap-6">
            <span style={{
              fontFamily: fonts.spaceMono,
              fontSize: '8px',
              letterSpacing: '0.2em',
              color: 'rgba(17,17,17,0.2)',
            }}>28.5355° N, 77.3910° E</span>
            <div style={{ width: '1px', height: '12px', background: 'rgba(17,17,17,0.1)' }} />
            <span style={{
              fontFamily: fonts.spaceMono,
              fontSize: '8px',
              letterSpacing: '0.2em',
              color: 'rgba(17,17,17,0.2)',
            }}>CURRENTLY BOOKING Q2 2026</span>
          </div>
          <a href="/contact" className="hidden md:inline-block brutal-link" style={{
            fontFamily: fonts.spaceMono,
            fontSize: '9px',
            letterSpacing: '0.2em',
          }}>START A PROJECT →</a>
        </div>
      </section>

      {/* ─── TICKER STRIP ─── */}
      <div style={{
        background: colors.dark,
        borderBottom: `3px solid ${colors.dark}`,
        padding: '0.8rem 0',
        overflow: 'hidden',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.6s 1.2s',
      }}>
        <div className="ticker-track" style={{ animationDuration: '50s' }}>
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{
              fontFamily: fonts.bebas,
              fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
              color: i % 2 === 0 ? colors.cream : 'var(--accent)',
              whiteSpace: 'nowrap',
              padding: '0 1.8rem',
              letterSpacing: '0.05em',
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
