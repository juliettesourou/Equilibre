import Title from './Title'
import { useInView } from '../hooks/useInView'
import { BriefcaseBusiness, CalendarRange, Smile, Users } from 'lucide-react'

const metrics = [
  { icon: CalendarRange, value: '3', label: "Annees d'experience" },
  { icon: Users, value: '10', label: "Membres de l'equipe" },
  { icon: Smile, value: '100%', label: 'Clients satisfaits' },
  { icon: BriefcaseBusiness, value: '47', label: 'Projets livres' },
]

const Experiences = () => {
  const [ref, inView] = useInView()

  return (
    <section>
      <div
        ref={ref}
        className={`eq-card grid gap-4 rounded-[1.6rem] p-5 shadow-[0_22px_46px_-34px_rgba(14,83,183,0.18)] sm:grid-cols-2 xl:grid-cols-4 ${
          inView ? 'anim-fade-up' : 'opacity-0'
        }`}
      >
        {metrics.map(({ icon: Icon, value, label }) => (
          <article
            key={`${value}-${label}`}
            className='eq-outline-card rounded-[1.2rem] px-5 py-4'
          >
            <div className='flex items-center gap-4'>
              <span className='flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(14,83,183,0.14)_0%,rgba(229,0,18,0.08)_100%)] text-[#0E53B7]'>
                <Icon className='h-5 w-5' />
              </span>
              <div>
                <p className='text-2xl font-semibold text-[#000000]'>{value}</p>
                <p className='text-sm text-[#4B5563]'>{label}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className='sr-only'>
        <Title
          title='Indicateurs Equilibre'
          eyebrow='Confiance'
          subtitle='Indicateurs de confiance et de support.'
        />
      </div>
    </section>
  )
}

export default Experiences
