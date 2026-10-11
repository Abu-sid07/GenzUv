import './Footer.scss'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand & Inquiries */}
          <div className="footer-col footer-col--brand">
            <div className="brand-header">
              <span className="brand-title">GENZ UV</span>
              <span className="brand-subtitle">ULTIMATE VALUES</span>
            </div>
            <p className="brand-desc">
              Digital marketing and AI automation for businesses in India.
            </p>

            <div className="contact-inquiries">
              <span className="inquiries-label">CONTACT INQUIRIES</span>
              <p className="inquiry-line">
                Address: Remote · Serving the global People
              </p>
              <p className="inquiry-line">
                Phone:{' '}
                <a href="tel:+919566180862">+91 95661 80862</a>
              </p>
              <p className="inquiry-line">
                Email:{' '}
                <a href="mailto:hello@genzuv.com">hello@genzuv.com</a>
              </p>
            </div>
          </div>

          {/* Navigation Index */}
          <div className="footer-col footer-col--nav">
            <span className="col-heading">NAVIGATION INDEX</span>
            <div className="nav-subcols">
              <ul className="nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#growth-system">Growth System</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <ul className="nav-list">
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#industries">Industries</a></li>
              </ul>
            </div>
          </div>

          {/* Channels & Network */}
          <div className="footer-col footer-col--channels">
            <span className="col-heading">CHANNELS & NETWORK</span>
            <ul className="channels-list">
              <li>
                <a href="https://genzuv.in" target="_blank" rel="noreferrer">
                  🌐 Website (genzuv.in)
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  💼 LinkedIn
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  📷 Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  ▶ YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#home">Privacy Policy</a>
            <span className="separator">·</span>
            <a href="#home">Terms of Service</a>
            <span className="separator">·</span>
            <a href="#home">Security & Compliance</a>
          </div>
          <p className="footer-copyright">
            © 2026 GENZ UV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
