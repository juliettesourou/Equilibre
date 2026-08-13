import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TrustedBy from './components/TrustedBy'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServiceDetailPage from './components/ServiceDetailPage'
import LegalPage from './components/LegalPage'
import CookieBanner from './components/CookieBanner'
import { legalNoticeSections, privacySections, services } from './data/siteContent'
import { useActiveSection } from './hooks/useActiveSection'

function App() {
  const pathname = window.location.pathname
  const { activeSection, setActiveSection } = useActiveSection()

  const serviceMatch = pathname.match(/^\/services\/([^/]+)$/)
  const currentService = serviceMatch
    ? services.find((service) => service.slug === serviceMatch[1])
    : null

  if (currentService) {
    return (
      <div className='min-h-screen bg-[var(--page-bg)] text-[#000000]'>
      <Navbar activeSection='services' />
        <ServiceDetailPage service={currentService} />
        <Footer />
        <CookieBanner />
      </div>
    )
  }

  if (pathname === '/mentions-legales') {
    return (
      <div className='min-h-screen bg-[var(--page-bg)] text-[#000000]'>
        <Navbar />
        <LegalPage
          title='Mentions légales'
          intro="Retrouvez ici les principales informations encadrant l'utilisation du site Equilibre Agency."
          sections={legalNoticeSections}
        />
        <Footer />
        <CookieBanner />
      </div>
    )
  }

  if (pathname === '/politique-confidentialite') {
    return (
      <div className='min-h-screen bg-[var(--page-bg)] text-[#000000]'>
        <Navbar />
        <LegalPage
          title='Politique de confidentialité'
          intro='Cette page présente la manière dont les informations partagées via le site sont traitées et protégées.'
          sections={privacySections}
        />
        <Footer />
        <CookieBanner />
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-[var(--page-bg)] text-[#000000]'>
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

      <div id='home' className='section-shell pt-5'>
        <Home />
      </div>

      <div id='about' className='section-shell section-block'>
        <About />
      </div>

      <div id='services' className='section-shell section-block'>
        <Services />
      </div>

      <div id='skills' className='section-shell section-block pt-0'>
        <Experiences />
      </div>

      <div id='projects' className='section-shell section-block'>
        <Projects />
      </div>

      <div className='section-shell section-block pt-0'>
        <TrustedBy />
      </div>

      <Contact />
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
