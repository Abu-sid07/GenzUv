import SectionHeading from '../components/SectionHeading.jsx'
import './Services.scss'

const services = [
  {
    number: '01',
    title: 'Performance Marketing',
    tags: ['PAID ADS', 'HIGH INTENT'],
    desc: 'Targeted campaigns across Google, Meta, and LinkedIn focused on high-intent prospects and verifiable ROAS.',
  },
  {
    number: '02',
    title: 'Local SEO & Google Search',
    tags: ['LOCAL SEO', 'MAPS PACK'],
    desc: 'Dominating local search results, Google Maps 3-pack, and high-intent organic search queries for your region.',
  },
  {
    number: '03',
    title: 'Lead Generation Funnels',
    tags: ['FUNNEL ARCHITECTURE', 'CONVERSION'],
    desc: 'Custom landing pages, qualification forms, and instant booking mechanisms engineered to minimize bounce.',
  },
  {
    number: '04',
    title: 'Meta & Social Advertising',
    tags: ['RE-TARGETING', 'OMNICHANNEL'],
    desc: 'High-converting video and image ad creatives tested systematically to lower customer acquisition costs.',
  },
  {
    number: '05',
    title: 'Website Development',
    tags: ['FAST LOADING', 'MOBILE FIRST'],
    desc: 'Fast, responsive websites designed to turn anonymous casual visitors into direct WhatsApp enquiries.',
  },
  {
    number: '06',
    title: 'AI Automation',
    tags: ['CRM SYNC', 'ZERO DELAY'],
    desc: 'Automated lead capture, data logging and immediate follow-ups without manual spreadsheets.',
  },
  {
    number: '07',
    title: 'WhatsApp Automation',
    tags: ['INSTANT REPLIES', 'OFFICIAL API'],
    desc: 'Automated greeting messages, appointment booking flows and catalogue sharing directly in chat.',
  },
  {
    number: '08',
    title: 'Social Media Marketing',
    tags: ['ENGAGEMENT', 'CALENDAR DRIVEN'],
    desc: 'Consistent, brand-aligned presence across Instagram and LinkedIn that keeps your business top of mind.',
  },
  {
    number: '09',
    title: 'Branding',
    tags: ['IDENTITY SYSTEM', 'STYLE MANUAL'],
    desc: 'Distinct visual guidelines, logos and assets that make your company instantly memorable and trustworthy.',
  },
  {
    number: '10',
    title: 'Content Creation',
    tags: ['CREATIVES', 'CLEAR COPY'],
    desc: 'Sharp graphics, high-converting video formats and written messaging built to answer real questions.',
  },
]

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <SectionHeading
          label="WHAT WE DO"
          title="Services Engineered for Scalable Revenue"
          subtitle="From initial brand discovery to automated pipeline execution, our services are built to convert."
        />

        <div className="services-grid">
          {services.map((item) => (
            <div key={item.number} className="service-card">
              <div className="service-card__top">
                <span className="service-card__number">{item.number}</span>
                <div className="service-card__tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="service-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__desc">{item.desc}</p>

              <div className="service-card__bottom">
                <a href="#contact" className="service-card__enquire">
                  Enquire Now
                </a>
                <a href="#contact" className="service-card__arrow-btn" aria-label={`Enquire about ${item.title}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
