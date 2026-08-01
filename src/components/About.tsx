import { CheckCircle2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const items = [
  "EQUILIBRE, c'est bien plus qu'une agence de communication digitale.",
  "C'est une equipe unie, portee par un concept fort et une vision claire de l'accompagnement digital.",
  "Nous agissons comme un partenaire de confiance pour aider chaque client a transformer ses idees en projets ambitieux, coherents et performants.",
]

const strengths = [
  { label: 'Communication 360°', value: '95%' },
  { label: 'Marketing numerique', value: '90%' },
  { label: 'Technologies web', value: '85%' },
]

const About = () => {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`eq-card rounded-[1.75rem] p-6 shadow-[0_24px_60px_-40px_rgba(14,83,183,0.18)] md:p-8 ${
        inView ? 'anim-fade-up' : 'opacity-0'
      }`}
    >
      <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[#E50012]'>A propos</p>
      <div className='mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start'>
        <div>
          <h2 className='max-w-[14ch] text-3xl font-semibold leading-[1.1] text-[#000000] md:text-4xl'>
            Une equipe unie, un concept fort, vous avez EQUILIBRE.
          </h2>
          <p className='mt-4 max-w-md text-sm leading-7 text-[#4B5563]'>
            EQUILIBRE accompagne ses clients avec une approche humaine, strategique
            et technique pour construire une presence digitale forte et durable.
          </p>
        </div>
        <div className='grid gap-4'>
          {items.map((item) => (
            <div
              key={item}
              className='eq-outline-card rounded-[1.3rem] px-5 py-5 text-sm leading-7 text-[#4B5563] transition hover:border-[#0E53B7]/24 hover:bg-[#f8fbff]'
            >
              <div className='flex items-start gap-3'>
                <CheckCircle2 className='mt-1 h-4 w-4 shrink-0 text-[#0E53B7]' />
                <p>{item}</p>
              </div>
            </div>
          ))}

          <div className='grid gap-4 pt-2 md:grid-cols-3'>
            {strengths.map((item) => (
              <div
                key={item.label}
                className='rounded-[1.3rem] border border-[#0E53B7]/12 bg-[#f9fbff] px-5 py-5 backdrop-blur-md'
              >
                <p className='text-sm font-medium text-[#4B5563]'>{item.label}</p>
                <p className='mt-3 text-3xl font-semibold text-[#000000]'>{item.value}</p>
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
    </section>
  )
}

export default About
