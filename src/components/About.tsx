import { CheckCircle2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import Title from './Title'

const items = [
  "EQUILIBRE, c'est bien plus qu'une agence de communication digitale.",
  "C'est une équipe unie, portée par un concept fort et une vision claire de l'accompagnement digital.",
  "Nous agissons comme un partenaire de confiance pour aider chaque client à transformer ses idées en projets ambitieux, cohérents et performants.",
]

const strengths = [
  { label: 'Communication 360°', value: '95%' },
  { label: 'Marketing numérique', value: '90%' },
  { label: 'Technologies web', value: '85%' },
]

const About = () => {
  const [ref, inView] = useInView()

  return (
    <section>
      <Title
        title='Notre agence'
        eyebrow='À propos'
        subtitle="Découvrez l'esprit d'Equilibre, notre manière d'accompagner les entreprises et les forces qui structurent notre approche."
      />

      <div
        ref={ref}
        className={`eq-card overflow-hidden rounded-[1.75rem] p-4 shadow-[0_24px_60px_-40px_rgba(14,83,183,0.18)] sm:p-5 md:p-8 ${
          inView ? 'anim-fade-up' : 'opacity-0'
        }`}
      >
        <div className='grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start'>
          <div className='min-w-0 text-center lg:text-left'>
            <h2 className='mx-auto max-w-[14ch] text-[2.1rem] font-semibold leading-[1.1] text-[#000000] sm:text-3xl md:text-4xl lg:mx-0'>
              Une équipe unie, un concept fort : vous avez EQUILIBRE.
            </h2>
            <p className='mx-auto mt-4 max-w-md text-sm leading-7 text-[#4B5563] lg:mx-0'>
              EQUILIBRE accompagne ses clients avec une approche humaine, stratégique
              et technique pour construire une présence digitale forte et durable.
            </p>
          </div>
          <div className='grid min-w-0 gap-4'>
            {items.map((item) => (
              <div
                key={item}
                className='eq-outline-card min-w-0 rounded-[1.3rem] px-4 py-4 text-sm leading-7 text-[#4B5563] transition hover:border-[#0E53B7]/24 hover:bg-[#f8fbff] sm:px-5 sm:py-5'
              >
                <div className='flex min-w-0 items-start gap-3'>
                  <CheckCircle2 className='mt-1 h-4 w-4 shrink-0 text-[#0E53B7]' />
                  <p className='min-w-0 break-words'>{item}</p>
                </div>
              </div>
            ))}

            <div className='grid gap-4 pt-2 md:grid-cols-3'>
              {strengths.map((item) => (
                <div
                  key={item.label}
                  className='min-w-0 rounded-[1.3rem] border border-[#0E53B7]/12 bg-[#f9fbff] px-4 py-4 backdrop-blur-md sm:px-5 sm:py-5'
                >
                  <p className='break-words text-sm font-medium text-[#4B5563]'>{item.label}</p>
                  <p className='mt-3 text-[2rem] font-semibold text-[#000000] sm:text-3xl'>{item.value}</p>
                  <div className='mt-4 h-2 w-full rounded-full bg-[#dbeafe]'>
                    <div
                      className='h-2 rounded-full bg-[linear-gradient(90deg,#0E53B7_0%,#1765D4_72%,#E50012_100%)]'
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
