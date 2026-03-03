import { useInView } from '../hooks/useInView'
import { fonts, colors } from '../constants/styles'
import PageHeader from '../components/PageHeader'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing The Brand Pipeline\'s website and services, you agree to be bound by these terms. We may modify them at any time — continued use constitutes acceptance.',
    ],
  },
  {
    title: '2. Services',
    content: [
      'We provide creative and marketing services including brand identity, digital design, video production, event design, social media, print, content strategy, marketing, UI/UX, and photography.',
      'Scope, deliverables, timeline, and pricing are defined in project-specific statements of work (SOW). We reserve the right to decline projects that don\'t align with our capabilities or values.',
    ],
  },
  {
    title: '3. Payment Terms',
    content: [
      'Standard terms: 50% upfront, 50% on completion. Payments are non-refundable once work commences. Additional scope beyond the SOW may incur extra fees.',
      'Invoices are payable within 15 days. Late payments incur 1.5% monthly interest. We may pause work on projects with overdue invoices.',
    ],
  },
  {
    title: '4. Intellectual Property',
    content: [
      'Upon full payment, clients receive ownership of all final deliverables. We retain portfolio usage rights unless otherwise agreed in writing.',
      'We retain ownership of pre-existing IP, tools, templates, and frameworks used in creation. Clients are responsible for ensuring provided materials don\'t infringe third-party rights.',
    ],
  },
  {
    title: '5. Revisions & Approval',
    content: [
      'Each phase includes revision rounds as specified in the SOW. Additional revisions are billed at standard hourly rates. Final approval constitutes acceptance — post-approval changes are new scope.',
    ],
  },
  {
    title: '6. Confidentiality',
    content: [
      'Both parties maintain confidentiality of proprietary information shared during engagements. Obligations survive termination indefinitely unless information becomes publicly available.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    content: [
      'Total liability shall not exceed fees paid for the specific project. We are not liable for indirect, consequential, or punitive damages. No guarantees on specific business outcomes.',
    ],
  },
  {
    title: '8. Termination',
    content: [
      'Either party may terminate with 14 days written notice. Client pays for all completed work. Deliverables provided within 7 business days of full payment.',
    ],
  },
  {
    title: '9. Website Use',
    content: [
      'Use our website for lawful purposes only. All content is protected by intellectual property laws. Unauthorized use may constitute a criminal offense.',
    ],
  },
  {
    title: '10. Governing Law',
    content: [
      'Governed by Indian law. Disputes subject to exclusive jurisdiction of courts in Noida, UP, India. Contact: legal@thebrandpipeline.com.',
    ],
  },
]

export default function Terms() {
  return (
    <>
      <PageHeader
        tag="LEGAL"
        title="TERMS OF SERVICE"
        description="The terms that govern your use of our website and services."
        meta="LAST UPDATED: MARCH 2026"
      />

      {/* CONTENT */}
      <section style={{ borderBottom: `3px solid ${colors.dark}` }}>
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="hidden md:block md:w-1/4 p-6 md:p-8" style={{
            borderRight: `3px solid ${colors.dark}`,
            position: 'sticky', top: '80px', alignSelf: 'flex-start',
          }}>
            <span style={{ fontFamily: fonts.spaceMono, fontSize: '8px', letterSpacing: '0.25em', color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>SECTIONS</span>
            {sections.map((s, i) => (
              <a key={i} href={`#tos-${i}`} style={{
                fontFamily: fonts.syne, fontSize: '0.75rem', color: 'rgba(17,17,17,0.35)', textDecoration: 'none',
                display: 'block', marginBottom: '0.6rem', lineHeight: 1.5, transition: 'color 0.3s, transform 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = colors.dark; e.currentTarget.style.transform = 'translateX(4px)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(17,17,17,0.35)'; e.currentTarget.style.transform = 'translateX(0)' }}
              >{s.title}</a>
            ))}
          </div>

          {/* Content */}
          <div className="md:w-3/4 p-6 md:p-10">
            {sections.map((section, i) => {
              const anim = useInView(0.1)
              return (
                <div key={i} id={`tos-${i}`} ref={anim.ref} className="mb-10" style={{
                  paddingBottom: '1.5rem',
                  borderBottom: i < sections.length - 1 ? '1px solid rgba(17,17,17,0.06)' : 'none',
                  opacity: anim.visible ? 1 : 0,
                  transform: anim.visible ? 'translateY(0)' : 'translateY(15px)',
                  transition: 'all 0.5s cubic-bezier(0.23,1,0.32,1)',
                }}>
                  <h3 style={{ fontFamily: fonts.syne, fontWeight: 800, fontSize: '0.95rem', color: colors.dark, marginBottom: '0.8rem' }}>{section.title}</h3>
                  {section.content.map((p, j) => (
                    <p key={j} style={{ fontFamily: fonts.syne, fontSize: '0.85rem', lineHeight: 1.9, color: 'rgba(17,17,17,0.55)', marginBottom: '0.8rem' }}>{p}</p>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
