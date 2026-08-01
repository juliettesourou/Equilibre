import './App.css'
import { MessageCircle } from 'lucide-react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TrustedBy from './components/TrustedBy'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import Footer from './components/Footer'

const whatsappHref =
  'https://wa.me/22954345477?text=Bonjour%20Equilibre%2C%20je%20souhaite%20vous%20contacter%20pour%20mon%20projet.'

function App() {
  return (
    <div className='min-h-screen bg-[var(--page-bg)] text-[#000000]'>
      <Navbar />

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

      <a
        href={whatsappHref}
        target='_blank'
        rel='noreferrer'
        aria-label='Contacter Equilibre sur WhatsApp'
        className='fixed bottom-6 right-6 z-[70] inline-flex items-center gap-3 rounded-full border border-[#0E53B7]/12 bg-[linear-gradient(135deg,#0E53B7_0%,#1765D4_72%,#E50012_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_24px_45px_-24px_rgba(14,83,183,0.42)] transition hover:-translate-y-1 hover:brightness-110'
      >
        <span className='flex h-10 w-10 items-center justify-center rounded-full bg-white/15'>
          <MessageCircle className='h-5 w-5' />
        </span>
        <span className='hidden sm:inline'>Parler a Equilibre</span>
      </a>
    </div>
  )
}

export default App
