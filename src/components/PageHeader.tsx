import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import { fonts, colors, diagonalStripes } from '../constants/styles'

interface Stat {
  n: string
  l: string
}

interface PageHeaderProps {
  tag: string
  title: string
  description?: string
  /** Small text shown on the far right (e.g. "LAST UPDATED: MARCH 2026") */
  meta?: string
  /** Stat badges shown on the right side */
  stats?: Stat[]
  /** Custom content for the right side — overrides description/meta/stats */
  children?: ReactNode
  /** Left column width class (default "md:w-1/3") */
  leftWidth?: string
  /** Right column width class (default "md:w-2/3") */
  rightWidth?: string
}

export default function PageHeader({
  tag,
  title,
  description,
  meta,
  stats,
  children,
  leftWidth = 'md:w-1/3',
  rightWidth = 'md:w-2/3',
}: PageHeaderProps) {
  const { ref, visible } = useInView(0.05)

  return (
    <section
      className="relative pt-[60px]"
      style={{
        borderBottom: `3px solid ${colors.dark}`,
        borderTop: `2px solid var(--accent)`,
      }}
    >
      <div ref={ref} className="flex flex-col md:flex-row">

        {/* ── Left: tag + title ── */}
        <div
          className={`${leftWidth} p-6 md:p-10 relative overflow-hidden`}
          style={{
            borderRight: `3px solid ${colors.dark}`,
            background: diagonalStripes,
          }}
        >
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s 0.1s, transform 0.65s 0.1s',
          }}>

            {/* Tag */}
            <div className="flex items-center gap-2" style={{ marginBottom: '1.1rem' }}>
              <span style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--accent)',
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: fonts.spaceMono,
                fontSize: '9px',
                letterSpacing: '0.35em',
                color: 'rgba(17,17,17,0.45)',
              }}>{tag}</span>
            </div>

            {/* Title */}
            <h2 style={{
              fontFamily: fonts.bebas,
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              lineHeight: 0.88,
              letterSpacing: '0.02em',
              color: colors.dark,
            }}>{title}</h2>

            {/* Description shown in left col only when children are also present */}
            {description && children && (
              <p className="mt-4" style={{
                fontFamily: fonts.dmSerif,
                fontStyle: 'italic',
                fontSize: '0.95rem',
                lineHeight: 1.65,
                color: 'rgba(17,17,17,0.42)',
                maxWidth: '360px',
              }}>{description}</p>
            )}
          </div>
        </div>

        {/* ── Right side ── */}
        <div
          className={`${rightWidth} p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s 0.28s, transform 0.65s 0.28s',
          }}
        >
          {children ?? (
            <>
              {description && (
                <p style={{
                  fontFamily: fonts.dmSerif,
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'rgba(17,17,17,0.42)',
                  maxWidth: '460px',
                }}>{description}</p>
              )}

              {meta && (
                <span className="hidden md:block ml-auto" style={{
                  fontFamily: fonts.spaceMono,
                  fontSize: '8px',
                  letterSpacing: '0.2em',
                  color: 'rgba(17,17,17,0.22)',
                  flexShrink: 0,
                }}>{meta}</span>
              )}

              {stats && (
                <div className="flex items-center gap-0 ml-auto" style={{ flexShrink: 0 }}>
                  {stats.map((s, i) => (
                    <div
                      key={s.l}
                      style={{
                        padding: i === 0 ? '0 2rem 0 0' : '0 2rem',
                        borderLeft: i > 0 ? `1px solid rgba(17,17,17,0.12)` : 'none',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{
                        fontFamily: fonts.bebas,
                        fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                        lineHeight: 1,
                        letterSpacing: '0.02em',
                        color: colors.dark,
                      }}>{s.n}</div>
                      <div style={{
                        fontFamily: fonts.spaceMono,
                        fontSize: '7px',
                        letterSpacing: '0.25em',
                        color: 'var(--accent)',
                        marginTop: '5px',
                      }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </section>
  )
}
