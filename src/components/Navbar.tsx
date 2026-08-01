import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logoImage from '../assets/img/logo.png'

const links = [
  { href: '#home', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Réalisations' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 w-full border-b border-[#0E53B7]/10 bg-white/90 backdrop-blur-2xl'>
      <div className='section-shell flex items-center justify-between py-3 md:py-4'>
        <a href='#home' className='flex items-center gap-3 text-[#000000]'>
          <img src={logoImage} alt='Logo Equilibre Agency' className='h-11 w-auto object-contain md:h-14' />
          <span className='leading-tight'>
            <span className='block text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-[#000000] md:text-[1.05rem]'>
              Equilibre
            </span>
            <span className='block text-[0.68rem] text-[#4B5563] md:text-[0.76rem]'>
              Agence
            </span>
          </span>
        </a>

        <nav className='hidden items-center gap-1 rounded-full border border-[#0E53B7]/10 bg-white px-2 py-1 text-sm text-[#111827] shadow-[0_18px_45px_-34px_rgba(14,83,183,0.25)] md:flex'>
          {links.map(({ href, label }, index) => (
            <a
              key={label}
              href={href}
              className={`rounded-full px-4 py-2 transition hover:bg-[#0E53B7]/8 hover:text-[#0E53B7] ${
                index === 0 ? 'bg-[#0E53B7]/10 text-[#0E53B7]' : ''
              }`}
            >
              <span>{label}</span>
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
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className='block rounded-xl px-3 py-3 text-sm text-[#111827] transition hover:bg-[#0E53B7]/6 hover:text-[#0E53B7]'
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
