import { useState } from 'react'
import './Contact.scss'

const serviceOptions = [
  'Website Development',
  'Lead Generation',
  'AI Automation',
  'WhatsApp Automation',
  'Social Media & Ads',
  'Branding & Design',
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    selectedServices: ['Lead Generation'],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const toggleService = (svc) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(svc)
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== svc)
          : [...prev.selectedServices, svc],
      }
    })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-label">CONTACT US</span>
          <h2 className="contact-title">Tell Us About Your Business</h2>
          <p className="contact-subtitle">
            Send a message or reach us directly. We respond within a few hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-box">
                <h3>Enquiry Received</h3>
                <p>
                  Thank you! Our growth team will review your business requirements and contact you within 2 hours.
                </p>
                <button
                  type="button"
                  className="reset-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enquiry-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-business">Business Name / Website</label>
                    <input
                      id="contact-business"
                      type="text"
                      name="business"
                      placeholder="e.g. Acme Health Clinic"
                      value={formData.business}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-email">Work Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-phone">Phone / WhatsApp Number *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Services Needed</label>
                  <div className="services-chips">
                    {serviceOptions.map((svc) => {
                      const isSelected = formData.selectedServices.includes(svc)
                      return (
                        <button
                          key={svc}
                          type="button"
                          className={`chip ${isSelected ? 'chip--active' : ''}`}
                          onClick={() => toggleService(svc)}
                        >
                          {isSelected ? '✓ ' : '+ '}
                          {svc}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">Project Details / Goals</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    placeholder="Briefly describe your current lead volume, bottlenecks, or specific goals..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="submit-enquiry-btn">
                  Submit Enquiry
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Contact Card */}
          <div className="contact-direct-card">
            <h3 className="direct-title">Direct Contact</h3>
            <p className="direct-subtitle">
              Prefer speaking with a human right away? Connect with our team directly.
            </p>

            <div className="direct-details">
              <div className="detail-item">
                <span className="detail-label">Phone</span>
                <a href="tel:+919566180862" className="detail-val">
                  +91 95661 80862
                </a>
              </div>

              <div className="detail-item">
                <span className="detail-label">Email</span>
                <a href="mailto:hello@genzuv.com" className="detail-val">
                  hello@genzuv.com
                </a>
              </div>

              <div className="detail-item">
                <span className="detail-label">Headquarters</span>
                <span className="detail-val">
                  Remote · Serving Businesses Worldwide
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Working Hours</span>
                <span className="detail-val">
                  Mon – Sat: 9:00 AM – 7:00 PM IST
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Response Time</span>
                <span className="detail-val detail-val--badge">
                  ● Under 2 hours guaranteed
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/919566180862"
              target="_blank"
              rel="noreferrer"
              className="direct-whatsapp-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
