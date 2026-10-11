import './GrowthSystem.scss'

const steps = [
  {
    step: '01',
    pinColor: '#E8956A',
    theme: 'cream',
    title: 'Marketing',
    desc: 'We bring the right people to your business through ads, SEO and targeted social media campaigns.',
  },
  {
    step: '02',
    pinColor: '#5B3DC8',
    theme: 'purple',
    title: 'Leads',
    desc: 'Enquiries from forms and WhatsApp are captured with name, verified phone number and service requested.',
  },
  {
    step: '03',
    pinColor: '#9B51E0',
    theme: 'lavender',
    title: 'Qualification',
    desc: 'Automated filters and smart screening separate casual lookers from serious high-intent buyers.',
  },
  {
    step: '04',
    pinColor: '#E8956A',
    theme: 'cream',
    title: 'Follow-up',
    desc: 'Your team contacts each lead while intent is fresh, equipped with conversation history and exact goals.',
  },
  {
    step: '05',
    pinColor: '#5B3DC8',
    theme: 'purple',
    title: 'Sales',
    desc: 'Leads transition cleanly into booked deals and paying customers, with real-time status in your pipeline.',
  },
  {
    step: '06',
    pinColor: '#19A35B',
    theme: 'mint',
    title: 'Growth',
    desc: 'You review performance metrics, scale high-converting channels, and repeat the winning playbook.',
  },
]

function GrowthSystem() {
  return (
    <section className="growth-system" id="growth-system">
      <div className="growth-container">
        <div className="growth-header">
          <h2 className="growth-title">The GENZ UV Growth System</h2>
          <p className="growth-subtitle">
            A simple six-step path from first click to growth. You always know what happens next.
          </p>
        </div>

        <div className="growth-graph-wrapper">
          {/* SVG connecting dashed curved lines */}
          <svg
            className="growth-connector-svg"
            viewBox="0 0 1000 1200"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 320 80 
                 C 550 120, 680 180, 680 270 
                 C 680 370, 360 380, 360 480 
                 C 360 580, 640 590, 640 690 
                 C 640 790, 380 800, 380 900 
                 C 380 1000, 580 1010, 580 1110"
              stroke="#E8956A"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
          </svg>

          <div className="growth-nodes-list">
            {steps.map((node, index) => (
              <div
                key={node.step}
                className={`growth-node growth-node--${node.theme} growth-node--pos-${index + 1}`}
              >
                {/* Pin marker */}
                <div className="node-pin" style={{ color: node.pinColor }}>
                  <svg width="18" height="24" viewBox="0 0 24 32" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20c0-6.627-5.373-12-12-12zm0 16a4 4 0 110-8 4 4 0 010 8z" />
                  </svg>
                </div>

                <div className="node-inner">
                  <span className="node-number">{node.step}</span>
                  <h3 className="node-title">{node.title}</h3>
                  <p className="node-desc">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="growth-footer">
          <p className="growth-footer-text">
            Every step connects to the next, so fewer leads slip through.
          </p>
          <a href="#contact" className="growth-footer-btn">
            Start Your System
          </a>
        </div>
      </div>
    </section>
  )
}

export default GrowthSystem
