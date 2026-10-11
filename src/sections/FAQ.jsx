import { useState } from 'react'
import './FAQ.scss'

const faqs = [
  {
    q: 'How fast can we expect our first set of qualified leads or enquiries?',
    a: 'For paid acquisition and WhatsApp automation funnels, campaigns typically go live within 5–7 days after onboarding. High-intent inquiries normally start arriving within 48–72 hours of ad and responder activation.',
  },
  {
    q: 'Do we need our own marketing team or CRM tools before working with you?',
    a: 'No. GenzUv operates either as your full-stack growth team or integrates directly with your existing setup. We can configure automated CRM funnels and lead responders from scratch, or bridge directly into tools like HubSpot, Zoho, or Slack.',
  },
  {
    q: 'What makes your WhatsApp automation different from basic chatbots?',
    a: 'We build conversational workflows trained specifically on your product knowledge, pricing, and qualification criteria. They don’t just output static menus; they answer objections, qualify buyer intent, collect prospect details, and book meetings directly into your calendar.',
  },
  {
    q: 'How are campaign outcomes measured and reported?',
    a: 'We track real business outcomes rather than vanity impressions: qualified calls, verified WhatsApp conversations, and booked deals. You receive transparent live dashboard access plus structured weekly KPI reviews.',
  },
  {
    q: 'What is your typical engagement model?',
    a: 'We work on a flexible sprint or monthly retainer model with clear milestone deliverables. We do not lock you into rigid multi-year agreements without proven performance.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-sidebar">
          <span className="faq-label">FAQ</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-desc">
            Everything you need to know about our services, process, and how we work with you.
          </p>
          <a
            href="https://wa.me/919566180862"
            target="_blank"
            rel="noreferrer"
            className="faq-whatsapp-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contact on WhatsApp
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={item.q}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question__text">{item.q}</span>
                  <span className="faq-question__icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
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

export default FAQ
