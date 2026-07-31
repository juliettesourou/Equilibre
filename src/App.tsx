import './App.css'
import { MessageCircle } from 'lucide-react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Parcours from './components/Parcours'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import Footer from './components/Footer'

const whatsappHref =
  'https://wa.me/22966727434?text=Bonjour%20Dr%20Adjibayo%2C%20je%20souhaite%20vous%20contacter.'

function App() {
  return (
    <div className='min-h-screen bg-[#F7FBF9]'>
      <Navbar />

      <div id='home' className='section-shell pt-4'>
        <Home />
      </div>

      <div id='about' className='section-shell section-block'>
        <About />
      </div>

      <div id='services' className='section-shell section-block'>
        <Services />
      </div>

      <div id='parcours' className='section-shell section-block'>
        <Parcours />
      </div>

      <div id='projects' className='section-shell section-block'>
        <Projects />
      </div>

      <div id='skills' className='section-shell section-block'>
        <Experiences />
      </div>

      <Contact />
      <Footer />

      <a
        href={whatsappHref}
        target='_blank'
        rel='noreferrer'
        aria-label='Contacter sur WhatsApp'
        className='fixed bottom-6 right-6 z-[70] inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_24px_45px_-24px_rgba(37,211,102,0.9)] transition hover:-translate-y-1 hover:bg-[#1FB85A]'
      >
        <span className='flex h-10 w-10 items-center justify-center rounded-full bg-white/18'>
          <MessageCircle className='h-5 w-5' />
        </span>
        <span className='hidden sm:inline'>WhatsApp</span>
      </a>
    </div>
  )
}

export default App
