import './Testimonials.scss'

const testimonials = [
  {
    id: 1,
    quote: 'GenzUv transformed our inbound pipeline. Within 3 weeks of launching our Meta lead campaign and WhatsApp AI workflow, we closed 14 high-ticket projects without increasing sales headcount.',
    name: 'Vikramaditya Rao',
    role: 'Managing Director, Apex Infra Developers',
  },
  {
    id: 2,
    quote: 'The automation they implemented responded to every prospect under 20 seconds. Our show-up rate for discovery calls went from 42% to 81%. Easily the highest ROI partner we’ve worked with.',
    name: 'Priya Sundaram',
    role: 'Founder, Lumina Health & Aesthetics',
  },
  {
    id: 3,
    quote: 'Transparent numbers, zero agency jargon, and an obsession with actual bottom-line revenue. They behave like true co-founders in our growth engine rather than a detached external agency.',
    name: 'Nikhil Shenoy',
    role: 'Growth Lead, NovaScale Commerce',
  },
  {
    id: 4,
    quote: 'Before working with GenzUv, our sales reps wasted hours chasing unqualified leads. Their screening bot now qualifies budget and intent upfront, saving our team 25+ hours weekly.',
    name: 'Anand Kulkarni',
    role: 'Director, ProEd Academy',
  },
  {
    id: 5,
    quote: 'Our cost per customer acquisition dropped by 44% in the first 60 days. The CRM automation syncs every call directly to our pipeline with zero manual entry required.',
    name: 'Divya Nair',
    role: 'Head of Operations, AutoDrive Hub',
  },
  {
    id: 6,
    quote: 'From website redevelopment to automated lead follow-ups, everything was delivered cleanly on schedule. Our organic inquiries doubled within two months.',
    name: 'Sameer Sen',
    role: 'Managing Partner, Lexis Advisory',
  },
]

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What our users say</h2>
          <p className="testimonials-subtitle">See what our customers have to say about us.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <p className="testimonial-card__quote">“{t.quote}”</p>
              
              <div className="testimonial-card__author">
                <div className="author-avatar" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="author-info">
                  <span className="author-name">{t.name}</span>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-pagination" aria-hidden="true">
          <span className="dot dot--active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
