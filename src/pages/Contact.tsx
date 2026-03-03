import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { fonts, colors } from '../constants/styles'

export default function Contact() {
  const topAnim = useInView(0.05)
  const formAnim = useInView(0.08)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: fonts.syne,
    fontSize: '0.9rem',
    background: 'transparent',
    border: `2px solid rgba(17,17,17,0.15)`,
    padding: '0.9rem 1rem',
    color: colors.dark,
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: fonts.spaceMono,
    fontSize: '8px',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: 'rgba(17,17,17,0.35)',
    display: 'block',
    marginBottom: '0.4rem',
  }

  const focusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = colors.dark
    e.currentTarget.style.boxShadow = `3px 3px 0 ${colors.accent}`
  }
  const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(17,17,17,0.15)'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <>
      {/* TOP BAR */}
      <section className="relative pt-24" style={{ borderBottom: `3px solid ${colors.dark}` }}>
        <div ref={topAnim.ref} className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-6 md:p-8" style={{ borderRight: `3px solid ${colors.dark}` }}>
            <div style={{ opacity: topAnim.visible ? 1 : 0, transition: 'opacity 0.6s 0.1s' }}>
              <span style={{
                fontFamily: fonts.spaceMono, fontSize: '9px', letterSpacing: '0.3em', color: 'var(--accent)',
                background: colors.dark, padding: '5px 12px', display: 'inline-block', marginBottom: '0.8rem',
              }}>GET IN TOUCH</span>
              <h2 style={{ fontFamily: fonts.bebas, fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 0.9, color: colors.dark }}>CONTACT</h2>
              <p className="mt-3" style={{
                fontFamily: fonts.dmSerif, fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.5, color: 'rgba(17,17,17,0.4)', maxWidth: '300px',
              }}>Every great project starts with a conversation.</p>
            </div>
          </div>

          {/* Quick info */}
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4" style={{
            opacity: topAnim.visible ? 1 : 0, transition: 'opacity 0.6s 0.3s',
          }}>
            {[
              { l: 'EMAIL', v: 'hello@thebrandpipeline.com' },
              { l: 'PHONE', v: '+91 98765 43210' },
              { l: 'LOCATION', v: 'Noida, UP, India' },
              { l: 'RESPONSE', v: '< 24 hours' },
            ].map((item, i) => (
              <div key={item.l} className="p-4 md:p-6 flex flex-col justify-center" style={{
                borderRight: i < 3 ? '1px solid rgba(17,17,17,0.08)' : 'none',
              }}>
                <span style={{ fontFamily: fonts.spaceMono, fontSize: '7px', letterSpacing: '0.25em', color: 'var(--accent)' }}>{item.l}</span>
                <span className="mt-1" style={{ fontFamily: fonts.syne, fontSize: '0.8rem', color: 'rgba(17,17,17,0.6)', lineHeight: 1.4 }}>{item.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section ref={formAnim.ref} style={{ borderBottom: `3px solid ${colors.dark}` }}>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 p-6 md:p-10" style={{
            borderRight: `3px solid ${colors.dark}`,
            opacity: formAnim.visible ? 1 : 0,
            transform: formAnim.visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.23,1,0.32,1) 0.1s',
          }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input type="text" required value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe" style={inputStyle}
                      onFocus={focusHandler} onBlur={blurHandler} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input type="email" required value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com" style={inputStyle}
                      onFocus={focusHandler} onBlur={blurHandler} />
                  </div>
                </div>
                <div className="mb-6">
                  <label style={labelStyle}>Subject</label>
                  <input type="text" required value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="New project inquiry" style={inputStyle}
                    onFocus={focusHandler} onBlur={blurHandler} />
                </div>
                <div className="mb-8">
                  <label style={labelStyle}>Message</label>
                  <textarea required rows={6} value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..." style={{ ...inputStyle, resize: 'vertical', minHeight: '150px' }}
                    onFocus={focusHandler} onBlur={blurHandler} />
                </div>
                <button type="submit" className="px-10 py-4 text-xs tracking-widest uppercase font-bold cursor-pointer w-full md:w-auto" style={{
                  fontFamily: fonts.spaceMono, background: colors.dark, color: colors.cream,
                  border: `3px solid ${colors.dark}`, transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = colors.accent; e.currentTarget.style.borderColor = colors.accent; e.currentTarget.style.color = colors.dark }}
                  onMouseLeave={e => { e.currentTarget.style.background = colors.dark; e.currentTarget.style.borderColor = colors.dark; e.currentTarget.style.color = colors.cream }}
                >Send Message →</button>
              </form>
            ) : (
              <div className="py-16 text-center">
                <h3 style={{ fontFamily: fonts.bebas, fontSize: '2.5rem', lineHeight: 0.9, color: colors.dark }}>
                  THANK YOU<span style={{ color: 'var(--accent)' }}>.</span>
                </h3>
                <p className="mt-3" style={{ fontFamily: fonts.dmSerif, fontStyle: 'italic', fontSize: '1rem', color: 'rgba(17,17,17,0.5)' }}>
                  We'll get back to you within 24 hours.
                </p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 px-6 py-2 text-xs tracking-widest uppercase cursor-pointer" style={{
                    fontFamily: fonts.spaceMono, background: 'transparent', border: '1px solid rgba(17,17,17,0.2)', color: 'rgba(17,17,17,0.4)', transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = colors.dark; e.currentTarget.style.color = colors.dark }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(17,17,17,0.2)'; e.currentTarget.style.color = 'rgba(17,17,17,0.4)' }}
                >Send Another →</button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3 p-6 md:p-10" style={{
            background: colors.dark,
            opacity: formAnim.visible ? 1 : 0,
            transition: 'opacity 0.6s 0.3s',
          }}>
            <div className="mb-10">
              <span style={{ fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.25em', color: 'var(--accent)' }}>WORKING HOURS</span>
              <p className="mt-2" style={{ fontFamily: fonts.syne, fontSize: '0.85rem', color: 'rgba(245,240,235,0.5)', lineHeight: 1.8 }}>
                Monday — Friday<br />10:00 AM — 7:00 PM IST
              </p>
            </div>

            <div className="mb-10">
              <span style={{ fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.25em', color: 'var(--accent)' }}>SOCIAL</span>
              <div className="mt-2 flex flex-col gap-1">
                {['Instagram', 'LinkedIn', 'X / Twitter', 'Behance'].map(p => (
                  <a key={p} href="#" className="footer-link" style={{ fontFamily: fonts.syne, fontSize: '0.85rem' }}>{p}</a>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(245,240,235,0.06)', paddingTop: '1.5rem' }}>
              <div style={{
                fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.15em', color: 'rgba(245,240,235,0.12)', lineHeight: 2.4,
              }}>
                PROJECT MINIMUM: ₹50,000<br />
                CURRENTLY BOOKING: Q2 2026
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
