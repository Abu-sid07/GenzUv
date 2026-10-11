import aboutMockup from '../assets/about-mockup.png'
import './About.scss'

const points = [
  {
    title: 'Real enquiries first',
    desc: 'Outcomes measured by verified calls, WhatsApp messages, and booked consultations.',
  },
  {
    title: 'Clear communication',
    desc: 'Direct WhatsApp access to the people handling your work. Zero agency jargon.',
  },
  {
    title: 'Marketing plus automation',
    desc: 'Traffic generation connected directly to automated replies so no lead slips through.',
  },
]

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src={aboutMockup}
            alt="GENZ UV project mockup showing a wellness website and dashboard interface"
            loading="lazy"
          />
        </div>

        <div className="about-content">
          <span className="about-label">ABOUT US</span>
          <h2 className="about-title">Marketing That Ends in Real Enquiries</h2>
          <p className="about-body">
            Most business owners do not want more reports. They want more enquiries.
            That is what we work on. We run your marketing, build your website, and set up
            automation so every enquiry gets noticed and followed up. We work with real
            estate, schools and coaching, healthcare, retail, startups, SMEs and local
            businesses. You get plain talk, clear steps and a team that explains what it is
            doing and why.
          </p>

          <div className="about-points">
            {points.map((point) => (
              <div key={point.title} className="about-point">
                <h3 className="about-point-title">{point.title}</h3>
                <p className="about-point-desc">{point.desc}</p>
              </div>
            ))}
          </div>

          <a className="about-cta" href="#contact">
            EXPLORE MORE
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
