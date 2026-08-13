import logoImage from '../assets/img/logo.png'
import type { MouseEvent } from 'react'
import { emailAddress, phoneDisplay, phoneHref } from '../data/siteContent'

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/EquilibreAgency' },
  { label: 'Instagram', href: 'https://www.instagram.com/agency.equilibre/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/equilibre-agency/' },
  { label: 'X', href: 'https://x.com/name' },
]

const Footer = () => {
  const isHomePage = window.location.pathname === '/'

  const handleSectionNavigation = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHomePage) {
      return
    }

    event.preventDefault()
    const section = document.getElementById(id)
    if (!section) {
      return
    }

    window.history.replaceState(null, '', `/#${id}`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className='border-t border-[#0E53B7]/10 bg-[linear-gradient(180deg,#f6faff_0%,#edf4ff_100%)] pb-8 pt-8'>
    <div className='section-shell rounded-[2rem] border border-[#0E53B7]/10 bg-white px-5 py-8 shadow-[0_26px_60px_-44px_rgba(14,83,183,0.2)] sm:px-6 md:px-8'>
      <div className='grid gap-8 text-sm text-[#4B5563] sm:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]'>
        <div className='min-w-0'>
          <div className='flex items-center text-[#000000]'>
            <img src={logoImage} alt='Logo Equilibre Agency' className='h-16 w-auto max-w-[11rem] object-contain sm:h-20 sm:max-w-none' />
          </div>
          <div className='mt-5 flex flex-wrap gap-2'>
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target='_blank'
                rel='noreferrer'
                className='rounded-full border border-[#0E53B7]/12 bg-[#f7faff] px-3 py-1 text-xs text-[#0E53B7] transition hover:border-[#E50012]/30 hover:text-[#E50012]'
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className='min-w-0'>
          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#0E53B7]'>Liens rapides</p>
          <div className='mt-4 space-y-2'>
            <a href='/#home' onClick={(event) => handleSectionNavigation(event, 'home')} className='block transition hover:text-[#0E53B7]'>Accueil</a>
            <a href='/#about' onClick={(event) => handleSectionNavigation(event, 'about')} className='block transition hover:text-[#0E53B7]'>Notre agence</a>
            <a href='/#services' onClick={(event) => handleSectionNavigation(event, 'services')} className='block transition hover:text-[#0E53B7]'>Nos services</a>
            <a href='/#contact' onClick={(event) => handleSectionNavigation(event, 'contact')} className='block transition hover:text-[#0E53B7]'>Nous contacter</a>
          </div>
        </div>

        <div className='min-w-0'>
          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#0E53B7]'>Nos services</p>
          <div className='mt-4 space-y-2'>
            <p>API</p>
            <p>Automatisation</p>
            <p>Visibilité numérique</p>
            <p>Développement web</p>
          </div>
        </div>

        <div className='min-w-0'>
          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#0E53B7]'>Contact</p>
          <div className='mt-4 space-y-2'>
            <a href={phoneHref} className='block break-words transition hover:text-[#0E53B7]'>{phoneDisplay}</a>
            <a href={`mailto:${emailAddress}`} className='block break-words transition hover:text-[#0E53B7]'>{emailAddress}</a>
            <p className='break-words'>Bénin, Abomey-Calavi</p>
          </div>
        </div>
      </div>

      <div className='mt-8 flex flex-col gap-3 border-t border-[#0E53B7]/10 pt-5 text-xs text-[#6B7280] sm:flex-row sm:flex-wrap sm:justify-end'>
        <div className='flex flex-wrap gap-4 sm:gap-6'>
          <a href='/mentions-legales' className='transition hover:text-[#0E53B7]'>Mentions légales</a>
          <a href='/politique-confidentialite' className='transition hover:text-[#0E53B7]'>Politique de confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
