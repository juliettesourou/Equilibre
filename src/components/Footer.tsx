import logoImage from '../assets/img/logo.png'

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/EquilibreAgency' },
  { label: 'Instagram', href: 'https://www.instagram.com/agency.equilibre/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/equilibre-agency/' },
  { label: 'Twitter', href: 'https://x.com/name' },
]

const Footer = () => (
  <footer className='border-t border-[#0E53B7]/10 bg-[linear-gradient(180deg,#f6faff_0%,#edf4ff_100%)] pb-8 pt-8'>
    <div className='section-shell rounded-[2rem] border border-[#0E53B7]/10 bg-white px-5 py-8 shadow-[0_26px_60px_-44px_rgba(14,83,183,0.2)] sm:px-6 md:px-8'>
      <div className='grid gap-8 text-sm text-[#4B5563] sm:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]'>
        <div>
          <div className='flex items-center gap-3 text-[#000000]'>
            <img src={logoImage} alt='Logo Equilibre Agency' className='h-12 w-auto object-contain' />
            <div>
              <p className='text-[1.05rem] font-semibold uppercase tracking-[0.08em] text-[#000000]'>Equilibre</p>
              <p className='text-xs text-[#E50012]'>Agency</p>
            </div>
          </div>
          <p className='mt-4 max-w-xs leading-7'>
            Nous concevons des solutions numeriques sur mesure pour aider votre
            entreprise a gagner en efficacite, en clarte et en visibilite.
          </p>
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

        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#0E53B7]'>Liens rapides</p>
          <div className='mt-4 space-y-2'>
            <a href='#home' className='block transition hover:text-[#0E53B7]'>Accueil</a>
            <a href='#about' className='block transition hover:text-[#0E53B7]'>Notre agence</a>
            <a href='#services' className='block transition hover:text-[#0E53B7]'>Nos services</a>
            <a href='#contact' className='block transition hover:text-[#0E53B7]'>Nous contacter</a>
          </div>
        </div>

        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#0E53B7]'>Nos services</p>
          <div className='mt-4 space-y-2'>
            <p>API</p>
            <p>Automatisation</p>
            <p>Visibilite numerique</p>
            <p>Developpement web</p>
          </div>
        </div>

        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#0E53B7]'>Contact</p>
          <div className='mt-4 space-y-2'>
            <p>(+229) 54 34 54 77</p>
            <p>contact@equilibre.media</p>
            <p>Benin, Abomey-Calavi</p>
          </div>
        </div>
      </div>

      <div className='mt-8 flex flex-col gap-3 border-t border-[#0E53B7]/10 pt-5 text-xs text-[#6B7280] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between'>
        <p>© 2026 Equilibre. Tous droits reserves.</p>
        <div className='flex flex-wrap gap-4 sm:gap-6'>
          <span>Mentions legales</span>
          <span>Politique de confidentialite</span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
