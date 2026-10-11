import Hero from './sections/Hero.jsx'
import ProjectShowcase from './sections/ProjectShowcase.jsx'
import About from './sections/About.jsx'
import Services from './sections/Services.jsx'
import GrowthSystem from './sections/GrowthSystem.jsx'
import Industries from './sections/Industries.jsx'
import Portfolio from './sections/Portfolio.jsx'
import Team from './sections/Team.jsx'
import Blog from './sections/Blog.jsx'
import FAQ from './sections/FAQ.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectShowcase />
        <About />
        <Services />
        <GrowthSystem />
        <Industries />
        <Portfolio />
        <Team />
        <Blog />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
