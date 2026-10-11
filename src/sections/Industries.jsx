import { useState } from 'react'
import './Industries.scss'

const industries = [
  {
    id: 'real-estate',
    title: 'Real Estate & Property Developers',
    desc: 'High-ticket lead funnels, WhatsApp virtual tour booking, CRM pipeline sync, and hyper-local Meta ad targeting.',
    points: ['Verified buyer phone numbers', 'Automated site visit scheduling', 'Project brochure bot delivery'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare, Aesthetics & Clinics',
    desc: 'Patient booking automation, reputation management, procedure education funnels, and consultation qualification.',
    points: ['Strict HIPAA/privacy compliant flows', 'Reduced no-show appointment rate', 'Local Google Maps 3-pack dominance'],
  },
  {
    id: 'education',
    title: 'Coaching, Education & Institutions',
    desc: 'Student enrollment funnels, automated webinar attendance boosters, course inquiry qualification, and parent follow-up.',
    points: ['Batch seat reservation flows', 'Automated fee & curriculum brochures', 'Multi-channel WhatsApp reminders'],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & D2C Brands',
    desc: 'ROAS scaling on Meta and Google, automated abandoned cart recovery via WhatsApp, and retention post-purchase sequences.',
    points: ['Performance creative testing', 'Catalog sync & 1-click checkout links', 'Customer lifetime value expansion'],
  },
  {
    id: 'b2b',
    title: 'B2B, Legal & Professional Services',
    desc: 'Inbound deal qualification, calendar booking for partners, case evaluation funnels, and executive outreach.',
    points: ['High-intent search ads', 'Automated pre-screening questionnaires', 'HubSpot & CRM pipeline routing'],
  },
  {
    id: 'automotive',
    title: 'Automotive & Dealerships',
    desc: 'Test-drive booking bots, inventory alert retargeting, showroom visit reminders, and service maintenance follow-ups.',
    points: ['Instant vehicle brochure delivery', 'Location-based test drive scheduling', 'Trade-in valuation qualification'],
  },
]

function Industries() {
  const [openId, setOpenId] = useState('real-estate')

  const toggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="industries" id="industries">
      <div className="industries-container">
        <div className="industries-intro">
          <span className="industries-label">INDUSTRIES</span>
          <h2 className="industries-title">Solutions Built for Your Industry</h2>
          <p className="industries-desc">
            We understand that every sector requires a different acquisition angle, qualification speed, and compliance standard.
          </p>
          <div className="industries-badge">
            <span className="dot"></span>
            Tailored systems deployed across 6+ commercial sectors
          </div>
        </div>

        <div className="industries-accordion">
          {industries.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className={`industry-item ${isOpen ? 'industry-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="industry-header"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="industry-header__title">{item.title}</span>
                  <span className="industry-header__icon">{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div className="industry-body">
                    <p className="industry-body__desc">{item.desc}</p>
                    <ul className="industry-body__points">
                      {item.points.map((pt) => (
                        <li key={pt}>
                          <span className="bullet">✓</span> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Industries
