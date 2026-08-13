import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import type { MouseEvent } from 'react'
import logoImage from '../assets/img/logo.png'

const links = [
  { href: '/#home', label: 'Accueil', id: 'home' },
  { href: '/#about', label: 'À propos', id: 'about' },
  { href: '/#services', label: 'Nos services', id: 'services' },
  { href: '/#projects', label: 'Nos réalisations', id: 'projects' },
  { href: '/#contact', label: 'Contact', id: 'contact' },
]

type NavbarProps = {
  activeSection?: string
  onSectionChange?: (sectionId: string) => void
}

const Navbar = ({ activeSection = 'home', onSectionChange }: NavbarProps) => {
  const [open, setOpen] = useState(false)
  const isHomePage = window.location.pathname === '/'

  const handleSectionNavigation = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    onSectionChange?.(id)

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
    <header className='fixed inset-x-0 top-0 z-50 w-full border-b border-[#0E53B7]/10 bg-white/90 backdrop-blur-2xl'>
      <div className='section-shell flex items-center justify-between py-3 md:py-4'>
        <a href='/' className='flex items-center text-[#000000]'>
          <img src={logoImage} alt='Logo Equilibre Agency' className='h-16 w-auto object-contain md:h-20' />
        </a>

        <nav className='hidden min-w-[48rem] items-center gap-2 rounded-full border border-[#0E53B7]/10 bg-white px-4 py-1.5 text-base font-medium text-[#111827] shadow-[0_18px_45px_-34px_rgba(14,83,183,0.25)] md:flex lg:min-w-[60rem]'>
          {links.map(({ href, label, id }) => (
            <a
              key={label}
              href={href}
              onClick={(event) => handleSectionNavigation(event, id)}
              className={`relative flex-1 rounded-full border px-6 py-3 text-center transition hover:border-[#0E53B7]/22 hover:bg-[#0E53B7]/5 hover:text-[#0E53B7] ${
                isHomePage && activeSection === id
                  ? 'border-transparent bg-transparent font-semibold text-[#0E53B7]'
                  : 'border-transparent'
              }`}
            >
              {label}
              {isHomePage && activeSection === id && (
                <span className='absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-[#0E53B7]' />
              )}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-2 md:gap-3'>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0E53B7]/14 bg-white text-[#0E53B7] transition hover:border-[#0E53B7]/50 md:hidden'
          >
            {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {open && (
        <nav className='border-t border-[#0E53B7]/10 bg-white px-5 py-4 md:hidden'>
          {links.map(({ href, label, id }) => (
            <a
              key={label}
              href={href}
              onClick={(event) => {
                setOpen(false)
                handleSectionNavigation(event, id)
              }}
              className={`block rounded-xl px-3 py-3 text-sm transition hover:bg-[#0E53B7]/6 hover:text-[#0E53B7] ${
                isHomePage && activeSection === id
                  ? 'border border-[#0E53B7]/18 bg-[#0E53B7]/6 font-semibold text-[#0E53B7]'
                  : 'border border-transparent text-[#111827]'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
