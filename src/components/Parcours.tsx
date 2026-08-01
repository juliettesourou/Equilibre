import Title from './Title'
import { Briefcase, Search, PenTool, Rocket } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const process = [
  {
    step: '01',
    title: 'Cadrage du besoin',
    description:
      "Nous clarifions vos objectifs, votre cible, vos priorites et les resultats attendus avant de lancer le projet.",
  },
  {
    step: '02',
    title: 'Conception de la solution',
    description:
      "Nous definissons la structure, les contenus, les fonctionnalites et l'experience la plus adaptee a votre activite.",
  },
  {
    step: '03',
    title: 'Developpement et integration',
    description:
      "Nous realisons les pages, les automatisations et les integrations techniques necessaires a votre dispositif numerique.",
  },
  {
    step: '04',
    title: 'Mise en ligne et accompagnement',
    description:
      "Nous livrons un site pret a etre presente, partage et utilise pour convertir vos visiteurs en prises de contact.",
  },
]

const deliverables = [
  'Presentation claire des services et expertises.',
  'Parcours visiteur structure de la decouverte jusqu au contact.',
  'Mise en avant des realisations, avantages et preuves de confiance.',
  'Base solide pour evoluer vers davantage de contenus ou de fonctionnalites.',
]

const icons = [Search, PenTool, Briefcase, Rocket]

const Parcours = () => {
  const [gridRef, gridInView] = useInView()

  return (
    <section className='overflow-hidden rounded-[2.1rem] bg-[var(--white-panel)] px-5 py-8 shadow-[0_28px_70px_-48px_rgba(141,61,255,0.34)] md:px-10 md:py-14'>
      <Title
        title='Une methode claire et efficace'
        eyebrow='Notre processus'
        tone='light'
        subtitle="Equilibre explique aussi comment les projets sont menes, afin de rassurer les prospects et de leur donner une vision concrete de l'accompagnement."
      />

      <div ref={gridRef} className='grid gap-8'>
        <div
          style={{ animationDelay: '0ms' }}
          className={`grid gap-7 sm:grid-cols-2 xl:grid-cols-4 ${
            gridInView ? 'anim-fade-up' : 'opacity-0'
          }`}
        >
          {process.map((item, i) => {
            const Icon = icons[i]
            return (
              <article key={item.step} className='relative text-center'>
                <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7c35ff_0%,#b44dff_100%)] text-white shadow-[0_18px_40px_-24px_rgba(142,61,255,0.74)]'>
                  <Icon className='h-6 w-6' />
                </div>
                {i < process.length - 1 ? (
                  <div className='absolute left-[calc(50%+2.5rem)] top-8 hidden h-px w-[calc(100%-1rem)] border-t border-dashed border-[#dccdf4] xl:block' />
                ) : null}
                <p className='mt-5 text-2xl font-semibold text-[#120a29]'>{item.step}</p>
                <h3 className='mt-3 text-base font-semibold text-[#120a29]'>{item.title}</h3>
                <p className='mt-3 text-sm leading-7 text-[#584d73]'>{item.description}</p>
              </article>
            )
          })}
        </div>

        <div
          style={{ animationDelay: '150ms' }}
          className={`rounded-[1.7rem] border border-[#e3d7fb] bg-white px-6 py-7 text-center shadow-[0_18px_44px_-30px_rgba(141,61,255,0.22)] ${
            gridInView ? 'anim-fade-up' : 'opacity-0'
          }`}
        >
          <div className='mb-4 flex items-center justify-center gap-3 text-[#120a29]'>
            <span className='flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7c35ff_0%,#b44dff_100%)] text-white'>
              <Briefcase className='h-5 w-5' />
            </span>
            <h3 className='text-lg font-semibold'>Ce que cette methode rend possible</h3>
          </div>
          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
            {deliverables.map((item) => (
              <div
                key={item}
                className='rounded-[1.2rem] border border-[#efe7fd] bg-[#fbf8ff] p-4 text-sm leading-7 text-[#584d73]'
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parcours
