import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'
import logoImage from '../assets/img/logo.png'

type ContactInfo = {
  icon: typeof Mail
  label: string
  value: string
  href: string | null
}

const whatsappHref = 'https://wa.me/22954345477'

const infos: ContactInfo[] = [
  { icon: Phone, label: 'Téléphone', value: '(+229) 54 34 54 77', href: 'tel:+22954345477' },
  { icon: Mail, label: 'Email', value: 'contact@equilibre.media', href: 'mailto:contact@equilibre.media' },
  {
    icon: MapPin,
    label: 'Adresse',
    value: "Bénin, Abomey-Calavi, Rue Office Notarial en face de l'UAC.",
    href: null,
  },
]

const Contact = () => {
  const [gridRef, gridInView] = useInView()
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Bonjour Equilibre,\n\nNom: ${form.nom}\nEmail: ${form.email}\nSujet: ${form.sujet}\n\nMessage:\n${form.message}`
    )
    window.open(`${whatsappHref}?text=${text}`, '_blank', 'noreferrer')
  }

  const field =
    'w-full rounded-2xl border border-[#0E53B7]/14 bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] outline-none transition focus:border-[#0E53B7] focus:bg-[#f9fbff] focus:ring-4 focus:ring-[#0E53B7]/10'

  return (
    <section id='contact' className='relative overflow-hidden border-t border-[#0E53B7]/10 bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)] py-16 text-[#000000]'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(14,83,183,0.12),transparent_20%),radial-gradient(circle_at_90%_70%,rgba(229,0,18,0.06),transparent_18%)]' />
      <div className='section-shell relative'>
        <div ref={gridRef} className='grid gap-8 xl:grid-cols-[1fr_0.95fr] xl:gap-10'>
          <div
            style={{ animationDelay: '0ms' }}
            className={`${gridInView ? 'anim-fade-up' : 'opacity-0'}`}
          >
            <div className='flex items-center gap-3'>
              <img src={logoImage} alt='Logo Equilibre Agency' className='h-14 w-auto object-contain' />
              <div>
                <p className='text-[1.05rem] font-semibold uppercase tracking-[0.08em] text-[#000000]'>
                  Equilibre
                </p>
                <p className='max-w-md text-sm leading-7 text-[#4B5563]'>
                  Nous concevons des solutions numériques sur mesure pour aider
                  votre entreprise à gagner en efficacité et en visibilité.
                </p>
              </div>
            </div>

            <div className='mt-8 grid gap-4 sm:grid-cols-2'>
              {infos.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className='eq-outline-card rounded-[1.35rem] p-5 transition hover:border-[#0E53B7]/24 hover:bg-[#f8fbff]'>
                    <div className='flex items-start gap-3'>
                      <span className='mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0E53B7]/10 text-[#0E53B7]'>
                        <Icon className='h-4 w-4' />
                      </span>
                      <div>
                        <p className='text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#E50012]'>
                          {label}
                        </p>
                        <p className='mt-2 text-sm leading-7 text-[#4B5563]'>{value}</p>
                      </div>
                    </div>
                  </div>
                )
                return href ? (
                  <a key={label} href={href} className='block'>
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                )
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ animationDelay: '140ms' }}
            className={`eq-card rounded-[1.9rem] p-5 shadow-[0_24px_50px_-38px_rgba(14,83,183,0.2)] sm:p-6 xl:p-8 ${
              gridInView ? 'anim-fade-up' : 'opacity-0'
            }`}
          >
            <div className='mb-6 flex items-start justify-between gap-4'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.3em] text-[#E50012]'>
                  Contact
                </p>
                <h3 className='mt-2 text-2xl font-semibold text-[#000000]'>Contactez-nous pour toute question.</h3>
                <p className='mt-2 text-sm leading-7 text-[#4B5563]'>
                  Remplissez le formulaire pour nous envoyer votre demande ou votre question.
                </p>
              </div>
              <span className='rounded-full bg-[#E50012] px-3 py-1 text-xs font-semibold text-white'>
                Réponse rapide
              </span>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <input
              type='text'
              placeholder='Votre nom'
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
                className={field}
                required
              />
              <input
              type='email'
              placeholder='Votre adresse e-mail'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
                required
              />
            </div>

            <input
              type='text'
              placeholder='Objet du message'
              value={form.sujet}
              onChange={(e) => setForm({ ...form, sujet: e.target.value })}
              className={`${field} mt-4`}
              required
            />

            <textarea
              rows={6}
              placeholder='Message'
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${field} mt-4 resize-none`}
              required
            />

            <button
              type='submit'
              className='eq-button-primary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110'
            >
              <Send className='h-4 w-4' />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
