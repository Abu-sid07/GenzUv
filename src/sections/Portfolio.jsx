import './Portfolio.scss'

const projects = [
  {
    id: 1,
    title: 'Aura Clinics & Aesthetic Health',
    subtitle: 'What we did: Full funnel ad campaign and automated booking pipeline',
    bg: '#7CC5B8',
    textColor: '#17151A',
    type: 'laptop',
    screenText: 'Patient Consultation & Calendar Booking System',
  },
  {
    id: 2,
    title: 'UrbanHaven Luxury Properties',
    subtitle: 'What we did: WhatsApp bot setup & High-intent lead filtering',
    bg: '#E8956A',
    textColor: '#FFFFFF',
    type: 'mobile',
    screenText: 'WhatsApp AI Brochure & Site-Visit Bot',
  },
  {
    id: 3,
    title: 'Apex Performance Fitness',
    subtitle: 'What we did: SEO overhaul & Organic lead acquisition',
    bg: '#7BAFD4',
    textColor: '#17151A',
    type: 'mobile',
    screenText: 'Membership Funnel & Local SEO 3-Pack',
  },
  {
    id: 4,
    title: 'Kinetix Apparel & D2C',
    subtitle: 'What we did: Complete D2C brand identity and headless web architecture',
    bg: '#5B3DC8',
    textColor: '#FFFFFF',
    type: 'dashboard',
    screenText: 'Desktop Analytics & Revenue Attribution Engine',
  },
]

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="portfolio-header__left">
            <span className="portfolio-label">SELECTED WORK</span>
            <h2 className="portfolio-title">Our Portfolio</h2>
            <p className="portfolio-subtitle">
              Recent systems engineered across healthcare, real estate, fitness, and e-commerce.
            </p>
          </div>
          <a href="#contact" className="portfolio-view-all">
            View all work
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        <div className="portfolio-cards-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`portfolio-card portfolio-card--${project.type}`}
              style={{ backgroundColor: project.bg, color: project.textColor }}
            >
              <div className="portfolio-card__content">
                <h3 className="portfolio-card__title" style={{ color: project.textColor }}>
                  {project.title}
                </h3>
                <p className="portfolio-card__subtitle" style={{ color: project.textColor }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Device Mockup Frame */}
              <div className="portfolio-card__device">
                {project.type === 'laptop' && (
                  <div className="device-laptop">
                    <div className="device-screen">
                      <div className="screen-header">
                        <span className="screen-dot"></span>
                        <span className="screen-dot"></span>
                        <span className="screen-dot"></span>
                      </div>
                      <div className="screen-content">
                        <p>{project.screenText}</p>
                      </div>
                    </div>
                  </div>
                )}

                {project.type === 'mobile' && (
                  <div className="device-mobile">
                    <div className="mobile-notch"></div>
                    <div className="mobile-screen">
                      <p>{project.screenText}</p>
                    </div>
                  </div>
                )}

                {project.type === 'dashboard' && (
                  <div className="device-dashboard">
                    <div className="dashboard-screen">
                      <div className="screen-header">
                        <span className="screen-dot"></span>
                        <span className="screen-dot"></span>
                        <span className="screen-dot"></span>
                      </div>
                      <div className="screen-content">
                        <p>{project.screenText}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-note">
          <span className="note-icon">ⓘ</span>
          <span>Hide this section until real projects exist.</span>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
