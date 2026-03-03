import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import { fonts, colors } from '../constants/styles'

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
  const anim = useInView(0.05)

  return (
    <section className="relative pt-24" style={{ borderBottom: `3px solid ${colors.dark}` }}>
      <div ref={anim.ref} className="flex flex-col md:flex-row">
        {/* Left: tag + title */}
        <div className={`${leftWidth} p-6 md:p-8`} style={{ borderRight: `3px solid ${colors.dark}` }}>
          <div style={{ opacity: anim.visible ? 1 : 0, transition: 'opacity 0.6s 0.1s' }}>
            <span style={{
              fontFamily: fonts.spaceMono,
              fontSize: '9px',
              letterSpacing: '0.3em',
              color: 'var(--accent)',
              background: colors.dark,
              padding: '5px 12px',
              display: 'inline-block',
              marginBottom: '0.8rem',
            }}>{tag}</span>
            <h2 style={{
              fontFamily: fonts.bebas,
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: 0.9,
              color: colors.dark,
            }}>{title}</h2>
            {/* If description provided and no custom children, show it in left column on pages that put it there */}
            {description && children && (
              <p className="mt-3" style={{
                fontFamily: fonts.dmSerif,
                fontStyle: 'italic',
                fontSize: '0.95rem',
                lineHeight: 1.5,
                color: 'rgba(17,17,17,0.4)',
                maxWidth: '360px',
              }}>{description}</p>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className={`${rightWidth} p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4`} style={{
          opacity: anim.visible ? 1 : 0,
          transition: 'opacity 0.6s 0.3s',
        }}>
          {children ?? (
            <>
              {description && (
                <p style={{
                  fontFamily: fonts.dmSerif,
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: 'rgba(17,17,17,0.4)',
                  maxWidth: '450px',
                }}>{description}</p>
              )}
              {meta && (
                <span className="hidden md:block ml-auto" style={{
                  fontFamily: fonts.spaceMono,
                  fontSize: '8px',
                  letterSpacing: '0.15em',
                  color: 'rgba(17,17,17,0.2)',
                  flexShrink: 0,
                }}>{meta}</span>
              )}
              {stats && (
                <div className="flex gap-6" style={{ flexShrink: 0 }}>
                  {stats.map(s => (
                    <div key={s.l} className="text-center">
                      <div style={{ fontFamily: fonts.bebas, fontSize: '1.8rem', lineHeight: 1, color: colors.dark }}>{s.n}</div>
                      <div style={{ fontFamily: fonts.spaceMono, fontSize: '7px', letterSpacing: '0.2em', color: 'var(--accent)' }}>{s.l}</div>
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
