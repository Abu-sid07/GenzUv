import { useState, useEffect } from 'react'
import './Navbar.scss'

const navigation = [
  'Home',
  'About',
  'Services',
  'Growth System',
  'Industries',
  'Portfolio',
  'Team',
  'Blog',
  'FAQ',
  'Testimonials',
  'Contact',
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) =>
        document.getElementById(item.toLowerCase().replace(/\s+/g, '-'))
      )
      const scrollY = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navigation[i].toLowerCase().replace(/\s+/g, '-'))
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="GENZ UV Home">
        <span className="brand-name">GENZ UV</span>
        <span className="brand-tagline">
          ULTIMATE<br />VALUES
        </span>
      </a>

      <button
        className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
        type="button"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
      </button>

      <nav
        className={`site-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label="Main navigation"
      >
        {navigation.map((item) => {
          const id = item.toLowerCase().replace(/\s+/g, '-')
          return (
            <a
              key={item}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          )
        })}
      </nav>

      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

export default Navbar
