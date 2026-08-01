import { ArrowUpRight } from 'lucide-react'
import Title from './Title'
import { useInView } from '../hooks/useInView'
import apiImage from '../assets/img/api.jpeg'
import devImage from '../assets/img/dev.jpeg'
import numeriqueImage from '../assets/img/numerique.jpeg'
import codeImage from '../assets/img/code.jpeg'

const projects = [
  {
    id: 1,
    title: "Integration d'API",
    desc:
      "Mise en relation de plateformes, d'outils et de services numeriques pour fluidifier les echanges de donnees et simplifier les operations.",
    image: apiImage,
    tags: ['API', 'Integration', 'Interoparabilite'],
  },
  {
    id: 2,
    title: "Developpement d'applications web et mobile sur mesure",
    desc:
      "Conception de solutions web et mobile adaptees aux besoins metier des clients, avec une approche moderne, evolutive et centree sur l'usage.",
    image: devImage,
    tags: ['Web', 'Mobile', 'Sur mesure'],
  },
  {
    id: 3,
    title: 'Automatisation des taches',
    desc:
      "Automatisation de taches repetitives et de flux de travail pour faire gagner du temps aux equipes et rendre les processus plus fiables.",
    image: codeImage,
    tags: ['Automatisation', 'Workflow', 'Performance'],
  },
  {
    id: 4,
    title: 'Visibilite numerique',
    desc:
      "Mise en place d'actions digitales pour renforcer la presence en ligne, soutenir la notoriete et developper l'attractivite de la marque.",
    image: numeriqueImage,
    tags: ['Visibilite', 'Marketing', 'Presence en ligne'],
  },
]

const Projects = () => {
  const [gridRef, gridInView] = useInView()

  return (
    <section>
      <Title
        title="Des realisations qui refletent notre savoir-faire"
        eyebrow='Nos realisations'
        subtitle="Equilibre met en avant les domaines dans lesquels l'entreprise intervient concretement : integration API, developpement sur mesure, automatisation et visibilite numerique."
      />

      <div ref={gridRef} className='grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6'>
        {projects.map((project, i) => (
          <article
            key={project.id}
            style={{ animationDelay: `${i * 120}ms` }}
            className={`glass-card elegant-card eq-card group overflow-hidden rounded-[1.6rem] md:rounded-[1.8rem] ${
              gridInView ? 'anim-fade-up' : 'opacity-0'
            }`}
          >
            <div className='relative h-44 overflow-hidden bg-[#edf4ff] md:h-48'>
              <img
                src={project.image}
                alt={project.title}
                className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] ${
                  gridInView ? 'anim-image-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${120 + i * 120}ms` }}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#0E53B7]/18 via-transparent to-transparent' />
            </div>

              <div className='p-4 md:p-6'>
              <p className='text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#E50012]'>
                Domaine d'intervention
              </p>
              <div className='flex items-start justify-between gap-4'>
                <h3 className='mt-2 text-base font-semibold leading-7 text-[#000000] md:text-lg'>{project.title}</h3>
                <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0E53B7]/12 text-[#0E53B7] transition group-hover:border-[#E50012]/40 group-hover:text-[#E50012]'>
                  <ArrowUpRight className='h-4 w-4' />
                </span>
              </div>

              <p className='mt-4 text-sm leading-7 text-[#4B5563]'>{project.desc}</p>

              <div className='mt-5 flex flex-wrap gap-2'>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className='rounded-full border border-[#0E53B7]/12 bg-[#f7faff] px-3 py-1 text-xs font-medium text-[#0E53B7]'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className='mt-12 rounded-[1.9rem] bg-[linear-gradient(90deg,#0E53B7_0%,#1765D4_70%,#E50012_100%)] px-5 py-6 shadow-[0_24px_55px_-36px_rgba(14,83,183,0.35)] md:flex md:items-center md:justify-between md:px-8'>
        <div>
          <p className='text-xl font-semibold text-white'>Pret a donner un nouvel elan a votre activite ?</p>
          <p className='mt-2 text-sm text-white/85'>
            Parlons-en et construisons ensemble la solution qui vous correspond.
          </p>
        </div>
        <a
          href='#contact'
          className='mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0E53B7] transition hover:text-[#E50012] sm:w-auto md:mt-0'
        >
          Discutons de votre projet
        </a>
      </div>
    </section>
  )
}

export default Projects
